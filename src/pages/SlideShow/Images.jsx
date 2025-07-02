import { useEffect, useState } from "react";
import "./SlideShow.css";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";
import Projects from "./Projects";

const Images = ({ images, preview }) => {
  const [projectIndex, setProjectIndex] = useState(0);
  const [buttonPressed, setButtonPressed] = useState(false);
  const [imageIndex, setImageIndex] = useState();
  const [zoomImage, setZoomImage] = useState(false);

  useEffect(() => {
    if (buttonPressed) {
      const timeout = setTimeout(() => {
        setButtonPressed(false);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [buttonPressed]);

  const showNextProject = () => {
    setButtonPressed(true);
    setProjectIndex((index) =>
      index === images.url.length - 1 ? 0 : index + 1,
    );
  };

  const showPrevProject = () => {
    setButtonPressed(true);
    setProjectIndex((index) =>
      index === 0 ? images.url.length - 1 : index - 1,
    );
  };

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
