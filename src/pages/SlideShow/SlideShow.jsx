import { Canvas } from "@react-three/fiber";
import Images from "./Images";
import "./SlideShow.css";
import Stars from "../../components/Stars";

const SlideShow = () => {
  const images = [
    ["../Screenshot1.jpg", "../Screenshot2.jpg", "../Screenshot3.jpg"],
    ["../Screenshot3.jpg", "../Screenshot1.jpg", "../Screenshot2.jpg"],
  ];

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
        </Canvas>
        <div className='slideshow'>
          <Images
            Imgurl={images}
            preview={minis}
          />
        </div>
      </section>
    </>
  );
};

export default SlideShow;
