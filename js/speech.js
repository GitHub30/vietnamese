/* Web Speech API のラッパー（読み上げ / 音声認識） */
window.Speech = (function () {
  'use strict';

  var synth = window.speechSynthesis || null;
  var voices = [];
  var preferredVoiceURI = null;
  var onVoicesChanged = null;

  function loadVoices() {
    if (!synth) return;
    voices = synth.getVoices() || [];
    if (onVoicesChanged) onVoicesChanged(vietnameseVoices());
  }
  if (synth) {
    loadVoices();
    synth.addEventListener('voiceschanged', loadVoices);
    // 一部ブラウザは初回取得が遅れるため保険
    setTimeout(loadVoices, 400);
    setTimeout(loadVoices, 1500);
  }

  function vietnameseVoices() {
    return voices.filter(function (v) { return /^vi(-|_|$)/i.test(v.lang); });
  }

  function pickVoice() {
    var vi = vietnameseVoices();
    if (!vi.length) return null;
    if (preferredVoiceURI) {
      for (var i = 0; i < vi.length; i++) if (vi[i].voiceURI === preferredVoiceURI) return vi[i];
    }
    return vi[0];
  }

  /** テキストを1回読み上げる。Promise は読み上げ終了で解決 */
  function speak(text, rate) {
    return new Promise(function (resolve) {
      if (!synth) return resolve(false);
      try {
        synth.cancel();
        var u = new SpeechSynthesisUtterance(text);
        var v = pickVoice();
        if (v) u.voice = v;
        u.lang = v ? v.lang : 'vi-VN';
        u.rate = rate || 1;
        u.pitch = 1;
        var done = false;
        var finish = function () { if (!done) { done = true; resolve(true); } };
        u.onend = finish;
        u.onerror = finish;
        // 保険: 想定時間を過ぎても end が来ない環境がある
        setTimeout(finish, Math.max(4000, (text.length / (u.rate * 9)) * 1000 + 3000));
        synth.speak(u);
      } catch (e) { resolve(false); }
    });
  }

  function cancel() { if (synth) { try { synth.cancel(); } catch (e) {} } }

  function pause(ms) { return new Promise(function (r) { setTimeout(r, ms); }); }

  /* ---------- 音声認識 ---------- */
  var SR = window.SpeechRecognition || window.webkitSpeechRecognition || null;
  var rec = null, listening = false;

  function createRecognizer(handlers) {
    if (!SR) return null;
    var r = new SR();
    r.lang = 'vi-VN';
    r.interimResults = true;
    r.continuous = false;
    r.maxAlternatives = 4;

    r.onstart = function () { listening = true; handlers.onstart && handlers.onstart(); };
    r.onend = function () { listening = false; handlers.onend && handlers.onend(); };
    r.onerror = function (e) { listening = false; handlers.onerror && handlers.onerror(e.error || 'error'); };
    r.onresult = function (e) {
      var interim = '', finals = [];
      for (var i = e.resultIndex; i < e.results.length; i++) {
        var res = e.results[i];
        if (res.isFinal) {
          for (var j = 0; j < res.length; j++) finals.push(res[j].transcript);
        } else {
          interim += res[0].transcript;
        }
      }
      if (interim) handlers.oninterim && handlers.oninterim(interim);
      if (finals.length) handlers.onfinal && handlers.onfinal(finals);
    };
    return r;
  }

  function listen(handlers) {
    if (!SR) { handlers.onerror && handlers.onerror('unsupported'); return false; }
    stopListening();
    rec = createRecognizer(handlers);
    try { rec.start(); return true; }
    catch (e) { handlers.onerror && handlers.onerror('start-failed'); return false; }
  }

  function stopListening() {
    if (rec) {
      try { rec.onend = null; rec.onerror = null; rec.onresult = null; rec.abort(); } catch (e) {}
      rec = null;
    }
    listening = false;
  }

  return {
    speak: speak,
    cancel: cancel,
    pause: pause,
    listen: listen,
    stopListening: stopListening,
    isListening: function () { return listening; },
    ttsSupported: !!synth,
    srSupported: !!SR,
    vietnameseVoices: vietnameseVoices,
    setPreferredVoice: function (uri) { preferredVoiceURI = uri; },
    onVoicesChanged: function (cb) { onVoicesChanged = cb; cb(vietnameseVoices()); }
  };
})();
