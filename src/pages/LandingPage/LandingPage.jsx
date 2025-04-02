import { Link, useNavigate } from "react-router-dom";
import "./LandingPage.css";
import { Canvas } from "@react-three/fiber";
import Stars from "../../components/Stars";
import { useState } from "react";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className='front'>
      <Canvas>
        <Stars />
      </Canvas>
      <section className='frontpage'>
        <h1>Welcome</h1>
        <div className='btn'>
          <button
            className='a'
            onClick={() => navigate("/planets")}>
            Click me
          </button>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
