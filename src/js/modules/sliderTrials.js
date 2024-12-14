import Swiper from './../libs/swiper-bundle.min.js'; // Слайдер

export default function sliderTrials() {
  if(document.querySelector('.trials_slider')) {
    const swiper = new Swiper('.trials_slider', {
      spaceBetween: 10,
      loopedSlides: 1,
      slidesPerView: 1,
      loop: true,
      navigation: {
        nextEl: ".trials_slider-button-next",
        prevEl: ".trials_slider-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
      },
    });
  }
}