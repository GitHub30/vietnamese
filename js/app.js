/* アプリ本体：出題 → TELEXヒント → 遅延表示 → 2回読み上げ → 音声認識 → 入力判定 */
(function () {
  'use strict';

  var $ = function (sel) { return document.querySelector(sel); };

  var el = {
    art: $('#artScene'), artCaption: $('#artCaption'),
    recall: $('#recall'), recallCount: $('#recallCount'), ringFg: $('#ringFg'),
    phrase: $('#phrase'),
    answer: $('#answer'), inputStatus: $('#inputStatus'), mic: $('#btnMic'),
    telexHint: $('#telexHint'), telexSeq: $('#telexSeq'),
    ja: $('#ja'), words: $('#words'), note: $('#note'), breakdown: $('#breakdown'),
    toasts: $('#toasts'), card: $('#card'),
    progressBar: $('#progressBar'),
    settings: $('#settings')
  };

  var DEFAULTS = {
    delay: 5,          // フレーズ表示までの秒数（アクティブリコール）
    rate1: 0.95,       // 1回目の読み上げ速度
    rate2: 0.6,        // 2回目（ゆっくり）
    autoSpeak: true,
    autoListen: true,
    voiceAdvance: true,
    shuffle: true,
    telex: true,       // UniKey が無くても打てるよう TELEX を自動変換する
    voiceURI: ''
  };

  var settings = load();
  var state = {
    queue: [], idx: 0, current: null,
    revealed: false, solved: 0, perfect: 0, missed: false, hintShown: false,
    timers: [], raf: 0, busy: false, voiceTries: 0,
    raw: '',           // TELEX 変換前の打鍵列
    hintKeys: ''       // ヒントに出しているフレーズ全体の打鍵列
  };

  /* ---------------- 設定の保存 ---------------- */
  function load() {
    var s = {};
    try { s = JSON.parse(localStorage.getItem('vndrill.settings') || '{}'); } catch (e) {}
    var out = {};
    for (var k in DEFAULTS) out[k] = (s && s[k] !== undefined) ? s[k] : DEFAULTS[k];
    return out;
  }
  function save() {
    try { localStorage.setItem('vndrill.settings', JSON.stringify(settings)); } catch (e) {}
  }

  /* ---------------- toast ---------------- */
  function toast(opts) {
    var t = document.createElement('div');
    t.className = 'toast toast-' + (opts.kind || 'info');
    var html = '<div class="toast-head"><span class="toast-icon">' + (opts.icon || '💡') +
               '</span><span class="toast-title">' + esc(opts.title || '') + '</span></div>';
    if (opts.html) html += '<div class="toast-body">' + opts.html + '</div>';
    else if (opts.body) html += '<div class="toast-body">' + esc(opts.body) + '</div>';
    t.innerHTML = html;
    el.toasts.appendChild(t);
    var life = opts.duration || 4000;
    setTimeout(function () {
      t.classList.add('out');
      setTimeout(function () { if (t.parentNode) t.parentNode.removeChild(t); }, 400);
    }, life);
    return t;
  }

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  /* ---------------- タイマー ---------------- */
  function later(fn, ms) { var id = setTimeout(fn, ms); state.timers.push(id); return id; }
  function clearTimers() {
    state.timers.forEach(clearTimeout);
    state.timers = [];
    if (state.raf) cancelAnimationFrame(state.raf);
    state.raf = 0;
  }

  /* ---------------- 出題キュー ---------------- */
  function buildQueue() {
    var q = window.PHRASES.slice();
    if (settings.shuffle) {
      for (var i = q.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = q[i]; q[i] = q[j]; q[j] = tmp;
      }
    }
    state.queue = q;
    state.idx = 0;
  }

  /* ---------------- 描画 ---------------- */
  function renderCard(p) {
    // イメージ画像
    el.art.style.setProperty('--c1', p.art.colors[0]);
    el.art.style.setProperty('--c2', p.art.colors[1]);
    el.art.innerHTML =
      '<span class="art-sub art-sub-a">' + p.art.sub[0] + '</span>' +
      '<span class="art-main">' + p.art.main + '</span>' +
      '<span class="art-sub art-sub-b">' + p.art.sub[1] + '</span>';
    el.artCaption.textContent = p.art.caption;

    // 日本語訳
    el.ja.textContent = p.ja;

    // 品詞分解
    el.words.innerHTML = p.words.map(function (w) {
      return '<li class="word">' +
        '<span class="word-vi">' + esc(w.w) + '</span>' +
        '<span class="word-pos">' + esc(w.pos) + '</span>' +
        '<span class="word-ja">' + esc(w.ja) + '</span>' +
        (w.note ? '<span class="word-note">' + esc(w.note) + '</span>' : '') +
        '</li>';
    }).join('');
    el.note.textContent = p.note;

    // フレーズは伏せる
    el.phrase.hidden = true;
    el.phrase.textContent = '';
    el.phrase.classList.remove('correct');
    el.breakdown.classList.add('blurred');
    hideTelexHint();
    el.recall.hidden = false;
  }

  function renderStats() {
    var total = state.queue.length;
    el.progressBar.style.width = (total ? (state.solved / total * 100) : 0) + '%';
  }

  function accuracyText() {
    return state.solved ? Math.round(state.perfect / state.solved * 100) + '%' : '–';
  }

  /* ---------------- カウントダウン ---------------- */
  var RING = 2 * Math.PI * 20;
  function startCountdown(ms, onDone) {
    el.ringFg.style.strokeDasharray = RING;
    var t0 = performance.now();
    function frame(now) {
      var passed = now - t0;
      var ratio = ms > 0 ? Math.min(1, passed / ms) : 1;
      el.ringFg.style.strokeDashoffset = (RING * ratio).toFixed(2);
      el.recallCount.textContent = Math.max(0, Math.ceil((ms - passed) / 1000));
      if (ratio >= 1) { onDone(); return; }
      state.raf = requestAnimationFrame(frame);
    }
    state.raf = requestAnimationFrame(frame);
  }

  /* ---------------- 1問の進行 ---------------- */
  function nextCard() {
    clearTimers();
    Speech.cancel();
    Speech.stopListening();
    setMic(false);

    if (state.idx >= state.queue.length) return finish();

    var p = state.queue[state.idx];
    state.current = p;
    state.revealed = false;
    state.missed = false;
    state.hintShown = false;
    state.voiceTries = 0;
    state.busy = false;

    setAnswer('');
    el.answer.disabled = false;
    el.answer.focus();
    setStatus('', '');
    renderCard(p);
    renderStats();

    var delayMs = settings.delay * 1000;
    var hasMarks = Telex.hasDiacritics(p.vi);
    var revealAt = hasMarks ? Math.max(delayMs, 1800) : delayMs;

    // ダイアクリティカルマークがある場合は「表示の直前」に TELEX ヒントを出す
    if (hasMarks) later(function () { showTelexHint(p.vi); }, Math.max(0, revealAt - 1600));

    if (revealAt <= 0) reveal();
    else startCountdown(revealAt, reveal);
  }

  /** 入力欄の下にフレーズ全体の打鍵列を出す（次のフレーズに変わるまで出しっぱなし） */
  function showTelexHint(vi) {
    state.hintShown = true;
    state.hintKeys = Telex.typingKeys(vi);
    el.telexHint.hidden = false;
    renderTelexHint();
  }

  /** 入力済みのところまでハイライトする */
  function renderTelexHint() {
    if (el.telexHint.hidden || !state.hintKeys) return;
    var typed = Telex.typingKeys(el.answer.value);
    var n = Telex.commonPrefixLength(typed, state.hintKeys);
    el.telexSeq.innerHTML = '<span class="done">' + esc(state.hintKeys.slice(0, n)) + '</span>' +
                            '<span class="rest">' + esc(state.hintKeys.slice(n)) + '</span>';
  }

  function hideTelexHint() {
    el.telexHint.hidden = true;
    el.telexSeq.innerHTML = '';
    state.hintKeys = '';
  }

  function reveal() {
    if (state.revealed || !state.current) return;
    state.revealed = true;
    clearTimers();

    // 早送りで表示した場合もヒントは必ず出す
    if (!state.hintShown && Telex.hasDiacritics(state.current.vi)) showTelexHint(state.current.vi);

    el.recall.hidden = true;
    el.phrase.hidden = false;
    el.breakdown.classList.remove('blurred');
    renderDiff();
    el.card.classList.add('revealed');
    later(function () { el.card.classList.remove('revealed'); }, 600);

    if (settings.autoSpeak) speakTwice().then(afterSpeak);
    else afterSpeak();
  }

  function speakTwice() {
    var vi = state.current.vi;
    setStatus('speaking', '🔊 1回目（ふつうの速さ）');
    return Speech.speak(vi, settings.rate1)
      .then(function () { return Speech.pause(450); })
      .then(function () {
        if (!state.current || state.current.vi !== vi) return false;
        setStatus('speaking', '🐢 2回目（ゆっくり）');
        return Speech.speak(vi, settings.rate2);
      })
      .then(function () { return Speech.pause(250); });
  }

  function afterSpeak() {
    if (!state.current) return;
    if (settings.autoListen && Speech.srSupported) startListening();
    else setStatus('', 'キーボードで入力するか 🎤 を押して発音してみよう');
  }

  /* ---------------- 音声認識 ---------------- */
  function setMic(on) {
    el.mic.classList.toggle('on', !!on);
    el.mic.textContent = on ? '🔴' : '🎤';
  }

  function startListening() {
    if (!Speech.srSupported) {
      toast({ kind: 'error', icon: '🚫', title: '音声認識に非対応', body: 'Chrome / Edge をお使いください。' });
      return;
    }
    Speech.cancel();
    Speech.listen({
      onstart: function () {
        if (state.busy) { Speech.stopListening(); return; } // 開始前に正解していたら何もしない
        setMic(true);
        setStatus('listening', '🎙️ 聞いています… ベトナム語で話してみてください');
      },
      oninterim: function (text) { setAnswer(text); renderDiff(); setStatus('listening', '🎙️ ' + text); },
      onfinal: function (alts) { handleVoice(alts); },
      onend: function () { setMic(false); },
      onerror: function (err) {
        setMic(false);
        if (err === 'no-speech') setStatus('', '声が聞き取れませんでした。🎤 でもう一度どうぞ');
        else if (err === 'not-allowed') toast({ kind: 'error', icon: '🎤', title: 'マイクが使えません', body: 'ブラウザのマイク許可を確認してください。' });
        else setStatus('', 'キーボード入力でも進められます');
      }
    });
  }

  function handleVoice(alts) {
    if (!state.current || state.busy || !alts.length) return;
    var target = state.current.vi;
    var exact = null, loose = null;
    alts.forEach(function (a) {
      if (!exact && Telex.normalize(a) === Telex.normalize(target)) exact = a;
      if (!loose && Telex.stripDiacritics(a) === Telex.stripDiacritics(target)) loose = a;
    });

    setAnswer(exact || loose || alts[0]);
    state.voiceTries++;

    if (exact) {
      toast({ kind: 'success', icon: '🗣️', title: '発音 OK!', body: '「' + alts[0] + '」と聞き取れました', duration: 2600 });
      if (settings.voiceAdvance) { succeed('voice'); return; }
      setStatus('ok', '発音は正解です。Enter で次へ進みます');
      return;
    }
    if (loose) {
      setStatus('warn', '綴りは合っています。声調まで意識してもう一度：🎤');
      toast({ kind: 'info', icon: '🎵', title: '惜しい！', body: '声調を意識してみましょう', duration: 3000 });
    } else {
      setStatus('warn', '「' + alts[0] + '」と聞こえました。🎤 でもう一度どうぞ');
    }
    renderDiff();
  }

  /* ---------------- TELEX 自動変換 ---------------- */
  /** 入力欄の値を差し替える（音声認識やリセットからも使う） */
  function setAnswer(text) {
    el.answer.value = text;
    state.raw = text;
  }

  /**
   * 末尾への1文字入力だけを打鍵列として積み上げ、そこから綴りを組み立て直す。
   * 貼り付け・削除・カーソル移動があったときは、その時点の表示内容を打鍵列として取り直す
   * （変換済みの文字も解釈できるので、続けて声調キーを打てる）。
   */
  function applyTelex(e) {
    var v = el.answer.value;
    // 削除・貼り付け・カーソル移動のあとは、そのときの表示を打鍵列として取り直すだけ
    if (e.inputType !== 'insertText' || !e.data || el.answer.selectionStart !== v.length) {
      state.raw = v;
      return;
    }
    // 直前の表示に足しただけなら打鍵列を伸ばす。
    // そうでなければ（選択を置き換えた等）新しい内容を打鍵列として取り直す。
    var prev = Telex.type(state.raw);
    state.raw = (v === prev + e.data) ? state.raw + e.data : v;

    var out = Telex.type(state.raw);
    if (out !== v) {
      el.answer.value = out;
      el.answer.setSelectionRange(out.length, out.length);
    }
  }

  /* ---------------- 入力判定 ---------------- */
  function isCorrect(text) {
    return !!state.current && Telex.normalize(text) === Telex.normalize(state.current.vi);
  }

  function onInput() {
    if (!state.current || state.busy) return;
    renderDiff();
    renderTelexHint();
    var v = el.answer.value;
    if (!v) { setStatus('', ''); return; }
    if (isCorrect(v)) { succeed('type'); return; }
    // 途中まで合っているか
    var t = Telex.normalize(state.current.vi), u = Telex.normalize(v);
    if (state.revealed) {
      if (t.indexOf(u) === 0) setStatus('ok', 'その調子！');
      else { state.missed = true; setStatus('warn', 'つづりを確認してみましょう'); }
    } else {
      setStatus('', '入力中… （フレーズが出る前に打ててたら最高！）');
    }
  }

  function renderDiff() {
    if (!state.revealed || !state.current) return;
    var target = state.current.vi, typed = el.answer.value, html = '';
    for (var i = 0; i < target.length; i++) {
      html += diffChar(target[i], typed[i]);
    }
    if (typed.length > target.length) html += '<span class="ng">' + esc(typed.slice(target.length)) + '</span>';
    el.phrase.innerHTML = html;
  }

  /** 1文字ぶんの色分け。声調記号だけが違うときは、その記号だけを赤くする */
  function diffChar(t, u) {
    if (u === undefined) return '<span class="pending">' + esc(t) + '</span>';
    if (u.toLowerCase() === t.toLowerCase()) return '<span class="ok">' + esc(t) + '</span>';

    var dt = Telex.splitTone(t), du = Telex.splitTone(u);
    if (dt.tone && dt.base.toLowerCase() === du.base.toLowerCase()) {
      // 結合文字だけを別要素にしても Chrome は1つのグリフに合成して単色で描くため、
      // 文字全体を赤で描いた上に「声調なしの文字」を緑で重ねて、記号だけ赤く見せる
      return '<span class="tone-ng" data-base="' + esc(dt.base) + '">' + esc(t) + '</span>';
    }
    return '<span class="ng">' + esc(t) + '</span>';
  }

  function succeed(how) {
    if (state.busy) return;
    state.busy = true;
    clearTimers();
    Speech.stopListening();
    setMic(false);

    if (!state.revealed) { state.revealed = true; el.recall.hidden = true; el.phrase.hidden = false; el.breakdown.classList.remove('blurred'); }
    el.phrase.innerHTML = esc(state.current.vi);
    el.phrase.classList.add('correct');
    el.card.classList.add('success');

    state.solved++;
    if (!state.missed) state.perfect++;
    renderStats();

    var msg = how === 'voice' ? '声で正解！' : (state.missed ? '正解！' : 'ノーミス正解！');
    setStatus('ok', '✅ ' + msg);
    toast({ kind: 'success', icon: '✅', title: msg, body: state.current.vi + ' — ' + state.current.ja, duration: 2400 });

    later(function () {
      el.phrase.classList.remove('correct');
      el.card.classList.remove('success');
      state.idx++;
      nextCard();
    }, 1100);
  }

  function skip() {
    if (!state.current || state.busy) return;
    state.missed = true;
    state.busy = true;
    clearTimers();
    Speech.stopListening(); setMic(false);
    // まだ伏せたままでも答えを見せてから次へ送る
    toast({ kind: 'info', icon: '⏭', title: 'スキップしました', body: state.current.vi + ' — ' + state.current.ja, duration: 3200 });
    later(function () {
      // 後ろに回して復習する
      state.queue.push(state.queue[state.idx]);
      state.idx++;
      nextCard();
    }, 600);
  }

  function finish() {
    state.current = null;
    el.recall.hidden = true;
    el.phrase.hidden = false;
    el.phrase.textContent = 'Hoàn thành! 🎉';
    el.ja.textContent = '全フレーズ終了！おつかれさまでした。';
    el.words.innerHTML = '';
    el.note.textContent = '正確さ ' + accuracyText() + '（' + state.perfect + ' / ' + state.solved + ' がノーミス）';
    el.breakdown.classList.remove('blurred');
    el.answer.disabled = true;
    setStatus('ok', 'もう一周する場合は ⚙️ 設定の「学習状況をリセット」からどうぞ');
    toast({ kind: 'success', icon: '🎉', title: 'Chúc mừng!', body: 'すべてのフレーズをクリアしました', duration: 6000 });
  }

  function setStatus(kind, text) {
    el.inputStatus.className = 'input-status' + (kind ? ' is-' + kind : '');
    el.inputStatus.textContent = text;
  }

  /* ---------------- イベント ---------------- */
  el.answer.addEventListener('input', function (e) {
    // 日本語などの IME 変換中は触らない
    if (settings.telex && !e.isComposing) applyTelex(e);
    onInput();
  });
  // 正解は入力した時点で自動判定されるので、Enter はスキップに割り当てる
  el.answer.addEventListener('keydown', function (e) {
    if (e.key !== 'Enter') return;
    e.preventDefault();
    skip();
  });

  $('#btnRevealNow').addEventListener('click', function () { clearTimers(); reveal(); el.answer.focus(); });
  el.mic.addEventListener('click', function () {
    if (Speech.isListening()) { Speech.stopListening(); setMic(false); setStatus('', ''); }
    else startListening();
  });

  // 入力欄の外にフォーカスがあるときも Enter でスキップできるようにする
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Enter' || e.target === el.answer) return;
    if (el.settings.open || !document.getElementById('gate').hidden) return; // 設定・起動ゲートを開いている間は無効
    e.preventDefault();
    skip();
  });

  /* ---------------- 設定ダイアログ ---------------- */
  var setDelay = $('#setDelay'), setRate1 = $('#setRate1'), setRate2 = $('#setRate2'),
      setAutoSpeak = $('#setAutoSpeak'), setAutoListen = $('#setAutoListen'),
      setVoiceAdvance = $('#setVoiceAdvance'), setShuffle = $('#setShuffle'),
      setTelex = $('#setTelex'), setVoice = $('#setVoice');

  function syncSettingsUI() {
    setDelay.value = settings.delay;
    setRate1.value = settings.rate1;
    setRate2.value = settings.rate2;
    setAutoSpeak.checked = settings.autoSpeak;
    setAutoListen.checked = settings.autoListen;
    setVoiceAdvance.checked = settings.voiceAdvance;
    setShuffle.checked = settings.shuffle;
    setTelex.checked = settings.telex;
    $('#lblDelay').textContent = settings.delay + ' 秒';
    $('#lblRate1').textContent = '×' + Number(settings.rate1).toFixed(2);
    $('#lblRate2').textContent = '×' + Number(settings.rate2).toFixed(2);
  }

  function bindRange(input, key) {
    input.addEventListener('input', function () {
      settings[key] = parseFloat(input.value);
      save(); syncSettingsUI();
    });
  }
  bindRange(setDelay, 'delay');
  bindRange(setRate1, 'rate1');
  bindRange(setRate2, 'rate2');

  [[setAutoSpeak, 'autoSpeak'], [setAutoListen, 'autoListen'], [setVoiceAdvance, 'voiceAdvance'],
   [setShuffle, 'shuffle'], [setTelex, 'telex']].forEach(function (pair) {
    pair[0].addEventListener('change', function () { settings[pair[1]] = pair[0].checked; save(); });
  });

  setVoice.addEventListener('change', function () {
    settings.voiceURI = setVoice.value;
    Speech.setPreferredVoice(settings.voiceURI);
    save();
  });

  $('#btnSettings').addEventListener('click', function () { syncSettingsUI(); el.settings.showModal(); });
  $('#btnReset').addEventListener('click', function () {
    state.solved = 0; state.perfect = 0;
    buildQueue(); renderStats(); el.settings.close(); nextCard();
  });

  Speech.onVoicesChanged(function (list) {
    setVoice.innerHTML = list.length
      ? list.map(function (v) {
          return '<option value="' + esc(v.voiceURI) + '">' + esc(v.name + '（' + v.lang + '）') + '</option>';
        }).join('')
      : '<option value="">ベトナム語の音声が見つかりません</option>';
    if (settings.voiceURI) { setVoice.value = settings.voiceURI; Speech.setPreferredVoice(settings.voiceURI); }
  });

  /* ---------------- 起動 ---------------- */
  function compatNote() {
    if (!Speech.ttsSupported) {
      toast({ kind: 'info', icon: '🔈', title: '読み上げに非対応', body: 'このブラウザは音声合成に未対応です。表示と入力で練習できます。', duration: 6000 });
    }
    if (!Speech.srSupported) {
      toast({ kind: 'info', icon: 'ℹ️', title: '音声認識について', body: 'このブラウザは音声認識に未対応です。キーボード入力で練習できます。', duration: 6000 });
    }
    setTimeout(function () {
      if (Speech.ttsSupported && !Speech.vietnameseVoices().length) {
        toast({ kind: 'info', icon: '🔈', title: 'ベトナム語の音声が未インストール', body: 'OS の音声設定で「ベトナム語」を追加すると読み上げが有効になります。', duration: 7000 });
      }
    }, 2000);
  }

  buildQueue();
  renderStats();
  renderCard(state.queue[0]);

  // 読み上げとマイクはユーザー操作の後でないと開始できないため、起動ゲートを挟む
  var gate = document.getElementById('gate');
  document.getElementById('btnStart').addEventListener('click', function () {
    gate.classList.add('hidden');
    setTimeout(function () { gate.hidden = true; }, 300);
    compatNote();
    nextCard();
  });
})();
