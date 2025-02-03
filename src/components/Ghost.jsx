import React, { useRef } from "react";
import { useFrame, useGraph } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { SkeletonUtils } from "three-stdlib";

//  npx gltfjsx public/3D/ghost.glb

export function Ghost(props) {
  const { scene } = useGLTF("/3D/ghost.glb");
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials } = useGraph(clone);
  const ref = useRef();

  return (
    <group
      scale={2}
      ref={ref}
      position={[-2, 0.3, 0]}
      rotation={[0, 0.4, 0]}
      {...props}
      dispose={null}>
      <mesh
        geometry={nodes.Box.geometry}
        material={nodes.Box.material}
        position={[0, 0.084, 0.446]}
        rotation={[0, 0, 0.035]}
      />
      <mesh
        geometry={nodes.Tube.geometry}
        material={nodes.Tube.material}
      />
      <mesh
        geometry={nodes.Cylinder.geometry}
        material={nodes.Cylinder.material}
        position={[0, 0.066, 0]}
        scale={1.009}
      />
      <mesh
        geometry={nodes.Sphere.geometry}
        material={nodes.Sphere.material}
      />
      <mesh
        geometry={nodes.Sphere_1.geometry}
        material={nodes.Sphere_1.material}
      />
      <mesh
        geometry={nodes.Tube_1.geometry}
        material={nodes.Tube_1.material}
      />
      <mesh
        geometry={nodes.Tube_2.geometry}
        material={nodes.Tube_2.material}
      />
    </group>
  );
}

useGLTF.preload("/3D/ghost.glb");
