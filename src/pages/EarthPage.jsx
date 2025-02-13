import { ScrollControls, useScroll } from "@react-three/drei";
import Earth from "../components/Earth/Earth";
import EarthCard from "../components/Earth/EarthCard";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef, useState } from "react";

const EarthPage = () => {
  const { camera } = useThree();
  const scroll = useScroll();

  useFrame(() => {
    const scrollY = scroll.offset;
    camera.position.x = -scrollY * 30;
    camera.position.y = -scrollY * 20;
    camera.position.z = 4 + scrollY * 130;
    camera.lookAt(0, 0, 0);
  });

  return (
    <>
      <Earth />
    </>
  );
};

export default EarthPage;
