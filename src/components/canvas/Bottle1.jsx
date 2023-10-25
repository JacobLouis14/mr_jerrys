import React, { Suspense, useEffect, useState, useRef } from "react";
import {
  Preload,
  SpotLight,
  useGLTF,
  Environment,
  OrbitControls,
} from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";

import Loader from "../Loader";

/**espresso */
export function Espresso({ rotation, isMobile }) {
  const { nodes, materials } = useGLTF("./src/assets/models/espresso.glb");

  const { viewport } = useThree();
  const responsiveRatio = viewport.width / 12;
  const bottleScaleRatio = Math.max(0.3, Math.min(0.6 * responsiveRatio, 1));

  const [globalCoords, setGlobalCoords] = useState({ x: 0, y: 0 });
  const [isHover, setIsHover] = useState(false);

  // useEffect(() => {
  //   //  get global mouse coordinates
  //   const handleWindowMouseMove = (event) => {
  //     setGlobalCoords({
  //       x: event.screenX,
  //       y: event.screenY,
  //     });
  //   };
  //   window.addEventListener("mousemove", handleWindowMouseMove);
  //   return () => {
  //     window.removeEventListener("mousemove", handleWindowMouseMove);
  //   };
  // }, []);

  return (
    <group>
      <group
        dispose={null}
        rotation={isMobile ? [0, 0.5, 0] : rotation}
        position={
          isMobile
            ? [0, -1.5, 0]
            : [responsiveRatio, viewport.height / -12 / 0.31, 0]
        }
        scale={
          isHover
            ? [
                bottleScaleRatio + 0.03,
                bottleScaleRatio + 0.03,
                bottleScaleRatio + 0.03,
              ]
            : [bottleScaleRatio, bottleScaleRatio, bottleScaleRatio]
        }
        onPointerOver={() => setIsHover(true)}
        onPointerOut={() => setIsHover(false)}
      >
        <hemisphereLight
          intensity={1}
          groundColor={"#029d97"}
          color={"#029d97"}
        />
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
  const [isHover, setIsHover] = useState(false);

  return (
    <group
      dispose={null}
      onPointerOver={() => setIsHover(true)}
      onPointerOut={() => setIsHover(false)}
      rotation={isMobile ? [0, 0.5, 0] : rotation}
      position={
        isMobile
          ? [viewport.width / -12 - 0.5, -1.5, 0.6]
          : [
              -responsiveRatio * bottleScaleRatio + 0.1,
              viewport.height / -12 / 0.31,
              0.6,
            ]
      }
      scale={
        isHover
          ? [
              bottleScaleRatio + 0.03,
              bottleScaleRatio + 0.03,
              bottleScaleRatio + 0.03,
            ]
          : [bottleScaleRatio, bottleScaleRatio, bottleScaleRatio]
      }
    >
      <hemisphereLight intensity={0.3} groundColor={"#029bc7"} />
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
  const [isHover, setIsHover] = useState(false);

  return (
    <group
      dispose={null}
      onPointerOver={() => setIsHover(true)}
      onPointerOut={() => setIsHover(false)}
      rotation={isMobile ? [0, 0.3, 0] : rotation}
      position={
        isMobile
          ? [viewport.width / 10 + 0.5, -1.5, -0.5]
          : [
              (viewport.width / 12) * 2.8 - 0.9,
              -1.65,
              bottleScaleRatio * -2.2 - 1.5,
            ]
      }
      scale={
        isHover
          ? [
              bottleScaleRatio + 0.03,
              bottleScaleRatio + 0.03,
              bottleScaleRatio + 0.03,
            ]
          : [bottleScaleRatio, bottleScaleRatio, bottleScaleRatio]
      }
    >
      <hemisphereLight intensity={0.3} groundColor={"#ca584d"} />
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
  const [isHover, setIsHover] = useState(false);

  return (
    <group
      dispose={null}
      onPointerOver={() => setIsHover(true)}
      onPointerOut={() => setIsHover(false)}
      rotation={isMobile ? [0.1, 0.5, -0.05] : rotation}
      position={
        isMobile
          ? [viewport.width / -12 - 0.5, 1, 0.5]
          : [(viewport.width / -12) * 3.3, -1.6, -0.3]
      }
      scale={
        isHover
          ? [
              bottleScaleRatio + 0.03,
              bottleScaleRatio + 0.03,
              bottleScaleRatio + 0.03,
            ]
          : [bottleScaleRatio, bottleScaleRatio, bottleScaleRatio]
      }
    >
      <hemisphereLight intensity={0.3} groundColor={"purple"} />
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
  const [isHover, setIsHover] = useState(false);

  return (
    <group
      dispose={null}
      onPointerOver={() => setIsHover(true)}
      onPointerOut={() => setIsHover(false)}
      rotation={isMobile ? [0.1, 0.5, -0.05] : rotation}
      position={
        isMobile ? [0, 1, 0] : [(viewport.width / -12) * 7.3, -1.68, -1.5]
      }
      scale={
        isHover
          ? [
              bottleScaleRatio + 0.03,
              bottleScaleRatio + 0.03,
              bottleScaleRatio + 0.03,
            ]
          : [bottleScaleRatio, bottleScaleRatio, bottleScaleRatio]
      }
    >
      <hemisphereLight intensity={0.3} groundColor={"red"} />
      {/* <pointLight position={[0, 1, 3]} color={"red"} intensity={10} /> */}
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

useGLTF.preload("./src/assets/models/negroni.glb");

/**Olfasion */

export function Olfasion({ rotation, isMobile }) {
  const { nodes, materials } = useGLTF("./src/assets/models/olfasion.glb");

  const { viewport } = useThree();
  const responsiveRatio = viewport.width / 12;
  const bottleScaleRatio = Math.max(0.3, Math.min(0.6 * responsiveRatio, 1));

  const [isHover, setIsHover] = useState(false);

  return (
    <group>
      <group
        dispose={null}
        onPointerOver={() => setIsHover(true)}
        onPointerOut={() => setIsHover(false)}
        scale={
          isHover
            ? [
                bottleScaleRatio + 0.03,
                bottleScaleRatio + 0.03,
                bottleScaleRatio + 0.03,
              ]
            : [bottleScaleRatio, bottleScaleRatio, bottleScaleRatio]
        }
        rotation={isMobile ? [0.1, 0.3, -0.05] : rotation}
        position={
          isMobile
            ? [viewport.width / 12 + 0.65, 0.93, -0.4]
            : [bottleScaleRatio * 8 - 1.4, -1.7, bottleScaleRatio * -10.8 - 0.8]
        }
      >
        <hemisphereLight intensity={0.3} groundColor={"orange"} />

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
      gl={{ preserveDrawingBuffer: true }}
    >
      {/* <ambientLight intensity={0.2} /> */}
      {/* <directionalLight position={[0, 0.1, 0]} intensity={0.1} />
      <directionalLight
        position={[-5, 0.1, -8]}
        intensity={0.1}
        color={"white"}
      /> */}
      <Environment preset="night" />
      <Suspense fallback={<Loader />}>
        <Espresso rotation={[0, 0.4, 0]} isMobile={isMobile} />
        <Icedtea rotation={[0, 0.5, 0]} isMobile={isMobile} />
        <Maitai rotation={[0, 0.3, 0]} isMobile={isMobile} />
        <Elderflowerfizz rotation={[0, 0.6, 0]} isMobile={isMobile} />
        <Negroni rotation={[0, 0.7, 0]} isMobile={isMobile} />
        <Olfasion rotation={[0, 0.2, 0]} isMobile={isMobile} />
      </Suspense>
      {/* <Preload all /> */}
    </Canvas>
  );
};

export default BottleCanvas;
