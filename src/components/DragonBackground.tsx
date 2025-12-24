import { useRef, useEffect, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, useAnimations, Environment, Sparkles } from '@react-three/drei';
import * as THREE from 'three';
import dragonGlb from '@/assets/chinese_dragon_with_skeletal_animation.glb';

// Preload the model
useGLTF.preload(dragonGlb);

function DragonModel() {
  const group = useRef<THREE.Group>(null);
  const { scene, animations } = useGLTF(dragonGlb);
  const { actions } = useAnimations(animations, group);

  // Play animation if available
  useEffect(() => {
    if (actions && animations.length > 0) {
       // Play the first animation (usually the main loop)
       const action = actions[animations[0].name];
       if (action) {
           action.reset().fadeIn(0.5).play();
           // Slow down animation significantly
           action.timeScale = 0.4;
       }
    }
  }, [actions, animations]);

  useFrame((state) => {
    if (!group.current) return;

    // Time factor - slowed down
    const t = state.clock.getElapsedTime() * 0.2;

    // "In and out of page" movement (Z-axis) - slower oscillation
    const depth = Math.sin(t * 0.5) * 6 - 2;

    // Autonomous Wandering (Figure 8 / Lissajous pattern)
    // Larger range to cover screen
    const targetX = Math.sin(t * 0.6) * 8;
    const targetY = Math.sin(t * 1.3) * 3; // Vertical wandering

    // Smoothly update position
    group.current.position.x = THREE.MathUtils.lerp(group.current.position.x, targetX, 0.01);
    group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, targetY, 0.01);

    // Apply depth
    group.current.position.z = THREE.MathUtils.lerp(group.current.position.z, depth, 0.01);

    // Rotation logic
    // Look ahead logic
    const dx = 0.6 * Math.cos(t * 0.6) * 8; // approx velocity X
    const dy = 1.3 * Math.cos(t * 1.3) * 3; // approx velocity Y

    // Calculate target angle based on velocity
    const targetRotationY = Math.atan2(dx, 10); // Dampen look angle
    const targetRotationX = -Math.atan2(dy, 10);

    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, targetRotationY + (targetX * 0.1), 0.05);
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, targetRotationX, 0.05);

    // Add some "swimming" rotation
    group.current.rotation.z = Math.sin(t * 2) * 0.1;
  });

  return (
    <group ref={group} dispose={null}>
      <primitive object={scene} scale={1.5} />
    </group>
  );
}

const Lights = () => {
    return (
        <>
            <ambientLight intensity={0.5} />
            {/* Colorful Lights to make it "colorful" and illuminate the skeleton */}
            <pointLight position={[10, 10, 10]} color="#ff0088" intensity={500} distance={50} />
            <pointLight position={[-10, -10, -10]} color="#00ffff" intensity={500} distance={50} />
            <pointLight position={[0, 10, -10]} color="#ffff00" intensity={400} distance={50} />
            <spotLight position={[0, 0, 20]} angle={0.5} penumbra={1} intensity={200} color="white" />
        </>
    )
}

export const DragonBackground = () => {
    return (
             <div className="absolute inset-0 z-0 opacity-80 pointer-events-none">
                <Canvas shadows camera={{ position: [0, 0, 12], fov: 50 }}>
                    <Suspense fallback={null}>
                        <Lights />
                        <DragonModel />

                        {/* Environment for shiny reflections if material supports it */}
                        <Environment preset="night" />

                        {/* Particles for magical effect */}
                        <Sparkles count={150} scale={20} size={5} speed={0.4} opacity={0.6} color="#ffd700" />
                    </Suspense>
                </Canvas>
             </div>
    );
};
