"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Building2, Settings, Home, Activity, FlaskConical, PenTool, ArrowRight } from "lucide-react";

export function Strengths() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 25,
    mass: 0.1,
    restDelta: 0.001
  });

  const x = useTransform(smoothProgress, [0, 1], ["0%", "-85%"]);

  const sectors = [
    {
      title: "Construction & Specialized Building",
      desc: "Executing massive-scale infrastructural projects with architectural precision.",
      color: "from-blue-600/20 to-blue-900/10",
      accent: "text-blue-400",
      border: "hover:border-blue-500/50",
      icon: <Building2 className="w-8 h-8 md:w-10 md:h-10" />,
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Wholesale of Machinery & Equipment",
      desc: "Supplying state-of-the-art industrial and medical hardware across borders.",
      color: "from-cyan-600/20 to-cyan-900/10",
      accent: "text-cyan-400",
      border: "hover:border-cyan-500/50",
      icon: <Settings className="w-8 h-8 md:w-10 md:h-10" />,
      image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Real Estate Development & Leasing",
      desc: "Acquiring, developing, and managing high-yield commercial properties.",
      color: "from-teal-600/20 to-teal-900/10",
      accent: "text-teal-400",
      border: "hover:border-teal-500/50",
      icon: <Home className="w-8 h-8 md:w-10 md:h-10" />,
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Other Human Health Activities",
      desc: "Extending the medical footprint into preventative care and holistic wellness hubs.",
      color: "from-emerald-600/20 to-emerald-900/10",
      accent: "text-emerald-400",
      border: "hover:border-emerald-500/50",
      icon: <Activity className="w-8 h-8 md:w-10 md:h-10" />,
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Pharmaceuticals Manufacturing",
      desc: "Localizing the supply chain through medicinal product manufacturing plants.",
      color: "from-green-600/20 to-green-900/10",
      accent: "text-green-500",
      border: "hover:border-green-500/50",
      icon: <FlaskConical className="w-8 h-8 md:w-10 md:h-10" />,
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Specialized Design Consultancy",
      desc: "Providing top-tier architectural consultancy for complex infrastructural ecosystems.",
      color: "from-lime-600/20 to-lime-900/10",
      accent: "text-lime-400",
      border: "hover:border-lime-500/50",
      icon: <PenTool className="w-8 h-8 md:w-10 md:h-10" />,
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  return (
    <>
      <section id="diversification" ref={containerRef} className="relative z-20 h-[400vh] bg-[#0a0a0b] border-t border-white/5">
        
        {/* Switched to responsive flex-col justify-center. Used gap safely to prevent overlap. */}
        <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center gap-6 lg:gap-10 pt-16">
          
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00B1B1]/5 to-transparent transform-gpu pointer-events-none" />

          {/* Header block strictly bounded */}
          <div className="max-w-[90rem] mx-auto px-6 w-full relative z-20 shrink-0">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-[0.9] tracking-tighter uppercase mb-4"
            >
              Strategic <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F2CA50]">Diversification.</span>
            </motion.h2>
            <div className="flex items-center gap-4 md:gap-6">
              <div className="w-10 md:w-16 h-[2px] bg-[#00B1B1]"></div>
              <p className="text-slate-400 text-xs md:text-sm font-bold uppercase tracking-[0.2em] md:tracking-[0.3em]">
                Multi-sector foundation for sustainable growth
              </p>
            </div>
          </div>

          {/* Cards Track with vh units! This strictly prevents bottom cropping on laptops */}
          <motion.div 
            style={{ x }} 
            className="flex gap-6 lg:gap-8 pl-6 md:pl-24 lg:pl-32 w-max items-center relative z-10 will-change-transform transform-gpu shrink-0"
          >
            {/* The Nucleus */}
            <div className="shrink-0 aspect-square w-[35vh] h-[35vh] min-w-[220px] min-h-[220px] max-w-[320px] max-h-[320px] rounded-full bg-gradient-to-br from-[#D4AF37] to-[#8a7220] flex flex-col items-center justify-center border-[6px] md:border-[8px] border-[#0a0a0b] shadow-[0_0_80px_rgba(212,175,55,0.2)] md:mr-12 hover:scale-105 transition-transform duration-500 transform-gpu">
              <span className="text-[9px] md:text-[10px] font-bold tracking-[0.4em] text-black/60 uppercase block mb-3">The Nucleus</span>
              <h3 className="text-2xl md:text-3xl font-black text-black text-center tracking-tighter leading-none px-6 md:px-8">
                TSG <br />INFRAMEDIX<br />LTD
              </h3>
            </div>

            {/* Diverse Sector Cards */}
            {sectors.map((sector, idx) => (
              <div 
                key={idx}
                className={`shrink-0 w-[75vw] md:w-[380px] h-[55vh] min-h-[350px] max-h-[460px] rounded-[2rem] md:rounded-[2.5rem] flex flex-col justify-between group cursor-grab active:cursor-grabbing border border-white/5 transition-all duration-300 overflow-hidden relative shadow-2xl bg-[#0a0a0b] ${sector.border} transform-gpu`}
              >
                <img 
                  src={sector.image} 
                  alt={sector.title} 
                  className="absolute inset-0 w-full h-full object-cover grayscale opacity-15 group-hover:opacity-30 group-hover:scale-105 transition-all duration-700 ease-out transform-gpu pointer-events-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-[#0a0a0b]/80 to-transparent pointer-events-none" />

                <div className="relative z-10 p-6 md:p-8 h-full flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className={`w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br ${sector.color} flex items-center justify-center ${sector.accent} border border-white/5 shadow-inner`}>
                      {sector.icon}
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={`text-4xl md:text-5xl font-black opacity-20 ${sector.accent}`}>0{idx + 1}</span>
                      <div className={`h-[2px] w-8 md:w-12 bg-current opacity-30 ${sector.accent}`} />
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg md:text-2xl font-bold text-slate-100 mb-2 md:mb-3 tracking-tight leading-tight group-hover:text-white transition-colors line-clamp-2">
                      {sector.title}
                    </h4>
                    <p className="text-xs md:text-sm text-slate-400 font-medium leading-[1.6] group-hover:text-slate-300 transition-colors line-clamp-3">
                      {sector.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

    </>
  );
}
