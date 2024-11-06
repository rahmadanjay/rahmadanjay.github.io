// Data soal dengan poin untuk setiap jawaban
var questions = [
  {
    question:
      'Pernyataan manakah yang paling sesuai dengan isi tabel tersebut?',
    answers: [
      {
        text: 'A.	Dalam tiga tahun peningkatan peringkat Vietnam lebih baik daripada Kamboja.',
        points: 0,
      }, // Salah
      {
        text: 'B.	Dalam tiga tahun peningkatan peringkat Singapura paling baik di ASEAN',
        points: 0,
      }, // Benar
      {
        text: 'C.	Dalam tiga tahun peningkatan peringkat Singapura lebih baik daripada Filipina.',
        points: 0,
      }, // Salah
      {
        text: 'D.	Dalam tiga tahun peningkatan peringkat Indonesia lebih baik daripada Thailand.',
        points: 0,
      }, // Salah
      {
        text: 'E.	Dalam tiga tahun peningkatan peringkat Malaysia lebih baik daripada Indonesia.',
        points: 5,
      }, // Salah
    ],
  },
  {
    question: 'Kalimat yang tidak efektif terdapat pada',
    answers: [
      {
        text: 'A.	1 dan 5',
        points: 0,
      }, // Salah
      {
        text: 'B.	2 dan 4',
        points: 0,
      }, // Benar
      {
        text: 'C.	3 dan 7',
        points: 5,
      }, // Salah
      {
        text: 'D.	6 dan 9',
        points: 0,
      }, // Salah
      {
        text: 'E.	8 dan 10',
        points: 0,
      }, // Salah
    ],
  },
  {
    question: 'Simpulan manakah yang paling tepat untuk teks tersebut?',
    answers: [
      {
        text: 'A.	Daya saing ekonomi Indonesia berada pada peringkat ke-54 dari 131 negara da·n tidak mengalami peningkatan yang berarti pada tahun 2007.',
        points: 0,
      }, // Salah
      {
        text: 'B. Kondisi infrastruktur, institusi, dan pendidikan dasar yang buruk memberikan kontribusi pada tidak membaiknya daya saing ekonomi Indonesia.',
        points: 0,
      }, // Benar
      {
        text: 'C.	Indonesia menempati peringkat ke-134 negara terkorup_di dunia dari 163 negara pada tahun 2007 dilihat dari kinerja institusi pemerintahannya.',
        points: 0,
      }, // Salah
      {
        text: 'D. Peringkat daya samg ekonomi Indonesia 2007 tidak meningkat karena buruknya kondisi infrastruktur, institusi, dan kualitas pendidikan dasar.',
        points: 5,
      }, // Salah
      {
        text: 'E.	Kondisi infrastruktur, institusi, dan pendidikan dasar yang buruk memberikan kontribusi pada tidak membaiknya daya saing ekonomi Indonesia..',
        points: 0,
      }, // Salah
    ],
  },
  {
    question: 'Penulis teks tersebut bertujuan agar pembaca ....',
    answers: [
      {
        text: 'A.	menyadari bahwa daya samg ekonon:,i Indonesia hanya dapat ditingkatkan melalui perbaikan infrastruktur, peningkatan kinerja institusi pemerintah, dan perbaikan kualitas pendidikan dasar',
        points: 0,
      }, // Salah
      {
        text: 'B.	meyakini·  bahwa  daya  saing ekonomi Indonesia sangat rendah di dunia bahkan juga di negara ASEAN karena belum berhasilnya pemerintah memberantas korupsi secara tuntas',
        points: 5,
      }, // Benar
      {
        text: 'C.	memiliki gambaran bahwa dunia ekonomi Indonesia semakin terpuruk dalam kancah percaturan ekonomi dunia karena makin maraknya korupsi yang terjadi di pemerintah',
        points: 0,
      }, // Salah
      {
        text: 'D.	peningkatan kinerja institusi pemerintah, dan perbaikan kualitas pendidikan dasar',
        points: 0,
      }, // Salah
      {
        text: 'menyadari bahwakorupsi Indonesia telah mencapai puncaknya sehingga pemberantasannya perlu terus ditingkatkan agar indeks daya saing ekonomi meningkat',
        points: 0,
      }, // Salah
    ],
  },
  {
    question: 'Apa kelemahan isi teks tersebut?',
    answers: [
      {
        text: 'A. Rendahnya daya saing ekonomi Indonesia tidak diikuti dengan penjelasan tentang berbagai indikatornya',
        points: 5,
      }, // Salah
      {
        text: 'B.	Tidak membaiknya daya samg ekonomi Indonesia tidak didukung oleh penjelasan faktor-faktor yang memengaruhinya',
        points: 0,
      }, // Benar
      {
        text: 'C.	Kualitas institusi yang	buruk tidak ada hubungannya	dengan kondisi infrastruktur Indonesia dijelaskan buruknya ',
        points: 0,
      }, // Salah
      {
        text: 'D.	lsian tabel tidak menjelaskan paparan tentang posisi ekonomi Indonesia dibandingkan dengan negara ASEAN lainnya.',
        points: 0,
      }, // Salah
      {
        text: 'E.	Kualitas institusi yang	buruk tidak hubungannya	dengan kondisi infrastruktur Indonesia dijelaskan buruknya',
        points: 0,
      }, // Salah
    ],
  },
  {
    question:
      'hasil survei Transparency International mengenai persepsi korupsi yang menempatkan Indonesia berada pada peringkat',
    answers: [
      {
        text: 'A. 150',
        points: 0,
      }, // Benar
      {
        text: 'B.	12',
        points: 0,
      }, // Benar
      {
        text: 'C.	33',
        points: 0,
      }, // Salah
      {
        text: 'D.	134',
        points: 5,
      }, // Salah
      {
        text: 'E.	170',
        points: 0,
      }, // Salah
    ],
  },
];

var quizForm = document.getElementById('quiz-form25');

for (var index = 0; index < questions.length; index++) {
  var q = questions[index];
  var questionBlock = document.createElement('div');
  if (q.image) {
    quizForm += `<img src="${q.image}" alt="Soal Gambar" style="max-width: 100%; height: auto;"><br>`;
  }
  questionBlock.classList.add('question');

  questionBlock.innerHTML = '<p>' + (index + 25) + '. ' + q.question + '</p>';

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

// Saat tombol submit ditekan, simpan skor di localStorage dan pindah ke halaman hasil
function saveScore2() {
  var totalScore = 0;
  for (var index = 0; index < questions.length; index++) {
    var selectedAnswer = document.querySelector(
      'input[name="question' + index + '"]:checked'
    );
    if (selectedAnswer) {
      totalScore += parseInt(selectedAnswer.value);
    }
  }
  localStorage.setItem('totalscore2', totalScore);
  window.location.href = 'tiuvol1.html';
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

function goToPage3() {
  window.location.href = 'tiuvol1.html';
}

window.onload = startCountdown;
