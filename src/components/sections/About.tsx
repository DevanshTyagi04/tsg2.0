"use client";

import { motion } from "framer-motion";
import { Shield, Leaf, Scale, CheckCircle2, Building2, Globe2 } from "lucide-react";

export function About() {
  const principles = [
    {
      title: "Uncompromising Quality",
      desc: "Every rivet, every beam, every line of code is measured against global architectural standards.",
      icon: <CheckCircle2 size={24} />,
      color: "text-[#D4AF37]",
      bg: "bg-[#D4AF37]/10"
    },
    {
      title: "Inclusion",
      desc: "Empowering local workforces through technical knowledge transfer.",
      icon: <Globe2 size={24} />,
      color: "text-[#00B1B1]",
      bg: "bg-[#00B1B1]/10"
    },
    {
      title: "Integrity",
      desc: "Transparent operations guided by rigorous ethical frameworks.",
      icon: <Scale size={24} />,
      color: "text-white",
      bg: "bg-white/10"
    },
    {
      title: "Sustainability",
      desc: "Designing for the future with carbon-conscious materials and methods.",
      icon: <Leaf size={24} />,
      color: "text-[#008080]",
      bg: "bg-[#008080]/10"
    }
  ];

  return (
    <section id="about" className="relative py-32 bg-[#0a0a0b] overflow-hidden">
      {/* Background Ambience */}
      <motion.div 
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-1/4 w-[60vw] h-[60vw] bg-gradient-to-l from-[#008080]/10 via-[#0A2540]/10 to-transparent blur-[120px] rounded-full pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Intro Section */}
        <div className="mb-24 md:w-4/5 lg:w-3/4">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter mb-8 leading-[1.1]"
          >
            A synthesis of global engineering expertise and <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F2CA50]">local strategic insight.</span>
          </motion.h2>
          
          <div className="w-16 h-1 bg-[#00B1B1] mb-8 rounded-full" />
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-slate-300 font-medium leading-relaxed mb-12"
          >
            Redefining infrastructure across the Zambian landscape through the lens of architectural fusion. We don't just build structures; we architect ecosystems that foster economic vitality and human potential.
          </motion.p>
        </div>

        {/* Anchor & Bilateral Synergy Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          
          {/* Next Age Group Anchor */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 glass p-10 md:p-14 rounded-[2rem] relative overflow-hidden group mb-8 border-white/10"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/10 blur-3xl rounded-full group-hover:bg-[#D4AF37]/20 transition-colors duration-700" />
            <div className="relative z-10 md:w-2/3">
              <span className="text-[#D4AF37] font-bold tracking-[0.2em] text-xs uppercase mb-4 block">The Anchor</span>
              <h3 className="text-3xl md:text-4xl font-black text-white mb-4">Next Age Group</h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                As the overarching anchor, Next Age Group provides the financial structural integrity and visionary roadmap for TSG Inframedix. Our parent organization operates at the intersection of technology and physical space.
              </p>
            </div>
          </motion.div>

          <div className="lg:col-span-3 mb-4">
            <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">Bilateral Synergy</h3>
          </div>

          {/* Indian Operations */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1 glass-blue p-8 md:p-10 rounded-3xl relative overflow-hidden"
          >
            <span className="text-[#00B1B1] font-bold tracking-[0.2em] text-[10px] uppercase mb-4 block">Technical Engine</span>
            <div className="w-12 h-12 rounded-2xl bg-[#0A2540] border border-[#00B1B1]/30 flex items-center justify-center text-[#00B1B1] mb-6 shadow-lg">
              <Building2 size={24} />
            </div>
            <h4 className="text-2xl font-bold text-white mb-4">Indian Strategic Operations</h4>
            <p className="text-slate-400 font-medium leading-relaxed">
              Bringing deep-tier engineering precision and scalable technical frameworks from the subcontinent to African soil.
            </p>
          </motion.div>

          {/* Zambian Operations */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 glass-teal p-8 md:p-10 rounded-3xl relative overflow-hidden"
          >
            <span className="text-[#D4AF37] font-bold tracking-[0.2em] text-[10px] uppercase mb-4 block">Local Authority</span>
            <div className="w-12 h-12 rounded-2xl border border-[#D4AF37]/30 bg-[#0A2540] flex items-center justify-center text-[#D4AF37] mb-6 shadow-lg">
              <Globe2 size={24} />
            </div>
            <h4 className="text-2xl font-bold text-white mb-4">Zambian Infrastructure Group</h4>
            <p className="text-slate-400 font-medium leading-relaxed md:w-3/4">
              Expert navigation of regional regulatory landscapes and deep-rooted community-centric infrastructure development. A 50:50 Joint Venture focused on Zambian excellence.
            </p>
          </motion.div>
        </div>

        {/* Core Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-8 rounded-3xl hover:bg-white/[0.03] transition-colors group"
            >
              <div className={`w-12 h-12 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {item.icon}
              </div>
              <h4 className="text-lg font-bold text-white mb-3">{item.title}</h4>
              <p className="text-sm text-slate-400 font-medium leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
