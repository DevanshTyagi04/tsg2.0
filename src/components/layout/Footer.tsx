"use client";

import { MapPin, Mail, Phone, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-[#0a0a0b] border-t border-white/5 pt-24 pb-12 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#008080]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          
          <div className="md:col-span-1">
            <a href="#" className="flex items-center gap-3 group mb-8 inline-flex">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#0A2540] flex items-center justify-center text-white font-bold text-2xl shadow-lg squishy-btn">
                T
              </div>
              <span className="text-2xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-slate-100 to-slate-400 group-hover:to-white transition-colors">
                TSG Inframedix
              </span>
            </a>
            <p className="text-sm font-medium text-slate-400 leading-relaxed mb-8 pr-4">
              A healthcare-led entry strategy for building a multi-sector India-Africa business ecosystem.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold tracking-widest text-xs uppercase mb-8">Global presence</h4>
            <div className="flex flex-col gap-6">
              <div className="glass p-4 rounded-xl border-white/5 hover:border-[#D4AF37]/30 transition-colors">
                <div className="flex items-start gap-3">
                  <MapPin className="text-[#D4AF37] shrink-0 mt-0.5" size={18} />
                  <div>
                    <h5 className="text-sm font-bold text-slate-200 mb-1">Zambia</h5>
                    <p className="text-xs text-slate-400 leading-relaxed">Kalundu, Mazabuka, Ibex Hill Diagnostics Centres</p>
                  </div>
                </div>
              </div>
              <div className="glass p-4 rounded-xl border-white/5 hover:border-[#008080]/30 transition-colors">
                <div className="flex items-start gap-3">
                  <MapPin className="text-[#008080] shrink-0 mt-0.5" size={18} />
                  <div>
                    <h5 className="text-sm font-bold text-slate-200 mb-1">Ethiopia</h5>
                    <p className="text-xs text-slate-400 leading-relaxed">International Trading & Construction Base</p>
                  </div>
                </div>
              </div>
              <div className="glass p-4 rounded-xl border-white/5 hover:border-[#0A2540]/50 transition-colors">
                <div className="flex items-start gap-3">
                  <MapPin className="text-[#00B1B1] shrink-0 mt-0.5" size={18} />
                  <div>
                    <h5 className="text-sm font-bold text-slate-200 mb-1">India</h5>
                    <p className="text-xs text-slate-400 leading-relaxed">Global Headquarters & Joint Venture Command</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold tracking-widest text-xs uppercase mb-8">Ecosystem</h4>
            <ul className="flex flex-col gap-4 text-sm font-medium text-slate-400">
              <li><a href="#about" className="hover:text-[#D4AF37] transition-colors flex items-center justify-between group">The Next Age Group <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity"/></a></li>
              <li><a href="#operations" className="hover:text-[#00B1B1] transition-colors flex items-center justify-between group">Healthcare Diagnostics <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity"/></a></li>
              <li><a href="#about" className="hover:text-blue-400 transition-colors flex items-center justify-between group">Gill & Gill Global Solutions <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity"/></a></li>
              <li><a href="#leadership" className="hover:text-amber-400 transition-colors flex items-center justify-between group">Board of Directors <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity"/></a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold tracking-widest text-xs uppercase mb-8">Connect</h4>
            <ul className="flex flex-col gap-5 text-sm text-slate-400">
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-[#008080]" />
                <a href="mailto:contact@tsginframedix.com" className="hover:text-white transition-colors">contact@tsginframedix.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-[#D4AF37]" />
                <span className="hover:text-white transition-colors">+91 (HQ) | +260 (ZM)</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-semibold tracking-widest uppercase text-slate-600">
          <p>© {new Date().getFullYear()} TSG Inframedix Limited. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
