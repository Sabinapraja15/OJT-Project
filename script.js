// navbar
 const menuToggle = document.getElementById('mobile-menu');
  const navLinks = document.getElementById('nav-links');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('shrink');
    } else {
      navbar.classList.remove('shrink');
    }
  });


/*carousel*/
let currentSlide = 0;
  const slides = document.querySelectorAll(".carousel .slide");
  const totalSlides = slides.length;
  let autoSlideInterval;

  // Show slide by index
  function showSlide(index) {
    currentSlide = (index + totalSlides) % totalSlides;
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      slide.style.opacity = 0;
    });
    slides[currentSlide].classList.add("active");
    slides[currentSlide].style.opacity = 1;
  }

  // Move to next/previous slide
  function moveSlide(direction) {
    showSlide(currentSlide + direction);
  }

  // Auto slide every 5 seconds
  function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
      moveSlide(1);
    }, 5000);
  }

  function stopAutoSlide() {
    clearInterval(autoSlideInterval);
  }
  
  // Touch/Swipe Support
  const carousel = document.getElementById("carousel");
  let startX = 0;

  carousel.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  });

  carousel.addEventListener("touchend", (e) => {
    const endX = e.changedTouches[0].clientX;
    const diff = startX - endX;
    if (Math.abs(diff) > 50) {
      moveSlide(diff > 0 ? 1 : -1);
    }
  });

  // Pause auto-slide on hover
  const container = document.querySelector(".carousel-container");
  container.addEventListener("mouseenter", stopAutoSlide);
  container.addEventListener("mouseleave", startAutoSlide);

  // Initialize
  showSlide(currentSlide);
  startAutoSlide();

/*About */
 document.addEventListener('DOMContentLoaded', () => {
    const aboutSection = document.querySelector('.about-section');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
          }
        });
      },
      {
        threshold: 0.5,
      }
    );
     observer.observe(aboutSection);
  });

  
/*footer*/
document.querySelector("footer form").addEventListener("submit", function (e) {
    e.preventDefault();
    const emailInput = this.querySelector('input[type="email"]');
    if (emailInput.value.trim() !== "") {
      alert(`Thank you for subscribing, ${emailInput.value}!`);
      emailInput.value = "";
    }
  });

