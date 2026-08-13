/* 練習フレーズ集
 * vi     : ベトナム語フレーズ（入力の正解）
 * ja     : 日本語訳
 * words  : 品詞分解 [{ w: 語, pos: 品詞, ja: 意味, note: 補足 }]
 * note   : フレーズ全体の説明
 * art    : イメージ画像（絵文字で構成したシーン）
 */
window.PHRASES = [
  {
    vi: 'Xin chào!',
    ja: 'こんにちは！',
    art: { main: '👋', sub: ['🌤️', '🙂'], colors: ['#ffd76e', '#ff8a5c'], caption: 'あいさつ' },
    words: [
      { w: 'Xin', pos: '丁寧語', ja: 'どうぞ／お願いします', note: '動詞の前に置いて丁寧さを添える' },
      { w: 'chào', pos: '動詞', ja: 'あいさつする', note: '英語の hello にあたる語' }
    ],
    note: '時間帯を選ばない万能のあいさつ。相手に合わせて Chào anh（年上男性へ）/ Chào chị（年上女性へ）と言い換えると自然。'
  },
  {
    vi: 'Cảm ơn bạn nhiều.',
    ja: 'どうもありがとう。',
    art: { main: '🙏', sub: ['💐', '✨'], colors: ['#a0e7a0', '#38b48b'], caption: '感謝' },
    words: [
      { w: 'Cảm ơn', pos: '動詞', ja: '感謝する', note: '「感恩」に由来する漢越語' },
      { w: 'bạn', pos: '代名詞', ja: 'あなた（同年代）', note: '元は「友達」の意味' },
      { w: 'nhiều', pos: '副詞', ja: 'たくさん', note: '動詞の後ろに置いて程度を強める' }
    ],
    note: 'ベトナム語は「動詞＋目的語＋程度」の語順。日本語の「たくさん感謝する」とは逆に nhiều が最後に来る。'
  },
  {
    vi: 'Tôi tên là Nam.',
    ja: '私の名前はナムです。',
    art: { main: '🪪', sub: ['🙋', '✍️'], colors: ['#9ec5ff', '#4a6cf7'], caption: '自己紹介' },
    words: [
      { w: 'Tôi', pos: '代名詞', ja: '私', note: '目上・初対面にも使える中立的な一人称' },
      { w: 'tên', pos: '名詞', ja: '名前', note: '' },
      { w: 'là', pos: '繋辞', ja: '〜です', note: '名詞と名詞をつなぐ。形容詞の前には付けない' },
      { w: 'Nam', pos: '固有名詞', ja: 'ナム（人名）', note: '' }
    ],
    note: '「私・名前・である・ナム」と語を並べるだけ。日本語の「の」にあたる語は不要。'
  },
  {
    vi: 'Bạn khỏe không?',
    ja: '元気ですか？',
    art: { main: '💪', sub: ['😀', '❓'], colors: ['#ffb3c7', '#ef5da8'], caption: '調子をたずねる' },
    words: [
      { w: 'Bạn', pos: '代名詞', ja: 'あなた', note: '' },
      { w: 'khỏe', pos: '形容詞', ja: '健康だ・元気だ', note: '形容詞は là なしで直接つなぐ' },
      { w: 'không', pos: '疑問詞', ja: '〜ですか', note: '文末に置くと Yes/No 疑問文になる' }
    ],
    note: 'không は文頭・動詞の前なら「〜ない」（否定）、文末なら疑問。位置で役割が変わる。'
  },
  {
    vi: 'Tôi là người Nhật.',
    ja: '私は日本人です。',
    art: { main: '🗾', sub: ['🧑', '✈️'], colors: ['#ffd0d0', '#e8384f'], caption: '国籍' },
    words: [
      { w: 'Tôi', pos: '代名詞', ja: '私', note: '' },
      { w: 'là', pos: '繋辞', ja: '〜です', note: '' },
      { w: 'người', pos: '名詞', ja: '人', note: '国名の前に置いて「〜人」' },
      { w: 'Nhật', pos: '固有名詞', ja: '日本', note: '正式には Nhật Bản（日本）' }
    ],
    note: '修飾語は後ろから。người Nhật は「人＋日本」の順で「日本人」になる。'
  },
  {
    vi: 'Rất vui được gặp bạn.',
    ja: 'お会いできてうれしいです。',
    art: { main: '🤝', sub: ['😊', '🎉'], colors: ['#ffe08a', '#f2a03d'], caption: '初対面' },
    words: [
      { w: 'Rất', pos: '副詞', ja: 'とても', note: '形容詞の前に置く' },
      { w: 'vui', pos: '形容詞', ja: 'うれしい・楽しい', note: '' },
      { w: 'được', pos: '助動詞', ja: '〜できる・〜させてもらう', note: '好ましい事柄に使う受け身的な語' },
      { w: 'gặp', pos: '動詞', ja: '会う', note: '' },
      { w: 'bạn', pos: '代名詞', ja: 'あなた', note: '' }
    ],
    note: 'rất は形容詞の前、nhiều は後ろ。同じ「とても」でも置き場所が違う点に注意。'
  },
  {
    vi: 'Cho tôi một ly cà phê sữa đá.',
    ja: 'アイスミルクコーヒーを1杯ください。',
    art: { main: '☕', sub: ['🧊', '🥛'], colors: ['#d2a679', '#6f4e37'], caption: 'カフェで注文' },
    words: [
      { w: 'Cho', pos: '動詞', ja: '与える → ください', note: '文頭で依頼表現になる' },
      { w: 'tôi', pos: '代名詞', ja: '私に', note: '' },
      { w: 'một', pos: '数詞', ja: '1', note: '' },
      { w: 'ly', pos: '類別詞', ja: '（グラス）杯', note: '南部の語。北部では cốc' },
      { w: 'cà phê', pos: '名詞', ja: 'コーヒー', note: 'フランス語 café から' },
      { w: 'sữa', pos: '名詞', ja: 'ミルク', note: '' },
      { w: 'đá', pos: '名詞', ja: '氷', note: '' }
    ],
    note: '数量表現は「数詞＋類別詞＋名詞」の順。飲み物名は「本体→追加物」の順に並べる。'
  },
  {
    vi: 'Cái này giá bao nhiêu?',
    ja: 'これはいくらですか？',
    art: { main: '🏷️', sub: ['🛍️', '💵'], colors: ['#b9f2d0', '#12a37c'], caption: '買い物' },
    words: [
      { w: 'Cái', pos: '類別詞', ja: '（物を指す語）', note: '最も汎用的な類別詞' },
      { w: 'này', pos: '指示詞', ja: 'この・これ', note: '名詞の後ろに置く' },
      { w: 'giá', pos: '名詞', ja: '値段', note: '' },
      { w: 'bao nhiêu', pos: '疑問詞', ja: 'どれくらい・いくつ', note: '10以上の数をたずねるときに使う' }
    ],
    note: '指示詞は名詞の後ろ（cái này ＝「物＋この」）。日本語と語順が逆になる典型例。'
  },
  {
    vi: 'Tôi không hiểu.',
    ja: 'わかりません。',
    art: { main: '🤔', sub: ['❓', '💭'], colors: ['#cfd4ff', '#6b73d6'], caption: '聞き返す' },
    words: [
      { w: 'Tôi', pos: '代名詞', ja: '私', note: '' },
      { w: 'không', pos: '否定詞', ja: '〜ない', note: '動詞・形容詞の直前に置く' },
      { w: 'hiểu', pos: '動詞', ja: '理解する', note: '' }
    ],
    note: '否定は動詞の前に không を置くだけ。活用も時制変化もない。'
  },
  {
    vi: 'Xin lỗi, nhà vệ sinh ở đâu?',
    ja: 'すみません、トイレはどこですか？',
    art: { main: '🚻', sub: ['🧭', '🙇'], colors: ['#a8dcff', '#2f80ed'], caption: '場所をたずねる' },
    words: [
      { w: 'Xin lỗi', pos: '慣用句', ja: 'すみません', note: '謝罪にも呼びかけにも使う' },
      { w: 'nhà vệ sinh', pos: '名詞', ja: 'トイレ', note: '直訳は「衛生の家」' },
      { w: 'ở', pos: '動詞・前置詞', ja: '〜にある', note: '' },
      { w: 'đâu', pos: '疑問詞', ja: 'どこ', note: '文末に置く' }
    ],
    note: '疑問詞は日本語と同じく文中の「聞きたい位置」に残す。英語のように文頭へ動かさない。'
  },
  {
    vi: 'Món này rất ngon.',
    ja: 'この料理はとてもおいしいです。',
    art: { main: '🍜', sub: ['😋', '🌿'], colors: ['#ffd9a0', '#e4572e'], caption: '食事' },
    words: [
      { w: 'Món', pos: '名詞', ja: '料理・一品', note: '' },
      { w: 'này', pos: '指示詞', ja: 'この', note: '' },
      { w: 'rất', pos: '副詞', ja: 'とても', note: '' },
      { w: 'ngon', pos: '形容詞', ja: 'おいしい', note: '' }
    ],
    note: '形容詞述語文には là を入れない。Món này là ngon とは言わない。'
  },
  {
    vi: 'Hẹn gặp lại nhé!',
    ja: 'また会いましょうね！',
    art: { main: '👋', sub: ['🌇', '🙌'], colors: ['#ffc8a2', '#f2704b'], caption: '別れのあいさつ' },
    words: [
      { w: 'Hẹn', pos: '動詞', ja: '約束する', note: '' },
      { w: 'gặp', pos: '動詞', ja: '会う', note: '' },
      { w: 'lại', pos: '副詞', ja: 'また・再び', note: '動詞の後ろに置く' },
      { w: 'nhé', pos: '終助詞', ja: '〜ね', note: '親しみを添える。目上には ạ を使う' }
    ],
    note: '終助詞 nhé は日本語の「〜ね」とほぼ同じ働き。付けるだけで柔らかい響きになる。'
  },
  {
    vi: 'Tôi muốn học tiếng Việt.',
    ja: '私はベトナム語を勉強したいです。',
    art: { main: '📚', sub: ['🇻🇳', '✏️'], colors: ['#ffe6a7', '#d4a017'], caption: '学習の意欲' },
    words: [
      { w: 'Tôi', pos: '代名詞', ja: '私', note: '' },
      { w: 'muốn', pos: '助動詞', ja: '〜したい', note: '動詞の前に置く' },
      { w: 'học', pos: '動詞', ja: '学ぶ', note: '' },
      { w: 'tiếng', pos: '名詞', ja: '言葉・言語', note: '国名の前に置いて「〜語」' },
      { w: 'Việt', pos: '固有名詞', ja: 'ベトナム', note: '' }
    ],
    note: 'người ＋ 国名で「〜人」、tiếng ＋ 国名で「〜語」。組み合わせて語彙を一気に増やせる。'
  },
  {
    vi: 'Hôm nay trời đẹp quá!',
    ja: '今日はとてもいい天気ですね！',
    art: { main: '☀️', sub: ['🌈', '🕊️'], colors: ['#bfe6ff', '#4aa3df'], caption: '天気の話' },
    words: [
      { w: 'Hôm nay', pos: '名詞', ja: '今日', note: '時を表す語は文頭に置くことが多い' },
      { w: 'trời', pos: '名詞', ja: '空・天気', note: '' },
      { w: 'đẹp', pos: '形容詞', ja: '美しい・良い', note: '' },
      { w: 'quá', pos: '副詞', ja: 'とても（感嘆）', note: '形容詞の後ろに置くと感嘆の響き' }
    ],
    note: '時制は語順ではなく hôm nay / ngày mai などの時間語で表す。動詞は変化しない。'
  },
  {
    vi: 'Bạn nói tiếng Anh được không?',
    ja: '英語を話せますか？',
    art: { main: '💬', sub: ['🌍', '🗣️'], colors: ['#c9c2ff', '#7159d1'], caption: '確認する' },
    words: [
      { w: 'Bạn', pos: '代名詞', ja: 'あなた', note: '' },
      { w: 'nói', pos: '動詞', ja: '話す', note: '' },
      { w: 'tiếng Anh', pos: '名詞', ja: '英語', note: '' },
      { w: 'được không', pos: '疑問表現', ja: '〜できますか', note: '文末に置いて可能をたずねる' }
    ],
    note: '「動詞＋目的語＋được không?」で可能を問う型。丸ごと覚えると応用が利く。'
  },
  {
    vi: 'Tôi bị lạc đường.',
    ja: '道に迷いました。',
    art: { main: '🗺️', sub: ['😵‍💫', '📍'], colors: ['#ffcfcf', '#d64550'], caption: 'トラブル' },
    words: [
      { w: 'Tôi', pos: '代名詞', ja: '私', note: '' },
      { w: 'bị', pos: '受動詞', ja: '〜される（不都合）', note: '好ましくない出来事に使う。良いことなら được' },
      { w: 'lạc', pos: '動詞', ja: '迷う・はぐれる', note: '' },
      { w: 'đường', pos: '名詞', ja: '道', note: '' }
    ],
    note: 'bị と được は対の受動マーカー。困った事は bị、うれしい事は được と覚える。'
  },
  {
    vi: 'Làm ơn nói chậm hơn.',
    ja: 'もう少しゆっくり話してください。',
    art: { main: '🐢', sub: ['🗣️', '🙏'], colors: ['#c6ecc6', '#2e8b57'], caption: 'お願いする' },
    words: [
      { w: 'Làm ơn', pos: '慣用句', ja: 'どうか・お願いします', note: '文頭で丁寧な依頼' },
      { w: 'nói', pos: '動詞', ja: '話す', note: '' },
      { w: 'chậm', pos: '形容詞', ja: '遅い・ゆっくり', note: '' },
      { w: 'hơn', pos: '比較詞', ja: 'より〜', note: '形容詞の後ろで比較級を作る' }
    ],
    note: '比較級は「形容詞＋hơn」だけ。đẹp hơn（より美しい）、rẻ hơn（より安い）と応用できる。'
  },
  {
    vi: 'Tôi sống ở Hà Nội.',
    ja: '私はハノイに住んでいます。',
    art: { main: '🏙️', sub: ['🏠', '🛵'], colors: ['#ffdfa6', '#c9762f'], caption: '住んでいる場所' },
    words: [
      { w: 'Tôi', pos: '代名詞', ja: '私', note: '' },
      { w: 'sống', pos: '動詞', ja: '住む・生きる', note: '' },
      { w: 'ở', pos: '前置詞', ja: '〜で・〜に', note: '場所を示す' },
      { w: 'Hà Nội', pos: '固有名詞', ja: 'ハノイ', note: '直訳は「河の内」' }
    ],
    note: '地名は語ごとに大文字で始める（Hà Nội / Hồ Chí Minh）。声調記号も地名の一部。'
  },
  {
    vi: 'Ngày mai tôi đi làm.',
    ja: '明日、私は仕事に行きます。',
    art: { main: '💼', sub: ['🌅', '🚶'], colors: ['#ffd6e0', '#b5477b'], caption: '予定' },
    words: [
      { w: 'Ngày mai', pos: '名詞', ja: '明日', note: '直訳は「明日という日」' },
      { w: 'tôi', pos: '代名詞', ja: '私', note: '' },
      { w: 'đi', pos: '動詞', ja: '行く', note: '' },
      { w: 'làm', pos: '動詞', ja: '働く・する', note: 'đi làm で「仕事に行く」' }
    ],
    note: '未来は時間語だけで表せるので sẽ（〜だろう）は省略可能。動詞は原形のまま。'
  },
  {
    vi: 'Chúc ngủ ngon!',
    ja: 'おやすみなさい！',
    art: { main: '🌙', sub: ['⭐', '😴'], colors: ['#b9c6ff', '#3b3f8f'], caption: '就寝のあいさつ' },
    words: [
      { w: 'Chúc', pos: '動詞', ja: '（幸せを）祈る', note: 'Chúc mừng＝おめでとう にも使う' },
      { w: 'ngủ', pos: '動詞', ja: '眠る', note: '' },
      { w: 'ngon', pos: '形容詞', ja: '心地よい', note: '食べ物なら「おいしい」' }
    ],
    note: 'ngon は「味が良い」だけでなく「快い」も表す。ngủ ngon は「ぐっすり眠る」。'
  }
];
