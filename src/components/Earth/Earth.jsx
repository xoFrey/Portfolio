import { OrbitControls } from "@react-three/drei";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

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
        position={[-10.0, -40, 0.0]}>
        <sphereGeometry args={[1, 100, 100]} />
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
