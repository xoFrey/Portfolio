import { Text, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";

const JupiterCard = () => {
  const [opacity, setOpacity] = useState(0);
  const scroll = useScroll();

  useFrame(() => {
    if (scroll.offset >= 0.676 && scroll.offset <= 0.716) {
      setOpacity(25.13 * scroll.offset - 17);
    } else if (scroll.offset >= 0.726) {
      setOpacity(-50.25 * scroll.offset + 37.49);
    }
  });

  return (
    <group>
      <Text
        textAlign='center'
        position={[-80, 60, -74]}
        rotation={[0, 1, 0]}
        color='white'
        fillOpacity={opacity}
        fontSize={5}
        font={"../fonts/Orbitron/Orbitron-VariableFont_wght.ttf"}
        maxWidth={35}
        scale={0.4}
        lineHeight={1.2}>
        I hope you enjoyed the ride
        <meshStandardMaterial color={"white"} />
      </Text>
    </group>
  );
};

export default JupiterCard;
