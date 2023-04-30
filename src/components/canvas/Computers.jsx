import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from '../Loader';

function Computers() {
  const computer = useGLTF("./computer_and_laptop/scene.gltf");

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight 
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
      />
      <Suspense fallback={<CanvasLoader />}>
        <Preload all />
        <primitive
          object={computer.scene}
          scale={0.15}
          position={[0, -3.50, -1.05]}
          rotation={[0, 45.3, 0]}
        />
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Suspense>
    </Canvas>
  );
}

export default Computers;