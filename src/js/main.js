// import './_vendor';
// import vars from './_vars';
// import './_functions';
// import './_components';
import Swiper from 'swiper';
// import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// init Swiper:
// const swiper = new Swiper('.swiper', {
//   // configure Swiper to use modules
//   // modules: [Navigation, Pagination],

// });

const swiper = new Swiper('.swiper', {
  // Optional parameters
  // direction: 'vertical',
  // loop: true,
  rewind: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});
