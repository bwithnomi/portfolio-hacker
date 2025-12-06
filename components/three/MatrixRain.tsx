"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+-=[]{}|;:,.<>?";
const matrixGreen = new THREE.Color(0x00ff41);

function MatrixColumn({ x, z, charCount = 20 }: { x: number; z: number; charCount?: number }) {
  const meshRef = useRef<THREE.Group>(null);
  const speed = useMemo(() => 0.02 + Math.random() * 0.03, []);
  const startY = useMemo(() => Math.random() * 10, []);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.position.y -= speed;
      if (meshRef.current.position.y < -15) {
        meshRef.current.position.y = 15;
      }
    }
  });

  return (
    <group ref={meshRef} position={[x, startY, z]}>
      {Array.from({ length: charCount }).map((_, i) => {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const y = -i * 0.3;
        const opacity = Math.max(0.1, 1 - i * 0.08);
        
        return (
          <mesh key={i} position={[0, y, 0]}>
            <planeGeometry args={[0.15, 0.2]} />
            <meshBasicMaterial
              color={matrixGreen}
              transparent
              opacity={opacity}
              side={THREE.DoubleSide}
            />
          </mesh>
        );
      })}
    </group>
  );
}

function MatrixRain() {
  const columns = 30; // Reduced for performance
  const columnSpacing = 0.4;

  const columnPositions = useMemo(() => {
    const positions: Array<{ x: number; z: number }> = [];
    const colsPerRow = Math.sqrt(columns);
    const startX = -(colsPerRow * columnSpacing) / 2;
    const startZ = -2;

    for (let i = 0; i < columns; i++) {
      const row = Math.floor(i / colsPerRow);
      const col = i % colsPerRow;
      positions.push({
        x: startX + col * columnSpacing,
        z: startZ + row * columnSpacing * 0.5,
      });
    }
    return positions;
  }, []);

  return (
    <>
      {columnPositions.map((pos, i) => (
        <MatrixColumn key={i} x={pos.x} z={pos.z} charCount={15} />
      ))}
    </>
  );
}

export function MatrixRainCanvas() {
  return (
    <div className="absolute inset-0 -z-10 w-full h-full">
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ width: '100%', height: '100%' }}
      >
        <MatrixRain />
      </Canvas>
    </div>
  );
}
