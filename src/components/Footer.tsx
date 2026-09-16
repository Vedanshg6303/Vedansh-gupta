import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Shield, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-gold-500/20 bg-[#050608] py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo & Copyright */}
          <div className="flex items-center gap-3 text-center md:text-left">
            <div className="w-9 h-9 rounded-xl bg-gold-500/10 border border-gold-500/40 flex items-center justify-center font-mono font-bold text-gold-400 text-sm">
              VG
            </div>
            <div>
              <div className="text-sm font-bold text-white flex items-center gap-1.5">
                <span>Vedansh Gupta</span>
                <span className="w-1.5 h-1.5 rounded-full bg-gold-400"></span>
              </div>
              <div className="text-xs text-slate-400 font-mono">
                Full-Stack Developer &bull; Cybersecurity Specialist
              </div>
            </div>
          </div>

          {/* Socials Strip */}
          <div className="flex items-center gap-4 text-slate-400">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-[#0C0E14] border border-gold-500/20 hover:border-gold-400 hover:text-gold-300 transition-all"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-[#0C0E14] border border-gold-500/20 hover:border-gold-400 hover:text-gold-300 transition-all"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2 rounded-lg bg-[#0C0E14] border border-gold-500/20 hover:border-gold-400 hover:text-gold-300 transition-all"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#0C0E14] border border-gold-500/30 hover:border-gold-400 text-xs font-mono text-slate-300 hover:text-gold-300 transition-all"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>

        </div>

        <div className="mt-8 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-mono gap-2 text-center sm:text-left">
          <div>
            &copy; {new Date().getFullYear()} Vedansh Gupta. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5 text-slate-400">
            <Shield className="w-3 h-3 text-gold-400" />
            <span>Black & Gold Edition &bull; React 18, Vite, TypeScript & Tailwind CSS</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
