// import "./_functions";
import Swiper from "swiper";
import { Navigation } from "swiper";

const navMenu = (
  burgerSelector = ".burger",
  navSelector = ".nav",
  classOpen = "open"
) => {
  const page = document.querySelector("html");
  const burger = page.querySelector(burgerSelector);
  const nav = page.querySelector(navSelector);

  const toggleFunc = () => {
    burger.classList.toggle(classOpen);
    nav.classList.toggle(classOpen);
    page.classList.toggle("dis-scroll");
    // page.style.cssText = burger.classList.contains("open")
    //   ? "overflow:hidden;"
    //   : "overflow:auto;";
  };

  burger.addEventListener("click", () => {
    toggleFunc();
  });
  nav.addEventListener("click", () => {
    toggleFunc();
  });
};
navMenu();

const swiper = new Swiper(".slider", {
  lazy: true,
  modules: [Navigation],

  navigation: {
    nextEl: ".slider__btn--next",
    prevEl: ".slider__btn--prev",
  },
});
