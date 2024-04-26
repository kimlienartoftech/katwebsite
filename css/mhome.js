const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot'); 
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let currentSlide = 0;

showSlide(currentSlide);

function updateDot(n) {
  dots.forEach((dot, index) => {
    dot.classList.remove('active');
    if (index === n) {
      dot.classList.add('active');
    }
  });
}

function showSlide(n) {
  slides.forEach((slide, index) => {
    slide.style.display = 'none';
  });
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].style.display = 'flex';
  updateDot(currentSlide);
}

nextBtn.addEventListener('click', () => showSlide(currentSlide + 1));
prevBtn.addEventListener('click', () => showSlide(currentSlide - 1));

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => showSlide(index));
});


const slides1 = document.querySelectorAll('.slide1');
const dots1 = document.querySelectorAll('.dot1'); 
const nextBtn1 = document.querySelector('.next1');
const prevBtn1 = document.querySelector('.prev1');  

let currentSlide1 = 0;

showSlide1(currentSlide1);

function updateDot1(s) {
    dots1.forEach((dot1, index) => {
      dot1.classList.remove('active1');
      if (index === s) {
        dot1.classList.add('active1');
      }
    });
}

function showSlide1(s) {
    slides1.forEach((slide, index) => {
      slide.style.display = 'none';
    });
    currentSlide1 = (s + slides1.length) % slides1.length;
    slides1[currentSlide1].style.display = 'flex';
    updateDot1(currentSlide1);
}

nextBtn1.addEventListener('click', () => showSlide1(currentSlide1 + 1));
prevBtn1.addEventListener('click', () => showSlide1(currentSlide1 - 1));

dots1.forEach((dot1, index) => {
    dot1.addEventListener('click', () => showSlide1(index));
  });

