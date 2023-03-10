import "./index.scss";
// const сarousel = document.querySelector('#myCarousel')
const carouselItems = document.querySelectorAll('.carousel-item');
for (let i = 0; i < carouselItems.length; i++) {
    carouselItems[i].addEventListener('click', function(event) {
        const clickedItem = event.target;
        clickedItem.classList.add('active');
        for (let j = 0; j < carouselItems.length; j++) {
            if (carouselItems[j] !== clickedItem) {
                carouselItems[j].classList.remove('active');
            }
        }
    });
}

// function component() {
//     const element = document.createElement("div");
//
//     // Lodash, now imported by this script
//     element.innerHTML = _.join(["Hello", "webpack"], " ");
//
//     return element;
// }
//
// document.body.appendChild(component());
