import { useEffect, useLayoutEffect, useRef, useState } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import moon from "../../assets/parallax/moon.svg";
import layer0 from "../../assets/parallax/layers/layer0.svg";
import layer1 from "../../assets/parallax/layers/layer1.svg";
import layer2 from "../../assets/parallax/layers/layer2.svg";
import layer3 from "../../assets/parallax/layers/layer3.svg";
import layer4 from "../../assets/parallax/layers/layer4.svg";
import layer5 from "../../assets/parallax/layers/layer5.svg";
import layer6 from "../../assets/parallax/layers/layer6.svg";
import layer7 from "../../assets/parallax/layers/layer7.svg";
import layer8 from "../../assets/parallax/layers/layer8.svg";
import layer9 from "../../assets/parallax/layers/layer9.svg";

import Star from "./minicomponents/Star";
import StarShooting from "./minicomponents/StarShooting";
import FireParticle from "./minicomponents/FireParticle";

gsap.registerPlugin(ScrollTrigger);

function Parallax() {
  const Stars = [];
  for (let i = 0; i < 200; i++) Stars.push(<Star key={`box-${i}`} />);

  const StarsShooting = [];
  for (let i = 0; i < 10; i++)
    StarsShooting.push(<StarShooting key={`box-${i}`} />);

  const FireParticles = [];
  for (let i = 0; i < 20; i++)
    FireParticles.push(<FireParticle key={`box-${i}`} />);

  /////////////////////////////////////////////////////

  const parallax = useRef();

  const tl = useRef();

  const parallaxSky = useRef();
  const sun = useRef();
  const parallaxWater = useRef();
  const parallaxLayer0 = useRef();
  const parallaxLayer1 = useRef();
  const parallaxLayer2 = useRef();
  const parallaxLayer3 = useRef();
  const parallaxLayer4 = useRef();
  const parallaxLayer5 = useRef();
  const parallaxLayer6 = useRef();
  const parallaxLayer7 = useRef();
  const parallaxLayer8 = useRef();
  const parallaxLayer9 = useRef();

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.set(parallaxSky.current, { opacity: 0 });
      gsap.set(parallaxLayer9.current, { scale: 4, opacity: 0 });
      gsap.set(parallaxLayer8.current, { scale: 4, opacity: 0 });
      gsap.set(parallaxLayer7.current, { scale: 4, opacity: 0 });
      gsap.set(parallaxWater.current, { y: "200%", opacity: 0, scale: 4 });
      gsap.set(parallaxLayer6.current, { scale: 4, opacity: 0 });
      gsap.set(parallaxLayer5.current, { scale: 4, opacity: 0 });
      gsap.set(parallaxLayer4.current, { scale: 4, opacity: 0 });
      gsap.set(parallaxLayer3.current, { scale: 4, opacity: 0 });
      gsap.set(parallaxLayer2.current, { scale: 4, opacity: 0 });
      gsap.set(parallaxLayer1.current, { scale: 4, opacity: 0 });
      gsap.set(parallaxLayer0.current, { opacity: 0, });

      tl.current = gsap
        .timeline()
        .to(parallaxSky.current, { opacity: 1, duration: 1 }, 0)
        .to(parallaxLayer9.current, { opacity: 1, scale: 1.01, duration: 1 }, 0)
        .to(
          parallaxLayer8.current,
          { opacity: 1, scale: 1.01, duration: 1 },
          0.1
        )
        .to(
          parallaxLayer7.current,
          { opacity: 1, scale: 1.01, duration: 1 },
          0.2
        )
        .to(
          parallaxWater.current,
          { opacity: 1, y: 0, scale: 1, duration: 1 },
          0.3
        )
        .to(
          parallaxLayer6.current,
          { opacity: 1, scale: 1.01, duration: 1 },
          0.3
        )
        .to(
          parallaxLayer5.current,
          { opacity: 1, scale: 1.01, duration: 1 },
          0.4
        )
        .to(
          parallaxLayer4.current,
          { opacity: 1, scale: 1.01, duration: 1 },
          0.4
        )
        .to(
          parallaxLayer3.current,
          { opacity: 1, scale: 1.01, duration: 1 },
          0.55
        )
        .to(
          parallaxLayer2.current,
          { opacity: 1, scale: 1.01, duration: 1 },
          0.6
        )
        .to(
          parallaxLayer1.current,
          { opacity: 1, scale: 1.01, duration: 1 },
          0.6
        )
        .to(
          parallaxLayer0.current, 
          { opacity: 1, scale: 1.01, duration: 0.5 }, 1.2)
        .to(
          sun.current, 
          { opacity: 1 }, 0.9);

      const parallaxStart = tl.current;
      parallaxStart.delay(0.5);
     
    }, parallax);

    return () => ctx.revert();
  }, []);

  return (
    <div id="parallax" ref={parallax}>
      <figure ref={parallaxSky} id="parallax-sky" className="parallax-sky-dark">
        <div id="nigth-particles">
          {Stars}
          {StarsShooting}
        </div>

        <div id="moon-box">
          <div id="moon">
            <img src={moon}></img>
          </div>
        </div>

        <div id="sun-box">
          <span ref={sun} id="sun"></span>
        </div>
      </figure>

      <figure ref={parallaxWater} id="parallax-water">
        <div
          id="parallax-water-dark"
          className="parallax-dark parallax-water-dark"
        ></div>
        <div
          id="parallax-water-light"
          className="parallax-light parallax-water-light"
        ></div>
      </figure>

      <figure ref={parallaxLayer0} id="parallax-layer-0">
        <svg
          id="parallax-layer-0-img"
          className="parallax-layer-size"
          viewBox="0 0 2560 1440"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="lgrad" x1="50%" y1="100%" x2="50%" y2="0%">
              <stop
                offset="50%"
                style={{ stopColor: "rgb(20,19,27)", stopOpacity: 1.0 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "rgb(15,16,20)", stopOpacity: 1.0 }}
              />
            </linearGradient>
          </defs>

          <use
            className="parallax-dark evenodd layer-0-dark"
            xlinkHref={`${layer0}#layer-0`}
          ></use>
        </svg>
        <svg className="parallax-layer-size" viewBox="0 0 2560 1440">
          <use
            className="parallax-light evenodd layer-0-light"
            xlinkHref={`${layer0}#layer-0`}
          ></use>
        </svg>
      </figure>

      <figure ref={parallaxLayer1} id="parallax-layer-1">
        <svg
          id="parallax-layer-1-img"
          className="parallax-layer-size"
          viewBox="0 0 2560 1440"
        >
          <use
            className="parallax-dark evenodd grass-1-dark"
            xlinkHref={`${layer1}#grass-1`}
          ></use>
          <use
            className="parallax-dark evenodd rocks-1-dark"
            xlinkHref={`${layer1}#rocks-1`}
          ></use>
          <use
            className="parallax-dark evenodd camping-1-dark"
            xlinkHref={`${layer1}#camping-1`}
          ></use>
          <use
            className="parallax-dark evenodd camping-2-dark"
            xlinkHref={`${layer1}#camping-2`}
          ></use>
          <use
            className="parallax-dark evenodd camping-3-dark"
            xlinkHref={`${layer1}#camping-3`}
          ></use>
          <use
            className="parallax-dark evenodd camping-4-dark"
            xlinkHref={`${layer1}#camping-4`}
          ></use>
          <use
            className="parallax-dark evenodd camping-5-dark"
            xlinkHref={`${layer1}#camping-5`}
          ></use>
          <use
            className="evenodd shadow-campfire"
            xlinkHref={`${layer1}#shadow-campfire`}
          ></use>
          <use
            className="parallax-dark evenodd woods-dark"
            xlinkHref={`${layer1}#woods`}
          ></use>
          <use
            className="camp-fire evenodd fire-3-dark"
            xlinkHref={`${layer1}#fire-3`}
          ></use>
          <use
            className="camp-fire evenodd fire-2-dark"
            xlinkHref={`${layer1}#fire-2`}
          ></use>
          <use
            className="camp-fire evenodd fire-1-dark"
            xlinkHref={`${layer1}#fire-1`}
          ></use>
          <use
            className="parallax-dark evenodd herb-2-3-dark"
            xlinkHref={`${layer1}#herb-3`}
          ></use>
          <use
            className="parallax-dark evenodd herb-2-3-dark"
            xlinkHref={`${layer1}#herb-2`}
          ></use>
          <use
            className="parallax-dark evenodd herb-1-dark"
            xlinkHref={`${layer1}#herb-1`}
          ></use>
        </svg>

        <div id="fire-effect">{FireParticles}</div>

        <svg className="parallax-layer-size" viewBox="0 0 2560 1440">
          <use
            className="parallax-light evenodd grass-1-light"
            xlinkHref={`${layer1}#grass-1`}
          ></use>
          <use
            className="parallax-light evenodd rocks-1-light"
            xlinkHref={`${layer1}#rocks-1`}
          ></use>
          <use
            className="parallax-light evenodd camping-1-light"
            xlinkHref={`${layer1}#camping-1`}
          ></use>
          <use
            className="parallax-light evenodd camping-2-light"
            xlinkHref={`${layer1}#camping-2`}
          ></use>
          <use
            className="parallax-light evenodd camping-3-light"
            xlinkHref={`${layer1}#camping-3`}
          ></use>
          <use
            className="parallax-light evenodd camping-4-light"
            xlinkHref={`${layer1}#camping-4`}
          ></use>
          <use
            className="parallax-light evenodd camping-5-light"
            xlinkHref={`${layer1}#camping-5`}
          ></use>
          <use
            className="parallax-light evenodd woods-light"
            xlinkHref={`${layer1}#woods`}
          ></use>
          <use
            className="evenodd smoke-1"
            xlinkHref={`${layer1}#smoke-1`}
          ></use>
          <use
            className="parallax-light evenodd herb-2-3-light"
            xlinkHref={`${layer1}#herb-3`}
          ></use>
          <use
            className="parallax-light evenodd herb-2-3-light"
            xlinkHref={`${layer1}#herb-2`}
          ></use>
          <use
            className="parallax-light evenodd herb-1-light"
            xlinkHref={`${layer1}#herb-1`}
          ></use>
        </svg>
      </figure>

      <figure ref={parallaxLayer2} id="parallax-layer-2">
        <svg
          id="parallax-layer-2-img"
          className="parallax-layer-size"
          viewBox="0 0 2560 1440"
        >
          <use
            className="parallax-dark evenodd pine-1-dark"
            xlinkHref={`${layer2}#pine-1`}
          ></use>
          <use
            className="parallax-dark evenodd pine-2-dark"
            xlinkHref={`${layer2}#pine-2`}
          ></use>
        </svg>
        <svg className="parallax-layer-size" viewBox="0 0 2560 1440">
          <use
            className="parallax-light evenodd pine-1-light"
            xlinkHref={`${layer2}#pine-1`}
          ></use>
          <use
            className="parallax-light evenodd pine-2-light"
            xlinkHref={`${layer2}#pine-2`}
          ></use>
        </svg>
      </figure>

      <figure ref={parallaxLayer3} id="parallax-layer-3">
        <svg
          id="parallax-layer-3-img"
          className="parallax-layer-size"
          viewBox="0 0 2560 1440"
        >
          <use
            className="parallax-dark evenodd boulder-1-dark"
            xlinkHref={`${layer3}#boulder-1`}
          ></use>
          <use
            className="parallax-dark evenodd boulder-1-1-dark"
            xlinkHref={`${layer3}#boulder-1-1`}
          ></use>
        </svg>
        <svg className="parallax-layer-size" viewBox="0 0 2560 1440">
          <use
            className="parallax-light evenodd boulder-1-light"
            xlinkHref={`${layer3}#boulder-1`}
          ></use>
          <use
            className="parallax-light evenodd boulder-1-1-light"
            xlinkHref={`${layer3}#boulder-1-1`}
          ></use>
        </svg>
      </figure>

      <figure ref={parallaxLayer4} id="parallax-layer-4">
        <svg
          id="parallax-layer-4-img"
          className="parallax-layer-size"
          viewBox="0 0 2560 1440"
        >
          <use
            className="parallax-dark evenodd mountains-1-2-dark"
            xlinkHref={`${layer4}#mountain-1`}
          ></use>
          <use
            className="parallax-dark evenodd mountains-1-2-dark"
            xlinkHref={`${layer4}#mountain-2`}
          ></use>
        </svg>
        <svg className="parallax-layer-size" viewBox="0 0 2560 1440">
          <use
            className="parallax-light evenodd mountains-1-2-light"
            xlinkHref={`${layer4}#mountain-1`}
          ></use>
          <use
            className="parallax-light evenodd mountains-1-2-light"
            xlinkHref={`${layer4}#mountain-2`}
          ></use>
        </svg>
      </figure>

      <figure ref={parallaxLayer5} id="parallax-layer-5">
        <svg
          id="parallax-layer-5-img"
          className="parallax-layer-size"
          viewBox="0 0 2560 1440"
        >
          <use
            className="parallax-dark evenodd mountains-1-2-plus-dark"
            xlinkHref={`${layer5}#mountain-1-plus`}
          ></use>
          <use
            className="parallax-dark evenodd mountains-1-2-plus-dark"
            xlinkHref={`${layer5}#mountain-2-plus`}
          ></use>
        </svg>
        <svg className="parallax-layer-size" viewBox="0 0 2560 1440">
          <use
            className="parallax-light evenodd mountains-1-2-plus-light"
            xlinkHref={`${layer5}#mountain-1-plus`}
          ></use>
          <use
            className="parallax-light evenodd mountains-1-2-plus-light"
            xlinkHref={`${layer5}#mountain-2-plus`}
          ></use>
        </svg>
      </figure>

      <figure ref={parallaxLayer6} id="parallax-layer-6">
        <svg
          id="parallax-layer-6-img"
          className="parallax-layer-size"
          viewBox="0 0 2560 1440"
        >
          <use
            className="parallax-dark evenodd mountain-3-dark"
            xlinkHref={`${layer6}#mountain-3`}
          ></use>
          <use
            className="parallax-dark evenodd mountain-4-dark"
            xlinkHref={`${layer6}#mountain-4`}
          ></use>
        </svg>
        <svg className="parallax-layer-size" viewBox="0 0 2560 1440">
          <use
            className="parallax-light evenodd mountain-3-light"
            xlinkHref={`${layer6}#mountain-3`}
          ></use>
          <use
            className="parallax-light evenodd mountain-4-light"
            xlinkHref={`${layer6}#mountain-4`}
          ></use>
        </svg>
      </figure>

      <figure ref={parallaxLayer7} id="parallax-layer-7">
        <svg
          id="parallax-layer-7-img"
          className="parallax-layer-size"
          viewBox="0 0 2560 1440"
        >
          <use
            className="parallax-dark evenodd mountain-5-dark"
            xlinkHref={`${layer7}#mountain-5`}
          ></use>
        </svg>
        <svg className="parallax-layer-size" viewBox="0 0 2560 1440">
          <use
            className="parallax-light evenodd mountain-5-light"
            xlinkHref={`${layer7}#mountain-5`}
          ></use>
        </svg>
      </figure>

      <figure ref={parallaxLayer8} id="parallax-layer-8">
        <svg
          id="parallax-layer-8-img"
          className="parallax-layer-size"
          viewBox="0 0 2560 1440"
        >
          <use
            className="parallax-dark evenodd mountain-6-dark"
            xlinkHref={`${layer8}#mountain-6`}
          ></use>
        </svg>
        <svg className="parallax-layer-size" viewBox="0 0 2560 1440">
          <use
            className="parallax-light evenodd mountain-6-light"
            xlinkHref={`${layer8}#mountain-6`}
          ></use>
        </svg>
      </figure>

      <figure ref={parallaxLayer9} id="parallax-layer-9">
        <svg
          id="parallax-layer-9-img"
          className="parallax-layer-size"
          viewBox="0 0 2560 1440"
        >
          <use
            className="evenodd parallax-dark mountains-7-1-3-dark"
            xlinkHref={`${layer9}#mountains-7-1`}
          ></use>
          <use
            className="evenodd parallax-dark mountains-7-2-dark"
            xlinkHref={`${layer9}#mountains-7-2`}
          ></use>
          <use
            className="evenodd parallax-dark mountains-7-1-3-dark"
            xlinkHref={`${layer9}#mountains-7-3`}
          ></use>
        </svg>
        <svg className="parallax-layer-size" viewBox="0 0 2560 1440">
          <use
            className="evenodd parallax-light mountains-7-1-3-light"
            xlinkHref={`${layer9}#mountains-7-1`}
          ></use>
          <use
            className="evenodd parallax-light mountains-7-2-light"
            xlinkHref={`${layer9}#mountains-7-2`}
          ></use>
          <use
            className="evenodd parallax-light mountains-7-1-3-light"
            xlinkHref={`${layer9}#mountains-7-3`}
          ></use>
        </svg>
      </figure>
    </div>
  );
}

export default Parallax;
