import { useEffect, useRef, useState, React } from "react";

import "./App.css";
import GlobalProvider from "./context/GlobalContext";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Asides from "./components/Asides";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";


gsap.registerPlugin(ScrollTrigger);

function App() {
  const main = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      let scene = gsap.timeline();

      ScrollTrigger.create({
        animation: scene,
        trigger: "#home",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
        // markers: true,
      });

      scene.to("#profile", { y: -100 }, 0);
      scene.to("#parallax-layer-9", { y: -30 }, 0);
      scene.to("#parallax-layer-8", { y: -50 }, 0);
      scene.to("#parallax-layer-7", { y: -70 }, 0);
      scene.to("#parallax-water-dark", { y: -70 }, 0);
      scene.to("#parallax-water-light", { y: -70 }, 0);
      scene.to("#parallax-layer-6", { y: -110 }, 0);
      scene.to("#parallax-layer-5", { y: -160 }, 0);
      scene.to("#parallax-layer-4", { y: -180 }, 0);
      scene.to("#parallax-layer-3", { y: -190 }, 0);
      scene.to("#parallax-layer-2", { y: -260 }, 0);
      scene.to("#parallax-layer-1", { y: -280 }, 0);
      scene.to("#parallax-layer-0", { y: -310 }, 0);
    }, main);

    return () => ctx.revert();
  }, []);

  return (
    <GlobalProvider>
      <div className="dark">
        <div id="page" className="dark">
          <Header />
          <NavBar />
          <main ref={main} id="main-contend">
            <Home />
            <div id="blog" className="blog">
              <Asides />
              <About />
              <Skills />
              <Projects />
              <Experience />
            </div>
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
