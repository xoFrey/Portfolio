import { useState } from "react";
import "./SlideShow.css";
const Images = ({ url }) => {
  const [imageIndex, setImageIndex] = useState(0);

  const showNextImage = () => {
    setImageIndex((index) => {
      if (index === url.length - 1) return 0;
      return index + 1;
    });
  };
  const showPrevImage = () => {
    setImageIndex((index) => {
      if (index === 0) return url.length - 1;
      return index - 1;
    });
  };

  return (
    <section className='slider'>
      <div className='slider-wrap'>
        <div
          className='image-strip'
          style={{ transform: `translateX(${-100 * imageIndex}%)` }}>
          {url.map((url) => (
            <img
              key={url}
              src={url}
            />
          ))}
        </div>
      </div>
      <button
        onClick={showNextImage}
        className='slider-button right-btn'>
        Next
      </button>
      <button
        onClick={showPrevImage}
        className='slider-button left-btn'>
        Previous
      </button>
      <div className='index-img'>
        {url.map((url, index) => (
          <img
            className={`${index === imageIndex ? "active" : ""} mini-img`}
            key={index}
            src={url}
            onClick={() => setImageIndex(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Images;
