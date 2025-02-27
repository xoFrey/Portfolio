import { useScroll } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useMemo } from "react";
import * as THREE from "three";

const Camera = () => {
  const { camera } = useThree();
  const scroll = useScroll();

  const curve = useMemo(() => {
    return new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, 1, -3),
      new THREE.Vector3(0, 1, -2.5),
      new THREE.Vector3(0, 1, -2),
      new THREE.Vector3(0, 0.5, -1.45),
      new THREE.Vector3(0.53, 0.5, -1.11),
      new THREE.Vector3(0.98, 0, -0.73),
      new THREE.Vector3(1.28, 0, -0.17),
      new THREE.Vector3(1.28, 0, 0.42),
      new THREE.Vector3(0.93, 0, 0.79),
      new THREE.Vector3(0.55, 0, 1.09),
      new THREE.Vector3(0, 0, 1.25),
      new THREE.Vector3(0, 0, 1.72),
      new THREE.Vector3(0, 0, 2.37),
      new THREE.Vector3(0, 0, 3.24),
      new THREE.Vector3(0.29, 0, 3.8),
    ]);
  }, []);

  // Generate points along the curve
  const points = useMemo(() => curve.getPoints(100), [curve]); // 100 points for smoothness
  const lineGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    return geometry;
  }, [points]);

  useFrame((_, delta) => {
    const scrollY = scroll.offset;

    const position = curve.getPoint(scrollY);
    const tangent = curve.getTangent(scrollY).normalize();

    camera.position.lerp(position, 0.1);

    const targetQuaternion = new THREE.Quaternion();

    targetQuaternion.setFromUnitVectors(new THREE.Vector3(0, 0, -1), tangent);
    camera.quaternion.slerp(targetQuaternion, delta * 3);
  });

  return (
    <>
      {" "}
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
