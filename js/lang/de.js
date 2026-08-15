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
    setCategory: 'Kategorie',
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

  cats: { all: 'Alle', greeting: 'Begrüßung', food: 'Essen', animal: 'Tiere', flower: 'Blumen', travel: 'Reisen', place: 'Orte' },

  pos: {
    polite: 'Höflichkeitswort', verb: 'Verb', pronoun: 'Pronomen', adverb: 'Adverb', noun: 'Substantiv',
    copula: 'Kopula', proper: 'Eigenname', adjective: 'Adjektiv', question: 'Fragewort',
    questionExpr: 'Frageausdruck', auxiliary: 'Hilfsverb', numeral: 'Zahlwort', classifier: 'Zähleinheitswort',
    demonstrative: 'Demonstrativum', negator: 'Verneinung', idiom: 'feste Wendung', particle: 'Schlusspartikel',
    preposition: 'Präposition', comparative: 'Komparativ', passive: 'Passivmarker', verbPrep: 'Verb / Präposition',
    aspect: 'Aspektmarker', quantifier: 'Mengenwort'
  },

  phrases: {
    'Chào buổi sáng!': {
      t: 'Guten Morgen!',
      note: 'buổi bezeichnet einen Tagesabschnitt: buổi sáng (Morgen), buổi trưa (Mittag), buổi tối (Abend).',
      w: { 'Chào': ['grüßen', 'Dasselbe Wort wie in Xin chào'], 'buổi sáng': ['Morgen', 'Wörtlich „der Morgenabschnitt des Tages“'] }
    },

    'Tôi muốn ăn phở bò.': {
      t: 'Ich möchte Rind-Phở essen.',
      note: 'Gerichtnamen gehen vom Gericht zur Zutat: phở bò (Rind), phở gà (Huhn).',
      w: { 'Tôi': ['ich', ''], 'muốn': ['wollen', 'Steht vor dem Verb'], 'ăn': ['essen', ''], 'phở': ['Phở', 'Reisnudelsuppe'], 'bò': ['Rind', ''] }
    },
    'Tôi thích ăn bánh mì.': {
      t: 'Ich esse gern Bánh mì.',
      note: 'Nach thích folgt das Verb direkt, ohne „zu“.',
      w: { 'Tôi': ['ich', ''], 'thích': ['mögen', ''], 'ăn': ['essen', ''], 'bánh mì': ['Brot, Bánh mì', 'bánh steht für Brot und Kuchen'] }
    },
    'Món này có cay không?': {
      t: 'Ist dieses Gericht scharf?',
      note: 'có … không? klammert das Wort ein, nach dem du fragst — das Standardmuster für Ja/Nein.',
      w: { 'Món': ['Gericht', ''], 'này': ['dieses', 'Steht hinter dem Substantiv'], 'có': ['haben, ist es…', 'Öffnet die Frage'], 'cay': ['scharf', ''], 'không': ['Fragepartikel', 'Schließt die Frage'] }
    },
    'Cho tôi thêm rau thơm.': {
      t: 'Noch etwas Kräuter, bitte.',
      note: 'thêm nach einem Verb heißt „mehr davon“: cho thêm, ăn thêm, nói thêm.',
      w: { 'Cho': ['geben → bitte', ''], 'tôi': ['mir', ''], 'thêm': ['hinzufügen, mehr', ''], 'rau thơm': ['frische Kräuter', 'Wörtlich „duftendes Gemüse“'] }
    },
    'Tôi không ăn được thịt.': {
      t: 'Ich kann kein Fleisch essen.',
      note: 'được nach dem Verb heißt „können“. Mit không … được wird daraus „nicht können“.',
      w: { 'Tôi': ['ich', ''], 'không': ['nicht', ''], 'ăn': ['essen', ''], 'được': ['können', 'Nach dem Verb steht es für Fähigkeit'], 'thịt': ['Fleisch', ''] }
    },
    'Chị ơi, tính tiền!': {
      t: 'Entschuldigung, die Rechnung bitte!',
      note: 'ơi ruft jemanden: chị ơi zu einer etwas älteren Frau, anh ơi zu einem Mann, em ơi zu jemandem Jüngerem.',
      w: { 'Chị': ['ältere Schwester → Sie', 'Anrede für eine etwas ältere Frau'], 'ơi': ['he, entschuldigen Sie', 'Ruf-Partikel'], 'tính tiền': ['abrechnen', 'Wörtlich „das Geld zählen“'] }
    },
    'Trái cây ở đây rất tươi.': {
      t: 'Das Obst hier ist sehr frisch.',
      note: 'ở đây heißt „hier“. Tausche es gegen ở đó (dort) oder ở kia (da drüben).',
      w: { 'Trái cây': ['Obst', 'Südliches Wort; im Norden quả'], 'ở': ['in, an', ''], 'đây': ['hier', ''], 'rất': ['sehr', ''], 'tươi': ['frisch', ''] }
    },
    'Bún chả là món Hà Nội.': {
      t: 'Bún chả ist ein Hanoier Gericht.',
      note: 'Ein Ortsname direkt hinter dem Substantiv sagt, woher es stammt: món Hà Nội, phở Nam Định.',
      w: { 'Bún chả': ['Bún chả', 'Gegrilltes Schweinefleisch mit Reisnudeln'], 'là': ['sein', ''], 'món': ['Gericht', ''], 'Hà Nội': ['Hanoi', ''] }
    },

    'Con mèo đang ngủ.': {
      t: 'Die Katze schläft gerade.',
      note: 'đang vor dem Verb markiert, was gerade passiert — wie „gerade dabei sein“.',
      w: { 'Con': ['Zähleinheitswort für Tiere', 'Steht vor fast jedem Tiernamen'], 'mèo': ['Katze', ''], 'đang': ['gerade', 'Markiert eine laufende Handlung'], 'ngủ': ['schlafen', ''] }
    },
    'Con chó rất trung thành.': {
      t: 'Hunde sind sehr treu.',
      note: 'Ohne Artikel und Pluralendung gilt der Satz für „der Hund“ wie für „Hunde“.',
      w: { 'Con': ['Zähleinheitswort für Tiere', ''], 'chó': ['Hund', ''], 'rất': ['sehr', ''], 'trung thành': ['treu', 'Sino-vietnamesisches Wort'] }
    },
    'Tôi nuôi một con chim.': {
      t: 'Ich halte einen Vogel.',
      note: 'Beim Zählen gilt Zahl + Zähleinheitswort + Substantiv, also steht con zwischen một und chim.',
      w: { 'Tôi': ['ich', ''], 'nuôi': ['halten, aufziehen', 'Für Tiere wie für Kinder'], 'một': ['eins', ''], 'con': ['Zähleinheitswort für Tiere', ''], 'chim': ['Vogel', ''] }
    },
    'Con trâu đang ăn cỏ.': {
      t: 'Der Wasserbüffel frisst gerade Gras.',
      note: 'Der Wasserbüffel gehört zum Bild des vietnamesischen Landlebens und steckt in vielen Sprichwörtern.',
      w: { 'Con': ['Zähleinheitswort für Tiere', ''], 'trâu': ['Wasserbüffel', ''], 'đang': ['gerade', ''], 'ăn': ['essen, fressen', ''], 'cỏ': ['Gras', ''] }
    },
    'Con voi rất to.': {
      t: 'Der Elefant ist sehr groß.',
      note: 'to und lớn heißen beide „groß“; to ist das alltäglichere Wort.',
      w: { 'Con': ['Zähleinheitswort für Tiere', ''], 'voi': ['Elefant', ''], 'rất': ['sehr', ''], 'to': ['groß', ''] }
    },
    'Con cá bơi trong ao.': {
      t: 'Der Fisch schwimmt im Teich.',
      note: 'trong heißt „innen“; dazu gehören ngoài (außen) und trên (oben).',
      w: { 'Con': ['Zähleinheitswort für Tiere', ''], 'cá': ['Fisch', ''], 'bơi': ['schwimmen', ''], 'trong': ['in', ''], 'ao': ['Teich', ''] }
    },
    'Con gà gáy mỗi sáng.': {
      t: 'Der Hahn kräht jeden Morgen.',
      note: 'mỗi heißt „jede/r“ und steht vor dem Substantiv: mỗi ngày, mỗi tuần.',
      w: { 'Con': ['Zähleinheitswort für Tiere', ''], 'gà': ['Huhn, Hahn', ''], 'gáy': ['krähen', ''], 'mỗi': ['jeden', ''], 'sáng': ['Morgen', ''] }
    },
    'Tôi sợ con rắn.': {
      t: 'Ich habe Angst vor Schlangen.',
      note: 'sợ nimmt sein Objekt direkt — ohne Präposition wie „vor“.',
      w: { 'Tôi': ['ich', ''], 'sợ': ['sich fürchten', ''], 'con': ['Zähleinheitswort für Tiere', ''], 'rắn': ['Schlange', ''] }
    },
    'Con khỉ leo cây rất giỏi.': {
      t: 'Affen klettern sehr gut auf Bäume.',
      note: 'giỏi nach einer Verbphrase sagt, dass etwas gut gelingt: nói giỏi, học giỏi.',
      w: { 'Con': ['Zähleinheitswort für Tiere', ''], 'khỉ': ['Affe', ''], 'leo': ['klettern', ''], 'cây': ['Baum', ''], 'rất': ['sehr', ''], 'giỏi': ['gut darin', ''] }
    },
    'Con bướm đậu trên hoa.': {
      t: 'Der Schmetterling sitzt auf der Blume.',
      note: 'đậu benutzt man für Vögel und Insekten, die sich niederlassen; als Substantiv heißt es „Bohne“.',
      w: { 'Con': ['Zähleinheitswort für Tiere', ''], 'bướm': ['Schmetterling', ''], 'đậu': ['sich niederlassen', ''], 'trên': ['auf', ''], 'hoa': ['Blume', ''] }
    },

    'Hoa sen là quốc hoa.': {
      t: 'Der Lotus ist die Nationalblume.',
      note: 'quốc heißt in sino-vietnamesischen Wörtern „Nation“: quốc hoa, quốc kỳ (Flagge), quốc ca (Hymne).',
      w: { 'Hoa sen': ['Lotus', 'Ein Symbol Vietnams'], 'là': ['sein', ''], 'quốc hoa': ['Nationalblume', ''] }
    },
    'Hoa đào nở vào mùa xuân.': {
      t: 'Pfirsichblüten blühen im Frühling.',
      note: 'vào markiert sowohl einen Zeitpunkt als auch die Bewegung hinein.',
      w: { 'Hoa đào': ['Pfirsichblüte', 'Die Tết-Blume des Nordens'], 'nở': ['blühen', ''], 'vào': ['in, im', ''], 'mùa xuân': ['Frühling', 'mùa = Jahreszeit'] }
    },
    'Hoa mai vàng rất đẹp.': {
      t: 'Die gelbe Aprikosenblüte ist sehr schön.',
      note: 'Farben stehen hinter dem Substantiv: hoa mai vàng, áo dài trắng.',
      w: { 'Hoa mai': ['Aprikosenblüte', 'Die Tết-Blume des Südens'], 'vàng': ['gelb, golden', ''], 'rất': ['sehr', ''], 'đẹp': ['schön', ''] }
    },
    'Tôi tặng em một bó hoa.': {
      t: 'Ich schenke dir einen Blumenstrauß.',
      note: 'bó ist das Zähleinheitswort für Bündel; für eine einzelne Blüte nimmt man cành.',
      w: { 'Tôi': ['ich', ''], 'tặng': ['schenken', ''], 'em': ['du (jünger)', 'Auch unter Paaren'], 'một': ['ein', ''], 'bó': ['Strauß (Zähleinheitswort)', ''], 'hoa': ['Blume', ''] }
    },
    'Vườn nhà tôi có nhiều hoa.': {
      t: 'In meinem Garten gibt es viele Blumen.',
      note: 'Besitz ist reine Wortstellung: vườn nhà tôi = Garten – Haus – ich.',
      w: { 'Vườn': ['Garten', ''], 'nhà': ['Haus', ''], 'tôi': ['ich, mein', ''], 'có': ['haben, es gibt', ''], 'nhiều': ['viele', 'Vor einem Substantiv „viele“'], 'hoa': ['Blume', ''] }
    },
    'Hoa hồng có gai.': {
      t: 'Rosen haben Dornen.',
      note: 'hồng heißt hier „Rose“, aber auch „rosa“ — die Blume gab der Farbe den Namen.',
      w: { 'Hoa hồng': ['Rose', ''], 'có': ['haben', ''], 'gai': ['Dorn', ''] }
    },
    'Mùi hoa nhài rất thơm.': {
      t: 'Jasmin duftet sehr gut.',
      note: 'thơm gilt für guten Geruch ebenso wie für guten Geschmack.',
      w: { 'Mùi': ['Geruch', ''], 'hoa nhài': ['Jasmin', 'Der aus dem Jasmintee'], 'rất': ['sehr', ''], 'thơm': ['duftend', ''] }
    },
    'Hoa hướng dương quay về mặt trời.': {
      t: 'Sonnenblumen drehen sich zur Sonne.',
      note: 'hướng dương heißt wörtlich „der Sonne zugewandt“ — der Name erklärt den Satz.',
      w: { 'Hoa hướng dương': ['Sonnenblume', ''], 'quay': ['sich drehen', ''], 'về': ['zu, hin', ''], 'mặt trời': ['Sonne', 'Wörtlich „Gesicht des Himmels“'] }
    },
    'Hoa giấy leo trên tường.': {
      t: 'Die Bougainvillea rankt an der Wand.',
      note: 'hoa giấy heißt wörtlich „Papierblume“, wegen der papierdünnen Blätter.',
      w: { 'Hoa giấy': ['Bougainvillea', ''], 'leo': ['klettern, ranken', ''], 'trên': ['an, auf', ''], 'tường': ['Wand, Mauer', ''] }
    },
    'Chợ hoa rất đông vào Tết.': {
      t: 'Der Blumenmarkt ist zu Tết sehr voll.',
      note: 'đông heißt „voll, überfüllt“ (und auch „Winter“ und „Osten“ — der Kontext entscheidet).',
      w: { 'Chợ hoa': ['Blumenmarkt', 'chợ = Markt'], 'rất': ['sehr', ''], 'đông': ['voll', ''], 'vào': ['zu, während', ''], 'Tết': ['Tết', 'Mondneujahr'] }
    },

    'Cho tôi một vé đi Huế.': {
      t: 'Eine Fahrkarte nach Huế, bitte.',
      note: 'đi + Ort nennt das Ziel: vé đi Huế ist „eine Karte, die nach Huế fährt“.',
      w: { 'Cho': ['geben → bitte', ''], 'tôi': ['mir', ''], 'một': ['eins', ''], 'vé': ['Fahrkarte', ''], 'đi': ['gehen, fahren', ''], 'Huế': ['Huế', 'Stadt in Zentralvietnam'] }
    },
    'Khách sạn ở gần đây không?': {
      t: 'Gibt es hier in der Nähe ein Hotel?',
      note: 'gần đây heißt „hier in der Nähe“; gần ist „nah“, xa ist „weit“.',
      w: { 'Khách sạn': ['Hotel', 'Wörtlich „Gasthaus“'], 'ở': ['sich befinden', ''], 'gần đây': ['in der Nähe', ''], 'không': ['Fragepartikel', ''] }
    },
    'Tôi muốn thuê xe máy.': {
      t: 'Ich möchte ein Motorrad mieten.',
      note: 'xe steht für alles mit Rädern: xe máy, xe đạp (Fahrrad), xe buýt (Bus).',
      w: { 'Tôi': ['ich', ''], 'muốn': ['wollen', ''], 'thuê': ['mieten', ''], 'xe máy': ['Motorroller', ''] }
    },
    'Chuyến bay bị hoãn rồi.': {
      t: 'Der Flug hat Verspätung.',
      note: 'rồi am Satzende heißt, dass es schon passiert ist — das Nächste zu einer Vergangenheitsform.',
      w: { 'Chuyến bay': ['Flug', 'chuyến zählt Fahrten'], 'bị': ['erleiden (Passiv)', 'Für unerfreuliche Ereignisse'], 'hoãn': ['verschieben', ''], 'rồi': ['schon', 'Markiert eine abgeschlossene Änderung'] }
    },

    'Thành phố Hồ Chí Minh rất lớn.': {
      t: 'Ho-Chi-Minh-Stadt ist sehr groß.',
      note: 'Im Alltag sagt man weiterhin Sài Gòn; der offizielle Name steht in Texten.',
      w: { 'Thành phố': ['Stadt', ''], 'Hồ Chí Minh': ['Ho Chi Minh', ''], 'rất': ['sehr', ''], 'lớn': ['groß', ''] }
    },
    'Vịnh Hạ Long rất nổi tiếng.': {
      t: 'Die Ha-Long-Bucht ist sehr berühmt.',
      note: 'Zuerst das geografische Wort, dann der Name: vịnh (Bucht), sông (Fluss), núi (Berg).',
      w: { 'Vịnh': ['Bucht', ''], 'Hạ Long': ['Ha Long', 'Wörtlich „herabsteigender Drache“'], 'rất': ['sehr', ''], 'nổi tiếng': ['berühmt', 'Wörtlich „der Name schwimmt oben“'] }
    },
    'Đà Nẵng có bãi biển đẹp.': {
      t: 'Da Nang hat einen schönen Strand.',
      note: 'có heißt „haben“ und „es gibt“, deshalb kann ein Ort seine Merkmale schlicht „haben“.',
      w: { 'Đà Nẵng': ['Da Nang', ''], 'có': ['haben, es gibt', ''], 'bãi biển': ['Strand', 'biển = Meer'], 'đẹp': ['schön', ''] }
    },
    'Hội An là phố cổ.': {
      t: 'Hoi An ist eine Altstadt.',
      note: 'cổ heißt in Zusammensetzungen „alt“: phố cổ, đồ cổ (Antiquitäten).',
      w: { 'Hội An': ['Hoi An', ''], 'là': ['sein', ''], 'phố cổ': ['Altstadt', 'phố = Straße, Stadt'] }
    },
    'Sa Pa có ruộng bậc thang.': {
      t: 'Sa Pa hat Reisterrassen.',
      note: 'ruộng bậc thang heißt wörtlich „Felder mit Treppenstufen“ — das Bild steckt im Wort.',
      w: { 'Sa Pa': ['Sa Pa', 'Bergstadt im Norden'], 'có': ['haben', ''], 'ruộng bậc thang': ['Reisterrassen', 'bậc thang = Treppe'] }
    },
    'Huế từng là kinh đô.': {
      t: 'Huế war einst die Hauptstadt.',
      note: 'từng vor dem Verb sagt, dass es irgendwann in der Vergangenheit so war.',
      w: { 'Huế': ['Huế', ''], 'từng': ['einst, früher einmal', ''], 'là': ['sein', ''], 'kinh đô': ['Kaiserstadt', 'Heute heißt die Hauptstadt thủ đô'] }
    },
    'Đà Lạt mát quanh năm.': {
      t: 'In Da Lat ist es das ganze Jahr kühl.',
      note: 'Ein Adjektiv kann das ganze Prädikat sein — kein là und kein Verb „sein“.',
      w: { 'Đà Lạt': ['Da Lat', 'Stadt im Hochland'], 'mát': ['kühl', ''], 'quanh năm': ['das ganze Jahr', 'quanh = rundherum'] }
    },
    'Phú Quốc là một hòn đảo.': {
      t: 'Phu Quoc ist eine Insel.',
      note: 'hòn ist das Zähleinheitswort für Inseln und Felsen: hòn đảo, hòn đá.',
      w: { 'Phú Quốc': ['Phu Quoc', ''], 'là': ['sein', ''], 'một': ['eine', ''], 'hòn': ['Zähleinheitswort für Inseln', ''], 'đảo': ['Insel', ''] }
    },
    'Sông Mê Kông chảy ra biển.': {
      t: 'Der Mekong fließt ins Meer hinaus.',
      note: 'ra heißt „hinaus“; sein Gegenstück vào heißt „hinein“, beide hängen sich an Bewegungsverben.',
      w: { 'Sông': ['Fluss', ''], 'Mê Kông': ['Mekong', ''], 'chảy': ['fließen', ''], 'ra': ['hinaus', ''], 'biển': ['Meer', ''] }
    },

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
