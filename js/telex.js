/* TELEX: ベトナム語のダイアクリティカルマークを ASCII キー列に変換するユーティリティ */
window.Telex = (function () {
  'use strict';

  // 声調記号（結合文字） -> TELEX キー
  var TONE = {
    '́': { key: 's', name: 'sắc / 鋭く上げる' },
    '̀': { key: 'f', name: 'huyền / 低く下げる' },
    '̉': { key: 'r', name: 'hỏi / 問いかけ' },
    '̃': { key: 'x', name: 'ngã / きしませる' },
    '̣': { key: 'j', name: 'nặng / 重く短く' }
  };

  // 母音を変化させる記号
  var MOD = {
    '̂': 'circumflex', // â ê ô … 同じ文字を2回打つ
    '̆': 'breve',      // ă … + w
    '̛': 'horn'        // ơ ư … + w
  };

  /** 1文字の TELEX キー列を返す。装飾がなければ null */
  function forChar(ch) {
    if (ch === 'đ') return { keys: 'dd', base: 'd', note: 'd を2回' };       // đ
    if (ch === 'Đ') return { keys: 'DD', base: 'D', note: 'D を2回' };       // Đ

    var d = ch.normalize('NFD');
    if (d.length < 2) return null;

    var base = d[0], mod = null, tone = null;
    for (var i = 1; i < d.length; i++) {
      if (TONE[d[i]]) tone = TONE[d[i]];
      else if (MOD[d[i]]) mod = MOD[d[i]];
    }
    if (!mod && !tone) return null;

    var keys = base, parts = [];
    if (mod === 'circumflex') { keys = base + base.toLowerCase(); parts.push(base.toLowerCase() + ' を2回'); }
    else if (mod) { keys = base + 'w'; parts.push('+ w'); }
    if (tone) { keys += tone.key; parts.push('+ ' + tone.key + '（' + tone.name + '）'); }

    return { keys: keys, base: base, note: parts.join(' ') };
  }

  /** 文字列にダイアクリティカルマークが含まれるか */
  function hasDiacritics(str) {
    for (var i = 0; i < str.length; i++) if (forChar(str[i])) return true;
    return false;
  }

  /** フレーズ全体を TELEX の打鍵列に変換（記号は文字の直後） */
  function sequence(str) {
    var out = '';
    for (var i = 0; i < str.length; i++) {
      var t = forChar(str[i]);
      out += t ? t.keys : str[i];
    }
    return out;
  }

  /**
   * 実際の打ち方に近い打鍵列（声調キーは語の最後にまとめる）
   * 例: 'tiếng Việt' -> 'tieengs Vieetj'
   */
  function typingKeys(str) {
    var out = '', word = '', tone = '';
    function flush() { out += word + tone; word = ''; tone = ''; }
    for (var i = 0; i < str.length; i++) {
      var c = str[i];
      if (!isWordChar(c)) { flush(); out += c; continue; }
      var t = forChar(c);
      if (!t) { word += c; continue; }
      var keys = t.keys, last = keys.charAt(keys.length - 1);
      if (keys.length > 1 && 'sfrxj'.indexOf(last) >= 0) { tone = last; keys = keys.slice(0, -1); }
      word += keys;
    }
    flush();
    return out;
  }

  /** 2つの打鍵列の一致している先頭文字数（大文字小文字は区別しない） */
  function commonPrefixLength(a, b) {
    var n = Math.min(a.length, b.length), i = 0;
    while (i < n && a.charAt(i).toLowerCase() === b.charAt(i).toLowerCase()) i++;
    return i;
  }

  /* ============================================================
   * TELEX 入力エンジン（UniKey などの IME が無くても入力できるようにする）
   * 打鍵列（ASCII）を受け取り、ダイアクリティカル付きの綴りを返す。
   * ============================================================ */

  var TONE_KEY = { s: '́', f: '̀', r: '̉', x: '̃', j: '̣' };
  var MARK_OF = { circumflex: '̂', breve: '̆', horn: '̛' };
  var VOWELS = 'aeiouy';

  function isWordChar(c) { return /[A-Za-zÀ-ɏḀ-ỿ]/.test(c); }

  /** 1文字を「基字 + 記号」に分解して内部表現にする（入力済みのベトナム語文字も受け付ける） */
  function toLetter(c) {
    var upper = c !== c.toLowerCase(), lower = c.toLowerCase();
    if (lower === 'đ') return { ch: 'd', dd: true, mark: null, tone: null, upper: upper };
    var d = lower.normalize('NFD'), mark = null, tone = null;
    for (var i = 1; i < d.length; i++) {
      if (d[i] === '̂') mark = 'circumflex';
      else if (d[i] === '̆') mark = 'breve';
      else if (d[i] === '̛') mark = 'horn';
      else tone = d[i];
    }
    return { ch: d[0], dd: false, mark: mark, tone: tone, upper: upper };
  }

  function hasVowel(letters) {
    for (var i = 0; i < letters.length; i++) if (!letters[i].dd && VOWELS.indexOf(letters[i].ch) >= 0) return true;
    return false;
  }

  /** 声調記号を載せる母音の位置を決める */
  function toneIndex(letters) {
    var v = [];
    for (var i = 0; i < letters.length; i++) {
      if (!letters[i].dd && VOWELS.indexOf(letters[i].ch) >= 0) v.push(i);
    }
    if (!v.length) return -1;

    // qu- / gi- の u・i は母音ではなく子音の一部として扱う
    if (v.length > 1 && v[0] === 1 && letters[0] &&
        ((letters[0].ch === 'q' && letters[1].ch === 'u') || (letters[0].ch === 'g' && letters[1].ch === 'i'))) {
      v.shift();
    }
    if (v.length === 1) return v[0];

    // 記号付きの母音があればそこに載せる（ươ は後ろの ơ）
    for (var j = v.length - 1; j >= 0; j--) if (letters[v[j]].mark) return v[j];

    if (v.length >= 3) return v[1];
    var hasFinalConsonant = v[v.length - 1] < letters.length - 1;
    return hasFinalConsonant ? v[1] : v[0];
  }

  /** 1語ぶんの打鍵列を変換する */
  function convertWord(raw) {
    if (!raw) return '';
    var letters = [], tone = null;

    for (var i = 0; i < raw.length; i++) {
      var c = raw[i], lower = c.toLowerCase();
      var last = letters[letters.length - 1];
      var prev = letters[letters.length - 2];

      // 声調キー（母音が出てからのみ有効。同じキーを重ねると解除して文字に戻す）
      if (TONE_KEY[lower] && letters.length && hasVowel(letters)) {
        if (tone === TONE_KEY[lower]) { tone = null; letters.push(toLetter(c)); }
        else tone = TONE_KEY[lower];
        continue;
      }

      // w: ă ơ ư（uo + w で ươ）
      if (lower === 'w' && last) {
        if (last.mark === 'horn' || last.mark === 'breve') {
          if (last.mark === 'horn' && last.ch === 'o' && prev && prev.ch === 'u' && prev.mark === 'horn') prev.mark = null;
          last.mark = null; letters.push(toLetter(c)); continue;
        }
        if (last.ch === 'o' && prev && prev.ch === 'u' && !prev.mark) { prev.mark = 'horn'; last.mark = 'horn'; continue; }
        if (last.ch === 'a') { last.mark = 'breve'; continue; }
        if (last.ch === 'o' || last.ch === 'u') { last.mark = 'horn'; continue; }
      }

      // 同じ文字の連打: aa ee oo → â ê ô / dd → đ
      if (last && last.ch === lower && !last.tone) {
        if (!last.dd && (lower === 'a' || lower === 'e' || lower === 'o')) {
          if (last.mark === 'circumflex') { last.mark = null; letters.push(toLetter(c)); }
          else last.mark = 'circumflex';
          continue;
        }
        if (lower === 'd') {
          if (last.dd) { last.dd = false; letters.push(toLetter(c)); }
          else last.dd = true;
          continue;
        }
      }

      var letter = toLetter(c);
      letters.push(letter);
      if (letter.tone) { tone = letter.tone; letter.tone = null; } // 入力済みの声調は語の声調として引き継ぐ
    }

    var idx = toneIndex(letters), out = '';
    for (var k = 0; k < letters.length; k++) {
      var L = letters[k], s = L.dd ? 'đ' : L.ch;
      if (L.mark) s += MARK_OF[L.mark];
      if (tone && k === idx) s += tone;
      s = s.normalize('NFC');
      if (L.upper) s = s.toUpperCase();
      out += s;
    }
    return out;
  }

  /** 打鍵列全体を変換する（語ごとに処理し、記号や空白はそのまま通す） */
  function type(raw) {
    var out = '', buf = '';
    for (var i = 0; i < raw.length; i++) {
      var c = raw[i];
      if (isWordChar(c)) { buf += c; continue; }
      out += convertWord(buf) + c;
      buf = '';
    }
    return out + convertWord(buf);
  }

  /** 比較用の正規化（大文字小文字・句読点・連続スペースを無視。声調記号は残す） */
  function normalize(str) {
    return (str || '')
      .normalize('NFC')
      .toLowerCase()
      .replace(/[.,!?;:"'“”‘’…()\[\]]/g, '')
      .replace(/\s+/g, ' ')
      .trim();
  }

  /** 声調・記号をすべて外した素の綴り（発音判定のゆるい比較用） */
  function stripDiacritics(str) {
    return normalize(str)
      .replace(/đ/g, 'd')
      .normalize('NFD')
      .replace(/[̀-ͯ]/g, '');
  }

  return {
    forChar: forChar,
    hasDiacritics: hasDiacritics,
    sequence: sequence,
    typingKeys: typingKeys,
    commonPrefixLength: commonPrefixLength,
    type: type,
    normalize: normalize,
    stripDiacritics: stripDiacritics
  };
})();
