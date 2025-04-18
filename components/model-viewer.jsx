"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls, useGLTF } from "@react-three/drei";
import useResponsive from "@/hooks/use-responsive";

const Model = ({ model }) => {
  const { scene } = useGLTF(`/models/${model}`);

  return (
    <Center>
      <primitive object={scene} />
    </Center>
  );
};

const ModelViewer = ({ model }) => {
  const { isMobile } = useResponsive();

  return (
    <div className="h-full w-full relative cursor-pointer">
      <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[3, 3, 3]} intensity={1} />

        <Suspense fallback={null}>
          <Model model={model} />
        </Suspense>

        <OrbitControls
          autoRotate={isMobile}
          autoRotateSpeed={1}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
      <img
        src="/3d-arrows.webp"
        alt=""
        className="absolute bottom-0 pointer-events-none w-1/2 left-1/2 -translate-x-1/2"
      />
    </div>
  );
};

export default ModelViewer;