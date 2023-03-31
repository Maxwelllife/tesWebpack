import $ from 'jquery';
// import 'slick-carousel';

const InitSlider = () => {
  $('.clients').slick({
    mobileFirst: true,
    centerMode: true,
    arrows: true,
    responsive: [

      {
        breakpoint: 300,
        settings: {
          centerPadding: '8px',
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          centerPadding: '20px',
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 769,
        settings: 'unslick',
      },
    ],
  });
};
// $(window).resize(() => {
//   const $windowWidth = $(window).width();
//   if ($windowWidth >= 768) {
//     $('.clients').slick('destroy');
//   } else {
//     // InitSlider();
//     // $('.clients').slick('reinit');
//     $('.clients').slick('refresh');
//   }
// });
export default InitSlider;
