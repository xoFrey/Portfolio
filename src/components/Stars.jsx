import {
  OrbitControls,
  PerspectiveCamera,
  PointMaterial,
  Points,
  useScroll,
} from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as random from "maath/random/dist/maath-random.esm";
import { useFrame, useThree } from "@react-three/fiber";

const Stars = ({ props }) => {
  const starRef = useRef();

  const sphere = useMemo(
    () => random.inSphere(new Float32Array(5000 * 3), { radius: 300 }),
    [],
  );

  useFrame(() => {
    starRef.current.rotation.x -= 0.0001;
  });

  return (
    <group
      rotation={[0, 0, Math.PI / 4]}
      position={[0, 0, 0]}>
      {/* <OrbitControls /> */}
      <Points
        ref={starRef}
        positions={sphere}
        stride={3}
        frustumCulled
        {...props}>
        <PointMaterial
          transparent
          color='#f272c8'
          size={0.2}
          sizeAttenuation={true}
          depthWrite={false}
          depthTest={true}
          stencilWrite={true}
          stencilRef={1}
          stencilFunc={516}
        />
        <PerspectiveCamera position={[0, 0, 0]} />
      </Points>
    </group>
  );
};

export default Stars;
