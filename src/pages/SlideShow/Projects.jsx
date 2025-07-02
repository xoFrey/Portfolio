import { useEffect, useRef, useState } from "react";
import "./Projects.css";

const Projects = ({
  url,
  title,
  github,
  projectIndex,
  setProjectIndex,
  minis,
}) => {
  const [active, setActive] = useState(2);
  const [isClicked, setIsClicked] = useState(false);
  const itemsRef = useRef([]);

  useEffect(() => {
    loadShow();
  }, [active]);

  useEffect(() => {
    if (url[projectIndex]) {
      itemsRef.current = new Array(url[projectIndex].length).fill(null);
    }
    setActive(1);
  }, [projectIndex, url]);

  const loadShow = () => {
    const items = itemsRef.current;
    if (!items || items.length === 0) return;

    // Check if active index is valid
    if (active >= items.length || active < 0) return;

    // Check if the active element exists
    if (!items[active]) return;

    let stt = 0;

    // Active item - add null check
    if (items[active]) {
      items[active].style.transform = "none";
      items[active].style.zIndex = 1;
      items[active].style.filter = "none";
      items[active].style.opacity = 1;
    }

    // Items after active
    for (let i = active + 1; i < items.length; i++) {
      if (items[i]) {
        // Add null check
        stt++;
        items[i].style.transform = `translateX(${120 * stt}px) scale(${
          1 - 0.2 * stt
        }) perspective(16px) rotateY(-1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = "blur(5px)";
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
      }
    }

    // Items before active
    stt = 0;
    for (let i = active - 1; i >= 0; i--) {
      if (items[i]) {
        // Add null check
        stt++;
        items[i].style.transform = `translateX(${-120 * stt}px) scale(${
          1 - 0.2 * stt
        }) perspective(16px) rotateY(1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = "blur(5px)";
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
      }
    }
  };

  const handleNext = () => {
    setActive((prev) => (prev + 1) % itemsRef.current.length);
    setIsClicked(false);
  };

  const handlePrev = () => {
    setActive(
      (prev) => (prev - 1 + itemsRef.current.length) % itemsRef.current.length,
    );
    setIsClicked(false);
  };

  console.log(itemsRef.current.length);

  return (
    <>
      <section className='projects-slider'>
        {url[projectIndex].map((item, index) => (
          <>
            <div
              key={index}
              className='item'
              onClick={() => setIsClicked(!isClicked)}
              ref={(elem) => (itemsRef.current[index] = elem)}>
              <img
                src={item}
                alt={title}
              />
            </div>
          </>
        ))}
        <div
          onClick={() => setIsClicked(!isClicked)}
          className={`image-back${isClicked ? "" : " invisible"}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
          repellat nulla natus ducimus vitae veritatis. Voluptates nobis amet
          dignissimos
        </div>

        <button
          className='next'
          onClick={handleNext}>
          next
        </button>
        <button
          className='prev'
          onClick={handlePrev}>
          prev
        </button>
      </section>
      <div className='index-img'>
        {minis.map((url, index) => (
          <img
            className={` mini-img`}
            key={index}
            src={url}
            onClick={() => setProjectIndex(index)}
          />
        ))}
      </div>
    </>
  );
};

export default Projects;
