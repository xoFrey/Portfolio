import { Link, useNavigate } from "react-router-dom";
import "./LandingPage.css";
import { Canvas } from "@react-three/fiber";
import Stars from "../../components/Stars";
import { RiArrowRightSLine } from "react-icons/ri";
import Navbar from "../../components/Navbar/Navbar";

import { useRef } from "react";
import { SlArrowDown } from "react-icons/sl";
import TechStack from "../../components/TechStack/TechStack";
import SlideShow from "../SlideShow/SlideShow";

const LandingPage = () => {
  const aboutRef = useRef();
  const homeRef = useRef();
  const techstackRef = useRef();
  const slideShowRef = useRef();

  return (
    <>
      <div className='front'>
        <Canvas style={{ position: "fixed" }}>
          <Stars />
        </Canvas>
        <Navbar
          aboutRef={aboutRef}
          homeRef={homeRef}
          techStackRef={techstackRef}
        />
        <section
          className='welcome'
          ref={homeRef}>
          <h2>Welcome</h2>
          <div
            className='container'
            onClick={() =>
              aboutRef.current?.scrollIntoView({ behavior: "smooth" })
            }>
            <div className='arrow arrow-first'>
              <SlArrowDown
                fill='white'
                size={"30px"}
              />
            </div>
            <div className='arrow arrow-second'>
              <SlArrowDown
                fill='white'
                size={"30px"}
              />
            </div>
          </div>
        </section>
        <section
          ref={aboutRef}
          className='about'>
          <p>
            Hi! My name is Izel and I am a junior Full-Stack Webdeveloper. In
            this short portfolio you will experience a ThreeJS project I have
            been working on and playing around with. This portfolio is still in
            the making with new techs and skills, that I am aquiring by myself
            through the journey of becoming more experienced in what I do. Thank
            you for watching and please proceed, enjoy!
          </p>
          <div className='button'>
            <Link to='/planets'>
              Explore my Journey
              <RiArrowRightSLine
                fill='white'
                size={"20px"}
              />
            </Link>
            <div
              className='container'
              onClick={() =>
                techstackRef.current?.scrollIntoView({ behavior: "smooth" })
              }>
              <div className='arrow arrow-first'>
                <SlArrowDown
                  fill='white'
                  size={"30px"}
                />
              </div>
              <div className='arrow arrow-second'>
                <SlArrowDown
                  fill='white'
                  size={"30px"}
                />
              </div>
            </div>
          </div>
          <div
            className='container'
            onClick={() =>
              slideShowRef.current?.scrollIntoView({ behavior: "smooth" })
            }>
            <div className='arrow arrow-first'>
              <SlArrowDown
                fill='white'
                size={"30px"}
              />
            </div>
            <div className='arrow arrow-second'>
              <SlArrowDown
                fill='white'
                size={"30px"}
              />
            </div>
          </div>
        </section>

        <section
          ref={techstackRef}
          className='techstack'>
          <Canvas
            orthographic
            camera={{ position: [0, 0, 20], zoom: 80 }}>
            <TechStack />
            <ambientLight intensity={0.8} />
          </Canvas>
          <div
            className='container'
            onClick={() =>
              slideShowRef.current?.scrollIntoView({ behavior: "smooth" })
            }>
            <div className='arrow arrow-first'>
              <SlArrowDown
                fill='white'
                size={"30px"}
              />
            </div>
            <div className='arrow arrow-second'>
              <SlArrowDown
                fill='white'
                size={"30px"}
              />
            </div>
          </div>
        </section>
        <section
          ref={slideShowRef}
          className='slideshow-section'>
          {/* <Projects /> */}
          <SlideShow />
        </section>
      </div>
    </>
  );
};

export default LandingPage;
