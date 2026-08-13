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

    recallTitle: 'Essayez de vous en souvenir',
    recallSub: 'Comment le dit-on en vietnamien ? Si vous le savez déjà, tapez-le',
    revealNow: 'Afficher maintenant',

    answerPlaceholder: 'Tapez ici (chaof devient chào)',
    answerLabel: 'Saisie en vietnamien',
    micLabel: 'Saisie vocale (parlez en vietnamien)',
    settingsLabel: 'Réglages',

    setTitle: 'Réglages',
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

  pos: {
    polite: 'particule de politesse', verb: 'verbe', pronoun: 'pronom', adverb: 'adverbe', noun: 'nom',
    copula: 'copule', proper: 'nom propre', adjective: 'adjectif', question: 'mot interrogatif',
    questionExpr: 'tournure interrogative', auxiliary: 'auxiliaire', numeral: 'numéral', classifier: 'classificateur',
    demonstrative: 'démonstratif', negator: 'négation', idiom: 'expression figée', particle: 'particule finale',
    preposition: 'préposition', comparative: 'comparatif', passive: 'marque du passif', verbPrep: 'verbe / préposition'
  },

  phrases: {
    'Xin chào!': {
      t: 'Bonjour !', caption: 'Salutation',
      note: 'Valable à toute heure. Plus naturel si l’on s’adapte à l’interlocuteur : Chào anh (homme plus âgé) / Chào chị (femme plus âgée).',
      w: { 'Xin': ['s’il vous plaît', 'Devant le verbe, ajoute de la politesse'], 'chào': ['saluer', 'Correspond à « bonjour »'] }
    },
    'Cảm ơn bạn nhiều.': {
      t: 'Merci beaucoup.', caption: 'Remercier',
      note: 'Le vietnamien suit l’ordre verbe + objet + degré : nhiều vient donc à la fin, et non devant le verbe.',
      w: { 'Cảm ơn': ['remercier', 'Mot d’origine sino-vietnamienne'], 'bạn': ['toi (même âge)', 'Signifie à l’origine « ami »'], 'nhiều': ['beaucoup', 'Après le verbe, pour le renforcer'] }
    },
    'Tôi tên là Nam.': {
      t: 'Je m’appelle Nam.', caption: 'Se présenter',
      note: 'Il suffit d’aligner les mots : je – nom – être – Nam. Aucun possessif n’est nécessaire.',
      w: { 'Tôi': ['je', 'Pronom neutre, utilisable avec des inconnus et des aînés'], 'tên': ['nom', ''], 'là': ['être', 'Relie deux noms ; jamais devant un adjectif'], 'Nam': ['Nam (prénom)', ''] }
    },
    'Bạn khỏe không?': {
      t: 'Comment allez-vous ?', caption: 'Prendre des nouvelles',
      note: 'không signifie « ne… pas » devant le verbe, mais transforme la phrase en question à la fin.',
      w: { 'Bạn': ['tu, vous', ''], 'khỏe': ['en forme, en bonne santé', 'Les adjectifs se rattachent directement, sans là'], 'không': ['particule interrogative', 'À la fin, crée une question oui/non'] }
    },
    'Tôi là người Nhật.': {
      t: 'Je suis japonais.', caption: 'Nationalité',
      note: 'Les compléments suivent le nom : người Nhật, littéralement « personne + Japon ».',
      w: { 'Tôi': ['je', ''], 'là': ['être', ''], 'người': ['personne', 'Devant un nom de pays, forme le gentilé'], 'Nhật': ['Japon', 'Officiellement Nhật Bản'] }
    },
    'Rất vui được gặp bạn.': {
      t: 'Enchanté de vous rencontrer.', caption: 'Première rencontre',
      note: 'rất se place avant l’adjectif et nhiều après le verbe : les deux disent « beaucoup », mais pas au même endroit.',
      w: { 'Rất': ['très', 'Se place avant l’adjectif'], 'vui': ['content, joyeux', ''], 'được': ['avoir l’occasion de', 'Marque de type passif pour les choses agréables'], 'gặp': ['rencontrer', ''], 'bạn': ['toi, vous', ''] }
    },
    'Cho tôi một ly cà phê sữa đá.': {
      t: 'Un café au lait glacé, s’il vous plaît.', caption: 'Commander au café',
      note: 'Les quantités suivent l’ordre nombre + classificateur + nom, et les boissons se nomment de la base vers les ajouts.',
      w: { 'Cho': ['donner → s’il vous plaît', 'En début de phrase, exprime une demande'], 'tôi': ['à moi', ''], 'một': ['un', ''], 'ly': ['verre (classificateur)', 'Mot du Sud ; cốc au Nord'], 'cà phê': ['café', 'Du français « café »'], 'sữa': ['lait', ''], 'đá': ['glace', ''] }
    },
    'Cái này giá bao nhiêu?': {
      t: 'Combien coûte ceci ?', caption: 'Faire des achats',
      note: 'Les démonstratifs suivent le nom : cái này, littéralement « chose + celle-ci ».',
      w: { 'Cái': ['chose (classificateur)', 'Le classificateur le plus général'], 'này': ['ce, ceci', 'Se place après le nom'], 'giá': ['prix', ''], 'bao nhiêu': ['combien', 'Pour les quantités au-dessus de dix'] }
    },
    'Tôi không hiểu.': {
      t: 'Je ne comprends pas.', caption: 'Faire répéter',
      note: 'Pour la négation, il suffit de placer không devant le verbe. Les verbes ne se conjuguent pas.',
      w: { 'Tôi': ['je', ''], 'không': ['ne… pas', 'Juste avant le verbe ou l’adjectif'], 'hiểu': ['comprendre', ''] }
    },
    'Xin lỗi, nhà vệ sinh ở đâu?': {
      t: 'Excusez-moi, où sont les toilettes ?', caption: 'Demander un lieu',
      note: 'Les mots interrogatifs restent là où irait la réponse ; ils ne remontent pas en tête de phrase.',
      w: { 'Xin lỗi': ['excusez-moi, pardon', 'Sert à s’excuser et à interpeller'], 'nhà vệ sinh': ['toilettes', 'Littéralement « maison d’hygiène »'], 'ở': ['se trouver à', ''], 'đâu': ['où', 'Se place à la fin'] }
    },
    'Món này rất ngon.': {
      t: 'Ce plat est très bon.', caption: 'Au repas',
      note: 'On ne met jamais là devant un adjectif : « Món này là ngon » est incorrect.',
      w: { 'Món': ['plat', ''], 'này': ['ce', ''], 'rất': ['très', ''], 'ngon': ['bon, savoureux', ''] }
    },
    'Hẹn gặp lại nhé!': {
      t: 'À bientôt !', caption: 'Prendre congé',
      note: 'La particule finale nhé adoucit la phrase, comme un « d’accord ? » amical.',
      w: { 'Hẹn': ['convenir d’un rendez-vous', ''], 'gặp': ['rencontrer', ''], 'lại': ['de nouveau', 'Se place après le verbe'], 'nhé': ['finale amicale', 'Avec un aîné, on utilise ạ'] }
    },
    'Tôi muốn học tiếng Việt.': {
      t: 'Je veux apprendre le vietnamien.', caption: 'Envie d’apprendre',
      note: 'người + pays signifie « personne de… » et tiếng + pays « langue de… ». Deux schémas, beaucoup de vocabulaire.',
      w: { 'Tôi': ['je', ''], 'muốn': ['vouloir', 'Se place avant le verbe'], 'học': ['apprendre', ''], 'tiếng': ['langue', 'Devant un pays : « la langue de… »'], 'Việt': ['Vietnam', ''] }
    },
    'Hôm nay trời đẹp quá!': {
      t: 'Il fait très beau aujourd’hui !', caption: 'Parler du temps',
      note: 'Le temps vient de mots comme hôm nay ou ngày mai, pas du verbe, qui reste invariable.',
      w: { 'Hôm nay': ['aujourd’hui', 'Les mots de temps se placent souvent en tête'], 'trời': ['ciel, temps', ''], 'đẹp': ['beau', ''], 'quá': ['vraiment, trop', 'Après l’adjectif, donne un ton exclamatif'] }
    },
    'Bạn nói tiếng Anh được không?': {
      t: 'Parlez-vous anglais ?', caption: 'Vérifier',
      note: 'Verbe + objet + được không ? est la tournure standard pour demander si quelque chose est possible.',
      w: { 'Bạn': ['tu, vous', ''], 'nói': ['parler', ''], 'tiếng Anh': ['anglais', ''], 'được không': ['pouvez-vous… ?', 'À la fin, interroge sur la capacité'] }
    },
    'Tôi bị lạc đường.': {
      t: 'Je me suis perdu.', caption: 'Problème',
      note: 'bị et được forment une paire de marques passives : bị pour le désagréable, được pour l’agréable.',
      w: { 'Tôi': ['je', ''], 'bị': ['subir (passif)', 'Pour les événements fâcheux ; sinon được'], 'lạc': ['se perdre', ''], 'đường': ['route, chemin', ''] }
    },
    'Làm ơn nói chậm hơn.': {
      t: 'Parlez plus lentement, s’il vous plaît.', caption: 'Faire une demande',
      note: 'Le comparatif, c’est simplement adjectif + hơn : đẹp hơn (plus beau), rẻ hơn (moins cher).',
      w: { 'Làm ơn': ['s’il vous plaît', 'Demande polie en début de phrase'], 'nói': ['parler', ''], 'chậm': ['lent', ''], 'hơn': ['plus', 'Après l’adjectif, forme le comparatif'] }
    },
    'Tôi sống ở Hà Nội.': {
      t: 'J’habite à Hanoï.', caption: 'Où l’on habite',
      note: 'Les noms de lieux prennent une majuscule à chaque syllabe (Hà Nội, Hồ Chí Minh) et les tons font partie de l’orthographe.',
      w: { 'Tôi': ['je', ''], 'sống': ['vivre, habiter', ''], 'ở': ['à', 'Indique le lieu'], 'Hà Nội': ['Hanoï', 'Littéralement « à l’intérieur du fleuve »'] }
    },
    'Ngày mai tôi đi làm.': {
      t: 'Demain, je vais au travail.', caption: 'Projets',
      note: 'Un mot de temps suffit pour le futur : sẽ (« va ») peut être omis. Le verbe ne change pas.',
      w: { 'Ngày mai': ['demain', 'Littéralement « le jour qui vient »'], 'tôi': ['je', ''], 'đi': ['aller', ''], 'làm': ['travailler', 'đi làm : « aller travailler »'] }
    },
    'Chúc ngủ ngon!': {
      t: 'Bonne nuit !', caption: 'Avant de dormir',
      note: 'ngon veut dire « savoureux » mais aussi « agréable » : ngủ ngon, c’est « dors bien ».',
      w: { 'Chúc': ['souhaiter', 'Aussi dans Chúc mừng — félicitations'], 'ngủ': ['dormir', ''], 'ngon': ['agréable', 'Pour la nourriture : « savoureux »'] }
    }
  }
});
