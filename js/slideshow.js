document.addEventListener('DOMContentLoaded', () => {

  const slides = document.querySelectorAll('.slide');
  const dotContainer = document.querySelector('.slideshow-dots');

  if (!dotContainer) {
    console.error('Slideshow dots container not found');
    return; // Exit early to avoid errors
  }

  let currentIndex = 0;
  let slideInterval;

  // Create dots
  slides.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(i));
    dotContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll('.dot');

  function goToSlide(index) {
    slides[currentIndex].classList.remove('active');
    dots[currentIndex].classList.remove('active');

    currentIndex = index;

    slides[currentIndex].classList.add('active');
    dots[currentIndex].classList.add('active');

    resetInterval();
  }

  function nextSlide() {
    let next = (currentIndex + 1) % slides.length;
    goToSlide(next);
  }

  function resetInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 5000); // 5 seconds
  }

  slideInterval = setInterval(nextSlide, 5000);

  const leftArrow = document.querySelector('.slideshow-arrow.left');
  const rightArrow = document.querySelector('.slideshow-arrow.right');

  leftArrow.addEventListener('click', () => {
    let prev = (currentIndex - 1 + slides.length) % slides.length;
    goToSlide(prev);
  });
  rightArrow.addEventListener('click', () => {
    let next = (currentIndex + 1) % slides.length;
    goToSlide(next);
  });

});