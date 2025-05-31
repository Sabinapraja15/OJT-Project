// Toggle mobile menu
const toggle = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

toggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});


let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
  if (index >= totalSlides) currentSlide = 0;
  else if (index < 0) currentSlide = totalSlides - 1;
  else currentSlide = index;

  const offset = -currentSlide * 100;
  document.getElementById('carousel').style.transform = `translateX(${offset}%)`;
}

function moveSlide(direction) {
  showSlide(currentSlide + direction);
}

// Auto-slide
setInterval(() => {
  moveSlide(1);
}, 5000);


document.querySelectorAll('.sidebar a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('click-2').checked = false;
  });
});


