"use client";

import { motion } from "framer-motion";
import { ActivitySquare, Microscope, Radiation, AlignEndHorizontal, Network, Building } from "lucide-react";

export function Operations() {
  const metrics = [
    { value: "0%", label: "Real Estate Capex", sub: "CAPITAL EFFICIENCY" },
    { value: "100%", label: "Equipment Ownership", sub: "ASSET PORTFOLIO" },
    { value: "24/7", label: "Service Uptime", sub: "OPERATIONAL STABILITY" }
  ];

  const services = [
    { title: "MRI", desc: "3T MRI Tech for advanced neurological and musculoskeletal mapping.", icon: <ActivitySquare size={20} /> },
    { title: "CT Scan", desc: "128-Slice Precision for rapid, high-resolution internal diagnostics.", icon: <AlignEndHorizontal size={20} /> },
    { title: "X-Ray", desc: "Low-Dose Digital imaging for safe, rapid-turnaround skeletal screening.", icon: <Radiation size={20} /> },
    { title: "Ultrasound", desc: "4D Imaging providing real-time physiological insight and clarity.", icon: <Microscope size={20} /> }
  ];

  return (
    <section id="operations" className="relative py-32 bg-[#0a0a0b] overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-gradient-to-bl from-[#0A2540]/30 via-transparent to-transparent rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-gradient-to-tr from-[#008080]/15 to-transparent rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Header - Kinetic Authority */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 max-w-4xl"
        >
          <span className="text-[#00B1B1] font-bold tracking-[0.2em] text-xs uppercase mb-4 block">Core Operations</span>
          <h2 className="text-5xl md:text-7xl lg:text-[6rem] font-black text-white tracking-tighter leading-[0.9] mb-8 uppercase">
            Asset-Light <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#0A2540]">Monolith.</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 font-medium leading-relaxed max-w-2xl">
            Pioneering an asset-light operating model to deliver world-class diagnostic accuracy across the Sub-Saharan African healthcare landscape.
          </p>
        </motion.div>

        {/* Core Metrics Ribbon */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {metrics.map((m, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass border-t border-white/10 p-8 rounded-3xl flex flex-col justify-center items-center text-center group"
            >
              <h3 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20 mb-2 group-hover:scale-110 transition-transform">
                {m.value}
              </h3>
              <p className="text-[#00B1B1] font-bold text-lg mb-1">{m.label}</p>
              <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">{m.sub}</span>
            </motion.div>
          ))}
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 auto-rows-[minmax(200px,auto)]">
          
          {/* Medical Services (Spans 8 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 glass p-10 rounded-[2.5rem] relative overflow-hidden"
          >
            <div className="flex justify-between items-start mb-10">
              <div>
                <h3 className="text-3xl font-black text-white mb-2">Medical Services.</h3>
                <span className="text-[#D4AF37] font-bold tracking-[0.2em] text-[10px] uppercase">Tier 1 Diagnostics</span>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              {services.map((s, i) => (
                <div key={i} className="flex gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#00B1B1] flex-shrink-0 group-hover:bg-[#00B1B1] group-hover:text-[#0a0a0b] transition-colors">
                    {s.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-100 mb-1">{s.title}</h4>
                    <p className="text-sm text-slate-400 leading-relaxed font-medium">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Strategic Footprint (Spans 4 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-4 glass-blue p-10 rounded-[2.5rem] flex flex-col justify-between"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-black text-white mb-4">Strategic Footprint.</h3>
              <p className="text-sm text-slate-300 leading-relaxed font-medium">
                Our expansion strategy leverages existing healthcare hubs, integrating high-performance diagnostic centers directly into high-traffic medical clusters.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-white/10 pb-3">
                <span className="text-white font-bold">Kalundu Hub</span>
                <span className="text-xs font-bold px-3 py-1 bg-[#00B1B1]/20 text-[#00B1B1] rounded-full uppercase tracking-widest">Operational</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/10 pb-3">
                <span className="text-white font-bold">Mazabuka Hub</span>
                <span className="text-xs font-bold px-3 py-1 bg-[#00B1B1]/20 text-[#00B1B1] rounded-full uppercase tracking-widest">Operational</span>
              </div>
              <div className="flex justify-between items-center pb-2">
                <span className="text-white font-bold">Ibex Hill Node</span>
                <span className="text-xs font-bold px-3 py-1 bg-[#D4AF37]/20 text-[#D4AF37] rounded-full uppercase tracking-widest">2027</span>
              </div>
            </div>
          </motion.div>

          {/* Network Connectivity (Spans 4 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 glass-teal p-10 rounded-[2.5rem] flex flex-col justify-center"
          >
            <div className="w-14 h-14 rounded-full bg-[#008080]/20 flex items-center justify-center text-[#D4AF37] mb-6">
              <Network size={28} />
            </div>
            <h4 className="text-xl font-bold text-white mb-2">Network Connectivity</h4>
            <p className="text-sm text-slate-300 leading-relaxed font-medium">
              Direct data-link between Kalundu Hub and regional spoke centers for instant radiologist review.
            </p>
          </motion.div>

          {/* Victoria Hospital Partnership (Spans 8 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-8 glass p-10 rounded-[2.5rem] relative overflow-hidden group border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-colors"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A2540]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10 flex flex-col lg:flex-row gap-8 items-start lg:items-center justify-between">
              
              <div className="lg:w-1/2">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 glass rounded-xl text-[#00B1B1]">
                    <Building size={24} />
                  </div>
                  <h3 className="text-2xl font-black text-white">Victoria Hospital Partnership</h3>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed font-medium">
                  Our shared-infrastructure model at Victoria Hospital serves as the primary diagnostic engine. By integrating within established medical excellence, we eliminate the friction of real estate development and focus 100% on precision technology.
                </p>
              </div>

              <div className="lg:w-1/2 space-y-4 w-full">
                <div className="glass p-4 rounded-xl flex items-center justify-between border-white/5">
                  <span className="text-slate-100 font-bold">Instant Patient Pipeline</span>
                  <div className="w-2 h-2 rounded-full bg-[#00B1B1]" />
                </div>
                <div className="glass p-4 rounded-xl flex items-center justify-between border-white/5">
                  <span className="text-slate-100 font-bold">Shared Utility Framework</span>
                  <div className="w-2 h-2 rounded-full bg-[#00B1B1]" />
                </div>
                <div className="glass p-4 rounded-xl flex items-center justify-between border-white/5">
                  <span className="text-slate-100 font-bold">Rapid Scaling Potential</span>
                  <div className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
