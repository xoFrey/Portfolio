import { OrbitControls } from "@react-three/drei";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const Saturn = () => {
  const saturnTexture = useLoader(THREE.TextureLoader, "/3D/saturn.jpg");
  const saturnringtexture = useLoader(
    THREE.TextureLoader,
    "/3D/saturnring.png",
  );
  const saturnRef = useRef();
  useFrame(() => {
    saturnRef.current.rotation.y += 0.001;
    // saturnRef.current.rotation.x += 0.01;
  });

  return (
    <group
      position={[0, 50, -200]}
      rotation={[0.3, 0, 0]}
      ref={saturnRef}>
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[9.45, 100, 100]} />
        <meshBasicMaterial
          map={saturnTexture}
          side={THREE.DoubleSide}
          // stencilWrite={true}
          // stencilRef={1}
          // stencilFunc={THREE.AlwaysStencilFunc}
          // stencilZPass={THREE.ReplaceStencilOp}
        />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ambientLight />
        <ringGeometry args={[10.4, 22, 128]} />
        <meshStandardMaterial
          transparent
          map={saturnringtexture}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
};

export default Saturn;
