I18N.register('de', {
  ui: {
    title: 'Tiếng Việt Drill — Vietnamesisch üben',
    gateTitle: 'Tipp- und Aussprachetraining für Vietnamesisch',
    step1: 'Bild und Übersetzung ansehen und das Vietnamesische erinnern',
    step2: 'Bei Tonzeichen erscheint ein TELEX-Hinweis',
    step3: 'Kein UniKey nötig: chaof tippen ergibt chào',
    step4: 'Der Satz erscheint und wird zweimal vorgelesen (beim zweiten Mal langsamer)',
    step5: 'Die Spracheingabe schaltet sich selbst ein. Sprechen oder tippen',
    step6: 'Richtige Eingaben werden beim Tippen erkannt. Enter überspringt (kommt später wieder)',
    start: '▶ Üben starten',
    gateNote1: 'Für Sprachausgabe und Spracherkennung werden Chrome oder Edge empfohlen.',
    gateNote2: 'Wartezeit und Lesegeschwindigkeit lassen sich über ⚙️ ändern.',
    source: 'Quellcode',

    recallTitle: 'Versuch dich zu erinnern',
    recallSub: 'Wie heißt das auf Vietnamesisch? Wer es weiß, tippt einfach los',
    revealNow: 'Jetzt anzeigen',

    answerPlaceholder: 'Hier tippen (chaof wird zu chào)',
    answerLabel: 'Vietnamesische Eingabe',
    micLabel: 'Spracheingabe (auf Vietnamesisch sprechen)',
    settingsLabel: 'Einstellungen',

    setTitle: 'Einstellungen',
    setLang: 'Sprache',
    setDelay: 'Wartezeit, bis der Satz erscheint',
    setRate1: 'Lesegeschwindigkeit (1. Mal)',
    setRate2: 'Lesegeschwindigkeit (2. Mal, langsamer)',
    setTelex: 'TELEX automatisch umwandeln (ohne UniKey)',
    setAutoSpeak: 'Satz beim Erscheinen zweimal vorlesen',
    setAutoListen: 'Nach dem Vorlesen zur Spracheingabe wechseln',
    setVoiceAdvance: 'Weiter, wenn die Aussprache stimmt',
    setShuffle: 'Reihenfolge mischen',
    setVoice: 'Vietnamesische Stimme',
    reset: 'Fortschritt zurücksetzen',
    close: 'Schließen',
    seconds: '{n} s',
    noVoice: 'Keine vietnamesische Stimme gefunden',

    speak1: '🔊 1. Mal (normales Tempo)',
    speak2: '🐢 2. Mal (langsamer)',
    listening: '🎙️ Ich höre zu … sag es auf Vietnamesisch',
    typeOrSpeak: 'Tippe es, oder drücke 🎤 und sprich',
    keepGoing: 'Weiter so!',
    checkSpelling: 'Prüfe die Schreibweise',
    typing: 'Eingabe … (noch besser, wenn du es vor dem Erscheinen tippst!)',
    noSpeech: 'Nichts gehört. Drücke 🎤 für einen neuen Versuch',
    keyboardOk: 'Du kannst auch mit der Tastatur weitermachen',
    voiceOkEnter: 'Die Aussprache stimmt. Mit Enter geht es weiter',
    toneAgain: 'Die Buchstaben stimmen — achte auf die Töne und versuch es nochmal 🎤',
    heard: 'Gehört: „{text}“. Drücke 🎤 für einen neuen Versuch',
    correctVoice: 'Richtig — laut gesprochen!',
    correct: 'Richtig!',
    correctPerfect: 'Perfekt, ohne Fehler!',
    finishHint: 'Für eine neue Runde „Fortschritt zurücksetzen“ in ⚙️ verwenden',

    voiceOkTitle: 'Aussprache stimmt!',
    voiceOkBody: 'Gehört: „{text}“',
    closeTitle: 'Fast!',
    closeBody: 'Achte auf die Töne',
    skipTitle: 'Übersprungen',
    srOffTitle: 'Zur Spracheingabe',
    srOffBody: 'Dieser Browser unterstützt keine Spracherkennung. Üben per Tastatur funktioniert weiterhin.',
    ttsOffTitle: 'Vorlesen nicht möglich',
    ttsOffBody: 'Dieser Browser kann nicht vorlesen. Lesen und Tippen funktionieren weiterhin.',
    noVoiceTitle: 'Keine vietnamesische Stimme installiert',
    noVoiceBody: 'Füge Vietnamesisch in den Sprachausgabe-Einstellungen des Systems hinzu, um das Vorlesen zu aktivieren.',
    noVoiceWin: 'Unter Windows: Win + X und dann A drücken, um das Terminal als Administrator zu öffnen, dann  Add-WindowsCapability -Online -Name "Language.TextToSpeech~~~vi-VN~0.0.1.0"  ausführen und den PC neu starten.',
    micDeniedTitle: 'Mikrofon nicht verfügbar',
    micDeniedBody: 'Prüfe die Mikrofonberechtigung im Browser.',
    doneTitle: 'Chúc mừng!',
    doneBody: 'Du hast alle Sätze geschafft',
    finishText: 'Alle Sätze geschafft. Gut gemacht!',
    accuracy: 'Genauigkeit {pct} ({a} von {b} ohne Fehler)'
  },

  pos: {
    polite: 'Höflichkeitswort', verb: 'Verb', pronoun: 'Pronomen', adverb: 'Adverb', noun: 'Substantiv',
    copula: 'Kopula', proper: 'Eigenname', adjective: 'Adjektiv', question: 'Fragewort',
    questionExpr: 'Frageausdruck', auxiliary: 'Hilfsverb', numeral: 'Zahlwort', classifier: 'Zähleinheitswort',
    demonstrative: 'Demonstrativum', negator: 'Verneinung', idiom: 'feste Wendung', particle: 'Schlusspartikel',
    preposition: 'Präposition', comparative: 'Komparativ', passive: 'Passivmarker', verbPrep: 'Verb / Präposition'
  },

  phrases: {
    'Xin chào!': {
      t: 'Hallo!',
      note: 'Zu jeder Tageszeit passend. Natürlicher wird es, wenn man das Gegenüber anspricht: Chào anh (älterer Mann) / Chào chị (ältere Frau).',
      w: { 'Xin': ['bitte', 'Vor dem Verb macht es den Satz höflicher'], 'chào': ['grüßen', 'Entspricht „hallo“'] }
    },
    'Cảm ơn bạn nhiều.': {
      t: 'Vielen Dank.',
      note: 'Vietnamesisch ordnet Verb + Objekt + Grad, deshalb steht nhiều am Ende und nicht vor dem Verb.',
      w: { 'Cảm ơn': ['danken', 'Ein sino-vietnamesisches Wort'], 'bạn': ['du (gleichaltrig)', 'Ursprünglich „Freund“'], 'nhiều': ['viel', 'Steht hinter dem Verb und verstärkt es'] }
    },
    'Tôi tên là Nam.': {
      t: 'Ich heiße Nam.',
      note: 'Einfach aneinanderreihen: ich – Name – sein – Nam. Ein Possessivwort ist nicht nötig.',
      w: { 'Tôi': ['ich', 'Neutrales Pronomen, auch bei Fremden und Älteren'], 'tên': ['Name', ''], 'là': ['sein', 'Verbindet zwei Substantive; nie vor einem Adjektiv'], 'Nam': ['Nam (Vorname)', ''] }
    },
    'Bạn khỏe không?': {
      t: 'Wie geht es dir?',
      note: 'không heißt vor dem Verb „nicht“, macht den Satz am Ende aber zur Frage.',
      w: { 'Bạn': ['du', ''], 'khỏe': ['gesund, munter', 'Adjektive folgen direkt, ohne là'], 'không': ['Fragepartikel', 'Am Satzende entsteht eine Ja/Nein-Frage'] }
    },
    'Tôi là người Nhật.': {
      t: 'Ich bin Japaner.',
      note: 'Bestimmungen stehen hinten: người Nhật heißt wörtlich „Person + Japan“.',
      w: { 'Tôi': ['ich', ''], 'là': ['sein', ''], 'người': ['Mensch, Person', 'Vor einem Ländernamen ergibt es die Volkszugehörigkeit'], 'Nhật': ['Japan', 'Offiziell Nhật Bản'] }
    },
    'Rất vui được gặp bạn.': {
      t: 'Schön, dich kennenzulernen.',
      note: 'rất steht vor dem Adjektiv, nhiều hinter dem Verb — beide heißen „sehr / viel“, stehen aber verschieden.',
      w: { 'Rất': ['sehr', 'Steht vor dem Adjektiv'], 'vui': ['froh, fröhlich', ''], 'được': ['dürfen, die Gelegenheit haben', 'Passivartiger Marker für Erfreuliches'], 'gặp': ['treffen', ''], 'bạn': ['du, dich', ''] }
    },
    'Cho tôi một ly cà phê sữa đá.': {
      t: 'Einen Eiskaffee mit Milch, bitte.',
      note: 'Mengen folgen dem Muster Zahl + Zähleinheitswort + Substantiv, Getränke werden von der Basis zu den Zutaten benannt.',
      w: { 'Cho': ['geben → bitte', 'Am Satzanfang wird daraus eine Bitte'], 'tôi': ['mir', ''], 'một': ['eins', ''], 'ly': ['Glas (Zähleinheitswort)', 'Südliches Wort; im Norden cốc'], 'cà phê': ['Kaffee', 'Vom französischen café'], 'sữa': ['Milch', ''], 'đá': ['Eis', ''] }
    },
    'Cái này giá bao nhiêu?': {
      t: 'Was kostet das?',
      note: 'Demonstrativa stehen hinter dem Substantiv: cái này heißt wörtlich „Ding + dieses“.',
      w: { 'Cái': ['Ding (Zähleinheitswort)', 'Das allgemeinste Zähleinheitswort'], 'này': ['dieses', 'Steht hinter dem Substantiv'], 'giá': ['Preis', ''], 'bao nhiêu': ['wie viel', 'Für Mengen über zehn'] }
    },
    'Tôi không hiểu.': {
      t: 'Ich verstehe nicht.',
      note: 'Zum Verneinen genügt không vor dem Verb. Verben werden nie gebeugt.',
      w: { 'Tôi': ['ich', ''], 'không': ['nicht', 'Direkt vor Verb oder Adjektiv'], 'hiểu': ['verstehen', ''] }
    },
    'Xin lỗi, nhà vệ sinh ở đâu?': {
      t: 'Entschuldigung, wo ist die Toilette?',
      note: 'Fragewörter bleiben dort, wo die Antwort stünde; sie rücken nicht an den Satzanfang.',
      w: { 'Xin lỗi': ['Entschuldigung', 'Zum Entschuldigen und zum Ansprechen'], 'nhà vệ sinh': ['Toilette', 'Wörtlich „Haus der Hygiene“'], 'ở': ['sich befinden in', ''], 'đâu': ['wo', 'Steht am Ende'] }
    },
    'Món này rất ngon.': {
      t: 'Dieses Gericht ist sehr lecker.',
      note: 'Vor einem Adjektiv steht nie là: „Món này là ngon“ ist falsch.',
      w: { 'Món': ['Gericht', ''], 'này': ['dieses', ''], 'rất': ['sehr', ''], 'ngon': ['lecker', ''] }
    },
    'Hẹn gặp lại nhé!': {
      t: 'Bis bald!',
      note: 'Die Schlusspartikel nhé macht den Satz weicher, wie ein freundliches „okay?“.',
      w: { 'Hẹn': ['verabreden', ''], 'gặp': ['treffen', ''], 'lại': ['wieder', 'Steht hinter dem Verb'], 'nhé': ['freundlicher Schluss', 'Bei Älteren nimmt man ạ'] }
    },
    'Tôi muốn học tiếng Việt.': {
      t: 'Ich möchte Vietnamesisch lernen.',
      note: 'người + Land heißt „Mensch aus …“, tiếng + Land „Sprache von …“. Zwei Muster, viele neue Wörter.',
      w: { 'Tôi': ['ich', ''], 'muốn': ['wollen', 'Steht vor dem Verb'], 'học': ['lernen', ''], 'tiếng': ['Sprache', 'Vor einem Ländernamen: „die Sprache von …“'], 'Việt': ['Vietnam', ''] }
    },
    'Hôm nay trời đẹp quá!': {
      t: 'Heute ist das Wetter herrlich!',
      note: 'Die Zeitstufe kommt von Wörtern wie hôm nay oder ngày mai, nicht vom Verb, das unverändert bleibt.',
      w: { 'Hôm nay': ['heute', 'Zeitangaben stehen meist am Anfang'], 'trời': ['Himmel, Wetter', ''], 'đẹp': ['schön', ''], 'quá': ['so, wirklich', 'Hinter dem Adjektiv klingt es wie ein Ausruf'] }
    },
    'Bạn nói tiếng Anh được không?': {
      t: 'Sprichst du Englisch?',
      note: 'Verb + Objekt + được không? ist die übliche Frage danach, ob etwas möglich ist.',
      w: { 'Bạn': ['du', ''], 'nói': ['sprechen', ''], 'tiếng Anh': ['Englisch', ''], 'được không': ['kannst du …?', 'Am Ende fragt es nach der Fähigkeit'] }
    },
    'Tôi bị lạc đường.': {
      t: 'Ich habe mich verlaufen.',
      note: 'bị und được sind ein Paar von Passivmarkern: bị für Unangenehmes, được für Erfreuliches.',
      w: { 'Tôi': ['ich', ''], 'bị': ['erleiden (Passiv)', 'Für unerwünschte Ereignisse; sonst được'], 'lạc': ['sich verirren', ''], 'đường': ['Weg, Straße', ''] }
    },
    'Làm ơn nói chậm hơn.': {
      t: 'Sprich bitte langsamer.',
      note: 'Der Komparativ ist einfach Adjektiv + hơn: đẹp hơn (schöner), rẻ hơn (billiger).',
      w: { 'Làm ơn': ['bitte', 'Höfliche Bitte am Satzanfang'], 'nói': ['sprechen', ''], 'chậm': ['langsam', ''], 'hơn': ['mehr, -er', 'Hinter dem Adjektiv bildet es den Komparativ'] }
    },
    'Tôi sống ở Hà Nội.': {
      t: 'Ich wohne in Hanoi.',
      note: 'Ortsnamen schreibt man silbenweise groß (Hà Nội, Hồ Chí Minh), und die Tonzeichen gehören zur Schreibweise.',
      w: { 'Tôi': ['ich', ''], 'sống': ['leben, wohnen', ''], 'ở': ['in', 'Gibt den Ort an'], 'Hà Nội': ['Hanoi', 'Wörtlich „innerhalb des Flusses“'] }
    },
    'Ngày mai tôi đi làm.': {
      t: 'Morgen gehe ich zur Arbeit.',
      note: 'Für die Zukunft genügt ein Zeitwort, sẽ („wird“) kann entfallen. Das Verb bleibt unverändert.',
      w: { 'Ngày mai': ['morgen', 'Wörtlich „der kommende Tag“'], 'tôi': ['ich', ''], 'đi': ['gehen', ''], 'làm': ['arbeiten', 'đi làm heißt „zur Arbeit gehen“'] }
    },
    'Chúc ngủ ngon!': {
      t: 'Gute Nacht!',
      note: 'ngon heißt „lecker“ und „angenehm“, ngủ ngon also „schlaf gut“.',
      w: { 'Chúc': ['wünschen', 'Auch in Chúc mừng — herzlichen Glückwunsch'], 'ngủ': ['schlafen', ''], 'ngon': ['angenehm', 'Beim Essen „lecker“'] }
    }
  }
});
