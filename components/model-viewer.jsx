"use client";

import React, { Suspense, useEffect, useRef } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import useResponsive from "@/hooks/use-responsive";
import * as THREE from "three";
import clsx from "clsx";

const Model = ({ model, controlsRef }) => {
  const { scene } = useGLTF(`/models/${model}`);
  const { camera } = useThree();

  useEffect(() => {
    if (scene) {
      const box = new THREE.Box3().setFromObject(scene);
      const center = box.getCenter(new THREE.Vector3());
      const size = box.getSize(new THREE.Vector3());

      const maxDim = Math.max(size.x, size.y, size.z);
      const fov = camera.fov * (Math.PI / 180);
      const distance = maxDim / (2 * Math.tan(fov / 2));

      const offset = 1.25;
      camera.position.set(center.x, center.y, center.z + distance * offset);
      camera.lookAt(center);

      if (controlsRef.current) {
        controlsRef.current.target.copy(center);
        controlsRef.current.update();
      }
    }
  }, [scene]);

  return <primitive object={scene} />;
};

const ModelViewer = ({ model, device, disableRotate }) => {
  const { isMobile } = useResponsive();
  const controlsRef = useRef(null);

  if (device === "mobile" && !isMobile) {
    return null;
  }
  if (device === "desktop" && isMobile) {
    return null;
  }

  return (
    <div className="h-full w-full relative cursor-pointer flex flec-col">
      <div className={clsx("w-full", disableRotate ? "h-full" : "h-[calc(100%_-_76px)] ")}>
        <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[3, 3, 3]} intensity={1} />

          <Suspense fallback={null}>
            <Model model={model} controlsRef={controlsRef} />
          </Suspense>

          <OrbitControls
            autoRotate
            autoRotateSpeed={1}
            enableRotate={!disableRotate}
            enableZoom={false}
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
            ref={controlsRef}
          />
        </Canvas>
      </div>
      {!disableRotate && (
        <img
          src="/3d-arrows.webp"
          alt=""
          className="absolute bottom-0 pointer-events-none w-1/2 left-1/2 -translate-x-1/2"
        />
      )}
    </div>
  );
};

export default ModelViewer;