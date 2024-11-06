// Data soal dengan poin untuk setiap jawaban
var questions = [
  {
    question: 'SEKUTU : KOMPETISI = KOLABORASI',
    answers: [
      {
        text: 'A.	PERSAINGAN',
        points: 5,
      }, // Salah
      {
        text: 'B. TEMAN',
        points: 0,
      }, // Benar
      {
        text: 'C.	PERTANDINGAN',
        points: 0,
      }, // Salah
      {
        text: 'D. MUSUH',
        points: 0,
      }, // Salah
      {
        text: 'E. LAWAN',
        points: 0,
      }, // Salah
    ],
  },
  {
    question: 'PEDAS : LOMBOK = ',
    answers: [
      {
        text: 'A.	MANIS: GULA',
        points: 5,
      }, // Salah
      {
        text: 'B. LAPAR: MAKANAN',
        points: 0,
      }, // Benar
      {
        text: 'C. MANIS : SIRUP',
        points: 0,
      }, // Salah
      {
        text: 'D.	KECAP : SAKARIN',
        points: 0,
      }, // Salah
      {
        text: 'E.	MANISAN : TEH',
        points: 0,
      }, // Salah
    ],
  },
  {
    question: 'KANTUK : KE PENATAN =',
    answers: [
      {
        text: 'A.	MIMPI : TIDUR',
        points: 0,
      }, // Salah
      {
        text: 'B.	MARAH : KEGERAMAN',
        points: 5,
      }, // Benar
      {
        text: 'C.	MUKA: EKSPRESI',
        points: 0,
      }, // Salah
      {
        text: 'D.	SENYUM : KEGEMBIRAAN',
        points: 0,
      }, // Salah
      {
        text: 'E.	LAPAR : LEMAS',
        points: 0,
      }, // Salah
    ],
  },
  {
    question:
      'Pernyataan "Jika Rina lulus ujian maka Rina akan menikah",sama dengan ....',
    answers: [
      {
        text: 'A.	Jika .Rina lulus ujian maka Rina tidak menikah',
        points: 0,
      }, // Salah
      {
        text: 'B.	Jika Rina tidak lulus ujian maka Rina akan menikah',
        points: 0,
      }, // Benar
      {
        text: 'C.	Jika Rina tidak lulus ujian maka Rina tidak menikah',
        points: 0,
      }, // Salah
      {
        text: 'D.	jika Rina menikah maka Rina lulus ujian',
        points: 0,
      }, // Salah
      {
        text: 'E.	Jika Rina tidak menikah maka Rina tidak lulus ujian',
        points: 5,
      }, // Salah
    ],
  },
  {
    question:
      'Premis mayor: Jika Tina berlari lebih cepat dibanding Tari maka Tina akan juara.Premis minor: Tina juara Maka kesimpulannya adalah ....',
    answers: [
      {
        text: 'A.	Tina berlari lebih cepat dibanding Tari',
        points: 5,
      }, // Salah
      {
        text: 'B.	Tina adalah juara lomba lari',
        points: 0,
      }, // Benar
      {
        text: 'C.	Tina bisa lari secepat Tari',
        points: 0,
      }, // Salah
      {
        text: 'D.	Tari berlari kalah cepat',
        points: 0,
      }, // Salah
      {
        text: 'E.	Tari tiqak juara lomba lari',
        points: 0,
      }, // Salah
    ],
  },
  {
    question:
      'Semua hewan adalah makhluk hidup, semua makhluk hidup akan mati. Kucing adalah hewan yang mempunyai ekor. Tidak semua hewan berekor dapat memanjat.',
    answers: [
      {
        text: 'A.	Kucing dapat memanjat pohon',
        points: 0,
      }, // Salah
      {
        text: 'B. Kucing tidak dapat memanjat pohon',
        points: 0,
      }, // Benar
      {
        text: 'C.	Kucing tidak akan mati',
        points: 0,
      }, // Salah
      {
        text: 'D.	Kucing akan mati',
        points: 5,
      }, // Salah
      {
        text: 'E.	Kucing mungkin bisa mati',
        points: 0,
      }, // Salah
    ],
  },
  {
    question:
      'Bila Asih menyukai tenis maka pernyataan yang pasti benar adalah ...',
    answers: [
      {
        text: 'A.	Cecep menyukai tenis',
        points: 0,
      }, // Salah
      {
        text: 'B.	Entin menyukai badminton',
        points: 0,
      }, // Benar
      {
        text: 'C.	Bima menyukai futsal',
        points: 5,
      }, // Salah
      {
        text: 'D. Asih menyukai futsal',
        points: 0,
      }, // Salah
      {
        text: 'E. Bima menyukai basket',
        points: 0,
      }, // Salah
    ],
  },
  {
    question:
      'Bila Bima menyukai tenis maka pemyataan berikut yang sa/ah adalah ...',
    answers: [
      {
        text: 'A.	Cecep menyukai voli',
        points: 0,
      }, // Salah
      {
        text: 'B.	Entin menyukai voli',
        points: 0,
      }, // Benar
      {
        text: 'C.	Dedy menyukai basket',
        points: 0,
      }, // Salah
      {
        text: 'D.	Asih menyukai voli',
        points: 5,
      }, // Salah
      {
        text: 'E.	Dedy menyukai voli',
        points: 0,
      }, // Salah
    ],
  },
  {
    question:
      'Bila Entin menyukai basket maka pernyataan berikut yang salah adalah',
    answers: [
      {
        text: 'A.	Cecep menyukai tenis',
        points: 5,
      }, // Salah
      {
        text: 'B.	Cecep menyukai voli',
        points: 0,
      }, // Benar
      {
        text: 'C.	Bima menyukai basket',
        points: 0,
      }, // Salah
      {
        text: 'D.	Asih menyukai futsal',
        points: 0,
      }, // Salah
      {
        text: 'E.	Dedy menyukai voli',
        points: 0,
      }, // Salah
    ],
  },
  {
    question: 'Jika p = 3, dan q = 5, Maka nilai dari 2p + 3q adalah...',
    answers: [
      {
        text: 'A.	21',
        points: 5,
      }, // Salah
      {
        text: 'B.	23',
        points: 0,
      }, // Benar
      {
        text: 'C.	24',
        points: 0,
      }, // Salah
      {
        text: 'D.	25',
        points: 0,
      }, // Salah
      {
        text: 'E.	26',
        points: 0,
      }, // Salah
    ],
  },
  {
    question: 'Jika 7x + 3 = 52, Maka nilai X adalah...',
    answers: [
      {
        text: 'A.	5',
        points: 0,
      }, // Salah
      {
        text: 'B.	6',
        points: 0,
      }, // Benar
      {
        text: 'C.	7',
        points: 5,
      }, // Salah
      {
        text: 'D.	8',
        points: 0,
      }, // Salah
      {
        text: 'E.	9',
        points: 0,
      }, // Salah
    ],
  },
  {
    question:
      'Diberikan deret angka 2,6,12,20,30,...apa angka berikutnya dalam deret ini?',
    answers: [
      {
        text: 'A.	42',
        points: 5,
      }, // Salah
      {
        text: 'B.	36',
        points: 0,
      }, // Benar
      {
        text: 'C.	38',
        points: 0,
      }, // Salah
      {
        text: 'D.	50',
        points: 0,
      }, // Salah
      {
        text: 'E.	40',
        points: 0,
      }, // Salah
    ],
  },
  {
    question:
      'Jika rata-rata dari x, y, dan 30 adalah 10 maka rata-rata x dan y adalah ....',
    answers: [
      {
        text: 'A. 10',
        points: 0,
      }, // Salah
      {
        text: 'B.	0',
        points: 5,
      }, // Benar
      {
        text: 'C.	5',
        points: 0,
      }, // Salah
      {
        text: 'D.	7.5',
        points: 0,
      }, // Salah
      {
        text: 'E.	8',
        points: 0,
      }, // Salah
    ],
  },
  {
    question: '17, 21, 30, 19, 19, 27, 21, ... , ..., ....',
    answers: [
      {
        text: 'A.	17,24,23',
        points: 5,
      }, // Salah
      {
        text: 'B.	18, 22, 23',
        points: 0,
      }, // Benar
      {
        text: 'C.	19, 25, 25',
        points: 0,
      }, // Salah
      {
        text: 'D.	17, 25, 23',
        points: 0,
      }, // Salah
      {
        text: 'E.	19, 27, 22',
        points: 0,
      }, // Salah
    ],
  },
  {
    question: '42, 38, 32, 49, 44, 32, ..., ..., 32, 63',
    answers: [
      {
        text: 'A.	52, 50',
        points: 0,
      }, // Salah
      {
        text: 'B.	54,56',
        points: 0,
      }, // Benar
      {
        text: 'C.	56, 50',
        points: 5,
      }, // Salah
      {
        text: 'D.	56,52',
        points: 0,
      }, // Salah
      {
        text: 'E.	58,58',
        points: 0,
      }, // Salah
    ],
  },
  {
    question: 'A, C, E, G, I, K, M, 0, Q, 5, ... , ....',
    answers: [
      {
        text: 'A.  V,W',
        points: 0,
      }, // Salah
      {
        text: 'B.	U,W',
        points: 5,
      }, // Benar
      {
        text: 'C.	S,W',
        points: 0,
      }, // Salah
      {
        text: 'D.	U,X',
        points: 0,
      }, // Salah
      {
        text: 'E.	V,X',
        points: 0,
      }, // Salah
    ],
  },
  {
    question: '17,19,22,1.9,21, ....',
    answers: [
      {
        text: 'A.	27',
        points: 0,
      }, // Salah
      {
        text: 'B.	26',
        points: 0,
      }, // Benar
      {
        text: 'C.	25',
        points: 0,
      }, // Salah
      {
        text: 'D.	24',
        points: 5,
      }, // Salah
      {
        text: 'E.	23',
        points: 0,
      }, // Salah
    ],
  },
  {
    question: 'Jika 3 < x < 5 dan 5 < y < 8 maka',
    answers: [
      {
        text: 'A. X < y',
        points: 5,
      }, // Salah
      {
        text: 'B.	X > y',
        points: 0,
      }, // Benar
      {
        text: 'C.	X = y',
        points: 0,
      }, // Salah
      {
        text: 'D.	hubungan x dan y tidak dapat ditentukan',
        points: 0,
      }, // Salah
      {
        text: 'E.	X = 5|8',
        points: 0,
      }, // Salah
    ],
  },
  {
    question:
      'Jika x rata-rata dari Sn, 3n, 7 dan y adalah rata-rata dari 2n, 6n, 9 maka',
    answers: [
      {
        text: 'A.	X < y',
        points: 5,
      }, // Salah
      {
        text: 'B.	X > y',
        points: 0,
      }, // Benar
      {
        text: 'C.	X = y',
        points: 0,
      }, // Salah
      {
        text: 'D.	hubungan x dan y tidak dapat ditentukan',
        points: 0,
      }, // Salah
      {
        text: 'E.	4x = Sy',
        points: 0,
      }, // Salah
    ],
  },
  {
    question: 'Jika 3x + 5 = 2, maka nilai X adalah...',
    answers: [
      {
        text: 'A.	4',
        points: 0,
      }, // Salah
      {
        text: 'B.	5',
        points: 5,
      }, // Benar
      {
        text: 'C.	6',
        points: 0,
      }, // Salah
      {
        text: 'D.	7',
        points: 0,
      }, // Salah
      {
        text: 'E.	8',
        points: 0,
      }, // Salah
    ],
  },
  {
    question: 'Jika 2x+3y=7 dan 5x-2y=8 maka',
    answers: [
      {
        text: 'A.	X < y',
        points: 0,
      }, // Salah
      {
        text: 'B.	X > y',
        points: 5,
      }, // Benar
      {
        text: 'C.	X = y',
        points: 0,
      }, // Salah
      {
        text: 'D.	hubungan x dan y · tidak dapat ditentukan',
        points: 0,
      }, // Salah
      {
        text: 'E.	X = Sy',
        points: 0,
      }, // Salah
    ],
  },
  {
    question:
      'Pak Yuda membeli 12 kg beras, 8 kg gula, dan 4 bungkus teh seharga Rp104.000, sedangkan Pak Fahrni membeli 4 kg beras, 4 kg gula, dan 2 bungkus. teh	seharga	Rp44.000. Berapakali harg 1 kgberas?',
    answers: [
      {
        text: 'A.	Rp3.500',
        points: 0,
      }, // Salah
      {
        text: 'B.	Rp3.750',
        points: 5,
      }, // Benar
      {
        text: 'C.	Rp4.200',
        points: 0,
      }, // Salah
      {
        text: 'D.	Rp4.000',
        points: 0,
      }, // Salah
      {
        text: 'E.	Rp4.250',
        points: 0,
      }, // Salah
    ],
  },
  {
    question:
      'Berapakah biaya yangdiperlukan untuk mengecat dinding  dengan	panjang 13 m dan tingginya 4 m jika per m2 diperlukan biaya Rp4.500?',
    answers: [
      {
        text: 'A.	Rp207.000',
        points: 0,
      }, // Salah
      {
        text: 'B.	Rp216.000',
        points: 0,
      }, // Benar
      {
        text: 'C.	Rp223.000',
        points: 0,
      }, // Salah
      {
        text: 'D.	Rp234.000',
        points: 5,
      }, // Salah
      {
        text: 'E.	Rp243.000',
        points: 0,
      }, // Salah
    ],
  },
  {
    question:
      'Johan berangkat dari kota A pukul 7.15 dan sampai di kota B pukul 10.45. Jika kita mengendarai mobilnya dengan kecepatan rata-rata 60 km/jam dan beristirahat selama satu jam untuk makan, berapa km jarak dari kota A ke kota B?',
    answers: [
      {
        text: 'A.	90 km',
        points: 0,
      }, // Salah
      {
        text: 'B.	135 km',
        points: 0,
      }, // Benar
      {
        text: 'C.	150 km',
        points: 5,
      }, // Salah
      {
        text: 'D.	175 km',
        points: 0,
      }, // Salah
      {
        text: 'E.	210 km',
        points: 0,
      }, // Salah
    ],
  },
  {
    question:
      'Di sebuah toko Rudi membeli 4 barang A dan 2 barang B dengan harga Rp4.000. Yusuf membeli 10 barang Adan 4 barang B dengan harga Rp9.500. Harga satu barang Adan satu barang B yang dibeli Beni adalah ....',
    answers: [
      {
        text: 'A.	Rp1.3S0',
        points: 0,
      }, // Salah
      {
        text: 'B.	Rp1.150',
        points: 0,
      }, // Benar
      {
        text: 'C.	Rp1.250',
        points: 5,
      }, // Salah
      {
        text: 'D.	Rp1.125',
        points: 0,
      }, // Salah
      {
        text: 'E.	Rp1.050',
        points: 0,
      }, // Salah
    ],
  },
];

// Mengisi soal ke dalam form
var quizForm = document.getElementById('quiz-form');

for (var index = 0; index < questions.length; index++) {
  var q = questions[index];
  var questionBlock = document.createElement('div');
  questionBlock.classList.add('question');

  questionBlock.innerHTML = '<p>' + (index + 31) + '. ' + q.question + '</p>';

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

function saveScore3() {
  var totalScore = 0;
  for (var index = 0; index < questions.length; index++) {
    var selectedAnswer = document.querySelector(
      'input[name="question' + index + '"]:checked'
    );
    if (selectedAnswer) {
      totalScore += parseInt(selectedAnswer.value);
    }
  }
  localStorage.setItem('totalscore3', totalScore);
  window.location.href = 'tiu2.html';
}

// TIMER
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

function goToPage4() {
  window.location.href = 'tiu2.html';
}

window.onload = startCountdown;
