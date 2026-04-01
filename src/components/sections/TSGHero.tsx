import { ArrowRight, Network, TrendingUp, Activity } from 'lucide-react';

export function TSGHero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-slate-950 font-body text-white selection:bg-blue-500/30">
      {/* Minimal Background Visual */}
      <div 
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(51, 65, 85, 0.4) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}
      />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-screen-2xl mx-auto px-8 lg:px-16 w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
        
        {/* Left Column: Content */}
        <div className="flex flex-col space-y-12 py-12">
          <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-800 w-fit shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2.5"></span>
            <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-slate-400">
              Global Enterprise Infrastructure
            </span>
          </div>

          <div className="space-y-8">
            <h1 className="font-headline text-5xl lg:text-[5.5rem] font-extrabold tracking-tight leading-[1.05] text-white">
              Resilient Infrastructure.<br />
              <span className="text-blue-500">Redefined.</span>
            </h1>
            <p className="max-w-xl text-lg lg:text-xl text-slate-400 font-normal leading-relaxed">
              Architecting secure, scalable, and high-performance network foundations for global enterprises. Experience industry-leading digital excellence built for tomorrow.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button className="group px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-md font-bold transition-all duration-300 active:scale-95 flex items-center gap-2 shadow-xl shadow-blue-500/10">
              View Solutions
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 rounded-md border border-slate-700 text-slate-400 font-semibold hover:bg-slate-800 hover:text-white transition-all duration-300 active:scale-95">
              Consult with Us
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="pt-12 border-t border-slate-800/50 max-w-lg">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-400/60 mb-8">
              Trusted by Global Infrastructure Leaders
            </p>
            <div className="flex flex-wrap items-center gap-8 md:gap-12 opacity-50 contrast-0">
              <span className="font-black text-xl tracking-tighter text-white">DATACORE</span>
              <span className="font-black text-xl tracking-tighter text-white">SYNTH_SYS</span>
              <span className="font-black text-xl tracking-tighter text-white">NEXUS.AI</span>
              <span className="font-black text-xl tracking-tighter text-white">STRATOS</span>
            </div>
          </div>
        </div>

        {/* Right Column: Core Operations System Panel */}
        <div className="relative flex flex-col justify-center h-full -translate-y-4 lg:-translate-y-8">
          {/* Main Dashboard Panel */}
          <div className="bg-slate-900/60 backdrop-blur-md border border-slate-800 rounded-2xl p-6 md:p-8 shadow-2xl shadow-black/50 max-w-xl lg:ml-auto w-full flex flex-col relative overflow-hidden">
            
            {/* Top Bar / Data Indicators */}
            <div className="flex items-center justify-between mb-8 pb-5 border-b border-slate-800/80">
              <div className="flex items-center gap-3">
                <div className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
                </div>
                <span className="text-[11px] font-mono font-bold text-slate-300 uppercase tracking-widest">
                  System Core
                </span>
              </div>
              <div className="flex gap-2 sm:gap-3">
                <div className="px-2.5 py-1 rounded bg-slate-950/60 border border-slate-800/60 text-[10px] sm:text-xs font-mono text-slate-400 shadow-inner shadow-white/5">
                  <span className="text-slate-500 mr-1.5">LAT:</span>
                  <span className="text-emerald-400 font-medium">0.02ms</span>
                </div>
                <div className="px-2.5 py-1 rounded bg-slate-950/60 border border-slate-800/60 text-[10px] sm:text-xs font-mono text-slate-400 shadow-inner shadow-white/5">
                  <span className="text-slate-500 mr-1.5">UPT:</span>
                  <span className="text-blue-400 font-medium">99.999%</span>
                </div>
              </div>
            </div>

            {/* List of Operations */}
            <div className="flex flex-col">
              
              {/* 1. Infrastructure (Primary Focus) */}
              <div className="flex items-start gap-4 sm:gap-5 p-4 sm:p-5 -mx-4 sm:-mx-5 rounded-xl bg-slate-800/30 border border-slate-700/50 mb-2 shadow-sm">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 shadow-inner shadow-blue-400/20">
                  <Network className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-white font-semibold text-lg tracking-tight mb-1">Infrastructure</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Enterprise-grade network backbones designed for zero-latency compute scaling.
                  </p>
                </div>
              </div>

              {/* 2. Trading */}
              <div className="flex items-start gap-4 sm:gap-5 py-5 border-b border-slate-800/60">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-slate-900/60 border border-slate-800 flex items-center justify-center text-blue-500 shrink-0">
                  <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-slate-200 font-medium text-base tracking-tight mb-1">Trading</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    High-frequency execution systems with redundant architecture and sub-ms paths.
                  </p>
                </div>
              </div>

              {/* 3. Diagnostics */}
              <div className="flex items-start gap-4 sm:gap-5 pt-5 pb-2">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-slate-900/60 border border-slate-800 flex items-center justify-center text-blue-500 shrink-0">
                  <Activity className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-slate-200 font-medium text-base tracking-tight mb-1">Diagnostics</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Predictive monitoring and health analytics for complex distributed systems.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Subtle Decorative Element */}
          <div className="absolute -z-10 -right-12 top-1/2 -translate-y-1/2 w-72 h-72 bg-blue-500/5 blur-[100px] rounded-full pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
