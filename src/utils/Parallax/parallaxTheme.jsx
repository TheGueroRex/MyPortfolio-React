const changeThemeParallax = () => {

  const nigthParticles = document.querySelector("#nigth-particles");
  const parallaxSky = document.querySelector("#parallax-sky");
  const fireEffect = document.querySelector("#fire-effect");

    parallaxSky.className =
      parallaxSky.className == "parallax-sky-dark"
        ? "parallax-sky-light"
        : "parallax-sky-dark";
  
    let sunbox = document.querySelector("#sun-box");
    let moonbox = document.querySelector("#moon-box");
    let parallaDark = document.querySelectorAll(".parallax-dark");
    let parallaLight = document.querySelectorAll(".parallax-light");
    let campFire = document.querySelectorAll(".camp-fire");
    let smoke = document.querySelector(".smoke-1");
  
    if (parallaxSky.className == "parallax-sky-dark") {
      sunbox.style.transform = "translateY(500%)";
      sunbox.style.opacity = "0";
      moonbox.style.transform = "translateY(0%)";
      nigthParticles.style.opacity = "1";
      fireEffect.style.opacity = "1";
  
      for (let i of parallaDark) {
        i.style.opacity = "1";
      }
  
      for (let i of parallaLight) {
        i.style.opacity = "0";
      }
  
      for (let i of campFire) {
        i.style.display = "block";
      }
  
      smoke.style.display = "none";
    } else if (parallaxSky.className == "parallax-sky-light") {
      
      sunbox.style.transform = "translateY(0%)";
      sunbox.style.opacity = "1";
      moonbox.style.transform = "translateY(-500%)";
      nigthParticles.style.opacity = "0";
      fireEffect.style.opacity = "0";
  
      for (let i of parallaDark) {
        i.style.opacity = "0";
      }
  
      for (let i of parallaLight) {
        i.style.opacity = "1";
      }
  
      for (let i of campFire) {
        i.style.display = "none";
      }
  
      smoke.style.display = "block";
    }
  }

  export default changeThemeParallax;
  