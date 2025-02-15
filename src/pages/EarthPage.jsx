import { ScrollControls, useScroll } from "@react-three/drei";
import Earth from "../components/Earth/Earth";
import EarthCard from "../components/Earth/EarthCard";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";

const EarthPage = () => {
  const { camera } = useThree();
  const scroll = useScroll();

  useEffect(() => {
    console.log(camera.position);
  }, [camera.position, scroll]);

  useFrame(() => {
    // const scrollY = scroll.offset;
    // camera.position.x = -29.5;
    // camera.position.z = 1;
    // camera.position.y = 30.4 - scrollY * 10;
    // camera.rotation.y = -(scrollY * Math.PI) / 2;
  });

  return (
    <>
      <Earth />
      {/* <EarthCard /> */}
    </>
  );
};

export default EarthPage;
