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
    if (scroll.offset >= 0.2284 && scroll.offset <= 0.2383) {
      // Normierte Steigung berechnen für den Bereich von 0 bis 1
      setOpacity(107.38 * scroll.offset - 24.53);
    } else if (scroll.offset >= 0.24) {
      setOpacity(-839.4 * scroll.offset + 202.27);
    }
  });

  return (
    <group>
      <Text
        textAlign='center'
        position={[1.2, 0.64, -4.7]}
        rotation={[0.1, -0.8, 0]}
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
