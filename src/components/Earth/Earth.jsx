import { useFrame, useLoader, useThree } from "@react-three/fiber";
import * as THREE from "three";
import "./Earth.css";
import {
  OrbitControls,
  OrthographicCamera,
  SpotLight,
  useScroll,
} from "@react-three/drei";
import { useEffect, useRef } from "react";

const Earth = () => {
  const earthTexture = useLoader(THREE.TextureLoader, "/3D/earth.jpg");
  const earthRef = useRef();
  const cameraRef = useRef();

  const { camera } = useThree();
  const scroll = useScroll();

  useFrame(() => {
    const scrollY = scroll.offset;
    camera.position.x = scrollY * 50;
    camera.position.y = 1 + scrollY * 15;
    camera.position.z = 4 + scrollY * 10;
    camera.lookAt(0, 0, 0);
  });

  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.002;
    }
  });

  console.log(camera.position);

  return (
    <>
      <mesh
        ref={earthRef}
        position={[-4, -3, -15]}>
        <sphereGeometry args={[3, 100, 100]} />
        <meshBasicMaterial
          map={earthTexture}
          // side={THREE.DoubleSide}
        />
      </mesh>
    </>
  );
};

export default Earth;
