import { Link, useNavigate } from "react-router-dom";
import "./LandingPage.css";
import { Canvas } from "@react-three/fiber";
import Stars from "../../components/Stars";
import { RiArrowRightSLine } from "react-icons/ri";
import Navbar from "../../components/Navbar/Navbar";
import { ScrollControls } from "@react-three/drei";
import { useRef } from "react";
import { SlArrowDown } from "react-icons/sl";

const LandingPage = () => {
  const aboutRef = useRef();
  const homeRef = useRef();

  return (
    <>
      <div className='front'>
        <Canvas>
          <Stars />
        </Canvas>
        <Navbar
          aboutRef={aboutRef}
          homeRef={homeRef}
        />
        <section
          className='welcome'
          ref={homeRef}>
          <h2>Welcome </h2>
          <div
            className='container'
            onClick={() =>
              aboutRef.current?.scrollIntoView({ behavior: "smooth" })
            }>
            <div class='arrow arrow-first'>
              <SlArrowDown
                fill='white'
                size={"30px"}
              />
            </div>
            <div class='arrow arrow-second'>
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
            the making with new techs and skills, that I am aquiring myself
            through the journey of becoming more experienced in what I do. Thank
            you for watching and please proceed and enjoy.{" "}
          </p>
          <div className='button'>
            <Link to='/planets'>Explore the Planets</Link>
            <RiArrowRightSLine
              fill='white'
              size={"20px"}
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default LandingPage;
