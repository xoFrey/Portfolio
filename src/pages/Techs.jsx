import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { Ghost } from "../components/Ghost";
import "./Techs.css";
import {
  OrbitControls,
  PerspectiveCamera,
  ScrollControls,
  useScroll,
  useTexture,
} from "@react-three/drei";
import { useRef, useEffect, useState } from "react";
import { Sausage } from "../components/Sausage";
import * as THREE from "three";
import SolarSystem from "./SolarSystem";

const Techs = () => {
  const texture = useLoader(THREE.TextureLoader, "/3D/mercury.jpg");
  const normals = useLoader(THREE.TextureLoader, "/3D/normal.png");
  return (
    // <section className='techs'>
    //   <Canvas>
    <ScrollControls damping={0.3}>
      <Scene />
      {/* <mesh position={[5, 2, 2]}>
        <sphereGeometry args={[5, 600, 600]} />
        <meshStandardMaterial
          normalMap={normals}
          map={texture}
          displacementScale={0.2}
        />
      </mesh> */}
      <Sausage />
      <SolarSystem />
    </ScrollControls>
    //   </Canvas>
    // </section>
  );
};

const Scene = () => {
  const { camera } = useThree();
  const scroll = useScroll();

  useFrame(() => {
    const scrollY = scroll.offset;
    camera.position.x = scrollY * 50;
    camera.position.y = 1 + scrollY * 15;
    camera.position.z = 4 + scrollY * 10;
    camera.lookAt(0, 0, 0);
  });

  return (
    <>
      {/* <color
        args={[0, 0, 0]}
        attach='background'
      /> */}
      <ambientLight intensity={1} />
      <spotLight
        intensity={5}
        position={[9, 5, 9]}
      />
      <spotLight
        intensity={100}
        distance={10}
        position={[1, 3, 7]}
      />
      <gridHelper />
      {/* <OrbitControls /> */}
      <Ghost />
    </>
  );
};

export default Techs;
