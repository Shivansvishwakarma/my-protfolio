import {
  Canvas,
  useFrame,
} from "@react-three/fiber";

import {
  Environment,
  Float,
  Sparkles,
} from "@react-three/drei";

import {
  Suspense,
  useRef,
} from "react";

function Core() {
  const group = useRef(null);

  useFrame((state) => {
    if (!group.current) return;

    const { x, y } = state.pointer;

    group.current.rotation.x +=
      (y * 0.15 -
        group.current.rotation.x) *
      0.03;

    group.current.rotation.y +=
      (x * 0.25 -
        group.current.rotation.y) *
      0.03;
  });

  return (
    <group ref={group}>
      <Float
        speed={2}
        rotationIntensity={0.5}
        floatIntensity={1}
      >
        {/* OUTER CORE */}

        <mesh>
          <icosahedronGeometry
            args={[1.5, 2]}
          />

          <meshStandardMaterial
            color="#10b981"
            wireframe
            transparent
            opacity={0.65}
          />
        </mesh>

        {/* INNER CORE */}

        <mesh scale={0.62}>
          <icosahedronGeometry
            args={[1.5, 2]}
          />

          <meshStandardMaterial
            color="#050505"
            roughness={0.2}
            metalness={0.9}
          />
        </mesh>

        {/* ORBITING NODE */}

        <mesh position={[2, 0, 0]}>
          <sphereGeometry
            args={[0.12, 16, 16]}
          />

          <meshStandardMaterial
            color="#10b981"
            emissive="#10b981"
            emissiveIntensity={2}
          />
        </mesh>
      </Float>
    </group>
  );
}

function HeroScene() {
  return (
    <div className="h-[320px] w-full sm:h-[400px] lg:h-[500px]">
      <Canvas
        camera={{
          position: [0, 0, 6],
          fov: 45,
        }}
        dpr={[1, 1.5]}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />

          <directionalLight
            position={[3, 3, 4]}
            intensity={2}
          />

          <Sparkles
            count={80}
            scale={7}
            size={1.5}
            speed={0.3}
          />

          <Core />

          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default HeroScene;