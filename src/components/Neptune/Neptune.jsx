import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const Neptune = () => {
  const neptuneRef = useRef();
  const neptuneTexture = useLoader(THREE.TextureLoader, "/3D/neptune.jpg");

  useFrame(() => {
    neptuneRef.current.rotation.y += 0.001;
    neptuneRef.current.rotation.x += 0.001;
  });
  return (
    <>
      <mesh
        ref={neptuneRef}
        position={[0.0, -140, -10.0]}>
        <sphereGeometry args={[3.88, 100, 100]} />
        <meshBasicMaterial
          map={neptuneTexture}
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

export default Neptune;
