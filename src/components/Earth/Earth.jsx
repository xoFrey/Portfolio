import { Preload } from "@react-three/drei";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const Earth = () => {
  const earthTexture = useLoader(THREE.TextureLoader, "/3D/earth.jpg");
  const earthSpecular = useLoader(THREE.TextureLoader, "/3D/earthspecular.jpg");
  const earthBump = useLoader(THREE.TextureLoader, "/3D/earthbump.jpg");
  const earthNight = useLoader(THREE.TextureLoader, "/3D/earthnight.jpg");
  const earthClouds = useLoader(THREE.TextureLoader, "/3D/earthclouds.jpg");

  const earthRef = useRef();
  const earthCloudRef = useRef();

  // Shader for earth
  const uniforms = {
    color1: { value: new THREE.Color(0x0088ff) },
    color2: { value: new THREE.Color(0x000000) },
    fresnelBias: { value: 0.1 },
    fresnelScale: { value: 1.0 },
    fresnelPower: { value: 4.0 },
  };
  const vs = `
  uniform float fresnelBias;
  uniform float fresnelScale;
  uniform float fresnelPower;
  
  varying float vReflectionFactor;
  
  void main() {
    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
    vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
  
    vec3 worldNormal = normalize( mat3( modelMatrix[0].xyz, modelMatrix[1].xyz, modelMatrix[2].xyz ) * normal );
  
    vec3 I = worldPosition.xyz - cameraPosition;
  
    vReflectionFactor = fresnelBias + fresnelScale * pow( 1.0 + dot( normalize( I ), worldNormal ), fresnelPower );
  
    gl_Position = projectionMatrix * mvPosition;
  }
  `;
  const fs = `
  uniform vec3 color1;
  uniform vec3 color2;
  
  varying float vReflectionFactor;
  
  void main() {
    float f = clamp( vReflectionFactor, 0.0, 1.0 );
    gl_FragColor = vec4(mix(color2, color1, vec3(f)), f);
  }
  `;
  useFrame(() => {
    if (earthRef.current || earthCloudRef.current) {
      earthRef.current.rotation.y += 0.0001;
      earthCloudRef.current.rotation.y += 0.0003;
    }
  });
  return (
    <group ref={earthRef}>
      <mesh position={[0, 0, 0]}>
        <icosahedronGeometry args={[1, 12]} />
        <meshPhongMaterial
          map={earthTexture}
          side={THREE.DoubleSide}
          specularMap={earthSpecular}
          bumpMap={earthBump}
          stencilWrite={true}
          stencilRef={1}
          stencilFunc={THREE.AlwaysStencilFunc}
          stencilZPass={THREE.ReplaceStencilOp}
        />
      </mesh>
      <mesh>
        <icosahedronGeometry args={[1, 12]} />
        <meshBasicMaterial
          map={earthNight}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
      <mesh ref={earthCloudRef}>
        <icosahedronGeometry args={[1.003, 12]} />
        <meshBasicMaterial
          map={earthClouds}
          opacity={0.8}
          transparent={true}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
      <mesh>
        <icosahedronGeometry args={[1.01, 12]} />
        <shaderMaterial
          uniforms={uniforms}
          vertexShader={vs}
          fragmentShader={fs}
          transparent={true}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </group>
  );
};

export default Earth;
