import { Canvas } from "@react-three/fiber";
import Images from "./Images";
import "./SlideShow.css";
import Stars from "../../components/Stars";

const SlideShow = () => {
  const images = ["../MovieFlix.png", "../Silent Moon.png", "../PokeAPP.png"];

  const minis = [
    "../MovieFlix Logo.png",
    "../SilentMoonLogo.png",
    "../PokemonLogo.png",
  ];
  return (
    <>
      <section className='slideshow-bg'>
        <Canvas>
          <Stars />
        </Canvas>
        <div className='slideshow'>
          <Images
            url={images}
            preview={minis}
          />
        </div>
      </section>
    </>
  );
};

export default SlideShow;
