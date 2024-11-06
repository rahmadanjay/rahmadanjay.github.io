// Daftar soal dan jawaban dengan poin
var questions = [
  {
    question:
      'Tentukan hubungan yang sesuai antara gambar 3 dan 4 dengan memilih gambar yang sesuai.',
    image: 'img/56.jpeg', // ganti dengan path gambar soal
    answers: [
      {
        text: 'A',
        points: 0,
      }, // Salah
      {
        text: 'B',
        points: 0,
      }, // Benar
      {
        text: 'C',
        points: 0,
      }, // Salah
      {
        text: 'D',
        points: 0,
      }, // Salah
      {
        text: 'E',
        points: 5,
      }, // Salah
    ],
  },
  {
    question: '',
    image: 'img/57.jpeg', // ganti dengan path gambar soal
    answers: [
      {
        text: 'A',
        points: 0,
      }, // Salah
      {
        text: 'B',
        points: 5,
      }, // Benar
      {
        text: 'C',
        points: 0,
      }, // Salah
      {
        text: 'D',
        points: 0,
      }, // Salah
      {
        text: 'E',
        points: 0,
      }, // Salah
    ],
  },
  {
    question: '',
    image: 'img/58.jpeg', // ganti dengan path gambar soal
    answers: [
      {
        text: 'A',
        points: 0,
      }, // Salah
      {
        text: 'B',
        points: 0,
      }, // Benar
      {
        text: 'C',
        points: 5,
      }, // Salah
      {
        text: 'D',
        points: 0,
      }, // Salah
      {
        text: 'E',
        points: 0,
      }, // Salah
    ],
  },
  {
    question: '',
    image: 'img/59.jpeg', // ganti dengan path gambar soal
    answers: [
      {
        text: 'A',
        points: 0,
      }, // Salah
      {
        text: 'B',
        points: 0,
      }, // Benar
      {
        text: 'C',
        points: 0,
      }, // Salah
      {
        text: 'D',
        points: 5,
      }, // Salah
      {
        text: 'E',
        points: 0,
      }, // Salah
    ],
  },
  {
    question: '',
    image: 'img/60.jpeg', // ganti dengan path gambar soal
    answers: [
      {
        text: 'A',
        points: 0,
      }, // Salah
      {
        text: 'B',
        points: 0,
      }, // Benar
      {
        text: 'C',
        points: 0,
      }, // Salah
      {
        text: 'D',
        points: 5,
      }, // Salah
      {
        text: 'E',
        points: 0,
      }, // Salah
    ],
  },
  {
    question: '',
    image: 'img/61.jpeg', // ganti dengan path gambar soal
    answers: [
      {
        text: 'A',
        points: 5,
      }, // Salah
      {
        text: 'B',
        points: 0,
      }, // Benar
      {
        text: 'C',
        points: 0,
      }, // Salah
      {
        text: 'D',
        points: 0,
      }, // Salah
      {
        text: 'E',
        points: 0,
      }, // Salah
    ],
  },
  {
    question:
      'Tentukan gambar yang tepat untuk melanjutkan rangkaian pada gambar sebelumnya.',
    image: 'img/62.jpeg', // ganti dengan path gambar soal
    answers: [
      {
        text: 'A',
        points: 0,
      }, // Salah
      {
        text: 'B',
        points: 0,
      }, // Benar
      {
        text: 'C',
        points: 5,
      }, // Salah
      {
        text: 'D',
        points: 0,
      }, // Salah
      {
        text: 'E',
        points: 0,
      }, // Salah
    ],
  },
  {
    question: '',
    image: 'img/63.jpeg', // ganti dengan path gambar soal
    answers: [
      {
        text: 'A',
        points: 0,
      }, // Salah
      {
        text: 'B',
        points: 0,
      }, // Benar
      {
        text: 'C',
        points: 0,
      }, // Salah
      {
        text: 'D',
        points: 5,
      }, // Salah
      {
        text: 'E',
        points: 0,
      }, // Salah
    ],
  },
  {
    question: '',
    image: 'img/64.jpeg', // ganti dengan path gambar soal
    answers: [
      {
        text: 'A',
        points: 0,
      }, // Salah
      {
        text: 'B',
        points: 0,
      }, // Benar
      {
        text: 'C',
        points: 5,
      }, // Salah
      {
        text: 'D',
        points: 0,
      }, // Salah
      {
        text: 'E',
        points: 0,
      }, // Salah
    ],
  },
  {
    question: '',
    image: 'img/65.jpeg', // ganti dengan path gambar soal
    answers: [
      {
        text: 'A',
        points: 0,
      }, // Salah
      {
        text: 'B',
        points: 0,
      }, // Benar
      {
        text: 'C',
        points: 5,
      }, // Salah
      {
        text: 'D',
        points: 0,
      }, // Salah
      {
        text: 'E',
        points: 0,
      }, // Salah
    ],
  },
];
var quizForme = document.getElementById('form-gambar');
for (var index = 0; index < questions.length; index++) {
  var q = questions[index];
  var questionBlock = document.createElement('div');
  questionBlock.classList.add('question');

  questionBlock.innerHTML = ` <p>${index + 56}. ${q.question}</p> <img src="${
    q.image
  }" >`;

  // Tampilkan jawaban
  for (var i = 0; i < q.answers.length; i++) {
    questionBlock.innerHTML += `
            <label>
                <input type="radio" name="question${index}" value="${q.answers[i].points}" required>
                ${q.answers[i].text}
            </label><br>
        `;
  }
  quizForme.appendChild(questionBlock);
}

function saveScore4() {
  var totalScore = 0;
  for (var index = 0; index < questions.length; index++) {
    var selectedAnswer = document.querySelector(
      'input[name="question' + index + '"]:checked'
    );
    if (selectedAnswer) {
      totalScore += parseInt(selectedAnswer.value);
    }
  }
  localStorage.setItem('totalscore4', totalScore);
  window.location.href = 'tkpvol1.html';
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

function goToPage5() {
  window.location.href = 'tkpvol1.html';
}

window.onload = startCountdown;
// Mulai quiz
window.addEventListener('load', quizForme);
