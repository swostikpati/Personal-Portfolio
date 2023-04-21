import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from "../Loader";


const Computers = () => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  return (
    // for creating threejs models, mesh element is required
    <mesh>
      {/* light is essential for viewing anything  */}
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight position={[-20, 50, 10]} angle={0.12} castShadow shadow-mapSize={1024} />
      <primitive object={computer.scene} scale={0.75} position={[0, -3.5, -1.5]} />
    </mesh>
  )
}

const ComputersCanvas = () => {
  return (
    // fov - field of view
    <Canvas frameloop='demand' shadows camera={{ position: [20, 3, 5], fov: 25 }} gl={{ preserveDrawingBuffer: true }}>
      <Suspense >
        {/* helps move the computer around in the canvas */}
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <Computers />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}


export default ComputersCanvas;