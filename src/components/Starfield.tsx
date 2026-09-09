import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const STAR_COUNT = 2500;

const Stars = () => {
  const pointsRef = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const positions = new Float32Array(STAR_COUNT * 3);

    for (let i = 0; i < STAR_COUNT; i++) {
      const i3 = i * 3;

      positions[i3] = (Math.random() - 0.5) * 100;
      positions[i3 + 1] = (Math.random() - 0.5) * 60;
      positions[i3 + 2] = (Math.random() - 0.5) * 100;
    }

    return positions;
  }, []);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;

    pointsRef.current.rotation.y += delta * 0.015;
    pointsRef.current.rotation.x += delta * 0.003;

    const mouseX = state.pointer.x;
    const mouseY = state.pointer.y;

    pointsRef.current.rotation.y +=
      (mouseX * 0.05 - pointsRef.current.rotation.y) * 0.01;

    pointsRef.current.rotation.x +=
      (-mouseY * 0.03 - pointsRef.current.rotation.x) * 0.01;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>

      <pointsMaterial
        color="#9BA8AB"
        size={0.08}
        sizeAttenuation
        transparent
        opacity={0.65}
        depthWrite={false}
      />
    </points>
  );
};

const Starfield = () => {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <Canvas
        camera={{
          position: [0, 0, 10],
          fov: 60,
        }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
        }}
      >
        <Stars />
      </Canvas>
    </div>
  );
};

export default Starfield;