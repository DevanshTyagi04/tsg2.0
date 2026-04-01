"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="relative py-32 bg-[#0a0a0b] border-t border-white/5 overflow-hidden">
      {/* Abstract Background Flow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[50vw] h-[50vw] bg-gradient-to-tr from-[#0A2540]/20 to-transparent blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        <div className="text-center mb-20 md:mb-32">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase leading-none"
          >
            Initiate <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008080] to-[#0A2540]">Dialogue.</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 max-w-6xl mx-auto items-center">
          
          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-3xl font-bold text-white mb-8 tracking-tight">Global Operations Desk</h3>
            <p className="text-slate-400 font-medium leading-relaxed mb-12 max-w-md">
              Reach out to our executive team to explore joint ventures, operational expansions, or supply chain integrations across the African continent.
            </p>
            
            <div className="flex flex-col gap-8">
              <div className="flex items-start gap-6 group">
                <div className="w-16 h-16 rounded-2xl glass-teal flex items-center justify-center text-[#00B1B1] flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-slate-100 font-bold tracking-wide mb-1">Direct Outreach</h4>
                  <a href="mailto:exec@tsginframedix.com" className="text-[#00B1B1] font-medium hover:text-white transition-colors">exec@tsginframedix.com</a>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center border-white/10 text-[#D4AF37] flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-slate-100 font-bold tracking-wide mb-1">Command Centers</h4>
                  <span className="text-slate-400 font-medium block">+91 (India HQ)</span>
                  <span className="text-slate-400 font-medium block">+260 (Zambia Ops)</span>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-16 h-16 rounded-2xl glass-blue flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-slate-100 font-bold tracking-wide mb-1">Corporate Registries</h4>
                  <p className="text-slate-400 text-sm font-medium">New Delhi, India <br />Lusaka, Zambia</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Liquid Glass Form */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass p-8 md:p-12 rounded-[2.5rem] relative"
          >
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-3">
                <label htmlFor="name" className="text-xs font-bold uppercase tracking-[0.2em] text-[#00B1B1]">Entity / Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="bg-white/5 border-b-2 border-white/10 text-white px-0 py-3 focus:outline-none focus:border-[#D4AF37] transition-colors font-medium placeholder:text-white/20"
                  placeholder="Organization or Full Name" 
                />
              </div>
              
              <div className="flex flex-col gap-3">
                <label htmlFor="email" className="text-xs font-bold uppercase tracking-[0.2em] text-[#00B1B1]">Corporate Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="bg-white/5 border-b-2 border-white/10 text-white px-0 py-3 focus:outline-none focus:border-[#008080] transition-colors font-medium placeholder:text-white/20"
                  placeholder="director@company.com" 
                />
              </div>

              <div className="flex flex-col gap-3">
                <label htmlFor="message" className="text-xs font-bold uppercase tracking-[0.2em] text-[#00B1B1]">Inquiry Details</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="bg-white/5 border-b-2 border-white/10 text-white px-0 py-3 focus:outline-none focus:border-[#0A2540] transition-colors font-medium resize-none placeholder:text-white/20"
                  placeholder="Outline your proposal or query..." 
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-[#D4AF37] to-[#8a7220] hover:to-[#D4AF37] text-[#0a0a0b] font-black uppercase tracking-widest py-5 rounded-2xl mt-4 flex justify-center items-center gap-3 transition-colors shadow-[0_10px_30px_rgba(212,175,55,0.3)] squishy-btn"
              >
                Transmit <ArrowRight size={20} />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
