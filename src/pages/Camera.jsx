import { useScroll } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { lerp } from "three/src/math/MathUtils";
import * as THREE from "three";

const Camera = () => {
  const { camera } = useThree();
  const scroll = useScroll();

  useFrame(() => {
    const scrollY = scroll.offset;

    const targetRotation = scrollY < 0.5 ? scrollY * 1 : -1;
    camera.rotation.y = lerp(camera.rotation.y, targetRotation, 0.01);
  });

  console.log(camera.position);

  return <></>;
};

export default Camera;
