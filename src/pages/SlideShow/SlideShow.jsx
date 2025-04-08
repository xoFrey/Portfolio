import { Canvas } from "@react-three/fiber";
import Images from "./Images";
import "./SlideShow.css";
import Stars from "../../components/Stars";

const SlideShow = () => {
  const images = [
    "https://images.unsplash.com/photo-1743069956007-3bcb9b159cca?q=80&w=1910&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1663954862772-a29434a37222?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1731102310685-f080a97ab748?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1741632530035-c374e872ca95?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  return (
    <>
      <section className='slideshow-bg'>
        <Canvas>
          <Stars />
        </Canvas>
        <div className='slideshow'>
          <Images url={images} />
        </div>
      </section>
    </>
  );
};

export default SlideShow;
