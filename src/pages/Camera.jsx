import { useScroll } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo } from "react";
import * as THREE from "three";

const Camera = () => {
  const { camera } = useThree();
  const scroll = useScroll();

  const curve = useMemo(() => {
    return new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, 0.5, 3),
      new THREE.Vector3(0, 0.5, 2),
      new THREE.Vector3(0, 0.5, 1.5),
      new THREE.Vector3(-1.06, 0.4, 1.06),
      new THREE.Vector3(-1.5, 0.3, 0),
      new THREE.Vector3(-1.06, 0.2, -1.06),
      new THREE.Vector3(0, 0.1, -1.5),
      new THREE.Vector3(0, 0, -3),
      new THREE.Vector3(1.5, 0, -4.5),

      new THREE.Vector3(0, 2, -10),
      new THREE.Vector3(0, 6, -25),
      new THREE.Vector3(0, 12, -50),
      new THREE.Vector3(0, 18, -80),
      new THREE.Vector3(0, 25, -110),
      new THREE.Vector3(0, 32, -140),
      new THREE.Vector3(0, 40, -170),
      new THREE.Vector3(0, 50, -200),
    ]);
  }, []);

  const points = useMemo(() => curve.getPoints(100), [curve]);
  const lineGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    return geometry;
  }, [points]);

  useFrame(() => {
    const scrollY = Math.max(0, scroll.offset);
    const position = curve.getPoint(scrollY);
    // console.log(position);
    // ''    x: 1.4779426062777987;
    //     y: -0.013236174629240371;
    //     z: -4.432789442073612;''

    if (scrollY !== 1) {
      camera.position.lerp(position, 0.1);
    }

    const lookAtPoint = curve.getPoint(Math.min(scrollY + 0.1, 1));
    const currentLookAt = camera.getWorldDirection(new THREE.Vector3());
    const targetLookAt = new THREE.Vector3()
      .subVectors(lookAtPoint, camera.position)
      .normalize();
    const lookAt = currentLookAt.lerp(targetLookAt, 0.1);

    camera.lookAt(camera.position.clone().add(lookAt));
  });

  return (
    <>
      <group position={[0, -1, 0]}>
        <line>
          <bufferGeometry
            attach='geometry'
            {...lineGeometry}
          />
          <lineBasicMaterial
            attach='material'
            color='red'
            linewidth={10}
          />
        </line>
      </group>
    </>
  );
};

export default Camera;
