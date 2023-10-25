import React, { useEffect } from "react";
import { IcedTeaHtml, Iced_tea } from "./Iced_tea";
import { Canvas } from "@react-three/fiber";
import { Scroll, ScrollControls } from "@react-three/drei";

export default function Body() {
  return (
    <div>
      <section>
        <Canvas frameloop="demand" style={{ height: "100vh" }}>
          <ScrollControls pages={4}>
            <Scroll>
              <Iced_tea />
            </Scroll>
            <Scroll html>
              <IcedTeaHtml />
            </Scroll>
          </ScrollControls>
        </Canvas>
      </section>
    </div>
  );
}
