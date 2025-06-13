import { Decal, TransformControls, useCursor } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const TechStackComponent = ({ texture, position }) => {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  const isDragging = useRef(false);
  const lastX = useRef(0);

  useEffect(() => {
    if (texture) {
      texture.flipY = false;
      texture.needsUpdate = true;
    }
  }, [texture]);

  const handlePointerDown = (e) => {
    isDragging.current = true;
    lastX.current = e.clientX;
  };

  const handlePointerUp = () => {
    isDragging.current = false;
  };

  const handlePointerMove = (e) => {
    if (isDragging.current && meshRef.current) {
      const deltaX = e.clientX - lastX.current;
      meshRef.current.rotation.y += deltaX * 0.01;
      lastX.current = e.clientX;
    }
  };

  useCursor(hovered);
  return (
    <group>
      <mesh
        ref={meshRef}
        position={position}
        castShadow
        receiveShadow
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp} // stop dragging if mouse leaves
        onPointerMove={handlePointerMove}>
        <icosahedronGeometry args={[0.9, 1]} />
        <meshStandardMaterial
          color={hovered ? "#ffd68f" : "#9bbacc"}
          flatShading
          side={THREE.DoubleSide}
        />
        <Decal
          polygonOffsetFactor={-0}
          position={[0, 0, 1]}
          scale={1}
          map={texture}
        />
      </mesh>
    </group>
  );
};

export default TechStackComponent;
