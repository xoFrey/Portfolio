import { Canvas, useThree } from "@react-three/fiber";
import "./App.css";
import SolarSystem from "./pages/SolarSystem";
import Techs from "./pages/Techs";
import Stars from "./components/Stars";
import { useState } from "react";
import LoadingPage from "./pages/LoadingPage";

function App() {
  const [showLoading, setShowLoading] = useState(true);
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
      {showLoading ? (
        <>
          <LoadingPage />
        </>
      ) : (
        <>
          <Canvas camera={{ fov: 70, position: [3, 10, 39] }}>
            {/* <SolarSystem /> */}
            <Techs />
          </Canvas>
        </>
      )}
    </>
  );
}

export default App;
