import React from 'react';
import { User, Shield, Lock, Zap, Server, Globe, GraduationCap, MapPin, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-lg bg-gold-500/10 border border-gold-500/30 text-xs font-mono text-gold-400 uppercase tracking-widest">
            <User className="w-3.5 h-3.5" />
            <span>Engineering Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Where Full-Stack Velocity Meets Uncompromising Security
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Dedicated to engineering high-scale distributed applications reinforced with rigorous cryptographic controls.
          </p>
        </div>

        {/* 2-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-7 sm:p-8 rounded-2xl glass-card-gold space-y-5">
              <h3 className="text-xl font-bold text-white flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-gold-400 shadow-[0_0_10px_rgba(234,179,8,0.8)]"></span>
                Who I Am & What Drives My Engineering
              </h3>
              
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                I am an undergraduate in Computer Science and Engineering at <strong className="text-gold-300">Pranveer Singh Institute of Technology (PSIT), Kanpur</strong>, holding a cumulative <strong className="text-white">CGPA of 7.40 / 10.0</strong> with a specialized focus in <strong className="text-gold-400">Cybersecurity</strong>.
              </p>

              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                My approach to software engineering unites two worlds that are too often kept separate: <strong className="text-white">exceptional user experience</strong> and <strong className="text-white">airtight threat resistance</strong>. In production platforms like <strong className="text-gold-300">Tridrishti</strong> (40+ pages, atomic coin ledger, live WebSockets) and research frameworks like <strong className="text-gold-300">Guardian-ID</strong> (multi-profile biometric verification for UPI), every endpoint is crafted with defensive hygiene, strict RBAC authorization, and high-throughput responsiveness.
              </p>

              <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-slate-800">
                <div className="space-y-1">
                  <div className="text-xs text-slate-400 font-mono flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-gold-400" />
                    <span>Location</span>
                  </div>
                  <div className="text-sm font-semibold text-white">Kanpur, UP, India</div>
                </div>

                <div className="space-y-1">
                  <div className="text-xs text-slate-400 font-mono flex items-center gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5 text-gold-400" />
                    <span>Degree</span>
                  </div>
                  <div className="text-sm font-semibold text-white">B.Tech CSE (2023–27)</div>
                </div>

                <div className="space-y-1">
                  <div className="text-xs text-slate-400 font-mono flex items-center gap-1.5">
                    <Shield className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Focus</span>
                  </div>
                  <div className="text-sm font-semibold text-white">Full-Stack & Defense</div>
                </div>
              </div>
            </div>

            {/* Core Values / Strengths Banner */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-obsidian-card border border-gold-500/20 hover:border-gold-500/50 transition-all flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-gold-500/10 text-gold-400 border border-gold-500/20 shrink-0">
                  <Lock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Defensive Architecture</h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    Zero-trust identity validation, tokenized banking endpoints, and granular role authorization layers.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-obsidian-card border border-amber-500/20 hover:border-amber-500/50 transition-all flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20 shrink-0">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">High-Speed Execution</h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    Production MERN architectures, optimized React 18 / Vite bundles, and real-time Socket.io channels.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Cards: Academic Matrix & Terminal (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl glass-card-gold space-y-4">
              <h4 className="text-base font-bold text-white flex items-center gap-2 font-mono text-gold-400">
                <Sparkles className="w-4 h-4" /> ACADEMIC_DISCIPLINE
              </h4>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center py-2 border-b border-slate-800/80">
                  <span className="text-slate-400">University</span>
                  <span className="font-semibold text-white text-right">PSIT Kanpur</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-800/80">
                  <span className="text-slate-400">Specialization</span>
                  <span className="font-semibold text-gold-400">Cybersecurity</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-800/80">
                  <span className="text-slate-400">Graduation Year</span>
                  <span className="font-semibold text-white">2027</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-800/80">
                  <span className="text-slate-400">Cumulative CGPA</span>
                  <span className="font-mono font-bold text-emerald-400">7.40 / 10.0</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-slate-400">Leadership Role</span>
                  <span className="font-semibold text-amber-300">PSIT Vyomnauts</span>
                </div>
              </div>
            </div>

            {/* Terminal-style Motto */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-[#0D1017] to-[#080A0F] border border-gold-500/25 font-mono text-xs text-slate-300 space-y-2 shadow-xl">
              <div className="flex items-center gap-1.5 text-slate-400 pb-1 border-b border-slate-800">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-gold-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                <span className="ml-2 text-[10px] text-slate-400">vedansh@terminal ~</span>
              </div>
              <p className="text-gold-300/90 leading-relaxed">
                $ echo "{PERSONAL_INFO.secondaryQuote}"
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
