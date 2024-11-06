// Data soal dengan poin untuk setiap jawaban
var questions = [
  {
    question:
      'Ancaman terhadap negara bisa bermacam-macam, salah satunya invasi. lnvasi dapat dilakukan oleh suatu negara kepada negara lain dengan tujuan tertentu seperti tercermin pada pilihan',
    answers: [
      {
        text: 'A.	Amerika Serikat menyerang dan menduduki wilayah lrak.',
        points: 5,
      }, // Salah
      {
        text: 'B.	Indonesia membantu Lebanon untuk meredakan konflik.',
        points: 0,
      }, // Benar
      {
        text: 'C. Singapura menguasai rakyat yang· ada di dalam wilayahnya.',
        points: 0,
      }, // Salah
      {
        text: 'D.	Jepang   memberikan   bantuan kepada negara korban perang.',
        points: 0,
      }, // Salah
      { text: 'E.	Negara penjajah mengatur negara jajahannya.', points: 0 }, // Salah
    ],
  },
  {
    question:
      'Sisi negatif yang harus dihindari dalam menyongsong kemajuan teknologi dewasa ini adalah ...:.',
    answers: [
      {
        text: 'A. pro·aktif.',
        points: 0,
      }, // Salah
      {
        text: 'B.eksklusivisme',
        points: 5,
      }, // Benar
      {
        text: 'C. kuriositas',
        points: 0,
      }, // Salah
      {
        text: 'D.	adaptif',
        points: 0,
      }, // Salah
      { text: 'E.	profesionalisme', points: 0 }, // Salah
    ],
  },
  {
    question:
      'Amandemen UUD 1945. pertama menghasilkan beberapa perubahan pada beberapa pasal batang· tubuh UUD 1945. Pasal yang djamandemen adalah ....',
    answers: [
      {
        text: 'A.	Pasal 5, 7, 9, 13, 14, 15, 17 I 20 dan 21',
        points: 5,
      }, // Salah
      {
        text: 'PasaI 5, 7, 9, 13, 14, 1S., 1 7, 20,dan 22',
        points: 0,
      }, // Benar
      {
        text: 'C.	Pasal -S,.7, 9,·13, 14,· 15, 17, 20,dari 23',
        points: 0,
      }, // Salah
      {
        text: 'D.	pasal 5, 7, 9, 13, 14; 15, 1_7·, 20,dan 24',
        points: 0,
      }, // Salah
      { text: 'Pasal -5, 7, 9, 13, 14,-15, 17, 20 dari 25', points: 0 }, // Salah
    ],
  },
  {
    question:
      'Semakin  memudarnya  solidaritas,kepequlian, dan kesetiakawanan sosial merupakan dampak negatif globalisasi yang.dapat memecah NKRI jika tidak diantisipasi, dengan menumbuhkan sikap ....',
    answers: [
      {
        text: 'A.	etnosentr',
        points: 0,
      }, // Salah
      {
        text: 'B.	apatis',
        points: 0,
      }, // Benar
      {
        text: 'C.	nasionalis',
        points: 5,
      }, // Salah
      {
        text: 'D.	egois',
        points: 0,
      }, // Salah
      { text: 'E.	individualis', points: 0 }, // Salah
    ],
  },
  {
    question:
      'Globalisasi sebagai dampak dari kemajuan teknologi membawa ideologi liberal dan komunis. ldeologi liberalmenawarkan	berbagai kebebasan, bahkan tanpa batas. ldeologi komunis menyamaratakan	hak	kepemilikan hingga hak individu tidak diakui. Untuk menangkal pengaruh kedua ideologi tersebut Indonesia harus ....',
    answers: [
      {
        text: 'A.	menutup	diri dari pergaulan internasional',
        points: 0,
      }, // Salah
      {
        text: 'B.	menolak tegas modernisasi· yang dibawa globalisasi',
        points: 0,
      }, // Benar
      {
        text: 'C.	berpegang teguh pada landasan idiil Negara Indonesia',
        points: 5,
      }, // Salah
      {
        text: 'D.	melarang ideologi liberal	dan komunis masuk ke Indonesia',
        points: 0,
      }, // Salah
      {
        text: 'E.	mengikuti ideologi yang banyak dianut negara-negara di dunia',
        points: 0,
      }, // Salah
    ],
  },
  {
    question:
      '6.	Contoh sikap menyelamatkan kebudayaan Indonesia	di tengah hadirnya budaya pop adalah ....',
    answers: [
      {
        text: 'A.	Lebih mementingkan menjaga penampilan daripada berperilaku baik',
        points: 0,
      }, // Salah
      {
        text: 'B.	Senang   mengeriakan   busana',
        points: 0,
      }, // Benar
      {
        text: 'C.	Senang hidup glamor dan huru hara',
        points: 0,
      }, // Salah
      {
        text: 'D.	Menggunakan batik kapanpun',
        points: 0,
      }, // Salah
      {
        text: 'E.	Mencintai seni tradisional',
        points: 5,
      }, // Salah
    ],
  },
  {
    question:
      '7.	Kemajemukan sosial budaya dalam masyarakat Indonesia mempunyai pengaruh positif terhadap usaha untuk rneningkatkan ·ketahanan nasional dalam bentuk potensi ....',
    answers: [
      {
        text: 'A.	Akulturasi budaya',
        points: 0,
      }, // Salah
      {
        text: 'B.	lntegrasi sosial',
        points: 5,
      }, // Benar
      {
        text: 'C.	Sumber daya alam',
        points: 0,
      }, // Salah
      {
        text: 'D.	Sumber daya manusia',
        points: 0,
      }, // Salah
      {
        text: 'E.	Keberhasilan pembangunan',
        points: 0,
      }, // Salah
    ],
  },
  {
    question:
      'Jika Anda menjadi anggota yang melanggar pakta integritas, maka ketika mendapat teguran biasanya Anda ....',
    answers: [
      {
        text: 'A.	Memberi alasan yang dapat diterima mengapa saya melanggar pakta integritas',
        points: 0,
      }, // Salah
      {
        text: 'B.	Saya  akan  menerima  teguran tersebut karena memang salah meskipun menhadapi konsekuensi juga akan disalahkan oleh_anggota yang lain',
        points: 5,
      }, // Benar
      {
        text: 'C.	Menemui Anggota sebelum mendapat teguran',
        points: 0,
      }, // Salah
      {
        text: 'D.	Menunggu dipanggil dan mempersiapkan jawaban jawaban yang akan saya berikan',
        points: 0,
      }, // Salah
      {
        text: 'E.	Pasrah akan nasib yang saya terima',
        points: 0,
      }, // Salah
    ],
  },
  {
    question:
      'Ketika berbelanja di minimarket, kasir melakukan ·kesalahan penghitungan. Sikap saya adalah ....',
    answers: [
      {
        text: 'A.	Mengonfirmasi untuk mendapatkan kebenaran',
        points: 5,
      }, // Salah
      {
        text: 'B.	Mengonfirmasi  jika saya dirugikan',
        points: 0,
      }, // Benar
      {
        text: 'C.	Mengonfirmasi jika selisih harga terlalu tinggi',
        points: 0,
      }, // Salah
      {
        text: 'D.	Abaikan saja karena	bukan kesalahan saya',
        points: 0,
      }, // Salah
      {
        text: 'E.	Abaikan	saja',
        points: 0,
      }, // Salah
    ],
  },
  {
    question:
      'Kasus korupsi terbesar yang pernah terjadi di Indonesia dan membuat negara mengalami kerugian besar adalah ..',
    answers: [
      {
        text: 'A.  Kasus Korupsi lzin Pertambangan Kotawaringin Timur',
        points: 0,
      }, // Salah
      {
        text: 'B.  Kasus BLBI',
        points: 0,
      }, // Benar
      {
        text: 'C.  Kasus E-KTP',
        points: 0,
      }, // Salah
      {
        text: 'D.	Kasus Proyek Hambalang',
        points: 0,
      }, // Salah
      {
        text: 'E.	Kasus Korupsi Soeharto',
        points: 5,
      }, // Salah
    ],
  },
  {
    question:
      'Salah satu contoh bentuk integritas diri yang memberikan kontribusi secara langsung bagi negara adalah ....',
    answers: [
      {
        text: 'A.	Membayar pajak kendaraan bermotor tepat pada waktunya',
        points: 5,
      }, // Salah
      {
        text: 'B.	Mengikuti upacara bendera dengan hikmat',
        points: 0,
      }, // Benar
      {
        text: 'C.	Mematuhi pakta integritas yang sudah ditandatangani di tempat kerja',
        points: 0,
      }, // Salah
      {
        text: 'D.	Melaporkan seseorang yang dicurigai  melakukan  korupsi kepada KPK',
        points: 0,
      }, // Salah
      {
        text: 'E.	Masuk kerja sesuai jam yang ditentukan',
        points: 0,
      }, // Salah
    ],
  },
  {
    question:
      'Saya sering memberikan nasihat kepada bawahan agar tidak melakukan kecurangan dalam pekerjaan maka sikap saya selanjutnya adalah ....',
    answers: [
      {
        text: 'A.	saya juga tidak boleh melakukan kecurangan tersebut',
        points: 5,
      }, // Salah
      {
        text: 'B.	lebih baik saya tidak melakukan kecurangan agar nama baik saya tidak tercemar',
        points: 0,
      }, // Benar
      {
        text: 'C.	tidak apa melakukan kecurangan karena jabatan saya lebih tinggi',
        points: 0,
      }, // Salah
      {
        text: 'D.	sesekali    saya   melakukan kecurangan tersebut',
        points: 0,
      }, // Salah
      {
        text: 'E.	berhenti memberikan nasihat agar tidak terkekang dengan perkataan sendiri',
        points: 0,
      }, // Salah
    ],
  },
  {
    question: 'Hari Kesaktian Pancasila diperingati setiap tanggaI',
    answers: [
      {
        text: 'A.	1 Juni',
        points: 0,
      }, // Salah
      {
        text: 'B.  22 Juli',
        points: 0,
      }, // Benar
      {
        text: 'C.  28 Oktober',
        points: 0,
      }, // Salah
      {
        text: 'D.	10 November',
        points: 0,
      }, // Salah
      {
        text: 'E.	1 Oktober',
        points: 5,
      }, // Salah
    ],
  },
  {
    question:
      'Sumpah Pemuda merupakan titik balik pemuda Indonesia untuk bersatu demi mewujudkan Indonesia merdeka. Tokoh yang membacakan Sumpah Pemuda adalah ....',
    answers: [
      {
        text: 'A.	Amir Syarifudin',
        points: 0,
      }, // Salah
      {
        text: 'B.	Moh Yamin',
        points: 0,
      }, // Benar
      {
        text: 'C.	Soegondo DJojopoespito',
        points: 5,
      }, // Salah
      {
        text: 'D.	Djoko Marsaid',
        points: 0,
      }, // Salah
      {
        text: 'E.	Rohjan ',
        points: 0,
      }, // Salah
    ],
  },
  {
    question:
      'Pada periode awal Kemerdekaan Indonesia sebelum MPR, DPR, dan DPA dibentuk, segala kekuasaan lembaga-lembaga tersebut dijalankan oleh ....',
    answers: [
      {
        text: 'A.	presiden dan menteri',
        points: 0,
      }, // Salah
      {
        text: 'B.	presiden dan wakil presiden',
        points: 0,
      }, // Benar
      {
        text: 'C.	presiden, menteri, dan BPK',
        points: 0,
      }, // Salah
      {
        text: 'D.	presiden dan sekretaris negara',
        points: 0,
      }, // Salah
      {
        text: 'E.	presiden dengan bantuan Kornite Nasional',
        points: 5,
      }, // Salah
    ],
  },
  {
    question:
      'Bangsa Indonesia adalah bangsa yang anti terhadap segala bentuk penjajahan. Hal ini sesuai dengan pembukaan UUD 1945 ....',
    answers: [
      {
        text: 'A.	alinea pertama',
        points: 5,
      }, // Salah
      {
        text: 'B.	alinea kedua',
        points: 0,
      }, // Benar
      {
        text: 'D.	alinea keempat',
        points: 0,
      }, // Salah
      {
        text: 'C.	alinea ketiga',
        points: 0,
      }, // Salah
      {
        text: 'E.	alinea pertama hingga keempat',
        points: 0,
      }, // Salah
    ],
  },
  {
    question:
      'Berdasarkan Pasal 30 Ayat (2), usaha pertahanan dan keamanan negara menjadi tugas dari ....',
    answers: [
      {
        text: 'A.	tiap warga negara',
        points: 0,
      }, // Salah
      {
        text: 'B.	TNI AD, AL, clan AU',
        points: 0,
      }, // Benar
      {
        text: 'C.	TNI dan Polri sebagai kekuatan utama, dan rakyat sebagai kekuatan pendukung',
        points: 5,
      }, // Salah
      {
        text: 'D.	seluruh  rakyat  yang  tinggal  di Indonesia',
        points: 0,
      }, // Salah
      {
        text: 'E.	seluruh warga di dunia sebagai bentuk dari rasa kesetiakawanan internasional',
        points: 0,
      }, // Salah
    ],
  },
  {
    question:
      'Berikut ini yang merupakan contoh peran serta positif warga negara dalam kegiatan pemerintah adalah ....',
    answers: [
      {
        text: 'A. Menunjukkan kekayaan',
        points: 0,
      }, // Salah
      {
        text: 'B.  Membayar	pajak tepat pada waktunya',
        points: 5,
      }, // Benar
      {
        text: 'C. Membangun	hotel-hotel berbintang.',
        points: 0,
      }, // Salah
      {
        text: 'D.	Bekerja keras untuk memenuhi kebutuhan.',
        points: 0,
      }, // Salah
      {
        text: 'E.	Memberikan bantuan kepada para korban bencana alam',
        points: 0,
      }, // Salah
    ],
  },
  {
    question:
      'Peradilan dalam lingkungan peradilan militer terdiri atas, kecuali ....',
    answers: [
      {
        text: 'A.  Pengadilan Militer',
        points: 0,
      }, // Salah
      {
        text: 'B.  Pengadilan Militer Menengah',
        points: 5,
      }, // Benar
      {
        text: 'C.  Pengadilan Militer Tinggi',
        points: 0,
      }, // Salah
      {
        text: 'D.	Pengadilan Militer Utama',
        points: 0,
      }, // Salah
      {
        text: 'E.	Pengadilan Militer Pertempuran',
        points: 0,
      }, // Salah
    ],
  },
  {
    question:
      'Kitab  Bharatayudha  diubah  oleh Empu Sedah, namun dia tidak dapat meneruskannya. Penyebab Empu Sedah tidak dapat meneruskan ubahan Kitab Bharatayudha adalah ....',
    answers: [
      {
        text: 'A.  jatuhnya Kerajaan Kediri',
        points: 0,
      }, // Salah
      {
        text: 'B.  Perebutan kekuasaan	antara Jenggala dan Kediri',
        points: 0,
      }, // Benar
      {
        text: 'C.  Empu Sedah meninggal dunia',
        points: 0,
      }, // Salah
      {
        text: 'D.	pergantian raja',
        points: 0,
      }, // Salah
      {
        text: 'E.	munculnya_para pujangga baru',
        points: 5,
      }, // Salah
    ],
  },
  {
    question:
      'Pemilu pertama di Indonesia, pada 1955, memunculkan empat partai besar, kecuali ....',
    answers: [
      {
        text: 'A.	Masyumi',
        points: 0,
      }, // Salah
      {
        text: 'B.  PNI',
        points: 0,
      }, // Benar
      {
        text: 'C.  NU',
        points: 0,
      }, // Salah
      {
        text: 'D.	PKI',
        points: 0,
      }, // Salah
      {
        text: 'E.	PSI',
        points: 5,
      }, // Salah
    ],
  },
  {
    question:
      'Ketua lndische Vereeniging, Nazir Datuk Pamuncak, menegaskan politik ... sebagai sendi perjuangan rakyat Indonesia.',
    answers: [
      {
        text: 'A.  Etis',
        points: 0,
      }, // Salah
      {
        text: 'B.  divide et impera',
        points: 0,
      }, // Benar
      {
        text: 'C.  Solidaritas',
        points: 0,
      }, // Salah
      {
        text: 'D.	Swadaya',
        points: 0,
      }, // Salah
      {
        text: 'E.	NonKoperasi',
        points: 5,
      }, // Salah
    ],
  },
  {
    question:
      'Republik Demokrasi Timor Leste (RDTL), saat ini belum dikategorikan sebagai anggota ASEAN sepenuhnya. RDTL masih diberikan status ....',
    answers: [
      {
        text: 'A.  spectator',
        points: 0,
      }, // Salah
      {
        text: 'B.  observer',
        points: 5,
      }, // Benar
      {
        text: 'C.  watcher',
        points: 0,
      }, // Salah
      {
        text: 'D.	bystander',
        points: 0,
      }, // Salah
      {
        text: 'E.	witness',
        points: 0,
      }, // Salah
    ],
  },
  {
    question: 'Sekretariat ASEAN berada di ....',
    answers: [
      {
        text: 'A.  jakarta',
        points: 5,
      }, // Salah
      {
        text: 'B.  Singapura',
        points: 0,
      }, // Benar
      {
        text: 'C.  Kuala Lumpur',
        points: 0,
      }, // Salah
      {
        text: 'D.	Manila',
        points: 0,
      }, // Salah
      {
        text: 'E.	Bangkok',
        points: 0,
      }, // Salah
    ],
  },

  // Tambahkan 107 soal lainnya di sini
];

// Mengisi soal ke dalam form
var quizForm = document.getElementById('quiz-form');

for (var index = 0; index < questions.length; index++) {
  var q = questions[index];
  var questionBlock = document.createElement('div');
  questionBlock.classList.add('question');

  questionBlock.innerHTML = '<p>' + (index + 1) + '. ' + q.question + '</p>';

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
    }
  }
  localStorage.setItem('totalscore1', totalScore);
  window.location.href = 'var25.html';
}
// Simpan total skor ke localStorage

// Arahkan ke halaman hasil
let countdownDuration = 110 * 60; // 110 menit dalam detik
let countdown;

function startCountdown() {
  localStorage.setItem('remainingTime', countdownDuration);
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

function goToPage2() {
  window.location.href = 'var25.html';
}

window.addEventListener('load', quizForm);
window.addEventListener('load', startCountdown);
