I18N.register('pt', {
  ui: {
    title: 'Tiếng Việt Drill — prática de vietnamita',
    gateTitle: 'Prática de escrita e pronúncia em vietnamita',
    step1: 'Olhe a imagem e a tradução e tente lembrar o vietnamita',
    step2: 'Se a frase tiver tons, aparece uma dica TELEX',
    step3: 'Não precisa do UniKey: digite chaof e vira chào',
    step4: 'A frase aparece e é lida duas vezes (a segunda mais devagar)',
    step5: 'A entrada por voz liga sozinha. Fale ou digite',
    step6: 'O acerto é detectado enquanto você digita. Enter pula (volta depois)',
    start: '▶ Começar a praticar',
    gateNote1: 'Chrome ou Edge são recomendados para a fala e o ditado.',
    gateNote2: 'A espera e a velocidade de leitura mudam em ⚙️.',
    source: 'Código-fonte',

    recallTitle: 'Tente lembrar',
    recallSub: 'Como se diz em vietnamita? Se já souber, digite agora',
    revealNow: 'Mostrar agora',

    answerPlaceholder: 'Digite aqui (chaof vira chào)',
    answerLabel: 'Entrada em vietnamita',
    micLabel: 'Entrada por voz (fale em vietnamita)',
    settingsLabel: 'Configurações',

    setTitle: 'Configurações',
    setLang: 'Idioma',
    setDelay: 'Espera antes de mostrar a frase',
    setRate1: 'Velocidade de leitura (1.ª vez)',
    setRate2: 'Velocidade de leitura (2.ª vez, mais lenta)',
    setTelex: 'Converter TELEX automaticamente (sem UniKey)',
    setAutoSpeak: 'Ler a frase duas vezes ao aparecer',
    setAutoListen: 'Passar para entrada por voz após a leitura',
    setVoiceAdvance: 'Avançar quando a pronúncia estiver correta',
    setShuffle: 'Embaralhar a ordem',
    setVoice: 'Voz vietnamita',
    reset: 'Reiniciar o progresso',
    close: 'Fechar',
    seconds: '{n} s',
    noVoice: 'Nenhuma voz vietnamita encontrada',

    speak1: '🔊 1.ª vez (velocidade normal)',
    speak2: '🐢 2.ª vez (mais lenta)',
    listening: '🎙️ Ouvindo… diga em vietnamita',
    typeOrSpeak: 'Digite ou toque em 🎤 e fale',
    keepGoing: 'Isso mesmo!',
    checkSpelling: 'Confira a grafia',
    typing: 'Digitando… (melhor ainda se digitar antes de aparecer!)',
    noSpeech: 'Não consegui ouvir. Toque em 🎤 para tentar de novo',
    keyboardOk: 'Você também pode continuar pelo teclado',
    voiceOkEnter: 'A pronúncia está correta. Pressione Enter para continuar',
    toneAgain: 'As letras estão certas — preste atenção aos tons e tente de novo 🎤',
    heard: 'Ouvi «{text}». Toque em 🎤 para tentar de novo',
    correctVoice: 'Correto, em voz alta!',
    correct: 'Correto!',
    correctPerfect: 'Perfeito, sem erros!',
    finishHint: 'Para repetir tudo, use «Reiniciar o progresso» em ⚙️',

    voiceOkTitle: 'Pronúncia correta!',
    voiceOkBody: 'Ouvi «{text}»',
    closeTitle: 'Quase!',
    closeBody: 'Preste atenção aos tons',
    skipTitle: 'Pulada',
    srOffTitle: 'Sobre a entrada por voz',
    srOffBody: 'Este navegador não suporta reconhecimento de fala. Você pode praticar digitando.',
    ttsOffTitle: 'Leitura indisponível',
    ttsOffBody: 'Este navegador não consegue ler em voz alta. Você pode praticar lendo e digitando.',
    noVoiceTitle: 'Sem voz vietnamita instalada',
    noVoiceBody: 'Adicione o vietnamita nas configurações de voz do sistema para ativar a leitura.',
    noVoiceWin: 'No Windows: pressione Win + X e depois A para abrir o terminal como administrador, execute  Add-WindowsCapability -Online -Name "Language.TextToSpeech~~~vi-VN~0.0.1.0"  e reinicie o computador.',
    micDeniedTitle: 'Microfone indisponível',
    micDeniedBody: 'Verifique a permissão do microfone no navegador.',
    doneTitle: 'Chúc mừng!',
    doneBody: 'Você concluiu todas as frases',
    finishText: 'Todas as frases concluídas! Bom trabalho.',
    accuracy: 'Precisão {pct} ({a} de {b} sem erros)'
  },

  pos: {
    polite: 'partícula de cortesia', verb: 'verbo', pronoun: 'pronome', adverb: 'advérbio', noun: 'substantivo',
    copula: 'cópula', proper: 'nome próprio', adjective: 'adjetivo', question: 'interrogativo',
    questionExpr: 'expressão interrogativa', auxiliary: 'auxiliar', numeral: 'numeral', classifier: 'classificador',
    demonstrative: 'demonstrativo', negator: 'negação', idiom: 'expressão fixa', particle: 'partícula final',
    preposition: 'preposição', comparative: 'comparativo', passive: 'marca de passiva', verbPrep: 'verbo / preposição'
  },

  phrases: {
    'Xin chào!': {
      t: 'Olá!',
      note: 'Serve a qualquer hora. Soa mais natural se adaptar ao interlocutor: Chào anh (homem mais velho) / Chào chị (mulher mais velha).',
      w: { 'Xin': ['por favor', 'Antes do verbo acrescenta cortesia'], 'chào': ['cumprimentar', 'Equivale a «olá»'] }
    },
    'Cảm ơn bạn nhiều.': {
      t: 'Muito obrigado.',
      note: 'O vietnamita ordena verbo + objeto + grau, por isso nhiều vem no fim, e não antes do verbo.',
      w: { 'Cảm ơn': ['agradecer', 'Palavra de origem sino-vietnamita'], 'bạn': ['você (da sua idade)', 'Originalmente significa «amigo»'], 'nhiều': ['muito', 'Vem depois do verbo para reforçá-lo'] }
    },
    'Tôi tên là Nam.': {
      t: 'Meu nome é Nam.',
      note: 'Basta alinhar as palavras: eu – nome – ser – Nam. Nenhum possessivo é necessário.',
      w: { 'Tôi': ['eu', 'Pronome neutro, serve com estranhos e mais velhos'], 'tên': ['nome', ''], 'là': ['ser', 'Liga dois substantivos; nunca antes de um adjetivo'], 'Nam': ['Nam (nome)', ''] }
    },
    'Bạn khỏe không?': {
      t: 'Como vai?',
      note: 'không significa «não» antes do verbo, mas no fim transforma a frase em pergunta.',
      w: { 'Bạn': ['você', ''], 'khỏe': ['bem, saudável', 'Os adjetivos ligam-se direto, sem là'], 'không': ['partícula interrogativa', 'No fim cria uma pergunta de sim ou não'] }
    },
    'Tôi là người Nhật.': {
      t: 'Eu sou japonês.',
      note: 'Os modificadores vêm depois: người Nhật é literalmente «pessoa + Japão».',
      w: { 'Tôi': ['eu', ''], 'là': ['ser', ''], 'người': ['pessoa', 'Antes do país forma o gentílico'], 'Nhật': ['Japão', 'Formalmente Nhật Bản'] }
    },
    'Rất vui được gặp bạn.': {
      t: 'Prazer em conhecer você.',
      note: 'rất vem antes do adjetivo e nhiều depois do verbo: ambos significam «muito», mas ocupam lugares diferentes.',
      w: { 'Rất': ['muito', 'Vem antes do adjetivo'], 'vui': ['contente, alegre', ''], 'được': ['poder, ter a chance de', 'Marca de tipo passivo para coisas boas'], 'gặp': ['encontrar', ''], 'bạn': ['você', ''] }
    },
    'Cho tôi một ly cà phê sữa đá.': {
      t: 'Um café com leite gelado, por favor.',
      note: 'As quantidades seguem número + classificador + substantivo, e as bebidas vão da base para os acréscimos.',
      w: { 'Cho': ['dar → por favor', 'No início da frase vira um pedido'], 'tôi': ['para mim', ''], 'một': ['um', ''], 'ly': ['copo (classificador)', 'Palavra do sul; no norte, cốc'], 'cà phê': ['café', 'Do francês café'], 'sữa': ['leite', ''], 'đá': ['gelo', ''] }
    },
    'Cái này giá bao nhiêu?': {
      t: 'Quanto custa isto?',
      note: 'Os demonstrativos vêm depois do substantivo: cái này é literalmente «coisa + esta».',
      w: { 'Cái': ['coisa (classificador)', 'O classificador mais geral'], 'này': ['este, isto', 'Vem depois do substantivo'], 'giá': ['preço', ''], 'bao nhiêu': ['quanto', 'Para quantidades acima de dez'] }
    },
    'Tôi không hiểu.': {
      t: 'Não entendo.',
      note: 'Para negar, basta pôr không antes do verbo. Os verbos não se conjugam.',
      w: { 'Tôi': ['eu', ''], 'không': ['não', 'Logo antes do verbo ou do adjetivo'], 'hiểu': ['entender', ''] }
    },
    'Xin lỗi, nhà vệ sinh ở đâu?': {
      t: 'Com licença, onde fica o banheiro?',
      note: 'As palavras interrogativas ficam onde iria a resposta; não vão para o início como em português.',
      w: { 'Xin lỗi': ['com licença, desculpe', 'Serve para pedir desculpa e para chamar atenção'], 'nhà vệ sinh': ['banheiro', 'Literalmente «casa de higiene»'], 'ở': ['estar em', ''], 'đâu': ['onde', 'Vem no fim'] }
    },
    'Món này rất ngon.': {
      t: 'Este prato está muito gostoso.',
      note: 'Nunca se põe là antes de um adjetivo: «Món này là ngon» está errado.',
      w: { 'Món': ['prato', ''], 'này': ['este', ''], 'rất': ['muito', ''], 'ngon': ['gostoso', ''] }
    },
    'Hẹn gặp lại nhé!': {
      t: 'Até a próxima!',
      note: 'A partícula final nhé suaviza a frase, como um «tá?» amigável.',
      w: { 'Hẹn': ['marcar', ''], 'gặp': ['encontrar', ''], 'lại': ['de novo', 'Vem depois do verbo'], 'nhé': ['final afetuoso', 'Com mais velhos usa-se ạ'] }
    },
    'Tôi muốn học tiếng Việt.': {
      t: 'Quero aprender vietnamita.',
      note: 'người + país significa «pessoa de…» e tiếng + país, «língua de…». Dois padrões, muito vocabulário novo.',
      w: { 'Tôi': ['eu', ''], 'muốn': ['querer', 'Vem antes do verbo'], 'học': ['aprender', ''], 'tiếng': ['língua', 'Antes de um país significa «língua de…»'], 'Việt': ['Vietnã', ''] }
    },
    'Hôm nay trời đẹp quá!': {
      t: 'Hoje o tempo está ótimo!',
      note: 'O tempo verbal vem de palavras como hôm nay ou ngày mai, não do verbo, que nunca muda.',
      w: { 'Hôm nay': ['hoje', 'As palavras de tempo costumam vir primeiro'], 'trời': ['céu, tempo', ''], 'đẹp': ['bonito, bom', ''], 'quá': ['que, muito', 'Depois do adjetivo dá tom de exclamação'] }
    },
    'Bạn nói tiếng Anh được không?': {
      t: 'Você fala inglês?',
      note: 'Verbo + objeto + được không? é a forma padrão de perguntar se algo é possível.',
      w: { 'Bạn': ['você', ''], 'nói': ['falar', ''], 'tiếng Anh': ['inglês', ''], 'được không': ['você consegue…?', 'No fim pergunta sobre a capacidade'] }
    },
    'Tôi bị lạc đường.': {
      t: 'Eu me perdi.',
      note: 'bị e được são marcas passivas complementares: bị para o ruim, được para o bom.',
      w: { 'Tôi': ['eu', ''], 'bị': ['sofrer (passiva)', 'Para acontecimentos ruins; para os bons, được'], 'lạc': ['perder-se', ''], 'đường': ['caminho', ''] }
    },
    'Làm ơn nói chậm hơn.': {
      t: 'Por favor, fale mais devagar.',
      note: 'O comparativo é só adjetivo + hơn: đẹp hơn (mais bonito), rẻ hơn (mais barato).',
      w: { 'Làm ơn': ['por favor', 'Pedido educado no início da frase'], 'nói': ['falar', ''], 'chậm': ['devagar', ''], 'hơn': ['mais', 'Depois do adjetivo forma o comparativo'] }
    },
    'Tôi sống ở Hà Nội.': {
      t: 'Eu moro em Hanói.',
      note: 'Os topônimos levam maiúscula em cada sílaba (Hà Nội, Hồ Chí Minh) e os tons fazem parte da grafia.',
      w: { 'Tôi': ['eu', ''], 'sống': ['morar, viver', ''], 'ở': ['em', 'Indica lugar'], 'Hà Nội': ['Hanói', 'Literalmente «dentro do rio»'] }
    },
    'Ngày mai tôi đi làm.': {
      t: 'Amanhã eu vou trabalhar.',
      note: 'Uma palavra de tempo já basta para o futuro, então sẽ («vai») pode ser omitido. O verbo não muda.',
      w: { 'Ngày mai': ['amanhã', 'Literalmente «o dia que vem»'], 'tôi': ['eu', ''], 'đi': ['ir', ''], 'làm': ['trabalhar', 'đi làm é «ir trabalhar»'] }
    },
    'Chúc ngủ ngon!': {
      t: 'Boa noite!',
      note: 'ngon serve para «saboroso» e para «agradável», então ngủ ngon é «durma bem».',
      w: { 'Chúc': ['desejar', 'Também em Chúc mừng — parabéns'], 'ngủ': ['dormir', ''], 'ngon': ['agradável', 'Com comida significa «gostoso»'] }
    }
  }
});
