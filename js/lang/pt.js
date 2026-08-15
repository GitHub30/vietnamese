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
    setCategory: 'Categoria',
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

  cats: { all: 'Tudo', greeting: 'Saudações', food: 'Comida', animal: 'Animais', flower: 'Flores', travel: 'Viagem', place: 'Lugares' },

  pos: {
    polite: 'partícula de cortesia', verb: 'verbo', pronoun: 'pronome', adverb: 'advérbio', noun: 'substantivo',
    copula: 'cópula', proper: 'nome próprio', adjective: 'adjetivo', question: 'interrogativo',
    questionExpr: 'expressão interrogativa', auxiliary: 'auxiliar', numeral: 'numeral', classifier: 'classificador',
    demonstrative: 'demonstrativo', negator: 'negação', idiom: 'expressão fixa', particle: 'partícula final',
    preposition: 'preposição', comparative: 'comparativo', passive: 'marca de passiva', verbPrep: 'verbo / preposição',
    aspect: 'marca de aspecto', quantifier: 'quantificador'
  },

  phrases: {
    'Chào buổi sáng!': {
      t: 'Bom dia!',
      note: 'buổi marca uma parte do dia: buổi sáng (manhã), buổi trưa (meio-dia), buổi tối (noite).',
      w: { 'Chào': ['cumprimentar', 'A mesma palavra de Xin chào'], 'buổi sáng': ['manhã', 'Literalmente «o trecho matinal do dia»'] }
    },

    'Tôi muốn ăn phở bò.': {
      t: 'Quero comer phở de carne.',
      note: 'Nomes de pratos vão do prato ao ingrediente: phở bò (carne), phở gà (frango).',
      w: { 'Tôi': ['eu', ''], 'muốn': ['querer', 'Vem antes do verbo'], 'ăn': ['comer', ''], 'phở': ['phở', 'Sopa de macarrão de arroz'], 'bò': ['boi, carne', ''] }
    },
    'Tôi thích ăn bánh mì.': {
      t: 'Gosto de comer bánh mì.',
      note: 'Depois de thích o verbo vem direto, sem preposição.',
      w: { 'Tôi': ['eu', ''], 'thích': ['gostar', ''], 'ăn': ['comer', ''], 'bánh mì': ['pão, bánh mì', 'bánh cobre pães e bolos'] }
    },
    'Món này có cay không?': {
      t: 'Este prato é apimentado?',
      note: 'có … không? envolve a palavra sobre a qual você pergunta: o molde padrão de sim/não.',
      w: { 'Món': ['prato', ''], 'này': ['este', 'Vem depois do substantivo'], 'có': ['ter, será que…', 'Abre a pergunta'], 'cay': ['apimentado', ''], 'không': ['partícula interrogativa', 'Fecha a pergunta'] }
    },
    'Cho tôi thêm rau thơm.': {
      t: 'Mais ervas, por favor.',
      note: 'thêm depois do verbo significa «mais»: cho thêm, ăn thêm, nói thêm.',
      w: { 'Cho': ['dar → por favor', ''], 'tôi': ['para mim', ''], 'thêm': ['acrescentar, mais', ''], 'rau thơm': ['ervas frescas', 'Literalmente «verduras aromáticas»'] }
    },
    'Tôi không ăn được thịt.': {
      t: 'Não posso comer carne.',
      note: 'được depois do verbo significa «poder». Com không … được vira «não poder».',
      w: { 'Tôi': ['eu', ''], 'không': ['não', ''], 'ăn': ['comer', ''], 'được': ['poder', 'Depois do verbo marca capacidade'], 'thịt': ['carne', ''] }
    },
    'Chị ơi, tính tiền!': {
      t: 'Com licença, a conta!',
      note: 'ơi serve para chamar: chị ơi para uma mulher um pouco mais velha, anh ơi para um homem, em ơi para alguém mais novo.',
      w: { 'Chị': ['irmã mais velha → moça', 'Como se chama uma mulher um pouco mais velha'], 'ơi': ['ei, com licença', 'Partícula de chamamento'], 'tính tiền': ['fechar a conta', 'Literalmente «contar o dinheiro»'] }
    },
    'Trái cây ở đây rất tươi.': {
      t: 'A fruta daqui é muito fresca.',
      note: 'ở đây é «aqui». Troque por ở đó (aí) ou ở kia (lá).',
      w: { 'Trái cây': ['fruta', 'Palavra do sul; quả no norte'], 'ở': ['em', ''], 'đây': ['aqui', ''], 'rất': ['muito', ''], 'tươi': ['fresco', ''] }
    },
    'Bún chả là món Hà Nội.': {
      t: 'Bún chả é um prato de Hanói.',
      note: 'Um topônimo logo após o substantivo indica origem: món Hà Nội, phở Nam Định.',
      w: { 'Bún chả': ['bún chả', 'Porco grelhado com macarrão'], 'là': ['ser', ''], 'món': ['prato', ''], 'Hà Nội': ['Hanói', ''] }
    },

    'Con mèo đang ngủ.': {
      t: 'O gato está dormindo.',
      note: 'đang antes do verbo marca o que acontece agora, como o gerúndio.',
      w: { 'Con': ['classificador de animais', 'Vem antes de quase todo nome de animal'], 'mèo': ['gato', ''], 'đang': ['estar …-ndo', 'Marca ação em curso'], 'ngủ': ['dormir', ''] }
    },
    'Con chó rất trung thành.': {
      t: 'Cachorros são muito fiéis.',
      note: 'Sem artigos nem plural, a frase serve para «o cachorro» e «os cachorros».',
      w: { 'Con': ['classificador de animais', ''], 'chó': ['cachorro', ''], 'rất': ['muito', ''], 'trung thành': ['fiel', 'Palavra sino-vietnamita'] }
    },
    'Tôi nuôi một con chim.': {
      t: 'Eu crio um passarinho.',
      note: 'Ao contar: número + classificador + substantivo, então con fica entre một e chim.',
      w: { 'Tôi': ['eu', ''], 'nuôi': ['criar', 'Vale para animais e filhos'], 'một': ['um', ''], 'con': ['classificador de animais', ''], 'chim': ['pássaro', ''] }
    },
    'Con trâu đang ăn cỏ.': {
      t: 'O búfalo está comendo capim.',
      note: 'O búfalo é uma imagem clássica do campo vietnamita e aparece em muitos ditados.',
      w: { 'Con': ['classificador de animais', ''], 'trâu': ['búfalo', ''], 'đang': ['estar …-ndo', ''], 'ăn': ['comer', ''], 'cỏ': ['capim', ''] }
    },
    'Con voi rất to.': {
      t: 'O elefante é muito grande.',
      note: 'to e lớn significam «grande»; to é a palavra mais cotidiana.',
      w: { 'Con': ['classificador de animais', ''], 'voi': ['elefante', ''], 'rất': ['muito', ''], 'to': ['grande', ''] }
    },
    'Con cá bơi trong ao.': {
      t: 'O peixe nada no lago.',
      note: 'trong é «dentro»; anda junto com ngoài (fora) e trên (em cima).',
      w: { 'Con': ['classificador de animais', ''], 'cá': ['peixe', ''], 'bơi': ['nadar', ''], 'trong': ['em, dentro de', ''], 'ao': ['lago, açude', ''] }
    },
    'Con gà gáy mỗi sáng.': {
      t: 'O galo canta toda manhã.',
      note: 'mỗi é «cada» e vem antes do substantivo: mỗi ngày, mỗi tuần.',
      w: { 'Con': ['classificador de animais', ''], 'gà': ['galo, galinha', ''], 'gáy': ['cantar (o galo)', ''], 'mỗi': ['cada', ''], 'sáng': ['manhã', ''] }
    },
    'Tôi sợ con rắn.': {
      t: 'Tenho medo de cobra.',
      note: 'sợ leva o objeto direto, sem preposição.',
      w: { 'Tôi': ['eu', ''], 'sợ': ['temer', ''], 'con': ['classificador de animais', ''], 'rắn': ['cobra', ''] }
    },
    'Con khỉ leo cây rất giỏi.': {
      t: 'Macacos sobem em árvores muito bem.',
      note: 'giỏi depois do verbo diz que a ação é bem feita: nói giỏi, học giỏi.',
      w: { 'Con': ['classificador de animais', ''], 'khỉ': ['macaco', ''], 'leo': ['subir, escalar', ''], 'cây': ['árvore', ''], 'rất': ['muito', ''], 'giỏi': ['habilidoso', ''] }
    },
    'Con bướm đậu trên hoa.': {
      t: 'A borboleta pousa na flor.',
      note: 'đậu serve para aves e insetos que pousam; como substantivo é «feijão».',
      w: { 'Con': ['classificador de animais', ''], 'bướm': ['borboleta', ''], 'đậu': ['pousar', ''], 'trên': ['sobre', ''], 'hoa': ['flor', ''] }
    },

    'Hoa sen là quốc hoa.': {
      t: 'O lótus é a flor nacional.',
      note: 'quốc significa «nação» em palavras sino-vietnamitas: quốc hoa, quốc kỳ (bandeira), quốc ca (hino).',
      w: { 'Hoa sen': ['lótus', 'Símbolo do Vietnã'], 'là': ['ser', ''], 'quốc hoa': ['flor nacional', ''] }
    },
    'Hoa đào nở vào mùa xuân.': {
      t: 'As flores de pessegueiro desabrocham na primavera.',
      note: 'vào marca tanto um momento quanto o movimento para dentro.',
      w: { 'Hoa đào': ['flor de pessegueiro', 'A flor do Tết no norte'], 'nở': ['desabrochar', ''], 'vào': ['em', ''], 'mùa xuân': ['primavera', 'mùa = estação'] }
    },
    'Hoa mai vàng rất đẹp.': {
      t: 'A flor de damasco amarela é linda.',
      note: 'As cores vêm depois do substantivo: hoa mai vàng, áo dài trắng.',
      w: { 'Hoa mai': ['flor de damasco', 'A flor do Tết no sul'], 'vàng': ['amarelo, dourado', ''], 'rất': ['muito', ''], 'đẹp': ['bonito', ''] }
    },
    'Tôi tặng em một bó hoa.': {
      t: 'Eu te dou um buquê de flores.',
      note: 'bó é o classificador de maços; para um talo só usa-se cành.',
      w: { 'Tôi': ['eu', ''], 'tặng': ['presentear', ''], 'em': ['você (mais novo)', 'Também entre casais'], 'một': ['um', ''], 'bó': ['buquê (classificador)', ''], 'hoa': ['flor', ''] }
    },
    'Vườn nhà tôi có nhiều hoa.': {
      t: 'No meu jardim há muitas flores.',
      note: 'A posse é só ordem das palavras: vườn nhà tôi = jardim – casa – eu.',
      w: { 'Vườn': ['jardim', ''], 'nhà': ['casa', ''], 'tôi': ['eu, meu', ''], 'có': ['ter, haver', ''], 'nhiều': ['muitos', 'Antes do substantivo significa «muitos»'], 'hoa': ['flor', ''] }
    },
    'Hoa hồng có gai.': {
      t: 'Rosas têm espinhos.',
      note: 'hồng aqui é «rosa» (a flor), mas também significa a cor rosa.',
      w: { 'Hoa hồng': ['rosa', ''], 'có': ['ter', ''], 'gai': ['espinho', ''] }
    },
    'Mùi hoa nhài rất thơm.': {
      t: 'O jasmim tem um cheiro ótimo.',
      note: 'thơm serve tanto para cheiro bom quanto para sabor bom.',
      w: { 'Mùi': ['cheiro', ''], 'hoa nhài': ['jasmim', 'O do chá de jasmim'], 'rất': ['muito', ''], 'thơm': ['perfumado', ''] }
    },
    'Hoa hướng dương quay về mặt trời.': {
      t: 'Os girassóis se voltam para o sol.',
      note: 'hướng dương significa literalmente «voltado para o sol»: o nome explica a frase.',
      w: { 'Hoa hướng dương': ['girassol', ''], 'quay': ['virar', ''], 'về': ['para', ''], 'mặt trời': ['sol', 'Literalmente «rosto do céu»'] }
    },
    'Hoa giấy leo trên tường.': {
      t: 'A buganvília sobe pelo muro.',
      note: 'hoa giấy é literalmente «flor de papel», pelas pétalas finas.',
      w: { 'Hoa giấy': ['buganvília', ''], 'leo': ['subir', ''], 'trên': ['sobre, por', ''], 'tường': ['muro, parede', ''] }
    },
    'Chợ hoa rất đông vào Tết.': {
      t: 'O mercado de flores fica lotado no Tết.',
      note: 'đông significa «cheio de gente» (e também «inverno» e «leste»; o contexto decide).',
      w: { 'Chợ hoa': ['mercado de flores', 'chợ = mercado'], 'rất': ['muito', ''], 'đông': ['lotado', ''], 'vào': ['em, durante', ''], 'Tết': ['Tết', 'Ano-Novo lunar'] }
    },

    'Cho tôi một vé đi Huế.': {
      t: 'Uma passagem para Huế, por favor.',
      note: 'đi + lugar indica o destino: vé đi Huế é «passagem que vai para Huế».',
      w: { 'Cho': ['dar → por favor', ''], 'tôi': ['para mim', ''], 'một': ['um', ''], 'vé': ['passagem, bilhete', ''], 'đi': ['ir', ''], 'Huế': ['Huế', 'Cidade do centro'] }
    },
    'Khách sạn ở gần đây không?': {
      t: 'Tem hotel perto daqui?',
      note: 'gần đây é «perto daqui»; gần é «perto» e xa é «longe».',
      w: { 'Khách sạn': ['hotel', 'Literalmente «casa de hóspedes»'], 'ở': ['estar em', ''], 'gần đây': ['perto daqui', ''], 'không': ['partícula interrogativa', ''] }
    },
    'Tôi muốn thuê xe máy.': {
      t: 'Quero alugar uma moto.',
      note: 'xe cobre tudo que tem roda: xe máy, xe đạp (bicicleta), xe buýt (ônibus).',
      w: { 'Tôi': ['eu', ''], 'muốn': ['querer', ''], 'thuê': ['alugar', ''], 'xe máy': ['moto', ''] }
    },
    'Chuyến bay bị hoãn rồi.': {
      t: 'O voo foi adiado.',
      note: 'rồi no fim indica que já aconteceu: o mais próximo de um passado.',
      w: { 'Chuyến bay': ['voo', 'chuyến conta viagens'], 'bị': ['sofrer (passiva)', 'Para acontecimentos ruins'], 'hoãn': ['adiar', ''], 'rồi': ['já', 'Marca uma mudança concluída'] }
    },

    'Thành phố Hồ Chí Minh rất lớn.': {
      t: 'A cidade de Ho Chi Minh é muito grande.',
      note: 'No dia a dia ainda se diz Sài Gòn; o nome oficial aparece na escrita.',
      w: { 'Thành phố': ['cidade', ''], 'Hồ Chí Minh': ['Ho Chi Minh', ''], 'rất': ['muito', ''], 'lớn': ['grande', ''] }
    },
    'Vịnh Hạ Long rất nổi tiếng.': {
      t: 'A baía de Ha Long é muito famosa.',
      note: 'Primeiro o acidente geográfico, depois o nome: vịnh (baía), sông (rio), núi (montanha).',
      w: { 'Vịnh': ['baía', ''], 'Hạ Long': ['Ha Long', 'Literalmente «dragão que desce»'], 'rất': ['muito', ''], 'nổi tiếng': ['famoso', 'Literalmente «o nome flutua»'] }
    },
    'Đà Nẵng có bãi biển đẹp.': {
      t: 'Da Nang tem uma praia linda.',
      note: 'có significa «ter» e «haver», então um lugar pode «ter» suas características.',
      w: { 'Đà Nẵng': ['Da Nang', ''], 'có': ['ter, haver', ''], 'bãi biển': ['praia', 'biển = mar'], 'đẹp': ['bonito', ''] }
    },
    'Hội An là phố cổ.': {
      t: 'Hoi An é uma cidade antiga.',
      note: 'cổ significa «antigo» em compostos: phố cổ, đồ cổ (antiguidades).',
      w: { 'Hội An': ['Hoi An', ''], 'là': ['ser', ''], 'phố cổ': ['centro histórico', 'phố = rua, cidade'] }
    },
    'Sa Pa có ruộng bậc thang.': {
      t: 'Sa Pa tem arrozais em terraços.',
      note: 'ruộng bậc thang é literalmente «campos em degraus de escada».',
      w: { 'Sa Pa': ['Sa Pa', 'Cidade de montanha no norte'], 'có': ['ter', ''], 'ruộng bậc thang': ['arrozais em terraços', 'bậc thang = escada'] }
    },
    'Huế từng là kinh đô.': {
      t: 'Huế já foi a capital.',
      note: 'từng antes do verbo diz que aconteceu em algum momento do passado.',
      w: { 'Huế': ['Huế', ''], 'từng': ['já, costumava', ''], 'là': ['ser', ''], 'kinh đô': ['capital imperial', 'Hoje a capital é thủ đô'] }
    },
    'Đà Lạt mát quanh năm.': {
      t: 'Da Lat é fresca o ano todo.',
      note: 'Um adjetivo pode ser todo o predicado: sem là e sem verbo «ser».',
      w: { 'Đà Lạt': ['Da Lat', 'Cidade serrana'], 'mát': ['fresco', ''], 'quanh năm': ['o ano todo', 'quanh = ao redor'] }
    },
    'Phú Quốc là một hòn đảo.': {
      t: 'Phu Quoc é uma ilha.',
      note: 'hòn é o classificador de ilhas e pedras: hòn đảo, hòn đá.',
      w: { 'Phú Quốc': ['Phu Quoc', ''], 'là': ['ser', ''], 'một': ['um, uma', ''], 'hòn': ['classificador de ilhas', ''], 'đảo': ['ilha', ''] }
    },
    'Sông Mê Kông chảy ra biển.': {
      t: 'O Mekong deságua no mar.',
      note: 'ra é «para fora»; o oposto vào é «para dentro», e ambos grudam em verbos de movimento.',
      w: { 'Sông': ['rio', ''], 'Mê Kông': ['Mekong', ''], 'chảy': ['fluir', ''], 'ra': ['para fora', ''], 'biển': ['mar', ''] }
    },

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
