/* 練習フレーズ（言語に依存しないデータ）
 * vi    : ベトナム語フレーズ。翻訳データのキーであり、画像 URL の元にもなる
 * cat   : カテゴリキー（js/i18n.js の CATS と対応）
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
  /* ---------------- あいさつ ---------------- */
  {
    vi: 'Xin chào!',
    cat: 'greeting',
    words: [
      { w: 'Xin', pos: 'polite' },
      { w: 'chào', pos: 'verb' }
    ]
  },
  {
    vi: 'Chào buổi sáng!',
    cat: 'greeting',
    words: [
      { w: 'Chào', pos: 'verb' },
      { w: 'buổi sáng', pos: 'noun' }
    ]
  },
  {
    vi: 'Cảm ơn bạn nhiều.',
    cat: 'greeting',
    words: [
      { w: 'Cảm ơn', pos: 'verb' },
      { w: 'bạn', pos: 'pronoun' },
      { w: 'nhiều', pos: 'adverb' }
    ]
  },
  {
    vi: 'Tôi tên là Nam.',
    cat: 'greeting',
    words: [
      { w: 'Tôi', pos: 'pronoun' },
      { w: 'tên', pos: 'noun' },
      { w: 'là', pos: 'copula' },
      { w: 'Nam', pos: 'proper' }
    ]
  },
  {
    vi: 'Bạn khỏe không?',
    cat: 'greeting',
    words: [
      { w: 'Bạn', pos: 'pronoun' },
      { w: 'khỏe', pos: 'adjective' },
      { w: 'không', pos: 'question' }
    ]
  },
  {
    vi: 'Tôi là người Nhật.',
    cat: 'greeting',
    words: [
      { w: 'Tôi', pos: 'pronoun' },
      { w: 'là', pos: 'copula' },
      { w: 'người', pos: 'noun' },
      { w: 'Nhật', pos: 'proper' }
    ]
  },
  {
    vi: 'Rất vui được gặp bạn.',
    cat: 'greeting',
    words: [
      { w: 'Rất', pos: 'adverb' },
      { w: 'vui', pos: 'adjective' },
      { w: 'được', pos: 'auxiliary' },
      { w: 'gặp', pos: 'verb' },
      { w: 'bạn', pos: 'pronoun' }
    ]
  },
  {
    vi: 'Hôm nay trời đẹp quá!',
    cat: 'greeting',
    words: [
      { w: 'Hôm nay', pos: 'noun' },
      { w: 'trời', pos: 'noun' },
      { w: 'đẹp', pos: 'adjective' },
      { w: 'quá', pos: 'adverb' }
    ]
  },
  {
    vi: 'Tôi muốn học tiếng Việt.',
    cat: 'greeting',
    words: [
      { w: 'Tôi', pos: 'pronoun' },
      { w: 'muốn', pos: 'auxiliary' },
      { w: 'học', pos: 'verb' },
      { w: 'tiếng', pos: 'noun' },
      { w: 'Việt', pos: 'proper' }
    ]
  },
  {
    vi: 'Ngày mai tôi đi làm.',
    cat: 'greeting',
    words: [
      { w: 'Ngày mai', pos: 'noun' },
      { w: 'tôi', pos: 'pronoun' },
      { w: 'đi', pos: 'verb' },
      { w: 'làm', pos: 'verb' }
    ]
  },
  {
    vi: 'Hẹn gặp lại nhé!',
    cat: 'greeting',
    words: [
      { w: 'Hẹn', pos: 'verb' },
      { w: 'gặp', pos: 'verb' },
      { w: 'lại', pos: 'adverb' },
      { w: 'nhé', pos: 'particle' }
    ]
  },
  {
    vi: 'Chúc ngủ ngon!',
    cat: 'greeting',
    words: [
      { w: 'Chúc', pos: 'verb' },
      { w: 'ngủ', pos: 'verb' },
      { w: 'ngon', pos: 'adjective' }
    ]
  },

  /* ---------------- 食べ物 ---------------- */
  {
    vi: 'Cho tôi một ly cà phê sữa đá.',
    cat: 'food',
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
    vi: 'Món này rất ngon.',
    cat: 'food',
    words: [
      { w: 'Món', pos: 'noun' },
      { w: 'này', pos: 'demonstrative' },
      { w: 'rất', pos: 'adverb' },
      { w: 'ngon', pos: 'adjective' }
    ]
  },
  {
    vi: 'Tôi muốn ăn phở bò.',
    cat: 'food',
    words: [
      { w: 'Tôi', pos: 'pronoun' },
      { w: 'muốn', pos: 'auxiliary' },
      { w: 'ăn', pos: 'verb' },
      { w: 'phở', pos: 'noun' },
      { w: 'bò', pos: 'noun' }
    ]
  },
  {
    vi: 'Tôi thích ăn bánh mì.',
    cat: 'food',
    words: [
      { w: 'Tôi', pos: 'pronoun' },
      { w: 'thích', pos: 'verb' },
      { w: 'ăn', pos: 'verb' },
      { w: 'bánh mì', pos: 'noun' }
    ]
  },
  {
    vi: 'Món này có cay không?',
    cat: 'food',
    words: [
      { w: 'Món', pos: 'noun' },
      { w: 'này', pos: 'demonstrative' },
      { w: 'có', pos: 'auxiliary' },
      { w: 'cay', pos: 'adjective' },
      { w: 'không', pos: 'question' }
    ]
  },
  {
    vi: 'Cho tôi thêm rau thơm.',
    cat: 'food',
    words: [
      { w: 'Cho', pos: 'verb' },
      { w: 'tôi', pos: 'pronoun' },
      { w: 'thêm', pos: 'verb' },
      { w: 'rau thơm', pos: 'noun' }
    ]
  },
  {
    vi: 'Tôi không ăn được thịt.',
    cat: 'food',
    words: [
      { w: 'Tôi', pos: 'pronoun' },
      { w: 'không', pos: 'negator' },
      { w: 'ăn', pos: 'verb' },
      { w: 'được', pos: 'auxiliary' },
      { w: 'thịt', pos: 'noun' }
    ]
  },
  {
    vi: 'Chị ơi, tính tiền!',
    cat: 'food',
    words: [
      { w: 'Chị', pos: 'pronoun' },
      { w: 'ơi', pos: 'particle' },
      { w: 'tính tiền', pos: 'verb' }
    ]
  },
  {
    vi: 'Trái cây ở đây rất tươi.',
    cat: 'food',
    words: [
      { w: 'Trái cây', pos: 'noun' },
      { w: 'ở', pos: 'preposition' },
      { w: 'đây', pos: 'demonstrative' },
      { w: 'rất', pos: 'adverb' },
      { w: 'tươi', pos: 'adjective' }
    ]
  },
  {
    vi: 'Bún chả là món Hà Nội.',
    cat: 'food',
    words: [
      { w: 'Bún chả', pos: 'noun' },
      { w: 'là', pos: 'copula' },
      { w: 'món', pos: 'noun' },
      { w: 'Hà Nội', pos: 'proper' }
    ]
  },

  /* ---------------- 動物 ---------------- */
  {
    vi: 'Con mèo đang ngủ.',
    cat: 'animal',
    words: [
      { w: 'Con', pos: 'classifier' },
      { w: 'mèo', pos: 'noun' },
      { w: 'đang', pos: 'aspect' },
      { w: 'ngủ', pos: 'verb' }
    ]
  },
  {
    vi: 'Con chó rất trung thành.',
    cat: 'animal',
    words: [
      { w: 'Con', pos: 'classifier' },
      { w: 'chó', pos: 'noun' },
      { w: 'rất', pos: 'adverb' },
      { w: 'trung thành', pos: 'adjective' }
    ]
  },
  {
    vi: 'Tôi nuôi một con chim.',
    cat: 'animal',
    words: [
      { w: 'Tôi', pos: 'pronoun' },
      { w: 'nuôi', pos: 'verb' },
      { w: 'một', pos: 'numeral' },
      { w: 'con', pos: 'classifier' },
      { w: 'chim', pos: 'noun' }
    ]
  },
  {
    vi: 'Con trâu đang ăn cỏ.',
    cat: 'animal',
    words: [
      { w: 'Con', pos: 'classifier' },
      { w: 'trâu', pos: 'noun' },
      { w: 'đang', pos: 'aspect' },
      { w: 'ăn', pos: 'verb' },
      { w: 'cỏ', pos: 'noun' }
    ]
  },
  {
    vi: 'Con voi rất to.',
    cat: 'animal',
    words: [
      { w: 'Con', pos: 'classifier' },
      { w: 'voi', pos: 'noun' },
      { w: 'rất', pos: 'adverb' },
      { w: 'to', pos: 'adjective' }
    ]
  },
  {
    vi: 'Con cá bơi trong ao.',
    cat: 'animal',
    words: [
      { w: 'Con', pos: 'classifier' },
      { w: 'cá', pos: 'noun' },
      { w: 'bơi', pos: 'verb' },
      { w: 'trong', pos: 'preposition' },
      { w: 'ao', pos: 'noun' }
    ]
  },
  {
    vi: 'Con gà gáy mỗi sáng.',
    cat: 'animal',
    words: [
      { w: 'Con', pos: 'classifier' },
      { w: 'gà', pos: 'noun' },
      { w: 'gáy', pos: 'verb' },
      { w: 'mỗi', pos: 'quantifier' },
      { w: 'sáng', pos: 'noun' }
    ]
  },
  {
    vi: 'Tôi sợ con rắn.',
    cat: 'animal',
    words: [
      { w: 'Tôi', pos: 'pronoun' },
      { w: 'sợ', pos: 'verb' },
      { w: 'con', pos: 'classifier' },
      { w: 'rắn', pos: 'noun' }
    ]
  },
  {
    vi: 'Con khỉ leo cây rất giỏi.',
    cat: 'animal',
    words: [
      { w: 'Con', pos: 'classifier' },
      { w: 'khỉ', pos: 'noun' },
      { w: 'leo', pos: 'verb' },
      { w: 'cây', pos: 'noun' },
      { w: 'rất', pos: 'adverb' },
      { w: 'giỏi', pos: 'adjective' }
    ]
  },
  {
    vi: 'Con bướm đậu trên hoa.',
    cat: 'animal',
    words: [
      { w: 'Con', pos: 'classifier' },
      { w: 'bướm', pos: 'noun' },
      { w: 'đậu', pos: 'verb' },
      { w: 'trên', pos: 'preposition' },
      { w: 'hoa', pos: 'noun' }
    ]
  },

  /* ---------------- 花 ---------------- */
  {
    vi: 'Hoa sen là quốc hoa.',
    cat: 'flower',
    words: [
      { w: 'Hoa sen', pos: 'noun' },
      { w: 'là', pos: 'copula' },
      { w: 'quốc hoa', pos: 'noun' }
    ]
  },
  {
    vi: 'Hoa đào nở vào mùa xuân.',
    cat: 'flower',
    words: [
      { w: 'Hoa đào', pos: 'noun' },
      { w: 'nở', pos: 'verb' },
      { w: 'vào', pos: 'preposition' },
      { w: 'mùa xuân', pos: 'noun' }
    ]
  },
  {
    vi: 'Hoa mai vàng rất đẹp.',
    cat: 'flower',
    words: [
      { w: 'Hoa mai', pos: 'noun' },
      { w: 'vàng', pos: 'adjective' },
      { w: 'rất', pos: 'adverb' },
      { w: 'đẹp', pos: 'adjective' }
    ]
  },
  {
    vi: 'Tôi tặng em một bó hoa.',
    cat: 'flower',
    words: [
      { w: 'Tôi', pos: 'pronoun' },
      { w: 'tặng', pos: 'verb' },
      { w: 'em', pos: 'pronoun' },
      { w: 'một', pos: 'numeral' },
      { w: 'bó', pos: 'classifier' },
      { w: 'hoa', pos: 'noun' }
    ]
  },
  {
    vi: 'Vườn nhà tôi có nhiều hoa.',
    cat: 'flower',
    words: [
      { w: 'Vườn', pos: 'noun' },
      { w: 'nhà', pos: 'noun' },
      { w: 'tôi', pos: 'pronoun' },
      { w: 'có', pos: 'verb' },
      { w: 'nhiều', pos: 'quantifier' },
      { w: 'hoa', pos: 'noun' }
    ]
  },
  {
    vi: 'Hoa hồng có gai.',
    cat: 'flower',
    words: [
      { w: 'Hoa hồng', pos: 'noun' },
      { w: 'có', pos: 'verb' },
      { w: 'gai', pos: 'noun' }
    ]
  },
  {
    vi: 'Mùi hoa nhài rất thơm.',
    cat: 'flower',
    words: [
      { w: 'Mùi', pos: 'noun' },
      { w: 'hoa nhài', pos: 'noun' },
      { w: 'rất', pos: 'adverb' },
      { w: 'thơm', pos: 'adjective' }
    ]
  },
  {
    vi: 'Hoa hướng dương quay về mặt trời.',
    cat: 'flower',
    words: [
      { w: 'Hoa hướng dương', pos: 'noun' },
      { w: 'quay', pos: 'verb' },
      { w: 'về', pos: 'preposition' },
      { w: 'mặt trời', pos: 'noun' }
    ]
  },
  {
    vi: 'Hoa giấy leo trên tường.',
    cat: 'flower',
    words: [
      { w: 'Hoa giấy', pos: 'noun' },
      { w: 'leo', pos: 'verb' },
      { w: 'trên', pos: 'preposition' },
      { w: 'tường', pos: 'noun' }
    ]
  },
  {
    vi: 'Chợ hoa rất đông vào Tết.',
    cat: 'flower',
    words: [
      { w: 'Chợ hoa', pos: 'noun' },
      { w: 'rất', pos: 'adverb' },
      { w: 'đông', pos: 'adjective' },
      { w: 'vào', pos: 'preposition' },
      { w: 'Tết', pos: 'proper' }
    ]
  },

  /* ---------------- 旅行 ---------------- */
  {
    vi: 'Cái này giá bao nhiêu?',
    cat: 'travel',
    words: [
      { w: 'Cái', pos: 'classifier' },
      { w: 'này', pos: 'demonstrative' },
      { w: 'giá', pos: 'noun' },
      { w: 'bao nhiêu', pos: 'question' }
    ]
  },
  {
    vi: 'Tôi không hiểu.',
    cat: 'travel',
    words: [
      { w: 'Tôi', pos: 'pronoun' },
      { w: 'không', pos: 'negator' },
      { w: 'hiểu', pos: 'verb' }
    ]
  },
  {
    vi: 'Xin lỗi, nhà vệ sinh ở đâu?',
    cat: 'travel',
    words: [
      { w: 'Xin lỗi', pos: 'idiom' },
      { w: 'nhà vệ sinh', pos: 'noun' },
      { w: 'ở', pos: 'verbPrep' },
      { w: 'đâu', pos: 'question' }
    ]
  },
  {
    vi: 'Bạn nói tiếng Anh được không?',
    cat: 'travel',
    words: [
      { w: 'Bạn', pos: 'pronoun' },
      { w: 'nói', pos: 'verb' },
      { w: 'tiếng Anh', pos: 'noun' },
      { w: 'được không', pos: 'questionExpr' }
    ]
  },
  {
    vi: 'Tôi bị lạc đường.',
    cat: 'travel',
    words: [
      { w: 'Tôi', pos: 'pronoun' },
      { w: 'bị', pos: 'passive' },
      { w: 'lạc', pos: 'verb' },
      { w: 'đường', pos: 'noun' }
    ]
  },
  {
    vi: 'Làm ơn nói chậm hơn.',
    cat: 'travel',
    words: [
      { w: 'Làm ơn', pos: 'idiom' },
      { w: 'nói', pos: 'verb' },
      { w: 'chậm', pos: 'adjective' },
      { w: 'hơn', pos: 'comparative' }
    ]
  },
  {
    vi: 'Cho tôi một vé đi Huế.',
    cat: 'travel',
    words: [
      { w: 'Cho', pos: 'verb' },
      { w: 'tôi', pos: 'pronoun' },
      { w: 'một', pos: 'numeral' },
      { w: 'vé', pos: 'noun' },
      { w: 'đi', pos: 'verb' },
      { w: 'Huế', pos: 'proper' }
    ]
  },
  {
    vi: 'Khách sạn ở gần đây không?',
    cat: 'travel',
    words: [
      { w: 'Khách sạn', pos: 'noun' },
      { w: 'ở', pos: 'verbPrep' },
      { w: 'gần đây', pos: 'adverb' },
      { w: 'không', pos: 'question' }
    ]
  },
  {
    vi: 'Tôi muốn thuê xe máy.',
    cat: 'travel',
    words: [
      { w: 'Tôi', pos: 'pronoun' },
      { w: 'muốn', pos: 'auxiliary' },
      { w: 'thuê', pos: 'verb' },
      { w: 'xe máy', pos: 'noun' }
    ]
  },
  {
    vi: 'Chuyến bay bị hoãn rồi.',
    cat: 'travel',
    words: [
      { w: 'Chuyến bay', pos: 'noun' },
      { w: 'bị', pos: 'passive' },
      { w: 'hoãn', pos: 'verb' },
      { w: 'rồi', pos: 'aspect' }
    ]
  },

  /* ---------------- 地名 ---------------- */
  {
    vi: 'Tôi sống ở Hà Nội.',
    cat: 'place',
    words: [
      { w: 'Tôi', pos: 'pronoun' },
      { w: 'sống', pos: 'verb' },
      { w: 'ở', pos: 'preposition' },
      { w: 'Hà Nội', pos: 'proper' }
    ]
  },
  {
    vi: 'Thành phố Hồ Chí Minh rất lớn.',
    cat: 'place',
    words: [
      { w: 'Thành phố', pos: 'noun' },
      { w: 'Hồ Chí Minh', pos: 'proper' },
      { w: 'rất', pos: 'adverb' },
      { w: 'lớn', pos: 'adjective' }
    ]
  },
  {
    vi: 'Vịnh Hạ Long rất nổi tiếng.',
    cat: 'place',
    words: [
      { w: 'Vịnh', pos: 'noun' },
      { w: 'Hạ Long', pos: 'proper' },
      { w: 'rất', pos: 'adverb' },
      { w: 'nổi tiếng', pos: 'adjective' }
    ]
  },
  {
    vi: 'Đà Nẵng có bãi biển đẹp.',
    cat: 'place',
    words: [
      { w: 'Đà Nẵng', pos: 'proper' },
      { w: 'có', pos: 'verb' },
      { w: 'bãi biển', pos: 'noun' },
      { w: 'đẹp', pos: 'adjective' }
    ]
  },
  {
    vi: 'Hội An là phố cổ.',
    cat: 'place',
    words: [
      { w: 'Hội An', pos: 'proper' },
      { w: 'là', pos: 'copula' },
      { w: 'phố cổ', pos: 'noun' }
    ]
  },
  {
    vi: 'Sa Pa có ruộng bậc thang.',
    cat: 'place',
    words: [
      { w: 'Sa Pa', pos: 'proper' },
      { w: 'có', pos: 'verb' },
      { w: 'ruộng bậc thang', pos: 'noun' }
    ]
  },
  {
    vi: 'Huế từng là kinh đô.',
    cat: 'place',
    words: [
      { w: 'Huế', pos: 'proper' },
      { w: 'từng', pos: 'aspect' },
      { w: 'là', pos: 'copula' },
      { w: 'kinh đô', pos: 'noun' }
    ]
  },
  {
    vi: 'Đà Lạt mát quanh năm.',
    cat: 'place',
    words: [
      { w: 'Đà Lạt', pos: 'proper' },
      { w: 'mát', pos: 'adjective' },
      { w: 'quanh năm', pos: 'adverb' }
    ]
  },
  {
    vi: 'Phú Quốc là một hòn đảo.',
    cat: 'place',
    words: [
      { w: 'Phú Quốc', pos: 'proper' },
      { w: 'là', pos: 'copula' },
      { w: 'một', pos: 'numeral' },
      { w: 'hòn', pos: 'classifier' },
      { w: 'đảo', pos: 'noun' }
    ]
  },
  {
    vi: 'Sông Mê Kông chảy ra biển.',
    cat: 'place',
    words: [
      { w: 'Sông', pos: 'noun' },
      { w: 'Mê Kông', pos: 'proper' },
      { w: 'chảy', pos: 'verb' },
      { w: 'ra', pos: 'preposition' },
      { w: 'biển', pos: 'noun' }
    ]
  }
];
