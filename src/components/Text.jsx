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

  useHelper(lightRef, DirectionalLightHelper, 1, "blue");

  useEffect(() => {
    lightRef.current.target = targetRef.current;
    lightRef.current.target.updateMatrixWorld();
  });

  return (
    <group>
      <directionalLight
        ref={lightRef}
        position={[-1, 0, -4]}
        intensity={1}
        castShadow
      />
      <Text
        ref={targetRef}
        position={[0, 0, -5.3]}
        rotation={[0.3, 0.2, -0.05]}
        color='white'
        anchorX='left'
        anchorY='bottom'
        fillOpacity={opacity}
        fontSize={0.2}
        maxWidth={2.5}
        scale={0.4}
        lineHeight={1}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora est
        voluptates a dolorum harum nostrum id dolor quisquam asperiores nisi?
        <meshStandardMaterial color={"white"} />
      </Text>
    </group>
  );
};

export default TextCard;
