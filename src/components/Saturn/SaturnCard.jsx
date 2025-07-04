import { Text, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";

const SaturnCard = () => {
  const [opacity, setOpacity] = useState(0);
  const scroll = useScroll();

  useFrame(() => {
    if (scroll.offset >= 0.98 && scroll.offset <= 1) {
      setOpacity(50.25 * scroll.offset - 49.25);
    }
  });
  return (
    <group>
      <Text
        textAlign='center'
        position={[40, 49, -182]}
        rotation={[0, -0.97, 0]}
        color='white'
        fillOpacity={opacity}
        fontSize={10}
        maxWidth={100}
        font={"../fonts/Jura/Jura-VariableFont_wght.ttf"}
        scale={0.4}
        lineHeight={1.2}>
        Thank you for taking this little journey!
        <meshStandardMaterial color={"white"} />
      </Text>
    </group>
  );
};

export default SaturnCard;
