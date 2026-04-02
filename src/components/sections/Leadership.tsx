"use client";

import { motion } from "framer-motion";

export function Leadership() {
  const leaders = [
    { 
      firstName: "NEERAJ KUMAR TYAGI", 
      role: "MANAGING DIRECTOR", 
      bio: "25+ years of experience in infrastructure, urban planning, and international projects across India and Africa. Former UNDP consultant and ex-VP Planning at GIFT City.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop"
    },
    { 
      firstName: "NAVEEN KUMAR SHARMA", 
      role: "DIRECTOR", 
      bio: "30+ years of leadership across logistics, finance, and operations in Zambia and Canada, driving execution and business scaling.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop"
    },
    { 
      firstName: "HARPREET SINGH GILL", 
      role: "DIRECTOR", 
      bio: "Extensive experience in logistics, customs, and supply chain management across Southern Africa, ensuring efficient on-ground operations.",
      image: "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=800&auto=format&fit=crop"
    },
    { 
      firstName: "JAGDEEP SINGH GILL", 
      role: "DIRECTOR", 
      bio: "Overseeing the tactical implementation of monolithic structural strategies.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section id="leadership" className="relative py-32 bg-[#0d0d0f] border-t border-white/5 overflow-hidden">
      
      <div className="max-w-[90rem] mx-auto px-6 relative z-10">
        
        {/* Massive Backdrop Text */}
        <div className="absolute top-0 left-6 -z-10 select-none overflow-hidden h-full flex">
          <h1 className="text-[15rem] md:text-[20rem] font-black text-white/[0.02] leading-none tracking-tighter mix-blend-overlay">
            INFRAMEDIX
          </h1>
        </div>

        {/* Header Section */}
        <div className="mb-16 md:mb-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl sm:text-6xl md:text-8xl lg:text-[7.5rem] font-black text-[#F2CA50] leading-[0.9] tracking-tight uppercase">
              Leadership Team
            </h2>
            
            <div className="flex items-center gap-4 md:gap-6 mt-8 md:mt-12">
              <div className="w-16 md:w-24 h-[1px] bg-slate-600"></div>
              <span className="text-slate-400 text-[10px] md:text-sm tracking-[0.2em] md:tracking-[0.3em] font-bold uppercase overflow-hidden text-ellipsis whitespace-nowrap md:whitespace-normal">
                Driving Strategy, Execution & Growth
              </span>
            </div>
          </motion.div>
        </div>

        {/* Staggered Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {leaders.map((leader, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`flex flex-col group ${i % 2 !== 0 ? 'lg:mt-32' : 'lg:mb-32'}`}
            >
              <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">
                {leader.firstName}
              </h3>
              
              <div className="bg-[#151518] border border-white/5 p-5 flex flex-col h-full rounded-sm hover:border-white/10 transition-colors">
                
                {/* Image Box */}
                <div className="aspect-[4/5] w-full mb-6 relative overflow-hidden bg-[#0a0a0b]">
                  <img 
                    src={leader.image} 
                    alt={leader.firstName} 
                    className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#151518] via-transparent to-transparent opacity-50" />
                </div>

                <div className="flex-1 flex flex-col">
                  <span className="text-[#6484c2] text-[10px] font-bold tracking-[0.15em] uppercase mb-4 block">
                    {leader.role}
                  </span>
                  
                  <p className="text-slate-400 text-xs leading-[1.8] mb-8 flex-1">
                    {leader.bio}
                  </p>
                  
                  <button className="w-full py-3 text-[10px] font-bold tracking-[0.2em] text-slate-300 uppercase border border-white/10 hover:bg-white/5 hover:text-white transition-all">
                    View Portfolio
                  </button>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
