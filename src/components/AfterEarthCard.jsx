import { Text, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";

const AfterEarthCard = () => {
  const scroll = useScroll();
  const [opacity, setOpacity] = useState(0);

  useFrame(() => {
    if (scroll.offset <= 0.064) {
      setOpacity(66.96 * scroll.offset - 3);
    } else if (scroll.offset > 0.04) {
      setOpacity(-100.4 * scroll.offset + 11.51);
    }
  });

  return (
    <group>
      <Text
        textAlign='center'
        position={[-1.5, 0, -0]}
        rotation={[0.1, 0, 0]}
        color='white'
        fillOpacity={opacity}
        fontSize={0.2}
        maxWidth={2.5}
        scale={0.4}
        lineHeight={1}>
        <meshStandardMaterial color={"white"} />
      </Text>
    </group>
  );
};

export default AfterEarthCard;
