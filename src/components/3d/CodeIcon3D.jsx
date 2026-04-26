import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, Sphere, Torus } from '@react-three/drei';

// 3D Code Icon Component using geometric shapes
function CodeSymbol() {
  const groupRef = useRef();
  const leftRef = useRef();
  const rightRef = useRef();
  const centerRef = useRef();
  
  useFrame((state) => {
    const time = state.clock.elapsedTime;
    
    if (groupRef.current) {
      // Gentle floating motion
      groupRef.current.position.y = Math.sin(time * 0.8) * 0.2;
      groupRef.current.rotation.y = Math.sin(time * 0.5) * 0.1;
    }
    
    if (leftRef.current) {
      leftRef.current.rotation.z = Math.sin(time * 1.2) * 0.1;
    }
    
    if (rightRef.current) {
      rightRef.current.rotation.z = -Math.sin(time * 1.2) * 0.1;
    }
    
    if (centerRef.current) {
      centerRef.current.rotation.x = time * 0.5;
      centerRef.current.rotation.y = time * 0.3;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Left bracket representation */}
      <group ref={leftRef} position={[-2, 0, 0]}>
        <Box args={[0.3, 2, 0.3]} position={[-0.5, 0, 0]}>
          <meshStandardMaterial
            color="#8b5cf6"
            emissive="#8b5cf6"
            emissiveIntensity={0.3}
            metalness={0.8}
            roughness={0.2}
          />
        </Box>
        <Box args={[1, 0.3, 0.3]} position={[0, 0.85, 0]}>
          <meshStandardMaterial
            color="#8b5cf6"
            emissive="#8b5cf6"
            emissiveIntensity={0.3}
            metalness={0.8}
            roughness={0.2}
          />
        </Box>
        <Box args={[1, 0.3, 0.3]} position={[0, -0.85, 0]}>
          <meshStandardMaterial
            color="#8b5cf6"
            emissive="#8b5cf6"
            emissiveIntensity={0.3}
            metalness={0.8}
            roughness={0.2}
          />
        </Box>
      </group>

      {/* Center slash representation */}
      <group ref={centerRef} position={[0, 0, 0]}>
        <Torus args={[0.8, 0.2, 16, 32]} rotation={[0, 0, Math.PI / 4]}>
          <meshStandardMaterial
            color="#ec4899"
            emissive="#ec4899"
            emissiveIntensity={0.4}
            metalness={0.9}
            roughness={0.1}
          />
        </Torus>
      </group>

      {/* Right bracket representation */}
      <group ref={rightRef} position={[2, 0, 0]}>
        <Box args={[0.3, 2, 0.3]} position={[0.5, 0, 0]}>
          <meshStandardMaterial
            color="#06b6d4"
            emissive="#06b6d4"
            emissiveIntensity={0.3}
            metalness={0.8}
            roughness={0.2}
          />
        </Box>
        <Box args={[1, 0.3, 0.3]} position={[0, 0.85, 0]}>
          <meshStandardMaterial
            color="#06b6d4"
            emissive="#06b6d4"
            emissiveIntensity={0.3}
            metalness={0.8}
            roughness={0.2}
          />
        </Box>
        <Box args={[1, 0.3, 0.3]} position={[0, -0.85, 0]}>
          <meshStandardMaterial
            color="#06b6d4"
            emissive="#06b6d4"
            emissiveIntensity={0.3}
            metalness={0.8}
            roughness={0.2}
          />
        </Box>
      </group>

      {/* Glowing particles around the symbol */}
      <Sphere args={[0.1]} position={[-3, 1.5, 0.5]}>
        <meshStandardMaterial
          color="#8b5cf6"
          emissive="#8b5cf6"
          emissiveIntensity={0.8}
        />
      </Sphere>
      <Sphere args={[0.08]} position={[3, -1.2, 0.3]}>
        <meshStandardMaterial
          color="#06b6d4"
          emissive="#06b6d4"
          emissiveIntensity={0.8}
        />
      </Sphere>
      <Sphere args={[0.06]} position={[0, 2, -0.5]}>
        <meshStandardMaterial
          color="#ec4899"
          emissive="#ec4899"
          emissiveIntensity={0.8}
        />
      </Sphere>
    </group>
  );
}

// Simple 3D scene for the code icon
function Scene3D() {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={0.8} color="#8b5cf6" />
      <pointLight position={[-5, -5, 5]} intensity={0.6} color="#ec4899" />
      
      {/* 3D Code Symbol */}
      <CodeSymbol />
    </>
  );
}

export default function CodeIcon3D() {
  return (
    <div className="w-32 h-32 mx-auto mb-8">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        dpr={[1, 2]}
        performance={{ min: 0.8 }}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance"
        }}
      >
        <Scene3D />
      </Canvas>
    </div>
  );
}
