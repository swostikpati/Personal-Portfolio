import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { motion } from "framer-motion";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  return (
    <mesh>
      {/* Essential lights */}
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.7}
        position={isMobile ? [0, -3, -2.2] : [0, -3, -1]}
        rotation={[-0.01, -0.2, -0]}
      />
    </mesh>
  );
};

// **Loading Spinner Component**
const Loader = () => {
  return (
    <div className="absolute inset-0 flex justify-center items-center bg-black">
      <motion.div
        className="w-10 h-10 border-4 border-t-transparent border-cyan-500 border-solid rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Detect mobile screen
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (e) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Simulate model loading delay (remove this if your model loads instantly)
    setTimeout(() => setIsLoading(false), 1500);

    return () =>
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  return (
    <div className="relative w-full h-screen">
      {isLoading && <Loader />}
      <Canvas
        frameloop="demand"
        shadows
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={null}>
          {" "}
          {/* Removed Suspense loader as we manually handle loading */}
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Computers isMobile={isMobile} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default ComputersCanvas;
