import { useEffect, useState } from "react";
import "./SlideShow.css";
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
        <h2 className={`title ${buttonPressed ? "slide-in" : ""}`}>
          {images.titles[projectIndex]}
        </h2>
        <div
          className='image-strip'
          style={{ transform: `translateX(${-100 * projectIndex}%)` }}>
          {images.url.map((projectImages, index) => (
            <>
              <div
                className='project-slide'
                key={index}>
                {projectImages.map((url, idx) => (
                  <>
                    <div
                      className='project-img'
                      key={idx}>
                      <img
                        src={url}
                        alt={`Projekt ${index + 1} Bild ${idx + 1}`}
                      />
                    </div>
                  </>
                ))}
              </div>
            </>
          ))}
        </div>
      </div>

      <button
        onClick={showNextProject}
        className='slider-button right-btn'>
        Next
      </button>
      <button
        onClick={showPrevProject}
        className='slider-button left-btn'>
        Previous
      </button>

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
