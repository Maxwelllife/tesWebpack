// (() => {
//     const items = Array.from(document.querySelectorAll(".carousel-item"));
//     const carusel = document.querySelector(".carousel-inner");
//
//     const prevBtn = document.querySelector(".carousel-control-prev");
//     const nextBtn = document.querySelector(".carousel-control-next");
//
//     prevBtn.addEventListener("click", () => nextSlide(-1));
//     nextBtn.addEventListener("click", () => nextSlide(1));
//
//     function nextSlide(next) {
//         const activeSlide = carusel.querySelector(".active");
//         const activeIndex = items.findIndex((item) => item === activeSlide);
//
//         activeSlide.classList.remove("active");
//         let nextIndex = activeIndex + next;
//         if (nextIndex >= items.length) nextIndex = 0;
//         if (nextIndex < 0) nextIndex = items.length - 1;
//
//         items[nextIndex].classList.add("active");
//     }
// })();
