import { ScrollControls, useScroll } from "@react-three/drei";
import Earth from "../components/Earth/Earth";
import EarthCard from "../components/Earth/EarthCard";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef, useState } from "react";

const EarthPage = () => {
  const { camera } = useThree();
  const scroll = useScroll();
  const earthRef = useRef();

  useFrame(() => {
    const scrollY = scroll.offset;

    // camera.position.z = 2.5 - scrollY * 3;
    // camera.position.x = scrollY * 3;
    // camera.position.y = -3 + scrollY * 20;
    // camera.rotation.y = (scrollY * Math.PI) / 3;
    // earthRef.current.position.z = -scrollY * 5;
    // earthRef.current.position.x = -1 + scrollY * 6;
  });

  return (
    <>
      <Earth earthRef={earthRef} />
      {/* <EarthCard /> */}
    </>
  );
};

export default EarthPage;
