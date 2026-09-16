import React, { useState } from 'react';
import { ExternalLink, Github, Sparkles, Shield, Music, Layers, ArrowUpRight, Maximize2, X } from 'lucide-react';
import { PROJECTS, Project } from '../data/portfolioData';

export const Projects: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<{ url: string; title: string } | null>(null);

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-lg bg-gold-500/10 border border-gold-500/30 text-xs font-mono text-gold-400 uppercase tracking-widest">
            <Layers className="w-3.5 h-3.5" />
            <span>Featured Engineering Works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Key Software & Security Projects
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Architected with modern full-stack paradigms, rigorous threat modeling, and production-tested performance.
          </p>
        </div>

        {/* Projects Cards Showcase */}
        <div className="space-y-12">
          {PROJECTS.map((project, index) => {
            const isTridrishti = project.id === 'tridrishti';

            return (
              <div
                key={project.id}
                className={`p-7 sm:p-9 rounded-3xl glass-card-gold border transition-all duration-300 overflow-hidden ${
                  isTridrishti
                    ? 'border-gold-500/40 bg-gradient-to-br from-[#10141F] via-[#0C0F17] to-[#121824] shadow-[0_20px_50px_-20px_rgba(234,179,8,0.25)]'
                    : 'border-slate-800/90 hover:border-gold-500/40'
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Column: UI/UX Preview Mockup (5 cols) */}
                  <div className="lg:col-span-5 space-y-3">
                    <div className="relative group rounded-2xl overflow-hidden border border-gold-500/25 bg-black/60 shadow-xl">
                      {/* Image */}
                      <img
                        src={project.imageUrl}
                        alt={`${project.title} UI Preview`}
                        className="w-full h-56 sm:h-64 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />

                      {/* Image Overlay Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                      {/* View Full Image Button */}
                      <button
                        onClick={() => setSelectedImage({ url: project.imageUrl, title: project.title })}
                        className="absolute bottom-3 right-3 p-2 rounded-xl bg-black/80 hover:bg-gold-500 text-slate-200 hover:text-black border border-gold-500/30 transition-all opacity-0 group-hover:opacity-100 flex items-center gap-1.5 text-xs font-mono shadow-lg"
                        title="Expand UI Preview"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span>Preview UI</span>
                      </button>

                      {/* Badge in top left corner of image */}
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-black/80 backdrop-blur-md border border-gold-500/40 text-gold-300 flex items-center gap-1">
                          <Sparkles className="w-3 h-3 text-gold-400" />
                          {project.badge}
                        </span>
                      </div>
                    </div>

                    {/* Quick caption under preview */}
                    <div className="text-[11px] font-mono text-slate-400 flex items-center justify-between px-1">
                      <span>UI/UX DESIGN &bull; FIGMA TO CODE</span>
                      <span className="text-gold-400">Production-Ready</span>
                    </div>
                  </div>

                  {/* Right Column: Project Details & Actions (7 cols) */}
                  <div className="lg:col-span-7 space-y-4">
                    
                    {/* Header: Title & Subtitle */}
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="text-xs font-mono text-gold-400">
                          {project.period}
                        </span>
                        <span className="text-xs font-mono text-slate-500">&bull;</span>
                        <span className="text-xs font-mono text-slate-300">
                          Role: {project.role}
                        </span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                        {project.title}
                      </h3>
                      <p className="text-gold-300/90 text-sm font-medium">
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* Engineering Highlights */}
                    <div className="space-y-2 pt-1">
                      <h4 className="text-xs font-mono uppercase tracking-wider text-gold-400">
                        Key Architectural Accomplishments:
                      </h4>
                      <ul className="space-y-1.5">
                        {project.highlights.map((highlight, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-gold-400 mt-1.5 shrink-0" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="pt-2 flex flex-wrap gap-1.5">
                      {project.techStack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-0.5 rounded-lg bg-[#0E121B] border border-gold-500/20 text-[11px] font-mono text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-slate-800/80">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2 py-2.5 px-5 rounded-xl bg-gradient-to-r from-gold-500 via-amber-500 to-yellow-500 hover:from-gold-400 hover:to-amber-400 text-slate-950 font-bold text-xs shadow-lg shadow-gold-500/20 hover:shadow-gold-500/35 transition-all"
                        >
                          <span>Open Live Website</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </a>
                      )}

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2 py-2.5 px-4 rounded-xl bg-obsidian-card hover:bg-slate-900 text-slate-200 font-semibold text-xs border border-gold-500/30 hover:border-gold-500/60 hover:text-gold-300 transition-all"
                        >
                          <Github className="w-4 h-4 text-gold-400" />
                          <span>View GitHub Repository</span>
                        </a>
                      )}
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Fullscreen UI Image Preview Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative max-w-5xl w-full bg-[#0C0E14] rounded-3xl border border-gold-500/40 p-3 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-3 border-b border-slate-800 mb-2">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-gold-400" />
                {selectedImage.title} &mdash; UI/UX High-Fidelity Architecture
              </h4>
              <button
                onClick={() => setSelectedImage(null)}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="w-full h-auto max-h-[75vh] object-contain rounded-2xl"
            />
          </div>
        </div>
      )}

    </section>
  );
};
