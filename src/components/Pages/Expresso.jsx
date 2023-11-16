import React, { Suspense, useRef } from "react";
import { View, useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

export function Expresso() {
  return (
    <>
      <ambientLight intensity={1} />
      <Suspense fallback={null}>
        <Espresso />
      </Suspense>
    </>
  );
}

/*Model */
function Espresso({ isMobile }) {
  const { nodes, materials } = useGLTF("./src/assets/models/espresso.glb");

  const { viewport } = useThree();
  const responsiveRatio = viewport.width / 12;
  const bottleScaleRatio = Math.max(0.3, Math.min(0.6 * responsiveRatio, 1));

  return (
    <group>
      <group
        dispose={null}
        rotation={[0, 0, 0]}
        position={isMobile ? [0, -1.5, 0] : [0, -2, 0]}
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
          <meshPhongMaterial color={"black"} opacity={0.01} />
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
    </group>
  );
}

useGLTF.preload("./src/assets/models/espresso.glb");

/*Html */
export const ExpressoHtml = () => {
  return <div className="text-white vh-100">expresso</div>;
};
