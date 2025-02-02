import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Ghost } from "../components/Ghost";
import "./Techs.css";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useRef, useEffect, useState } from "react";
import { Sausage } from "../components/Sausage";

const Techs = () => {
  return (
    <section className='techs'>
      <Canvas>
        <Scene />
        <Sausage />
      </Canvas>
    </section>
  );
};

const Scene = () => {
  const { camera } = useThree();
  const [targetPosition, setTargetPosition] = useState({ x: 0, y: 1, z: 4 });

  console.log(camera.position);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setTargetPosition({
        x: scrollY * 0.6,
        y: 1 + scrollY * 0.5, // Slight upward movement
        z: 4 + scrollY * 0.1, // Moves back on scroll
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useFrame(() => {
    // Smoothly interpolate the camera position
    camera.position.x += (targetPosition.x - camera.position.x) * 0.1;
    camera.position.y += (targetPosition.y - camera.position.y) * 0.1;
    camera.position.z += (targetPosition.z - camera.position.z) * 0.1;
    camera.lookAt(0, 0, 0); // Keeps the camera focused on the scene
  });

  return (
    <>
      {/* <OrbitControls /> */}
      <ambientLight intensity={1.5} />
      <spotLight
        intensity={100}
        distance={10}
        position={[1, 3, 7]}
      />
      <gridHelper />
      <Ghost />
      <PerspectiveCamera
        position={[0, 1, 4]}
        fov={90}
      />
    </>
  );
};

export default Techs;
