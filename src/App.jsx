import { Canvas } from "@react-three/fiber";
import "./App.css";
import Stars from "./components/Stars";
import { lazy, Suspense, useEffect, useRef, useState } from "react";
import EarthCard from "./components/Earth/EarthCard";
import { OrbitControls, ScrollControls } from "@react-three/drei";
import Mars from "./components/Mars/Mars";
import Jupiter from "./components/Jupiter/Jupiter";
import Saturn from "./components/Saturn/Saturn";
import Earth from "./components/Earth/Earth";
import Camera from "./pages/Camera";
import LoadingPage from "./pages/LoadingPage/LoadingPage";
import MarsCard from "./components/Mars/MarsCard";
import AfterEarthCard from "./components/AfterEarthCard";
import LandingPage from "./pages/LandingPage/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Planets = lazy(() => import("./pages/SolarSystem/Planets"));

function App() {
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    Planets?.preload?.();
  }, []);

  setTimeout(() => {
    setShowLoading(false);
  }, 6000);

  return (
    <>
      {/* {showLoading && <LoadingPage />} */}
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={<LandingPage />}
          />
          <Route
            path='/planets'
            element={
              <Suspense fallback={<LoadingPage />}>
                <Planets />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
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
