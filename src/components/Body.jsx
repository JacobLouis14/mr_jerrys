import React, { useEffect, useRef } from "react";
import { IcedTeaHtml, Iced_tea } from "./Pages/Iced_tea";
import { Canvas } from "@react-three/fiber";
import { Preload, Scroll, ScrollControls, View } from "@react-three/drei";
import { Expresso, ExpressoHtml } from "./Pages/expresso";

export default function Body() {
  const tracking = useRef();
  const tracking2 = useRef();
  const ref = useRef();

  return (
    <div ref={ref} style={{ height: "200vh" }}>
      <div
        ref={tracking}
        style={{
          position: "absolute",
          width: "100%",
          height: "100vh",
        }}
      >
        <IcedTeaHtml />
      </div>
      <div
        ref={tracking2}
        style={{
          position: "absolute",
          top: "200vh",
          width: "100%",
          height: "100vh",
        }}
      >
        <ExpressoHtml />
      </div>
      <Canvas
        frameloop="demand"
        // gl={{ preserveDrawingBuffer: true }}
        eventSource={ref}
      >
        <View track={tracking} frames={1}>
          <Iced_tea />
        </View>
        <View track={tracking2} frames={1}>
          <Expresso />
        </View>
        <Preload all />
      </Canvas>
    </div>
  );
}
