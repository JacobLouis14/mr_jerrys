import React, { Suspense, useRef } from "react";
import { useThree } from "@react-three/fiber";
import { SpotLight, useGLTF } from "@react-three/drei";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { motion } from "framer-motion";

/* Theater js */
import { getProject } from "@theatre/core";
import studio from "@theatre/studio";
import extention from "@theatre/r3f/dist/extension";
import { editable as e, SheetProvider } from "@theatre/r3f";
import icedState from "./animation/iced-state.json";

studio.extend(extention);
studio.initialize();
const iceTeaSheet = getProject("Demo Project", { state: icedState }).sheet(
  "camera sheet"
);

export function Iced_tea() {
  return (
    <>
      <SheetProvider sheet={iceTeaSheet}>
        <hemisphereLight position={[2, 1, 0]} color={"blue"} />
        <ambientLight intensity={1} />
        <Suspense fallback={null}>
          <Icedtea />
        </Suspense>
      </SheetProvider>
    </>
  );
}

/**IcedTea */
export function Icedtea({ isMobile }) {
  const { nodes, materials } = useGLTF("./src/assets/models/icedtea.glb");

  const { viewport, camera } = useThree();
  const responsiveRatio = viewport.width / 12;
  const bottleScaleRatio = Math.max(0.3, Math.min(0.8 * responsiveRatio, 1));
  const modelLight = useRef();

  ScrollTrigger.create({
    trigger: "#icedOverly",
    start: "top center",
    end: "bottom center",
    scrub: true,
    toggleActions: "play restart restart restart",
    onEnter: () => {
      iceTeaSheet.project.ready.then(() => {
        iceTeaSheet.sequence.play({ range: [0, 6] });
      });
    },
    onLeaveBack: () => {
      iceTeaSheet.project.ready.then(() => {
        iceTeaSheet.sequence.pause();
      });
    },
  });

  return (
    <>
      <SpotLight
        position={[-2, 2, 5]}
        penumbra={1}
        distance={6}
        angle={0.35}
        attenuation={5}
        anglePower={4}
        intensity={2}
        color={"blue"}
        target={modelLight.current}
      />
      <e.group
        theatreKey="iceModel"
        dispose={null}
        rotation={isMobile ? [0, 0.5, 0] : [1.55, 0, 0]}
        position={
          isMobile
            ? [viewport.width / -12 - 0.5, -1.5, 0.6]
            : [0, viewport.height / 4 - 2, -2]
        }
        scale={[bottleScaleRatio, bottleScaleRatio, bottleScaleRatio]}
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
          ref={modelLight}
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
      </e.group>
    </>
  );
}

useGLTF.preload("./src/assets/models/icedtea.glb");

/**HTML */
export const IcedTeaHtml = () => {
  return (
    <div
      className="text-white w-100"
      style={{ paddingLeft: "10rem", marginTop: "8rem" }}
      id="icedOverly"
    >
      <motion.h2
        className="fw-bold fs-1"
        initial={{ opacity: 0, x: -10 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { duration: 4, ease: "easeInOut", type: "spring" },
        }}
        style={{ fontFamily: "Young-serif" }}
      >
        Long Island Iced Tea
      </motion.h2>
      <div style={{ width: "40%", textAlign: "justify", marginTop: "5rem" }}>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: { duration: 1, delay: 4.5 },
          }}
        >
          This invigorating cocktail is a harmonious blend of refreshing
          ingredients, creating a revitalizing experience for your taste buds.
          Its freshness and strength come together in a delightful symphony of
          flavors, leaving you with a zesty kick provided by the vibrant essence
          of limes.
        </motion.p>
      </div>
    </div>
  );
};
