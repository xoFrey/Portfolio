import { Text, useHelper, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";
const EarthCard = () => {
  const scroll = useScroll();
  const [opacity, setOpacity] = useState(0);

  useFrame(() => {
    // console.log(scroll.offset);
    // ! m = opacity/scroll.offset(end)-scroll.offset(start), opacity= m*scroll.offset(start)+b
    // ! b = opacity(1) - m*scroll.offset(start)

    if (scroll.offset >= 0.079 && scroll.offset <= 0.0996) {
      setOpacity(50.2 * scroll.offset - 4.0);
    } else if (scroll.offset > 0.129) {
      setOpacity(-100.4 * scroll.offset + 14.01);
    }
  });

  return (
    <group>
      <Text
        textAlign='center'
        position={[-1.5, 0, -0]}
        rotation={[0, 0.1, 0]}
        color='white'
        fillOpacity={opacity}
        fontSize={0.2}
        maxWidth={2}
        scale={0.4}
        font={"../fonts/Orbitron/Orbitron-VariableFont_wght.ttf"}
        lineHeight={1}>
        Welcome to my journey!
        <meshStandardMaterial color={"white"} />
      </Text>
    </group>
  );
};

export default EarthCard;
