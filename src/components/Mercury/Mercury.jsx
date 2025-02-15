import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const Mercury = () => {
  const mercuryRef = useRef();
  const mercuryTexture = useLoader(THREE.TextureLoader, "/3D/mercury.jpg");

  useFrame(() => {
    mercuryRef.current.rotation.y += 0.001;
    mercuryRef.current.rotation.x += 0.001;
  });
  return (
    <>
      <mesh
        ref={mercuryRef}
        position={[30, 0, 0]}>
        <sphereGeometry args={[0.38, 100, 100]} />
        <meshBasicMaterial
          map={mercuryTexture}
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

export default Mercury;
