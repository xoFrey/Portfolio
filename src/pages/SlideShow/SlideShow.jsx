import "./SlideShow.css";
import Projects from "./Projects";
import { useState } from "react";

const SlideShow = () => {
  const [projectIndex, setProjectIndex] = useState(0);
  const projects = {
    titles: ["MovieFlix", "Silent Moon", "Pokemon", "Tasty"],
    url: [
      [
        "../img/Screenshot1.jpg",
        "../img/Screenshot2.jpg",
        "../img/Screenshot3.jpg",
      ],
      [
        "../img/Landingpage.png",
        "../img/Login.png",
        "../img/Home.png",
        "../img/Yoga.png",
        "../img/Spotify.png",
        "../img/SpotifyPlayer.png",
        "../img/Profile.png",
      ],
      [
        "../img/HomeLight.png",
        "../img/HomeDark.png",
        "../img/SearchLight.png",
        "../img/SearchDark.png",
        "../img/DetailLight.png",
        "../img/DetailDark.png",
      ],
      [
        "../img/loading.png",
        "../img/starting.png",
        "../img/tastyhome.png",
        "../img/searchbar.png",
        "../img/search.png",
        "../img/instructions.png",
        "../img/ingredients.png",
        "../img/filter.png",
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
    "../img/MovieFlix Logo.png",
    "../img/SilentMoonLogo.png",
    "../img/PokemonLogo.png",
    "../img/TastyLogo.png",
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
