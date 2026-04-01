"use client";

import { useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, Environment } from "@react-three/drei";
import { motion, useScroll, useTransform } from "framer-motion";

// Massive 3D Background Element
function AbstractMonolith() {
  const meshRef = useRef<any>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.05;
      meshRef.current.rotation.x += delta * 0.02;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <Sphere ref={meshRef} args={[1, 64, 64]} scale={2.5}>
        <MeshDistortMaterial
          color="#008080"
          attach="material"
          distort={0.4}
          speed={1.5}
          roughness={0.2}
          metalness={0.8}
          transmission={0.9}
          thickness={1}
          envMapIntensity={2}
          clearcoat={1}
        />
      </Sphere>
    </Float>
  );
}

export function Hero() {
  const { scrollY } = useScroll();
  const yText = useTransform(scrollY, [0, 1000], [0, 400]);
  const opacityText = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#0a0a0b] flex items-center justify-center">
      {/* 3D Environment Background */}
      <div className="absolute inset-0 z-0 opacity-40 mix-blend-screen pointer-events-none">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.2} />
          <directionalLight position={[10, 10, 5]} intensity={1.5} color="#0A2540" />
          <directionalLight position={[-10, -10, -5]} intensity={1} color="#00B1B1" />
          <AbstractMonolith />
          <Environment preset="city" />
        </Canvas>
      </div>

      {/* Hero Content */}
      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col items-center justify-center text-center mt-20"
        style={{ y: yText, opacity: opacityText }}
      >
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-[#00B1B1]/20 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
          <span className="text-xs font-bold tracking-[0.2em] text-[#00B1B1] uppercase">A Next Age Group Joint Venture</span>
        </motion.div>

        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-[1.05] mb-8 select-none"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          Building a Multi-Sector <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F2CA50] to-[#00B1B1]">
            India-Africa Ecosystem
          </span>
        </motion.h1>

        <motion.p 
          className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto font-medium leading-relaxed mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          TSG Inframedix is driving a cross-border strategic expansion, beginning with high-impact diagnostic healthcare infrastructure across Zambia.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row items-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <a href="#operations" className="px-8 py-4 rounded-full bg-white text-[#0a0a0b] text-sm font-bold uppercase tracking-widest hover:bg-slate-200 transition-colors squishy-btn shadow-[0_0_20px_rgba(255,255,255,0.2)]">
            Explore Operations
          </a>
          <a href="#about" className="px-8 py-4 rounded-full glass text-white text-sm font-bold uppercase tracking-widest hover:bg-white/10 transition-colors squishy-btn border-white/20">
            View Partnership
          </a>
        </motion.div>
      </motion.div>
      
      {/* Fade into next section */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0a0a0b] to-transparent z-10 pointer-events-none" />
    </section>
  );
}
