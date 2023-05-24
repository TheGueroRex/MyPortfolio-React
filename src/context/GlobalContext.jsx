import React, { createContext, useEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const GlobalContext = createContext();

function GlobalProvider({ children }) {
  useEffect(() => {
    document.addEventListener("scroll", () => {
      let animAbouttext = gsap.utils.toArray(".about-text");
      animAbouttext.forEach((text, i) => {
        if (ScrollTrigger.isInViewport(text)) {
          gsap.to(text, { y: 0, opacity: 1, delay: i * 0.1 });
        } else {
          gsap.set(text, { y: -100, opacity: 0 });
        }
      });

      let userImg = document.querySelector(".about-user-img");

      if (ScrollTrigger.isInViewport(userImg)) {
        gsap.to(userImg, { yPercent: 0, ease: "bounce.out", scale: 1 });
      } else {
        gsap.set(userImg, { yPercent: -50, scale: 0.25 });
      }

      let animCircuit = document.querySelector(".bg-circuit");
      if (ScrollTrigger.isInViewport(animCircuit, 0.5)) {
        gsap.to(animCircuit, { duration: 1, ease: "sine.in", width: "100%" });
      } else {
        gsap.set(animCircuit, { width: "0%" });
      }
    });

    /////////////////////////////////////////////////////

    ScrollTrigger.create({
      trigger: ".frame-skills",
      start: "50% top",
      end: "125% top",
      onLeave: () => skillItembarStar(),
      onLeaveBack: () => skillItembarReset(),
      // markers: true
    });

    let skillItembar = document.querySelectorAll(".skill-item-bar-value");

    const skillItembarStar = () => {
      skillItembar.forEach((itembar, nbar) => {
        gsap.to(itembar, { duration: 2.5, ease: "steps(20)", xPercent: 0 });
        // itembar.style.setProperty("--animation", "animation-xp-skills 1s linear");
      });
    };

    const skillItembarReset = () => {
      skillItembar.forEach((itembar, nbar) => {
        gsap.set(itembar, { xPercent: -100 });
        // itembar.style.setProperty("--animation", "none");
      });
    };

    skillItembarReset();

    document.addEventListener("scroll", () => {
      let animPattern = document.querySelectorAll(".pattern-animation");
      animPattern.forEach((pattern, i) => {
        if (ScrollTrigger.isInViewport(pattern)) {
          gsap.to(pattern, { duration: 3.5, scale: 1, ease: "power4.out" });
          pattern.style.animation =
            "pattern-floating ease-in-out 5s " + i * 0.1 + "s infinite";
        } else {
          gsap.set(pattern, { scale: 2 });
          pattern.style.animation = "none";
        }
      });

      let animSkillsItem = gsap.utils.toArray(".skill-item");
      animSkillsItem.forEach((skill, nitem) => {
        if (ScrollTrigger.isInViewport(skill)) {
          gsap.to(skill, { yPercent: 0, opacity: 1, delay: nitem * 0.1 });
        } else {
          if (ScrollTrigger.positionInViewport(skill) > 0) {
            gsap.set(skill, { yPercent: -200, opacity: 0 });
          } else {
            gsap.set(skill, { yPercent: 200, opacity: 0 });
          }
        }
      });

      let otherSkills = document.querySelector(".frame-other-skills");

      if (ScrollTrigger.isInViewport(otherSkills, 1)) {
        gsap.to(otherSkills, { duration: 1, width: "100%" });
      } else {
        gsap.set(otherSkills, { width: "20%" });
      }

      let projectItemUpAnim = gsap.utils.toArray(
        ".projects-row-up .project-item"
      );
      projectItemUpAnim.forEach((proyect, i) => {
        if (ScrollTrigger.isInViewport(proyect)) {
          gsap.to(proyect, { x: 0, opacity: 1, delay: i * 0.1 });
        } else {
          gsap.set(proyect, { x: 300, opacity: 0 });
        }
      });

      let projectItemDownAnim = gsap.utils.toArray(
        ".projects-row-down .project-item"
      );
      projectItemDownAnim.forEach((proyect, i) => {
        if (ScrollTrigger.isInViewport(proyect)) {
          gsap.to(proyect, { x: 0, opacity: 1, delay: i * 0.1 });
        } else {
          gsap.set(proyect, { x: -300, opacity: 0 });
        }
      });

      let hobbyItemAnim = gsap.utils.toArray(".hobby-item");
      hobbyItemAnim.forEach((item, i) => {
        if (ScrollTrigger.isInViewport(item)) {
          gsap.to(item, { yPercent: 0, opacity: 1, delay: i * 0.1 });
        } else {
          gsap.set(item, { yPercent: 50, opacity: 0 });
        }
      });

      let formContactAnimInputs = gsap.utils.toArray(".form-input");
      formContactAnimInputs.forEach((input, i) => {
        if (ScrollTrigger.isInViewport(input)) {
          gsap.to(input, { yPercent: 0, opacity: 1, delay: i * 0.1 });
        } else {
          gsap.set(input, { yPercent: 100, opacity: 0 });
        }
      });

      if (ScrollTrigger.isInViewport("#btn-contact")) {
        gsap.to("#btn-contact", { yPercent: 0, opacity: 1, delay: 0.5 });
      } else {
        gsap.set("#btn-contact", { yPercent: 100, opacity: 0 });
      }

      let formContactAnimBtnSocial = gsap.utils.toArray(".contact-btn-social");
      formContactAnimBtnSocial.forEach((btn, i) => {
        if (ScrollTrigger.isInViewport(btn)) {
          gsap.to(btn, { duration: 0.3, scale: 1, delay: i * 0.3 });
        } else {
          gsap.set(btn, { scale: 0 });
        }
      });

      let bgMoonAnimation = document.querySelectorAll(".bg-moon-animation");
      bgMoonAnimation.forEach((moon, i) => {
        if (ScrollTrigger.isInViewport(moon)) {
          gsap.to(moon, {
            duration: 0.5,
            ease: "power1.in",
            scale: 1,
            delay: i * 0.08,
          });
        } else {
          gsap.set(moon, { scale: 0 });
        }
      });
    });

    ////////////////////////////////////////////////////////

    const resetWorksAnim = () => {
      gsap.set(".works-avtar-user", { y: -100 });
      gsap.set(".work-1, .work-3", { x: 100, opacity: 0 });
      gsap.set(".work-2", { x: -100, opacity: 0 });
    };

    resetWorksAnim();

    const starWorksAnim = () => {
      let workItem = gsap.timeline({
        defaults: {
          duration: 1,
          ease: "elastic.out(1, 0.3)",
          x: 0,
          opacity: 1,
        },
      });
      workItem.to(".work-1", {}, 0.7);
      workItem.to(".work-2", {}, 1.7);
      workItem.to(".work-3", {}, 2.7);
      workItem.to(
        ".works-avtar-user",
        { duration: 3, ease: "none", y: 335 },
        0
      );
    };

    ScrollTrigger.create({
      trigger: ".frame-experience",
      start: "120% center",
      end: "120% top",
      onEnter: () => starWorksAnim(),
      onLeaveBack: () => resetWorksAnim(),
      // scrub: 1,
      // markers: true,
    });

    ////////////////////////////////////////////////////////

    let page = document.querySelector("#page");
    let mainmenu = document.querySelector("#main-menu");
    let asidesocial = document.querySelector("#social");
    let asideemail = document.querySelector("#email");

    ScrollTrigger.create({
      trigger: "#about",
      start: "70% top",
      end: "70%  top",
      onEnter: () => menuLight(),
      onLeaveBack: () => menuDark(),
      // markers: true,
    });

    const menuDark = () => {
      mainmenu.className = "main-menu-dark";
    };

    const menuLight = () => {
      if (page.className == "light") {
        mainmenu.className = "main-menu-light light";
      } else {
        mainmenu.className = "main-menu-dark dark";
      }
    };

    //////////////////////////////////////////////////////////////////

    const button = document.getElementById("btn-contact");
    var disabled = false;
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let cx = ctx.canvas.width / 2;
    let cy = ctx.canvas.height / 2;

    // add Confetti/Sequince objects to arrays to draw them
    let confetti = [];
    let sequins = [];

    // ammount to add on each button press
    const confettiCount = 20;
    const sequinCount = 10;

    // "physics" variables
    const gravityConfetti = 0.3;
    const gravitySequins = 0.55;
    const dragConfetti = 0.075;
    const dragSequins = 0.02;
    const terminalVelocity = 3;

    // colors, back side is darker for confetti flipping
    const colors = [
      { front: "#7b5cff", back: "#6245e0" }, // Purple
      { front: "#b3c7ff", back: "#8fa5e5" }, // Light Blue
      { front: "#5c86ff", back: "#345dd1" }, // Darker Blue
    ];

    // helper function to pick a random number within a range
    let randomRange = (min, max) => Math.random() * (max - min) + min;

    // helper function to get initial velocities for confetti
    // this weighted spread helps the confetti look more realistic
    let initConfettoVelocity = (xRange, yRange) => {
      const x = randomRange(xRange[0], xRange[1]);
      const range = yRange[1] - yRange[0] + 1;
      let y =
        yRange[1] -
        Math.abs(randomRange(0, range) + randomRange(0, range) - range);
      if (y >= yRange[1] - 1) {
        // Occasional confetto goes higher than the max
        y += Math.random() < 0.25 ? randomRange(1, 3) : 0;
      }
      return { x: x, y: -y };
    };

    // Confetto Class
    function Confetto() {
      this.randomModifier = randomRange(0, 99);
      this.color = colors[Math.floor(randomRange(0, colors.length))];
      this.dimensions = {
        x: randomRange(5, 9),
        y: randomRange(8, 15),
      };
      this.position = {
        x: randomRange(canvas.width / 2, canvas.width / 2),
        y: randomRange(canvas.height / 2, canvas.height / 2),
      };
      this.rotation = randomRange(0, 2 * Math.PI);
      this.scale = {
        x: 1,
        y: 1,
      };
      this.velocity = initConfettoVelocity([-9, 9], [6, 11]);
    }
    Confetto.prototype.update = function () {
      // apply forces to velocity
      this.velocity.x -= this.velocity.x * dragConfetti;
      this.velocity.y = Math.min(
        this.velocity.y + gravityConfetti,
        terminalVelocity
      );
      this.velocity.x += Math.random() > 0.5 ? Math.random() : -Math.random();

      // set position
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;

      // spin confetto by scaling y and set the color, .09 just slows cosine frequency
      this.scale.y = Math.cos((this.position.y + this.randomModifier) * 0.09);
    };

    // Sequin Class
    function Sequin() {
      (this.color = colors[Math.floor(randomRange(0, colors.length))].back),
        (this.radius = randomRange(1, 2)),
        (this.position = {
          x: randomRange(
            canvas.width / 2 - button.offsetWidth / 3,
            canvas.width / 2 + button.offsetWidth / 3
          ),
          y: randomRange(
            canvas.height / 2 + button.offsetHeight / 2 + 8,
            canvas.height / 2 + 1.5 * button.offsetHeight - 8
          ),
        }),
        (this.velocity = {
          x: randomRange(-6, 6),
          y: randomRange(-8, -12),
        });
    }
    Sequin.prototype.update = function () {
      // apply forces to velocity
      this.velocity.x -= this.velocity.x * dragSequins;
      this.velocity.y = this.velocity.y + gravitySequins;

      // set position
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;
    };

    // add elements to arrays to be drawn
    let initBurst = () => {
      for (let i = 0; i < confettiCount; i++) {
        confetti.push(new Confetto());
      }
      for (let i = 0; i < sequinCount; i++) {
        sequins.push(new Sequin());
      }
    };

    // draws the elements on the canvas
    let render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      confetti.forEach((confetto, index) => {
        let width = confetto.dimensions.x * confetto.scale.x;
        let height = confetto.dimensions.y * confetto.scale.y;

        // move canvas to position and rotate
        ctx.translate(confetto.position.x, confetto.position.y);
        ctx.rotate(confetto.rotation);

        // update confetto "physics" values
        confetto.update();

        // get front or back fill color
        ctx.fillStyle =
          confetto.scale.y > 0 ? confetto.color.front : confetto.color.back;

        // draw confetto
        ctx.fillRect(-width / 2, -height / 2, width, height);

        // reset transform matrix
        ctx.setTransform(1, 0, 0, 1, 0, 0);

        // clear rectangle where button cuts off
        if (confetto.velocity.y < 0) {
          ctx.clearRect(
            canvas.width / 2 - button.offsetWidth / 2,
            canvas.height / 2 + button.offsetHeight / 2,
            button.offsetWidth,
            button.offsetHeight
          );
        }
      });

      sequins.forEach((sequin, index) => {
        // move canvas to position
        ctx.translate(sequin.position.x, sequin.position.y);

        // update sequin "physics" values
        sequin.update();

        // set the color
        ctx.fillStyle = sequin.color;

        // draw sequin
        ctx.beginPath();
        ctx.arc(0, 0, sequin.radius, 0, 2 * Math.PI);
        ctx.fill();

        // reset transform matrix
        ctx.setTransform(1, 0, 0, 1, 0, 0);

        // clear rectangle where button cuts off
        if (sequin.velocity.y < 0) {
          ctx.clearRect(
            canvas.width / 2 - button.offsetWidth / 2,
            canvas.height / 2 + button.offsetHeight / 2,
            button.offsetWidth,
            button.offsetHeight
          );
        }
      });

      // remove confetti and sequins that fall off the screen
      // must be done in seperate loops to avoid noticeable flickering
      confetti.forEach((confetto, index) => {
        if (confetto.position.y >= canvas.height) confetti.splice(index, 1);
      });
      sequins.forEach((sequin, index) => {
        if (sequin.position.y >= canvas.height) sequins.splice(index, 1);
      });

      window.requestAnimationFrame(render);
    };

    // cycle through button states when clicked
    // clickButton = () => {
    //   button.classList.add("loading");
    //   button.classList.remove("ready");
    //   setTimeout(() => {
    //     // Completed stage
    //     button.classList.add("complete");
    //     button.classList.remove("loading");
    //     setTimeout(() => {
    //       window.initBurst();
    //       setTimeout(() => {
    //         // Reset button so user can select it again
    //         disabled = false;
    //         button.classList.add("ready");
    //         button.classList.remove("complete");
    //       }, 4000);
    //     }, 320);
    //   }, 1800);
    // };

    const formContact = document.querySelector("#form-contact");

    formContact.addEventListener("submit", handleSubmit);

    async function handleSubmit(e) {
      button.classList.add("loading");
      button.classList.remove("ready");

      e.preventDefault();
      const form = new FormData(this);
      const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setTimeout(() => {
          this.reset();
          button.classList.add("complete");
          button.classList.remove("loading");
          setTimeout(() => {
            window.initBurst();
            setTimeout(() => {
              button.classList.add("ready");
              button.classList.remove("complete");
            }, 4000);
          }, 320);
        }, 1500);
      } else {
        setTimeout(() => {
          this.reset();
          alert(
            "Server error! Your message could not be sent or you entered an invalid text, please reload the page."
          );
          button.classList.add("ready");
          button.classList.remove("loading");
        }, 3000);
      }
    }

    // re-init canvas if the window size changes
    let resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      cx = ctx.canvas.width / 2;
      cy = ctx.canvas.height / 2;
    };

    // resize listenter
    window.addEventListener("resize", () => {
      resizeCanvas();
    });

    // click button on spacebar or return keypress
    // document.body.onkeyup = (e) => {
    //   if (e.keyCode == 13 || e.keyCode == 32) {
    //     clickButton();
    //   }
    // };

    // Set up button text transition timings on page load
    let textElements = button.querySelectorAll(".button-text");
    textElements.forEach((element) => {
      let characters = element.innerText.split("");
      let characterHTML = "";
      characters.forEach((letter, index) => {
        characterHTML += `<span class="char${index}" style="--d:${
          index * 30
        }ms; --dr:${(characters.length - index - 1) * 30}ms;">${letter}</span>`;
      });
      element.innerHTML = characterHTML;
    });

    // kick off the render loop
    render();

    ///////////////////////////////
  }, []);

  return <GlobalContext.Provider value={{}}>{children}</GlobalContext.Provider>;
}

export default GlobalProvider;
