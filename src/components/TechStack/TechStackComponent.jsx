import { Decal, Html, PresentationControls } from "@react-three/drei";
import "./TechStackComponent.css";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const TechStackComponent = ({ texture, position, name }) => {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  useEffect(() => {
    if (texture) {
      texture.flipY = false;
      texture.needsUpdate = true;
    }
  }, [texture]);

  const handleDown = () => {
    setShowInfo(true);
    console.log(showInfo);
  };
  const handleUp = () => {
    setShowInfo(false);
  };

  return (
    <group position={position}>
      {showInfo && (
        <Html
          center={true}
          position={[0, 1.3, 0]}
          className='techstack-text'>
          {name}
        </Html>
      )}
      <PresentationControls
        cursor={true}
        config={{ mass: 2, tension: 500 }}
        snap={{ mass: 4, tension: 1500 }}
        rotation={[0, 0, 0]}
        polar={[-Math.PI / 3, Math.PI / 3]}
        azimuth={[-Math.PI / 1.4, Math.PI / 2]}>
        <mesh
          ref={meshRef}
          castShadow
          receiveShadow
          onPointerDown={() => handleDown()}
          onPointerUp={() => handleUp()}>
          <icosahedronGeometry args={[0.9, 1]} />
          <meshStandardMaterial
            color={showInfo ? "#ffd68f" : "#9bbacc"}
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
      </PresentationControls>
    </group>
  );
};

export default TechStackComponent;
