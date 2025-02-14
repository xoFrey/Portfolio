import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const Mars = () => {
  const marsRef = useRef();
  const marsTexture = useLoader(THREE.TextureLoader, "/3D/mars.jpg");

  useFrame(() => {
    marsRef.current.rotation.y += 0.001;
    marsRef.current.rotation.x += 0.001;
  });
  return (
    <>
      <mesh
        ref={marsRef}
        position={[-1.2, 3, 0]}>
        <sphereGeometry args={[0.7, 100, 100]} />
        <meshBasicMaterial
          map={marsTexture}
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

export default Mars;
