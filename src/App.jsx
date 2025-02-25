import { Canvas, useThree } from "@react-three/fiber";
import "./App.css";
// import SolarSystem from "./pages/SolarSystem";
// import Techs from "./pages/Techs";
import Stars from "./components/Stars";
import { useEffect, useRef, useState } from "react";
import EarthCard from "./components/Earth/EarthCard";
import {
  OrbitControls,
  PerspectiveCamera,
  ScrollControls,
  Text3D,
  useHelper,
} from "@react-three/drei";
import { CameraHelper as ThreeCameraHelper } from "three";
import EarthPage from "./pages/EarthPage";
import Mars from "./components/Mars/Mars";
import Jupiter from "./components/Jupiter/Jupiter";
import Saturn from "./components/Saturn/Saturn";
import Mercury from "./components/Mercury/Mercury";
import Venus from "./components/Venus/Venus";
import Uranus from "./components/Uranus/Uranus";
import Neptune from "./components/Neptune/Neptune";
import Sun from "./components/Sun/Sun";
import Earth from "./components/Earth/Earth";
import Camera from "./pages/Camera";
import { Rocket } from "./components/Rocket";
// import LoadingPage from "./pages/LoadingPage";

function App() {
  const [showLoading, setShowLoading] = useState(false);

  setTimeout(() => {
    setShowLoading(false);
  }, 6000);

  return (
    <>
      <div className='scene'>
        <Canvas
          camera={{
            fov: 100,
            position: [0, 1, 3],
            // rotation: [1, Math.PI / 1, 0],
            up: [0, 1, 0],
            aspect: window.innerWidth / window.innerHeight,
          }}
          gl={{ stencil: true }}>
          <ScrollControls>
            <Stars />
            <Mercury />
            <Venus />
            <Camera />

            <EarthCard />
          </ScrollControls>
          <axesHelper args={[50]} />
          <gridHelper />
          {/* <OrbitControls enableZoom={false} /> */}
        </Canvas>
      </div>
    </>
  );
}

export default App;

// {
//   showLoading ? (
//     <>
//       <LoadingPage />
//     </>
//   ) : (
//     <>
//       <Canvas camera={{ fov: 70, position: [3, 10, 39] }}>
//         {/* <SolarSystem /> */}
//         <Techs />
//       </Canvas>
//     </>
//   );
// }
