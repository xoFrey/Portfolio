import { ScrollControls, useScroll } from "@react-three/drei";
import Earth from "../components/Earth/Earth";
import EarthCard from "../components/Earth/EarthCard";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";

const EarthPage = () => {
  const earthCardRef = useRef();
  const { camera } = useThree();
  const scroll = useScroll();
  const initialZ = useRef(camera.position.z); // Save initial position

  useFrame(() => {
    camera.position.z = 5 + scroll.offset * 50; // Adjust zoom effect
  });

  return (
    <>
      <EarthCard ref={earthCardRef} />
      <Earth />
    </>
  );
};

export default EarthPage;
