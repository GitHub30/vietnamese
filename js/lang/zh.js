I18N.register('zh', {
  ui: {
    title: 'Tiếng Việt Drill — 越南语输入练习',
    gateTitle: '越南语输入与发音练习',
    step1: '看图和译文，回想越南语怎么说',
    step2: '如果句子带声调符号，会先给出 TELEX 提示',
    step3: '不需要 UniKey：输入 chaof 就会变成 chào',
    step4: '句子出现后自动朗读两遍（第二遍更慢）',
    step5: '接着自动进入语音输入。可以直接说，也可以用键盘输入',
    step6: '输入正确会自动判定。按 Enter 跳过（之后会再出现）',
    start: '▶ 开始练习',
    gateNote1: '朗读与语音识别建议使用 Chrome / Edge。',
    gateNote2: '等待时间和朗读速度可在 ⚙️ 中调整。',

    recallTitle: '先回想一下',
    recallSub: '越南语怎么说？会的话可以直接输入',
    revealNow: '立即显示',

    answerPlaceholder: '在此输入（chaof 会变成 chào）',
    answerLabel: '越南语输入',
    micLabel: '语音输入（用越南语说）',
    settingsLabel: '设置',

    setTitle: '设置',
    setLang: '显示语言',
    setDelay: '显示句子前的等待时间',
    setRate1: '朗读速度（第 1 遍）',
    setRate2: '朗读速度（第 2 遍，较慢）',
    setTelex: '自动转换 TELEX（无需 UniKey）',
    setAutoSpeak: '句子出现后自动朗读两遍',
    setAutoListen: '朗读结束后自动进入语音输入',
    setVoiceAdvance: '发音正确就进入下一句',
    setShuffle: '打乱出题顺序',
    setVoice: '越南语语音',
    reset: '重置学习进度',
    close: '关闭',
    seconds: '{n} 秒',
    noVoice: '未找到越南语语音',

    speak1: '🔊 第 1 遍（正常速度）',
    speak2: '🐢 第 2 遍（较慢）',
    listening: '🎙️ 正在聆听……请用越南语说出来',
    typeOrSpeak: '可以用键盘输入，或按 🎤 说出来',
    keepGoing: '就是这样！',
    checkSpelling: '检查一下拼写',
    typing: '输入中……（能在句子出现前打出来就更棒了！）',
    noSpeech: '没有听清。按 🎤 再试一次',
    keyboardOk: '也可以用键盘继续',
    voiceOkEnter: '发音正确。按 Enter 继续',
    toneAgain: '拼写没问题，注意声调再说一次：🎤',
    heard: '听到的是「{text}」。按 🎤 再试一次',
    correctVoice: '说对了！',
    correct: '答对了！',
    correctPerfect: '完全正确，零失误！',
    finishHint: '想再练一轮，请用 ⚙️ 设置里的「重置学习进度」',

    voiceOkTitle: '发音 OK！',
    voiceOkBody: '听到的是「{text}」',
    closeTitle: '就差一点！',
    closeBody: '留意一下声调',
    skipTitle: '已跳过',
    srOffTitle: '关于语音输入',
    srOffBody: '此浏览器不支持语音识别。仍然可以用键盘输入练习。',
    ttsOffTitle: '不支持朗读',
    ttsOffBody: '此浏览器不支持语音合成。仍然可以看着句子输入练习。',
    noVoiceTitle: '尚未安装越南语语音',
    noVoiceBody: '在系统语音设置中添加越南语后即可朗读。',
    noVoiceWin: '在 Windows 上：按 Win + X 再按 A 以管理员身份打开终端，执行  Add-WindowsCapability -Online -Name "Language.TextToSpeech~~~vi-VN~0.0.1.0"  然后重启电脑。',
    micDeniedTitle: '无法使用麦克风',
    micDeniedBody: '请检查浏览器的麦克风权限。',
    doneTitle: 'Chúc mừng!',
    doneBody: '所有句子都完成了',
    finishText: '全部句子完成，辛苦了！',
    accuracy: '准确率 {pct}（{b} 句中 {a} 句零失误）'
  },

  pos: {
    polite: '敬语词', verb: '动词', pronoun: '代词', adverb: '副词', noun: '名词',
    copula: '系词', proper: '专有名词', adjective: '形容词', question: '疑问词',
    questionExpr: '疑问表达', auxiliary: '助动词', numeral: '数词', classifier: '量词',
    demonstrative: '指示词', negator: '否定词', idiom: '固定说法', particle: '语气词',
    preposition: '介词', comparative: '比较词', passive: '被动标记', verbPrep: '动词／介词'
  },

  phrases: {
    'Xin chào!': {
      t: '你好！', caption: '打招呼',
      note: '任何时间都能用的万能问候。按对方身份换成 Chào anh（年长男性）/ Chào chị（年长女性）会更自然。',
      w: { 'Xin': ['请', '放在动词前增加礼貌'], 'chào': ['打招呼', '相当于英语的 hello'] }
    },
    'Cảm ơn bạn nhiều.': {
      t: '非常感谢。', caption: '道谢',
      note: '越南语的语序是「动词＋宾语＋程度」，所以 nhiều 放在最后，而不是动词前面。',
      w: { 'Cảm ơn': ['感谢', '源自汉越词「感恩」'], 'bạn': ['你（同辈）', '本义是「朋友」'], 'nhiều': ['很多', '放在动词后面加强程度'] }
    },
    'Tôi tên là Nam.': {
      t: '我叫阿南。', caption: '自我介绍',
      note: '把词依次排开就行：我・名字・是・Nam。不需要相当于「的」的词。',
      w: { 'Tôi': ['我', '中性第一人称，对长辈或初次见面也能用'], 'tên': ['名字', ''], 'là': ['是', '连接两个名词；形容词前不用'], 'Nam': ['Nam（人名）', ''] }
    },
    'Bạn khỏe không?': {
      t: '你好吗？', caption: '问候近况',
      note: 'không 放在动词前是「不」，放在句尾就变成疑问。位置不同，作用也不同。',
      w: { 'Bạn': ['你', ''], 'khỏe': ['健康、精神好', '形容词直接连接，不加 là'], 'không': ['……吗', '放在句尾构成是非问句'] }
    },
    'Tôi là người Nhật.': {
      t: '我是日本人。', caption: '国籍',
      note: '修饰语放在后面：người Nhật 是「人＋日本」的顺序，意思是「日本人」。',
      w: { 'Tôi': ['我', ''], 'là': ['是', ''], 'người': ['人', '放在国名前表示「……人」'], 'Nhật': ['日本', '正式说法是 Nhật Bản'] }
    },
    'Rất vui được gặp bạn.': {
      t: '很高兴认识你。', caption: '初次见面',
      note: 'rất 放形容词前，nhiều 放动词后。都表示「很／多」，但位置不同。',
      w: { 'Rất': ['很', '放在形容词前面'], 'vui': ['高兴、开心', ''], 'được': ['能够、得以', '用于好事的被动性标记'], 'gặp': ['见面', ''], 'bạn': ['你', ''] }
    },
    'Cho tôi một ly cà phê sữa đá.': {
      t: '请给我一杯冰牛奶咖啡。', caption: '在咖啡馆点单',
      note: '数量的顺序是「数词＋量词＋名词」，饮料名称则按「主体→添加物」排列。',
      w: { 'Cho': ['给 → 请给', '放在句首构成请求'], 'tôi': ['我', ''], 'một': ['一', ''], 'ly': ['杯（量词）', '南部说法，北部用 cốc'], 'cà phê': ['咖啡', '来自法语 café'], 'sữa': ['牛奶', ''], 'đá': ['冰', ''] }
    },
    'Cái này giá bao nhiêu?': {
      t: '这个多少钱？', caption: '购物',
      note: '指示词放在名词后面（cái này ＝「东西＋这个」），这是语序与汉语相反的典型例子。',
      w: { 'Cái': ['个（量词）', '最通用的量词'], 'này': ['这、这个', '放在名词后面'], 'giá': ['价格', ''], 'bao nhiêu': ['多少', '询问十以上的数量时使用'] }
    },
    'Tôi không hiểu.': {
      t: '我不明白。', caption: '请对方再说一次',
      note: '否定只要在动词前加 không。动词没有变位，也没有时态变化。',
      w: { 'Tôi': ['我', ''], 'không': ['不', '紧接在动词或形容词前'], 'hiểu': ['明白、理解', ''] }
    },
    'Xin lỗi, nhà vệ sinh ở đâu?': {
      t: '不好意思，洗手间在哪里？', caption: '问路',
      note: '疑问词留在答案所在的位置，不像英语那样移到句首。',
      w: { 'Xin lỗi': ['不好意思、对不起', '道歉和搭话时都能用'], 'nhà vệ sinh': ['洗手间', '直译是「卫生之家」'], 'ở': ['在', ''], 'đâu': ['哪里', '放在句尾'] }
    },
    'Món này rất ngon.': {
      t: '这道菜很好吃。', caption: '用餐',
      note: '形容词作谓语时不加 là，不能说 Món này là ngon。',
      w: { 'Món': ['菜、一道菜', ''], 'này': ['这', ''], 'rất': ['很', ''], 'ngon': ['好吃', ''] }
    },
    'Hẹn gặp lại nhé!': {
      t: '下次再见！', caption: '道别',
      note: '语气词 nhé 的作用接近汉语的「哦、吧」，加上去语气就柔和了。',
      w: { 'Hẹn': ['约定', ''], 'gặp': ['见面', ''], 'lại': ['再、又', '放在动词后面'], 'nhé': ['亲切的语气词', '对长辈用 ạ'] }
    },
    'Tôi muốn học tiếng Việt.': {
      t: '我想学越南语。', caption: '学习意愿',
      note: 'người ＋ 国名表示「……人」，tiếng ＋ 国名表示「……语」。两个格式就能扩充大量词汇。',
      w: { 'Tôi': ['我', ''], 'muốn': ['想要', '放在动词前面'], 'học': ['学', ''], 'tiếng': ['语言', '放在国名前表示「……语」'], 'Việt': ['越南', ''] }
    },
    'Hôm nay trời đẹp quá!': {
      t: '今天天气真好！', caption: '聊天气',
      note: '时态靠 hôm nay、ngày mai 这类时间词表示，动词本身不变化。',
      w: { 'Hôm nay': ['今天', '时间词多放在句首'], 'trời': ['天、天气', ''], 'đẹp': ['美、好', ''], 'quá': ['真、太', '放在形容词后带感叹语气'] }
    },
    'Bạn nói tiếng Anh được không?': {
      t: '你会说英语吗？', caption: '确认',
      note: '「动词＋宾语＋được không?」是询问是否可行的固定格式，整句记下来很好用。',
      w: { 'Bạn': ['你', ''], 'nói': ['说', ''], 'tiếng Anh': ['英语', ''], 'được không': ['能……吗', '放在句尾询问能力'] }
    },
    'Tôi bị lạc đường.': {
      t: '我迷路了。', caption: '遇到麻烦',
      note: 'bị 和 được 是一对被动标记：不如意的事用 bị，好事用 được。',
      w: { 'Tôi': ['我', ''], 'bị': ['被（不如意）', '用于不好的事；好事则用 được'], 'lạc': ['迷失、走散', ''], 'đường': ['路', ''] }
    },
    'Làm ơn nói chậm hơn.': {
      t: '请说慢一点。', caption: '提出请求',
      note: '比较级就是「形容词＋hơn」：đẹp hơn（更漂亮）、rẻ hơn（更便宜）。',
      w: { 'Làm ơn': ['请、拜托', '放在句首构成礼貌请求'], 'nói': ['说', ''], 'chậm': ['慢', ''], 'hơn': ['更……', '放在形容词后构成比较级'] }
    },
    'Tôi sống ở Hà Nội.': {
      t: '我住在河内。', caption: '居住地',
      note: '地名每个音节都大写（Hà Nội / Hồ Chí Minh），声调符号也是拼写的一部分。',
      w: { 'Tôi': ['我', ''], 'sống': ['住、生活', ''], 'ở': ['在', '表示地点'], 'Hà Nội': ['河内', '直译是「河之内」'] }
    },
    'Ngày mai tôi đi làm.': {
      t: '明天我去上班。', caption: '安排',
      note: '有时间词就足以表示将来，所以 sẽ（将要）可以省略，动词保持原形。',
      w: { 'Ngày mai': ['明天', '直译是「要来的那天」'], 'tôi': ['我', ''], 'đi': ['去', ''], 'làm': ['工作、做', 'đi làm 意为「去上班」'] }
    },
    'Chúc ngủ ngon!': {
      t: '晚安！', caption: '睡前问候',
      note: 'ngon 不只是「好吃」，也表示「舒服」，ngủ ngon 就是「睡得香」。',
      w: { 'Chúc': ['祝愿', 'Chúc mừng＝恭喜 也用它'], 'ngủ': ['睡', ''], 'ngon': ['舒服', '用于食物时是「好吃」'] }
    }
  }
});
