'use client';

import React, { useState, useEffect } from 'react';
import { ArrowDown, Sparkles, Zap, Globe, Layers, ShieldCheck } from 'lucide-react';
import { CLIENT_ROLL } from '../data/services';

interface HeroProps {
  playBeep: (freq?: number, type?: OscillatorType) => void;
  onOpenContact: () => void;
}

export default function HeroSection({ playBeep, onOpenContact }: HeroProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [fps, setFps] = useState(120);

  useEffect(() => {
    let frameCount = 0;
    let lastTime = performance.now();
    let animId: number;

    const loop = (currentTime: number) => {
      frameCount++;
      if (currentTime - lastTime >= 1000) {
        setFps(Math.min(120, Math.round((frameCount * 1000) / (currentTime - lastTime))));
        frameCount = 0;
        lastTime = currentTime;
      }
      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, []);

  const handleHeroMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
    setMousePos({ x, y });
  };

  const scrollToWork = () => {
    playBeep(480, 'sine');
    const el = document.getElementById('showcase');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full border-b-2 border-neutral-800 bg-brutal-black pt-8 pb-16 overflow-hidden">
      {/* Background Graphic Grid */}
      <div className="absolute inset-0 bg-brutal-grid opacity-30 pointer-events-none" />

      {/* Decorative Technical Crosshairs */}
      <div className="absolute top-6 left-6 text-neutral-600 font-mono text-xs select-none pointer-events-none">
        [SYS-INIT // 0x8F92]
      </div>
      <div className="absolute top-6 right-6 text-neutral-600 font-mono text-xs select-none pointer-events-none">
        RENDER_ENGINE // GLSL_V3
      </div>

      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Header Tagline */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="inline-flex items-center gap-2 bg-neutral-900 border border-neutral-700 px-3 py-1 text-xs font-mono text-neutral-300">
            <span>RADICAL DIGITAL ATELIER</span>
            <span className="text-neutral-600">/</span>
            <span className="text-brutal-lime">TOKYO // NEW YORK // BERLIN</span>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono text-neutral-400">
            <span className="hidden sm:inline-block">FPS: <strong className="text-white">{fps}</strong></span>
            <span>MEMORY: <strong className="text-white">64.2 MB</strong></span>
            <span>STATE: <strong className="text-brutal-lime">STABLE</strong></span>
          </div>
        </div>

        {/* Main Brutalist Typography Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start my-4">
          <div className="lg:col-span-8 space-y-6">
            {/* Massive Heading */}
            <h1 className="font-syne font-extrabold text-5xl sm:text-7xl md:text-8xl lg:text-[6.2rem] xl:text-[7.4rem] uppercase leading-[0.88] tracking-tighter text-white">
              WE CRAFT <br />
              <span className="relative inline-block text-black bg-brutal-lime px-3 sm:px-4 py-1 my-1 border-3 sm:border-4 border-black shadow-brutal sm:shadow-brutal-lg">
                DIGITAL
              </span>{' '}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-500 hover:text-white transition-colors">
                MONOLITHS.
              </span>
            </h1>

            {/* Sub-headline & Brutalist Description */}
            <p className="font-mono text-base sm:text-lg text-neutral-300 max-w-2xl leading-relaxed pt-2 border-l-2 border-brutal-lime pl-4">
              We dismantle generic agency templates to engineer high-velocity 3D spatial environments, variable brand systems, and uncompromising brutalist web monoliths that conquer attention and print revenue.
            </p>

            {/* Action Bar */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={scrollToWork}
                data-cursor-text="EXPLORE WORK"
                className="btn-brutal-lime text-sm sm:text-base group"
              >
                <span>EXPLORE ARCHIVE [06]</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </button>

              <button
                onClick={() => {
                  playBeep(580, 'square');
                  onOpenContact();
                }}
                className="btn-brutal-black text-sm sm:text-base"
              >
                <span>COMMISSION A BUILD</span>
                <Zap className="w-4 h-4 text-brutal-lime" />
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Brutalist Collage & Artifact Card */}
          <div
            className="lg:col-span-4 relative mt-6 lg:mt-0"
            onMouseMove={handleHeroMouseMove}
          >
            <div
              className="relative border-3 border-white bg-neutral-950 p-5 shadow-brutal-white transition-transform duration-200 ease-out group"
              style={{
                transform: `perspective(1000px) rotateY(${mousePos.x}deg) rotateX(${-mousePos.y}deg)`,
              }}
            >
              {/* Card Meta Banner */}
              <div className="flex items-center justify-between border-b-2 border-neutral-800 pb-3 mb-4 font-mono text-xs">
                <span className="text-brutal-lime font-bold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  SPECIMEN // 001
                </span>
                <span className="text-neutral-400 bg-neutral-900 px-2 py-0.5 border border-neutral-700">
                  WebGL 2.0
                </span>
              </div>

              {/* Overlapping Hero Visual */}
              <div className="relative aspect-[4/3] w-full overflow-hidden border-2 border-neutral-700 bg-neutral-900 mb-4">
                <img
                  src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop"
                  alt="Spatial Monolith Specimen"
                  className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                {/* Stamp Sticker */}
                <div className="absolute top-3 right-3 bg-brutal-orange text-white font-mono font-bold text-[10px] px-2 py-1 uppercase border border-black shadow-brutal-sm rotate-6">
                  120 FPS NATIVE
                </div>

                <div className="absolute bottom-3 left-3 right-3 font-mono text-xs text-neutral-300 bg-black/80 backdrop-blur-sm p-2 border border-neutral-700">
                  <div className="flex justify-between text-[11px] text-brutal-lime font-bold">
                    <span>AUDIO-REACTIVE CORE</span>
                    <span>ACTIVE</span>
                  </div>
                </div>
              </div>

              {/* Live Technical Metrics */}
              <div className="grid grid-cols-2 gap-2 font-mono text-xs pt-1">
                <div className="bg-neutral-900 p-2.5 border border-neutral-800">
                  <span className="text-[10px] text-neutral-500 block">CORE LATENCY</span>
                  <span className="text-white font-bold text-sm">0.14s TTI</span>
                </div>
                <div className="bg-neutral-900 p-2.5 border border-neutral-800">
                  <span className="text-[10px] text-neutral-500 block">DESIGN SYSTEM</span>
                  <span className="text-brutal-lime font-bold text-sm">BRUTALIST V4</span>
                </div>
              </div>
            </div>

            {/* Overlapping Floating Sticker Badge */}
            <div className="absolute -bottom-6 -left-6 bg-brutal-yellow text-black font-mono font-black text-xs uppercase px-4 py-2 border-2 border-black shadow-brutal -rotate-3 hidden sm:flex items-center gap-2 z-20">
              <ShieldCheck className="w-4 h-4" />
              <span>ZERO TEMPLATES // 100% RAW CODE</span>
            </div>
          </div>
        </div>

        {/* Global Client Ticker Marquee */}
        <div className="mt-14 pt-8 border-t-2 border-neutral-800">
          <div className="flex items-center gap-4 mb-3">
            <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
              // RECOGNIZED BY LEADERS & BRANDS
            </span>
            <div className="h-px flex-1 bg-neutral-800" />
          </div>

          <div className="relative w-full overflow-hidden border-y-2 border-neutral-800 bg-neutral-950 py-3 font-syne font-extrabold text-xl sm:text-2xl tracking-tight uppercase text-neutral-400">
            <div className="animate-marquee-track whitespace-nowrap flex gap-12 items-center">
              {CLIENT_ROLL.concat(CLIENT_ROLL).map((client, idx) => (
                <div key={idx} className="flex items-center gap-12 group cursor-pointer hover:text-white transition-colors">
                  <span className="hover:text-brutal-lime transition-colors">{client}</span>
                  <span className="text-brutal-lime font-mono text-sm font-normal">✦</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
