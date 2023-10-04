import React, { Suspense, useEffect, useState } from "react";
import { Preload, Stage, useGLTF } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import Loader from "../Loader";

/**espresso */
export function Espresso({ rotation, isMobile }) {
  const { nodes, materials } = useGLTF("./src/assets/models/espresso.glb");

  const { viewport } = useThree();
  const responsiveRatio = viewport.width / 12;
  const bottleScaleRatio = Math.max(0.3, Math.min(0.6 * responsiveRatio, 1));

  return (
    <group
      dispose={null}
      rotation={isMobile ? [0, 0.5, 0] : rotation}
      position={isMobile ? [0, -1.5, 0] : [responsiveRatio, -1.5, 0]}
      scale={[bottleScaleRatio, bottleScaleRatio, bottleScaleRatio]}
    >
      <mesh
        geometry={nodes.mesh_0.geometry}
        material={nodes.mesh_0.material}
        position={[0, 2.179, 0]}
        scale={[1.069, 1.307, 1.069]}
      ></mesh>
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
      />
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

useGLTF.preload("./src/assets/models/espresso.glb");

/**IcedTea */
export function Icedtea({ rotation, isMobile }) {
  const { nodes, materials } = useGLTF("./src/assets/models/icedtea.glb");

  const { viewport } = useThree();
  const responsiveRatio = viewport.width / 12;
  const bottleScaleRatio = Math.max(0.3, Math.min(0.6 * responsiveRatio, 1));

  return (
    <group
      dispose={null}
      rotation={isMobile ? [0, 0.5, 0] : rotation}
      position={
        isMobile
          ? [viewport.width / -12 - 0.5, -1.5, 0.6]
          : [viewport.width / -12 + 0.5, -1.5, 0.9]
      }
      scale={[bottleScaleRatio, bottleScaleRatio, bottleScaleRatio]}
    >
      <mesh
        geometry={nodes.mesh_0.geometry}
        material={nodes.mesh_0.material}
        position={[0, 2.179, 0]}
        scale={[1.069, 1.307, 1.069]}
      />
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
      />
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

/**Maitai */

export function Maitai({ rotation, isMobile }) {
  const { nodes, materials } = useGLTF("./src/assets/models/maitai.glb");

  const { viewport } = useThree();
  const responsiveRatio = viewport.width / 12;
  const bottleScaleRatio = Math.max(0.3, Math.min(0.6 * responsiveRatio, 1));

  return (
    <group
      dispose={null}
      rotation={isMobile ? [0, 0.3, 0] : rotation}
      position={
        isMobile
          ? [viewport.width / 10 + 0.5, -1.5, -0.5]
          : [(viewport.width / 12) * 2.12, -1.6, -2]
      }
      scale={[bottleScaleRatio, bottleScaleRatio, bottleScaleRatio]}
    >
      <mesh
        geometry={nodes.mesh_0.geometry}
        material={nodes.mesh_0.material}
        position={[0, 2.179, 0]}
        scale={[1.069, 1.307, 1.069]}
      />
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
      />
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

useGLTF.preload("./src/assets/models/maitai.glb");

/**Elderflowerfizz */
export function Elderflowerfizz({ rotation, isMobile }) {
  const { nodes, materials } = useGLTF(
    "./src/assets/models/elderflowerfizz.glb"
  );

  const { viewport } = useThree();
  const responsiveRatio = viewport.width / 12;
  const bottleScaleRatio = Math.max(0.3, Math.min(0.6 * responsiveRatio, 1));

  return (
    <group
      dispose={null}
      rotation={isMobile ? [0.1, 0.5, -0.05] : rotation}
      position={
        isMobile
          ? [viewport.width / -12 - 0.5, 1, 0.5]
          : [(viewport.width / -12) * 3, -1.5, 0.5]
      }
      scale={[bottleScaleRatio, bottleScaleRatio, bottleScaleRatio]}
    >
      <mesh
        geometry={nodes.mesh_0.geometry}
        material={nodes.mesh_0.material}
        position={[0, 2.179, 0]}
        scale={[1.069, 1.307, 1.069]}
      />
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
      />
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

useGLTF.preload("./src/assets/models/elderflowerfizz.glb");

/*Negroni */

export function Negroni({ rotation, isMobile }) {
  const { nodes, materials } = useGLTF("./src/assets/models/negroni.glb");

  const { viewport } = useThree();
  const responsiveRatio = viewport.width / 12;
  const bottleScaleRatio = Math.max(0.3, Math.min(0.6 * responsiveRatio, 1));

  return (
    <group
      dispose={null}
      rotation={isMobile ? [0.1, 0.5, -0.05] : rotation}
      position={
        isMobile ? [0, 1, 0] : [(viewport.width / -12) * 5.6, -1.5, 0.5]
      }
      scale={[bottleScaleRatio, bottleScaleRatio, bottleScaleRatio]}
    >
      <mesh
        geometry={nodes.mesh_0.geometry}
        material={nodes.mesh_0.material}
        position={[0, 2.179, 0]}
        scale={[1.069, 1.307, 1.069]}
      />
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
      />
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

useGLTF.preload("./src/assets/models/negroni.glb");

/**Olfasion */

export function Olfasion({ rotation, isMobile }) {
  const { nodes, materials } = useGLTF("./src/assets/models/olfasion.glb");

  const { viewport } = useThree();
  const responsiveRatio = viewport.width / 12;
  const bottleScaleRatio = Math.max(0.3, Math.min(0.6 * responsiveRatio, 1));

  return (
    <group
      dispose={null}
      scale={[bottleScaleRatio, bottleScaleRatio, bottleScaleRatio]}
      rotation={isMobile ? [0.1, 0.3, -0.05] : rotation}
      position={
        isMobile
          ? [viewport.width / 12 + 0.65, 0.93, -0.4]
          : [(viewport.width / 12) * 3.7, -1.7, -4.5]
      }
    >
      <mesh
        geometry={nodes.mesh_0.geometry}
        material={nodes.mesh_0.material}
        position={[0, 2.179, 0]}
        scale={[1.069, 1.307, 1.069]}
      />
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
      />
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

useGLTF.preload("./src/assets/models/olfasion.glb");

/* Canvas */

const BottleCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  /* Resizing */
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width:800px)");
    setIsMobile(mediaQuery.matches);

    const mediaQueryChangeHandler = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", mediaQueryChangeHandler);

    return () => {
      mediaQuery.removeEventListener("change", mediaQueryChangeHandler);
    };
  }, []);

  return (
    <Canvas
      camera={{ position: [3, -1, 6], fov: 45 }}
      frameloop="demand"
      shadows
      gl={{ preserveDrawingBuffer: true }}
    >
      <ambientLight intensity={1} />
      <hemisphereLight intensity={1} groundColor={"black"} />
      <directionalLight position={[0, 0.1, 0]} intensity={10} />
      <Suspense fallback={<Loader />}>
        <Espresso rotation={[0, 0.1, 0]} isMobile={isMobile} />
        <Icedtea rotation={[0, 0.8, 0]} isMobile={isMobile} />
        <Maitai rotation={[0, -0.2, 0]} isMobile={isMobile} />
        <Elderflowerfizz rotation={[0, 1, 0]} isMobile={isMobile} />
        <Negroni rotation={[0, 1.1, 0]} isMobile={isMobile} />
        <Olfasion rotation={[0, -0.2, 0]} isMobile={isMobile} />
      </Suspense>
      {/* <Preload all /> */}
    </Canvas>
  );
};

export default BottleCanvas;
