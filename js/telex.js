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

  /** 文字列に出てくる装飾文字を重複なしで返す [{char, keys, note}] */
  function hints(str) {
    var seen = Object.create(null), out = [];
    for (var i = 0; i < str.length; i++) {
      var ch = str[i];
      if (seen[ch]) continue;
      var t = forChar(ch);
      if (!t) continue;
      seen[ch] = true;
      out.push({ char: ch, keys: t.keys, note: t.note });
    }
    return out;
  }

  /** フレーズ全体を TELEX の打鍵列に変換 */
  function sequence(str) {
    var out = '';
    for (var i = 0; i < str.length; i++) {
      var t = forChar(str[i]);
      out += t ? t.keys : str[i];
    }
    return out;
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
    hints: hints,
    sequence: sequence,
    normalize: normalize,
    stripDiacritics: stripDiacritics
  };
})();
