import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Operations } from "@/components/sections/Operations";
import { Leadership } from "@/components/sections/Leadership";
import { Strengths } from "@/components/sections/Strengths";
import { Roadmap } from "@/components/sections/Roadmap";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0b] text-slate-50 flex flex-col">
      <Navbar />
      <div className="flex-1 w-full relative z-10">
        <Hero />
        <About />
        <Operations />
        <Leadership />
        <Strengths />
        <Roadmap />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
