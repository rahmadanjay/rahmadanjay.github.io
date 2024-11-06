var quiz = {
  draw: function () {
    var wrapper = document.getElementById('quiz-wrap');

    for (var index in questions) {
      var number = parseInt(index) + 1;
      var qwrap = document.createElement('div');
      qwrap.classList.add('questions');

      var question = document.createElement('h1');
      question.innerHTML = number + ') ' + questions[index]['q'];
      qwrap.appendChild(question);

      for (var oindex in questions[index]['o']) {
        var label = document.createElement('label');
        qwrap.appendChild(label);

        var option = document.createElement('input');
        option.type = 'radio';
        option.value = oindex;
        option.required = true;
        option.classList.add('oquiz');
        option.name = 'quiz-' + number;
        label.appendChild(option);

        var otext = document.createTextNode(questions[index]['o'][oindex]);
        label.appendChild(otext);
      }
      wrapper.appendChild(qwrap);
    }
    var submitbutton = document.createElement('input');
    submitbutton.type = 'submit';
    wrapper.appendChild(submitbutton);
    wrapper.addEventListener('submit', quiz.submit);
  },
  submit: function (evt) {
    evt.preventDefault();
    evt.stopPropagation();

    var selected = document.querySelectorAll('.oquiz:checked');

    var score = 0;
    for (var index in questions) {
      if (selected[index].value == questions[index]) ['a'];
      {
        score++;
      }
    }

    var total = selected.length;
    var percent = score / total;

    var html = '<h1>';
    if (percent >= 0.7) {
      html += 'LUAR BIASA ANJING';
    } else if (percent >= 0.4) {
      html += 'Lumayan';
    } else {
      html += 'Coba lagi';
    }
    html += '</h1>';
    html +=
      '<div> nilai kamu adalah' + score + 'dari Maksimum' + total + '.</div>';
    document.getElementById('quiz-wrap').innerHTML = html;
  },
};
let durasi = 110 * 60;
function formatTime(seconds) {
  let hours = Math.floor(seconds / 3600);
  let minutes = Math.floor((seconds % 3600) / 60);
  let secs = seconds % 60;

  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  secs = secs < 10 ? '0' + secs : secs;

  return `
${hours}:${minutes}:${secs}`;
}

function startCountdown() {
  const countdownElement = document.getElementById('countdown');

  const countdownInterval = setInterval(() => {
    countdownElement.textContent = formatTime(durasi);
    durasi--;
    if (durasi < 0) {
      clearInterval(countdownInterval);
      countdownElement.textContent = 'Waltu Habis!';
    }
  }, 1000);
}
window.addEventListener('load', quiz.draw);
window.addEventListener('load', startCountdown);
