'use client';

import React, { useRef, useState, useEffect } from 'react';
import { PROJECTS } from '../data/projects';
import { Project } from '../types';
import { ArrowLeft, ArrowRight, Eye, ExternalLink, Sparkles, Filter, Layers, CheckCircle2 } from 'lucide-react';

interface ShowcaseProps {
  onSelectProject: (p: Project) => void;
  playBeep: (freq?: number, type?: OscillatorType) => void;
}

export default function HorizontalShowcase({ onSelectProject, playBeep }: ShowcaseProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const categories = ['ALL', 'Spatial 3D', 'Experience UI', 'Digital Artifact', 'E-Commerce', 'Generative Brand'];

  const filteredProjects = activeCategory === 'ALL'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  // Sync scroll position & progress
  const handleTrackScroll = () => {
    if (!trackRef.current) return;
    const { scrollLeft: sLeft, scrollWidth, clientWidth } = trackRef.current;
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll > 0) {
      const progress = Math.min(100, Math.max(0, (sLeft / maxScroll) * 100));
      setScrollProgress(progress);

      const cardWidth = 520;
      const idx = Math.min(filteredProjects.length - 1, Math.round(sLeft / cardWidth));
      setCurrentIndex(idx);
    }
  };

  // Drag to scroll functionality
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!trackRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - trackRef.current.offsetLeft);
    setScrollLeft(trackRef.current.scrollLeft);
  };

  const handleMouseLeaveOrUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !trackRef.current) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    trackRef.current.scrollLeft = scrollLeft - walk;
  };

  // Arrow navigation
  const scrollStep = (direction: 'left' | 'right') => {
    playBeep(direction === 'right' ? 520 : 380, 'sine');
    if (!trackRef.current) return;
    const scrollAmount = trackRef.current.clientWidth * 0.75;
    trackRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  const jumpToProject = (index: number) => {
    playBeep(450, 'triangle');
    if (!trackRef.current) return;
    const cards = trackRef.current.querySelectorAll('.project-card');
    if (cards[index]) {
      cards[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  };

  return (
    <section
      id="showcase"
      ref={containerRef}
      className="relative w-full border-b-2 border-neutral-800 bg-neutral-950 py-16 overflow-hidden select-none"
    >
      {/* Top Header & Section Controls */}
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b-2 border-neutral-800 pb-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-brutal-lime uppercase tracking-widest mb-2">
              <span className="w-2 h-2 bg-brutal-lime inline-block" />
              <span>// ARCHIVE INDEX [01] — [06]</span>
            </div>
            <h2 className="font-syne font-extrabold text-4xl sm:text-6xl lg:text-7xl uppercase text-white tracking-tighter">
              FEATURED <span className="text-black bg-white px-3 py-0.5 border-2 border-black">BUILDS</span>
            </h2>
          </div>

          {/* Filter Pills & Interactive Nav */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full font-mono text-xs">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    playBeep(400, 'square');
                    setActiveCategory(cat);
                  }}
                  className={`px-3 py-1.5 uppercase font-bold border-2 transition-all whitespace-nowrap ${
                    activeCategory === cat
                      ? 'bg-brutal-lime text-black border-black shadow-brutal-sm'
                      : 'bg-neutral-900 text-neutral-400 border-neutral-700 hover:text-white hover:border-neutral-500'
                  }`}
                >
                  {cat === 'ALL' ? `ALL [${PROJECTS.length}]` : cat}
                </button>
              ))}
            </div>

            {/* Step Arrows */}
            <div className="hidden sm:flex items-center gap-2 pl-2">
              <button
                onClick={() => scrollStep('left')}
                title="Scroll Left"
                className="p-3 bg-neutral-900 border-2 border-white hover:bg-brutal-lime hover:text-black hover:border-black active:translate-x-0.5 active:translate-y-0.5 transition-all text-white shadow-brutal-white"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollStep('right')}
                title="Scroll Right"
                className="p-3 bg-neutral-900 border-2 border-white hover:bg-brutal-lime hover:text-black hover:border-black active:translate-x-0.5 active:translate-y-0.5 transition-all text-white shadow-brutal-white"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Dynamic Progress & Navigation Bar */}
        <div className="flex items-center justify-between text-xs font-mono text-neutral-400 mt-4">
          <div className="flex items-center gap-3">
            <span className="text-white font-bold">
              POSITION: <strong className="text-brutal-lime">{String(currentIndex + 1).padStart(2, '0')}</strong> /{' '}
              {String(filteredProjects.length).padStart(2, '0')}
            </span>
            <span className="hidden sm:inline-block text-neutral-600">|</span>
            <span className="hidden sm:inline-block text-neutral-400">
              DRAG OR SCROLL HORIZONTALLY TO EXPLORE
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-32 sm:w-48 h-2.5 bg-neutral-900 border border-neutral-700 relative overflow-hidden">
              <div
                className="h-full bg-brutal-lime transition-all duration-150"
                style={{ width: `${Math.max(10, scrollProgress)}%` }}
              />
            </div>
            <span className="font-bold text-white min-w-[36px] text-right">
              {Math.round(scrollProgress)}%
            </span>
          </div>
        </div>
      </div>

      {/* Horizontal Scroll Track */}
      <div
        ref={trackRef}
        onScroll={handleTrackScroll}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeaveOrUp}
        onMouseUp={handleMouseLeaveOrUp}
        onMouseMove={handleMouseMove}
        data-cursor-text="DRAG // EXPLORE"
        className={`w-full overflow-x-auto hide-scrollbar flex gap-6 sm:gap-8 px-4 sm:px-6 lg:px-8 pb-8 pt-2 scroll-smooth ${
          isDragging ? 'cursor-grabbing' : 'cursor-grab'
        }`}
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {filteredProjects.map((project, idx) => (
          <div
            key={project.id}
            className="project-card flex-none w-[85vw] sm:w-[500px] lg:w-[580px] xl:w-[640px] border-3 sm:border-4 border-white bg-black p-4 sm:p-6 shadow-brutal-white transition-all duration-300 hover:translate-y-[-4px] hover:shadow-brutal-lime group relative"
            style={{ scrollSnapAlign: 'start' }}
          >
            {/* Top Serial Banner */}
            <div className="flex items-center justify-between border-b-2 border-neutral-800 pb-3 mb-4 font-mono text-xs">
              <div className="flex items-center gap-2">
                <span className="bg-brutal-lime text-black font-extrabold px-2 py-0.5 text-xs">
                  {project.number}
                </span>
                <span className="text-white font-bold tracking-wider">{project.client}</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-400">
                <span className="border border-neutral-700 px-2 py-0.5 bg-neutral-900">
                  {project.category}
                </span>
                <span>{project.year}</span>
              </div>
            </div>

            {/* Overlapping Image Composition */}
            <div className="relative aspect-[16/10] w-full overflow-hidden border-2 border-neutral-700 bg-neutral-900 mb-5">
              <img
                src={project.heroImage}
                alt={project.title}
                className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

              {/* Overlapping Secondary Inset Stamp */}
              <div className="absolute -bottom-2 right-4 w-28 sm:w-36 aspect-[4/3] border-2 border-black bg-neutral-950 shadow-brutal overflow-hidden hidden sm:block rotate-2 group-hover:rotate-0 transition-transform duration-300">
                <img
                  src={project.secondaryImage}
                  alt={`${project.title} Detail`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-1 left-1 bg-black/80 px-1 text-[9px] font-mono text-white">
                  DETAIL
                </div>
              </div>

              {/* Category Stamp Badge */}
              <div className="absolute top-3 left-3 bg-black/90 text-brutal-lime font-mono text-xs font-bold px-2.5 py-1 border border-brutal-lime/60 backdrop-blur-sm">
                ✦ {project.awards[0] || 'FEATURED SPECIMEN'}
              </div>
            </div>

            {/* Project Title & Narrative */}
            <div className="space-y-3">
              <h3 className="font-syne font-extrabold text-2xl sm:text-3xl lg:text-4xl uppercase text-white tracking-tight group-hover:text-brutal-lime transition-colors">
                {project.title}
              </h3>
              <p className="font-mono text-xs sm:text-sm text-neutral-300 line-clamp-2 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Key Metrics Strip */}
            <div className="grid grid-cols-3 gap-2 my-5 py-3 border-y border-neutral-800 font-mono text-xs">
              {project.metrics.map((m, mIdx) => (
                <div key={mIdx} className="bg-neutral-900/80 p-2 border border-neutral-800">
                  <span className="text-[10px] text-neutral-500 block truncate">{m.label}</span>
                  <span className="text-white font-bold text-xs sm:text-sm block truncate text-brutal-lime">
                    {m.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-1.5 mb-5 font-mono text-[11px]">
              {project.stack.slice(0, 4).map((tech, tIdx) => (
                <span
                  key={tIdx}
                  className="px-2 py-0.5 bg-neutral-900 border border-neutral-700 text-neutral-300"
                >
                  #{tech}
                </span>
              ))}
            </div>

            {/* Interactive Action Buttons */}
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => {
                  playBeep(600, 'square');
                  onSelectProject(project);
                }}
                data-cursor-text="CASE STUDY"
                className="flex-1 bg-white text-black font-mono font-bold text-xs sm:text-sm uppercase py-2.5 px-4 border-2 border-black hover:bg-brutal-lime transition-all flex items-center justify-center gap-2 shadow-brutal-sm active:translate-x-0.5 active:translate-y-0.5"
              >
                <Eye className="w-4 h-4" />
                <span>DEEP DIVE [SPECS]</span>
              </button>

              <button
                onClick={() => {
                  playBeep(700, 'sine');
                  onSelectProject(project);
                }}
                className="p-2.5 bg-neutral-900 border-2 border-neutral-700 text-white hover:text-black hover:bg-brutal-lime hover:border-black transition-all"
                title="Inspect Project"
              >
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Jump Dot Matrix Bar */}
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 mt-4 flex items-center justify-center gap-2">
        {filteredProjects.map((p, idx) => (
          <button
            key={p.id}
            onClick={() => jumpToProject(idx)}
            className={`h-2 transition-all ${
              currentIndex === idx
                ? 'w-8 bg-brutal-lime border border-black'
                : 'w-2 bg-neutral-700 hover:bg-neutral-500'
            }`}
            title={`Jump to ${p.title}`}
          />
        ))}
      </div>
    </section>
  );
}
