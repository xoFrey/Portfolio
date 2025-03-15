import { Text, useHelper, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { DirectionalLightHelper } from "three";
const TextCard = () => {
  const lightRef = useRef();
  const targetRef = useRef();
  const scroll = useScroll();
  const [opacity, setOpacity] = useState(100);

  useFrame(() => {
    // console.log(scroll.offset);
    if (scroll.offset > 0.5) {
      // ! m = opacity/scroll.offset(end)-scroll.offset(start), opacity= m*scroll.offset(start)+b
      // ! b = opacity(1) - m*scroll.offset(start)

      setOpacity(-200 * scroll.offset + 101);
    } else {
      setOpacity(1);
    }
  });

  return (
    <group>
      <Text
        textAlign='center'
        ref={targetRef}
        position={[-1.5, 0, -0]}
        rotation={[0.1, 0, 0]}
        color='white'
        fillOpacity={opacity}
        fontSize={0.2}
        maxWidth={2.5}
        scale={0.4}
        lineHeight={1}>
        Come in for a journey through space
        <meshStandardMaterial color={"white"} />
      </Text>
    </group>
  );
};

export default TextCard;
