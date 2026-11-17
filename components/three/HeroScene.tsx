"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function heartShape() {
  const s = new THREE.Shape();
  s.moveTo(0, 0.35);
  s.bezierCurveTo(0, 0.6, -0.5, 0.7, -0.5, 0.3);
  s.bezierCurveTo(-0.5, -0.05, -0.1, -0.2, 0, -0.5);
  s.bezierCurveTo(0.1, -0.2, 0.5, -0.05, 0.5, 0.3);
  s.bezierCurveTo(0.5, 0.7, 0, 0.6, 0, 0.35);
  return s;
}

function Heart({ position, scale, speed }: { position: [number, number, number]; scale: number; speed: number }) {
  const geo = useMemo(() => new THREE.ExtrudeGeometry(heartShape(), { depth: 0.25, bevelEnabled: true, bevelSize: 0.06, bevelThickness: 0.06, bevelSegments: 4 }), []);
  return (
    <Float speed={speed} rotationIntensity={0.9} floatIntensity={1.4}>
      <mesh geometry={geo} position={position} scale={scale}>
        <meshStandardMaterial color="#8000f8" roughness={0.35} metalness={0.05} />
      </mesh>
    </Float>
  );
}

function Stethoscope() {
  const geo = useMemo(() => {
    const curve = new THREE.CatmullRomCurve3(
      [
        new THREE.Vector3(-1.4, 1.5, 0), new THREE.Vector3(-1.9, 0.2, 0.2), new THREE.Vector3(-1.2, -1.2, 0),
        new THREE.Vector3(0.2, -1.7, -0.2), new THREE.Vector3(1.6, -1.0, 0), new THREE.Vector3(1.9, 0.3, 0.2),
        new THREE.Vector3(1.2, 1.1, 0),
      ],
      false, "catmullrom", 0.5,
    );
    return new THREE.TubeGeometry(curve, 120, 0.1, 16, false);
  }, []);
  return (
    <group>
      <mesh geometry={geo}>
        <meshStandardMaterial color="#a00010" roughness={0.3} metalness={0.1} />
      </mesh>
      <mesh position={[1.2, 1.1, 0]}>
        <torusGeometry args={[0.28, 0.08, 16, 40]} />
        <meshStandardMaterial color="#c9ccd1" roughness={0.25} metalness={0.8} />
      </mesh>
      <mesh position={[-1.4, 1.5, 0]}>
        <sphereGeometry args={[0.14, 16, 16]} />
        <meshStandardMaterial color="#787878" roughness={0.4} metalness={0.6} />
      </mesh>
    </group>
  );
}

function Rig({ small, children }: { small: boolean; children: React.ReactNode }) {
  const group = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!group.current) return;
    const y = typeof window === "undefined" ? 0 : window.scrollY;
    const t = state.clock.getElapsedTime();
    group.current.rotation.y = Math.sin(t * 0.4) * 0.35 + y * 0.0016;
    group.current.rotation.x = Math.sin(t * 0.3) * 0.08 - y * 0.0006;
    group.current.position.y = Math.sin(t * 0.8) * 0.06 - y * 0.0008;
    group.current.scale.setScalar(small ? 0.8 : 1);
  });
  return <group ref={group}>{children}</group>;
}

export default function HeroScene({ small = false }: { small?: boolean }) {
  return (
    <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 6], fov: 40 }} gl={{ antialias: !small, alpha: true }}>
      <ambientLight intensity={1.1} />
      <directionalLight position={[3, 4, 5]} intensity={2.2} />
      <directionalLight position={[-4, -2, 3]} intensity={0.8} color="#ffe88a" />
      <Rig small={small}>
        <Stethoscope />
        <Heart position={[-0.4, 0.3, 0.2]} scale={1.1} speed={1.4} />
        <Heart position={[1.0, -0.6, 0.4]} scale={0.7} speed={1.8} />
        {!small && <Heart position={[-1.6, -0.9, 0.3]} scale={0.5} speed={2.2} />}
        <Float speed={1.2} floatIntensity={1.6}>
          <mesh position={[0.3, 1.5, -0.4]}>
            <sphereGeometry args={[0.28, 24, 24]} />
            <meshStandardMaterial color="#f85800" roughness={0.45} />
          </mesh>
        </Float>
        <Float speed={1.6} floatIntensity={1.2}>
          <mesh position={[-1.7, 0.9, -0.2]}>
            <sphereGeometry args={[0.2, 24, 24]} />
            <meshStandardMaterial color="#ffe88a" roughness={0.4} />
          </mesh>
        </Float>
      </Rig>
    </Canvas>
  );
}
