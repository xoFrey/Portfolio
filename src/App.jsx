import { Canvas, useThree } from "@react-three/fiber";
import "./App.css";
// import SolarSystem from "./pages/SolarSystem";
// import Techs from "./pages/Techs";
import Stars from "./components/Stars";
import { useRef, useState } from "react";
import EarthCard from "./components/Earth/EarthCard";
import { ScrollControls } from "@react-three/drei";
import EarthPage from "./pages/EarthPage";
import Mars from "./components/Mars/Mars";
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
          camera={{ fov: 70, position: [0, 0, 15] }}
          gl={{ stencil: true }}>
          <ScrollControls>
            <Stars />
            <EarthPage />
            <Mars />
          </ScrollControls>
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
