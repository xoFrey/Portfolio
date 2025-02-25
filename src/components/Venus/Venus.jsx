import { TransformControls, useScroll } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const Venus = () => {
  const venusRef = useRef();
  const venusTexture = useLoader(THREE.TextureLoader, "/3D/venus.jpg");
  const scroll = useScroll();
  useFrame(() => {
    const scrollY = scroll.offset;
    venusRef.current.rotation.y += 0.001;
    venusRef.current.rotation.x += 0.001;

    // radius * Math.sin / cos (scrollY * speed* Math.PI)

    // venusRef.current.position.z = 2 - scrollY * 3;
    // venusRef.current.position.y = 1 * Math.tan(scrollY * 3 * Math.PI);
  });

  return (
    <>
      {/* <TransformControls mode='translate'> */}
      <mesh
        ref={venusRef}
        position={[2, 0, -5]}>
        {/* <sphereGeometry args={[0.95, 100, 100]} /> */}
        <sphereGeometry args={[0.1, 100, 100]} />
        <meshBasicMaterial
          map={venusTexture}
          side={THREE.DoubleSide}
          stencilWrite={true}
          stencilRef={1}
          stencilFunc={THREE.AlwaysStencilFunc}
          stencilZPass={THREE.ReplaceStencilOp}
        />
      </mesh>
      {/* </TransformControls> */}
    </>
  );
};

export default Venus;
