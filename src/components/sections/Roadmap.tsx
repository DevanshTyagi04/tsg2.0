"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Roadmap() {
  return (
    <>
      {/* Spacer explicitly separating logic block to fix sticky boundaries from previous section */}
      <div className="h-[15vh] lg:h-[30vh] w-full bg-[#0a0a0b] pointer-events-none relative z-10">
         <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0d0d0f]" />
      </div>

      <section id="vision-roadmap" className="relative z-10 py-24 md:py-32 bg-[#0d0d0f] shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 md:mb-20 text-center flex flex-col items-center"
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter uppercase mb-4 md:mb-6">
              Long-Term Vision <br className="hidden md:block" /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#00B1B1]"> & Roadmap</span>
            </h2>
            <div className="flex items-center gap-6">
              <p className="text-[#D4AF37] text-xs md:text-sm lg:text-lg font-bold uppercase tracking-[0.2em] md:tracking-[0.3em]">
                From diagnostics to integrated enterprises
              </p>
            </div>
          </motion.div>

          <div className="relative">
            <div className="hidden lg:block absolute top-[150px] left-0 w-full h-1 bg-gradient-to-r from-slate-600 via-[#D4AF37] to-[#8a3320] z-0 opacity-50" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
              
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-[#151518] border border-white/10 hover:border-slate-500 transition-all duration-500 group flex flex-col min-h-[350px] md:min-h-[400px] h-full rounded-[2rem] rounded-tr-[3rem] overflow-hidden relative shadow-2xl"
              >
                <img 
                  src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1000&auto=format&fit=crop" 
                  alt="Clinical Focus" 
                  className="absolute inset-0 w-full h-full object-cover grayscale opacity-20 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#151518] via-[#151518]/90 to-[#151518]/20" />
                
                <div className="relative z-10 p-8 md:p-10 flex flex-col h-full">
                  <div className="px-3 md:px-4 py-2 w-max bg-slate-600/30 text-white font-bold tracking-widest text-[9px] md:text-[10px] uppercase mb-8 md:mb-12 border border-white/10 backdrop-blur-md rounded-full shadow-lg">
                    Current Focus (2026–27)
                  </div>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-black text-white leading-tight mb-4 tracking-tight">
                    Diagnostic Centres in Zambia & Ethiopia
                  </h3>
                  <p className="text-xs md:text-sm lg:text-base text-slate-400 font-medium leading-relaxed mb-8 flex-1">
                    Deploying Tier-1 MRI, CT, X-Ray, and Ultrasound hubs.
                  </p>
                  <ArrowRight className="text-slate-500 group-hover:text-white transition-colors group-hover:translate-x-2 duration-300 transform" size={28} />
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-[#151518] lg:-mt-12 border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all duration-500 group flex flex-col min-h-[350px] md:min-h-[400px] h-full rounded-[2rem] rounded-tr-[3rem] overflow-hidden relative shadow-[0_0_50px_rgba(212,175,55,0.05)]"
              >
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop" 
                  alt="Diversification Expansion" 
                  className="absolute inset-0 w-full h-full object-cover grayscale opacity-20 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#151518] via-[#151518]/90 to-[#151518]/20" />

                <div className="relative z-10 p-8 md:p-10 flex flex-col h-full">
                  <div className="px-3 md:px-4 py-2 w-max bg-[#D4AF37]/20 text-[#D4AF37] font-bold tracking-widest text-[9px] md:text-[10px] uppercase mb-8 md:mb-12 border border-[#D4AF37]/30 backdrop-blur-md rounded-full shadow-lg">
                    Expansion Areas (3–5 Years)
                  </div>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-black text-white leading-tight mb-4 tracking-tight">
                    Construction, Real Estate, Pharma & Design
                  </h3>
                  <p className="text-xs md:text-sm lg:text-base text-slate-400 font-medium leading-relaxed mb-8 flex-1">
                    Multi-sector penetration mapping advanced healthcare services alongside structural diversification.
                  </p>
                  <ArrowRight className="text-[#D4AF37] group-hover:text-white transition-colors group-hover:translate-x-2 duration-300 transform" size={28} />
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-[#151518] lg:mt-12 border border-[#8a3320]/50 hover:border-[#ff8e75] transition-all duration-500 group flex flex-col min-h-[350px] md:min-h-[400px] h-full rounded-[2rem] rounded-tr-[3rem] overflow-hidden relative shadow-[0_0_50px_rgba(138,51,32,0.15)]"
              >
                <img 
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop" 
                  alt="Global Monolith Integration" 
                  className="absolute inset-0 w-full h-full object-cover grayscale opacity-30 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700 ease-out mix-blend-screen"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0a0a] via-[#151518]/90 to-[#151518]/40" />

                <div className="relative z-10 p-8 md:p-10 flex flex-col h-full">
                  <div className="px-3 md:px-4 py-2 w-max bg-[#8a3320]/30 text-[#ff8e75] font-bold tracking-widest text-[9px] md:text-[10px] uppercase mb-8 md:mb-12 border border-[#ff8e75]/30 backdrop-blur-md rounded-full shadow-lg hover:shadow-[#ff8e75]/20">
                    Long-Term Vision (10+ Years)
                  </div>
                  <p className="text-white text-lg md:text-xl lg:text-2xl font-black leading-snug mb-8 flex-1 tracking-tighter">
                    Integrated enterprises delivering healthcare, infrastructure, and community impact across Africa & India. 
                  </p>
                  <ArrowRight className="text-[#ff8e75] group-hover:text-white transition-colors group-hover:translate-x-2 duration-300 transform" size={28} />
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
