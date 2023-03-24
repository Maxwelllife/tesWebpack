const carousel = () => {
  const carusel = document.querySelector('.carousel__inner');
  const items = Array.from(document.querySelectorAll('.carousel__item'));

  const prevBtn = document.querySelector('.carousel__prevBtn');
  const nextBtn = document.querySelector('.carousel__nextBtn');

  function nextSlide(next) {
    const activeSlide = carusel.querySelector('.active');
    const activeIndex = items.findIndex((item) => item === activeSlide);

    activeSlide.classList.remove('active');
    let nextIndex = activeIndex + next;
    if (nextIndex >= items.length) nextIndex = 0;
    if (nextIndex < 0) nextIndex = items.length - 1;

    items[nextIndex].classList.add('active');
  }
  // prevBtn.addEventListener('click', () => nextSlide(-1));
  prevBtn.addEventListener('click', () => {
    console.log('Prev button clicked');
    nextSlide(-1);
  });
  nextBtn.addEventListener('click', () => {
    console.log('Next button clicked');
    nextSlide(1);
  });
};
export default carousel;
