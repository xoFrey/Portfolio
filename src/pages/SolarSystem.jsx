import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import * as THREE from "three";
import "./SolarSystem.css";
import { Line, OrbitControls } from "@react-three/drei";

import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { useMemo, useRef } from "react";

const SolarSystem = () => {
  //   const { camera } = useThree();

  //   console.log(camera.position);

  const suntexture = useLoader(THREE.TextureLoader, "/3D/sun.jpg");
  const mercurytexture = useLoader(THREE.TextureLoader, "/3D/mercury.jpg");
  const venustexture = useLoader(THREE.TextureLoader, "/3D/venusatmo.jpg");
  const earthtexture = useLoader(THREE.TextureLoader, "/3D/earth.jpg");
  const marstexture = useLoader(THREE.TextureLoader, "/3D/mars.jpg");
  const jupitertexture = useLoader(THREE.TextureLoader, "/3D/jupiter.jpg");
  const saturntexture = useLoader(THREE.TextureLoader, "/3D/saturn.jpg");
  const saturnringtexture = useLoader(
    THREE.TextureLoader,
    "/3D/saturnring.png",
  );
  const uranustexture = useLoader(THREE.TextureLoader, "/3D/uranus.jpg");
  const uranusringtexture = useLoader(
    THREE.TextureLoader,
    "/3D/uranusring.png",
  );
  const neptunetexture = useLoader(THREE.TextureLoader, "/3D/neptune.jpg");

  const planetRefs = useRef([
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
  ]);
  const planetTextures = [
    mercurytexture,
    venustexture,
    earthtexture,
    marstexture,
    jupitertexture,
    saturntexture,
    uranustexture,
    neptunetexture,
  ];
  const planetRadii = [4, 7, 10, 12, 15, 19, 25, 30];
  const planetSpeeds = [0.5, 0.3, 0.2, 0.15, 0.1, 0.08, 0.06, 0.05];

  const trails = useMemo(
    () =>
      planetRadii.map((radius) => {
        const points = [];
        for (let i = 0; i <= 100; i++) {
          const angle = (i / 100) * Math.PI * 2;
          points.push(
            new THREE.Vector3(
              radius * Math.cos(angle),
              0,
              radius * Math.sin(angle),
            ),
          );
        }
        return points;
      }),
    [planetRadii],
  );

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    planetRefs.current.forEach((ref, index) => {
      const radius = planetRadii[index];
      const speed = planetSpeeds[index];
      ref.current.position.x = radius * Math.cos(elapsedTime * speed);
      ref.current.position.z = radius * Math.sin(elapsedTime * speed);
      console.log(ref.current);
    });
  });

  return (
    <>
      {/* <color
        args={[0, 0, 0]}
        attach='background'
      /> */}
      <ambientLight intensity={4} />
      <OrbitControls />
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[2, 500, 500]} />
        <meshStandardMaterial
          map={suntexture}
          side={THREE.DoubleSide}
        />
      </mesh>
      {planetRefs.current.map((ref, index) => (
        <mesh
          key={index}
          ref={ref}>
          <sphereGeometry args={[1, 500, 500]} />
          <meshStandardMaterial
            map={planetTextures[index]}
            side={THREE.DoubleSide}
          />
          {index === 5 && (
            <mesh rotation={[Math.PI / 2, 0, 0]}>
              <ringGeometry args={[1.2, 2, 64]} />
              <meshStandardMaterial
                map={saturnringtexture}
                side={THREE.DoubleSide}
              />
            </mesh>
          )}
          {index === 6 && (
            <mesh rotation={[Math.PI / 2, 0, 0]}>
              <ringGeometry args={[1.2, 2, 64]} />
              <meshStandardMaterial
                map={uranusringtexture}
                side={THREE.DoubleSide}
                transparent
              />
            </mesh>
          )}
        </mesh>
      ))}
      {trails.map((points, index) => (
        <Line
          key={index}
          points={points}
          color='grey'
          lineWidth={0.6}
        />
      ))}
      {/* <EffectComposer>
        <Bloom
          luminanceThreshold={0}
          luminanceSmoothing={0.1}
          height={900}
          kernelSize={3}
        />
      </EffectComposer> */}
    </>
  );
};

export default SolarSystem;
