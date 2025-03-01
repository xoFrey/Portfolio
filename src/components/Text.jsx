import { Text } from "@react-three/drei";
const TextCard = () => {
  return (
    <group>
      {/* PointLight or DirectionalLight for targeted lighting */}
      <pointLight
        position={[-2, 0, -2]}
        intensity={12}
        castShadow
      />
      <Text
        position={[0, 0, -3]}
        rotation={[0, -0.5, 0]}
        color='white'
        anchorX={"left"}
        anchorY='bottom'
        fontSize={0.52}
        maxWidth={2.5}
        scale={0.4}
        lineHeight={1}>
        Hello World!
        <meshStandardMaterial color={"white"} />
      </Text>
    </group>
  );
};

export default TextCard;
