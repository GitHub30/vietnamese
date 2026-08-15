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
    setCategory: 'Categoría',
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

  cats: { all: 'Todo', greeting: 'Saludos', food: 'Comida', animal: 'Animales', flower: 'Flores', travel: 'Viajes', place: 'Lugares' },

  pos: {
    polite: 'partícula de cortesía', verb: 'verbo', pronoun: 'pronombre', adverb: 'adverbio', noun: 'sustantivo',
    copula: 'cópula', proper: 'nombre propio', adjective: 'adjetivo', question: 'interrogativo',
    questionExpr: 'expresión interrogativa', auxiliary: 'auxiliar', numeral: 'numeral', classifier: 'clasificador',
    demonstrative: 'demostrativo', negator: 'negación', idiom: 'expresión fija', particle: 'partícula final',
    preposition: 'preposición', comparative: 'comparativo', passive: 'marca de pasiva', verbPrep: 'verbo / preposición',
    aspect: 'marca de aspecto', quantifier: 'cuantificador'
  },

  phrases: {
    'Chào buổi sáng!': {
      t: '¡Buenos días!',
      note: 'buổi marca una parte del día: buổi sáng (mañana), buổi trưa (mediodía), buổi tối (noche).',
      w: { 'Chào': ['saludar', 'La misma palabra que en Xin chào'], 'buổi sáng': ['mañana', 'Literalmente «el tramo matinal del día»'] }
    },

    'Tôi muốn ăn phở bò.': {
      t: 'Quiero comer phở de ternera.',
      note: 'Los nombres de platos van del plato al ingrediente: phở bò (de ternera), phở gà (de pollo).',
      w: { 'Tôi': ['yo', ''], 'muốn': ['querer', 'Va delante del verbo'], 'ăn': ['comer', ''], 'phở': ['phở', 'Sopa de fideos de arroz'], 'bò': ['vaca, ternera', ''] }
    },
    'Tôi thích ăn bánh mì.': {
      t: 'Me gusta comer bánh mì.',
      note: 'Tras thích el verbo va directo, sin nada equivalente a «comer» en infinitivo marcado.',
      w: { 'Tôi': ['yo', ''], 'thích': ['gustar', ''], 'ăn': ['comer', ''], 'bánh mì': ['pan, bánh mì', 'bánh abarca panes y pasteles'] }
    },
    'Món này có cay không?': {
      t: '¿Este plato pica?',
      note: 'có … không? encierra la palabra por la que preguntas: el molde básico de sí/no.',
      w: { 'Món': ['plato', ''], 'này': ['este', 'Va tras el sustantivo'], 'có': ['tener, ¿acaso…?', 'Abre la pregunta'], 'cay': ['picante', ''], 'không': ['partícula interrogativa', 'Cierra la pregunta'] }
    },
    'Cho tôi thêm rau thơm.': {
      t: 'Más hierbas, por favor.',
      note: 'thêm tras un verbo significa «más»: cho thêm, ăn thêm, nói thêm.',
      w: { 'Cho': ['dar → por favor', ''], 'tôi': ['a mí', ''], 'thêm': ['añadir, más', ''], 'rau thơm': ['hierbas frescas', 'Literalmente «verduras aromáticas»'] }
    },
    'Tôi không ăn được thịt.': {
      t: 'No puedo comer carne.',
      note: 'được tras el verbo significa «poder». Con không … được se vuelve «no poder».',
      w: { 'Tôi': ['yo', ''], 'không': ['no', ''], 'ăn': ['comer', ''], 'được': ['poder', 'Tras el verbo marca capacidad'], 'thịt': ['carne', ''] }
    },
    'Chị ơi, tính tiền!': {
      t: '¡Perdone, la cuenta!',
      note: 'ơi sirve para llamar: chị ơi a una mujer algo mayor, anh ơi a un hombre, em ơi a alguien menor.',
      w: { 'Chị': ['hermana mayor → señorita', 'Trato para una mujer algo mayor'], 'ơi': ['¡oiga!', 'Partícula de llamada'], 'tính tiền': ['hacer la cuenta', 'Literalmente «contar el dinero»'] }
    },
    'Trái cây ở đây rất tươi.': {
      t: 'La fruta de aquí está muy fresca.',
      note: 'ở đây es «aquí». Cámbialo por ở đó (ahí) o ở kia (allí).',
      w: { 'Trái cây': ['fruta', 'Palabra del sur; quả en el norte'], 'ở': ['en', ''], 'đây': ['aquí', ''], 'rất': ['muy', ''], 'tươi': ['fresco', ''] }
    },
    'Bún chả là món Hà Nội.': {
      t: 'El bún chả es un plato de Hanói.',
      note: 'Un topónimo justo tras el sustantivo indica procedencia: món Hà Nội, phở Nam Định.',
      w: { 'Bún chả': ['bún chả', 'Cerdo a la brasa con fideos'], 'là': ['ser', ''], 'món': ['plato', ''], 'Hà Nội': ['Hanói', ''] }
    },

    'Con mèo đang ngủ.': {
      t: 'El gato está durmiendo.',
      note: 'đang delante del verbo marca lo que ocurre ahora mismo, como el gerundio.',
      w: { 'Con': ['clasificador de animales', 'Va delante de casi todo nombre de animal'], 'mèo': ['gato', ''], 'đang': ['estar …-ndo', 'Marca acción en curso'], 'ngủ': ['dormir', ''] }
    },
    'Con chó rất trung thành.': {
      t: 'Los perros son muy fieles.',
      note: 'Sin artículos ni plural, la frase vale igual para «el perro» y «los perros».',
      w: { 'Con': ['clasificador de animales', ''], 'chó': ['perro', ''], 'rất': ['muy', ''], 'trung thành': ['fiel', 'Palabra sino-vietnamita'] }
    },
    'Tôi nuôi một con chim.': {
      t: 'Tengo un pájaro.',
      note: 'Al contar: número + clasificador + sustantivo, así que con va entre một y chim.',
      w: { 'Tôi': ['yo', ''], 'nuôi': ['criar, tener', 'Vale para animales y para hijos'], 'một': ['uno', ''], 'con': ['clasificador de animales', ''], 'chim': ['pájaro', ''] }
    },
    'Con trâu đang ăn cỏ.': {
      t: 'El búfalo está comiendo hierba.',
      note: 'El búfalo de agua es una imagen clásica del campo vietnamita y aparece en muchos refranes.',
      w: { 'Con': ['clasificador de animales', ''], 'trâu': ['búfalo de agua', ''], 'đang': ['estar …-ndo', ''], 'ăn': ['comer', ''], 'cỏ': ['hierba', ''] }
    },
    'Con voi rất to.': {
      t: 'El elefante es muy grande.',
      note: 'to y lớn significan «grande»; to es la palabra más cotidiana.',
      w: { 'Con': ['clasificador de animales', ''], 'voi': ['elefante', ''], 'rất': ['muy', ''], 'to': ['grande', ''] }
    },
    'Con cá bơi trong ao.': {
      t: 'El pez nada en el estanque.',
      note: 'trong es «dentro»; va con ngoài (fuera) y trên (encima).',
      w: { 'Con': ['clasificador de animales', ''], 'cá': ['pez', ''], 'bơi': ['nadar', ''], 'trong': ['en, dentro de', ''], 'ao': ['estanque', ''] }
    },
    'Con gà gáy mỗi sáng.': {
      t: 'El gallo canta cada mañana.',
      note: 'mỗi es «cada» y va delante del sustantivo: mỗi ngày, mỗi tuần.',
      w: { 'Con': ['clasificador de animales', ''], 'gà': ['gallo, gallina', ''], 'gáy': ['cantar (el gallo)', ''], 'mỗi': ['cada', ''], 'sáng': ['mañana', ''] }
    },
    'Tôi sợ con rắn.': {
      t: 'Me dan miedo las serpientes.',
      note: 'sợ lleva el objeto directo sin preposición.',
      w: { 'Tôi': ['yo', ''], 'sợ': ['temer', ''], 'con': ['clasificador de animales', ''], 'rắn': ['serpiente', ''] }
    },
    'Con khỉ leo cây rất giỏi.': {
      t: 'Los monos trepan muy bien a los árboles.',
      note: 'giỏi tras un verbo dice que se hace bien: nói giỏi, học giỏi.',
      w: { 'Con': ['clasificador de animales', ''], 'khỉ': ['mono', ''], 'leo': ['trepar', ''], 'cây': ['árbol', ''], 'rất': ['muy', ''], 'giỏi': ['hábil', ''] }
    },
    'Con bướm đậu trên hoa.': {
      t: 'La mariposa se posa en la flor.',
      note: 'đậu se usa para pájaros e insectos que se posan; como sustantivo es «judía».',
      w: { 'Con': ['clasificador de animales', ''], 'bướm': ['mariposa', ''], 'đậu': ['posarse', ''], 'trên': ['sobre', ''], 'hoa': ['flor', ''] }
    },

    'Hoa sen là quốc hoa.': {
      t: 'El loto es la flor nacional.',
      note: 'quốc significa «nación» en palabras sino-vietnamitas: quốc hoa, quốc kỳ (bandera), quốc ca (himno).',
      w: { 'Hoa sen': ['loto', 'Símbolo de Vietnam'], 'là': ['ser', ''], 'quốc hoa': ['flor nacional', ''] }
    },
    'Hoa đào nở vào mùa xuân.': {
      t: 'Los melocotoneros florecen en primavera.',
      note: 'vào marca tanto un momento como el movimiento hacia dentro.',
      w: { 'Hoa đào': ['flor de melocotón', 'La flor del Tết en el norte'], 'nở': ['florecer', ''], 'vào': ['en', ''], 'mùa xuân': ['primavera', 'mùa = estación'] }
    },
    'Hoa mai vàng rất đẹp.': {
      t: 'La flor de albaricoque amarilla es preciosa.',
      note: 'Los colores van tras el sustantivo: hoa mai vàng, áo dài trắng.',
      w: { 'Hoa mai': ['flor de albaricoque', 'La flor del Tết en el sur'], 'vàng': ['amarillo, dorado', ''], 'rất': ['muy', ''], 'đẹp': ['bonito', ''] }
    },
    'Tôi tặng em một bó hoa.': {
      t: 'Te regalo un ramo de flores.',
      note: 'bó es el clasificador de los manojos; para un tallo suelto se usa cành.',
      w: { 'Tôi': ['yo', ''], 'tặng': ['regalar', ''], 'em': ['tú (menor)', 'También entre parejas'], 'một': ['uno', ''], 'bó': ['ramo (clasificador)', ''], 'hoa': ['flor', ''] }
    },
    'Vườn nhà tôi có nhiều hoa.': {
      t: 'En mi jardín hay muchas flores.',
      note: 'La posesión es puro orden de palabras: vườn nhà tôi = jardín – casa – yo.',
      w: { 'Vườn': ['jardín', ''], 'nhà': ['casa', ''], 'tôi': ['yo, mi', ''], 'có': ['tener, haber', ''], 'nhiều': ['muchos', 'Ante un sustantivo significa «muchos»'], 'hoa': ['flor', ''] }
    },
    'Hoa hồng có gai.': {
      t: 'Las rosas tienen espinas.',
      note: 'hồng aquí es «rosa» (la flor), pero también significa el color rosa.',
      w: { 'Hoa hồng': ['rosa', ''], 'có': ['tener', ''], 'gai': ['espina', ''] }
    },
    'Mùi hoa nhài rất thơm.': {
      t: 'El jazmín huele muy bien.',
      note: 'thơm vale tanto para un buen olor como para un buen sabor.',
      w: { 'Mùi': ['olor', ''], 'hoa nhài': ['jazmín', 'El del té de jazmín'], 'rất': ['muy', ''], 'thơm': ['aromático', ''] }
    },
    'Hoa hướng dương quay về mặt trời.': {
      t: 'Los girasoles se vuelven hacia el sol.',
      note: 'hướng dương significa literalmente «orientado al sol»: el nombre explica la frase.',
      w: { 'Hoa hướng dương': ['girasol', ''], 'quay': ['girar', ''], 'về': ['hacia', ''], 'mặt trời': ['sol', 'Literalmente «cara del cielo»'] }
    },
    'Hoa giấy leo trên tường.': {
      t: 'La buganvilla trepa por la pared.',
      note: 'hoa giấy es literalmente «flor de papel», por lo finos que son sus pétalos.',
      w: { 'Hoa giấy': ['buganvilla', ''], 'leo': ['trepar', ''], 'trên': ['por, sobre', ''], 'tường': ['pared', ''] }
    },
    'Chợ hoa rất đông vào Tết.': {
      t: 'El mercado de flores se llena en el Tết.',
      note: 'đông significa «concurrido» (y también «invierno» y «este»; el contexto decide).',
      w: { 'Chợ hoa': ['mercado de flores', 'chợ = mercado'], 'rất': ['muy', ''], 'đông': ['concurrido', ''], 'vào': ['en, durante', ''], 'Tết': ['Tết', 'Año Nuevo lunar'] }
    },

    'Cho tôi một vé đi Huế.': {
      t: 'Un billete a Huế, por favor.',
      note: 'đi + lugar indica el destino: vé đi Huế es «billete que va a Huế».',
      w: { 'Cho': ['dar → por favor', ''], 'tôi': ['a mí', ''], 'một': ['uno', ''], 'vé': ['billete', ''], 'đi': ['ir', ''], 'Huế': ['Huế', 'Ciudad del centro'] }
    },
    'Khách sạn ở gần đây không?': {
      t: '¿Hay algún hotel cerca de aquí?',
      note: 'gần đây es «cerca de aquí»; gần es «cerca» y xa es «lejos».',
      w: { 'Khách sạn': ['hotel', 'Literalmente «casa de huéspedes»'], 'ở': ['estar en', ''], 'gần đây': ['cerca de aquí', ''], 'không': ['partícula interrogativa', ''] }
    },
    'Tôi muốn thuê xe máy.': {
      t: 'Quiero alquilar una moto.',
      note: 'xe cubre todo lo que rueda: xe máy, xe đạp (bici), xe buýt (autobús).',
      w: { 'Tôi': ['yo', ''], 'muốn': ['querer', ''], 'thuê': ['alquilar', ''], 'xe máy': ['moto', ''] }
    },
    'Chuyến bay bị hoãn rồi.': {
      t: 'El vuelo se ha retrasado.',
      note: 'rồi al final indica que ya ha pasado: lo más parecido a un pasado.',
      w: { 'Chuyến bay': ['vuelo', 'chuyến cuenta trayectos'], 'bị': ['sufrir (pasiva)', 'Para sucesos no deseados'], 'hoãn': ['aplazar', ''], 'rồi': ['ya', 'Marca un cambio consumado'] }
    },

    'Thành phố Hồ Chí Minh rất lớn.': {
      t: 'Ciudad Ho Chi Minh es muy grande.',
      note: 'En el habla diaria se sigue diciendo Sài Gòn; el nombre oficial se usa por escrito.',
      w: { 'Thành phố': ['ciudad', ''], 'Hồ Chí Minh': ['Ho Chi Minh', ''], 'rất': ['muy', ''], 'lớn': ['grande', ''] }
    },
    'Vịnh Hạ Long rất nổi tiếng.': {
      t: 'La bahía de Ha Long es muy famosa.',
      note: 'Primero el accidente geográfico y luego el nombre: vịnh (bahía), sông (río), núi (montaña).',
      w: { 'Vịnh': ['bahía', ''], 'Hạ Long': ['Ha Long', 'Literalmente «dragón que desciende»'], 'rất': ['muy', ''], 'nổi tiếng': ['famoso', 'Literalmente «el nombre flota»'] }
    },
    'Đà Nẵng có bãi biển đẹp.': {
      t: 'Da Nang tiene una playa preciosa.',
      note: 'có significa «tener» y «haber», así que un lugar puede «tener» sus rasgos.',
      w: { 'Đà Nẵng': ['Da Nang', ''], 'có': ['tener, haber', ''], 'bãi biển': ['playa', 'biển = mar'], 'đẹp': ['bonito', ''] }
    },
    'Hội An là phố cổ.': {
      t: 'Hoi An es una ciudad antigua.',
      note: 'cổ significa «antiguo» en compuestos: phố cổ, đồ cổ (antigüedades).',
      w: { 'Hội An': ['Hoi An', ''], 'là': ['ser', ''], 'phố cổ': ['casco antiguo', 'phố = calle, ciudad'] }
    },
    'Sa Pa có ruộng bậc thang.': {
      t: 'Sa Pa tiene arrozales en terrazas.',
      note: 'ruộng bậc thang es literalmente «campos con peldaños de escalera».',
      w: { 'Sa Pa': ['Sa Pa', 'Pueblo de montaña del norte'], 'có': ['tener', ''], 'ruộng bậc thang': ['arrozales en terrazas', 'bậc thang = escalera'] }
    },
    'Huế từng là kinh đô.': {
      t: 'Huế fue en su día la capital.',
      note: 'từng delante del verbo dice que ocurrió alguna vez en el pasado.',
      w: { 'Huế': ['Huế', ''], 'từng': ['una vez, solía', ''], 'là': ['ser', ''], 'kinh đô': ['capital imperial', 'Hoy la capital es thủ đô'] }
    },
    'Đà Lạt mát quanh năm.': {
      t: 'En Da Lat hace fresco todo el año.',
      note: 'Un adjetivo puede ser todo el predicado: ni là ni verbo «ser».',
      w: { 'Đà Lạt': ['Da Lat', 'Ciudad de montaña'], 'mát': ['fresco', ''], 'quanh năm': ['todo el año', 'quanh = alrededor'] }
    },
    'Phú Quốc là một hòn đảo.': {
      t: 'Phu Quoc es una isla.',
      note: 'hòn es el clasificador de islas y rocas: hòn đảo, hòn đá.',
      w: { 'Phú Quốc': ['Phu Quoc', ''], 'là': ['ser', ''], 'một': ['uno, una', ''], 'hòn': ['clasificador de islas', ''], 'đảo': ['isla', ''] }
    },
    'Sông Mê Kông chảy ra biển.': {
      t: 'El Mekong desemboca en el mar.',
      note: 'ra es «hacia fuera»; su opuesto vào es «hacia dentro», y ambos se pegan a verbos de movimiento.',
      w: { 'Sông': ['río', ''], 'Mê Kông': ['Mekong', ''], 'chảy': ['fluir', ''], 'ra': ['hacia fuera', ''], 'biển': ['mar', ''] }
    },

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
