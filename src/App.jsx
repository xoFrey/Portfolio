import "./App.css";
import LandingPage from "./pages/LandingPage/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SlideShow from "./pages/SlideShow/SlideShow";
import Planets from "./pages/Journey/Planets";

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
