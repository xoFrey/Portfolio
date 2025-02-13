import {
  OrbitControls,
  PerspectiveCamera,
  PointMaterial,
  Points,
} from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as random from "maath/random/dist/maath-random.esm";
import { useFrame, useThree } from "@react-three/fiber";

const Stars = (props) => {
  const { camera } = useThree();
  const starRef = useRef();

  console.log(camera.position);

  const sphere = useMemo(
    () => random.inSphere(new Float32Array(2000 * 3), { radius: 1.2 }),
    [],
  );

  useFrame(() => {
    starRef.current.rotation.z -= 0.0001;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={starRef}
        positions={sphere}
        stride={3}
        frustumCulled
        {...props}>
        <PointMaterial
          transparent
          color='#f272c8'
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
      <PerspectiveCamera position={[0, 0, 0.5]} />
      <OrbitControls />
    </group>
  );
};

export default Stars;
