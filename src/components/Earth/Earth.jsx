import { useFrame, useLoader, useThree } from "@react-three/fiber";
import * as THREE from "three";
import "./Earth.css";
import { useRef, useState } from "react";
import { PerspectiveCamera, useScroll } from "@react-three/drei";

const Earth = ({ earthRef }) => {
  const earthTexture = useLoader(THREE.TextureLoader, "/3D/earth.jpg");

  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.002;
    }
  });
  return (
    <>
      <mesh
        ref={earthRef}
        position={[-1, 0, 0]}>
        <sphereGeometry args={[0.7, 100, 100]} />
        <meshBasicMaterial
          map={earthTexture}
          side={THREE.DoubleSide}
          stencilWrite={true}
          stencilRef={1}
          stencilFunc={THREE.AlwaysStencilFunc}
          stencilZPass={THREE.ReplaceStencilOp}
        />
      </mesh>
    </>
  );
};

export default Earth;
