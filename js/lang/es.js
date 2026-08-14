I18N.register('es', {
  ui: {
    title: 'Tiếng Việt Drill — práctica de vietnamita',
    gateTitle: 'Práctica de escritura y pronunciación en vietnamita',
    step1: 'Mira la imagen y la traducción, y recuerda el vietnamita',
    step2: 'Si la frase lleva tonos, aparece una pista TELEX',
    step3: 'No necesitas UniKey: escribe chaof y se convierte en chào',
    step4: 'La frase aparece y se lee dos veces (la segunda, más lenta)',
    step5: 'La entrada por voz se activa sola. Dilo en voz alta o escríbelo',
    step6: 'El acierto se detecta al escribir. Pulsa Enter para saltar (volverá más tarde)',
    start: '▶ Empezar a practicar',
    gateNote1: 'Se recomienda Chrome o Edge para la voz y el dictado.',
    gateNote2: 'La espera y la velocidad de lectura se cambian en ⚙️.',
    source: 'Código fuente',

    recallTitle: 'Intenta recordarlo',
    recallSub: '¿Cómo se dice en vietnamita? Si ya lo sabes, escríbelo ya',
    revealNow: 'Mostrar ahora',

    answerPlaceholder: 'Escribe aquí (chaof se convierte en chào)',
    answerLabel: 'Entrada en vietnamita',
    micLabel: 'Entrada por voz (habla en vietnamita)',
    settingsLabel: 'Ajustes',

    setTitle: 'Ajustes',
    setLang: 'Idioma',
    setDelay: 'Espera antes de mostrar la frase',
    setRate1: 'Velocidad de lectura (1.ª vez)',
    setRate2: 'Velocidad de lectura (2.ª vez, más lenta)',
    setTelex: 'Convertir TELEX automáticamente (sin UniKey)',
    setAutoSpeak: 'Leer la frase dos veces al mostrarla',
    setAutoListen: 'Pasar a entrada por voz tras la lectura',
    setVoiceAdvance: 'Avanzar si la pronunciación es correcta',
    setShuffle: 'Mezclar el orden',
    setVoice: 'Voz vietnamita',
    reset: 'Reiniciar el progreso',
    close: 'Cerrar',
    seconds: '{n} s',
    noVoice: 'No se encontró ninguna voz vietnamita',

    speak1: '🔊 1.ª vez (velocidad normal)',
    speak2: '🐢 2.ª vez (más lenta)',
    listening: '🎙️ Escuchando… dilo en vietnamita',
    typeOrSpeak: 'Escríbelo o pulsa 🎤 y dilo',
    keepGoing: '¡Así se hace!',
    checkSpelling: 'Revisa la ortografía',
    typing: 'Escribiendo… (¡mejor aún si lo escribes antes de verlo!)',
    noSpeech: 'No se ha oído nada. Pulsa 🎤 para intentarlo otra vez',
    keyboardOk: 'También puedes seguir con el teclado',
    voiceOkEnter: 'La pronunciación es correcta. Pulsa Enter para continuar',
    toneAgain: 'Las letras están bien: fíjate en los tonos y prueba otra vez 🎤',
    heard: 'Se ha oído «{text}». Pulsa 🎤 para intentarlo otra vez',
    correctVoice: '¡Correcto, en voz alta!',
    correct: '¡Correcto!',
    correctPerfect: '¡Perfecto, sin errores!',
    finishHint: 'Para repetirlas todas, usa «Reiniciar el progreso» en ⚙️',

    voiceOkTitle: '¡Pronunciación correcta!',
    voiceOkBody: 'Se ha oído «{text}»',
    closeTitle: '¡Casi!',
    closeBody: 'Presta atención a los tonos',
    skipTitle: 'Saltada',
    srOffTitle: 'Sobre la entrada por voz',
    srOffBody: 'Este navegador no admite el reconocimiento de voz. Puedes practicar escribiendo.',
    ttsOffTitle: 'Lectura no disponible',
    ttsOffBody: 'Este navegador no puede leer en voz alta. Puedes practicar leyendo y escribiendo.',
    noVoiceTitle: 'No hay voz vietnamita instalada',
    noVoiceBody: 'Añade el vietnamita en los ajustes de voz del sistema para activar la lectura.',
    noVoiceWin: 'En Windows: pulsa Win + X y luego A para abrir la terminal como administrador, ejecuta  Add-WindowsCapability -Online -Name "Language.TextToSpeech~~~vi-VN~0.0.1.0"  y reinicia el equipo.',
    micDeniedTitle: 'Micrófono no disponible',
    micDeniedBody: 'Comprueba el permiso del micrófono en el navegador.',
    doneTitle: 'Chúc mừng!',
    doneBody: 'Has completado todas las frases',
    finishText: '¡Todas las frases completadas! Buen trabajo.',
    accuracy: 'Precisión {pct} ({a} de {b} sin errores)'
  },

  pos: {
    polite: 'partícula de cortesía', verb: 'verbo', pronoun: 'pronombre', adverb: 'adverbio', noun: 'sustantivo',
    copula: 'cópula', proper: 'nombre propio', adjective: 'adjetivo', question: 'interrogativo',
    questionExpr: 'expresión interrogativa', auxiliary: 'auxiliar', numeral: 'numeral', classifier: 'clasificador',
    demonstrative: 'demostrativo', negator: 'negación', idiom: 'expresión fija', particle: 'partícula final',
    preposition: 'preposición', comparative: 'comparativo', passive: 'marca de pasiva', verbPrep: 'verbo / preposición'
  },

  phrases: {
    'Xin chào!': {
      t: '¡Hola!',
      note: 'Sirve a cualquier hora. Suena más natural si lo adaptas al interlocutor: Chào anh (hombre mayor) / Chào chị (mujer mayor).',
      w: { 'Xin': ['por favor', 'Delante del verbo añade cortesía'], 'chào': ['saludar', 'Equivale a «hola»'] }
    },
    'Cảm ơn bạn nhiều.': {
      t: 'Muchas gracias.',
      note: 'El vietnamita ordena verbo + objeto + grado, así que nhiều va al final y no delante del verbo.',
      w: { 'Cảm ơn': ['agradecer', 'Palabra de origen sino-vietnamita'], 'bạn': ['tú (de tu edad)', 'Originalmente significa «amigo»'], 'nhiều': ['mucho', 'Va tras el verbo para reforzarlo'] }
    },
    'Tôi tên là Nam.': {
      t: 'Me llamo Nam.',
      note: 'Basta con alinear las palabras: yo – nombre – ser – Nam. No hace falta ningún posesivo.',
      w: { 'Tôi': ['yo', 'Pronombre neutro, válido con desconocidos y mayores'], 'tên': ['nombre', ''], 'là': ['ser', 'Une dos sustantivos; nunca va antes de un adjetivo'], 'Nam': ['Nam (nombre)', ''] }
    },
    'Bạn khỏe không?': {
      t: '¿Cómo estás?',
      note: 'không significa «no» delante del verbo, pero al final convierte la frase en pregunta.',
      w: { 'Bạn': ['tú', ''], 'khỏe': ['sano, bien', 'Los adjetivos se unen directamente, sin là'], 'không': ['partícula interrogativa', 'Al final crea una pregunta de sí o no'] }
    },
    'Tôi là người Nhật.': {
      t: 'Soy japonés.',
      note: 'Los modificadores van detrás: người Nhật es literalmente «persona + Japón».',
      w: { 'Tôi': ['yo', ''], 'là': ['ser', ''], 'người': ['persona', 'Delante de un país forma el gentilicio'], 'Nhật': ['Japón', 'Formalmente Nhật Bản'] }
    },
    'Rất vui được gặp bạn.': {
      t: 'Encantado de conocerte.',
      note: 'rất va delante del adjetivo y nhiều detrás del verbo: los dos significan «mucho», pero ocupan lugares distintos.',
      w: { 'Rất': ['muy', 'Va delante del adjetivo'], 'vui': ['contento, alegre', ''], 'được': ['poder, tener ocasión de', 'Marca de tipo pasivo para cosas buenas'], 'gặp': ['encontrarse con', ''], 'bạn': ['tú', ''] }
    },
    'Cho tôi một ly cà phê sữa đá.': {
      t: 'Un café con leche con hielo, por favor.',
      note: 'Las cantidades siguen el orden número + clasificador + sustantivo, y las bebidas se nombran de la base a los añadidos.',
      w: { 'Cho': ['dar → por favor', 'Al principio de la frase expresa una petición'], 'tôi': ['a mí', ''], 'một': ['uno', ''], 'ly': ['vaso (clasificador)', 'Palabra del sur; en el norte, cốc'], 'cà phê': ['café', 'Del francés café'], 'sữa': ['leche', ''], 'đá': ['hielo', ''] }
    },
    'Cái này giá bao nhiêu?': {
      t: '¿Cuánto cuesta esto?',
      note: 'Los demostrativos van detrás del sustantivo: cái này es literalmente «cosa + esta».',
      w: { 'Cái': ['cosa (clasificador)', 'El clasificador más general'], 'này': ['este, esto', 'Va detrás del sustantivo'], 'giá': ['precio', ''], 'bao nhiêu': ['cuánto', 'Para cantidades mayores de diez'] }
    },
    'Tôi không hiểu.': {
      t: 'No entiendo.',
      note: 'Para negar basta con poner không delante del verbo. Los verbos no se conjugan.',
      w: { 'Tôi': ['yo', ''], 'không': ['no', 'Justo delante del verbo o del adjetivo'], 'hiểu': ['entender', ''] }
    },
    'Xin lỗi, nhà vệ sinh ở đâu?': {
      t: 'Perdón, ¿dónde está el baño?',
      note: 'Los interrogativos se quedan donde iría la respuesta; no se mueven al principio como en español.',
      w: { 'Xin lỗi': ['perdón', 'Sirve para disculparse y para llamar la atención'], 'nhà vệ sinh': ['baño', 'Literalmente «casa de higiene»'], 'ở': ['estar en', ''], 'đâu': ['dónde', 'Va al final'] }
    },
    'Món này rất ngon.': {
      t: 'Este plato está muy rico.',
      note: 'Nunca se pone là delante de un adjetivo: «Món này là ngon» es incorrecto.',
      w: { 'Món': ['plato', ''], 'này': ['este', ''], 'rất': ['muy', ''], 'ngon': ['rico, sabroso', ''] }
    },
    'Hẹn gặp lại nhé!': {
      t: '¡Hasta la próxima!',
      note: 'La partícula final nhé suaviza la frase, como un «¿vale?» amistoso.',
      w: { 'Hẹn': ['quedar, citar', ''], 'gặp': ['encontrarse', ''], 'lại': ['de nuevo', 'Va detrás del verbo'], 'nhé': ['final afectuoso', 'Con mayores se usa ạ'] }
    },
    'Tôi muốn học tiếng Việt.': {
      t: 'Quiero aprender vietnamita.',
      note: 'người + país significa «persona de…» y tiếng + país, «idioma de…». Dos patrones, mucho vocabulario nuevo.',
      w: { 'Tôi': ['yo', ''], 'muốn': ['querer', 'Va delante del verbo'], 'học': ['aprender', ''], 'tiếng': ['idioma', 'Delante de un país significa «idioma de…»'], 'Việt': ['Vietnam', ''] }
    },
    'Hôm nay trời đẹp quá!': {
      t: '¡Hoy hace muy buen tiempo!',
      note: 'El tiempo verbal lo dan palabras como hôm nay o ngày mai, no el verbo, que nunca cambia.',
      w: { 'Hôm nay': ['hoy', 'Las palabras de tiempo suelen ir primero'], 'trời': ['cielo, tiempo', ''], 'đẹp': ['bonito, bueno', ''], 'quá': ['qué, muy', 'Tras el adjetivo da tono exclamativo'] }
    },
    'Bạn nói tiếng Anh được không?': {
      t: '¿Hablas inglés?',
      note: 'Verbo + objeto + được không? es la forma habitual de preguntar si algo es posible.',
      w: { 'Bạn': ['tú', ''], 'nói': ['hablar', ''], 'tiếng Anh': ['inglés', ''], 'được không': ['¿puedes…?', 'Al final pregunta por la capacidad'] }
    },
    'Tôi bị lạc đường.': {
      t: 'Me he perdido.',
      note: 'bị y được son marcas pasivas complementarias: bị para lo malo, được para lo bueno.',
      w: { 'Tôi': ['yo', ''], 'bị': ['sufrir (pasiva)', 'Para sucesos no deseados; para los buenos, được'], 'lạc': ['perderse', ''], 'đường': ['camino', ''] }
    },
    'Làm ơn nói chậm hơn.': {
      t: 'Habla más despacio, por favor.',
      note: 'El comparativo es solo adjetivo + hơn: đẹp hơn (más bonito), rẻ hơn (más barato).',
      w: { 'Làm ơn': ['por favor', 'Petición cortés al principio de la frase'], 'nói': ['hablar', ''], 'chậm': ['lento', ''], 'hơn': ['más', 'Tras el adjetivo forma el comparativo'] }
    },
    'Tôi sống ở Hà Nội.': {
      t: 'Vivo en Hanói.',
      note: 'Los topónimos llevan mayúscula en cada sílaba (Hà Nội, Hồ Chí Minh) y los tonos forman parte de la grafía.',
      w: { 'Tôi': ['yo', ''], 'sống': ['vivir', ''], 'ở': ['en', 'Indica lugar'], 'Hà Nội': ['Hanói', 'Literalmente «dentro del río»'] }
    },
    'Ngày mai tôi đi làm.': {
      t: 'Mañana voy a trabajar.',
      note: 'Con una palabra de tiempo basta para el futuro, así que sẽ («va a») se puede omitir. El verbo no cambia.',
      w: { 'Ngày mai': ['mañana', 'Literalmente «el día que viene»'], 'tôi': ['yo', ''], 'đi': ['ir', ''], 'làm': ['trabajar', 'đi làm es «ir a trabajar»'] }
    },
    'Chúc ngủ ngon!': {
      t: '¡Buenas noches!',
      note: 'ngon vale para «sabroso» y para «agradable», así que ngủ ngon es «duerme bien».',
      w: { 'Chúc': ['desear', 'También en Chúc mừng — felicidades'], 'ngủ': ['dormir', ''], 'ngon': ['agradable', 'Con comida significa «rico»'] }
    }
  }
});
