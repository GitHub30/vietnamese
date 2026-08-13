/* 練習フレーズ（言語に依存しないデータ）
 * vi    : ベトナム語フレーズ。翻訳データのキーにもなる
 * art   : イメージ画像（絵文字で構成したシーン）
 * words : 品詞分解 [{ w: 語, pos: 品詞キー }]
 * 訳・説明・キャプションは js/lang/<言語>.js 側に vi をキーにして持つ
 */
window.PHRASES = [
  {
    vi: 'Xin chào!',
    art: { main: '👋', sub: ['🌤️', '🙂'], colors: ['#ffd76e', '#ff8a5c'] },
    words: [
      { w: 'Xin', pos: 'polite' },
      { w: 'chào', pos: 'verb' }
    ]
  },
  {
    vi: 'Cảm ơn bạn nhiều.',
    art: { main: '🙏', sub: ['💐', '✨'], colors: ['#a0e7a0', '#38b48b'] },
    words: [
      { w: 'Cảm ơn', pos: 'verb' },
      { w: 'bạn', pos: 'pronoun' },
      { w: 'nhiều', pos: 'adverb' }
    ]
  },
  {
    vi: 'Tôi tên là Nam.',
    art: { main: '🪪', sub: ['🙋', '✍️'], colors: ['#9ec5ff', '#4a6cf7'] },
    words: [
      { w: 'Tôi', pos: 'pronoun' },
      { w: 'tên', pos: 'noun' },
      { w: 'là', pos: 'copula' },
      { w: 'Nam', pos: 'proper' }
    ]
  },
  {
    vi: 'Bạn khỏe không?',
    art: { main: '💪', sub: ['😀', '❓'], colors: ['#ffb3c7', '#ef5da8'] },
    words: [
      { w: 'Bạn', pos: 'pronoun' },
      { w: 'khỏe', pos: 'adjective' },
      { w: 'không', pos: 'question' }
    ]
  },
  {
    vi: 'Tôi là người Nhật.',
    art: { main: '🗾', sub: ['🧑', '✈️'], colors: ['#ffd0d0', '#e8384f'] },
    words: [
      { w: 'Tôi', pos: 'pronoun' },
      { w: 'là', pos: 'copula' },
      { w: 'người', pos: 'noun' },
      { w: 'Nhật', pos: 'proper' }
    ]
  },
  {
    vi: 'Rất vui được gặp bạn.',
    art: { main: '🤝', sub: ['😊', '🎉'], colors: ['#ffe08a', '#f2a03d'] },
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
    art: { main: '☕', sub: ['🧊', '🥛'], colors: ['#d2a679', '#6f4e37'] },
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
    art: { main: '🏷️', sub: ['🛍️', '💵'], colors: ['#b9f2d0', '#12a37c'] },
    words: [
      { w: 'Cái', pos: 'classifier' },
      { w: 'này', pos: 'demonstrative' },
      { w: 'giá', pos: 'noun' },
      { w: 'bao nhiêu', pos: 'question' }
    ]
  },
  {
    vi: 'Tôi không hiểu.',
    art: { main: '🤔', sub: ['❓', '💭'], colors: ['#cfd4ff', '#6b73d6'] },
    words: [
      { w: 'Tôi', pos: 'pronoun' },
      { w: 'không', pos: 'negator' },
      { w: 'hiểu', pos: 'verb' }
    ]
  },
  {
    vi: 'Xin lỗi, nhà vệ sinh ở đâu?',
    art: { main: '🚻', sub: ['🧭', '🙇'], colors: ['#a8dcff', '#2f80ed'] },
    words: [
      { w: 'Xin lỗi', pos: 'idiom' },
      { w: 'nhà vệ sinh', pos: 'noun' },
      { w: 'ở', pos: 'verbPrep' },
      { w: 'đâu', pos: 'question' }
    ]
  },
  {
    vi: 'Món này rất ngon.',
    art: { main: '🍜', sub: ['😋', '🌿'], colors: ['#ffd9a0', '#e4572e'] },
    words: [
      { w: 'Món', pos: 'noun' },
      { w: 'này', pos: 'demonstrative' },
      { w: 'rất', pos: 'adverb' },
      { w: 'ngon', pos: 'adjective' }
    ]
  },
  {
    vi: 'Hẹn gặp lại nhé!',
    art: { main: '👋', sub: ['🌇', '🙌'], colors: ['#ffc8a2', '#f2704b'] },
    words: [
      { w: 'Hẹn', pos: 'verb' },
      { w: 'gặp', pos: 'verb' },
      { w: 'lại', pos: 'adverb' },
      { w: 'nhé', pos: 'particle' }
    ]
  },
  {
    vi: 'Tôi muốn học tiếng Việt.',
    art: { main: '📚', sub: ['🇻🇳', '✏️'], colors: ['#ffe6a7', '#d4a017'] },
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
    art: { main: '☀️', sub: ['🌈', '🕊️'], colors: ['#bfe6ff', '#4aa3df'] },
    words: [
      { w: 'Hôm nay', pos: 'noun' },
      { w: 'trời', pos: 'noun' },
      { w: 'đẹp', pos: 'adjective' },
      { w: 'quá', pos: 'adverb' }
    ]
  },
  {
    vi: 'Bạn nói tiếng Anh được không?',
    art: { main: '💬', sub: ['🌍', '🗣️'], colors: ['#c9c2ff', '#7159d1'] },
    words: [
      { w: 'Bạn', pos: 'pronoun' },
      { w: 'nói', pos: 'verb' },
      { w: 'tiếng Anh', pos: 'noun' },
      { w: 'được không', pos: 'questionExpr' }
    ]
  },
  {
    vi: 'Tôi bị lạc đường.',
    art: { main: '🗺️', sub: ['😵‍💫', '📍'], colors: ['#ffcfcf', '#d64550'] },
    words: [
      { w: 'Tôi', pos: 'pronoun' },
      { w: 'bị', pos: 'passive' },
      { w: 'lạc', pos: 'verb' },
      { w: 'đường', pos: 'noun' }
    ]
  },
  {
    vi: 'Làm ơn nói chậm hơn.',
    art: { main: '🐢', sub: ['🗣️', '🙏'], colors: ['#c6ecc6', '#2e8b57'] },
    words: [
      { w: 'Làm ơn', pos: 'idiom' },
      { w: 'nói', pos: 'verb' },
      { w: 'chậm', pos: 'adjective' },
      { w: 'hơn', pos: 'comparative' }
    ]
  },
  {
    vi: 'Tôi sống ở Hà Nội.',
    art: { main: '🏙️', sub: ['🏠', '🛵'], colors: ['#ffdfa6', '#c9762f'] },
    words: [
      { w: 'Tôi', pos: 'pronoun' },
      { w: 'sống', pos: 'verb' },
      { w: 'ở', pos: 'preposition' },
      { w: 'Hà Nội', pos: 'proper' }
    ]
  },
  {
    vi: 'Ngày mai tôi đi làm.',
    art: { main: '💼', sub: ['🌅', '🚶'], colors: ['#ffd6e0', '#b5477b'] },
    words: [
      { w: 'Ngày mai', pos: 'noun' },
      { w: 'tôi', pos: 'pronoun' },
      { w: 'đi', pos: 'verb' },
      { w: 'làm', pos: 'verb' }
    ]
  },
  {
    vi: 'Chúc ngủ ngon!',
    art: { main: '🌙', sub: ['⭐', '😴'], colors: ['#b9c6ff', '#3b3f8f'] },
    words: [
      { w: 'Chúc', pos: 'verb' },
      { w: 'ngủ', pos: 'verb' },
      { w: 'ngon', pos: 'adjective' }
    ]
  }
];
