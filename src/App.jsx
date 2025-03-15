import { Canvas } from "@react-three/fiber";
import "./App.css";
import Stars from "./components/Stars";
import { useEffect, useRef, useState } from "react";
import EarthCard from "./components/Earth/EarthCard";
import { OrbitControls, ScrollControls } from "@react-three/drei";
import Mars from "./components/Mars/Mars";
import Jupiter from "./components/Jupiter/Jupiter";
import Saturn from "./components/Saturn/Saturn";
import Earth from "./components/Earth/Earth";
import Camera from "./pages/Camera";
import LoadingPage from "./pages/LoadingPage/LoadingPage";

function App() {
  const [showLoading, setShowLoading] = useState(true);

  setTimeout(() => {
    setShowLoading(false);
  }, 6000);

  return (
    <>
      {showLoading && <LoadingPage />}
      <div className='scene'>
        <Canvas
          camera={{
            fov: 90,
            position: [0, 1, 3],
            up: [0, 1, 0],
            aspect: window.innerWidth / window.innerHeight,
          }}
          gl={{ stencil: true }}>
          <ScrollControls
            pages={10}
            damping={0.5}>
            <Stars />

            <directionalLight
              position={[3, 1, 1]}
              intensity={1}
            />

            <Earth />
            <Mars />
            <Jupiter />
            <Saturn />
            <Camera />

            <EarthCard />
          </ScrollControls>
          {/* <axesHelper args={[50]} />
          // <gridHelper /> */}
          {/* <OrbitControls /> */}
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
