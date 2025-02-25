import { useScroll } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useMemo } from "react";
import * as THREE from "three";

const Camera = () => {
  const { camera } = useThree();
  const scroll = useScroll();

  const curve = useMemo(() => {
    return new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, 2, 3),
      new THREE.Vector3(0, 1, 2),
      new THREE.Vector3(0, 0.5, 1),
      new THREE.Vector3(0.6, 0, 0),
      new THREE.Vector3(-0.5, 0, -1.4),
      new THREE.Vector3(1.5, 0, -4.5),
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
