import "./SlideShow.css";
import Projects from "./Projects";
import { useState } from "react";

const SlideShow = () => {
  const [projectIndex, setProjectIndex] = useState(0);
  const projects = {
    titles: ["MovieFlix", "Silent Moon", "Pokemon", "Tasty"],
    url: [
      ["../Screenshot1.jpg", "../Screenshot2.jpg", "../Screenshot3.jpg"],
      [
        "../Landingpage.png",
        "../Login.png",
        "../Home.png",
        "../Yoga.png",
        "../Spotify.png",
        "../SpotifyPlayer.png",
        "../Profile.png",
      ],
      [
        "../HomeLight.png",
        "../HomeDark.png",
        "../SearchLight.png",
        "../SearchDark.png",
        "../DetailLight.png",
        "../DetailDark.png",
      ],
      [
        "../loading.png",
        "../starting.png",
        "../tastyhome.png",
        "../searchbar.png",
        "../search.png",
        "../instructions.png",
        "../ingredients.png",
        "../filter.png",
      ],
    ],
    github: [
      "https://github.com/xoFrey/MovieFlix",
      "https://github.com/xoFrey/Silent_Moon",
      "https://github.com/xoFrey/PokeDex",
      "https://github.com/xoFrey/TastyApp",
    ],
  };

  const minis = [
    "../MovieFlix Logo.png",
    "../SilentMoonLogo.png",
    "../PokemonLogo.png",
    "../TastyLogo.png",
  ];
  console.log(projectIndex);
  return (
    <>
      <section>
        <div className='slideshow'>
          <Projects
            url={projects.url}
            title={projects.titles}
            github={projects.github}
            projectIndex={projectIndex}
            setProjectIndex={setProjectIndex}
            minis={minis}
          />
        </div>
      </section>
    </>
  );
};

export default SlideShow;
