import Swiper from "swiper";
import { Navigation } from "swiper";

const swiper = new Swiper(".slider", {
  lazy: true,
  modules: [Navigation],

  navigation: {
    nextEl: ".slider__btn--next",
    prevEl: ".slider__btn--prev",
  },
});
