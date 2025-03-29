import { Text, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";

const AfterEarthCard = () => {
  const scroll = useScroll();
  const [opacity, setOpacity] = useState(1);

  useFrame(() => {
    console.log(scroll.offset);
    // ! m = opacity/scroll.offset(end)-scroll.offset(start), opacity= m*scroll.offset(start)+b
    // ! b = opacity(1) - m*scroll.offset(start)
    if (scroll.offset >= 0.24 && scroll.offset <= 0.26) {
      // Normierte Steigung berechnen für den Bereich von 0 bis 1
      setOpacity(50.25 * scroll.offset - 12.2);
    } else if (scroll.offset >= 0.265) {
      setOpacity(-502.51 * scroll.offset + 134.25);
    }
  });

  return (
    <group>
      <Text
        textAlign='center'
        position={[3, 2.3, -7.8]}
        rotation={[0.02, -0.7, 0]}
        color='white'
        fillOpacity={opacity}
        fontSize={0.2}
        maxWidth={2}
        scale={0.4}
        lineHeight={1}>
        <meshStandardMaterial color={"white"} />I love learning new skills
      </Text>
    </group>
  );
};

export default AfterEarthCard;
