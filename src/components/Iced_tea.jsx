import React, { Suspense, useRef, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Html, OrbitControls, SpotLight, useGLTF } from "@react-three/drei";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import { getProject } from "@theatre/core";
import studio from "@theatre/studio";
import extention from "@theatre/r3f/dist/extension";

studio.initialize();
studio.extend(extention);
const cameraSheet = getProject("Demo Project").sheet("camera sheet");

export function Iced_tea() {
  return (
    <>
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
      <Suspense fallback={null}>
        <Icedtea />
      </Suspense>
    </>
  );
}

/**IcedTea */
export function Icedtea({ isMobile }) {
  const { nodes, materials } = useGLTF("./src/assets/models/icedtea.glb");

  const { viewport, camera } = useThree();
  const responsiveRatio = viewport.width / 12;
  const bottleScaleRatio = Math.max(0.3, Math.min(0.8 * responsiveRatio, 1));
  const model = useRef();

  const cameraAnimation = gsap.timeline();

  ScrollTrigger.create({
    trigger: "#icedOverly",
    start: "top center",
    end: "bottom center",
    animation: cameraAnimation,
    scrub: true,
    toggleActions: "play restart play restart",
  });

  return (
    <group
      dispose={null}
      rotation={isMobile ? [0, 0.5, 0] : [1.55, 0, 0]}
      position={
        isMobile
          ? [viewport.width / -12 - 0.5, -1.5, 0.6]
          : [0, viewport.height / 4 - 2, -2]
      }
      scale={[bottleScaleRatio, bottleScaleRatio, bottleScaleRatio]}
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
export const IcedTeaHtml = () => {
  return (
    <div className="text-white w-100 mt-5 ps-5 " id="icedOverly">
      <h2 style={{ fontFamily: "Young-serif" }}>Long Island Iced Tea</h2>
    </div>
  );
};
