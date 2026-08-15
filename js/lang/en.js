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
    source: 'Source code',

    recallTitle: 'Try to recall it',
    recallSub: 'How do you say it in Vietnamese? Type it now if you already know',
    revealNow: 'Show now',

    answerPlaceholder: 'Type here (chaof turns into chào)',
    answerLabel: 'Vietnamese input',
    micLabel: 'Voice input (speak in Vietnamese)',
    settingsLabel: 'Settings',

    setTitle: 'Settings',
    setCategory: 'Category',
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

  cats: { all: 'All', greeting: 'Greetings', food: 'Food', animal: 'Animals', flower: 'Flowers', travel: 'Travel', place: 'Places' },

  pos: {
    polite: 'polite word', verb: 'verb', pronoun: 'pronoun', adverb: 'adverb', noun: 'noun',
    copula: 'copula', proper: 'proper noun', adjective: 'adjective', question: 'question word',
    questionExpr: 'question phrase', auxiliary: 'auxiliary', numeral: 'numeral', classifier: 'classifier',
    demonstrative: 'demonstrative', negator: 'negator', idiom: 'set phrase', particle: 'final particle',
    preposition: 'preposition', comparative: 'comparative', passive: 'passive marker', verbPrep: 'verb / preposition',
    aspect: 'aspect marker', quantifier: 'quantifier'
  },

  phrases: {
    'Chào buổi sáng!': {
      t: 'Good morning!',
      note: 'buổi marks a part of the day: buổi sáng (morning), buổi trưa (noon), buổi tối (evening).',
      w: { 'Chào': ['to greet', 'The same word as in Xin chào'], 'buổi sáng': ['morning', 'Literally "the morning stretch of the day"'] }
    },

    'Tôi muốn ăn phở bò.': {
      t: 'I want to eat beef phở.',
      note: 'Dish names run base first, ingredient after: phở bò (beef phở), phở gà (chicken phở).',
      w: { 'Tôi': ['I', ''], 'muốn': ['to want', 'Placed before the verb'], 'ăn': ['to eat', ''], 'phở': ['phở', 'Rice noodle soup'], 'bò': ['beef, cow', ''] }
    },
    'Tôi thích ăn bánh mì.': {
      t: 'I like eating bánh mì.',
      note: 'thích takes a verb straight after it — no "to" is needed.',
      w: { 'Tôi': ['I', ''], 'thích': ['to like', ''], 'ăn': ['to eat', ''], 'bánh mì': ['bread, bánh mì', 'bánh covers breads and cakes'] }
    },
    'Món này có cay không?': {
      t: 'Is this dish spicy?',
      note: 'có … không? wraps the word you are asking about — a very common yes/no frame.',
      w: { 'Món': ['dish', ''], 'này': ['this', 'Placed after the noun'], 'có': ['to have, does it…', 'Opens the question frame'], 'cay': ['spicy', ''], 'không': ['question marker', 'Closes the frame'] }
    },
    'Cho tôi thêm rau thơm.': {
      t: 'More herbs for me, please.',
      note: 'thêm after a verb means "more of it": cho thêm, ăn thêm, nói thêm.',
      w: { 'Cho': ['to give → please give', ''], 'tôi': ['me', ''], 'thêm': ['to add, more', ''], 'rau thơm': ['fresh herbs', 'Literally "fragrant vegetables"'] }
    },
    'Tôi không ăn được thịt.': {
      t: 'I cannot eat meat.',
      note: 'được after a verb means "can". Wrap it with không … được for "cannot".',
      w: { 'Tôi': ['I', ''], 'không': ['not', ''], 'ăn': ['to eat', ''], 'được': ['can', 'After the verb it marks ability'], 'thịt': ['meat', ''] }
    },
    'Chị ơi, tính tiền!': {
      t: 'Excuse me, the bill please!',
      note: 'ơi calls someone: chị ơi to a woman a bit older, anh ơi to a man, em ơi to someone younger.',
      w: { 'Chị': ['older sister → miss', 'How you address a woman slightly older'], 'ơi': ['hey, excuse me', 'A calling particle'], 'tính tiền': ['to work out the bill', 'Literally "count the money"'] }
    },
    'Trái cây ở đây rất tươi.': {
      t: 'The fruit here is very fresh.',
      note: 'ở đây means "here". Swap in ở đó (there) or ở kia (over there).',
      w: { 'Trái cây': ['fruit', 'Southern word; quả in the north'], 'ở': ['at, in', ''], 'đây': ['here', ''], 'rất': ['very', ''], 'tươi': ['fresh', ''] }
    },
    'Bún chả là món Hà Nội.': {
      t: 'Bún chả is a Hanoi dish.',
      note: 'A place name straight after a noun says where it belongs: món Hà Nội, phở Nam Định.',
      w: { 'Bún chả': ['bún chả', 'Grilled pork with rice noodles'], 'là': ['to be', ''], 'món': ['dish', ''], 'Hà Nội': ['Hanoi', ''] }
    },

    'Con mèo đang ngủ.': {
      t: 'The cat is sleeping.',
      note: 'đang before a verb marks something happening right now, like the English "-ing".',
      w: { 'Con': ['classifier for animals', 'Goes before almost any animal name'], 'mèo': ['cat', ''], 'đang': ['is …-ing', 'Marks an action in progress'], 'ngủ': ['to sleep', ''] }
    },
    'Con chó rất trung thành.': {
      t: 'Dogs are very loyal.',
      note: 'Vietnamese has no articles and no plural ending, so this covers "the dog" and "dogs" alike.',
      w: { 'Con': ['classifier for animals', ''], 'chó': ['dog', ''], 'rất': ['very', ''], 'trung thành': ['loyal', 'A Sino-Vietnamese word'] }
    },
    'Tôi nuôi một con chim.': {
      t: 'I keep a bird.',
      note: 'Counting goes number + classifier + noun, so con sits between một and chim.',
      w: { 'Tôi': ['I', ''], 'nuôi': ['to keep, to raise', 'Used for animals and children alike'], 'một': ['one', ''], 'con': ['classifier for animals', ''], 'chim': ['bird', ''] }
    },
    'Con trâu đang ăn cỏ.': {
      t: 'The buffalo is eating grass.',
      note: 'The water buffalo is a fixture of the Vietnamese countryside and shows up in many sayings.',
      w: { 'Con': ['classifier for animals', ''], 'trâu': ['water buffalo', ''], 'đang': ['is …-ing', ''], 'ăn': ['to eat', ''], 'cỏ': ['grass', ''] }
    },
    'Con voi rất to.': {
      t: 'The elephant is very big.',
      note: 'to and lớn both mean "big"; to is the more everyday word.',
      w: { 'Con': ['classifier for animals', ''], 'voi': ['elephant', ''], 'rất': ['very', ''], 'to': ['big', ''] }
    },
    'Con cá bơi trong ao.': {
      t: 'The fish swims in the pond.',
      note: 'trong means "inside"; pair it with ngoài (outside) and trên (on top).',
      w: { 'Con': ['classifier for animals', ''], 'cá': ['fish', ''], 'bơi': ['to swim', ''], 'trong': ['in, inside', ''], 'ao': ['pond', ''] }
    },
    'Con gà gáy mỗi sáng.': {
      t: 'The rooster crows every morning.',
      note: 'mỗi means "each / every" and comes before the noun: mỗi ngày, mỗi tuần.',
      w: { 'Con': ['classifier for animals', ''], 'gà': ['chicken, rooster', ''], 'gáy': ['to crow', ''], 'mỗi': ['every', ''], 'sáng': ['morning', ''] }
    },
    'Tôi sợ con rắn.': {
      t: 'I am afraid of snakes.',
      note: 'sợ takes its object directly — no preposition like the English "of".',
      w: { 'Tôi': ['I', ''], 'sợ': ['to fear', ''], 'con': ['classifier for animals', ''], 'rắn': ['snake', ''] }
    },
    'Con khỉ leo cây rất giỏi.': {
      t: 'Monkeys climb trees very well.',
      note: 'giỏi after a verb phrase says the action is done well: nói giỏi, học giỏi.',
      w: { 'Con': ['classifier for animals', ''], 'khỉ': ['monkey', ''], 'leo': ['to climb', ''], 'cây': ['tree', ''], 'rất': ['very', ''], 'giỏi': ['good at it', ''] }
    },
    'Con bướm đậu trên hoa.': {
      t: 'The butterfly lands on the flower.',
      note: 'đậu is used for birds and insects settling on something; it also means "bean".',
      w: { 'Con': ['classifier for animals', ''], 'bướm': ['butterfly', ''], 'đậu': ['to perch, to land', ''], 'trên': ['on', ''], 'hoa': ['flower', ''] }
    },

    'Hoa sen là quốc hoa.': {
      t: 'The lotus is the national flower.',
      note: 'quốc means "nation" in Sino-Vietnamese words: quốc hoa, quốc kỳ (flag), quốc ca (anthem).',
      w: { 'Hoa sen': ['lotus', 'A symbol of Vietnam'], 'là': ['to be', ''], 'quốc hoa': ['national flower', ''] }
    },
    'Hoa đào nở vào mùa xuân.': {
      t: 'Peach blossoms bloom in spring.',
      note: 'vào marks a point in time as well as motion into a place.',
      w: { 'Hoa đào': ['peach blossom', 'The northern Tết flower'], 'nở': ['to bloom', ''], 'vào': ['in, at', ''], 'mùa xuân': ['spring', 'mùa = season'] }
    },
    'Hoa mai vàng rất đẹp.': {
      t: 'The yellow apricot blossom is beautiful.',
      note: 'Colours follow the noun: hoa mai vàng, áo dài trắng.',
      w: { 'Hoa mai': ['apricot blossom', 'The southern Tết flower'], 'vàng': ['yellow, golden', ''], 'rất': ['very', ''], 'đẹp': ['beautiful', ''] }
    },
    'Tôi tặng em một bó hoa.': {
      t: 'I give you a bunch of flowers.',
      note: 'bó is the classifier for bundles; hoa uses cành for a single stem.',
      w: { 'Tôi': ['I', ''], 'tặng': ['to give as a present', ''], 'em': ['you (younger)', 'Also used between partners'], 'một': ['one', ''], 'bó': ['bunch (classifier)', ''], 'hoa': ['flower', ''] }
    },
    'Vườn nhà tôi có nhiều hoa.': {
      t: 'My garden has a lot of flowers.',
      note: 'Possession is just word order: vườn nhà tôi = garden – house – I.',
      w: { 'Vườn': ['garden', ''], 'nhà': ['house', ''], 'tôi': ['I, my', ''], 'có': ['to have', ''], 'nhiều': ['many, a lot of', 'Before a noun it means "many"'], 'hoa': ['flower', ''] }
    },
    'Hoa hồng có gai.': {
      t: 'Roses have thorns.',
      note: 'hồng means "rose" here but also "pink" — the flower gave the colour its name.',
      w: { 'Hoa hồng': ['rose', ''], 'có': ['to have', ''], 'gai': ['thorn', ''] }
    },
    'Mùi hoa nhài rất thơm.': {
      t: 'Jasmine smells lovely.',
      note: 'thơm covers both a nice smell and a nice taste.',
      w: { 'Mùi': ['smell', ''], 'hoa nhài': ['jasmine', 'Used for jasmine tea'], 'rất': ['very', ''], 'thơm': ['fragrant', ''] }
    },
    'Hoa hướng dương quay về mặt trời.': {
      t: 'Sunflowers turn toward the sun.',
      note: 'hướng dương literally means "facing the sun" — the name explains the sentence.',
      w: { 'Hoa hướng dương': ['sunflower', ''], 'quay': ['to turn', ''], 'về': ['toward', ''], 'mặt trời': ['sun', 'Literally "face of the sky"'] }
    },
    'Hoa giấy leo trên tường.': {
      t: 'Bougainvillea climbs the wall.',
      note: 'hoa giấy is literally "paper flower", after its thin papery petals.',
      w: { 'Hoa giấy': ['bougainvillea', ''], 'leo': ['to climb', ''], 'trên': ['on', ''], 'tường': ['wall', ''] }
    },
    'Chợ hoa rất đông vào Tết.': {
      t: 'The flower market is packed at Tết.',
      note: 'đông means "crowded" (and also "winter" and "east" — context tells them apart).',
      w: { 'Chợ hoa': ['flower market', 'chợ = market'], 'rất': ['very', ''], 'đông': ['crowded', ''], 'vào': ['at, during', ''], 'Tết': ['Tết', 'Lunar New Year'] }
    },

    'Cho tôi một vé đi Huế.': {
      t: 'One ticket to Huế, please.',
      note: 'đi + place says where you are heading, so vé đi Huế is "a ticket going to Huế".',
      w: { 'Cho': ['to give → please give', ''], 'tôi': ['me', ''], 'một': ['one', ''], 'vé': ['ticket', ''], 'đi': ['to go', ''], 'Huế': ['Huế', 'A city in central Vietnam'] }
    },
    'Khách sạn ở gần đây không?': {
      t: 'Is there a hotel near here?',
      note: 'gần đây means "near here"; gần is "near" and xa is "far".',
      w: { 'Khách sạn': ['hotel', 'Literally "guest house"'], 'ở': ['to be at', ''], 'gần đây': ['near here', ''], 'không': ['question marker', ''] }
    },
    'Tôi muốn thuê xe máy.': {
      t: 'I want to rent a motorbike.',
      note: 'xe covers anything on wheels: xe máy, xe đạp (bicycle), xe buýt (bus).',
      w: { 'Tôi': ['I', ''], 'muốn': ['to want', ''], 'thuê': ['to rent', ''], 'xe máy': ['motorbike', ''] }
    },
    'Chuyến bay bị hoãn rồi.': {
      t: 'The flight has been delayed.',
      note: 'rồi at the end means it has already happened — the closest thing to a past tense.',
      w: { 'Chuyến bay': ['flight', 'chuyến counts trips'], 'bị': ['to suffer (passive)', 'For unwelcome events'], 'hoãn': ['to postpone', ''], 'rồi': ['already', 'Marks a completed change'] }
    },

    'Thành phố Hồ Chí Minh rất lớn.': {
      t: 'Ho Chi Minh City is very big.',
      note: 'Locals still say Sài Gòn in everyday speech; the official name is used in writing.',
      w: { 'Thành phố': ['city', ''], 'Hồ Chí Minh': ['Ho Chi Minh', ''], 'rất': ['very', ''], 'lớn': ['big', ''] }
    },
    'Vịnh Hạ Long rất nổi tiếng.': {
      t: 'Ha Long Bay is very famous.',
      note: 'The geography word comes first: vịnh (bay), sông (river), núi (mountain), then the name.',
      w: { 'Vịnh': ['bay', ''], 'Hạ Long': ['Ha Long', 'Literally "descending dragon"'], 'rất': ['very', ''], 'nổi tiếng': ['famous', 'Literally "the name floats"'] }
    },
    'Đà Nẵng có bãi biển đẹp.': {
      t: 'Da Nang has a beautiful beach.',
      note: 'có means both "to have" and "there is", so a place can simply "have" its features.',
      w: { 'Đà Nẵng': ['Da Nang', ''], 'có': ['to have, there is', ''], 'bãi biển': ['beach', 'biển = sea'], 'đẹp': ['beautiful', ''] }
    },
    'Hội An là phố cổ.': {
      t: 'Hoi An is an old town.',
      note: 'cổ means "ancient" in compounds: phố cổ, đồ cổ (antiques).',
      w: { 'Hội An': ['Hoi An', ''], 'là': ['to be', ''], 'phố cổ': ['old town', 'phố = street, town'] }
    },
    'Sa Pa có ruộng bậc thang.': {
      t: 'Sa Pa has terraced fields.',
      note: 'ruộng bậc thang is literally "staircase-step fields" — the picture is in the words.',
      w: { 'Sa Pa': ['Sa Pa', 'A mountain town in the north'], 'có': ['to have', ''], 'ruộng bậc thang': ['terraced fields', 'bậc thang = stairs'] }
    },
    'Huế từng là kinh đô.': {
      t: 'Huế was once the capital.',
      note: 'từng before a verb says it happened at some point in the past.',
      w: { 'Huế': ['Huế', ''], 'từng': ['once, used to', ''], 'là': ['to be', ''], 'kinh đô': ['imperial capital', 'Today the capital is thủ đô'] }
    },
    'Đà Lạt mát quanh năm.': {
      t: 'Da Lat is cool all year round.',
      note: 'An adjective can be the whole predicate — no là and no verb "to be".',
      w: { 'Đà Lạt': ['Da Lat', 'A highland town'], 'mát': ['cool', ''], 'quanh năm': ['all year round', 'quanh = around'] }
    },
    'Phú Quốc là một hòn đảo.': {
      t: 'Phu Quoc is an island.',
      note: 'hòn is the classifier for islands and rocks: hòn đảo, hòn đá.',
      w: { 'Phú Quốc': ['Phu Quoc', ''], 'là': ['to be', ''], 'một': ['one, a', ''], 'hòn': ['classifier for islands', ''], 'đảo': ['island', ''] }
    },
    'Sông Mê Kông chảy ra biển.': {
      t: 'The Mekong flows out to the sea.',
      note: 'ra means "out"; its opposite vào means "in", and both attach to verbs of motion.',
      w: { 'Sông': ['river', ''], 'Mê Kông': ['Mekong', ''], 'chảy': ['to flow', ''], 'ra': ['out to', ''], 'biển': ['sea', ''] }
    },

    'Xin chào!': {
      t: 'Hello!',
      note: 'Works at any time of day. To sound more natural, match the listener: Chào anh (older man) / Chào chị (older woman).',
      w: { 'Xin': ['please', 'Placed before a verb to add politeness'], 'chào': ['to greet', 'The word that corresponds to "hello"'] }
    },
    'Cảm ơn bạn nhiều.': {
      t: 'Thank you very much.',
      note: 'Vietnamese orders this as verb + object + degree, so nhiều comes last rather than before the verb.',
      w: { 'Cảm ơn': ['to thank', 'A Sino-Vietnamese word'], 'bạn': ['you (same age)', 'Originally means "friend"'], 'nhiều': ['a lot', 'Placed after the verb to strengthen it'] }
    },
    'Tôi tên là Nam.': {
      t: 'My name is Nam.',
      note: 'Just line the words up: I – name – be – Nam. No possessive word is needed.',
      w: { 'Tôi': ['I', 'A neutral pronoun, fine with strangers and elders'], 'tên': ['name', ''], 'là': ['to be', 'Links two nouns; never used before an adjective'], 'Nam': ['Nam (given name)', ''] }
    },
    'Bạn khỏe không?': {
      t: 'How are you?',
      note: 'không means "not" before a verb, but turns the sentence into a question at the end.',
      w: { 'Bạn': ['you', ''], 'khỏe': ['well, healthy', 'Adjectives attach directly, without là'], 'không': ['question marker', 'At the end it makes a yes/no question'] }
    },
    'Tôi là người Nhật.': {
      t: 'I am Japanese.',
      note: 'Modifiers follow the noun: người Nhật is literally "person + Japan".',
      w: { 'Tôi': ['I', ''], 'là': ['to be', ''], 'người': ['person', 'Put before a country name for "-ese / -ian"'], 'Nhật': ['Japan', 'Formally Nhật Bản'] }
    },
    'Rất vui được gặp bạn.': {
      t: 'Nice to meet you.',
      note: 'rất goes before the adjective while nhiều goes after the verb — both mean "very / a lot", but they sit in different places.',
      w: { 'Rất': ['very', 'Placed before an adjective'], 'vui': ['happy, glad', ''], 'được': ['to get to', 'A passive-like marker used for welcome things'], 'gặp': ['to meet', ''], 'bạn': ['you', ''] }
    },
    'Cho tôi một ly cà phê sữa đá.': {
      t: 'One iced milk coffee, please.',
      note: 'Quantities go number + classifier + noun, and drinks are named base first, additions after.',
      w: { 'Cho': ['to give → please give', 'At the start of a sentence it makes a request'], 'tôi': ['me', ''], 'một': ['one', ''], 'ly': ['glass (classifier)', 'Southern word; cốc in the north'], 'cà phê': ['coffee', 'From French café'], 'sữa': ['milk', ''], 'đá': ['ice', ''] }
    },
    'Cái này giá bao nhiêu?': {
      t: 'How much is this?',
      note: 'Demonstratives follow the noun: cái này is literally "thing + this".',
      w: { 'Cái': ['thing (classifier)', 'The most general classifier'], 'này': ['this', 'Placed after the noun'], 'giá': ['price', ''], 'bao nhiêu': ['how much, how many', 'Used for amounts over ten'] }
    },
    'Tôi không hiểu.': {
      t: "I don't understand.",
      note: 'To negate, just put không before the verb. Verbs never change form.',
      w: { 'Tôi': ['I', ''], 'không': ['not', 'Goes right before a verb or adjective'], 'hiểu': ['to understand', ''] }
    },
    'Xin lỗi, nhà vệ sinh ở đâu?': {
      t: 'Excuse me, where is the toilet?',
      note: 'Question words stay where the answer would go; they are not moved to the front as in English.',
      w: { 'Xin lỗi': ['excuse me, sorry', 'Used both to apologise and to get attention'], 'nhà vệ sinh': ['toilet', 'Literally "hygiene house"'], 'ở': ['to be at', ''], 'đâu': ['where', 'Placed at the end'] }
    },
    'Món này rất ngon.': {
      t: 'This dish is delicious.',
      note: 'Never insert là before an adjective. "Món này là ngon" is wrong.',
      w: { 'Món': ['dish', ''], 'này': ['this', ''], 'rất': ['very', ''], 'ngon': ['delicious', ''] }
    },
    'Hẹn gặp lại nhé!': {
      t: 'See you again!',
      note: 'The final particle nhé softens the sentence, much like a friendly "okay?" at the end.',
      w: { 'Hẹn': ['to arrange', ''], 'gặp': ['to meet', ''], 'lại': ['again', 'Placed after the verb'], 'nhé': ['friendly ending', 'Use ạ instead when speaking to elders'] }
    },
    'Tôi muốn học tiếng Việt.': {
      t: 'I want to learn Vietnamese.',
      note: 'người + country means "a person from…", tiếng + country means "the language of…". Two patterns, lots of new words.',
      w: { 'Tôi': ['I', ''], 'muốn': ['to want', 'Placed before the verb'], 'học': ['to learn', ''], 'tiếng': ['language', 'Before a country name it means "the … language"'], 'Việt': ['Vietnam', ''] }
    },
    'Hôm nay trời đẹp quá!': {
      t: 'The weather is lovely today!',
      note: 'Tense comes from time words such as hôm nay or ngày mai, not from the verb, which never changes.',
      w: { 'Hôm nay': ['today', 'Time words usually come first'], 'trời': ['sky, weather', ''], 'đẹp': ['beautiful, nice', ''], 'quá': ['so, really', 'After an adjective it adds an exclamation'] }
    },
    'Bạn nói tiếng Anh được không?': {
      t: 'Can you speak English?',
      note: 'Verb + object + được không? is the standard way to ask whether something is possible.',
      w: { 'Bạn': ['you', ''], 'nói': ['to speak', ''], 'tiếng Anh': ['English', ''], 'được không': ['can you…?', 'Placed at the end to ask about ability'] }
    },
    'Tôi bị lạc đường.': {
      t: 'I am lost.',
      note: 'bị and được are a pair of passive markers: bị for unwanted things, được for welcome ones.',
      w: { 'Tôi': ['I', ''], 'bị': ['to suffer (passive)', 'For unwanted events; use được for good ones'], 'lạc': ['to get lost', ''], 'đường': ['road, way', ''] }
    },
    'Làm ơn nói chậm hơn.': {
      t: 'Please speak more slowly.',
      note: 'Comparatives are just adjective + hơn: đẹp hơn (prettier), rẻ hơn (cheaper).',
      w: { 'Làm ơn': ['please', 'A polite request at the start of a sentence'], 'nói': ['to speak', ''], 'chậm': ['slow', ''], 'hơn': ['more', 'After an adjective it forms the comparative'] }
    },
    'Tôi sống ở Hà Nội.': {
      t: 'I live in Hanoi.',
      note: 'Place names capitalise every syllable (Hà Nội, Hồ Chí Minh), and the tone marks are part of the spelling.',
      w: { 'Tôi': ['I', ''], 'sống': ['to live', ''], 'ở': ['in, at', 'Marks a location'], 'Hà Nội': ['Hanoi', 'Literally "inside the river"'] }
    },
    'Ngày mai tôi đi làm.': {
      t: 'Tomorrow I go to work.',
      note: 'A time word is enough for the future, so sẽ ("will") can be left out. The verb stays as it is.',
      w: { 'Ngày mai': ['tomorrow', 'Literally "the coming day"'], 'tôi': ['I', ''], 'đi': ['to go', ''], 'làm': ['to work', 'đi làm means "go to work"'] }
    },
    'Chúc ngủ ngon!': {
      t: 'Good night!',
      note: 'ngon covers "tasty" and "pleasant", so ngủ ngon is literally "sleep well".',
      w: { 'Chúc': ['to wish', 'Also in Chúc mừng — congratulations'], 'ngủ': ['to sleep', ''], 'ngon': ['pleasant', 'For food it means "tasty"'] }
    }
  }
});
