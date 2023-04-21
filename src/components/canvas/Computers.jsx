import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';


const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  return (
    // for creating threejs models, mesh element is required
    <mesh>
      {/* light is essential for viewing anything  */}
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight position={[-20, 50, 10]} angle={0.12} castShadow shadow-mapSize={1024} />
      <primitive object={computer.scene} scale={isMobile ? 0.7 : 0.75} position={isMobile ? [0, -3, -2.2] : [0, -3, -1.5]} rotation={[-0.01, -0.2, -0]} />
    </mesh>
  )
}

const ComputersCanvas = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // only works when the window size is less than or equal to 500px
    const mediaQuery = window.matchMedia('(max-width: 500px)');

    // initially setting the value of isMobile when the page is first loaded based on whether the screensize is currently in mobile view or desktop view
    setIsMobile(mediaQuery.matches);

    // keeps listening for change in the screen dimensions
    const handleMediaQueryChange = (e) => { setIsMobile(e.matches) };
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    // cleanup function to unmount the EventListener
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  }, [])
  return (
    // fov - field of view
    <Canvas frameloop='demand' shadows camera={{ position: [20, 3, 5], fov: 25 }} gl={{ preserveDrawingBuffer: true }}>
      <Suspense >
        {/* helps move the computer around in the canvas */}
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}


export default ComputersCanvas;