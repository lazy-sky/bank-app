// import Swiper JS
import Swiper from 'swiper';

const verticalSwiper = new Swiper('.swiper', {
  direction: 'vertical',
  slidesPerView: 'auto',
  mousewheel: true,
});

// const swiper =  document.getElementsByClassName('transaction-list')[0].swiper;

verticalSwiper.slideDown();
