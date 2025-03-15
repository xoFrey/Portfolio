import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const Jupiter = () => {
  const jupiterRef = useRef();
  const jupiterTexture = useLoader(THREE.TextureLoader, "/3D/jupiter.jpg");

  useFrame(() => {
    jupiterRef.current.rotation.y -= 0.001;
  });
  return (
    <>
      <mesh
        ref={jupiterRef}
        position={[-70, 60, -90]}>
        <sphereGeometry args={[11.21, 100, 100]} />
        <meshBasicMaterial
          map={jupiterTexture}
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

export default Jupiter;
