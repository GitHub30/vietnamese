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
    setCategory: 'Kategori',
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

  cats: { all: 'Semua', greeting: 'Sapaan', food: 'Makanan', animal: 'Hewan', flower: 'Bunga', travel: 'Perjalanan', place: 'Tempat' },

  pos: {
    polite: 'kata santun', verb: 'kata kerja', pronoun: 'kata ganti', adverb: 'kata keterangan', noun: 'kata benda',
    copula: 'kopula', proper: 'nama diri', adjective: 'kata sifat', question: 'kata tanya',
    questionExpr: 'ungkapan tanya', auxiliary: 'kata bantu', numeral: 'kata bilangan', classifier: 'kata penggolong',
    demonstrative: 'kata penunjuk', negator: 'kata ingkar', idiom: 'ungkapan tetap', particle: 'partikel akhir',
    preposition: 'kata depan', comparative: 'perbandingan', passive: 'penanda pasif', verbPrep: 'kata kerja / kata depan',
    aspect: 'penanda aspek', quantifier: 'kata jumlah'
  },

  phrases: {
    'Chào buổi sáng!': {
      t: 'Selamat pagi!',
      note: 'buổi menandai bagian hari: buổi sáng (pagi), buổi trưa (siang), buổi tối (malam).',
      w: { 'Chào': ['menyapa', 'Kata yang sama seperti pada Xin chào'], 'buổi sáng': ['pagi', 'Harfiah «bagian pagi dari hari»'] }
    },

    'Tôi muốn ăn phở bò.': {
      t: 'Saya ingin makan phở daging sapi.',
      note: 'Nama hidangan disusun dari hidangannya lalu bahannya: phở bò (sapi), phở gà (ayam).',
      w: { 'Tôi': ['saya', ''], 'muốn': ['ingin', 'Diletakkan sebelum kata kerja'], 'ăn': ['makan', ''], 'phở': ['phở', 'Sup mi beras'], 'bò': ['sapi', ''] }
    },
    'Tôi thích ăn bánh mì.': {
      t: 'Saya suka makan bánh mì.',
      note: 'Setelah thích, kata kerja langsung menyusul tanpa kata sambung.',
      w: { 'Tôi': ['saya', ''], 'thích': ['suka', ''], 'ăn': ['makan', ''], 'bánh mì': ['roti, bánh mì', 'bánh mencakup roti dan kue'] }
    },
    'Món này có cay không?': {
      t: 'Masakan ini pedas tidak?',
      note: 'có … không? mengapit kata yang ditanyakan — pola dasar pertanyaan ya/tidak.',
      w: { 'Món': ['masakan', ''], 'này': ['ini', 'Diletakkan setelah kata benda'], 'có': ['ada, apakah…', 'Membuka pertanyaan'], 'cay': ['pedas', ''], 'không': ['partikel tanya', 'Menutup pertanyaan'] }
    },
    'Cho tôi thêm rau thơm.': {
      t: 'Tolong tambah daun herba.',
      note: 'thêm setelah kata kerja berarti «lebih banyak»: cho thêm, ăn thêm, nói thêm.',
      w: { 'Cho': ['memberi → tolong', ''], 'tôi': ['saya', ''], 'thêm': ['menambah, lagi', ''], 'rau thơm': ['daun herba', 'Harfiah «sayur wangi»'] }
    },
    'Tôi không ăn được thịt.': {
      t: 'Saya tidak bisa makan daging.',
      note: 'được setelah kata kerja berarti «bisa». Diapit không … được menjadi «tidak bisa».',
      w: { 'Tôi': ['saya', ''], 'không': ['tidak', ''], 'ăn': ['makan', ''], 'được': ['bisa', 'Setelah kata kerja menandai kemampuan'], 'thịt': ['daging', ''] }
    },
    'Chị ơi, tính tiền!': {
      t: 'Permisi, minta bonnya!',
      note: 'ơi dipakai untuk memanggil: chị ơi ke perempuan yang agak lebih tua, anh ơi ke laki-laki, em ơi ke yang lebih muda.',
      w: { 'Chị': ['kakak perempuan → mbak', 'Sapaan untuk perempuan yang agak lebih tua'], 'ơi': ['hei, permisi', 'Partikel pemanggil'], 'tính tiền': ['menghitung tagihan', 'Harfiah «menghitung uang»'] }
    },
    'Trái cây ở đây rất tươi.': {
      t: 'Buah di sini sangat segar.',
      note: 'ở đây berarti «di sini». Ganti dengan ở đó (di situ) atau ở kia (di sana).',
      w: { 'Trái cây': ['buah', 'Kata selatan; di utara quả'], 'ở': ['di', ''], 'đây': ['sini', ''], 'rất': ['sangat', ''], 'tươi': ['segar', ''] }
    },
    'Bún chả là món Hà Nội.': {
      t: 'Bún chả adalah masakan Hanoi.',
      note: 'Nama tempat tepat setelah kata benda menunjukkan asalnya: món Hà Nội, phở Nam Định.',
      w: { 'Bún chả': ['bún chả', 'Babi panggang dengan mi beras'], 'là': ['adalah', ''], 'món': ['masakan', ''], 'Hà Nội': ['Hanoi', ''] }
    },

    'Con mèo đang ngủ.': {
      t: 'Kucing itu sedang tidur.',
      note: 'đang sebelum kata kerja menandai yang sedang berlangsung, seperti «sedang».',
      w: { 'Con': ['penggolong hewan', 'Dipakai di depan hampir semua nama hewan'], 'mèo': ['kucing', ''], 'đang': ['sedang', 'Menandai aksi yang berlangsung'], 'ngủ': ['tidur', ''] }
    },
    'Con chó rất trung thành.': {
      t: 'Anjing sangat setia.',
      note: 'Tanpa kata sandang dan bentuk jamak, kalimat ini berlaku untuk «anjing itu» maupun «anjing pada umumnya».',
      w: { 'Con': ['penggolong hewan', ''], 'chó': ['anjing', ''], 'rất': ['sangat', ''], 'trung thành': ['setia', 'Kata serapan Sino-Vietnam'] }
    },
    'Tôi nuôi một con chim.': {
      t: 'Saya memelihara seekor burung.',
      note: 'Saat menghitung: angka + penggolong + kata benda, jadi con berada di antara một dan chim.',
      w: { 'Tôi': ['saya', ''], 'nuôi': ['memelihara', 'Untuk hewan maupun anak'], 'một': ['satu', ''], 'con': ['penggolong hewan', ''], 'chim': ['burung', ''] }
    },
    'Con trâu đang ăn cỏ.': {
      t: 'Kerbau itu sedang makan rumput.',
      note: 'Kerbau adalah gambaran khas pedesaan Vietnam dan muncul di banyak peribahasa.',
      w: { 'Con': ['penggolong hewan', ''], 'trâu': ['kerbau', ''], 'đang': ['sedang', ''], 'ăn': ['makan', ''], 'cỏ': ['rumput', ''] }
    },
    'Con voi rất to.': {
      t: 'Gajah itu sangat besar.',
      note: 'to dan lớn sama-sama «besar»; to lebih sehari-hari.',
      w: { 'Con': ['penggolong hewan', ''], 'voi': ['gajah', ''], 'rất': ['sangat', ''], 'to': ['besar', ''] }
    },
    'Con cá bơi trong ao.': {
      t: 'Ikan itu berenang di kolam.',
      note: 'trong berarti «di dalam»; pasangannya ngoài (di luar) dan trên (di atas).',
      w: { 'Con': ['penggolong hewan', ''], 'cá': ['ikan', ''], 'bơi': ['berenang', ''], 'trong': ['di dalam', ''], 'ao': ['kolam', ''] }
    },
    'Con gà gáy mỗi sáng.': {
      t: 'Ayam jago berkokok setiap pagi.',
      note: 'mỗi berarti «setiap» dan diletakkan sebelum kata benda: mỗi ngày, mỗi tuần.',
      w: { 'Con': ['penggolong hewan', ''], 'gà': ['ayam', ''], 'gáy': ['berkokok', ''], 'mỗi': ['setiap', ''], 'sáng': ['pagi', ''] }
    },
    'Tôi sợ con rắn.': {
      t: 'Saya takut ular.',
      note: 'sợ langsung diikuti objeknya, tanpa kata depan.',
      w: { 'Tôi': ['saya', ''], 'sợ': ['takut', ''], 'con': ['penggolong hewan', ''], 'rắn': ['ular', ''] }
    },
    'Con khỉ leo cây rất giỏi.': {
      t: 'Monyet sangat pandai memanjat pohon.',
      note: 'giỏi setelah frasa kerja berarti melakukannya dengan baik: nói giỏi, học giỏi.',
      w: { 'Con': ['penggolong hewan', ''], 'khỉ': ['monyet', ''], 'leo': ['memanjat', ''], 'cây': ['pohon', ''], 'rất': ['sangat', ''], 'giỏi': ['pandai', ''] }
    },
    'Con bướm đậu trên hoa.': {
      t: 'Kupu-kupu hinggap di bunga.',
      note: 'đậu dipakai untuk burung dan serangga yang hinggap; sebagai kata benda artinya «kacang».',
      w: { 'Con': ['penggolong hewan', ''], 'bướm': ['kupu-kupu', ''], 'đậu': ['hinggap', ''], 'trên': ['di atas', ''], 'hoa': ['bunga', ''] }
    },

    'Hoa sen là quốc hoa.': {
      t: 'Teratai adalah bunga nasional.',
      note: 'quốc berarti «negara» dalam kata Sino-Vietnam: quốc hoa, quốc kỳ (bendera), quốc ca (lagu kebangsaan).',
      w: { 'Hoa sen': ['teratai', 'Lambang Vietnam'], 'là': ['adalah', ''], 'quốc hoa': ['bunga nasional', ''] }
    },
    'Hoa đào nở vào mùa xuân.': {
      t: 'Bunga persik mekar pada musim semi.',
      note: 'vào menandai waktu sekaligus gerakan ke dalam.',
      w: { 'Hoa đào': ['bunga persik', 'Bunga Tết di utara'], 'nở': ['mekar', ''], 'vào': ['pada', ''], 'mùa xuân': ['musim semi', 'mùa = musim'] }
    },
    'Hoa mai vàng rất đẹp.': {
      t: 'Bunga aprikot kuning sangat indah.',
      note: 'Warna mengikuti kata bendanya: hoa mai vàng, áo dài trắng.',
      w: { 'Hoa mai': ['bunga aprikot', 'Bunga Tết di selatan'], 'vàng': ['kuning, keemasan', ''], 'rất': ['sangat', ''], 'đẹp': ['indah', ''] }
    },
    'Tôi tặng em một bó hoa.': {
      t: 'Saya memberimu seikat bunga.',
      note: 'bó adalah penggolong untuk ikatan; untuk setangkai dipakai cành.',
      w: { 'Tôi': ['saya', ''], 'tặng': ['menghadiahkan', ''], 'em': ['kamu (lebih muda)', 'Juga antar pasangan'], 'một': ['satu', ''], 'bó': ['ikat (penggolong)', ''], 'hoa': ['bunga', ''] }
    },
    'Vườn nhà tôi có nhiều hoa.': {
      t: 'Kebun rumah saya punya banyak bunga.',
      note: 'Kepemilikan cukup dengan urutan kata: vườn nhà tôi = kebun – rumah – saya.',
      w: { 'Vườn': ['kebun', ''], 'nhà': ['rumah', ''], 'tôi': ['saya', ''], 'có': ['punya, ada', ''], 'nhiều': ['banyak', 'Sebelum kata benda berarti «banyak»'], 'hoa': ['bunga', ''] }
    },
    'Hoa hồng có gai.': {
      t: 'Mawar punya duri.',
      note: 'hồng di sini «mawar», tetapi juga berarti warna merah muda.',
      w: { 'Hoa hồng': ['mawar', ''], 'có': ['punya', ''], 'gai': ['duri', ''] }
    },
    'Mùi hoa nhài rất thơm.': {
      t: 'Melati baunya sangat harum.',
      note: 'thơm dipakai untuk bau yang enak maupun rasa yang enak.',
      w: { 'Mùi': ['bau', ''], 'hoa nhài': ['melati', 'Yang dipakai untuk teh melati'], 'rất': ['sangat', ''], 'thơm': ['harum', ''] }
    },
    'Hoa hướng dương quay về mặt trời.': {
      t: 'Bunga matahari menghadap ke matahari.',
      note: 'hướng dương harfiahnya «menghadap matahari» — namanya menjelaskan kalimatnya.',
      w: { 'Hoa hướng dương': ['bunga matahari', ''], 'quay': ['berputar, menghadap', ''], 'về': ['ke arah', ''], 'mặt trời': ['matahari', 'Harfiah «wajah langit»'] }
    },
    'Hoa giấy leo trên tường.': {
      t: 'Bunga kertas merambat di tembok.',
      note: 'hoa giấy harfiahnya «bunga kertas», karena kelopaknya setipis kertas.',
      w: { 'Hoa giấy': ['bunga kertas', ''], 'leo': ['merambat', ''], 'trên': ['di atas', ''], 'tường': ['tembok', ''] }
    },
    'Chợ hoa rất đông vào Tết.': {
      t: 'Pasar bunga sangat ramai saat Tết.',
      note: 'đông berarti «ramai» (juga «musim dingin» dan «timur»; konteks yang menentukan).',
      w: { 'Chợ hoa': ['pasar bunga', 'chợ = pasar'], 'rất': ['sangat', ''], 'đông': ['ramai', ''], 'vào': ['pada, saat', ''], 'Tết': ['Tết', 'Tahun Baru Imlek'] }
    },

    'Cho tôi một vé đi Huế.': {
      t: 'Tolong satu tiket ke Huế.',
      note: 'đi + tempat menunjukkan tujuan: vé đi Huế artinya «tiket yang menuju Huế».',
      w: { 'Cho': ['memberi → tolong', ''], 'tôi': ['saya', ''], 'một': ['satu', ''], 'vé': ['tiket', ''], 'đi': ['pergi', ''], 'Huế': ['Huế', 'Kota di Vietnam tengah'] }
    },
    'Khách sạn ở gần đây không?': {
      t: 'Apakah ada hotel di dekat sini?',
      note: 'gần đây berarti «dekat sini»; gần itu «dekat» dan xa itu «jauh».',
      w: { 'Khách sạn': ['hotel', 'Harfiah «rumah tamu»'], 'ở': ['berada di', ''], 'gần đây': ['dekat sini', ''], 'không': ['partikel tanya', ''] }
    },
    'Tôi muốn thuê xe máy.': {
      t: 'Saya mau menyewa motor.',
      note: 'xe mencakup semua yang beroda: xe máy, xe đạp (sepeda), xe buýt (bus).',
      w: { 'Tôi': ['saya', ''], 'muốn': ['mau', ''], 'thuê': ['menyewa', ''], 'xe máy': ['sepeda motor', ''] }
    },
    'Chuyến bay bị hoãn rồi.': {
      t: 'Penerbangannya ditunda.',
      note: 'rồi di akhir menandakan sudah terjadi — paling mendekati bentuk lampau.',
      w: { 'Chuyến bay': ['penerbangan', 'chuyến menghitung perjalanan'], 'bị': ['mengalami (pasif)', 'Untuk kejadian yang tidak diinginkan'], 'hoãn': ['menunda', ''], 'rồi': ['sudah', 'Menandai perubahan yang selesai'] }
    },

    'Thành phố Hồ Chí Minh rất lớn.': {
      t: 'Kota Ho Chi Minh sangat besar.',
      note: 'Dalam percakapan sehari-hari orang masih menyebut Sài Gòn; nama resmi dipakai dalam tulisan.',
      w: { 'Thành phố': ['kota', ''], 'Hồ Chí Minh': ['Ho Chi Minh', ''], 'rất': ['sangat', ''], 'lớn': ['besar', ''] }
    },
    'Vịnh Hạ Long rất nổi tiếng.': {
      t: 'Teluk Ha Long sangat terkenal.',
      note: 'Kata bentang alam dulu, baru namanya: vịnh (teluk), sông (sungai), núi (gunung).',
      w: { 'Vịnh': ['teluk', ''], 'Hạ Long': ['Ha Long', 'Harfiah «naga turun»'], 'rất': ['sangat', ''], 'nổi tiếng': ['terkenal', 'Harfiah «namanya mengapung»'] }
    },
    'Đà Nẵng có bãi biển đẹp.': {
      t: 'Da Nang punya pantai yang indah.',
      note: 'có berarti «punya» sekaligus «ada», jadi sebuah tempat bisa «punya» cirinya.',
      w: { 'Đà Nẵng': ['Da Nang', ''], 'có': ['punya, ada', ''], 'bãi biển': ['pantai', 'biển = laut'], 'đẹp': ['indah', ''] }
    },
    'Hội An là phố cổ.': {
      t: 'Hoi An adalah kota tua.',
      note: 'cổ berarti «kuno» dalam gabungan kata: phố cổ, đồ cổ (barang antik).',
      w: { 'Hội An': ['Hoi An', ''], 'là': ['adalah', ''], 'phố cổ': ['kota tua', 'phố = jalan, kota'] }
    },
    'Sa Pa có ruộng bậc thang.': {
      t: 'Sa Pa punya sawah terasering.',
      note: 'ruộng bậc thang harfiahnya «sawah bertangga» — gambarannya ada di katanya.',
      w: { 'Sa Pa': ['Sa Pa', 'Kota pegunungan di utara'], 'có': ['punya', ''], 'ruộng bậc thang': ['sawah terasering', 'bậc thang = tangga'] }
    },
    'Huế từng là kinh đô.': {
      t: 'Huế dulu pernah menjadi ibu kota.',
      note: 'từng sebelum kata kerja berarti pernah terjadi di masa lalu.',
      w: { 'Huế': ['Huế', ''], 'từng': ['pernah', ''], 'là': ['adalah', ''], 'kinh đô': ['ibu kota kerajaan', 'Sekarang ibu kota disebut thủ đô'] }
    },
    'Đà Lạt mát quanh năm.': {
      t: 'Da Lat sejuk sepanjang tahun.',
      note: 'Kata sifat bisa menjadi seluruh predikat — tanpa là dan tanpa kata kerja «adalah».',
      w: { 'Đà Lạt': ['Da Lat', 'Kota dataran tinggi'], 'mát': ['sejuk', ''], 'quanh năm': ['sepanjang tahun', 'quanh = sekeliling'] }
    },
    'Phú Quốc là một hòn đảo.': {
      t: 'Phu Quoc adalah sebuah pulau.',
      note: 'hòn adalah penggolong untuk pulau dan batu: hòn đảo, hòn đá.',
      w: { 'Phú Quốc': ['Phu Quoc', ''], 'là': ['adalah', ''], 'một': ['satu, sebuah', ''], 'hòn': ['penggolong pulau', ''], 'đảo': ['pulau', ''] }
    },
    'Sông Mê Kông chảy ra biển.': {
      t: 'Sungai Mekong mengalir ke laut.',
      note: 'ra berarti «keluar»; lawannya vào berarti «masuk», keduanya menempel pada kata kerja gerak.',
      w: { 'Sông': ['sungai', ''], 'Mê Kông': ['Mekong', ''], 'chảy': ['mengalir', ''], 'ra': ['keluar ke', ''], 'biển': ['laut', ''] }
    },

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
