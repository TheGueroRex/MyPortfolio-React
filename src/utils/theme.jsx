import changeThemeParallax from './Parallax/parallaxTheme'

export const changeThemeAll = () => {

  let effectThemeSpan = document.querySelector("#effect-change-theme");

  effectThemeSpan.style.animation = "animate-btn-theme 0.5s 1 linear";

  setTimeout(changeThemeAll, 500);

  function changeThemeAll() {
    let page = document.querySelector("#page");

    if (page.className == "dark") {
      page.className = "light";
    } else {
      page.className = "dark";
    }

    effectThemeSpan.style.animation = "none";
  }

  setTimeout(changeThemeParallax, 500);
};
