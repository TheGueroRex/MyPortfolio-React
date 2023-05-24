import { useEffect, useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Typed from "typed.js";

gsap.registerPlugin(ScrollTrigger);

function Profile() {

  const inputOccupation = useRef();

  useEffect(() => {
    const letterAnim = document.querySelectorAll(".letter-anim");

    const greetingTranslate = () => {
      letterAnim.forEach((letter, i) => {
        let delay = Math.random() * 3;
        gsap.to(letter, {
          opacity: 1,
          animation: "animation-letter-start 2s linear",
          delay: delay,
        });
      });
    };

    const greetingAnimSetup = () => {
      letterAnim.forEach((letter, i) => {
        gsap.set(letter, { opacity: 0 });
      });
      setTimeout(greetingTranslate, 1500);
    };

    greetingAnimSetup();

    let typed = new Typed(inputOccupation.current, {
      strings: ["Web Developer", "Front-end Developer", "Web Designer"],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 1000,
      loop: true,
    });

    const profileSecTranslate = () => {
      let profileSec = gsap.timeline();
      profileSec.to("#especiality", { opacity: 1, x: 0, duration: 1 });
      profileSec.to("#btn-about", { opacity: 1, y: 0, duration: 1 });
    };
    
    const profileSecAnimSetup = () => {
      gsap.set("#especiality", { opacity: 0, x: -300, duration: 1 });
      gsap.set("#btn-about", { opacity: 0, y: 500, duration: 1 });
    
      setTimeout(profileSecTranslate, 2000);
    };
    
    profileSecAnimSetup();

    const letterNoneAnim = (letter) => {
      setTimeout(() => {
        letter.style.animation = "none";
      }, 1000);
    };
  
    letterAnim.forEach((letter, i) => {
      letter.addEventListener("mouseover", (event) => {
        letter.style.animation = "animation-letter-hover 2s linear";
    
        letterNoneAnim(letter);
      });
    
      letter.addEventListener("click", (event) => {
        letter.style.animation = "animation-letter-hover 2s linear";
    
        letterNoneAnim(letter);
      });
    });

    return () => {
      typed.destroy();
    };

  });

  return (
    <div id="profile">
      <div id="greeting">
        <div className="es">
          <div className="greeting-colum1">
            <span className="letter-anim">H</span>
            <span className="letter-anim">o</span>
            <span className="letter-anim">l</span>
            <span className="letter-anim">a</span>
            <span className="letter-anim">,</span>
          </div>
          <div className="greeting-colum2">
            <span className="letter-anim">s</span>
            <span className="letter-anim">o</span>
            <span className="letter-anim">y</span>
            <span className="letter-space">.</span>
            <span className="letter-anim">L</span>
            <span className="letter-anim">u</span>
            <span className="letter-anim">i</span>
            <span className="letter-anim">s</span>
            <span className="letter-space">.</span>
            <span className="letter-anim">F</span>
            <span className="letter-anim">e</span>
            <span className="letter-anim">r</span>
            <span className="letter-anim">n</span>
            <span className="letter-anim">a</span>
            <span className="letter-anim">n</span>
            <span className="letter-anim">d</span>
            <span className="letter-anim">o</span>
          </div>
        </div>

        <div className="en">
          <div className="greeting-colum1">
            <span className="letter-anim">H</span>
            <span className="letter-anim">i</span>
            <span className="letter-anim">,</span>
          </div>
          <div className="greeting-colum2">
            <span className="letter-anim">I</span>
            <span className="letter-anim">'</span>
            <span className="letter-anim">m</span>
            <span className="letter-space">.</span>
            <span className="letter-anim">L</span>
            <span className="letter-anim">u</span>
            <span className="letter-anim">i</span>
            <span className="letter-anim">s</span>
            <span className="letter-space">.</span>
            <span className="letter-anim">F</span>
            <span className="letter-anim">e</span>
            <span className="letter-anim">r</span>
            <span className="letter-anim">n</span>
            <span className="letter-anim">a</span>
            <span className="letter-anim">n</span>
            <span className="letter-anim">d</span>
            <span className="letter-anim">o</span>
          </div>
        </div>
      </div>
      <div id="especiality">
        <h3>
          <span ref={inputOccupation} id="auto-input-occupation"></span>
        </h3>
      </div>
      <a id="btn-about" className="btn btn-about" href="#about">
        <span>
          <p className="es">Acerca de Mi</p>
          <p className="en">About me</p>
        </span>
        <span>
          <svg width="13px" height="10px" viewBox="0 0 13 10">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </span>
      </a>
    </div>
  );
}

export default Profile;
