var questions = [
  {
    question:
      'Produk buatan luar negeri lebih digemari oleh sebagian besar masyarakat Indonesia. Kenyataan tersebut sangat ironis. Ini berarti industri dalam negeri harus melakukan koreksi diri agar produk dalam negeri mampu bersaing dengan produk luar. Perlu dilakukan peningkatan kualitas produk. Adapun caranya dengan ....',
    answers: [
      { text: 'A. Peniruan', points: 0 },
      { text: 'B. Pelatihan', points: 0 },
      { text: 'C. Penelitian', points: 5 }, // Benar
      { text: 'D. Pengimitasian', points: 0 },
      { text: 'E. Penduplikasian', points: 0 },
    ],
  },
  {
    question:
      'Pada era modernisasi seperti sekarang ini, informasi menyebar dari suatu wilayah ke wilayah lain dengan cepat. Salah satu dampak negatif persebaran informasi tersebut adalah ....',
    answers: [
      { text: 'A. Munculnya konsumerisme', points: 0 },
      { text: 'B. Menghambat budaya lokal', points: 5 }, // Benar
      { text: 'C. Meningkatnya daya beli masyarakat', points: 0 },
      { text: 'D. Menurunkan produktivitas masyarakat', points: 0 },
      { text: 'E. Meningkatkan produktivitas masyarakat', points: 0 },
    ],
  },
  {
    question:
      'Semangat nasionalisme tampak pada lambang Garuda Pancasila berupa ....',
    answers: [
      { text: 'A. Tulisan Bhinneka Tunggal Ika', points: 5 }, // Benar
      { text: 'B. Pohon beringin pada perisai burung garuda', points: 0 },
      { text: 'C. Rantai pada perisai burung garuda', points: 0 },
      { text: 'D. Bintang pada perisai burung garuda', points: 0 },
      { text: 'E. Padi dan kapas pada perisai burung garuda', points: 0 },
    ],
  },
  {
    question:
      'Budaya gotong royong masih lekat di lingkungan perdesaan. Contohnya, jika ada tetangga yang terkena musibah masyarakat segera datang membantu. Berbeda dengan kehidupan di perkotaan, meskipun bertetangga antarrumah yang satu dan lainnya tidak saling bertegur sapa, mereka sibuk dengan urusan masing-masing. Fenomena tersebut merupakan pengaruh modernisasi pada aspek ....',
    answers: [
      { text: 'A. Politik', points: 0 },
      { text: 'B. Sosial', points: 5 }, // Benar
      { text: 'C. Hukum', points: 0 },
      { text: 'D. Ekonomi', points: 0 },
      { text: 'E. Pertahanan', points: 0 },
    ],
  },
  {
    question:
      'Aksi pencurian yang terjadi di pasar dan pusat-pusat perbelanjaan lainnya menunjukkan semakin tingginya tingkat kriminalitas. Hal ini merupakan efek lanjutan dari dampak negatif globalisasi di bidang ekonomi yaitu ....',
    answers: [
      { text: 'A. Meningkatnya pengangguran', points: 0 },
      { text: 'B. Kesenjangan sosial', points: 5 }, // Benar
      { text: 'C. Munculnya sikap individual', points: 0 },
      { text: 'D. Menurunnya tingkat kesehatan', points: 0 },
      { text: 'E. Memudarnya semangat gotong royong', points: 0 },
    ],
  },
  {
    question:
      'Salah satu contoh pemanfaatan kemajuan IPTEK dalam bidang hukum adalah ....',
    answers: [
      {
        text: 'A. Masyarakat mendapatkan ruang dalam mengawasi kebijakan pemerintah',
        points: 0,
      },
      { text: 'B. Media sosial sebagai sarana penyalur inspirasi', points: 0 },
      { text: 'C. Pemantauan harga saham melalui internet', points: 0 },
      {
        text: 'D. Penggunaan CCTV oleh aparat kepolisian dalam olah TKP',
        points: 5,
      }, // Benar
      { text: 'E. Media pembelajaran melalui layanan online', points: 0 },
    ],
  },
  {
    question:
      'Dalam melakukan kampanyenya, seorang anggota dewan banyak memberikan janji-janji kepada masyarakat. Jika ia merupakan orang yang berintegritas, manakah yang sebaiknya dilakukan jika ia berhasil terpilih?',
    answers: [
      {
        text: 'A. Menyumbangkan uang pribadinya untuk kepentingan masyarakat',
        points: 0,
      },
      {
        text: 'B. Berkomitmen untuk tidak mengambil gaji selama menjabat',
        points: 0,
      },
      {
        text: 'C. Berusaha menunaikan semua janji-janji kampanyenya',
        points: 5,
      }, // Benar
      {
        text: 'D. Menunjukkan etos kerja yang tinggi dengan pulang paling akhir',
        points: 0,
      },
      {
        text: 'E. Memberikan hadiah kepada tim sukses yang telah bekerja keras untuknya',
        points: 0,
      },
    ],
  },
  {
    question:
      'Pernyataan atau janji kepada diri sendiri tentang komitmen melaksanakan seluruh tugas, fungsi, tanggung jawab, wewenang, dan peran sesuai dengan peraturan perundang-undangan serta kesanggupan untuk tidak melakukan korupsi, kolusi, dan nepotisme disebut dengan ....',
    answers: [
      { text: 'A. Nawa Cita', points: 0 },
      { text: 'B. Pakta Integritas', points: 5 }, // Benar
      { text: 'C. Janji Setia ASN', points: 0 },
      { text: 'D. Komitmen Integritas', points: 0 },
      { text: 'E. Komitmen Kerja', points: 0 },
    ],
  },
  {
    question:
      'Salah satu tujuan dari dilaksanakannya penandatanganan pakta integritas adalah ....',
    answers: [
      {
        text: 'A. Menumbuhkan keterbukaan dan kejujuran serta memperlancar tugas yang berkualitas, efektif, dan akuntabel',
        points: 5,
      }, // Benar
      { text: 'B. Memperkuat semangat kerja birokrat', points: 0 },
      {
        text: 'C. Dapat dijadikan batasan dalam menjaga sikap dalam bekerja',
        points: 0,
      },
      {
        text: 'D. Sumber acuan hukum dalam memberikan sanksi terhadap setiap bentuk pelanggaran yang terjadi',
        points: 0,
      },
      {
        text: 'E. Menunjukkan kesungguhan dalam menyatakan loyalitas terhadap perusahaan apapun yang terjadi',
        points: 0,
      },
    ],
  },
  {
    question: 'Gratifikasi dapat dianggap menjadi suap apabila ....',
    answers: [
      { text: 'A. Memiliki nilai yang besar', points: 0 },
      { text: 'B. Di luar dari kewajaran sebuah pemberian', points: 0 },
      {
        text: 'C. Berhubungan dengan jabatannya dan yang berlawanan dengan kewajiban atau tugasnya',
        points: 5,
      }, // Benar
      { text: 'D. Diberikan oleh orang yang memiliki kepentingan', points: 0 },
      {
        text: 'E. Terdapat motif tertentu dari hadiah yang diberikannya',
        points: 0,
      },
    ],
  },

  {
    question:
      'Filsuf terkemuka, Herb Shepherd, menyebut integritas diri sebagai kesatuan yang mencakup empat nilai, yaitu ....',
    answers: [
      { text: 'A. Jujur, benar, teguh, dan konsisten', points: 5 }, // Benar
      { text: 'B. Kesatuan, persamaan, keadilan, dan demokratis', points: 0 },
      { text: 'C. Kecerdasan, mental, spiritual, dan emosi', points: 0 },
      { text: 'D. Jiwa, raga, lahir, dan batin', points: 0 },
      { text: 'E. Fisik, mental, sosial, dan spiritual', points: 0 },
    ],
  },
  {
    question:
      'Petugas pajak berkunjung ke kantor Anda untuk memeriksa laporan pembayaran pajak perusahaan. Atasan meminta Anda untuk menemani petugas tersebut selama proses pemeriksaan dan memberikannya sebuah amplop berisikan uang. Apa yang akan Anda lakukan?',
    answers: [
      {
        text: 'A. Melakukannya asalkan atasan yang bertanggung jawab',
        points: 0,
      },
      { text: 'B. Menolak permintaan tersebut', points: 5 }, // Benar
      { text: 'C. Melakukannya karena takut dipecat', points: 0 },
      { text: 'D. Mencari alasan agar tidak melakukannya', points: 0 },
      {
        text: 'E. Menerima permintaan tersebut dengan catatan uang yang diberikan hanyalah untuk pengganti transport',
        points: 0,
      },
    ],
  },
  {
    question:
      'Lambang diyakini sebagai salah satu pendorong keberhasilan suatu cita-cita. Padi dan kapas pada burung Garuda melambangkan ....',
    answers: [
      { text: 'A. Ketuhanan Yang Maha Esa', points: 0 },
      { text: 'B. Kemanusiaan yang Adil dan Beradab', points: 0 },
      { text: 'C. Persatuan Indonesia', points: 0 },
      {
        text: 'D. Kerakyatan yang Dipimpin oleh Hikmat Kebijaksanaan dan Permusyawaratan Perwakilan',
        points: 0,
      },
      { text: 'E. Keadilan Sosial bagi Seluruh Rakyat Indonesia', points: 5 }, // Benar
    ],
  },
  {
    question:
      'Negara kesatuan adalah bentuk negara yang wewenang legislatif tertinggi dipusatkan dalam suatu badan legislatif nasional. Pernyataan tersebut merupakan pendapat dari ....',
    answers: [
      { text: 'A. Machiavelli', points: 0 },
      { text: 'B. C.F Strong', points: 5 }, // Benar
      { text: 'C. R.Kranenburg', points: 0 },
      { text: 'D. Abu Daud Busroh', points: 0 },
      { text: 'E. Imanuel Kant', points: 0 },
    ],
  },
  {
    question:
      'Pernyataan berikut yang benar mengenai bentuk negara kesatuan adalah ....',
    answers: [
      {
        text: 'A. Bentuk negara yang memiliki negara-negara bagian',
        points: 0,
      },
      {
        text: 'B. Pemerintah pusat memiliki kedaulatan penuh terhadap negara bagian.',
        points: 0,
      },
      {
        text: 'C. Terdiri atas satu pemerintah negara bagian dan satu pemerintah federal.',
        points: 0,
      },
      {
        text: 'D. Hanya ada satu undang-undang dasar, kepala negara, kabinet, dan parlemen',
        points: 5,
      }, // Benar
      {
        text: 'E. Tiap negara bagian memiliki kekuasaan menyusun undang-undang dasar sendiri.',
        points: 0,
      },
    ],
  },
  {
    question: 'Pelaksanaan otonomi daerah menganut asas ....',
    answers: [
      { text: 'A. Sentralisasi, dekonsentrasi, dan desentralisasi', points: 0 },
      {
        text: 'B. Sentralisasi, desentralisasi, dan tugas pembantuan',
        points: 0,
      },
      {
        text: 'C. Desentralisasi, dekonsentrasi, dan tugas pembantuan',
        points: 5,
      }, // Benar
      {
        text: 'D. Tugas pembantuan, dekonsentrasi, dan sentralisasi',
        points: 0,
      },
      {
        text: 'E. Sentralisasi, partisipasi, dekonsentrasi',
        points: 0,
      },
    ],
  },
  {
    question:
      'Penyerahan wewenang pemerintah oleh pemerintah pusat kepada daerah otonom dalam kerangka Negara Kesatuan Republik Indonesia disebut ....',
    answers: [
      { text: 'A. Sentralisasi', points: 0 },
      { text: 'B. Dekonsentrasi', points: 0 },
      { text: 'C. Pelimpahan wewenang', points: 0 },
      { text: 'D. Tugas pembantuan', points: 0 },
      { text: 'E. Desentralisasi', points: 5 }, // Benar
    ],
  },
  {
    question:
      'Penugasan dari pemerintah pusat kepada daerah dan/atau desa, dari pemerintah provinsi kepada kabupaten/kota dan/atau desa, serta dari pemerintah kabupaten/kota kepada desa untuk melaksanakan tugas tertentu disebut ....',
    answers: [
      { text: 'A. Sentralisasi', points: 0 },
      { text: 'B. Dekonsentrasi', points: 5 }, // Benar
      { text: 'C. Pelimpahan wewenang', points: 0 },
      { text: 'D. Tugas pembantuan', points: 0 },
      { text: 'E. Desentralisasi', points: 0 },
    ],
  },
  {
    question:
      'Pada sidang BPUPKI kedua, siapa yang mengusulkan dasar negara berupa Pancasila?',
    answers: [
      { text: 'A. Moh. Hatta', points: 0 },
      { text: 'B. Soepomo', points: 0 },
      { text: 'C. Soekarno', points: 5 }, // Benar
      { text: 'D. Achmad Subardjo', points: 0 },
      { text: 'E. Ki Bagus Hadikusumo', points: 0 },
    ],
  },
  {
    question:
      'Pada teks proklamasi paragraf kedua, Moh. Hatta mengusulkan mengenai ....',
    answers: [
      {
        text: 'A. Penandatanganan naskah proklamasi atas nama bangsa Indonesia',
        points: 5,
      }, // Benar
      { text: 'B. Pengalihan kekuasaan', points: 0 },
      { text: 'C. Tempat pelaksanaan proklamasi', points: 0 },
      { text: 'D. Perumusan teks proklamasi', points: 0 },
      { text: 'E. Waktu pembacaan teks proklamasi', points: 0 },
    ],
  },
  {
    question:
      'PPKI melaksanakan sidang 1 pada 18 Agustus 1945 dan dihadiri 27 orang yang dipimpin Soekarno dan Hatta. Hasil keputusan sidang tersebut adalah ....',
    answers: [
      {
        text: 'A. Mengesahkan dan menetapkan UUD Republik Indonesia',
        points: 5,
      }, // Benar
      {
        text: 'B. Menetapkan 12 kementerian sebagai pembantu presiden',
        points: 0,
      },
      { text: 'C. Menetapkan wilayah Indonesia menjadi 8 provinsi', points: 0 },
      { text: 'D. Pembentukan tentara kebangsaan', points: 0 },
      { text: 'E. Pembentukan Komite Nasional Indonesia', points: 0 },
    ],
  },
  {
    question:
      'Tokoh yang terkait dalam peristiwa Rengasdengklok terbagi menjadi golongan tua dan golongan muda. Berikut ini yang termasuk golongan tua adalah ....',
    answers: [
      { text: 'A. Ahmad Soebardjo', points: 5 }, // Benar
      { text: 'B. Sukarni', points: 0 },
      { text: 'C. Yusuf Kunto', points: 0 },
      { text: 'D. Sudanco Singgih', points: 0 },
      { text: 'E. Iwa Kusumasumantri', points: 0 },
    ],
  },
  {
    question:
      'Ketetapan MPRS RI No. XIII MPRS/1966 mengenai Penegasan Kembali Landasan Kebijaksanaan Politik Luar Negeri Republik Indonesia menyatakan bahwa politik bebas aktif bertujuan mempertahankan kebebasan Indonesia terhadap imperialisme dan kolonialisme dalam segala bentuk dan manifestasinya dan menegakkan kerangka tujuan revolusi, yaitu ....',
    answers: [
      {
        text: 'A. Pembentukan satu negara Republik Indonesia yang berbentuk negara kesatuan yang demokratis, dengan wilayah kekuasaan dari Sabang sampai Merauke',
        points: 0,
      },
      {
        text: 'B. Pembentukan satu masyarakat yang adil dan makmur, material dan spiritual, dalam wadah Negara Kesatuan Republik Indonesia',
        points: 0,
      },
      {
        text: 'C. Pembentukan persahabatan yang baik antara Republik Indonesia dan semua negara di dunia, terutama sekali dengan negara-negara Afrika dan Asia atas dasar kerja sama membentuk satu dunia baru yang bersih dari imperialisme menuju perdamaian dunia yang sempurna',
        points: 0,
      },
      { text: 'D. A, B, dan C salah', points: 0 },
      { text: 'E. A, B, dan C benar', points: 5 }, // Benar
    ],
  },
  {
    question:
      'Tanggal 24 April 1955, Sidang Umum terakhir Konferensi Asia Afrika dibuka. Dalam Sidang Umum itu, dibacakan oleh sekretaris jenderal konferensi rumusan pernyataan dari tiap-tiap panitia (komite) sebagai hasil konferensi. Setelah itu, ketua konferensi menyampaikan pidato penutupan dan menyatakan bahwa Konferensi Asia Afrika ditutup. Konsensus itu dituangkan dalam komunike akhir, yang isinya adalah mengenai, kecuali ....',
    answers: [
      { text: 'A. Kerja sama ekstradisi', points: 5 }, // Benar
      { text: 'B. Kerja sama ekonomi', points: 0 },
      { text: 'C. Kerja sama kebudayaan', points: 0 },
      {
        text: 'D. Hak-hak asasi manusia dan hak menentukan nasib sendiri',
        points: 0,
      },
      { text: 'E. Masalah rakyat jajahan', points: 0 },
    ],
    explanation:
      'Teks berikut digunakan untuk • soal nomor 25-_27.(1) Hampir tidak ada lagi kata yang tepat untuk melukiskan parahnya kemacetan lalu lintas jakarta. (2) kondisi itu terus berulang, tidak lagi kenal waktu, dan sungguh banyak implikasi buruknya (3) kerugian material kian membengkak  (4) ratusan milyar rupiah hangus terbakar untuk bahan bakar minyak (5) Belum lagi kerugian materi lain misalnya ausnya komponen kendaraan sebelum  aktunya dan daya tahan jalanan yang semakin memburuk. (6) Kerugian tidak terkalkulasi adalah semakin memburuknya lingkungan Jakarta  akibat  asap  kendaraan.(7) pengendara stres, gampang marah dan tidak toleran (8) K rugian yang paling berharga adalah waktu yang seharusnya dapat digunakan untuk kegiatan produktif terbuan sia sia (9) Selama sistem transportasi tidak menyediakan moda alternatif, jumlahkendaraan pribadi (mobil dan motor) terus bertambah sehingga sistem lalu lintas akan kian kacau-balau.(10)Kemacetan parah lalu lintas Jakarta tidak dapat dipandang secara tersendiri.(11)la juga bertali-temali dengan persoalan perencanaan dan penataan Kata Jakarta dan sekitarnya. (12) Sebut saja contohnya pembangunan drainase kota serta penentuan lokasi pusat kegiatan ekonomi, permukiman, dan perkantoran. (13) Keadaan itu sudah bercampur aduk. (14) Faktanya setiap ada pembangunan pusat perbelanjaan disitu terjadi kemacetan.(15) Hujan sedikit saja jalanan sudah langsung digenangi air karena sistem drainase yang buruk lalu lintas menjadi macet.(16) Mengelola Jakarta memang memerlukan visi yang kuat dari aparat yang visioner dan tidak korup..(17) Seharusnya Kata Jakarta ditata dan diatur dengan perangkat hukum yang tegas dalam peruntukan lahannya.. (18) Penegakan hukum tidak hanya berlaku bagi warga pelanggar aturan, tetapi seharusnya juga berlaku lebih keras bagi aparat yang main mata dan melanggar rencana induk tata kota.(19) Kusutnya lalu lintasja arta hanya dapat diatasi apabila ada kepemimpinan langsung secara serius dari Gubernur dengan dukungan penuh pemerintah.',
  },

  {
    question: 'Rangkuman manakah yang paling tepat untuk teks tersebut?',
    answers: [
      {
        text: 'A. Parahnya kemacetan lalu lintas di Jakarta berimplikasi pada banyaknya kerugian yang hanya bisa diatasi melalui perencanaan dan penataan oleh aparat yang visioner dan tidak korup.',
        points: 0,
      },
      {
        text: 'B. Parahnya perencanaan pembangunan drainase kota dan penataan kota Jakarta menyebabkan banjir dan kemacetan lalu lintas yang sangat parah sehingga diperlukan aparat yang visioner dan tidak korup.',
        points: 0,
      },
      {
        text: 'C. Kemacetan lalu lintas di Jakarta berimplikasi pada buruknya perencanaan dan penataan kota Jakarta sehingga diperlukan penegakan hukum yang tidak hanya berlaku bagi warga pelanggar aturan.',
        points: 0,
      },
      {
        text: 'D. Sistem transportasi dan sistem lalu lintas di Jakarta kacau-balau sehingga diperlukan perencanaan dan penataan kota oleh aparat yang visioner dan tidak korup untuk menanggulanginya.',
        points: 5,
      }, // Benar
      {
        text: 'E. Pembangunan drainase kota Jakarta yang tidak terencana menyebabkan banjir dan kemacetan lalu lintas yang sangat parah sehingga diperlukan dukungan penuh dari gubernur.',
        points: 0,
      },
    ],
  },
  {
    question:
      'Hubungan isi antarparagraf dalam teks tersebut yang paling tepat adalah ....',
    answers: [
      { text: 'A. Paragraf ke-2 merupakan rincian paragraf ke-1.', points: 0 },
      { text: 'B. Paragraf ke-3 merupakan solusi paragraf ke-2.', points: 0 },
      { text: 'C. Paragraf ke-3 menjadi pembanding paragraf ke-2.', points: 0 },
      { text: 'D. Paragraf ke-2 memaparkan contoh paragraf ke-1.', points: 0 },
      { text: 'E. Paragraf ke-2 menjadi akibat paragraf ke-1.', points: 5 }, // Benar
    ],
  },
  {
    question: 'Penulis teks tersebut berpihak pada ....',
    answers: [
      { text: 'A. Pengendara', points: 0 },
      { text: 'B. Masyarakat', points: 5 }, // Benar
      { text: 'C. Penegak hukum', points: 0 },
      { text: 'D. Gubernur', points: 0 },
      { text: 'E. Pemerintah', points: 0 },
    ],
    explanation:
      'Teks berikut ini untuk soal nomor 28-30.Cerita tentang peretasan terhadap serverSony Pictures terus berlanjut. Kini,kelompokperetas yang menamakan Guardians ofpeace (GOP) itu mempublikasi daftar ribuanpassword yang memiliki oleh Sony. Taksulit bagi kelompok peretas tersebut dalammenemukan daftar password di server SonyPictures, karena Sony sendiri menyimpanmenyimpan dokumen yang seharusnyabersifat pribadi dan rahasia itu di satu folderyang sama. Lebih parah lagi, Sony memberinama folder tersebut "password".Seperti yang dikutip dari KompasTeknodari buzzfeed, daftar password yangdipublikasikan kelompok hacker tersebut,antara lain berisi password log-in seluruhkaryawan Sony, password web layananfinansial, termasuk di dalamnya adalahpassword akun-akun Facebook, twitter,dan Youtube milik studio-studio film besardi Hollywood. Daftar tersebut dimuatdalam 139 dokumen word, spreedsheetExcel,file Zip, dan PDF. Kebanyakan darifile-file tersebut juga hanya diberi namayang sederhana, seperti "password list.xls"atau "Youtube login passwods.xlsx.Menurut Buzzfeed,kompilasi file-filetersebut kini beredar di jagat maya melaluisitus file-Sharing.Jika Sony tidak melakukantindakan pencegahan, peretas-peretas lainyang mendapat informasi rahasia itu bisasaja memanfaatkan untuk hal yang jahat,seperti penipuan. Data yang dirilis olehkelompok peretas GOP tersebut disinyalirbaru sebagian saja yang dibocorkanke publik. Diperkirakan, GOP saat inimemegang data penting Sony Picturesyang jika ditotal besarannya mencapai100 terabyte. Kejadian ini tentu sajamenjadi pelajaran bagi kita semua untukmenyimpan informasi login dari passworddi tempat yang aman, dan dengan namayang tidak mudah ditebak. Jika perlu, kitabisa menambahkan enkripsi atau passworduntuk membuka dokumen tersebut.Serangan terhadap server Sony Picturesitu sebelumnya disebut dilakukanoleh Korea Utara yang menggunakanperetas Tiongkok untuk membobolsistem komputer millik Sony.Beberapaahli juga melihat kesamaan pola antaraperetas di Sony Pictures dan serangancyber yang dilakukan oleh Korea Utaraterhadap bank-bank dan jaringan TV diKorea Selatan pada 2013.Motif serangandisinyalir berkaitan dengan film TheInterview yang bakalan segera dirilis olehSony Pictures. Film komedi besutan SethRogen ini mengisahkan tentang usahabadan Intelijen AS,CIA, untuk membunuhpemimpin besar Korea Utara, Kim Jong un',
  },
  {
    question:
      'Hal positif apa yang dapat diambil dari kejadian pada bacaan di atas?',
    answers: [
      {
        text: 'A. Peletakan data rahasia sebaiknya disebar dalam beberapa folder.',
        points: 0,
      },
      {
        text: 'B. Tindakan pencegahan harus dapat dilakukan apabila mengalami kejadian peretasan.',
        points: 5,
      }, // Benar
      {
        text: 'C. Sony memiliki data-data penting studio-studio film besar di Hollywood.',
        points: 0,
      },
      {
        text: 'D. Saran penyimpanan informasi rahasia dengan memberi nama yang tidak mudah ditebak.',
        points: 0,
      },
      {
        text: 'E. Korea Utara sanggup melakukan penggalian informasi terhadap perusahaan-perusahaan besar.',
        points: 0,
      },
    ],
  },
  {
    question:
      'Salah satu kemungkinan yang menyebabkan Korea Utara melakukan peretasan terhadap Sony adalah ...',
    answers: [
      {
        text: 'A. Kebijakan Sony yang mendukung pengembangan teknologi di negara berkembang',
        points: 0,
      },
      {
        text: 'B. Konten film "The Interview" yang menggambarkan usaha membunuh pemimpin Korea Utara',
        points: 5,
      }, // Benar
      {
        text: 'C. Kerja sama Sony dengan negara-negara lain dalam proyek film internasional',
        points: 0,
      },
      {
        text: 'D. Persaingan bisnis di industri film yang merugikan Sony',
        points: 0,
      },
    ],
  },
  {
    question: 'Yang bukan merupakan fakta dari bacaan di atas adalah ...',
    answers: [
      {
        text: 'A. GOP merilis data yang telah diretas kepada publik.',
        points: 0,
      },
      {
        text: 'B. Nama folder yang diberikan untuk menyimpan data-data password sangat mudah ditebak oleh para peretas.',
        points: 0,
      },
      {
        text: 'C. Korea Utara mengaku tidak pernah terlibat dalam kejadian peretasan terhadap Sony Pictures.',
        points: 5,
      }, // Benar
      {
        text: 'D. Pemberian enkripsi pada dokumen juga dapat membantu keamanan data dari para peretas.',
        points: 0,
      },
      {
        text: 'E. Peretas Tiongkok juga pernah melakukan serangan cyber kepada beberapa bank dan telekomunikasi di Korea Utara.',
        points: 0,
      },
    ],
  },
];

// Mengisi soal ke dalam form
var quizForm = document.getElementById('quiz-form');

for (var index = 0; index < questions.length; index++) {
  var q = questions[index];
  var questionBlock = document.createElement('div');
  questionBlock.classList.add('question');

  questionBlock.innerHTML = '<p>' + (index + 1) + '. ' + q.question + '</p>';

  for (var i = 0; i < q.answers.length; i++) {
    var isChecked =
      localStorage.getItem('question' + index) == q.answers[i].points;
    questionBlock.innerHTML += `
            <label>
                <input type="radio" name="question${index}" value="${
      q.answers[i].points
    }" ${isChecked ? 'checked' : ''} required>
                ${q.answers[i].text}
            </label><br>
        `;
  }

  // Ambil jawaban yang sudah disimpan sebelumnya

  // Menambahkan penjelasan setelah soal
  if (q.explanation) {
    var explanationBlock = document.createElement('div');
    explanationBlock.classList.add('explanation');
    explanationBlock.innerHTML = `<p>${q.explanation}</p>`;
    questionBlock.appendChild(explanationBlock);
  }

  quizForm.appendChild(questionBlock);
}
// Menyimpan jawaban yang dipilih ke localStorage

// Menghitung hasil
// Saat tombol submit ditekan, simpan skor di localStorage dan pindah ke halaman hasil

function saveScore1() {
  var totalScore = 0;
  for (var index = 0; index < questions.length; index++) {
    var selectedAnswer = document.querySelector(
      'input[name="question' + index + '"]:checked'
    );
    if (selectedAnswer) {
      totalScore += parseInt(selectedAnswer.value);
      localStorage.setItem('question' + index, selectedAnswer.value);
    }
  }
  localStorage.setItem('totalscore1', totalScore);
}
// Fungsi yang memanggil saveScore3 ketika terjadi perubahan pilihan
quizForm.addEventListener('change', saveScore1);
function next() {
  saveScore1();

  window.location.href = '2tiu.html';
}
function goToPagem() {
  saveScore1();

  window.location.href = 'tiumm.html';
}
function goToTkp() {
  saveScore1();

  window.location.href = 'tkp2.html';
}

// Fungsi untuk menampilkan soal dan penjelasan
// Fungsi untuk memuat skor yang tersimpan dari localStorage

// TIMER & LANJUTAN
let countdownDuration = 110 * 60; // 110 menit dalam detik
let countdown;

function startCountdown() {
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
      localStorage.removeItem('remainingTime'); // Hapus waktu dari localStorage

      return;
    }

    countdownDuration--;
    localStorage.setItem('remainingTime', countdownDuration);
    updateDisplay();
  }, 1000);

  updateDisplay();
}
function resetCountdown() {
  clearInterval(countdown); // Hentikan interval jika masih berjalan
  countdownDuration = 110 * 60; // Atur ulang waktu
  localStorage.setItem('remainingTime', countdownDuration); // Simpan di localStorage
  updateDisplay(); // Perbarui tampilan
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

function goToPage2() {
  window.location.href = '2tiu.html';
}
function goToPageTKP() {
  window.location.href = 'tkp2.html';
}
function goToPageMM() {
  window.location.href = 'tiumm.html';
}

window.addEventListener('load', quizForm);
window.addEventListener('load', saveScore1());

window.addEventListener('load', startCountdown);
