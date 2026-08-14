I18N.register('id', {
  ui: {
    title: 'Tiếng Việt Drill — latihan bahasa Vietnam',
    gateTitle: 'Latihan mengetik & melafalkan bahasa Vietnam',
    step1: 'Lihat gambar dan terjemahannya, lalu ingat bahasa Vietnamnya',
    step2: 'Kalau ada tanda nada, petunjuk TELEX akan muncul',
    step3: 'Tidak perlu UniKey: ketik chaof dan menjadi chào',
    step4: 'Frasa muncul dan dibacakan dua kali (yang kedua lebih pelan)',
    step5: 'Input suara menyala sendiri. Ucapkan, atau ketik saja',
    step6: 'Jawaban benar dikenali saat mengetik. Tekan Enter untuk melewati (akan muncul lagi)',
    start: '▶ Mulai berlatih',
    gateNote1: 'Gunakan Chrome atau Edge untuk suara dan pengenalan ucapan.',
    gateNote2: 'Waktu tunggu dan kecepatan baca bisa diubah lewat ⚙️.',
    source: 'Kode sumber',

    recallTitle: 'Coba ingat dulu',
    recallSub: 'Bagaimana bahasa Vietnamnya? Kalau sudah tahu, langsung ketik saja',
    revealNow: 'Tampilkan sekarang',

    answerPlaceholder: 'Ketik di sini (chaof menjadi chào)',
    answerLabel: 'Masukan bahasa Vietnam',
    micLabel: 'Input suara (ucapkan dalam bahasa Vietnam)',
    settingsLabel: 'Pengaturan',

    setTitle: 'Pengaturan',
    setLang: 'Bahasa',
    setDelay: 'Jeda sebelum frasa ditampilkan',
    setRate1: 'Kecepatan baca (ke-1)',
    setRate2: 'Kecepatan baca (ke-2, lebih pelan)',
    setTelex: 'Ubah TELEX otomatis (tanpa UniKey)',
    setAutoSpeak: 'Bacakan frasa dua kali saat muncul',
    setAutoListen: 'Beralih ke input suara setelah dibacakan',
    setVoiceAdvance: 'Lanjut kalau pelafalannya benar',
    setShuffle: 'Acak urutannya',
    setVoice: 'Suara bahasa Vietnam',
    reset: 'Atur ulang kemajuan',
    close: 'Tutup',
    seconds: '{n} dtk',
    noVoice: 'Suara bahasa Vietnam tidak ditemukan',

    speak1: '🔊 Ke-1 (kecepatan normal)',
    speak2: '🐢 Ke-2 (lebih pelan)',
    listening: '🎙️ Mendengarkan… ucapkan dalam bahasa Vietnam',
    typeOrSpeak: 'Ketik, atau tekan 🎤 lalu ucapkan',
    keepGoing: 'Teruskan!',
    checkSpelling: 'Periksa ejaannya',
    typing: 'Sedang mengetik… (lebih hebat lagi kalau sebelum frasanya muncul!)',
    noSpeech: 'Tidak terdengar. Tekan 🎤 untuk mencoba lagi',
    keyboardOk: 'Bisa juga dilanjutkan dengan papan ketik',
    voiceOkEnter: 'Pelafalannya benar. Tekan Enter untuk lanjut',
    toneAgain: 'Hurufnya sudah benar — perhatikan nadanya, coba lagi 🎤',
    heard: 'Terdengar «{text}». Tekan 🎤 untuk mencoba lagi',
    correctVoice: 'Benar, lewat suara!',
    correct: 'Benar!',
    correctPerfect: 'Sempurna, tanpa kesalahan!',
    finishHint: 'Untuk mengulang semuanya, pakai «Atur ulang kemajuan» di ⚙️',

    voiceOkTitle: 'Pelafalan OK!',
    voiceOkBody: 'Terdengar «{text}»',
    closeTitle: 'Nyaris!',
    closeBody: 'Perhatikan nadanya',
    skipTitle: 'Dilewati',
    srOffTitle: 'Tentang input suara',
    srOffBody: 'Peramban ini tidak mendukung pengenalan ucapan. Berlatih dengan mengetik tetap bisa.',
    ttsOffTitle: 'Tidak bisa dibacakan',
    ttsOffBody: 'Peramban ini tidak bisa membacakan teks. Berlatih membaca dan mengetik tetap bisa.',
    noVoiceTitle: 'Suara bahasa Vietnam belum terpasang',
    noVoiceBody: 'Tambahkan bahasa Vietnam di pengaturan suara sistem agar bisa dibacakan.',
    noVoiceWin: 'Di Windows: tekan Win + X lalu A untuk membuka terminal sebagai administrator, jalankan  Add-WindowsCapability -Online -Name "Language.TextToSpeech~~~vi-VN~0.0.1.0"  lalu nyalakan ulang komputernya.',
    micDeniedTitle: 'Mikrofon tidak tersedia',
    micDeniedBody: 'Periksa izin mikrofon di peramban.',
    doneTitle: 'Chúc mừng!',
    doneBody: 'Semua frasa sudah selesai',
    finishText: 'Semua frasa selesai. Kerja bagus!',
    accuracy: 'Ketepatan {pct} ({a} dari {b} tanpa kesalahan)'
  },

  pos: {
    polite: 'kata santun', verb: 'kata kerja', pronoun: 'kata ganti', adverb: 'kata keterangan', noun: 'kata benda',
    copula: 'kopula', proper: 'nama diri', adjective: 'kata sifat', question: 'kata tanya',
    questionExpr: 'ungkapan tanya', auxiliary: 'kata bantu', numeral: 'kata bilangan', classifier: 'kata penggolong',
    demonstrative: 'kata penunjuk', negator: 'kata ingkar', idiom: 'ungkapan tetap', particle: 'partikel akhir',
    preposition: 'kata depan', comparative: 'perbandingan', passive: 'penanda pasif', verbPrep: 'kata kerja / kata depan'
  },

  phrases: {
    'Xin chào!': {
      t: 'Halo!',
      note: 'Bisa dipakai kapan saja. Terdengar lebih alami kalau disesuaikan dengan lawan bicara: Chào anh (pria lebih tua) / Chào chị (wanita lebih tua).',
      w: { 'Xin': ['tolong, mohon', 'Di depan kata kerja menambah kesantunan'], 'chào': ['menyapa', 'Padanan kata «halo»'] }
    },
    'Cảm ơn bạn nhiều.': {
      t: 'Terima kasih banyak.',
      note: 'Urutannya kata kerja + objek + tingkat, jadi nhiều berada di akhir, bukan di depan kata kerja.',
      w: { 'Cảm ơn': ['berterima kasih', 'Kata serapan Sino-Vietnam'], 'bạn': ['kamu (sebaya)', 'Aslinya berarti «teman»'], 'nhiều': ['banyak', 'Diletakkan setelah kata kerja untuk menguatkan'] }
    },
    'Tôi tên là Nam.': {
      t: 'Nama saya Nam.',
      note: 'Cukup dijajarkan: saya – nama – adalah – Nam. Tidak perlu kata kepemilikan.',
      w: { 'Tôi': ['saya', 'Kata ganti netral, aman untuk orang asing dan yang lebih tua'], 'tên': ['nama', ''], 'là': ['adalah', 'Menghubungkan dua kata benda; tidak dipakai sebelum kata sifat'], 'Nam': ['Nam (nama orang)', ''] }
    },
    'Bạn khỏe không?': {
      t: 'Apa kabar?',
      note: 'không berarti «tidak» di depan kata kerja, tetapi menjadikan kalimat sebuah pertanyaan bila di akhir.',
      w: { 'Bạn': ['kamu', ''], 'khỏe': ['sehat', 'Kata sifat langsung menyambung, tanpa là'], 'không': ['partikel tanya', 'Di akhir membentuk pertanyaan ya/tidak'] }
    },
    'Tôi là người Nhật.': {
      t: 'Saya orang Jepang.',
      note: 'Keterangan mengikuti kata bendanya: người Nhật secara harfiah «orang + Jepang».',
      w: { 'Tôi': ['saya', ''], 'là': ['adalah', ''], 'người': ['orang', 'Di depan nama negara berarti «orang …»'], 'Nhật': ['Jepang', 'Bentuk resminya Nhật Bản'] }
    },
    'Rất vui được gặp bạn.': {
      t: 'Senang bertemu dengan Anda.',
      note: 'rất di depan kata sifat, nhiều di belakang kata kerja — sama-sama «sangat/banyak», tetapi letaknya berbeda.',
      w: { 'Rất': ['sangat', 'Diletakkan sebelum kata sifat'], 'vui': ['senang', ''], 'được': ['bisa, berkesempatan', 'Penanda pasif untuk hal yang menyenangkan'], 'gặp': ['bertemu', ''], 'bạn': ['kamu, Anda', ''] }
    },
    'Cho tôi một ly cà phê sữa đá.': {
      t: 'Tolong satu kopi susu dingin.',
      note: 'Jumlah mengikuti pola angka + kata penggolong + kata benda, dan nama minuman disusun dari bahan pokok ke tambahannya.',
      w: { 'Cho': ['memberi → tolong', 'Di awal kalimat menjadi permintaan'], 'tôi': ['saya', ''], 'một': ['satu', ''], 'ly': ['gelas (penggolong)', 'Kata selatan; di utara cốc'], 'cà phê': ['kopi', 'Dari bahasa Prancis café'], 'sữa': ['susu', ''], 'đá': ['es', ''] }
    },
    'Cái này giá bao nhiêu?': {
      t: 'Ini harganya berapa?',
      note: 'Kata penunjuk berada setelah kata benda: cái này secara harfiah «benda + ini».',
      w: { 'Cái': ['benda (penggolong)', 'Kata penggolong paling umum'], 'này': ['ini', 'Diletakkan setelah kata benda'], 'giá': ['harga', ''], 'bao nhiêu': ['berapa', 'Untuk jumlah di atas sepuluh'] }
    },
    'Tôi không hiểu.': {
      t: 'Saya tidak mengerti.',
      note: 'Untuk menyangkal, cukup letakkan không sebelum kata kerja. Kata kerja tidak pernah berubah bentuk.',
      w: { 'Tôi': ['saya', ''], 'không': ['tidak', 'Tepat sebelum kata kerja atau kata sifat'], 'hiểu': ['mengerti', ''] }
    },
    'Xin lỗi, nhà vệ sinh ở đâu?': {
      t: 'Permisi, toiletnya di mana?',
      note: 'Kata tanya tetap di posisi jawabannya; tidak dipindah ke depan kalimat.',
      w: { 'Xin lỗi': ['permisi, maaf', 'Dipakai untuk minta maaf dan menyapa'], 'nhà vệ sinh': ['toilet', 'Harfiah «rumah kebersihan»'], 'ở': ['berada di', ''], 'đâu': ['di mana', 'Diletakkan di akhir'] }
    },
    'Món này rất ngon.': {
      t: 'Masakan ini enak sekali.',
      note: 'Jangan pernah menyisipkan là sebelum kata sifat: «Món này là ngon» salah.',
      w: { 'Món': ['masakan, hidangan', ''], 'này': ['ini', ''], 'rất': ['sangat', ''], 'ngon': ['enak', ''] }
    },
    'Hẹn gặp lại nhé!': {
      t: 'Sampai jumpa lagi, ya!',
      note: 'Partikel akhir nhé melembutkan kalimat, mirip «ya?» yang akrab.',
      w: { 'Hẹn': ['berjanji, membuat janji', ''], 'gặp': ['bertemu', ''], 'lại': ['lagi', 'Diletakkan setelah kata kerja'], 'nhé': ['akhiran akrab', 'Kepada yang lebih tua pakai ạ'] }
    },
    'Tôi muốn học tiếng Việt.': {
      t: 'Saya ingin belajar bahasa Vietnam.',
      note: 'người + negara berarti «orang …», tiếng + negara berarti «bahasa …». Dua pola, banyak kosakata baru.',
      w: { 'Tôi': ['saya', ''], 'muốn': ['ingin', 'Diletakkan sebelum kata kerja'], 'học': ['belajar', ''], 'tiếng': ['bahasa', 'Di depan nama negara berarti «bahasa …»'], 'Việt': ['Vietnam', ''] }
    },
    'Hôm nay trời đẹp quá!': {
      t: 'Hari ini cuacanya bagus sekali!',
      note: 'Waktu ditunjukkan kata seperti hôm nay atau ngày mai, bukan oleh kata kerja yang tidak pernah berubah.',
      w: { 'Hôm nay': ['hari ini', 'Kata waktu biasanya di awal'], 'trời': ['langit, cuaca', ''], 'đẹp': ['indah, bagus', ''], 'quá': ['sekali', 'Setelah kata sifat memberi nada seruan'] }
    },
    'Bạn nói tiếng Anh được không?': {
      t: 'Bisakah Anda berbahasa Inggris?',
      note: 'Kata kerja + objek + được không? adalah pola baku untuk menanyakan apakah sesuatu mungkin dilakukan.',
      w: { 'Bạn': ['kamu, Anda', ''], 'nói': ['berbicara', ''], 'tiếng Anh': ['bahasa Inggris', ''], 'được không': ['bisakah…?', 'Di akhir menanyakan kemampuan'] }
    },
    'Tôi bị lạc đường.': {
      t: 'Saya tersesat.',
      note: 'bị dan được adalah sepasang penanda pasif: bị untuk hal buruk, được untuk hal baik.',
      w: { 'Tôi': ['saya', ''], 'bị': ['mengalami (pasif)', 'Untuk kejadian buruk; kalau baik pakai được'], 'lạc': ['tersesat', ''], 'đường': ['jalan', ''] }
    },
    'Làm ơn nói chậm hơn.': {
      t: 'Tolong bicara lebih pelan.',
      note: 'Perbandingan cukup kata sifat + hơn: đẹp hơn (lebih indah), rẻ hơn (lebih murah).',
      w: { 'Làm ơn': ['tolong', 'Permintaan sopan di awal kalimat'], 'nói': ['berbicara', ''], 'chậm': ['pelan', ''], 'hơn': ['lebih', 'Setelah kata sifat membentuk perbandingan'] }
    },
    'Tôi sống ở Hà Nội.': {
      t: 'Saya tinggal di Hanoi.',
      note: 'Nama tempat ditulis kapital tiap suku katanya (Hà Nội, Hồ Chí Minh) dan tanda nadanya bagian dari ejaan.',
      w: { 'Tôi': ['saya', ''], 'sống': ['tinggal, hidup', ''], 'ở': ['di', 'Menunjukkan tempat'], 'Hà Nội': ['Hanoi', 'Harfiah «di dalam sungai»'] }
    },
    'Ngày mai tôi đi làm.': {
      t: 'Besok saya pergi bekerja.',
      note: 'Kata waktu saja sudah cukup untuk masa depan, jadi sẽ («akan») boleh dihilangkan. Kata kerjanya tetap.',
      w: { 'Ngày mai': ['besok', 'Harfiah «hari yang datang»'], 'tôi': ['saya', ''], 'đi': ['pergi', ''], 'làm': ['bekerja', 'đi làm berarti «pergi bekerja»'] }
    },
    'Chúc ngủ ngon!': {
      t: 'Selamat malam!',
      note: 'ngon berarti «enak» sekaligus «nyaman», jadi ngủ ngon berarti «tidur nyenyak».',
      w: { 'Chúc': ['mendoakan, mengucapkan', 'Juga dalam Chúc mừng — selamat'], 'ngủ': ['tidur', ''], 'ngon': ['nyaman', 'Untuk makanan berarti «enak»'] }
    }
  }
});
