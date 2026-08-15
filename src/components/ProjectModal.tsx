'use client';

import React, { useEffect } from 'react';
import { Project } from '../types';
import { X, ExternalLink, Award, CheckCircle, Cpu, Layers, Sparkles } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  playBeep: (freq?: number, type?: OscillatorType) => void;
}

export default function ProjectModal({ project, onClose, playBeep }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        playBeep(300, 'sine');
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, playBeep]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-black/90 backdrop-blur-md overflow-y-auto">
      {/* Modal Container */}
      <div className="relative w-full max-w-5xl border-4 border-white bg-neutral-950 p-6 sm:p-8 lg:p-10 shadow-brutal-white font-mono my-auto max-h-[90vh] overflow-y-auto">
        {/* Top Action Bar */}
        <div className="flex items-center justify-between border-b-2 border-neutral-800 pb-4 mb-6 sticky top-0 bg-neutral-950/95 z-20">
          <div className="flex items-center gap-3">
            <span className="bg-brutal-lime text-black font-extrabold text-xs px-2.5 py-1">
              SPECIMEN // {project.number}
            </span>
            <span className="text-xs text-neutral-400 font-bold uppercase tracking-widest hidden sm:inline-block">
              {project.category} // {project.year}
            </span>
          </div>

          <button
            onClick={() => {
              playBeep(300, 'sine');
              onClose();
            }}
            className="bg-neutral-900 text-white font-bold text-xs uppercase px-4 py-2 border-2 border-white hover:bg-brutal-lime hover:text-black hover:border-black transition-all flex items-center gap-2 shadow-brutal-sm"
          >
            <span>CLOSE [ESC]</span>
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Colossal Title & Client Header */}
        <div className="space-y-2 mb-8">
          <span className="text-xs text-brutal-lime font-bold uppercase tracking-widest block">
            CLIENT: {project.client}
          </span>
          <h2 className="font-syne font-extrabold text-3xl sm:text-5xl lg:text-6xl uppercase text-white tracking-tight">
            {project.title}
          </h2>
        </div>

        {/* Dual Brutalist Image Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-8">
          <div className="md:col-span-8 aspect-[16/10] overflow-hidden border-2 border-neutral-700 bg-neutral-900 relative">
            <img
              src={project.heroImage}
              alt={project.title}
              className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute top-3 left-3 bg-black/90 text-brutal-lime text-[11px] px-2.5 py-1 font-bold border border-brutal-lime">
              HERO SPECIMEN
            </div>
          </div>

          <div className="md:col-span-4 aspect-[4/3] md:aspect-auto overflow-hidden border-2 border-neutral-700 bg-neutral-900 relative">
            <img
              src={project.secondaryImage}
              alt={`${project.title} Detail`}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-3 left-3 bg-black/90 text-white text-[11px] px-2.5 py-1 font-bold border border-neutral-700">
              DETAIL ARCHIVE
            </div>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 p-4 bg-neutral-900 border-2 border-neutral-800">
          {project.metrics.map((m, idx) => (
            <div key={idx} className="p-3 bg-black border border-neutral-800">
              <span className="text-[10px] text-neutral-500 block uppercase">{m.label}</span>
              <span className="font-syne font-extrabold text-2xl text-brutal-lime block mt-1">
                {m.value}
              </span>
            </div>
          ))}
        </div>

        {/* Narrative & Engineering Case Study */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-t-2 border-neutral-800 pt-8 mb-8">
          <div className="lg:col-span-7 space-y-4">
            <h3 className="font-syne font-extrabold text-xl sm:text-2xl text-white uppercase">
              ARCHITECTURAL BRIEF & SOLUTION
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              {project.longDescription}
            </p>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              Every interface layer was built with extreme performance optimization, ensuring zero layout shifts, instantaneous rendering, and dynamic responsiveness across ultra-wide monitors down to handheld displays.
            </p>
          </div>

          {/* Deliverables & Stack */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-bold text-white uppercase block mb-3">
                KEY DELIVERABLES:
              </span>
              <div className="space-y-1.5 text-xs text-neutral-300">
                {project.deliverables.map((del, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-brutal-lime shrink-0" />
                    <span>{del}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <span className="text-xs font-bold text-white uppercase block mb-2">
                TECHNOLOGY STACK:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {project.stack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 bg-neutral-900 border border-neutral-700 text-xs text-neutral-300"
                  >
                    #{tech}
                  </span>
                ))}
              </div>
            </div>

            {project.awards.length > 0 && (
              <div className="p-3 bg-neutral-900 border border-brutal-lime/40">
                <span className="text-[10px] text-brutal-lime font-bold block uppercase mb-1">
                  RECOGNITION & AWARDS:
                </span>
                <div className="text-xs text-white font-bold">
                  {project.awards.join(' • ')}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-t-2 border-neutral-800 pt-6">
          <div className="text-xs text-neutral-500">
            RECORD IDENTIFIER: 0x{project.id.toUpperCase().replace('-', '_')}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                playBeep(350, 'sine');
                onClose();
              }}
              className="px-5 py-2.5 border-2 border-neutral-700 text-xs font-bold uppercase hover:bg-white hover:text-black hover:border-black transition-all text-white"
            >
              CLOSE SPECIMEN
            </button>
            <a
              href="#contact"
              onClick={() => {
                playBeep(650, 'square');
                onClose();
              }}
              className="btn-brutal-lime text-xs sm:text-sm"
            >
              <span>COMMISSION SIMILAR BUILD</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
