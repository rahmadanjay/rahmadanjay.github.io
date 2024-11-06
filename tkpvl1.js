// Data soal dengan poin untuk setiap jawaban
var questions = [
  {
    question:
      'Mahar baru saja diterima bekerja di salah satu pabrik pengolahan logam. Sebagai pegawai baru, tentu Mahar belum terlalu mengenal jenis pekerjaan dan cara menyelesaikannya. Suatu malam, tiba-tiba Mahar ditugasi manajernya untuk menyelesaikan tugas rekanriya yang tiba-tiba memutuskan kel uar dan berhenti bekerja. Mahar jelas merasa kaget dan kesulitan dengan penugasan itu tapi la tidak punya pilihan lain selain menjalankan perintah atasan. Apalagi manajernya memberikan tugas tersebut karena kagum melihat track" record dirinya yang merupakan mahasiswa lulusan terbaik. M nurut Anda, yang harus dilakukan Mahar adalah ....',
    answers: [
      {
        text: 'A. Meminta orang lain mengerjakan asalkan bisa selesai tepat waktu',
        points: 1,
      }, // Salah
      {
        text: 'B. Segera berusaha memulai dan menyelesaikan sebisanya saja yang penting bisa selesai',
        points: 4,
      }, // Benar
      {
        text: 'C.	Tidak perlu terburu-buru menyelesaikannya',
        points: 2,
      }, // Salah
      {
        text: 'D.	Segera berusaha memulai untk menyelesaikan tugas itu dan berusaha	menyelesaikannya sesempurna mungkin',
        points: 5,
      }, // Salah
      {
        text: 'E.	Mempertanyakan dan menawar­ nawar manajernya karena merasa takut hasil pekerjaannya tidak maksimal',
        points: 3,
      }, // Salah
    ],
  },
  {
    question:
      'Ketika mengerjakan suatu tugas atau pekerjaan yang mendadak dan harus segera diselesaikan, sikap Anda adalah',
    answers: [
      {
        text: 'A.	Bekerja dengan santai dan mengerjakan sebisanya',
        points: 1,
      }, // Salah
      {
        text: 'B.	Bekerja dengan cepat apapun hasilnya asalkan pekerjaan selesai',
        points: 4,
      }, // Benar
      {
        text: 'C.	Bekerja dengan tenang dan tidak terlalu terburu-buru untuk memulai',
        points: 2,
      }, // Salah
      {
        text: 'D.	Bekerja dengan baik jika tugas itu disertai dengan bonus atau bayaran tambahan',
        points: 3,
      }, // Salah
      {
        text: 'E.	Bekerja dengan segera dan tetap berusah	menyelesaikannya dengan sungguh-sungguh',
        points: 5,
      }, // Salah
    ],
  },
  {
    question:
      'Ketika atasan Anda memberikan tugas yang sulit, sikap Anda adalah ....',
    answers: [
      {
        text: 'A.	Saya menganggap tugas tersebut sebagai dorongan untuk menjadi lebih baik',
        points: 5,
      }, // Salah
      {
        text: 'B.	Seharusnya	atasan	saya mempertimbangkan kemampuan bawahannya   ketika  memberi tugas',
        points: 2,
      }, // Benar
      {
        text: 'C. Sebaiknya tugas tersebut disertai dengan bimbingan dari yang lebih berpengalaman',
        points: 3,
      }, // Salah
      {
        text: 'D.	Saya menganggap tugas tersebut perlu dipertimbangkan	kembali agar tidak menurunkan motivasi bawahan karena tu gas tersebut di luar kemampuan',
        points: 1,
      }, // Salah
      {
        text: 'E.	Saya . menganggap tugas sulit tersebut sebagai hal yang biasa dihadapi dalam bekerja',
        points: 4,
      }, // Salah
    ],
  },
  {
    question:
      'Ketika Anda mendapatkan tugas menjadi panitia sebuah kegiatan sekolah, Anda akan menggalang dana dengan cara ....',
    answers: [
      {
        text: 'A.	menggerakkan teman-teman untuk mencari dana',
        points: 1,
      }, // Salah
      {
        text: 'B.	mencari sponsor yang mendukung keberhasiIan',
        points: 5,
      }, // Benar
      {
        text: 'C.	mengajukan	proposal kegiatan sekolah',
        points: 3,
      }, // Salah
      {
        text: 'D.	menghubungi sponsor yang sudah saya kenal',
        points: 4,
      }, // Salah
      { text: 'E.	meminta sumbangan pada orang tua', points: 2 }, // Salah
    ],
  },
  {
    question:
      'Saat Anda sedang tidak sibuk dan secara mendadak diminta menggantikan teman yang sedang dirawat di rumah sakit, sikap Anda adalah ....',
    answers: [
      {
        text: 'A.	Mempelajari tugas tersebut sebelum mengerjakannya',
        points: 3,
      }, // Salah
      {
        text: 'B.	Dengan   segera  menyanggupi untuk menggantikannya',
        points: 5,
      }, // Benar
      {
        text: 'C.  Meminta dia untuk mencari teman lain yang dapat mengganti',
        points: 1,
      }, // Salah
      {
        text: 'D.	Mempertimbangkan untuk menerima tugas tersebut',
        points: 2,
      }, // Salah
      { text: 'E.	Mencarikan	teman	lain	untuk mengganti', points: 4 }, // Salah
    ],
  },
  {
    question:
      'Tingkat mabuk-mabukan saat ini sudah sangat memprihatinkan. Pemerintah, dalam hal ini perlu memerhatikan dengan ekstra. Menurut Anda adalah ....',
    answers: [
      {
        text: 'A.	Pajak untuk minuman keras dikenakan	setinggi-tingginya sehingga hanya terdapat pada toko-toko yang berkelas tinggi, bila memungkinkan ditutup saja.',
        points: 5,
      }, // Salah
      {
        text: 'B.	Tempat-tempat hiburan juga perlu diawasi mengingat rawan terhadap minuman keras',
        points: 3,
      }, // Benar
      {
        text: 'C.	Peran yayasan yang membidangi kenakalan remaja dan masyarakat perlu fokus dan bergerak',
        points: 2,
      }, // Salah
      {
        text: 'D.	Peran organisasi kemasyarakatan untuk mengajak masyarakat mengadakan kegiatan-kegiatan positif',
        points: 4,
      }, // Salah
      {
        text: 'E.	Faktor  pengangguran . termasuk salah satu penyebab maraknya pelaku minuman keras.',
        points: 1,
      }, // Salah
    ],
  },
  {
    question:
      'Ketika pemerintah memutuskan agar masyarakat Indonesia harus menggunakan BBM (Bahan Bakar Minyak) tanah ke Bahan Bakar. Gas, sikap Anda adalah ....',
    answers: [
      {
        text: 'A. Tetap  mempertahankan   BBM tanah.',
        points: 1,
      }, // Salah
      {
        text: 'B.	Berfikir dulu sampai harga minyak tanah sudah tidak di subsidi lagi.',
        points: 4,
      }, // Benar
      {
        text: 'C.	Menurut	saya	tidak	masalah, sepanjang stok gas	lancar	dan harga lebih ekonomis',
        points: 5,
      }, // Salah
      {
        text: 'D.	Masih ragu, sebab efek negatif dari tabung gas tersebut berbahaya',
        points: 3,
      }, // Salah
      {
        text: 'Segala sesuatunya saya serahkan Kepada opini masyarakat Indonesia.',
        points: 2,
      }, // Salah
    ],
  },
  {
    question:
      'Anda bekerja di sebuah perusahaan sebagai HRD. Ketika merekrut pegawai baru yang akan l:>ertugas pada bagian pelayanan, Anda lebih mengutamakan seorang pegawai yang ....',
    answers: [
      {
        text: 'A.	memiliki wajah cantik/tampan',
        points: 2,
      }, // Salah
      {
        text: 'B.	berpakaian rapi',
        points: 3,
      }, // Benar
      {
        text: 'C.	memiliki kemampuan berkomunikasi yang baik',
        points: 5,
      }, // Salah
      {
        text: 'D.	disiplin dan tepat waktu',
        points: 4,
      }, // Salah
      { text: 'E.	memiliki pengetahuan umum yang tinggi', points: 1 }, // Salah
    ],
  },
  {
    question:
      'Seandainya mendapatkan kepercayaan dari pimpinan yang Anda tahu akan memecah belah kerjasama kelompok yang telah terbentuk, sikap Anda adalah ....',
    answers: [
      {
        text: 'A.	Pimpinan · pasti memiliki pertimbangan yang bijaksana atas kebijakannya',
        points: 2,
      }, // Salah
      {
        text: 'B.	Kepercayaan dari pimpinan harus dihargai dan dijunjung tinggi',
        points: 5,
      }, // Benar
      {
        text: 'C.	Situasi seperti itu harus dihindari sejauh mungkin',
        points: 1,
      }, // Salah
      {
        text: 'D.	Kelompok perlu diajak untuk menghormati dan menjunjung tinggi keputusan pimpinan',
        points: 4,
      }, // Salah
      {
        text: 'E.	Pimpinan perlu dibantu untuk memahami adanya kerjasama yang baik antara stafnya',
        points: 3,
      }, // Salah
    ],
  },
  {
    question:
      'Anda mendapatkan kepercayaan dari   pimpinan yang dan berpotensi memecah belah kerjasama kelompok yang telah terbentuk. Sikap Anda adalah ....',
    answers: [
      {
        text: 'A.	Mencari- cara·agar pimpinan tidak kehilangan muka karena kebijakan sepihak',
        points: 1,
      }, // Salah
      {
        text: 'B.	Mencari ara agar kelompok mendukung kebijakan yang kontroversial itu',
        points: 2,
      }, // Benar
      {
        text: 'C.	Mencari cara agar tidak terjadi pertentangan antara pimpinan dan kelompok kerja',
        points: 4,
      }, // Salah
      {
        text: 'D.	Mencari cara agar tidak terjadi gejolak pada kelompok kerja',
        points: 3,
      }, // Salah
      {
        text: 'E.	Mencari cara agar kepercayaan ini berkembang menjadi kepercayaan pada kelompok',
        points: 5,
      }, // Salah
    ],
  },
  {
    question: 'Anda adalah tipikal orang yang ....',
    answers: [
      {
        text: 'A.	Harus menyelesaikan tugas yang diberikan',
        points: 5,
      }, // Salah
      {
        text: 'B.	Lebih baik menunggu arahan atasan sebelum memulai kerja',
        points: 4,
      }, // Benar
      {
        text: 'C.	Butuh dorongan dari orang lain untuk memutuskan pekerjaan',
        points: 3,
      }, // Salah
      {
        text: 'D.	Lebih bersemangat  bekerja jika menun&gu rekan yang lain memulai kerjanya',
        points: 2,
      }, // Salah
      {
        text: 'E.	Melakukan kegiatan yang menyenangkan terlebih dulu sebelum bekerja agar dapat bekerja dengan baik',
        points: 1,
      }, // Salah
    ],
  },
  {
    question: 'Anda dapat lebih baik dalam bekerja jika ....',
    answers: [
      {
        text: 'A.	Selalu dimotivasi oleh atasan',
        points: 2,
      }, // Salah
      {
        text: 'B.	Selalu disupervisi oleh atasan',
        points: 1,
      }, // Benar
      {
        text: 'C.	Ada contoh baik dari rekan kerja',
        points: 4,
      }, // Salah
      {
        text: 'D.	Dibimbing oleh rekan kerja yang berpengalaman',
        points: 3,
      }, // Salah
      {
        text: 'E.	Diberikan kemandirian dalam menyelesaikan tugas walaupun beresiko',
        points: 5,
      }, // Salah
    ],
  },
  {
    question:
      'Anak Anda sedang sakit tapi kantor Anda sedang berada dalam masa sibuk. Sikap Anda adalah ....',
    answers: [
      {
        text: 'A.	Tidak masuk kantor dulu dan membawa anak ke rumah sakit.',
        points: 4,
      }, // Salah
      {
        text: 'B.	Membawa anak ke rumah sakit dulu lalu berangkat ke kantor walau terlambat.',
        points: 5,
      }, // Benar
      {
        text: 'C.	Tidak masuk ke kantor hingga anak Anda sembuh.',
        points: 1,
      }, // Salah
      {
        text: 'D.	Anak anda disuruh pergi ke rumah sakit bersama sisten rumah tangga saja.',
        points: 3,
      }, // Salah
      {
        text: 'E.	Mengabaikan saja anak Anda yang sedang sakit karena tidak begitu parah.',
        points: 2,
      }, // Salah
    ],
  },
  {
    question:
      'Di unit kerja Anda telah terjadi pergantian pimpinan. Sikap Anda adalah ....',
    answers: [
      {
        text: 'A.	tidak peduli',
        points: 1,
      }, // Salah
      {
        text: 'B.	berusahamengenaldan memahami visi dan misi pimpinan baru',
        points: 5,
      }, // Benar
      {
        text: 'C.	tidak berusaha mendekati pimpinan baru karena takut dicap penjilat',
        points: 2,
      }, // Salah
      {
        text: 'D.	berusaha mengenal pribadi pimpinan baru',
        points: 4,
      }, // Salah
      { text: 'E.	pergantian pimpinan itu sesuatu yang biasa', points: 3 }, // Salah
    ],
  },
  {
    question:
      'Dalam suatu pertemuan kelompok1 Anda datang terlambat ketika pembicaraan sedang berlangsung hangat. Padahal Anda ingin menyumbang ide. Sikap Anda adalah ....',
    answers: [
      {
        text: 'A.	duduk mendengarkan pembicaraan yang sedang berlangsung hangat, baru kemudian bicara',
        points: 5,
      }, // Salah
      {
        text: 'B.	menanyakan apakah saya boleh segera bicara',
        points: 3,
      }, // Benar
      {
        text: 'C.	segera	bicara	mengemukakan pendapat',
        points: 1,
      }, // Salah
      {
        text: 'D.	menunggu	kesempatan	untuk berbicara',
        points: 4,
      }, // Salah
      { text: 'E.	meminta waktu untuk berbicara', points: 2 }, // Salah
    ],
  },
  {
    question:
      'Cinar bersama rekan kerja telah menyele_saiakan pekerjaan dengan baik. Untuk merayakan keberhasilan tersebut, rekan kerjanya mengajak untuk pergi ke tempat hiburan. Namun, saat itu kondisi badan Ginar kurang sehat. Bagaimana sikap yang seharusnya Ginar lakukan?',
    answers: [
      {
        text: 'A.	Menerima ajakan rekan kerjanya tersebut.',
        points: 3,
      }, // Salah
      {
        text: 'B.	Mengikuti   kegiatan   tersebut dengan berat hati.',
        points: 2,
      }, // Benar
      {
        text: 'C.	Meminta maaf dan segera pulang untuk beristirahat.',
        points: 5,
      }, // Salah
      {
        text: 'D.	Mengikuti kegiatan tersebut sebentar, kemudian meminta izin untuk pulang lebih awal.',
        points: 4,
      }, // Salah
      { text: 'E.	Menolak ajakan tersebut dan pulang ke rumah', points: 1 }, // Salah
    ],
  },
  {
    question:
      'Menurut Anda orang yang kehilangan kesempatan mengembangkan usahanya lebih disebabkan karena mereka ....',
    answers: [
      {
        text: 'A.	Pikiran bercabang pada usaha lain',
        points: 2,
      }, // Salah
      {
        text: 'B.	Menunggu bantuan pihak lain',
        points: 3,
      }, // Benar
      {
        text: 'C.	Mundur, begitu melihat risikonya',
        points: 5,
      }, // Salah
      {
        text: 'D.	Menunda ketika melihat risikonya',
        points: 4,
      }, // Salah
      { text: 'E.	Bertahan pada cara yang telah berjalan', points: 1 }, // Salah
    ],
  },
  {
    question:
      'Orang tua salah seorang anak didik tidak dapat menghadiri penerimaan ijazah di sekolah karena mereka harus keluar kota. Sikap Anda adalah .... ',
    answers: [
      {
        text: 'A.	Berpendapatorangtua mempunyai hak untuk mengatur acaranya',
        points: 3,
      }, // Salah
      {
        text: 'B.	Meminta orang tua untuk mempertimbangkan keberangkatannya ke luar kota',
        points: 5,
      }, // Benar
      {
        text: 'C.	Meminta orang tua untuk membatalkan rencananya ke luar kota',
        points: 4,
      }, // Salah
      {
        text: 'D.	Memberikan ijazah itu pada anak didik saya secara langsung',
        points: 2,
      }, // Salah
      {
        text: 'E.	Memahami bahwa seringkali terjadi acara yang bersamaan waktu',
        points: 1,
      }, // Salah
    ],
  },
  {
    question:
      'Anda menginap di rumah teman dengan tempat tidurnya sempit untuk berdua. Dalam keadaan tersebut Anda',
    answers: [
      {
        text: 'A.	Hampir tidak dapat tidur sampai pagi',
        points: 2,
      }, // Salah
      {
        text: 'B.	Tetap dapat tidur dengan mudah',
        points: 5,
      }, // Benar
      {
        text: 'C.	Terjaga sampai pagi',
        points: 1,
      }, // Salah
      {
        text: 'D.	Menunggu beberapa saat, baru tidur lelap',
        points: 3,
      }, // Salah
      {
        text: 'E.	Tidur dengan beberapa kali terbangun karena merasa tidak nyaman',
        points: 4,
      }, // Salah
    ],
  },
  {
    question:
      'Teman Anda tidak menepati janji untuk mengembalikan uang padahal besok dipakai untuk keperluan Anda. Sikap Anda adalah ....',
    answers: [
      {
        text: 'A.	Berniat untuk tidak meminjamkan uang kepadanya lagi',
        points: 4,
      }, // Salah
      {
        text: 'B.	Tidak berteman dengannya lagi',
        points: 1,
      }, // Benar
      {
        text: 'C.	Mencari teman tersebut dan memarahinya',
        points: 3,
      }, // Salah
      {
        text: 'D.	Menanyakan alasannya tidak menepati janji',
        points: 5,
      }, // Salah
      { text: 'E.	Mendiamkannya	dan	tidak mengajaknya berbicara', points: 2 }, // Salah
    ],
  },
  {
    question:
      'Orang tua Anda tiba-tiba mengalami kesulitan ekonomi sehingga uang SPP tidak terbayar bulan ini. Sikap Anda adalah ....',
    answers: [
      {
        text: 'A.	Mengatakan kepada guru bahwa orang tua kesulitan ekonomi',
        points: 3,
      }, // Salah
      {
        text: 'B.	Tidak mau sekolah lagi',
        points: 1,
      }, // Benar
      {
        text: 'C.	Kecewa karena orang tua tidak memahami kebutuhan saya',
        points: 2,
      }, // Salah
      {
        text: 'D.	Mohan	dispensasi	menunda pembayaran',
        points: 5,
      }, // Salah
      {
        text: 'E.	Mencari pinjaman dan meminta orang tua menggantinya kelak',
        points: 4,
      }, // Salah
    ],
  },
  {
    question:
      'Teman sekolah memberi hadiah ulang tahun berupa barang yang tidak Anda sukai. Sikap Anda adalah ....',
    answers: [
      {
        text: 'A.	memberikan kepada orang lain',
        points: 1,
      }, // Salah
      {
        text: 'B.	menggunakan	untuk	keperluan saya',
        points: 5,
      }, // Benar
      {
        text: 'C.	menyimpan sebagai kenangan',
        points: 3,
      }, // Salah
      {
        text: 'D.	menggunakan	sekedar	untuk menyenangkan',
        points: 4,
      }, // Salah
      { text: 'E. menyimpan	dan	tidak akan menyentuhnya', points: 2 }, // Salah
    ],
  },
  {
    question: 'Suatu ketika Anda bertemu dengan teman lama. Anda akan ....',
    answers: [
      {
        text: 'A.	Berusaha menarik perhatian',
        points: 4,
      }, // Salah
      {
        text: 'B.	Berusaha menghindar',
        points: 1,
      }, // Benar
      {
        text: 'C.	Menyapa lebih dahulu',
        points: 5,
      }, // Salah
      {
        text: 'D.	Menunggu	dia	menyapa	lebih dahulu',
        points: 3,
      }, // Salah
      { text: 'E.	Diam saja pura-pura tidak tahu', points: 2 }, // Salah
    ],
  },
  {
    question: 'Dalam berkomunikasi dengan orang lain, saya lebih suka .... ·',
    answers: [
      {
        text: 'A.	berkomunikasi menggunakan bahasa Indonesia',
        points: 5,
      }, // Salah
      {
        text: 'B.	berkomunikasi  dengan  bahasa daerah agar lebih akrab',
        points: 2,
      }, // Benar
      {
        text: 'C.	berkomunikasi· dengan bahasa campuran, kadang bahasa daerah dan kadang bahasa Indonesia',
        points: 4,
      }, // Salah
      {
        text: 'D.	berkomunikasi dengan bahasa santai dan diselingi gurauan',
        points: 3,
      }, // Salah
      { text: 'E.	berkomunikasi dengan bahasa yang paling dikuasai', points: 1 }, // Salah
    ],
  },
  {
    question:
      'Dalam menghadapi era kemajuan teknologi yang berjalan sangat cepat, menurut Anda adalah ....',
    answers: [
      {
        text: 'A.	Berusaha menguasai teknologi dengan baik',
        points: 4,
      }, // Salah
      {
        text: 'B.	Mengikuti	perkembangan teknologi dengan membacanya',
        points: 2,
      }, // Benar
      {
        text: 'C.	Membiarkan	generasi	terkini menguasai teknologi',
        points: 1,
      }, // Salah
      {
        text: 'D.	Menyesuaikancarakerjakitaseiring dengan kemajuan teknologi',
        points: 5,
      }, // Salah
      {
        text: 'E.	Mempelajari hanya teknologi yang kita butuhkan saja',
        points: 3,
      }, // Salah
    ],
  },
  {
    question:
      'Anda adalah seorang asisten ahli dari sebuah perusahaan yang tidak paham teknologi. Kemajuan IT menuntut Anda untuk membuat sistem baru dalam perusahaan Anda. Sikap Anda adalah',
    answers: [
      {
        text: 'A.	Menerima teknologi baru tersebut, dengan meminta tolong ahli perusahaan mengajari Anda',
        points: 2,
      }, // Salah
      {
        text: 'B.	lkut mengembangkan teknologi tersebut dan meminta ahli IT di perusahaan Anda untuk mengajari Anda',
        points: 4,
      }, // Benar
      {
        text: 'C.	Menerima teknologi baru tersebut dengan menyerahkan ahli IT dalam pengembangan teknologi yang ada dan Anda ikut andil di dalamnya.',
        points: 5,
      }, // Salah
      {
        text: 'D.	lkut mengembangkan teknologi IT tersebut bersama ahli IT dari perusahaan Anda dan Anda membantu menggerakkan anggota lain',
        points: 3,
      }, // Salah
      {
        text: 'E. Menerima teknologi baru tersebut dan mengolaborasikannya dengan ide Anda.',
        points: 1,
      }, // Salah
    ],
  },
  {
    question:
      'Anda sedang mengerjakan sebuah tugas dengan suatu aplikasi. Tiba-tiba di tengah jalan aplikasi tersebut eror sehingga mengganggu pekerjaan. Sikap Anda adalah ....',
    answers: [
      {
        text: 'A.	Langsung menutup aplikasi tersebut agar tidak banyak data yang hilang',
        points: 1,
      }, // Salah
      {
        text: 'B.	Memanggilahli IT dan menanyakan kepadanya',
        points: 4,
      }, // Benar
      {
        text: 'C.	Menanyakan kepada teman yang pernah mengalami hal serupa',
        points: 5,
      }, // Salah
      {
        text: 'D.	Terus mengerjakan dan berharap aplikasi akan kembali normal',
        points: 3,
      }, // Salah
      {
        text: 'E.	Menyampaikan kepada atasan dan meminta nasihat',
        points: 2,
      }, // Salah
    ],
  },
  {
    question:
      'Atasan meminta Anda untuk membuat laporan hasil kerja melalui aplikasi berbasis internet, sementara Anda terbiasa membuat laporan dengan print out hasil ketikan komputer. Sikap Anda adalah ....',
    answers: [
      {
        text: 'A.	Tetap membuat laporan dengan print out, karena sudah terbiasa dengan cara itu',
        points: 2,
      }, // Salah
      {
        text: 'B.	Meminta teman untu kmembuatkan laporan hasil kerja saya dengan aplikasi',
        points: 4,
      }, // Benar
      {
        text: 'C.	Belajar untuk membuat laporan hasil kerja melalui aplikasi',
        points: 5,
      }, // Salah
      {
        text: 'D.	Meminta kebijakan pada atasan untuk dapat mengerti kebiasaan saya dan tidak memaksa membuat laporan hasil kerja melalui aplikasi',
        points: 3,
      }, // Salah
      {
        text: 'E.	Malas membuat laporan hasil kerja',
        points: 1,
      }, // Salah
    ],
  },
  {
    question:
      'Teknologi informasi saat ini sangat berkembang pesat dan sangat bermanfaat untuk mempermudah penyampaian informasi di perusahaan Anda, tetapi di samping manfaat ternyata juga banyak hal negatif yang ditimbulkan oleh penggunaan teknologi informasi tersebut. Salah satunya adalah dapat disalahgunakan oleh karyawan Anda untuk hal-hal yang · bertentangan dengan tujuan perusahaan. Hal ini tentu memberikan dampak yang buruk pada perusahaan Anda jika dibiarkan begitu saja. Sikap Anda sebagai seorang pimpinan adalah',
    answers: [
      {
        text: 'A.	Mempelajari  teknologi  informasi tersebut	kemudian menerapkannya pada perusahaan',
        points: 1,
      }, // Salah
      {
        text: 'B.	Menerapkan pada perusahaan untuk komunikasi',
        points: 2,
      }, // Benar
      {
        text: 'C.	Membuat batasan-batasan pada teknologi informasi tersebut agar tidak disalahgunakan kemudian menerapkannya pada perusahaan',
        points: 3,
      }, // Salah
      {
        text: 'D.	Akan mempelajari, membuat batasan-batasan	kemudian menerapkan pada perusahaan',
        points: 4,
      }, // Salah
      {
        text: 'D.	Akan mempelajari, membuat batasan-batasan	kemudian menerapkan pada perusahaan',
        points: 5,
      }, // Salah
    ],
  },
  {
    question:
      'Bagaimana  biasanya	Anda menyampaikan  berita	yang tidak mengenakkan ',
    answers: [
      {
        text: 'A.	Segera sampaikan apabila kondisi Telah memungkinkan',
        points: 5,
      }, // Salah
      {
        text: 'B.	Menyampaikan berita itu ketika mereka sudah berkumpul bersama',
        points: 1,
      }, // Benar
      {
        text: 'C.	Tunggu diberitakan sampai yakin betul mereka dalam keadaan baik',
        points: 2,
      }, // Salah
      {
        text: 'D.	Sesegera mungkin menyampaikan berita itu karena memang demikianlah kenyataannya',
        points: 3,
      }, // Salah
      {
        text: 'E.	Sesegera mungkin menyampaikan berita itu karena hal itu adalah darurat',
        points: 4,
      }, // Salah
    ],
  },
  {
    question:
      'Anda selalu berusaha agar pendapat Anda didengar orang lain. Oleh karena itu Anda berusaha keras mempersiapkan segala informasi untuk memperkuat pendapat Anda. Menurut Anda adalah ....',
    answers: [
      {
        text: 'A.	Orang bebas berpendapat',
        points: 5,
      }, // Salah
      {
        text: 'B.	Lebih baik menggunakan pendapat sendiri daripada mengikuti pendapat orang lain',
        points: 4,
      }, // Benar
      {
        text: 'C.	Setiap orang punya pendapat',
        points: 2,
      }, // Salah
      {
        text: 'D.	Kukuh dalam berpendapat justru kelihatan kaku',
        points: 1,
      }, // Salah
      {
        text: 'E.	Dalam mengemukakan pendapat sebaiknya fleksibel saja',
        points: 3,
      }, // Salah
    ],
  },
  {
    question:
      'Dalam kondisi yang sulit, memecahkan masalah selangkah demi selangkah adalah yang terbaik. Me·nurut Anda ....',
    answers: [
      {
        text: 'A.	Memecahkan	masalah membutuhkan waktu yang lama',
        points: 3,
      }, // Salah
      {
        text: 'B.	Menuruti urutan dalam metode pemecahan masalah memang sangat rumit',
        points: 1,
      }, // Benar
      {
        text: 'C.	Dalam	pemecahan	masalah, dituntut suatu metode yang logis',
        points: 5,
      }, // Salah
      {
        text: 'D.	Pemecahan masalah bisa bersifat rasional maupun irrasional',
        points: 2,
      }, // Salah
      {
        text: 'E.	Ada metode walaupun selangkah demi selangkah namun bisa dipakai sebagai patokan',
        points: 4,
      }, // Salah
    ],
  },
  {
    question:
      'Bilamana atasan meminta Anda menggunakan fasilitas kantor untuk keperluan pribadinya, bukan untuk keperl uan kantor, sikap Anda adalah',
    answers: [
      {
        text: 'A.	Tidak	mau	melaksanakan permintaannya',
        points: 5,
      }, // Salah
      {
        text: 'B.	Melaksanakannya	karena	dialah yang bertanggung jawab',
        points: 1,
      }, // Benar
      {
        text: 'C.	Bagaimanapun juga, dialah atasan saya, maka saya laksanakan',
        points: 2,
      }, // Salah
      {
        text: 'D.	Meminta atasan untuk menyuruh orang lain saja, bukan saya',
        points: 4,
      }, // Salah
      {
        text: 'E.	Saya piker-pikir dulu',
        points: 3,
      }, // Salah
    ],
  },
  {
    question:
      'Jika Anda diperintah oleh atasan yang kurang cakap dibandingkan dengan Anda, sikap Anda adalah ....',
    answers: [
      {
        text: 'A.	Saya merasa kesal',
        points: 3,
      }, // Salah
      {
        text: 'B.	Saya tidek bersedia melaksanakan perintahnya',
        points: 1,
      }, // Benar
      {
        text: 'C.	Saya terkadang marah',
        points: 2,
      }, // Salah
      {
        text: 'D.	Saya tetap melaksanakan perintahnya selama itu baik',
        points: 5,
      }, // Salah
      {
        text: 'E.	Saya melaksanakan perintahnya meski dengan setengah hati',
        points: 4,
      }, // Salah
    ],
  },
  {
    question:
      'Setelah melaksanakan tugas tertentu yang diberikan atasan, ternyata ada instruksi yang salah dari atasan sehingga Anda harus mengulangi tugas tersebut. Sikap Anda adalah ....',
    answers: [
      {
        text: 'A.	Saya tetap mengulanginya meskipun sambil sedikit melampiaskan kekesalan kepada atasan',
        points: 4,
      }, // Salah
      {
        text: 'B.	Meskipun dia atasan saya, saya menegurnya dengan keras atas kesalahan yang merugikan orang lain tersebut',
        points: 3,
      }, // Benar
      {
        text: 'C.	Saya mengulanginya meskipun dalam hati terasa sangat marah',
        points: 2,
      }, // Salah
      {
        text: 'D.	Saya tidak bersedia mengulanginya karena kesalahan bukan dari pihak saya',
        points: 1,
      }, // Salah
      {
        text: 'E.	Saya bersedia mengulanginya dan saya juga memintanya untuk lebih berhati-hati dalam memberikan instruksi di kemudian hari',
        points: 5,
      }, // Salah
    ],
  },
  {
    question:
      'lnstansi kantor Anda mengadakan training yang sangat bermanfaat bagi peningkatan kemampuan Anda, namun training tersebut diadakan pada hari Sabtu dan Minggu. Sikap Anda adalah',
    answers: [
      {
        text: 'A.	Lebih baik saya mengikuti training yang diadakan bukan pada hari libur',
        points: 3,
      }, // Salah
      {
        text: 'B.	Hari libur Sabtu dan Minggu adalah hak pegawai untuk libur dari urusan pekerjaan dan yang berhubungan dengannya',
        points: 2,
      }, // Benar
      {
        text: 'C.	Saya bersedia mengorbankan dua hari libur tersebut untuk mengikuti training',
        points: 5,
      }, // Salah
      {
        text: 'D.	Saya bersedia mengikuti training namun hanya hari Sabtu saja',
        points: 4,
      }, // Salah
      {
        text: 'E.	Saya menyarankan pegawai lain yang masih lajang saja untuk mengikuti training tersebut',
        points: 1,
      }, // Salah
    ],
  },
  {
    question:
      'Ketika Anda diminta melakukan pekerjaan berat, sikap Anda adalah ....',
    answers: [
      {
        text: 'A.	Menolak untuk diberi pekerjaan semacam itu',
        points: 1,
      }, // Salah
      {
        text: 'B.	Mempertimbangkan	dulu	untuk menerimanya',
        points: 3,
      }, // Benar
      {
        text: 'C.	Tetap	menerimanya,	meskipun tidak suka dengan pekerjaan itu',
        points: 4,
      }, // Salah
      {
        text: 'D.	Merasa tertantang melaksanakan pekerjaan itu',
        points: 5,
      }, // Salah
      {
        text: 'E.	Menyerahkan pekerjaan tersebut kepada orang lain',
        points: 2,
      }, // Salah
    ],
  },
  {
    question:
      'Perusahaan menyaratkan karyawan baru untuk tidak menikah dulu selama mengikuti pendidikan. Kebetulan Anda sudah menikah. Tetapi istri Anda tidak tinggal satu kota dengan Anda. Sikap Anda adalah ....',
    answers: [
      {
        text: 'A.	Saya akan tetap melamar pekerjaan di perusahaan tersebut, toh istri saya ada di lain kota',
        points: 3,
      }, // Salah
      {
        text: 'B.	Saya tidak akan melamar pekerjaan di perusahaan tersebut',
        points: 4,
      }, // Benar
      {
        text: 'C.	Sehausnya  syarat  tersebut  tidak usah dicantumkan',
        points: 1,
      }, // Salah
      {
        text: 'D.	Saya akan melamar pekerjaan di perusahaan yang tidak menyaratkan hal tersebut',
        points: 5,
      }, // Salah
      {
        text: 'E.	Sebenarnya dengan menikah justru saya tenang dalam bekerja',
        points: 2,
      }, // Salah
    ],
  },
  {
    question:
      'Perkembangan teknologi yang makin canggih serta trend penggunaan media sosial telah dimanfaatkan oleh kelompok radikal untuk menebar pahamnya yang bisa mengancam ideologi pancasila sebagai kesatuan RI. Perlu ada upaya bersama dari pemerintah, mahasiswa, para pemuda, dan LSM untuk membentengi paham radikal demi menjaga keutuhan bangsa secara preventif. Menurut Anda upaya yang tepat untuk mencegah hal itu terjadi adalah ....',
    answers: [
      {
        text: 'A.	mengecek informasi berita yang diterima dari sosial media dan menyaring berita tersebut',
        points: 5,
      }, // Salah
      {
        text: 'B.	tidak perlu mengikuti perkembangan sosial media karena memberikan dampak negatif',
        points: 2,
      }, // Benar
      {
        text: 'C.	informasi yang masuk ke sosial media pasti sudah benar karena informasi dari teknologi yang semakin cangih',
        points: 1,
      }, // Salah
      {
        text: 'D.	menerapkan nilai pancasila ketika bermain sosial media dalam kehidupan sehari-hari clan mencegah perkembangannya',
        points: 3,
      }, // Salah
      {
        text: 'E.	menggunakan sosial media dengan bijak agar dapat mencegah radikalisme',
        points: 4,
      }, // Salah
    ],
  },
  {
    question:
      'Ketika	sedang	membaca	sebuah artikel di salah satu situs web, Dian membaca ada sebuah	berita yang menyatakan bahwa sila kelima dalam pancasila		yang dianut	 oleh			warga masyarakat			tidak	sesuai	dengan keadaan warga masyarakat saat ini, di mana keadilan masih tumpang tindih sehingga mengkritik pemerintah dan menganggap bahwa lebih baik ideologi agama yang diterapkan, sebagai warga negara yang baik apa yang akan Anda lakukan?',
    answers: [
      {
        text: 'A.	Langsung menghapus berita tersebut karena takut dianggap mendukung beritanya.',
        points: 3,
      }, // Salah
      {
        text: 'B.	Membaca semua tulisannya yang berkaitan dengan pancasila dan merenunginya',
        points: 1,
      }, // Benar
      {
        text: 'C.	Membaca  intinya  dan  langsung mengabaikannya',
        points: 4,
      }, // Salah
      {
        text: 'D.	Membaca dengan benar berita tersebut kemudian melaporkan penulis berita kepada pihak yang berwajib.',
        points: 5,
      }, // Salah
      {
        text: 'E.	Menghubungi penulis langsung dan mengajaknya untuk berdebat',
        points: 2,
      }, // Salah
    ],
  },
  {
    question:
      'Beberapa bentuk radikalisme dalam dunia pendidikan menggunakan aksinya dengan kekerasan yang dilakukan pendidik kepada siswa. Ada salah satu kasus yang terjadi pada tahun 2015 di Tanjung Pinang, oknum guru olahraga yang menendang siswanya saat pembelajaran dengan alasan mendidik, melihat hal tersebut apa yang akan Anda lakukan?',
    answers: [
      {
        text: 'A. Mendengarkan apa yang dikatakan gurunya karena takut dinilai melakukan hal yang sama.',
        points: 3,
      }, // Salah
      {
        text: 'B. Mendengarakan ucapan gurunya dan mendukung apa yang dilakukannya.',
        points: 1,
      }, // Benar
      {
        text: 'C.	Mendengarkan  ucapan  gurunya kemudian mengabaikannya',
        points: 4,
      }, // Salah
      {
        text: 'D.	Mendengarkan apa yang dikatakan gurunya kemudian melaporkan hal tersebut kepada kepala sekolah',
        points: 5,
      }, // Salah
      {
        text: 'E.	Mengajak teman-teman yang lain untuk menegur guru tersebut',
        points: 2,
      }, // Salah
    ],
  },
  {
    question:
      'Dita sedang mengikuti seminar yang diadakan di gedung salah satu fakultas di kampusnya, di mana semua anggota organisasi harus hadir dan meminta semua anggota mengenakan baju seragam organisasi, kemudian Dita melihat ada salah satu anggota yang tidak mengenakan seragam tersebut dan menggunakan seragam yang warna dan gambarnya sama dengan organisasi terlarang di Indonesia. Melihat hal tersebut apa yang akan Anda lakukan?',
    answers: [
      {
        text: 'A. Meminta kepada ketua organisasi untuk mengeluarkannya dari forum.',
        points: 4,
      }, // Salah
      {
        text: 'B. Membiarkannya karena itu hanya sebuah warna baju yang sama.',
        points: 1,
      }, // Benar
      {
        text: 'C.	Melaporkan kepada pihak berwajib karena dianggap penyusupan.',
        points: 3,
      }, // Salah
      {
        text: 'D.	Menegurnya secara pribadi dan menyarankan mengganti baju atau menutupinya dengan jaket.',
        points: 5,
      }, // Salah
      {
        text: 'E.	Memberitahu semua anggota bahwa orang tersebut merupakan penyusup organisasi terlarang.',
        points: 2,
      }, // Salah
    ],
  },
  {
    question:
      'Ria merupakan mahasiswi semester lima salah satu PTN di  Bandung, di kampus dia sering mendapatkan informasi terkait isu-isu · radikalisme yang tengah melanda hampir seluruh PTN di Indonesia maka perguruan tinggi mempunyai tanggung jawab untuk mencegah ideologi radikal karena pelajar dan mahasiswa menjadi sasaran empuk. Menurut Anda bagaimana upaya PTN untuk mencegah hal tersebut?',
    answers: [
      {
        text: 'A.	Pimpinan perguruan tinggi harus terus berkoordinasi dan bekerja sama dengan pihak BNPT',
        points: 4,
      }, // Salah
      {
        text: 'B.	Pemetaan dan pencegahan tehadap birokrat, yaitu struktural kampus maupun dosen',
        points: 5,
      }, // Benar
      {
        text: 'C.	Pimpinan perguruan tinggi harus melakukan pengawasan terhadap setiap kegiatan yang dilakukan oleh mahasiswa internal maupun eksternal.',
        points: 3,
      }, // Salah
      {
        text: 'D.	Memperkuat wawasan kebangsaan dan cinta tanah air melalui mata kuliah pendidikan pancasila.-',
        points: 1,
      }, // Salah
      {
        text: 'E.	Pengurus organisasi mahasiswa menjadi penanggung jawab teknis terhadap semua kegiatan mahasiswa di luar Jam perkuliahan.',
        points: 2,
      }, // Salah
    ],
  },
  {
    question:
      'Penyebaran radikalisme dapat menyerang siapa saja baik generasi tua, generasi muda, bahkan anak-anak yang baru beranjak dewasa pun jadi sasarannya. Jika sepupu Anda baru saja masuk Sekolah Menengah Atas (SMA) di salah satu sekolah negeri favorit tetapi sangat liberal, apa yang akan Anda sarankan agar tidak terpengaruh paham radikalisme di lingkungan sekolah?',
    answers: [
      {
        text: 'A.	Menyarankan agar berteman dengan sedikit orang saja.',
        points: 4,
      }, // Salah
      {
        text: 'B.	Membolehkannya mengikuti ekstrakurikuler kecuali ekstrakurikuler agama.',
        points: 2,
      }, // Benar
      {
        text: 'C.	Menyuruhnya  agar  tidak  ikut ekstrakurikuler di sekolah.',
        points: 1,
      }, // Salah
      {
        text: 'D.	Menyarankan agar ia selektif dalam pergaulan.',
        points: 5,
      }, // Salah
      {
        text: 'E.	Menyarankan    agar selalu melaporkan kepada Anda setiap dekat dengan teman baru.',
        points: 3,
      }, // Salah
    ],
  },
  {
    question:
      'Dalam studi ilmu sosial, radikalisme diartikan sebagai pandangan yang ingin melakukan perubahan secara cepat dengan cara yang negatif, salah satunya dalam kebudayaan daerah yang sangat beragam di Indonesia, kemudian dalam sebuah pameran kebudayaan dari b rbagai daerah, ada satu seniman yang sangat anti dengan salah satu karya anak bangsa karena menurutnya kebudayaan milik daerahnya yang paling unggul daripada yang lainnya, melihat sikap tersebut apa yang akan Anda lakukan?',
    answers: [
      {
        text: 'A.	Melaporkan hal tersebut kepada pimpinan penyelenggara pameran.',
        points: 4,
      }, // Salah
      {
        text: 'B.	Membiarkannya	karena	itu merupakan hal yang wajar',
        points: 1,
      }, // Benar
      {
        text: 'C.	Memberitahukan kepada sesama pengunjung	bahwa seniman tersebut	orang	yang	memiliki paham terlarang di Indonesia.',
        points: 3,
      }, // Salah
      {
        text: 'D.	Menegurnya secara pribadi dan menyarankan untuk tidak terlalu berlebihan dalam mengutarakan pendapat.',
        points: 5,
      }, // Salah
      {
        text: 'E.	Melaporkan hal tersebut kepada komnas HAM.',
        points: 2,
      }, // Salah
    ],
  },
];
// MENAMPILKAN SOAL
var quizForm = document.getElementById('quiz-form');

for (var index = 0; index < questions.length; index++) {
  var q = questions[index];
  var questionBlock = document.createElement('div');
  questionBlock.classList.add('question');

  questionBlock.innerHTML = '<p>' + (index + 66) + '. ' + q.question + '</p>';

  for (var i = 0; i < q.answers.length; i++) {
    questionBlock.innerHTML += `
            <label>
                <input type="radio" name="question${index}" value="${q.answers[i].points}" required>
                ${q.answers[i].text}
            </label><br>
        `;
  }

  quizForm.appendChild(questionBlock);
}

// MENGHITUNG HASIL

function saveScore5() {
  var totalScore = 0;
  for (var index = 0; index < questions.length; index++) {
    var selectedAnswer = document.querySelector(
      'input[name="question' + index + '"]:checked'
    );
    if (selectedAnswer) {
      totalScore += parseInt(selectedAnswer.value);
    }
  }
  localStorage.setItem('totalscore5', totalScore);
  window.location.href = 'result.html';
}

// TIMER
let countdownDuration;

function startCountdown() {
  // Ambil waktu tersisa dari localStorage
  countdownDuration = localStorage.getItem('remainingTime');
  if (!countdownDuration) {
    countdownDuration = 110 * 60; // Set waktu awal jika tidak ada
    localStorage.setItem('remainingTime', countdownDuration);
  } else {
    countdownDuration = parseInt(countdownDuration);
  }

  countdown = setInterval(() => {
    if (countdownDuration <= 0) {
      clearInterval(countdown);
      alert('Waktu habis!');
      return;
    }
    countdownDuration--;
    localStorage.setItem('remainingTime', countdownDuration);
    updateDisplay();
  }, 1000);

  updateDisplay();
}

function updateDisplay() {
  let hours = Math.floor(countdownDuration / 3600);
  let minutes = Math.floor((countdownDuration % 3600) / 60);
  let seconds = countdownDuration % 60;
  document.getElementById('countdown').innerText = `${String(hours).padStart(
    2,
    '0'
  )}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function goToPage6() {
  window.location.href = 'result.html';
}

window.onload = startCountdown;

window.addEventListener('load', quizForm);
