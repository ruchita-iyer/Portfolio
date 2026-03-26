// @ts-nocheck
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Plane, MeshDistortMaterial, Environment } from '@react-three/drei';
import * as THREE from 'three';

const PointerLight = ({ hoverRef }: { hoverRef: React.MutableRefObject<boolean> }) => {
  const mainLightRef = useRef<THREE.PointLight>(null);
  const accentLightRef = useRef<THREE.PointLight>(null);
  
  useFrame((state) => {
    if (mainLightRef.current && accentLightRef.current) {
      // Smoothly interpolate the light position to follow the mouse over the water
      const targetX = (state.pointer.x * 10);
      const targetY = (state.pointer.y * 10);
      mainLightRef.current.position.x = THREE.MathUtils.lerp(mainLightRef.current.position.x, targetX, 0.1);
      mainLightRef.current.position.y = THREE.MathUtils.lerp(mainLightRef.current.position.y, targetY, 0.1);

      // Fade Intensity based on hover state (lights up when hovered)
      const targetMainIntensity = hoverRef.current ? 35 : 0;
      const targetAccentIntensity = hoverRef.current ? 10 : 2;
      
      mainLightRef.current.intensity = THREE.MathUtils.lerp(mainLightRef.current.intensity, targetMainIntensity, 0.05);
      accentLightRef.current.intensity = THREE.MathUtils.lerp(accentLightRef.current.intensity, targetAccentIntensity, 0.05);
    }
  });

  return (
    <>
      <pointLight ref={mainLightRef} distance={20} intensity={0} color="#14b8a6" position={[0, 0, 2]} />
      <pointLight ref={accentLightRef} distance={15} intensity={2} color="#8b5cf6" position={[0, -2, 2]} />
    </>
  );
};

const AnimatedWater = ({ hoverRef }: { hoverRef: React.MutableRefObject<boolean> }) => {
  const materialRef = useRef<any>(null);
  
  useFrame(() => {
    if (materialRef.current) {
      // Distort goes from 0.1 (calm, glassy lake) to 0.5 (turbulent rippling pond)
      const targetDistort = hoverRef.current ? 0.5 : 0.1;
      const targetSpeed = hoverRef.current ? 3.0 : 0.5;
      
      materialRef.current.distort = THREE.MathUtils.lerp(materialRef.current.distort, targetDistort, 0.05);
      materialRef.current.speed = THREE.MathUtils.lerp(materialRef.current.speed, targetSpeed, 0.05);
    }
  });

  return (
    <Plane args={[30, 30, 128, 128]} rotation={[-Math.PI / 2.2, 0, 0]} position={[0, -1.5, 0]}>
      <MeshDistortMaterial 
        ref={materialRef}
        color="#030712"
        envMapIntensity={0.5}
        clearcoat={1}
        clearcoatRoughness={0.1}
        metalness={0.9}
        roughness={0.1}
        distort={0.1} 
        speed={0.5} 
      />
    </Plane>
  );
};

const Contact: React.FC = () => {
  const hoverRef = useRef(false);

  return (
    <section 
      id="contact" 
      className="relative w-full h-[600px] md:h-[800px] overflow-hidden border-t border-glass-border bg-[#050505]"
      onMouseEnter={() => hoverRef.current = true}
      onMouseLeave={() => hoverRef.current = false}
    >
      {/* Native R3F Interactive Pond */}
      <div className="absolute inset-0 z-0 opacity-70 cursor-crosshair">
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <ambientLight intensity={0.1} />
          
          <PointerLight hoverRef={hoverRef} />
          <AnimatedWater hoverRef={hoverRef} />
          
          <Environment preset="night" />
        </Canvas>
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 md:p-12 z-10 pointer-events-none">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: 'spring' }}
          className="relative z-20 text-center max-w-4xl hover:scale-105 transition-transform duration-700 pointer-events-auto"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight drop-shadow-2xl">
            Let's make some <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-500">waves.</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed font-light drop-shadow-md max-w-2xl mx-auto mix-blend-screen">
            Hover your mouse across the dark pond above to interact with the fluid simulation.
            <br /><br />
            My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:13ruchitaiyer@gmail.com"
            className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-white/20 hover:shadow-[0_0_40px_rgba(20,184,166,0.3)] transition-all duration-300"
          >
            <Mail size={24} />
            Get In Touch
            <ArrowRight size={24} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
