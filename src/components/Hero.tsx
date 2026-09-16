import React from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail, Shield, Terminal, Sparkles, Quote, Code2 } from 'lucide-react';
import { PERSONAL_INFO, METRICS } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Ambient Luxury Gold & Obsidian Grids */}
      <div className="absolute inset-0 bg-grid-gold pointer-events-none opacity-40" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gold-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 -left-48 w-[450px] h-[450px] bg-amber-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -right-48 w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Signature One-Liner, & CTAs (7 cols) */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Status Pill with Gold Border */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-obsidian-card border border-gold-500/30 text-xs font-medium text-gold-300 shadow-[0_0_20px_rgba(234,179,8,0.2)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-500"></span>
              </span>
              <span>Available for Software Engineering Roles & Internships</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                Hi, I'm{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 drop-shadow-[0_2px_15px_rgba(234,179,8,0.3)]">
                  Vedansh Gupta
                </span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-slate-200 flex flex-wrap items-center justify-center lg:justify-start gap-2">
                <span>Full-Stack Developer</span>
                <span className="text-gold-500">&bull;</span>
                <span className="text-gold-400">Cybersecurity Specialist</span>
              </p>
            </div>

            {/* Signature One-Liner Featured Box */}
            <div className="relative p-5 rounded-2xl bg-gradient-to-r from-[#121622] via-[#0E121B] to-[#141926] border border-gold-500/30 shadow-xl shadow-black/60 group hover:border-gold-500/50 transition-all">
              <div className="absolute -top-3 left-6 px-2.5 py-0.5 rounded bg-obsidian border border-gold-500/40 text-[10px] font-mono uppercase tracking-widest text-gold-400 flex items-center gap-1.5">
                <Quote className="w-3 h-3 text-gold-400" />
                <span>Personal Philosophy</span>
              </div>
              <p className="text-base sm:text-lg font-medium text-gold-100 italic leading-relaxed pt-1">
                "{PERSONAL_INFO.signatureOneLiner}"
              </p>
              <div className="mt-2 text-xs font-mono text-gold-500/80 flex items-center justify-end gap-1">
                <span>— Vedansh Gupta</span>
              </div>
            </div>

            {/* Bio Description */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Undergraduate at <strong className="text-white">PSIT Kanpur</strong> (CGPA 7.40) combining full-stack architecture (React 18, Node.js, Express, MongoDB) with defensive cybersecurity protocols (biometric UPI security, identity-gating, tokenized banking APIs, and zero-trust session management).
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#projects"
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-gold-500 via-amber-500 to-yellow-500 hover:from-gold-400 hover:to-amber-400 text-slate-950 font-bold text-sm shadow-xl shadow-gold-500/25 hover:shadow-gold-500/40 hover:-translate-y-0.5 transition-all"
              >
                <Code2 className="w-4 h-4" />
                <span>Explore Featured Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-obsidian-card hover:bg-slate-900 text-slate-100 font-semibold text-sm border border-gold-500/30 hover:border-gold-500/60 hover:text-gold-300 shadow-md hover:-translate-y-0.5 transition-all"
              >
                <Download className="w-4 h-4 text-gold-400" />
                <span>View Full Resume</span>
              </button>
            </div>

            {/* Social & Contact Strip */}
            <div className="flex items-center justify-center lg:justify-start gap-5 pt-3 text-slate-400">
              <span className="text-xs uppercase tracking-wider font-mono text-gold-500/80">Connect:</span>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-obsidian-card border border-gold-500/20 hover:border-gold-500/50 hover:text-gold-400 hover:bg-gold-500/10 transition-all"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-obsidian-card border border-gold-500/20 hover:border-gold-500/50 hover:text-gold-400 hover:bg-gold-500/10 transition-all"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2.5 rounded-xl bg-obsidian-card border border-gold-500/20 hover:border-gold-500/50 hover:text-gold-400 hover:bg-gold-500/10 transition-all"
                title="Email Me"
              >
                <Mail className="w-4 h-4" />
              </a>
              <span className="text-xs font-mono text-slate-400 border-l border-slate-800 pl-4">
                Kanpur, India
              </span>
            </div>
          </div>

          {/* Right Column: Profile Picture with Gold Rings & Badges (5 cols) */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-72 sm:w-84 md:w-96 aspect-square flex items-center justify-center">
              
              {/* Outer Glowing Spinning Orbit */}
              <div className="absolute inset-0 rounded-full border border-gold-500/25 border-dashed animate-spin-slow pointer-events-none" />
              
              {/* Radial Gold Halo */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-gold-500/30 via-amber-600/20 to-yellow-500/30 blur-2xl pointer-events-none" />

              {/* Middle Neon Gold Ring */}
              <div className="absolute inset-2 rounded-full p-[3px] bg-gradient-to-tr from-gold-400 via-amber-500 to-yellow-600 shadow-[0_0_35px_rgba(234,179,8,0.4)]">
                {/* Photo Container */}
                <div className="w-full h-full rounded-full overflow-hidden bg-obsidian p-1">
                  <img
                    src="/vedansh.png"
                    alt="Vedansh Gupta - Full-Stack Developer & Cybersecurity Specialist"
                    className="w-full h-full object-cover object-center rounded-full hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Floating Tech Badges */}
              <div className="absolute -bottom-3 -left-3 sm:-left-6 px-3.5 py-2 rounded-xl bg-[#0C0E14]/95 border border-gold-500/40 backdrop-blur-md shadow-xl flex items-center gap-2 text-xs font-semibold text-white animate-float">
                <Shield className="w-4 h-4 text-gold-400" />
                <span>Cybersecurity Specialist</span>
              </div>

              <div className="absolute -top-3 -right-3 sm:-right-6 px-3.5 py-2 rounded-xl bg-[#0C0E14]/95 border border-amber-500/40 backdrop-blur-md shadow-xl flex items-center gap-2 text-xs font-semibold text-white">
                <Terminal className="w-4 h-4 text-amber-400" />
                <span>Full-Stack Engineer</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Metrics Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {METRICS.map((metric, index) => (
            <div
              key={index}
              className="p-5 rounded-2xl glass-card-gold glass-card-gold-hover text-center sm:text-left"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-amber-400 to-yellow-500">
                {metric.value}
              </div>
              <div className="text-sm font-semibold text-white mt-1">
                {metric.label}
              </div>
              <div className="text-xs text-slate-400 font-mono mt-0.5">
                {metric.sub}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
