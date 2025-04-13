import { useState } from "react";
import "./SlideShow.css";
const Images = ({ Imgurl, preview }) => {
  const [projectIndex, setProjectIndex] = useState(0);

  const showNextProject = () => {
    setProjectIndex((index) => (index === Imgurl.length - 1 ? 0 : index + 1));
  };

  const showPrevProject = () => {
    setProjectIndex((index) => (index === 0 ? Imgurl.length - 1 : index - 1));
  };

  return (
    <section className='slider'>
      <div className='slider-wrap'>
        <div
          className='image-strip'
          style={{ transform: `translateX(${-100 * projectIndex}%)` }}>
          {Imgurl.map((projectImages, index) => (
            <div
              className='project-slide'
              key={index}>
              {projectImages.map((url, idx) => (
                <div
                  className='project-img'
                  key={idx}>
                  <img
                    src={url}
                    alt={`Projekt ${index + 1} Bild ${idx + 1}`}
                  />
                </div>
              ))}
            </div>
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
            onClick={() => setProjectIndex(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Images;
