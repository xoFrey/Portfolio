import { useFrame, useLoader, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const Uranus = () => {
  const uranusTexture = useLoader(THREE.TextureLoader, "/3D/uranus.jpg");
  const uranusringtexture = useLoader(
    THREE.TextureLoader,
    "/3D/uranusring.png",
  );
  const uranusRef = useRef();

  useFrame(() => {
    if (uranusRef.current) {
      uranusRef.current.rotation.y += 0.002;
    }
  });
  return (
    <group
      position={[-10.0, -120, 0.0]}
      ref={uranusRef}>
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[4.01, 100, 100]} />
        <meshBasicMaterial
          map={uranusTexture}
          side={THREE.DoubleSide}
          stencilWrite={true}
          stencilRef={1}
          stencilFunc={THREE.AlwaysStencilFunc}
          stencilZPass={THREE.ReplaceStencilOp}
        />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ambientLight />
        <ringGeometry args={[4.4, 5.2, 128]} />
        <meshStandardMaterial
          transparent
          map={uranusringtexture}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
};

export default Uranus;
