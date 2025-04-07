import { Preload, ScrollControls } from "@react-three/drei";
import Stars from "../../components/Stars";
import Earth from "../../components/Earth/Earth";
import Mars from "../../components/Mars/Mars";
import Jupiter from "../../components/Jupiter/Jupiter";
import Saturn from "../../components/Saturn/Saturn";
import Camera from "../Camera";
import EarthCard from "../../components/Earth/EarthCard";
import MarsCard from "../../components/Mars/MarsCard";
import { Canvas } from "@react-three/fiber";
import { RiArrowLeftLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { OrbitControls } from "@react-three/drei";
import JupiterCard from "../../components/Jupiter/JupiterCard";
import SaturnCard from "../../components/Saturn/SaturnCard";

const Planets = () => {
  const navigate = useNavigate();
  const [showMessage, setShowMessage] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='scene'>
      <>
        <div
          className='go-back-btn'
          onClick={() => navigate("/")}>
          <RiArrowLeftLine
            fill='white'
            size={"30px"}
          />
        </div>

        <div className={`message ${!showMessage ? "fade-out" : ""}`}>
          <p>Scroll to enjoy the journey!</p>
        </div>

        <Canvas
          camera={{
            fov: 90,
            aspect: window.innerWidth / window.innerHeight,
          }}
          gl={{ stencil: true }}>
          <ScrollControls
            pages={10}
            damping={0.5}>
            <directionalLight
              position={[3, 1, 1]}
              intensity={1}
            />
            <Stars />
            <Earth />
            <Mars />
            <Jupiter />
            <Saturn />
            <Camera />
            <EarthCard />
            <MarsCard />
            <JupiterCard />
            <SaturnCard />
            {/* <OrbitControls /> */}
          </ScrollControls>
          <Preload
            all
            onProgress={() => console.log("Hallo")}
          />
        </Canvas>
      </>
    </div>
  );
};
export default Planets;
