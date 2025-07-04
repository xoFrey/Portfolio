import { useEffect, useState } from "react";
import "./SlideShow.css";
import Projects from "./Projects";

const Images = ({ images, preview }) => {
  const [projectIndex, setProjectIndex] = useState(0);
  const [buttonPressed, setButtonPressed] = useState(false);

  useEffect(() => {
    if (buttonPressed) {
      const timeout = setTimeout(() => {
        setButtonPressed(false);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [buttonPressed]);

  return (
    <section className='slider'>
      <div className='slider-wrap'>
        <Projects />
      </div>

      <div className='index-img'>
        {preview.map((url, index) => (
          <img
            className={`${index === projectIndex ? "active" : ""} mini-img`}
            key={index}
            src={url}
            onClick={() => (setProjectIndex(index), setButtonPressed(true))}
          />
        ))}
      </div>
    </section>
  );
};

export default Images;
