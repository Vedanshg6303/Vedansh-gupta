import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Send, Sparkles, Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#060709]/95 backdrop-blur-xl border-b border-gold-500/20 py-3 shadow-2xl shadow-black/80'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold-500/20 via-amber-500/10 to-transparent border border-gold-500/40 flex items-center justify-center font-mono font-extrabold text-gold-400 text-lg group-hover:border-gold-400 group-hover:shadow-[0_0_20px_rgba(234,179,8,0.45)] transition-all">
              VG
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base tracking-tight text-white group-hover:text-gold-400 transition-colors flex items-center gap-1.5">
                Vedansh Gupta
                <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse inline-block" />
              </span>
              <span className="text-[10px] text-gold-500/80 font-mono tracking-widest uppercase">
                ENGINEER &bull; CYBERSECURITY
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-gold-300 hover:bg-gold-500/10 transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenResume}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-obsidian-card hover:bg-slate-900 text-slate-200 border border-gold-500/25 hover:border-gold-500/60 hover:text-gold-300 transition-all shadow-sm"
            >
              <FileText className="w-3.5 h-3.5 text-gold-400" />
              <span>Resume</span>
            </button>

            <a
              href="#contact"
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-gold-500 via-amber-500 to-yellow-500 hover:from-gold-400 hover:to-amber-400 text-slate-950 shadow-lg shadow-gold-500/25 hover:shadow-gold-500/40 transition-all"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Let's Connect</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenResume}
              className="px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-obsidian-card text-gold-400 border border-gold-500/30"
            >
              Resume
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-obsidian-card text-slate-200 border border-gold-500/30 hover:text-gold-400"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#060709]/98 backdrop-blur-2xl border-b border-gold-500/25 px-4 pt-3 pb-6 space-y-3 mt-2">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:text-gold-300 hover:bg-gold-500/10 transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2.5">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-bold bg-gold-500 text-slate-950 shadow-lg shadow-gold-500/20"
            >
              <Send className="w-4 h-4" />
              <span>Get In Touch</span>
            </a>

            <div className="flex justify-center gap-4 pt-2 text-slate-400">
              <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="hover:text-gold-400 p-2">
                <Github className="w-5 h-5" />
              </a>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="hover:text-gold-400 p-2">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-gold-400 p-2">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
