import { useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import "./Earth.css";
import { useRef } from "react";

const Earth = () => {
  const earthTexture = useLoader(THREE.TextureLoader, "/3D/earth.jpg");
  const earthRef = useRef();

  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.002;
    }
  });

  return (
    <>
      <mesh
        ref={earthRef}
        position={[-15, 0, -60]}>
        <sphereGeometry args={[10, 100, 100]} />
        <meshBasicMaterial
          map={earthTexture}
          side={THREE.DoubleSide}
        />
      </mesh>
    </>
  );
};

export default Earth;
