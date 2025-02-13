import { Canvas, useThree } from "@react-three/fiber";
import "./App.css";
// import SolarSystem from "./pages/SolarSystem";
// import Techs from "./pages/Techs";
import Stars from "./components/Stars";
import { useState } from "react";
import Earth from "./components/Earth/Earth";
import EarthCard from "./components/Earth/EarthCard";
import { ScrollControls } from "@react-three/drei";
import EarthPage from "./pages/EarthPage";
// import LoadingPage from "./pages/LoadingPage";

function App() {
  const [showLoading, setShowLoading] = useState(false);
  setTimeout(() => {
    setShowLoading(false);
  }, 6000);

  return (
    <>
      <div className='stars'>
        <Canvas camera={{ fov: 75, position: [0, 0, 1] }}>
          <Stars />
        </Canvas>
      </div>
      <div className='earthcanvas'>
        <Canvas
          // orthographic
          camera={{ fov: 30, position: [0, 0, 0] }}>
          <ScrollControls damping={0.3}>
            <EarthPage />
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
