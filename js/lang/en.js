I18N.register('en', {
  ui: {
    title: 'Tiếng Việt Drill — Vietnamese typing practice',
    gateTitle: 'Vietnamese typing & pronunciation drill',
    step1: 'Look at the picture and the translation, then recall the Vietnamese',
    step2: 'If the phrase has tone marks, a TELEX hint appears',
    step3: 'No UniKey needed — type chaof and it becomes chào',
    step4: 'The phrase appears and is read aloud twice (slower the second time)',
    step5: 'Voice input turns on automatically. Speak it, or type it',
    step6: 'Correct answers are detected as you type. Press Enter to skip (it comes back later)',
    start: '▶ Start practising',
    gateNote1: 'Chrome or Edge is recommended for speech and voice input.',
    gateNote2: 'Delay and reading speed can be changed from ⚙️.',

    recallTitle: 'Try to recall it',
    recallSub: 'How do you say it in Vietnamese? Type it now if you already know',
    revealNow: 'Show now',

    answerPlaceholder: 'Type here (chaof turns into chào)',
    answerLabel: 'Vietnamese input',
    micLabel: 'Voice input (speak in Vietnamese)',
    settingsLabel: 'Settings',

    setTitle: 'Settings',
    setLang: 'Language',
    setDelay: 'Delay before the phrase appears',
    setRate1: 'Reading speed (1st time)',
    setRate2: 'Reading speed (2nd time, slower)',
    setTelex: 'Convert TELEX automatically (no UniKey needed)',
    setAutoSpeak: 'Read the phrase aloud twice when it appears',
    setAutoListen: 'Switch to voice input after reading',
    setVoiceAdvance: 'Move on when the pronunciation is correct',
    setShuffle: 'Shuffle the order',
    setVoice: 'Vietnamese voice',
    reset: 'Reset progress',
    close: 'Close',
    seconds: '{n} s',
    noVoice: 'No Vietnamese voice found',

    speak1: '🔊 1st time (normal speed)',
    speak2: '🐢 2nd time (slower)',
    listening: '🎙️ Listening… say it in Vietnamese',
    typeOrSpeak: 'Type it, or press 🎤 and say it',
    keepGoing: 'Keep going!',
    checkSpelling: 'Check the spelling',
    typing: 'Typing… (bonus points for typing it before it appears!)',
    noSpeech: "Didn't catch that. Press 🎤 to try again",
    keyboardOk: 'You can also continue with the keyboard',
    voiceOkEnter: 'Pronunciation is correct. Press Enter for the next one',
    toneAgain: 'The letters are right — mind the tones and try again: 🎤',
    heard: 'Heard "{text}". Press 🎤 to try again',
    correctVoice: 'Correct — out loud!',
    correct: 'Correct!',
    correctPerfect: 'Perfect, no mistakes!',
    finishHint: 'To go through them again, use "Reset progress" in ⚙️',

    voiceOkTitle: 'Pronunciation OK!',
    voiceOkBody: 'Heard "{text}"',
    closeTitle: 'So close!',
    closeBody: 'Pay attention to the tones',
    skipTitle: 'Skipped',
    srOffTitle: 'About voice input',
    srOffBody: 'This browser does not support speech recognition. You can still practise by typing.',
    ttsOffTitle: 'Speech not supported',
    ttsOffBody: 'This browser cannot read text aloud. You can still practise by reading and typing.',
    noVoiceTitle: 'No Vietnamese voice installed',
    noVoiceBody: 'Add Vietnamese in your operating system’s speech settings to enable reading aloud.',
    noVoiceWin: 'On Windows: press Win + X then A to open the terminal as administrator, run  Add-WindowsCapability -Online -Name "Language.TextToSpeech~~~vi-VN~0.0.1.0"  and restart the PC.',
    micDeniedTitle: 'Microphone unavailable',
    micDeniedBody: 'Check the microphone permission in your browser.',
    doneTitle: 'Chúc mừng!',
    doneBody: 'You cleared every phrase',
    finishText: 'All phrases done. Nice work!',
    accuracy: 'Accuracy {pct} ({a} of {b} with no mistakes)'
  },

  pos: {
    polite: 'polite word', verb: 'verb', pronoun: 'pronoun', adverb: 'adverb', noun: 'noun',
    copula: 'copula', proper: 'proper noun', adjective: 'adjective', question: 'question word',
    questionExpr: 'question phrase', auxiliary: 'auxiliary', numeral: 'numeral', classifier: 'classifier',
    demonstrative: 'demonstrative', negator: 'negator', idiom: 'set phrase', particle: 'final particle',
    preposition: 'preposition', comparative: 'comparative', passive: 'passive marker', verbPrep: 'verb / preposition'
  },

  phrases: {
    'Xin chào!': {
      t: 'Hello!', caption: 'Greeting',
      note: 'Works at any time of day. To sound more natural, match the listener: Chào anh (older man) / Chào chị (older woman).',
      w: { 'Xin': ['please', 'Placed before a verb to add politeness'], 'chào': ['to greet', 'The word that corresponds to "hello"'] }
    },
    'Cảm ơn bạn nhiều.': {
      t: 'Thank you very much.', caption: 'Thanks',
      note: 'Vietnamese orders this as verb + object + degree, so nhiều comes last rather than before the verb.',
      w: { 'Cảm ơn': ['to thank', 'A Sino-Vietnamese word'], 'bạn': ['you (same age)', 'Originally means "friend"'], 'nhiều': ['a lot', 'Placed after the verb to strengthen it'] }
    },
    'Tôi tên là Nam.': {
      t: 'My name is Nam.', caption: 'Introducing yourself',
      note: 'Just line the words up: I – name – be – Nam. No possessive word is needed.',
      w: { 'Tôi': ['I', 'A neutral pronoun, fine with strangers and elders'], 'tên': ['name', ''], 'là': ['to be', 'Links two nouns; never used before an adjective'], 'Nam': ['Nam (given name)', ''] }
    },
    'Bạn khỏe không?': {
      t: 'How are you?', caption: 'Asking how someone is',
      note: 'không means "not" before a verb, but turns the sentence into a question at the end.',
      w: { 'Bạn': ['you', ''], 'khỏe': ['well, healthy', 'Adjectives attach directly, without là'], 'không': ['question marker', 'At the end it makes a yes/no question'] }
    },
    'Tôi là người Nhật.': {
      t: 'I am Japanese.', caption: 'Nationality',
      note: 'Modifiers follow the noun: người Nhật is literally "person + Japan".',
      w: { 'Tôi': ['I', ''], 'là': ['to be', ''], 'người': ['person', 'Put before a country name for "-ese / -ian"'], 'Nhật': ['Japan', 'Formally Nhật Bản'] }
    },
    'Rất vui được gặp bạn.': {
      t: 'Nice to meet you.', caption: 'First meeting',
      note: 'rất goes before the adjective while nhiều goes after the verb — both mean "very / a lot", but they sit in different places.',
      w: { 'Rất': ['very', 'Placed before an adjective'], 'vui': ['happy, glad', ''], 'được': ['to get to', 'A passive-like marker used for welcome things'], 'gặp': ['to meet', ''], 'bạn': ['you', ''] }
    },
    'Cho tôi một ly cà phê sữa đá.': {
      t: 'One iced milk coffee, please.', caption: 'Ordering at a café',
      note: 'Quantities go number + classifier + noun, and drinks are named base first, additions after.',
      w: { 'Cho': ['to give → please give', 'At the start of a sentence it makes a request'], 'tôi': ['me', ''], 'một': ['one', ''], 'ly': ['glass (classifier)', 'Southern word; cốc in the north'], 'cà phê': ['coffee', 'From French café'], 'sữa': ['milk', ''], 'đá': ['ice', ''] }
    },
    'Cái này giá bao nhiêu?': {
      t: 'How much is this?', caption: 'Shopping',
      note: 'Demonstratives follow the noun: cái này is literally "thing + this".',
      w: { 'Cái': ['thing (classifier)', 'The most general classifier'], 'này': ['this', 'Placed after the noun'], 'giá': ['price', ''], 'bao nhiêu': ['how much, how many', 'Used for amounts over ten'] }
    },
    'Tôi không hiểu.': {
      t: "I don't understand.", caption: 'Asking again',
      note: 'To negate, just put không before the verb. Verbs never change form.',
      w: { 'Tôi': ['I', ''], 'không': ['not', 'Goes right before a verb or adjective'], 'hiểu': ['to understand', ''] }
    },
    'Xin lỗi, nhà vệ sinh ở đâu?': {
      t: 'Excuse me, where is the toilet?', caption: 'Asking for a place',
      note: 'Question words stay where the answer would go; they are not moved to the front as in English.',
      w: { 'Xin lỗi': ['excuse me, sorry', 'Used both to apologise and to get attention'], 'nhà vệ sinh': ['toilet', 'Literally "hygiene house"'], 'ở': ['to be at', ''], 'đâu': ['where', 'Placed at the end'] }
    },
    'Món này rất ngon.': {
      t: 'This dish is delicious.', caption: 'Eating',
      note: 'Never insert là before an adjective. "Món này là ngon" is wrong.',
      w: { 'Món': ['dish', ''], 'này': ['this', ''], 'rất': ['very', ''], 'ngon': ['delicious', ''] }
    },
    'Hẹn gặp lại nhé!': {
      t: 'See you again!', caption: 'Saying goodbye',
      note: 'The final particle nhé softens the sentence, much like a friendly "okay?" at the end.',
      w: { 'Hẹn': ['to arrange', ''], 'gặp': ['to meet', ''], 'lại': ['again', 'Placed after the verb'], 'nhé': ['friendly ending', 'Use ạ instead when speaking to elders'] }
    },
    'Tôi muốn học tiếng Việt.': {
      t: 'I want to learn Vietnamese.', caption: 'Motivation to learn',
      note: 'người + country means "a person from…", tiếng + country means "the language of…". Two patterns, lots of new words.',
      w: { 'Tôi': ['I', ''], 'muốn': ['to want', 'Placed before the verb'], 'học': ['to learn', ''], 'tiếng': ['language', 'Before a country name it means "the … language"'], 'Việt': ['Vietnam', ''] }
    },
    'Hôm nay trời đẹp quá!': {
      t: 'The weather is lovely today!', caption: 'Talking about the weather',
      note: 'Tense comes from time words such as hôm nay or ngày mai, not from the verb, which never changes.',
      w: { 'Hôm nay': ['today', 'Time words usually come first'], 'trời': ['sky, weather', ''], 'đẹp': ['beautiful, nice', ''], 'quá': ['so, really', 'After an adjective it adds an exclamation'] }
    },
    'Bạn nói tiếng Anh được không?': {
      t: 'Can you speak English?', caption: 'Checking',
      note: 'Verb + object + được không? is the standard way to ask whether something is possible.',
      w: { 'Bạn': ['you', ''], 'nói': ['to speak', ''], 'tiếng Anh': ['English', ''], 'được không': ['can you…?', 'Placed at the end to ask about ability'] }
    },
    'Tôi bị lạc đường.': {
      t: 'I am lost.', caption: 'Trouble',
      note: 'bị and được are a pair of passive markers: bị for unwanted things, được for welcome ones.',
      w: { 'Tôi': ['I', ''], 'bị': ['to suffer (passive)', 'For unwanted events; use được for good ones'], 'lạc': ['to get lost', ''], 'đường': ['road, way', ''] }
    },
    'Làm ơn nói chậm hơn.': {
      t: 'Please speak more slowly.', caption: 'Making a request',
      note: 'Comparatives are just adjective + hơn: đẹp hơn (prettier), rẻ hơn (cheaper).',
      w: { 'Làm ơn': ['please', 'A polite request at the start of a sentence'], 'nói': ['to speak', ''], 'chậm': ['slow', ''], 'hơn': ['more', 'After an adjective it forms the comparative'] }
    },
    'Tôi sống ở Hà Nội.': {
      t: 'I live in Hanoi.', caption: 'Where you live',
      note: 'Place names capitalise every syllable (Hà Nội, Hồ Chí Minh), and the tone marks are part of the spelling.',
      w: { 'Tôi': ['I', ''], 'sống': ['to live', ''], 'ở': ['in, at', 'Marks a location'], 'Hà Nội': ['Hanoi', 'Literally "inside the river"'] }
    },
    'Ngày mai tôi đi làm.': {
      t: 'Tomorrow I go to work.', caption: 'Plans',
      note: 'A time word is enough for the future, so sẽ ("will") can be left out. The verb stays as it is.',
      w: { 'Ngày mai': ['tomorrow', 'Literally "the coming day"'], 'tôi': ['I', ''], 'đi': ['to go', ''], 'làm': ['to work', 'đi làm means "go to work"'] }
    },
    'Chúc ngủ ngon!': {
      t: 'Good night!', caption: 'Before sleeping',
      note: 'ngon covers "tasty" and "pleasant", so ngủ ngon is literally "sleep well".',
      w: { 'Chúc': ['to wish', 'Also in Chúc mừng — congratulations'], 'ngủ': ['to sleep', ''], 'ngon': ['pleasant', 'For food it means "tasty"'] }
    }
  }
});
