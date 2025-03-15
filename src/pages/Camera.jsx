import { useScroll } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo } from "react";
import * as THREE from "three";

const Camera = () => {
  const { camera } = useThree();
  const scroll = useScroll();

  const curve = useMemo(() => {
    return new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, -0, 3),
      new THREE.Vector3(0, 0, 2),
      new THREE.Vector3(0, 0, 1.5),
      new THREE.Vector3(-1.06, 0, 1.06),
      new THREE.Vector3(-1.5, 0, 0),
      new THREE.Vector3(-1.06, 0, -1.06),
      new THREE.Vector3(0, 0, -1.5),
      new THREE.Vector3(0, 0, -3),
      new THREE.Vector3(2, 2, -7),

      // !Mars circle
      new THREE.Vector3(3.5, 3, -9.13),
      new THREE.Vector3(3.87, 3, -9.5),
      new THREE.Vector3(4.0, 3, -10.0),
      new THREE.Vector3(3.87, 3, -10.5),
      new THREE.Vector3(3.5, 3, -10.87),
      new THREE.Vector3(3.0, 3, -11.0),
      new THREE.Vector3(2.5, 3, -10.87),
      new THREE.Vector3(2.13, 3, -10.5),

      // !Transition out of the circle
      new THREE.Vector3(1.5, 5, -11.0),
      new THREE.Vector3(0, 8, -12.5),
      new THREE.Vector3(-5, 12, -15),

      // !moving towards Jupiter
      new THREE.Vector3(-15, 18, -25),
      new THREE.Vector3(-30, 30, -45),
      new THREE.Vector3(-50, 45, -70),

      // !go around Jupiter
      new THREE.Vector3(-55.42, 60, -75.42),
      new THREE.Vector3(-59.69, 60, -72.15),
      new THREE.Vector3(-64.66, 60, -70.09),
      new THREE.Vector3(-70.0, 60, -69.38),
      new THREE.Vector3(-75.34, 60, -70.09),
      new THREE.Vector3(-80.31, 60, -72.15),
      new THREE.Vector3(-84.58, 60, -75.42),
      new THREE.Vector3(-87.85, 60, -79.69),
      new THREE.Vector3(-89.91, 60, -84.66),
      new THREE.Vector3(-90.62, 60, -90.0),
      new THREE.Vector3(-89.91, 60, -95.34),
      new THREE.Vector3(-87.85, 60, -100.31),
      new THREE.Vector3(-84.58, 60, -104.58),
      new THREE.Vector3(-80.31, 60, -107.85),
      new THREE.Vector3(-75.34, 60, -109.91),
      new THREE.Vector3(-70.0, 60, -110.62),
      new THREE.Vector3(-64.66, 60, -109.91),
      new THREE.Vector3(-59.69, 60, -107.85),
      new THREE.Vector3(-55.42, 60, -104.58),
      // new THREE.Vector3(-52.15, 60, -100.31),
      // new THREE.Vector3(-50.09, 60, -95.34),
      // new THREE.Vector3(-49.38, 60, -90.0),
      // new THREE.Vector3(-50.09, 60, -84.66),

      //! Way to Saturn
      new THREE.Vector3(10, 50, -180),
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

    if (scrollY !== 1) {
      camera.position.lerp(position, 0.1);
    }

    const lookAtPoint = curve.getPoint(Math.min(scrollY + 0.1, 1));
    const currentLookAt = camera.getWorldDirection(new THREE.Vector3());
    const targetLookAt = new THREE.Vector3()
      .subVectors(lookAtPoint, camera.position)
      .normalize();
    const lookAt = currentLookAt.lerp(targetLookAt, 0.01);

    camera.lookAt(camera.position.clone().add(lookAt));
  });

  return (
    <>
      {/* <group position={[0, -1, 0]}>
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
      </group> */}
    </>
  );
};

export default Camera;
