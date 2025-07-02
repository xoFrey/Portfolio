import {
  DragControls,
  OrbitControls,
  PresentationControls,
  TransformControls,
  useTexture,
} from "@react-three/drei";

import TechStackComponent from "./TechStackComponent";

const TechStack = () => {
  const htmlTexture = useTexture("/texture/html5.png");
  const cssTexture = useTexture("/texture/css-3.png");
  const tailwindTexture = useTexture("/texture/Tailwind CSS.png");
  const javascriptTexture = useTexture("/texture/icons8-javascript-480.png");
  const reactTexture = useTexture("/texture/React.png");
  const javaTexture = useTexture("/texture/java.png");
  const pythonTexture = useTexture("/texture/Python.png");
  const nextJSTexture = useTexture("/texture/Next.js.png");
  const nodeJSTexture = useTexture("/texture/Node.js.png");
  const mongoDBTexture = useTexture("/texture/MongoDB.png");
  const expressTexture = useTexture("/texture/Express.png");
  const figmaTexture = useTexture("/texture/Figma.png");
  const threeJSTexture = useTexture("/texture/Three.js.png");
  const gitTexture = useTexture("/texture/Git.png");

  return (
    <>
      <directionalLight
        castShadow
        position={[5, 5, 5]}
        intensity={1}
      />
      <TechStackComponent
        texture={htmlTexture}
        position={[-10.5, 2, 0]}
        name={"HTML"}
      />
      <TechStackComponent
        texture={cssTexture}
        position={[-7.5, 2, 0]}
        name={"CSS"}
      />
      <TechStackComponent
        texture={tailwindTexture}
        position={[-4.5, 2, 0]}
        name={"Tailwind"}
      />
      <TechStackComponent
        texture={javascriptTexture}
        position={[-1.5, 2, 0]}
        name={"JavaScript"}
      />
      <TechStackComponent
        texture={reactTexture}
        position={[1.5, 2, 0]}
        name={"React"}
      />
      <TechStackComponent
        texture={javaTexture}
        position={[4.5, 2, 0]}
        name={"Java"}
      />
      <TechStackComponent
        texture={pythonTexture}
        position={[7.5, 2, 0]}
        name={"Python"}
      />
      <TechStackComponent
        texture={nodeJSTexture}
        position={[10.5, 2, 0]}
        name={"NodeJS"}
      />{" "}
      <TechStackComponent
        texture={nextJSTexture}
        position={[7.5, -1, 0]}
        name={"NextJS"}
      />
      <TechStackComponent
        texture={mongoDBTexture}
        position={[-7.5, -1, 0]}
        name={"MongoDB"}
      />
      <TechStackComponent
        texture={expressTexture}
        position={[-4.5, -1, 0]}
        name={"Express"}
      />
      <TechStackComponent
        texture={figmaTexture}
        position={[-1.5, -1, 0]}
        name={"Figma"}
      />
      <TechStackComponent
        texture={threeJSTexture}
        position={[1.5, -1, 0]}
        name={"ThreeJS"}
      />
      <TechStackComponent
        texture={gitTexture}
        position={[4.5, -1, 0]}
        name={"Git"}
      />{" "}
    </>
  );
};

export default TechStack;
