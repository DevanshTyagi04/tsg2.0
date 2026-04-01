"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Building2, Settings, Home, Activity, FlaskConical, PenTool } from "lucide-react";

export function Strengths() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll position of the section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Extremely smooth spring physics
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 25,
    mass: 0.1,
    restDelta: 0.001
  });

  // Map progress to X translation
  const x = useTransform(smoothProgress, [0, 1], ["0%", "-85%"]);

  const sectors = [
    {
      title: "Construction & Specialized Building",
      desc: "Executing massive-scale infrastructural projects with architectural precision.",
      color: "from-blue-600/20 to-blue-900/10",
      accent: "text-blue-400",
      border: "hover:border-blue-500/50",
      icon: <Building2 size={40} />,
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Wholesale of Machinery & Equipment",
      desc: "Supplying state-of-the-art industrial and medical hardware across borders.",
      color: "from-cyan-600/20 to-cyan-900/10",
      accent: "text-cyan-400",
      border: "hover:border-cyan-500/50",
      icon: <Settings size={40} />,
      image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Real Estate Development & Leasing",
      desc: "Acquiring, developing, and managing high-yield commercial properties.",
      color: "from-teal-600/20 to-teal-900/10",
      accent: "text-teal-400",
      border: "hover:border-teal-500/50",
      icon: <Home size={40} />,
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Other Human Health Activities",
      desc: "Extending the medical footprint into preventative care and holistic wellness hubs.",
      color: "from-emerald-600/20 to-emerald-900/10",
      accent: "text-emerald-400",
      border: "hover:border-emerald-500/50",
      icon: <Activity size={40} />,
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Pharmaceuticals Manufacturing",
      desc: "Localizing the supply chain through medicinal product manufacturing plants.",
      color: "from-green-600/20 to-green-900/10",
      accent: "text-green-500",
      border: "hover:border-green-500/50",
      icon: <FlaskConical size={40} />,
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Specialized Design Consultancy",
      desc: "Providing top-tier architectural consultancy for complex infrastructural ecosystems.",
      color: "from-lime-600/20 to-lime-900/10",
      accent: "text-lime-400",
      border: "hover:border-lime-500/50",
      icon: <PenTool size={40} />,
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  return (
    <section id="roadmap" ref={containerRef} className="relative h-[400vh] bg-[#0a0a0b]">
      
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        
        {/* Hardware accelerated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00B1B1]/5 to-transparent transform-gpu pointer-events-none" />

        <div className="max-w-[90rem] mx-auto px-6 w-full relative z-20 mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl lg:text-[5rem] font-black text-white leading-[0.9] tracking-tighter uppercase mb-6"
          >
            Strategic <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F2CA50]">Diversification.</span>
          </motion.h2>
          <div className="flex items-center gap-6">
            <div className="w-16 h-[2px] bg-[#00B1B1]"></div>
            <p className="text-slate-400 text-sm md:text-base font-bold uppercase tracking-[0.3em]">
              Multi-sector foundation for sustainable growth
            </p>
          </div>
        </div>

        {/* Horizontal Scroll Track (Optimized) */}
        <motion.div 
          style={{ x }} 
          className="flex gap-8 pl-6 md:pl-24 lg:pl-32 pb-12 w-max items-center relative z-10 will-change-transform transform-gpu"
        >
          {/* Main Anchor Node */}
          <div className="shrink-0 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-[#D4AF37] to-[#8a7220] flex flex-col items-center justify-center border-[8px] border-[#0a0a0b] shadow-[0_0_80px_rgba(212,175,55,0.2)] md:mr-12 hover:scale-105 transition-transform duration-500 transform-gpu">
            <span className="text-[10px] font-bold tracking-[0.4em] text-black/60 uppercase block mb-4">The Nucleus</span>
            <h3 className="text-4xl font-black text-black text-center tracking-tighter leading-none px-8">
              TSG <br />INFRAMEDIX<br />LTD
            </h3>
          </div>

          {/* Scrolling Sector Nodes */}
          {sectors.map((sector, idx) => (
            <div 
              key={idx}
              className={`shrink-0 w-[350px] md:w-[450px] h-[550px] rounded-[2.5rem] flex flex-col justify-between group cursor-grab active:cursor-grabbing border border-white/5 transition-all duration-300 overflow-hidden relative shadow-2xl bg-[#0a0a0b] ${sector.border} transform-gpu`}
            >
              
              {/* Sector Background Image (Optimized: No mix-blend-mode, standard absolute pos) */}
              <img 
                src={sector.image} 
                alt={sector.title} 
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-15 group-hover:opacity-30 group-hover:scale-105 transition-all duration-700 ease-out transform-gpu pointer-events-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-[#0a0a0b]/80 to-transparent pointer-events-none" />

              {/* Card Content Overlay */}
              <div className="relative z-10 p-10 h-full flex flex-col justify-between">
                <div className="space-y-8">
                  {/* Removed backdrop-blur for massive performance gain */}
                  <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${sector.color} flex items-center justify-center ${sector.accent} border border-white/5 shadow-inner`}>
                    {sector.icon}
                  </div>
                  <div className="flex items-center gap-4">
                    <span className={`text-[4rem] font-black opacity-20 ${sector.accent}`}>0{idx + 1}</span>
                    <div className={`h-[2px] w-12 bg-current opacity-30 ${sector.accent}`} />
                  </div>
                </div>
                
                <div>
                  <h4 className="text-2xl md:text-3xl font-bold text-slate-100 mb-6 tracking-tight leading-tight group-hover:text-white transition-colors">
                    {sector.title}
                  </h4>
                  <p className="text-slate-400 font-medium leading-relaxed group-hover:text-slate-300 transition-colors">
                    {sector.desc}
                  </p>
                </div>
              </div>

            </div>
          ))}
          
        </motion.div>

      </div>
    </section>
  );
}
