'use client';

import React, { useState } from 'react';
import { Layers, Scan, Cpu, Radio, Shield, Crosshair, ArrowUpRight, Zap } from 'lucide-react';

interface CollageProps {
  playBeep: (freq?: number, type?: OscillatorType) => void;
  onOpenContact: () => void;
}

export default function OverlappingCollage({ playBeep, onOpenContact }: CollageProps) {
  const [wireframeMode, setWireframeMode] = useState(false);
  const [activeTab, setActiveTab] = useState<'MANIFESTO' | 'STANDARDS' | 'ARCHETYPE'>('MANIFESTO');

  const toggleWireframe = () => {
    playBeep(wireframeMode ? 350 : 700, 'sawtooth');
    setWireframeMode(!wireframeMode);
  };

  return (
    <section id="experiments" className="relative w-full border-b-2 border-neutral-800 bg-neutral-900 py-20 overflow-hidden">
      {/* Background Graphic Watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none select-none">
        <span className="font-syne font-black text-[22vw] text-white tracking-tighter">
          BRUTAL
        </span>
      </div>

      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-2 border-neutral-800 pb-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-brutal-orange uppercase tracking-widest mb-2">
              <span className="w-2 h-2 bg-brutal-orange inline-block" />
              <span>// DESIGN INTELLIGENCE // EXPERIMENTAL LAB</span>
            </div>
            <h2 className="font-syne font-extrabold text-4xl sm:text-6xl lg:text-7xl uppercase text-white tracking-tighter">
              RADICAL <span className="text-brutal-lime">COLLAGE</span> & FORM
            </h2>
          </div>

          {/* Interactive Mode Switcher */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleWireframe}
              className={`px-4 py-2 font-mono text-xs uppercase font-bold border-2 flex items-center gap-2 transition-all ${
                wireframeMode
                  ? 'bg-brutal-lime text-black border-black shadow-brutal-sm'
                  : 'bg-black text-neutral-300 border-neutral-700 hover:border-white'
              }`}
            >
              <Scan className="w-4 h-4" />
              <span>{wireframeMode ? 'WIREFRAME VIEW [ACTIVE]' : 'TOGGLE WIREFRAME HUD'}</span>
            </button>
          </div>
        </div>

        {/* The Overlapping Brutalist Grid Collage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Overlapping Collage Cards */}
          <div className="lg:col-span-7 relative min-h-[480px] sm:min-h-[580px] flex items-center justify-center">
            {/* Base Layer Card 01: Massive Outlined Frame */}
            <div
              className={`absolute top-0 left-0 w-[82%] sm:w-[70%] aspect-[4/3] border-4 ${
                wireframeMode ? 'border-brutal-lime bg-black/90' : 'border-white bg-neutral-950'
              } p-4 shadow-brutal-white transition-all duration-300 z-10 group`}
            >
              <div className="flex justify-between items-center border-b border-neutral-800 pb-2 mb-3 text-[11px] font-mono text-neutral-400">
                <span className="text-brutal-lime font-bold">FIG 01 // KINETIC FRAME</span>
                <span>ISO 9001</span>
              </div>
              <div className="relative w-full h-[calc(100%-30px)] overflow-hidden border border-neutral-800 bg-neutral-900">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
                  alt="Brutalist Architecture"
                  className={`w-full h-full object-cover transition-all duration-500 ${
                    wireframeMode ? 'opacity-20 grayscale' : 'grayscale contrast-125 group-hover:scale-105'
                  }`}
                />
                {wireframeMode && (
                  <div className="absolute inset-0 bg-brutal-grid opacity-60 flex items-center justify-center font-mono text-xs text-brutal-lime">
                    [MESH_VERTEX: 24,800 // NORMAL_SURFACE]
                  </div>
                )}
                <div className="absolute bottom-2 left-2 bg-black/90 px-2 py-1 text-[10px] font-mono text-white border border-neutral-700">
                  STRUCTURE: REINFORCED WEBGL
                </div>
              </div>
            </div>

            {/* Overlapping Layer Card 02: Angled Brutalist Specimen */}
            <div
              className={`absolute bottom-0 right-0 w-[78%] sm:w-[65%] aspect-[16/11] border-4 ${
                wireframeMode ? 'border-brutal-orange bg-black' : 'border-black bg-white'
              } p-4 shadow-brutal-lg transition-all duration-300 z-20 hover:z-30 hover:scale-[1.02] group`}
            >
              <div className="flex justify-between items-center border-b-2 border-black pb-2 mb-3 text-[11px] font-mono text-black font-bold">
                <span className="bg-black text-white px-2 py-0.5">SPECIMEN 02</span>
                <span>MONOCHROME // 2025</span>
              </div>
              <div className="relative w-full h-[calc(100%-30px)] overflow-hidden border-2 border-black bg-black">
                <img
                  src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop"
                  alt="Brutalist Architectural Monolith"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
                
                {/* Brutalist Hard Badge Overlay */}
                <div className="absolute top-2 right-2 bg-brutal-lime text-black font-mono font-black text-[10px] px-2 py-1 border border-black shadow-brutal-sm">
                  100% RAW VECTOR
                </div>

                <div className="absolute bottom-2 left-2 right-2 bg-black text-white p-2 text-xs font-mono flex justify-between items-center">
                  <span>TYPOGRAPHIC CLASH</span>
                  <span className="text-brutal-lime font-bold">AWARDED 2025</span>
                </div>
              </div>
            </div>

            {/* Center Floating Graphic Stamp / Barcode */}
            <div className="absolute z-30 bg-brutal-lime text-black p-3 border-3 border-black shadow-brutal rotate-3 hover:rotate-0 transition-transform duration-200 font-mono text-xs hidden sm:block">
              <div className="flex items-center gap-2 font-bold mb-1">
                <Zap className="w-4 h-4 fill-black" />
                <span>UNCOMPROMISING AESTHETIC</span>
              </div>
              <div className="tracking-tighter font-extrabold text-[10px] text-neutral-800">
                ||||| | |||| |||||| ||| ||||||| 894029
              </div>
            </div>
          </div>

          {/* Right Column: Tabbed Editorial Manifesto & Standards */}
          <div className="lg:col-span-5 space-y-6">
            {/* Tab Selectors */}
            <div className="flex border-2 border-neutral-700 bg-black p-1 font-mono text-xs">
              {(['MANIFESTO', 'STANDARDS', 'ARCHETYPE'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    playBeep(420, 'triangle');
                    setActiveTab(tab);
                  }}
                  className={`flex-1 py-2 font-bold uppercase transition-all ${
                    activeTab === tab
                      ? 'bg-white text-black shadow-brutal-sm'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Tab Content Box */}
            <div className="border-3 border-white bg-black p-6 shadow-brutal-white font-mono space-y-4">
              {activeTab === 'MANIFESTO' && (
                <>
                  <div className="text-xs text-brutal-lime font-bold uppercase tracking-wider">
                    // 01. THE ANTI-TEMPLATE LAW
                  </div>
                  <h3 className="font-syne font-extrabold text-2xl sm:text-3xl text-white uppercase tracking-tight">
                    THE MODERN WEB IS SICK WITH BLAND CONFORMITY.
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                    Every digital product now uses the same rounded corners, pastel gradients, and generic hero sections. We build visual counter-weights: razor-sharp geometry, high-contrast layouts, and unapologetic brutalist hierarchy that stamps your brand permanently into human memory.
                  </p>
                  <div className="pt-2 border-t border-neutral-800 flex items-center justify-between text-xs text-neutral-400">
                    <span>CODENAME: MONOLITH</span>
                    <span className="text-brutal-lime font-bold">100% UNFORGIVING</span>
                  </div>
                </>
              )}

              {activeTab === 'STANDARDS' && (
                <>
                  <div className="text-xs text-brutal-orange font-bold uppercase tracking-wider">
                    // 02. TECHNICAL BENCHMARKS
                  </div>
                  <h3 className="font-syne font-extrabold text-2xl sm:text-3xl text-white uppercase tracking-tight">
                    BRUTAL SPEED. ZERO CODE BLOAT.
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-neutral-300">
                    <li className="flex items-center gap-2">
                      <span className="text-brutal-lime font-bold">▶</span>
                      <strong>Sub-150ms Interaction Latency</strong> across all global edge nodes.
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-brutal-lime font-bold">▶</span>
                      <strong>120 FPS WebGL Shaders</strong> with GPU memory pooling.
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-brutal-lime font-bold">▶</span>
                      <strong>WCAG 2.2 AA High Contrast</strong> with 8.5:1 text readability.
                    </li>
                  </ul>
                  <div className="pt-2 border-t border-neutral-800 flex items-center justify-between text-xs text-neutral-400">
                    <span>AUDIT: 100/100 LIGHTHOUSE</span>
                    <span className="text-white font-bold">ZERO ERRORS</span>
                  </div>
                </>
              )}

              {activeTab === 'ARCHETYPE' && (
                <>
                  <div className="text-xs text-brutal-blue font-bold uppercase tracking-wider">
                    // 03. ARCHITECTURAL DNA
                  </div>
                  <h3 className="font-syne font-extrabold text-2xl sm:text-3xl text-white uppercase tracking-tight">
                    HIGH-DENSITY MODULAR SYSTEMS.
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                    We structure pages like physical brutalist monoliths: visible joints, heavy structural pillars, unhidden monospaced data feeds, and kinetic tactile buttons that deliver instant tactile feedback.
                  </p>
                  <div className="pt-2 border-t border-neutral-800 flex items-center justify-between text-xs text-neutral-400">
                    <span>FRAMEWORK: NEXT.JS 15</span>
                    <span className="text-brutal-lime font-bold">PRODUCTION READY</span>
                  </div>
                </>
              )}
            </div>

            {/* Quick Action Button */}
            <button
              onClick={() => {
                playBeep(540, 'square');
                onOpenContact();
              }}
              className="w-full btn-brutal-lime text-sm"
            >
              <span>REQUEST TECHNICAL AUDIT FOR YOUR BRAND</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
