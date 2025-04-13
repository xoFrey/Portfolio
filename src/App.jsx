import { Canvas } from "@react-three/fiber";
import "./App.css";
import Stars from "./components/Stars";
import { lazy, Suspense, useEffect, useRef, useState } from "react";
import EarthCard from "./components/Earth/EarthCard";
import { OrbitControls, Preload, ScrollControls } from "@react-three/drei";
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
import SlideShow from "./pages/SlideShow/SlideShow";
import Planets from "./pages/SolarSystem/Planets";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={<LandingPage />}
          />
          <Route
            path='/planets'
            element={<Planets />}
          />
          <Route
            path='/projects'
            element={<SlideShow />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
