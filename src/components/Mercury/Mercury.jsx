import { useScroll } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const Mercury = () => {
  const mercuryRef = useRef();
  const mercuryTexture = useLoader(THREE.TextureLoader, "/3D/mercury.jpg");
  const scroll = useScroll();

  useFrame(() => {
    mercuryRef.current.rotation.y += 0.001;
    mercuryRef.current.rotation.x += 0.001;

    // mercuryRef.current.position.z = scroll.offset * 4;
  });
  return (
    <>
      <mesh
        ref={mercuryRef}
        position={[0, 0, 0]}>
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
