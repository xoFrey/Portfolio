import { Canvas } from "@react-three/fiber";
import Images from "./Images";
import "./SlideShow.css";
import Stars from "../../components/Stars";
import { RiArrowLeftLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const SlideShow = () => {
  const navigate = useNavigate();
  const images = {
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

  return (
    <>
      <section className='slideshow-bg'>
        <Canvas>
          <Stars />
        </Canvas>{" "}
        <div
          className='go-back-btn'
          onClick={() => navigate("/")}>
          <RiArrowLeftLine
            fill='white'
            size={"30px"}
          />
        </div>
        <div className='slideshow'>
          <Images
            images={images}
            preview={minis}
          />
        </div>
      </section>
    </>
  );
};

export default SlideShow;
