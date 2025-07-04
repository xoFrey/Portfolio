import { Text, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";

const MarsCard = () => {
  const scroll = useScroll();
  const [opacity, setOpacity] = useState(0);

  useFrame(() => {
    if (scroll.offset >= 0.27842 && scroll.offset <= 0.2983) {
      setOpacity(50.3 * scroll.offset - 14.02);
    } else if (scroll.offset >= 0.318) {
      setOpacity(-50.3 * scroll.offset + 17.0);
    }
  });

  return (
    <group>
      <Text
        textAlign='center'
        position={[4, 3.02, -10]}
        color='#E68D59'
        fontSize={0.2}
        scale={0.4}
        font={"../fonts/Orbitron/Orbitron-VariableFont_wght.ttf"}
        fillOpacity={opacity}
        lineHeight={1}
        onPointerOver={() => (document.body.style.cursor = "pointer")}
        onPointerOut={() => (document.body.style.cursor = "auto")}
        onClick={() => window.open("https://github.com/xofrey", "_blank")}>
        <meshStandardMaterial color={"white"} />
        Click me
      </Text>
      <Text
        textAlign='center'
        position={[4, 2.9, -10]}
        color='white'
        fontSize={0.2}
        maxWidth={2}
        font={"../fonts/Jura/Jura-VariableFont_wght.ttf"}
        fillOpacity={opacity}
        scale={0.4}
        lineHeight={1}>
        <meshStandardMaterial color={"white"} />
        to visit my Github Repo!
      </Text>
    </group>
  );
};
export default MarsCard;
