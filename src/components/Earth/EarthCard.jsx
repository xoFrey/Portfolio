import { Html, Text3D, useScroll } from "@react-three/drei";
import "./EarthCard.css";
import { a } from "@react-spring/three";
import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";

const EarthCard = () => {
  const scroll = useScroll();
  const cardRef = useRef();
  const { gl } = useThree();

  useFrame(() => {
    const scrollY = scroll.offset;
    // cardRef.current.position.z = scrollY * 4;
  });
  return (
    <a.mesh
      ref={cardRef}
      transparent
      visible={false}
      position={[0, 0, -3]}
      rotation={[-0.3, 0, 0]}>
      <Html
        scale={0.2}
        portal={{ current: scroll.fixed }}
        transform
        zIndexRange={[10, 0]}
        occlude={"blending"}
        sprite={true}
        className='card'>
        <h3>Info Card</h3>
        <p>Drag me around!</p>
      </Html>
    </a.mesh>
  );
};

export default EarthCard;
