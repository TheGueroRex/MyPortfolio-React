import { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Parallax from "../components/Home.components/Parallax";
import Profile from "../components/Home.components/Profile";

gsap.registerPlugin(ScrollTrigger);

function Home() {

  const arrowIcon = useRef();

  const arrowIconUpDown = () => {
    if(arrowIcon.current.classList[1] =="open"){
      arrowIcon.current.href = "#";
    }else{
      arrowIcon.current.href = "#about";
    }
  }

  useEffect(() => {
    const resetArrowIcon = () => {
      gsap.set(arrowIcon.current, {opacity: 0})
      arrowIcon.current.className = "arrow-icon";
    }

    resetArrowIcon();
    
    const starArrowIcon = () => {
      gsap.to(arrowIcon.current, {opacity: 1})
    }
    
    const openArrowIcon = () => {
      arrowIcon.current.classList.add("open");
      gsap.set(arrowIcon.current, {opacity: 0})
    }

    ScrollTrigger.create({
      trigger: "#arrow-box",
      start: "center center",
      end: "150% top",
      onEnter: () => starArrowIcon(),
      onLeaveBack: () => resetArrowIcon(),
      onEnterBack: () => starArrowIcon(),
      onLeave: () => openArrowIcon()
    })
  
  }, [])

  return (
    <section id="home">
      
      <Parallax />

      <Profile />

      <div id="arrow-box">
        <div className="arrow">
          <a onClick={arrowIconUpDown} ref={arrowIcon} className="arrow-icon" href="#about">
            <span className="left-bar"></span>
            <span className="right-bar"></span>
          </a>
        </div>
      </div>
      
    </section>
  );
}

export default Home;
