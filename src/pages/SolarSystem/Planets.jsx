import { ScrollControls } from "@react-three/drei";
import Stars from "../../components/Stars";
import Earth from "../../components/Earth/Earth";
import Mars from "../../components/Mars/Mars";
import Jupiter from "../../components/Jupiter/Jupiter";
import Saturn from "../../components/Saturn/Saturn";
import Camera from "../Camera";
import EarthCard from "../../components/Earth/EarthCard";
import MarsCard from "../../components/Mars/MarsCard";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

const Planets = () => {
  return (
    <div className='scene'>
      <Suspense fallback={() => console.log("Hiiii")}>
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
          </ScrollControls>

          {/* <axesHelper args={[50]} /> */}
          {/* // <gridHelper /> */}
          {/* <OrbitControls /> */}
        </Canvas>
      </Suspense>
    </div>
  );
};

export default Planets;
