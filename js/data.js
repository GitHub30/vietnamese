/* 練習フレーズ（言語に依存しないデータ）
 * vi    : ベトナム語フレーズ。翻訳データのキーであり、画像 URL の元にもなる
 * words : 品詞分解 [{ w: 語, pos: 品詞キー }]
 * 訳と説明は js/lang/<言語>.js 側に vi をキーにして持つ
 */

/** 'Chúc ngủ ngon!' -> 'chuc-ngu-ngon' */
window.slugify = function (text) {
  return String(text)
    .normalize('NFD')
    .replace(/\p{M}/gu, '')
    .replace(/đ/gi, 'd')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
};

/** フレーズのイメージ画像 URL（'Chúc ngủ ngon!' -> .../chuc-ngu-ngon.jpg） */
window.PHRASE_IMAGE_BASE = 'https://ik.imagekit.io/ww/';
window.phraseImage = function (vi) {
  return window.PHRASE_IMAGE_BASE + window.slugify(vi) + '.jpg';
};
window.PHRASES = [
  {
    vi: 'Xin chào!',
    words: [
      { w: 'Xin', pos: 'polite' },
      { w: 'chào', pos: 'verb' }
    ]
  },
  {
    vi: 'Cảm ơn bạn nhiều.',
    words: [
      { w: 'Cảm ơn', pos: 'verb' },
      { w: 'bạn', pos: 'pronoun' },
      { w: 'nhiều', pos: 'adverb' }
    ]
  },
  {
    vi: 'Tôi tên là Nam.',
    words: [
      { w: 'Tôi', pos: 'pronoun' },
      { w: 'tên', pos: 'noun' },
      { w: 'là', pos: 'copula' },
      { w: 'Nam', pos: 'proper' }
    ]
  },
  {
    vi: 'Bạn khỏe không?',
    words: [
      { w: 'Bạn', pos: 'pronoun' },
      { w: 'khỏe', pos: 'adjective' },
      { w: 'không', pos: 'question' }
    ]
  },
  {
    vi: 'Tôi là người Nhật.',
    words: [
      { w: 'Tôi', pos: 'pronoun' },
      { w: 'là', pos: 'copula' },
      { w: 'người', pos: 'noun' },
      { w: 'Nhật', pos: 'proper' }
    ]
  },
  {
    vi: 'Rất vui được gặp bạn.',
    words: [
      { w: 'Rất', pos: 'adverb' },
      { w: 'vui', pos: 'adjective' },
      { w: 'được', pos: 'auxiliary' },
      { w: 'gặp', pos: 'verb' },
      { w: 'bạn', pos: 'pronoun' }
    ]
  },
  {
    vi: 'Cho tôi một ly cà phê sữa đá.',
    words: [
      { w: 'Cho', pos: 'verb' },
      { w: 'tôi', pos: 'pronoun' },
      { w: 'một', pos: 'numeral' },
      { w: 'ly', pos: 'classifier' },
      { w: 'cà phê', pos: 'noun' },
      { w: 'sữa', pos: 'noun' },
      { w: 'đá', pos: 'noun' }
    ]
  },
  {
    vi: 'Cái này giá bao nhiêu?',
    words: [
      { w: 'Cái', pos: 'classifier' },
      { w: 'này', pos: 'demonstrative' },
      { w: 'giá', pos: 'noun' },
      { w: 'bao nhiêu', pos: 'question' }
    ]
  },
  {
    vi: 'Tôi không hiểu.',
    words: [
      { w: 'Tôi', pos: 'pronoun' },
      { w: 'không', pos: 'negator' },
      { w: 'hiểu', pos: 'verb' }
    ]
  },
  {
    vi: 'Xin lỗi, nhà vệ sinh ở đâu?',
    words: [
      { w: 'Xin lỗi', pos: 'idiom' },
      { w: 'nhà vệ sinh', pos: 'noun' },
      { w: 'ở', pos: 'verbPrep' },
      { w: 'đâu', pos: 'question' }
    ]
  },
  {
    vi: 'Món này rất ngon.',
    words: [
      { w: 'Món', pos: 'noun' },
      { w: 'này', pos: 'demonstrative' },
      { w: 'rất', pos: 'adverb' },
      { w: 'ngon', pos: 'adjective' }
    ]
  },
  {
    vi: 'Hẹn gặp lại nhé!',
    words: [
      { w: 'Hẹn', pos: 'verb' },
      { w: 'gặp', pos: 'verb' },
      { w: 'lại', pos: 'adverb' },
      { w: 'nhé', pos: 'particle' }
    ]
  },
  {
    vi: 'Tôi muốn học tiếng Việt.',
    words: [
      { w: 'Tôi', pos: 'pronoun' },
      { w: 'muốn', pos: 'auxiliary' },
      { w: 'học', pos: 'verb' },
      { w: 'tiếng', pos: 'noun' },
      { w: 'Việt', pos: 'proper' }
    ]
  },
  {
    vi: 'Hôm nay trời đẹp quá!',
    words: [
      { w: 'Hôm nay', pos: 'noun' },
      { w: 'trời', pos: 'noun' },
      { w: 'đẹp', pos: 'adjective' },
      { w: 'quá', pos: 'adverb' }
    ]
  },
  {
    vi: 'Bạn nói tiếng Anh được không?',
    words: [
      { w: 'Bạn', pos: 'pronoun' },
      { w: 'nói', pos: 'verb' },
      { w: 'tiếng Anh', pos: 'noun' },
      { w: 'được không', pos: 'questionExpr' }
    ]
  },
  {
    vi: 'Tôi bị lạc đường.',
    words: [
      { w: 'Tôi', pos: 'pronoun' },
      { w: 'bị', pos: 'passive' },
      { w: 'lạc', pos: 'verb' },
      { w: 'đường', pos: 'noun' }
    ]
  },
  {
    vi: 'Làm ơn nói chậm hơn.',
    words: [
      { w: 'Làm ơn', pos: 'idiom' },
      { w: 'nói', pos: 'verb' },
      { w: 'chậm', pos: 'adjective' },
      { w: 'hơn', pos: 'comparative' }
    ]
  },
  {
    vi: 'Tôi sống ở Hà Nội.',
    words: [
      { w: 'Tôi', pos: 'pronoun' },
      { w: 'sống', pos: 'verb' },
      { w: 'ở', pos: 'preposition' },
      { w: 'Hà Nội', pos: 'proper' }
    ]
  },
  {
    vi: 'Ngày mai tôi đi làm.',
    words: [
      { w: 'Ngày mai', pos: 'noun' },
      { w: 'tôi', pos: 'pronoun' },
      { w: 'đi', pos: 'verb' },
      { w: 'làm', pos: 'verb' }
    ]
  },
  {
    vi: 'Chúc ngủ ngon!',
    words: [
      { w: 'Chúc', pos: 'verb' },
      { w: 'ngủ', pos: 'verb' },
      { w: 'ngon', pos: 'adjective' }
    ]
  }
];
