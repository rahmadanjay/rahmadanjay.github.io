var questions = [
  {
    question: 'KENDARAAN : MOBIL .......',
    answers: [
      { text: 'A. BINATANG : LAWAN', points: 0 },
      { text: 'B. KAPAL : PERAHU', points: 5 }, // Benar
      { text: 'C. GAJI : UPAH', points: 0 },
      { text: 'D. ORANG : PEMUDA', points: 0 },
      { text: 'E. LAUT : DANAU', points: 0 },
    ],
  },
  {
    question: 'PEMAIN : TIM ...',
    answers: [
      { text: 'A. SENI : MUSIK', points: 0 },
      { text: 'B. KENDARAAN : MOBIL', points: 0 },
      { text: 'C. MAKANAN : RESTORAN', points: 0 },
      { text: 'D. BUNGA : TANAMAN', points: 0 },
      { text: 'E. ATLET : OLAHRAGA', points: 5 }, // Benar
    ],
  },
  // Soal 1
  {
    question: 'KETIK : EDIT : PRINT ....',
    answers: [
      { text: 'A. MASAK : KUKUS : REBUS', points: 0 },
      { text: 'B. TANAK : SAJI : MAKAN', points: 0 },
      { text: 'C. PULANG : PERGI : DATANG', points: 5 }, // Benar
      { text: 'D. PAGI : SIANG : TIDUR', points: 0 },
      { text: 'E. SAPU : BERSIH : RAPI', points: 0 },
    ],
  },

  // Soal 2
  {
    question:
      'Semua delegasi dalam suatu pertemuan internasional memiliki kemampuan komunikasi yang baik. Sebagian delegasi dalam suatu pertemuan internasional memiliki rasa percaya diri yang tinggi.',
    answers: [
      {
        text: 'A. Semua delegasi dalam suatu pertemuan internasional memiliki rasa percaya diri yang tinggi.',
        points: 0,
      },
      {
        text: 'B. Sebagian delegasi dalam suatu pertemuan internasional memiliki rasa percaya diri yang tinggi, namun tidak memiliki kemampuan komunikasi yang baik.',
        points: 5,
      }, // Benar
      {
        text: 'C. Semua delegasi dalam suatu pertemuan internasional memiliki rasa percaya diri yang tinggi, namun tidak memiliki kemampuan komunikasi yang baik.',
        points: 0,
      },
      {
        text: 'D. Sebagian delegasi dalam suatu pertemuan internasional memiliki rasa percaya diri yang tinggi, dan memiliki kemampuan komunikasi yang baik.',
        points: 0,
      },
      {
        text: 'E. Sebagian delegasi dalam suatu pertemuan internasional yang memiliki kemampuan komunikasi yang tidak baik, memiliki rasa percaya diri yang tinggi.',
        points: 0,
      },
    ],
  },

  // Soal 3
  {
    question:
      'Semua lapangan luas dan terbuka. Sebagian lapangan dijadikan ladang.',
    answers: [
      { text: 'A. Semua lapangan dijadikan ladang.', points: 0 },
      { text: 'B. Semua yang luas dan terbuka adalah lapangan.', points: 0 },
      { text: 'C. Semua yang dijadikan ladang adalah lapangan.', points: 0 },
      { text: 'D. Semua yang luas dan terbuka dijadikan ladang.', points: 0 },
      {
        text: 'E. Sebagian yang luas dan terbuka dijadikan ladang.',
        points: 5,
      }, // Benar
    ],
  },

  // Soal 4
  {
    question:
      'Jika bepergian ke Timbuktu maka harus datang ke Patena. Jika datang ke Patena maka harus melalui jembatan Torosi.',
    answers: [
      {
        text: 'A. Sebagian yang datang ke Patena melalui jembatan Torosi.',
        points: 0,
      },
      {
        text: 'B. Sebagian yang pergi ke Timbuktu melalui jembatan Torosi.',
        points: 0,
      },
      {
        text: 'C. Semua yang melalui jembatan Torosi tentu bepergian ke Timbuktu.',
        points: 0,
      },
      {
        text: 'D. Semua yang bepergian ke Timbuktu harus melalui jembatan Torosi.',
        points: 5,
      }, // Benar
      {
        text: 'E. Semua yang tidak bepergian ke Timbuktu tidak melalui jembatan Torosi.',
        points: 0,
      },
    ],
    explanation:
      'Untuk soal nomor 37-40, perhatikan ilustrasi berikut. [Rahmat, Rini , Rani, Rendra, dan Raharja adalah siswa,kelas VIII di SMP Ramandika. mereka lalu belajar bersama dalam satu grup belajar. Hari ini adalah pembagian hasil ujian Kimia dan nilai mereka semua cukup memuaskan. Hasilnya nilai Rahmat lebih dari nilai Reni. Nilai Raharja kurang dari nilai Rendra. Tidak ada anak yang nilainya sama. Anak yang nilainya paling tinggi akan menjadi ketua grup.]',
  },
  // Soal 37
  {
    question:
      'Jika Rina berada pada peringkat ketiga di antara lima siswa tersebut maka...',
    answers: [
      { text: 'A. Raharja bukan pada urutan pertama.', points: 0 },
      { text: 'B. Rahmat bukan pada urutan kedua.', points: 5 }, // Benar
      { text: 'C. Rendra pada urutan pertama.', points: 0 },
      { text: 'D. Reni pada urutan keempat.', points: 0 },
      { text: 'E. Reni adalah yang terakhir.', points: 0 },
    ],
  },

  // Soal 38
  {
    question: 'Jika yang menjadi ketua grup adalah Rahmat maka...',
    answers: [
      { text: 'A. Nilai Reni lebih dari nilai Rendra.', points: 0 },
      { text: 'B. Nilai Raharja kurang dari nilai Reni.', points: 0 },
      { text: 'C. Nilai Rina kurang dari nilai Rahmat.', points: 5 }, // Benar
      { text: 'D. Nilai Rendra adalah yang tertinggi.', points: 0 },
      { text: 'E. Nilai Raharja adalah yang terendah.', points: 0 },
    ],
  },

  // Soal 39
  {
    question: 'Jika nilai Reni lebih dari nilai Rendra maka...',
    answers: [
      { text: 'A. Rahmat adalah yang nilainya tertinggi.', points: 0 },
      { text: 'B. Rina nilainya paling bawah.', points: 0 },
      { text: 'C. Nilai Rendra lebih dari nilai Rahmat.', points: 0 },
      { text: 'D. Nilai Rina lebih dari nilai Rendra.', points: 5 }, // Benar
      { text: 'E. Nilai Reni lebih dari nilai Raharja.', points: 0 },
    ],
  },

  // Soal 40
  {
    question: 'Jika nilai Raharja lebih dari nilai Reni maka...',
    answers: [
      { text: 'A. Nilai Raharja lebih dari nilai Rahmat.', points: 0 },
      { text: 'B. Nilai Rina lebih dari nilai Reni.', points: 0 },
      { text: 'C. Nilai Reni adalah yang terendah.', points: 5 }, // Benar
      { text: 'D. Nilai Reni kurang dari nilai Rendra.', points: 0 },
      { text: 'E. Nilai Rina adalah yang tertinggi.', points: 0 },
    ],
  },
];

// Mengisi soal ke dalam form
var quizForm = document.getElementById('quiz-form');

for (var index = 0; index < questions.length; index++) {
  var q = questions[index];
  var questionBlock = document.createElement('div');
  questionBlock.classList.add('question2');

  questionBlock.innerHTML = '<p>' + (index + 31) + '. ' + q.question + '</p>';

  for (var i = 0; i < q.answers.length; i++) {
    var isChecked =
      localStorage.getItem('question2' + index) == q.answers[i].points;
    questionBlock.innerHTML += `
            <label>
                <input type="radio" name="question2${index}" value="${
      q.answers[i].points
    }" ${isChecked ? 'checked' : ''} required>
                ${q.answers[i].text}
            </label><br>
        `;
  }
  // Menambahkan penjelasan
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

// Saat tombol submit ditekan, simpan skor di localStorage dan pindah ke halaman hasil

function saveScore2() {
  var totalScore = 0;
  for (var index = 0; index < questions.length; index++) {
    var selectedAnswer = document.querySelector(
      'input[name="question2' + index + '"]:checked'
    );
    if (selectedAnswer) {
      totalScore += parseInt(selectedAnswer.value);
      localStorage.setItem('question2' + index, selectedAnswer.value);
    }
  }
  localStorage.setItem('totalscore2', totalScore);
}
// Fungsi yang memanggil saveScore3 ketika terjadi perubahan pilihan
quizForm.addEventListener('change', saveScore2);
function next() {
  saveScore2();

  window.location.href = 'tiumm.html';
}
function goToPagem() {
  saveScore2();

  window.location.href = 'vol2.html';
}
function goToTkp() {
  saveScore2();

  window.location.href = 'tkp2.html';
}
// Memuat jawaban yang dipilih saat halaman dimuat

// Fungsi untuk menampilkan soal dan penjelasan

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

window.addEventListener('load', quizForm);
window.addEventListener('load', saveScore2());
window.addEventListener('load', startCountdown);
