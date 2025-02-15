import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const Sun = () => {
  const sunRef = useRef();
  const sunTexture = useLoader(THREE.TextureLoader, "/3D/sun.jpg");

  useFrame(() => {
    sunRef.current.rotation.y += 0.001;
    sunRef.current.rotation.x += 0.001;
  });
  return (
    <>
      <mesh
        ref={sunRef}
        position={[150, 0, 0]}>
        <sphereGeometry args={[109, 100, 100]} />
        <meshBasicMaterial
          map={sunTexture}
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

export default Sun;
