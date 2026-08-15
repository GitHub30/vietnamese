I18N.register('fr', {
  ui: {
    title: 'Tiếng Việt Drill — entraînement au vietnamien',
    gateTitle: 'Entraînement à la saisie et à la prononciation du vietnamien',
    step1: 'Regardez l’image et la traduction, puis retrouvez le vietnamien',
    step2: 'Si la phrase contient des tons, une aide TELEX s’affiche',
    step3: 'Pas besoin d’UniKey : tapez chaof et vous obtenez chào',
    step4: 'La phrase s’affiche et est lue deux fois (plus lentement la seconde)',
    step5: 'La saisie vocale s’active toute seule. Dites-la ou tapez-la',
    step6: 'La bonne réponse est détectée à la frappe. Entrée pour passer (elle reviendra)',
    start: '▶ Commencer',
    gateNote1: 'Chrome ou Edge sont recommandés pour la lecture et la dictée.',
    gateNote2: 'Le délai et la vitesse de lecture se règlent depuis ⚙️.',
    source: 'Code source',

    recallTitle: 'Essayez de vous en souvenir',
    recallSub: 'Comment le dit-on en vietnamien ? Si vous le savez déjà, tapez-le',
    revealNow: 'Afficher maintenant',

    answerPlaceholder: 'Tapez ici (chaof devient chào)',
    answerLabel: 'Saisie en vietnamien',
    micLabel: 'Saisie vocale (parlez en vietnamien)',
    settingsLabel: 'Réglages',

    setTitle: 'Réglages',
    setCategory: 'Catégorie',
    setLang: 'Langue',
    setDelay: 'Délai avant l’affichage de la phrase',
    setRate1: 'Vitesse de lecture (1re fois)',
    setRate2: 'Vitesse de lecture (2e fois, plus lente)',
    setTelex: 'Convertir le TELEX automatiquement (sans UniKey)',
    setAutoSpeak: 'Lire la phrase deux fois à l’affichage',
    setAutoListen: 'Passer à la saisie vocale après la lecture',
    setVoiceAdvance: 'Continuer si la prononciation est correcte',
    setShuffle: 'Mélanger l’ordre',
    setVoice: 'Voix vietnamienne',
    reset: 'Réinitialiser la progression',
    close: 'Fermer',
    seconds: '{n} s',
    noVoice: 'Aucune voix vietnamienne trouvée',

    speak1: '🔊 1re fois (vitesse normale)',
    speak2: '🐢 2e fois (plus lentement)',
    listening: '🎙️ À l’écoute… dites-le en vietnamien',
    typeOrSpeak: 'Tapez-le, ou appuyez sur 🎤 et dites-le',
    keepGoing: 'Continuez comme ça !',
    checkSpelling: 'Vérifiez l’orthographe',
    typing: 'Saisie en cours… (encore mieux si vous tapez avant l’affichage !)',
    noSpeech: 'Je n’ai rien entendu. Appuyez sur 🎤 pour réessayer',
    keyboardOk: 'Vous pouvez aussi continuer au clavier',
    voiceOkEnter: 'La prononciation est correcte. Entrée pour la suite',
    toneAgain: 'Les lettres sont bonnes — soignez les tons et réessayez 🎤',
    heard: 'J’ai entendu « {text} ». Appuyez sur 🎤 pour réessayer',
    correctVoice: 'Correct, à l’oral !',
    correct: 'Correct !',
    correctPerfect: 'Parfait, sans faute !',
    finishHint: 'Pour tout refaire, utilisez « Réinitialiser la progression » dans ⚙️',

    voiceOkTitle: 'Prononciation correcte !',
    voiceOkBody: 'J’ai entendu « {text} »',
    closeTitle: 'Presque !',
    closeBody: 'Faites attention aux tons',
    skipTitle: 'Passée',
    srOffTitle: 'À propos de la saisie vocale',
    srOffBody: 'Ce navigateur ne gère pas la reconnaissance vocale. Vous pouvez vous entraîner au clavier.',
    ttsOffTitle: 'Lecture indisponible',
    ttsOffBody: 'Ce navigateur ne peut pas lire à voix haute. Vous pouvez vous entraîner en lisant et en tapant.',
    noVoiceTitle: 'Aucune voix vietnamienne installée',
    noVoiceBody: 'Ajoutez le vietnamien dans les réglages vocaux du système pour activer la lecture.',
    noVoiceWin: 'Sous Windows : appuyez sur Win + X puis A pour ouvrir le terminal en administrateur, lancez  Add-WindowsCapability -Online -Name "Language.TextToSpeech~~~vi-VN~0.0.1.0"  puis redemarrez le PC.',
    micDeniedTitle: 'Micro indisponible',
    micDeniedBody: 'Vérifiez l’autorisation du micro dans le navigateur.',
    doneTitle: 'Chúc mừng !',
    doneBody: 'Vous avez terminé toutes les phrases',
    finishText: 'Toutes les phrases sont terminées. Beau travail !',
    accuracy: 'Précision {pct} ({a} sur {b} sans faute)'
  },

  cats: { all: 'Tout', greeting: 'Salutations', food: 'Nourriture', animal: 'Animaux', flower: 'Fleurs', travel: 'Voyage', place: 'Lieux' },

  pos: {
    polite: 'particule de politesse', verb: 'verbe', pronoun: 'pronom', adverb: 'adverbe', noun: 'nom',
    copula: 'copule', proper: 'nom propre', adjective: 'adjectif', question: 'mot interrogatif',
    questionExpr: 'tournure interrogative', auxiliary: 'auxiliaire', numeral: 'numéral', classifier: 'classificateur',
    demonstrative: 'démonstratif', negator: 'négation', idiom: 'expression figée', particle: 'particule finale',
    preposition: 'préposition', comparative: 'comparatif', passive: 'marque du passif', verbPrep: 'verbe / préposition',
    aspect: 'marqueur aspectuel', quantifier: 'quantificateur'
  },

  phrases: {
    'Chào buổi sáng!': {
      t: 'Bonjour !',
      note: 'buổi marque un moment de la journée : buổi sáng (matin), buổi trưa (midi), buổi tối (soir).',
      w: { 'Chào': ['saluer', 'Le même mot que dans Xin chào'], 'buổi sáng': ['matin', 'Littéralement « la tranche matinale »'] }
    },

    'Tôi muốn ăn phở bò.': {
      t: 'Je veux manger un phở au bœuf.',
      note: 'Les noms de plats vont du plat vers son ingrédient : phở bò (bœuf), phở gà (poulet).',
      w: { 'Tôi': ['je', ''], 'muốn': ['vouloir', 'Se place avant le verbe'], 'ăn': ['manger', ''], 'phở': ['phở', 'Soupe de nouilles de riz'], 'bò': ['bœuf', ''] }
    },
    'Tôi thích ăn bánh mì.': {
      t: 'J’aime manger du bánh mì.',
      note: 'Après thích, le verbe suit directement, sans préposition.',
      w: { 'Tôi': ['je', ''], 'thích': ['aimer', ''], 'ăn': ['manger', ''], 'bánh mì': ['pain, bánh mì', 'bánh couvre pains et gâteaux'] }
    },
    'Món này có cay không?': {
      t: 'Ce plat est-il épicé ?',
      note: 'có … không ? encadre le mot sur lequel porte la question : le moule oui/non de base.',
      w: { 'Món': ['plat', ''], 'này': ['ce', 'Se place après le nom'], 'có': ['avoir, est-ce que…', 'Ouvre la question'], 'cay': ['épicé', ''], 'không': ['particule interrogative', 'Ferme la question'] }
    },
    'Cho tôi thêm rau thơm.': {
      t: 'Encore des herbes, s’il vous plaît.',
      note: 'thêm après un verbe veut dire « davantage » : cho thêm, ăn thêm, nói thêm.',
      w: { 'Cho': ['donner → s’il vous plaît', ''], 'tôi': ['à moi', ''], 'thêm': ['ajouter, en plus', ''], 'rau thơm': ['herbes fraîches', 'Littéralement « légumes parfumés »'] }
    },
    'Tôi không ăn được thịt.': {
      t: 'Je ne peux pas manger de viande.',
      note: 'được après le verbe signifie « pouvoir ». Encadré par không … được, cela donne « ne pas pouvoir ».',
      w: { 'Tôi': ['je', ''], 'không': ['ne… pas', ''], 'ăn': ['manger', ''], 'được': ['pouvoir', 'Après le verbe, marque la capacité'], 'thịt': ['viande', ''] }
    },
    'Chị ơi, tính tiền!': {
      t: 'Excusez-moi, l’addition !',
      note: 'ơi sert à interpeller : chị ơi pour une femme un peu plus âgée, anh ơi pour un homme, em ơi pour quelqu’un de plus jeune.',
      w: { 'Chị': ['grande sœur → madame', 'Pour s’adresser à une femme un peu plus âgée'], 'ơi': ['ohé, excusez-moi', 'Particule d’appel'], 'tính tiền': ['faire l’addition', 'Littéralement « compter l’argent »'] }
    },
    'Trái cây ở đây rất tươi.': {
      t: 'Les fruits ici sont très frais.',
      note: 'ở đây veut dire « ici ». Remplacez par ở đó (là) ou ở kia (là-bas).',
      w: { 'Trái cây': ['fruit', 'Mot du Sud ; quả au Nord'], 'ở': ['à, dans', ''], 'đây': ['ici', ''], 'rất': ['très', ''], 'tươi': ['frais', ''] }
    },
    'Bún chả là món Hà Nội.': {
      t: 'Le bún chả est un plat de Hanoï.',
      note: 'Un nom de lieu juste après le nom indique la provenance : món Hà Nội, phở Nam Định.',
      w: { 'Bún chả': ['bún chả', 'Porc grillé aux vermicelles'], 'là': ['être', ''], 'món': ['plat', ''], 'Hà Nội': ['Hanoï', ''] }
    },

    'Con mèo đang ngủ.': {
      t: 'Le chat dort.',
      note: 'đang devant le verbe marque ce qui se passe en ce moment, comme « être en train de ».',
      w: { 'Con': ['classificateur des animaux', 'Devant presque tout nom d’animal'], 'mèo': ['chat', ''], 'đang': ['être en train de', 'Marque une action en cours'], 'ngủ': ['dormir', ''] }
    },
    'Con chó rất trung thành.': {
      t: 'Les chiens sont très fidèles.',
      note: 'Sans article ni pluriel, la phrase vaut pour « le chien » comme pour « les chiens ».',
      w: { 'Con': ['classificateur des animaux', ''], 'chó': ['chien', ''], 'rất': ['très', ''], 'trung thành': ['fidèle', 'Mot sino-vietnamien'] }
    },
    'Tôi nuôi một con chim.': {
      t: 'J’élève un oiseau.',
      note: 'Pour compter : nombre + classificateur + nom, donc con se glisse entre một et chim.',
      w: { 'Tôi': ['je', ''], 'nuôi': ['élever', 'Vaut pour les animaux comme pour les enfants'], 'một': ['un', ''], 'con': ['classificateur des animaux', ''], 'chim': ['oiseau', ''] }
    },
    'Con trâu đang ăn cỏ.': {
      t: 'Le buffle mange de l’herbe.',
      note: 'Le buffle d’eau est une image classique des campagnes vietnamiennes.',
      w: { 'Con': ['classificateur des animaux', ''], 'trâu': ['buffle', ''], 'đang': ['être en train de', ''], 'ăn': ['manger', ''], 'cỏ': ['herbe', ''] }
    },
    'Con voi rất to.': {
      t: 'L’éléphant est très grand.',
      note: 'to et lớn veulent dire « grand » ; to est le mot de tous les jours.',
      w: { 'Con': ['classificateur des animaux', ''], 'voi': ['éléphant', ''], 'rất': ['très', ''], 'to': ['grand, gros', ''] }
    },
    'Con cá bơi trong ao.': {
      t: 'Le poisson nage dans l’étang.',
      note: 'trong veut dire « dedans » ; il va avec ngoài (dehors) et trên (dessus).',
      w: { 'Con': ['classificateur des animaux', ''], 'cá': ['poisson', ''], 'bơi': ['nager', ''], 'trong': ['dans', ''], 'ao': ['étang', ''] }
    },
    'Con gà gáy mỗi sáng.': {
      t: 'Le coq chante chaque matin.',
      note: 'mỗi veut dire « chaque » et précède le nom : mỗi ngày, mỗi tuần.',
      w: { 'Con': ['classificateur des animaux', ''], 'gà': ['poule, coq', ''], 'gáy': ['chanter (coq)', ''], 'mỗi': ['chaque', ''], 'sáng': ['matin', ''] }
    },
    'Tôi sợ con rắn.': {
      t: 'J’ai peur des serpents.',
      note: 'sợ prend son objet directement, sans préposition.',
      w: { 'Tôi': ['je', ''], 'sợ': ['craindre', ''], 'con': ['classificateur des animaux', ''], 'rắn': ['serpent', ''] }
    },
    'Con khỉ leo cây rất giỏi.': {
      t: 'Les singes grimpent très bien aux arbres.',
      note: 'giỏi après un verbe dit que l’action est bien faite : nói giỏi, học giỏi.',
      w: { 'Con': ['classificateur des animaux', ''], 'khỉ': ['singe', ''], 'leo': ['grimper', ''], 'cây': ['arbre', ''], 'rất': ['très', ''], 'giỏi': ['doué', ''] }
    },
    'Con bướm đậu trên hoa.': {
      t: 'Le papillon se pose sur la fleur.',
      note: 'đậu s’emploie pour les oiseaux et les insectes qui se posent ; comme nom, c’est « haricot ».',
      w: { 'Con': ['classificateur des animaux', ''], 'bướm': ['papillon', ''], 'đậu': ['se poser', ''], 'trên': ['sur', ''], 'hoa': ['fleur', ''] }
    },

    'Hoa sen là quốc hoa.': {
      t: 'Le lotus est la fleur nationale.',
      note: 'quốc signifie « nation » dans les mots sino-vietnamiens : quốc hoa, quốc kỳ (drapeau), quốc ca (hymne).',
      w: { 'Hoa sen': ['lotus', 'Un symbole du Vietnam'], 'là': ['être', ''], 'quốc hoa': ['fleur nationale', ''] }
    },
    'Hoa đào nở vào mùa xuân.': {
      t: 'Les fleurs de pêcher éclosent au printemps.',
      note: 'vào marque aussi bien un moment qu’un mouvement vers l’intérieur.',
      w: { 'Hoa đào': ['fleur de pêcher', 'La fleur du Tết au Nord'], 'nở': ['éclore', ''], 'vào': ['à, en', ''], 'mùa xuân': ['printemps', 'mùa = saison'] }
    },
    'Hoa mai vàng rất đẹp.': {
      t: 'La fleur d’abricotier jaune est très belle.',
      note: 'Les couleurs suivent le nom : hoa mai vàng, áo dài trắng.',
      w: { 'Hoa mai': ['fleur d’abricotier', 'La fleur du Tết au Sud'], 'vàng': ['jaune, doré', ''], 'rất': ['très', ''], 'đẹp': ['beau', ''] }
    },
    'Tôi tặng em một bó hoa.': {
      t: 'Je t’offre un bouquet de fleurs.',
      note: 'bó est le classificateur des bottes et bouquets ; pour une tige seule, on dit cành.',
      w: { 'Tôi': ['je', ''], 'tặng': ['offrir', ''], 'em': ['toi (plus jeune)', 'Aussi entre amoureux'], 'một': ['un', ''], 'bó': ['bouquet (classificateur)', ''], 'hoa': ['fleur', ''] }
    },
    'Vườn nhà tôi có nhiều hoa.': {
      t: 'Dans mon jardin il y a beaucoup de fleurs.',
      note: 'La possession, c’est l’ordre des mots : vườn nhà tôi = jardin – maison – moi.',
      w: { 'Vườn': ['jardin', ''], 'nhà': ['maison', ''], 'tôi': ['je, mon', ''], 'có': ['avoir, il y a', ''], 'nhiều': ['beaucoup de', 'Devant un nom : « beaucoup de »'], 'hoa': ['fleur', ''] }
    },
    'Hoa hồng có gai.': {
      t: 'Les roses ont des épines.',
      note: 'hồng, c’est la rose, mais aussi la couleur rose : la fleur a donné son nom à la couleur.',
      w: { 'Hoa hồng': ['rose', ''], 'có': ['avoir', ''], 'gai': ['épine', ''] }
    },
    'Mùi hoa nhài rất thơm.': {
      t: 'Le jasmin sent très bon.',
      note: 'thơm vaut pour une bonne odeur comme pour un bon goût.',
      w: { 'Mùi': ['odeur', ''], 'hoa nhài': ['jasmin', 'Celui du thé au jasmin'], 'rất': ['très', ''], 'thơm': ['parfumé', ''] }
    },
    'Hoa hướng dương quay về mặt trời.': {
      t: 'Les tournesols se tournent vers le soleil.',
      note: 'hướng dương signifie littéralement « tourné vers le soleil » : le nom explique la phrase.',
      w: { 'Hoa hướng dương': ['tournesol', ''], 'quay': ['tourner', ''], 'về': ['vers', ''], 'mặt trời': ['soleil', 'Littéralement « visage du ciel »'] }
    },
    'Hoa giấy leo trên tường.': {
      t: 'Le bougainvillier grimpe sur le mur.',
      note: 'hoa giấy veut dire littéralement « fleur de papier », à cause de ses pétales très fins.',
      w: { 'Hoa giấy': ['bougainvillier', ''], 'leo': ['grimper', ''], 'trên': ['sur', ''], 'tường': ['mur', ''] }
    },
    'Chợ hoa rất đông vào Tết.': {
      t: 'Le marché aux fleurs est bondé au Tết.',
      note: 'đông veut dire « bondé » (et aussi « hiver » et « est » ; le contexte tranche).',
      w: { 'Chợ hoa': ['marché aux fleurs', 'chợ = marché'], 'rất': ['très', ''], 'đông': ['bondé', ''], 'vào': ['à, pendant', ''], 'Tết': ['Tết', 'Nouvel An lunaire'] }
    },

    'Cho tôi một vé đi Huế.': {
      t: 'Un billet pour Huế, s’il vous plaît.',
      note: 'đi + lieu indique la destination : vé đi Huế, « un billet qui va à Huế ».',
      w: { 'Cho': ['donner → s’il vous plaît', ''], 'tôi': ['à moi', ''], 'một': ['un', ''], 'vé': ['billet', ''], 'đi': ['aller', ''], 'Huế': ['Huế', 'Ville du Centre'] }
    },
    'Khách sạn ở gần đây không?': {
      t: 'Y a-t-il un hôtel près d’ici ?',
      note: 'gần đây veut dire « près d’ici » ; gần c’est « près » et xa « loin ».',
      w: { 'Khách sạn': ['hôtel', 'Littéralement « maison des hôtes »'], 'ở': ['se trouver à', ''], 'gần đây': ['près d’ici', ''], 'không': ['particule interrogative', ''] }
    },
    'Tôi muốn thuê xe máy.': {
      t: 'Je veux louer une moto.',
      note: 'xe couvre tout ce qui roule : xe máy, xe đạp (vélo), xe buýt (bus).',
      w: { 'Tôi': ['je', ''], 'muốn': ['vouloir', ''], 'thuê': ['louer', ''], 'xe máy': ['moto', ''] }
    },
    'Chuyến bay bị hoãn rồi.': {
      t: 'Le vol a été retardé.',
      note: 'rồi en fin de phrase dit que c’est déjà arrivé : c’est ce qui se rapproche le plus d’un passé.',
      w: { 'Chuyến bay': ['vol', 'chuyến compte les trajets'], 'bị': ['subir (passif)', 'Pour les événements fâcheux'], 'hoãn': ['reporter', ''], 'rồi': ['déjà', 'Marque un changement accompli'] }
    },

    'Thành phố Hồ Chí Minh rất lớn.': {
      t: 'Hô Chi Minh-Ville est très grande.',
      note: 'Au quotidien, on dit encore Sài Gòn ; le nom officiel s’emploie à l’écrit.',
      w: { 'Thành phố': ['ville', ''], 'Hồ Chí Minh': ['Hô Chi Minh', ''], 'rất': ['très', ''], 'lớn': ['grand', ''] }
    },
    'Vịnh Hạ Long rất nổi tiếng.': {
      t: 'La baie d’Ha Long est très célèbre.',
      note: 'D’abord le terme géographique, ensuite le nom : vịnh (baie), sông (fleuve), núi (montagne).',
      w: { 'Vịnh': ['baie', ''], 'Hạ Long': ['Ha Long', 'Littéralement « dragon qui descend »'], 'rất': ['très', ''], 'nổi tiếng': ['célèbre', 'Littéralement « le nom flotte »'] }
    },
    'Đà Nẵng có bãi biển đẹp.': {
      t: 'Da Nang a une belle plage.',
      note: 'có signifie « avoir » et « il y a » : un lieu peut donc « avoir » ses atouts.',
      w: { 'Đà Nẵng': ['Da Nang', ''], 'có': ['avoir, il y a', ''], 'bãi biển': ['plage', 'biển = mer'], 'đẹp': ['beau', ''] }
    },
    'Hội An là phố cổ.': {
      t: 'Hoi An est une vieille ville.',
      note: 'cổ signifie « ancien » dans les composés : phố cổ, đồ cổ (antiquités).',
      w: { 'Hội An': ['Hoi An', ''], 'là': ['être', ''], 'phố cổ': ['vieille ville', 'phố = rue, ville'] }
    },
    'Sa Pa có ruộng bậc thang.': {
      t: 'Sa Pa a des rizières en terrasses.',
      note: 'ruộng bậc thang veut dire littéralement « rizières en marches d’escalier ».',
      w: { 'Sa Pa': ['Sa Pa', 'Ville de montagne au Nord'], 'có': ['avoir', ''], 'ruộng bậc thang': ['rizières en terrasses', 'bậc thang = escalier'] }
    },
    'Huế từng là kinh đô.': {
      t: 'Huế fut autrefois la capitale.',
      note: 'từng devant le verbe indique que cela a eu lieu à un moment du passé.',
      w: { 'Huế': ['Huế', ''], 'từng': ['autrefois, avoir déjà', ''], 'là': ['être', ''], 'kinh đô': ['capitale impériale', 'Aujourd’hui on dit thủ đô'] }
    },
    'Đà Lạt mát quanh năm.': {
      t: 'Il fait frais toute l’année à Da Lat.',
      note: 'Un adjectif peut constituer tout le prédicat : ni là ni verbe « être ».',
      w: { 'Đà Lạt': ['Da Lat', 'Ville des hauts plateaux'], 'mát': ['frais', ''], 'quanh năm': ['toute l’année', 'quanh = autour'] }
    },
    'Phú Quốc là một hòn đảo.': {
      t: 'Phu Quoc est une île.',
      note: 'hòn est le classificateur des îles et des rochers : hòn đảo, hòn đá.',
      w: { 'Phú Quốc': ['Phu Quoc', ''], 'là': ['être', ''], 'một': ['un, une', ''], 'hòn': ['classificateur des îles', ''], 'đảo': ['île', ''] }
    },
    'Sông Mê Kông chảy ra biển.': {
      t: 'Le Mékong se jette dans la mer.',
      note: 'ra veut dire « vers l’extérieur » ; son contraire vào veut dire « vers l’intérieur ».',
      w: { 'Sông': ['fleuve', ''], 'Mê Kông': ['Mékong', ''], 'chảy': ['couler', ''], 'ra': ['vers l’extérieur', ''], 'biển': ['mer', ''] }
    },

    'Xin chào!': {
      t: 'Bonjour !',
      note: 'Valable à toute heure. Plus naturel si l’on s’adapte à l’interlocuteur : Chào anh (homme plus âgé) / Chào chị (femme plus âgée).',
      w: { 'Xin': ['s’il vous plaît', 'Devant le verbe, ajoute de la politesse'], 'chào': ['saluer', 'Correspond à « bonjour »'] }
    },
    'Cảm ơn bạn nhiều.': {
      t: 'Merci beaucoup.',
      note: 'Le vietnamien suit l’ordre verbe + objet + degré : nhiều vient donc à la fin, et non devant le verbe.',
      w: { 'Cảm ơn': ['remercier', 'Mot d’origine sino-vietnamienne'], 'bạn': ['toi (même âge)', 'Signifie à l’origine « ami »'], 'nhiều': ['beaucoup', 'Après le verbe, pour le renforcer'] }
    },
    'Tôi tên là Nam.': {
      t: 'Je m’appelle Nam.',
      note: 'Il suffit d’aligner les mots : je – nom – être – Nam. Aucun possessif n’est nécessaire.',
      w: { 'Tôi': ['je', 'Pronom neutre, utilisable avec des inconnus et des aînés'], 'tên': ['nom', ''], 'là': ['être', 'Relie deux noms ; jamais devant un adjectif'], 'Nam': ['Nam (prénom)', ''] }
    },
    'Bạn khỏe không?': {
      t: 'Comment allez-vous ?',
      note: 'không signifie « ne… pas » devant le verbe, mais transforme la phrase en question à la fin.',
      w: { 'Bạn': ['tu, vous', ''], 'khỏe': ['en forme, en bonne santé', 'Les adjectifs se rattachent directement, sans là'], 'không': ['particule interrogative', 'À la fin, crée une question oui/non'] }
    },
    'Tôi là người Nhật.': {
      t: 'Je suis japonais.',
      note: 'Les compléments suivent le nom : người Nhật, littéralement « personne + Japon ».',
      w: { 'Tôi': ['je', ''], 'là': ['être', ''], 'người': ['personne', 'Devant un nom de pays, forme le gentilé'], 'Nhật': ['Japon', 'Officiellement Nhật Bản'] }
    },
    'Rất vui được gặp bạn.': {
      t: 'Enchanté de vous rencontrer.',
      note: 'rất se place avant l’adjectif et nhiều après le verbe : les deux disent « beaucoup », mais pas au même endroit.',
      w: { 'Rất': ['très', 'Se place avant l’adjectif'], 'vui': ['content, joyeux', ''], 'được': ['avoir l’occasion de', 'Marque de type passif pour les choses agréables'], 'gặp': ['rencontrer', ''], 'bạn': ['toi, vous', ''] }
    },
    'Cho tôi một ly cà phê sữa đá.': {
      t: 'Un café au lait glacé, s’il vous plaît.',
      note: 'Les quantités suivent l’ordre nombre + classificateur + nom, et les boissons se nomment de la base vers les ajouts.',
      w: { 'Cho': ['donner → s’il vous plaît', 'En début de phrase, exprime une demande'], 'tôi': ['à moi', ''], 'một': ['un', ''], 'ly': ['verre (classificateur)', 'Mot du Sud ; cốc au Nord'], 'cà phê': ['café', 'Du français « café »'], 'sữa': ['lait', ''], 'đá': ['glace', ''] }
    },
    'Cái này giá bao nhiêu?': {
      t: 'Combien coûte ceci ?',
      note: 'Les démonstratifs suivent le nom : cái này, littéralement « chose + celle-ci ».',
      w: { 'Cái': ['chose (classificateur)', 'Le classificateur le plus général'], 'này': ['ce, ceci', 'Se place après le nom'], 'giá': ['prix', ''], 'bao nhiêu': ['combien', 'Pour les quantités au-dessus de dix'] }
    },
    'Tôi không hiểu.': {
      t: 'Je ne comprends pas.',
      note: 'Pour la négation, il suffit de placer không devant le verbe. Les verbes ne se conjuguent pas.',
      w: { 'Tôi': ['je', ''], 'không': ['ne… pas', 'Juste avant le verbe ou l’adjectif'], 'hiểu': ['comprendre', ''] }
    },
    'Xin lỗi, nhà vệ sinh ở đâu?': {
      t: 'Excusez-moi, où sont les toilettes ?',
      note: 'Les mots interrogatifs restent là où irait la réponse ; ils ne remontent pas en tête de phrase.',
      w: { 'Xin lỗi': ['excusez-moi, pardon', 'Sert à s’excuser et à interpeller'], 'nhà vệ sinh': ['toilettes', 'Littéralement « maison d’hygiène »'], 'ở': ['se trouver à', ''], 'đâu': ['où', 'Se place à la fin'] }
    },
    'Món này rất ngon.': {
      t: 'Ce plat est très bon.',
      note: 'On ne met jamais là devant un adjectif : « Món này là ngon » est incorrect.',
      w: { 'Món': ['plat', ''], 'này': ['ce', ''], 'rất': ['très', ''], 'ngon': ['bon, savoureux', ''] }
    },
    'Hẹn gặp lại nhé!': {
      t: 'À bientôt !',
      note: 'La particule finale nhé adoucit la phrase, comme un « d’accord ? » amical.',
      w: { 'Hẹn': ['convenir d’un rendez-vous', ''], 'gặp': ['rencontrer', ''], 'lại': ['de nouveau', 'Se place après le verbe'], 'nhé': ['finale amicale', 'Avec un aîné, on utilise ạ'] }
    },
    'Tôi muốn học tiếng Việt.': {
      t: 'Je veux apprendre le vietnamien.',
      note: 'người + pays signifie « personne de… » et tiếng + pays « langue de… ». Deux schémas, beaucoup de vocabulaire.',
      w: { 'Tôi': ['je', ''], 'muốn': ['vouloir', 'Se place avant le verbe'], 'học': ['apprendre', ''], 'tiếng': ['langue', 'Devant un pays : « la langue de… »'], 'Việt': ['Vietnam', ''] }
    },
    'Hôm nay trời đẹp quá!': {
      t: 'Il fait très beau aujourd’hui !',
      note: 'Le temps vient de mots comme hôm nay ou ngày mai, pas du verbe, qui reste invariable.',
      w: { 'Hôm nay': ['aujourd’hui', 'Les mots de temps se placent souvent en tête'], 'trời': ['ciel, temps', ''], 'đẹp': ['beau', ''], 'quá': ['vraiment, trop', 'Après l’adjectif, donne un ton exclamatif'] }
    },
    'Bạn nói tiếng Anh được không?': {
      t: 'Parlez-vous anglais ?',
      note: 'Verbe + objet + được không ? est la tournure standard pour demander si quelque chose est possible.',
      w: { 'Bạn': ['tu, vous', ''], 'nói': ['parler', ''], 'tiếng Anh': ['anglais', ''], 'được không': ['pouvez-vous… ?', 'À la fin, interroge sur la capacité'] }
    },
    'Tôi bị lạc đường.': {
      t: 'Je me suis perdu.',
      note: 'bị et được forment une paire de marques passives : bị pour le désagréable, được pour l’agréable.',
      w: { 'Tôi': ['je', ''], 'bị': ['subir (passif)', 'Pour les événements fâcheux ; sinon được'], 'lạc': ['se perdre', ''], 'đường': ['route, chemin', ''] }
    },
    'Làm ơn nói chậm hơn.': {
      t: 'Parlez plus lentement, s’il vous plaît.',
      note: 'Le comparatif, c’est simplement adjectif + hơn : đẹp hơn (plus beau), rẻ hơn (moins cher).',
      w: { 'Làm ơn': ['s’il vous plaît', 'Demande polie en début de phrase'], 'nói': ['parler', ''], 'chậm': ['lent', ''], 'hơn': ['plus', 'Après l’adjectif, forme le comparatif'] }
    },
    'Tôi sống ở Hà Nội.': {
      t: 'J’habite à Hanoï.',
      note: 'Les noms de lieux prennent une majuscule à chaque syllabe (Hà Nội, Hồ Chí Minh) et les tons font partie de l’orthographe.',
      w: { 'Tôi': ['je', ''], 'sống': ['vivre, habiter', ''], 'ở': ['à', 'Indique le lieu'], 'Hà Nội': ['Hanoï', 'Littéralement « à l’intérieur du fleuve »'] }
    },
    'Ngày mai tôi đi làm.': {
      t: 'Demain, je vais au travail.',
      note: 'Un mot de temps suffit pour le futur : sẽ (« va ») peut être omis. Le verbe ne change pas.',
      w: { 'Ngày mai': ['demain', 'Littéralement « le jour qui vient »'], 'tôi': ['je', ''], 'đi': ['aller', ''], 'làm': ['travailler', 'đi làm : « aller travailler »'] }
    },
    'Chúc ngủ ngon!': {
      t: 'Bonne nuit !',
      note: 'ngon veut dire « savoureux » mais aussi « agréable » : ngủ ngon, c’est « dors bien ».',
      w: { 'Chúc': ['souhaiter', 'Aussi dans Chúc mừng — félicitations'], 'ngủ': ['dormir', ''], 'ngon': ['agréable', 'Pour la nourriture : « savoureux »'] }
    }
  }
});
