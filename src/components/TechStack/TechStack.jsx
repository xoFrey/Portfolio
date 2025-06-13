import { useTexture } from "@react-three/drei";

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
  const gitHubTexture = useTexture("/texture/GitHub.png");

  return (
    <>
      <directionalLight
        castShadow
        position={[5, 5, 5]}
        intensity={1}
      />
      <TechStackComponent
        texture={htmlTexture}
        position={[-7, 2, 0]}
      />
      <TechStackComponent
        texture={cssTexture}
        position={[-5, 2, 0]}
      />
      <TechStackComponent
        texture={tailwindTexture}
        position={[-3, 2, 0]}
      />
      <TechStackComponent
        texture={javascriptTexture}
        position={[-1, 2, 0]}
      />
      <TechStackComponent
        texture={reactTexture}
        position={[1, 2, 0]}
      />
      <TechStackComponent
        texture={javaTexture}
        position={[3, 2, 0]}
      />
      <TechStackComponent
        texture={pythonTexture}
        position={[5, 2, 0]}
      />
      <TechStackComponent
        texture={nextJSTexture}
        position={[5, 0, 0]}
      />
      <TechStackComponent
        texture={nodeJSTexture}
        position={[7, 2, 0]}
      />
      <TechStackComponent
        texture={mongoDBTexture}
        position={[-5, 0, 0]}
      />
      <TechStackComponent
        texture={expressTexture}
        position={[-3, 0, 0]}
      />
      <TechStackComponent
        texture={figmaTexture}
        position={[-1, 0, 0]}
      />
      <TechStackComponent
        texture={threeJSTexture}
        position={[1, 0, 0]}
      />
      <TechStackComponent
        texture={gitHubTexture}
        position={[3, 0, 0]}
      />
    </>
  );
};

export default TechStack;
