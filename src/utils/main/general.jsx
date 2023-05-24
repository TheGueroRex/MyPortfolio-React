import { gsap } from "gsap";

export const changeLanguage = () => {
  let es = document.querySelectorAll(".es");
  let en = document.querySelectorAll(".en");
  let btnLanguage = document.querySelector("#btn-language");

  if (btnLanguage.classList[0] == "english") {
    es.forEach((item) => {
      item.style.display = "block";
    });

    en.forEach((item) => {
      item.style.display = "none";
    });

    btnLanguage.className = "español icon-lang";
  } else if (btnLanguage.classList[0] == "español") {
    en.forEach((item) => {
      item.style.display = "block";
    });

    es.forEach((item) => {
      item.style.display = "none";
    });

    btnLanguage.className = "english icon-lang";
  }
};

export const menuList = () => {
  document
    .querySelector("#nav-bar-list")
    .classList.toggle("nav-bar-list-active");
  document
    .querySelector("#btn-menu-list")
    .classList.toggle("btn-menu-list-active");
};

export const menuListNone = () => {
  document
    .querySelector("#nav-bar-list")
    .classList.toggle("nav-bar-list-active");
  document
    .querySelector("#btn-menu-list")
    .classList.toggle("btn-menu-list-active");
};

