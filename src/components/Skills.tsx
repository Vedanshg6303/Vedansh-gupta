import React from 'react';
import { 
  Code2, 
  Layout, 
  Server, 
  Database, 
  ShieldCheck, 
  Wrench,
  CheckCircle2,
  Cpu
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2': return <Code2 className="w-5 h-5" />;
      case 'Layout': return <Layout className="w-5 h-5" />;
      case 'Server': return <Server className="w-5 h-5" />;
      case 'Database': return <Database className="w-5 h-5" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5" />;
      case 'Wrench': return <Wrench className="w-5 h-5" />;
      default: return <Cpu className="w-5 h-5" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative bg-black/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-lg bg-gold-500/10 border border-gold-500/30 text-xs font-mono text-gold-400 uppercase tracking-widest">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Comprehensive Skills & Modern Tooling Matrix
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            From foundational C++/Java algorithms and Python security layers to modern React, Node, and MongoDB production stacks.
          </p>
        </div>

        {/* 6 Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl glass-card-gold glass-card-gold-hover space-y-5 border border-slate-800/80 hover:border-gold-500/45 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header with Icon */}
                <div className="flex items-center gap-3 pb-3 border-b border-slate-800/80">
                  <div
                    className="p-2.5 rounded-xl border"
                    style={{
                      backgroundColor: `${category.accentColor}18`,
                      borderColor: `${category.accentColor}40`,
                      color: category.accentColor,
                    }}
                  >
                    {getIcon(category.icon)}
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base">
                      {category.title}
                    </h3>
                    <span className="text-[11px] font-mono text-slate-400">
                      {category.skills.length} verified competencies
                    </span>
                  </div>
                </div>

                {/* Skills Chips Grid */}
                <div className="pt-4 flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="group/skill flex items-center justify-between gap-2 px-3 py-1.5 rounded-lg bg-[#0A0D14] border border-slate-800 hover:border-gold-500/40 text-xs text-slate-200 transition-all"
                    >
                      <span className="font-medium text-slate-100">{skill.name}</span>
                      <span className="text-[10px] font-mono text-gold-400/90 px-1.5 py-0.5 rounded bg-gold-500/10">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Micro-tag */}
              <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="text-slate-400">BENCHMARK</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Production-Grade
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
