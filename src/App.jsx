import { Canvas, useThree } from "@react-three/fiber";
import "./App.css";
// import SolarSystem from "./pages/SolarSystem";
// import Techs from "./pages/Techs";
import Stars from "./components/Stars";
import { useEffect, useRef, useState } from "react";
import EarthCard from "./components/Earth/EarthCard";
import { OrbitControls, ScrollControls } from "@react-three/drei";
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
            fov: 75,
            position: [0, 50, 150],
            up: [0, 1, 0],
            aspect: window.innerWidth / window.innerHeight,
          }}
          gl={{ stencil: true }}>
          <ScrollControls>
            <Stars />
            <Mercury />
            <Venus />
            {/* <Earth /> */}
            <EarthPage />
            <Mars />
            <Jupiter />
            <Saturn />
            <Uranus />
            <Neptune />
          </ScrollControls>
          <gridHelper />
          <OrbitControls />
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
