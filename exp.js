let currentSection = 0;
const sections = document.querySelectorAll('.section');

function showSection(index) {
  sections.forEach((section, i) => {
    section.style.display = i === index ? 'flex' : 'none';
  });
}

document.getElementById('nxt-btn').addEventListener('click', () => {
  if (currentSection < sections.length - 1) {
    currentSection++;
    showSection(currentSection);
  }
});

document.getElementById('prev-btn').addEventListener('click', () => {
  if (currentSection > 0) {
    currentSection--;
    showSection(currentSection);
  }
});

// Tampilkan section pertama saat halaman dimuat
showSection(currentSection);
