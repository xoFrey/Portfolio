import { Text } from "@react-three/drei";
import { useState } from "react";

const JupiterCard = () => {
  const [opacity, setOpacity] = useState(1);
  x: -55.65921849480712;
  y: 60.1647546646937;
  z: -75.37257532423925;
  return (
    <group>
      <ambientLight intensity={3} />
      <Text
        textAlign='center'
        position={[-79, 60, -74]}
        rotation={[0, 1, 0]}
        color='white'
        fillOpacity={opacity}
        fontSize={3}
        maxWidth={2}
        scale={0.4}
        lineHeight={1}>
        Somewhere here we are!
        <meshStandardMaterial color={"white"} />
      </Text>
    </group>
  );
};

export default JupiterCard;
