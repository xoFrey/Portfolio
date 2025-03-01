import { useScroll } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useMemo } from "react";
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
    ]);
  }, []);

  const points = useMemo(() => curve.getPoints(100), [curve]);
  const lineGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    return geometry;
  }, [points]);

  useFrame(() => {
    const scrollY = scroll.offset;

    const position = curve.getPoint(scrollY);
    camera.position.lerp(position, 0.1);

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
      <group position={[0, 0, 0]}>
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
