import { useEffect, useRef, useState } from "react";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import projectsData from "../../data/projects.json";
import "./Projects.css";
import { IoCloseOutline } from "react-icons/io5";
import { SiGithub } from "react-icons/si";
import { Link } from "react-router-dom";

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
  const projects = projectsData.apps;

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

    if (active >= items.length || active < 0) return;

    if (!items[active]) return;

    let stt = 0;

    if (items[active]) {
      items[active].style.transform = "none";
      items[active].style.zIndex = 1;
      items[active].style.filter = "none";
      items[active].style.opacity = 1;
    }

    for (let i = active + 1; i < items.length; i++) {
      if (items[i]) {
        stt++;
        items[i].style.transform = `translateX(${120 * stt}px) scale(${
          1 - 0.2 * stt
        }) perspective(16px) rotateY(-1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = "blur(5px)";
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
      }
    }

    stt = 0;
    for (let i = active - 1; i >= 0; i--) {
      if (items[i]) {
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

  return (
    <>
      <section className='projects-slider'>
        {url[projectIndex]?.map((item, index) => (
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
        ))}
        <div className={`image-back ${isClicked ? "" : " invisible"}`}>
          <div className='info-card'>
            <div
              className='close-btn'
              onClick={() => setIsClicked(!isClicked)}>
              <IoCloseOutline fill='white' />
            </div>
            <div className='info-card-title'>
              <h3>{projects[projectIndex]?.appName}</h3>
              <a
                href={github[projectIndex]}
                target='_blank'
                rel='noopener noreferrer'>
                <SiGithub />
              </a>
            </div>
            <p>{projects[projectIndex]?.description}</p>
            <div>
              <div className='techstack-info'>
                <h4>Tech:</h4>
                {projects[projectIndex]?.techStack.map((item, index) => (
                  <ul
                    className='bulletpoints'
                    key={index}>
                    <li>{item}</li>
                  </ul>
                ))}
              </div>
              <div className='features'>
                <div className='features-header'>
                  <h4>Features:</h4>
                </div>

                {projects[projectIndex]?.features?.current &&
                  Object.entries(projects[projectIndex].features.current).map(
                    ([featureName, featureItems]) => (
                      <div
                        key={featureName}
                        className='feature-box'>
                        <h5>{featureName}:</h5>
                        <ul>
                          {featureItems.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ),
                  )}
              </div>
            </div>
          </div>
        </div>

        <div
          className='slide-arrows-right'
          onClick={handleNext}>
          <div className='next next-first'>
            <SlArrowRight
              fill='white'
              size='40px'
            />
          </div>
          <div className='next next-second'>
            <SlArrowRight
              fill='white'
              size='40px'
            />
          </div>
        </div>
        <div
          className='slide-arrows'
          onClick={handlePrev}>
          <div className='prev prev-first'>
            <SlArrowLeft
              fill='white'
              size={"40px"}
            />
          </div>
          <div className='prev prev-second'>
            <SlArrowLeft
              fill='white'
              size={"40px"}
            />
          </div>
        </div>
      </section>
      <div className='index-img'>
        {minis.map((url, index) => (
          <img
            className={`${index === projectIndex ? "active" : ""} mini-img`}
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
