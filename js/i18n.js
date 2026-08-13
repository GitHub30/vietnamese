/* 多言語対応のランタイム
 * 言語パックは js/lang/<code>.js に置き、I18N.register() で登録する。
 * フレーズの訳はベトナム語のフレーズそのものをキーにして引く。
 */
window.I18N = (function () {
  'use strict';

  var LANGS = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' },
    { code: 'pt', name: 'Português' },
    { code: 'fr', name: 'Français' },
    { code: 'de', name: 'Deutsch' },
    { code: 'ja', name: '日本語' },
    { code: 'id', name: 'Bahasa Indonesia' },
    { code: 'ko', name: '한국어' },
    { code: 'th', name: 'ไทย' },
    { code: 'ar', name: 'العربية' },
    { code: 'zh', name: '中文' }
  ];
  var FALLBACK = 'en';
  var packs = {}, current = FALLBACK, loading = {};

  function has(code) {
    for (var i = 0; i < LANGS.length; i++) if (LANGS[i].code === code) return true;
    return false;
  }

  /** 言語パックの登録（各 js/lang/<code>.js から呼ばれる） */
  function register(code, pack) { packs[code] = pack; }

  /** ブラウザの言語設定から対応言語を選ぶ */
  function detect() {
    var list = navigator.languages && navigator.languages.length
      ? navigator.languages
      : [navigator.language || navigator.userLanguage || FALLBACK];
    for (var i = 0; i < list.length; i++) {
      var code = String(list[i]).toLowerCase().split('-')[0];
      if (has(code)) return code;
    }
    return FALLBACK;
  }

  function load(code, done) {
    if (packs[code]) return done(true);
    if (!has(code)) return done(false);
    if (loading[code]) { loading[code].push(done); return; }
    loading[code] = [done];
    var s = document.createElement('script');
    s.src = 'js/lang/' + code + '.js';
    s.onload = function () { finish(code, !!packs[code]); };
    s.onerror = function () { finish(code, false); };
    document.head.appendChild(s);
  }

  function finish(code, ok) {
    var waiting = loading[code] || [];
    delete loading[code];
    for (var i = 0; i < waiting.length; i++) waiting[i](ok);
  }

  /** 言語を切り替える（フォールバック用の英語も一緒に読み込む） */
  function use(code, done) {
    if (!has(code)) code = FALLBACK;
    load(FALLBACK, function () {
      load(code, function (ok) {
        current = ok ? code : FALLBACK;
        document.documentElement.lang = current;
        document.documentElement.dir = dir();
        done && done(current);
      });
    });
  }

  function pack(code) { return packs[code] || packs[FALLBACK] || { ui: {}, pos: {}, phrases: {} }; }
  function dir() { return current === 'ar' ? 'rtl' : 'ltr'; }

  /** UI 文言。{name} を vars で差し替える */
  function t(key, vars) {
    var p = pack(current), f = pack(FALLBACK);
    var s = (p.ui && p.ui[key] !== undefined) ? p.ui[key] : (f.ui && f.ui[key]);
    if (s === undefined) return key;
    if (vars) {
      s = s.replace(/\{(\w+)\}/g, function (m, k) { return vars[k] !== undefined ? vars[k] : m; });
    }
    return s;
  }

  /** 品詞ラベル */
  function pos(key) {
    var p = pack(current), f = pack(FALLBACK);
    return (p.pos && p.pos[key]) || (f.pos && f.pos[key]) || key;
  }

  /**
   * フレーズの訳。ベトナム語のフレーズがキー。
   * { t: 訳, caption: 場面, note: 説明, w: { 語: [意味, 補足] } }
   */
  function phrase(vi) {
    var p = pack(current), f = pack(FALLBACK);
    var e = (p.phrases && p.phrases[vi]) || {};
    var fb = (f.phrases && f.phrases[vi]) || {};
    return {
      t: e.t || fb.t || '',
      caption: e.caption || fb.caption || '',
      note: e.note || fb.note || '',
      w: e.w || fb.w || {}
    };
  }

  /** 語の意味と補足を [意味, 補足] で返す */
  function word(vi, w) {
    var entry = phrase(vi).w[w];
    if (!entry) {
      var fb = (pack(FALLBACK).phrases[vi] || {}).w || {};
      entry = fb[w];
    }
    return entry || ['', ''];
  }

  /** data-i18n / data-i18n-attr が付いた要素へ文言を流し込む */
  function apply(root) {
    var scope = root || document;
    var nodes = scope.querySelectorAll('[data-i18n]');
    for (var i = 0; i < nodes.length; i++) nodes[i].textContent = t(nodes[i].getAttribute('data-i18n'));

    var attrNodes = scope.querySelectorAll('[data-i18n-attr]');
    for (var j = 0; j < attrNodes.length; j++) {
      var el = attrNodes[j];
      var pairs = el.getAttribute('data-i18n-attr').split(',');
      for (var k = 0; k < pairs.length; k++) {
        var pair = pairs[k].split(':');
        if (pair.length === 2) el.setAttribute(pair[0].trim(), t(pair[1].trim()));
      }
    }
    if (document.title !== undefined) document.title = t('title');
  }

  return {
    LANGS: LANGS,
    register: register,
    detect: detect,
    use: use,
    current: function () { return current; },
    dir: dir,
    t: t,
    pos: pos,
    phrase: phrase,
    word: word,
    apply: apply
  };
})();
