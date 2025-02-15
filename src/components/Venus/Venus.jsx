import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const Venus = () => {
  const venusRef = useRef();
  const venusTexture = useLoader(THREE.TextureLoader, "/3D/venus.jpg");

  useFrame(() => {
    venusRef.current.rotation.y += 0.001;
    venusRef.current.rotation.x += 0.001;
  });
  return (
    <>
      <mesh
        ref={venusRef}
        position={[25, 0, 0]}>
        <sphereGeometry args={[0.95, 100, 100]} />
        <meshBasicMaterial
          map={venusTexture}
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

export default Venus;
