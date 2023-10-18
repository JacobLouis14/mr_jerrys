import React, { Suspense, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Html, OrbitControls, SpotLight, useGLTF } from "@react-three/drei";
import * as THREE from "three";

export default function Iced_tea() {
  return (
    <div className="w-100 vh-100">
      <Canvas>
        {/* <SpotLight
          position={[3, 2, 3]}
          distance={20}
          angle={0.5}
          attenuation={5}
          anglePower={5}
          intensity={10}
          castShadow
        /> */}
        <ambientLight intensity={1} />
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 1.7}
          enablePan={false}
        />
        <Suspense fallback={null}>
          <Icedtea />
        </Suspense>
      </Canvas>
      <OverlyHtml />
    </div>
  );
}

/**IcedTea */
export function Icedtea({ rotation, isMobile }) {
  const { nodes, materials } = useGLTF("./src/assets/models/icedtea.glb");

  const { viewport } = useThree();
  const responsiveRatio = viewport.width / 12;
  const bottleScaleRatio = Math.max(0.3, Math.min(0.8 * responsiveRatio, 1));
  const model = useRef();
  const [isHover, setIsHover] = useState(false);

  useFrame(() => {
    if (!isHover) model.current.rotation.y += 0.01;
  });

  return (
    <group
      dispose={null}
      rotation={isMobile ? [0, 0.5, 0] : rotation}
      position={
        isMobile
          ? [viewport.width / -12 - 0.5, -1.5, 0.6]
          : [0, viewport.height / 4 - 4, 0]
      }
      scale={[bottleScaleRatio, bottleScaleRatio, bottleScaleRatio]}
      onPointerOver={() => setIsHover(true)}
      onPointerOut={() => setIsHover(false)}
      ref={model}
    >
      <mesh
        geometry={nodes.mesh_0.geometry}
        material={nodes.mesh_0.material}
        position={[0, 2.179, 0]}
        scale={[1.069, 1.307, 1.069]}
      >
        <meshPhysicalMaterial
          metalness={0}
          roughness={0}
          transmission={1}
          transparent
          opacity={0.5}
        />
      </mesh>
      <mesh
        geometry={nodes.mesh_1.geometry}
        material={nodes.mesh_1.material}
        position={[0, 4.815, 0]}
        scale={[0.629, 0.118, 0.629]}
      />
      <mesh
        geometry={nodes.mesh_2.geometry}
        material={nodes.mesh_2.material}
        position={[0, 2.179, 0]}
        scale={[1.069, 1.307, 1.069]}
      >
        <meshPhongMaterial color={"#FFFFE0"} opacity={0.01} />
      </mesh>
      <mesh
        geometry={nodes.mesh_3.geometry}
        material={nodes.mesh_3.material}
        position={[0, 2.179, 0]}
        scale={[1.069, 1.307, 1.069]}
      />
      <mesh
        geometry={nodes.mesh_4.geometry}
        material={nodes.mesh_4.material}
        position={[0, 2.179, 0]}
        scale={[1.069, 1.307, 1.069]}
      />
      <mesh
        geometry={nodes.mesh_5.geometry}
        material={nodes.mesh_5.material}
        position={[0, 2.179, 0]}
        scale={[1.079, 1.318, 1.079]}
      />
      <mesh
        geometry={nodes.mesh_6.geometry}
        material={nodes.mesh_6.material}
        position={[0, 4.935, 0]}
        scale={[0.468, 0.012, 0.468]}
      />
    </group>
  );
}

useGLTF.preload("./src/assets/models/icedtea.glb");

/**HTML */
const OverlyHtml = () => {
  return (
    <div className="text-white position-absolute ">
      <p>Hello</p>
    </div>
  );
};
