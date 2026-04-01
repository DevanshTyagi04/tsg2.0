"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "About Us", href: "#about" },
  { name: "Operations", href: "#operations" },
  { name: "Leadership", href: "#leadership" },
  { name: "Roadmap", href: "#roadmap" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = NAV_LINKS.map(link => link.href.substring(1));
      let current = "";
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 150) {
          current = section;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500",
        isScrolled
          ? "glass py-4 border-b border-white/5 shadow-2xl"
          : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#0A2540] flex items-center justify-center text-white font-bold text-2xl shadow-lg squishy-btn">
            T
          </div>
          <span className="text-2xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-slate-100 to-slate-400 group-hover:to-white transition-colors">
            TSG Inframedix
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "text-xs font-bold tracking-widest uppercase transition-all duration-300",
                activeSection === link.href.substring(1)
                  ? "text-[#D4AF37] drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]"
                  : "text-slate-300 hover:text-[#00B1B1]"
              )}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#008080] to-[#0A2540] text-white text-xs font-bold uppercase tracking-[0.2em] shadow-lg hover:shadow-[0_0_20px_rgba(0,128,128,0.4)] squishy-btn border border-white/10"
          >
            Get in touch
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-slate-300 hover:text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full glass border-b border-white/10 px-6 py-6 flex flex-col gap-6 shadow-2xl">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "text-lg font-bold uppercase tracking-wide transition-colors",
                activeSection === link.href.substring(1)
                  ? "text-[#D4AF37]"
                  : "text-slate-200 hover:text-[#00B1B1]"
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
