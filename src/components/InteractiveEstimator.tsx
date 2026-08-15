'use client';

import React, { useState } from 'react';
import { Calculator, CheckSquare, Square, ArrowRight, Zap, RefreshCw, Layers, ShieldCheck } from 'lucide-react';

interface EstimatorProps {
  playBeep: (freq?: number, type?: OscillatorType) => void;
  onSendEstimateToPitch: (data: { services: string[]; addons: string[]; timeline: string; total: number }) => void;
}

export default function InteractiveEstimator({ playBeep, onSendEstimateToPitch }: EstimatorProps) {
  const [selectedCore, setSelectedCore] = useState<string>('spatial-3d');
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['spatial-audio', 'speed-optimization']);
  const [timelineSpeed, setTimelineSpeed] = useState<'standard' | 'accelerated' | 'rush'>('standard');

  const coreOptions = [
    { id: 'spatial-3d', label: 'Spatial 3D & WebGL Environment', basePrice: 28000, days: 35 },
    { id: 'flagship-web', label: 'Next.js 15 Flagship Web Monolith', basePrice: 32000, days: 30 },
    { id: 'brand-system', label: 'Radical Brand System & Type Foundry', basePrice: 26000, days: 28 },
    { id: 'ecommerce', label: 'Micro-Drop Brutalist E-Commerce', basePrice: 38000, days: 40 },
  ];

  const addonOptions = [
    { id: 'spatial-audio', label: 'Interactive WebAudio & Spatial Soundscape', price: 6500 },
    { id: 'speed-optimization', label: '100/100 Core Web Vitals SLA Guarantee', price: 4500 },
    { id: 'variable-type', label: 'Bespoke Variable Typeface (OTF/WOFF2)', price: 9000 },
    { id: 'draco-3d', label: '3D Photogrammetry & Draco Mesh Baking', price: 7500 },
    { id: 'headless-cms', label: 'Headless CMS Architecture (Sanity/Payload)', price: 5500 },
  ];

  const timelineMultiplier = {
    standard: { label: 'STANDARD [6-8 WEEKS]', mult: 1.0 },
    accelerated: { label: 'ACCELERATED [4 WEEKS]', mult: 1.25 },
    rush: { label: 'RUSH SPRINT [2-3 WEEKS]', mult: 1.6 },
  };

  const toggleAddon = (id: string) => {
    playBeep(480, 'sine');
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter((item) => item !== id));
    } else {
      setSelectedAddons([...selectedAddons, id]);
    }
  };

  // Compute total
  const coreItem = coreOptions.find((c) => c.id === selectedCore) || coreOptions[0];
  const addonsTotal = selectedAddons.reduce((acc, addonId) => {
    const item = addonOptions.find((a) => a.id === addonId);
    return acc + (item ? item.price : 0);
  }, 0);

  const subtotal = coreItem.basePrice + addonsTotal;
  const grandTotal = Math.round(subtotal * timelineMultiplier[timelineSpeed].mult);

  const handleExportToPitch = () => {
    playBeep(720, 'square');
    onSendEstimateToPitch({
      services: [coreItem.label],
      addons: selectedAddons.map((id) => addonOptions.find((a) => a.id === id)?.label || id),
      timeline: timelineMultiplier[timelineSpeed].label,
      total: grandTotal,
    });
  };

  return (
    <section id="estimator" className="relative w-full border-b-2 border-neutral-800 bg-neutral-950 py-20">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-2 border-neutral-800 pb-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-brutal-lime uppercase tracking-widest mb-2">
              <span className="w-2 h-2 bg-brutal-lime inline-block" />
              <span>// TRANSPARENT CLIENT TELEMETRY</span>
            </div>
            <h2 className="font-syne font-extrabold text-4xl sm:text-6xl lg:text-7xl uppercase text-white tracking-tighter">
              PROJECT <span className="text-black bg-white px-3 py-0.5 border-2 border-black">ESTIMATOR</span>
            </h2>
          </div>

          <p className="font-mono text-xs sm:text-sm text-neutral-400 max-w-md">
            Calculate your investment with complete transparency. No hidden markups or ambiguous agency retainers.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Scope Inputs */}
          <div className="lg:col-span-7 space-y-8">
            {/* Step 1: Core Discipline */}
            <div className="border-3 border-neutral-800 bg-black p-6">
              <div className="flex items-center justify-between border-b border-neutral-800 pb-3 mb-4 font-mono text-xs">
                <span className="text-brutal-lime font-bold uppercase">
                  [01] SELECT PRIMARY DISCIPLINE
                </span>
                <span className="text-neutral-500">REQUIRED</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {coreOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => {
                      playBeep(450, 'triangle');
                      setSelectedCore(opt.id);
                    }}
                    className={`p-4 text-left font-mono border-2 transition-all flex flex-col justify-between ${
                      selectedCore === opt.id
                        ? 'border-brutal-lime bg-neutral-900 text-white shadow-brutal-lime'
                        : 'border-neutral-800 bg-neutral-950 text-neutral-400 hover:border-neutral-600 hover:text-white'
                    }`}
                  >
                    <span className="font-syne font-bold text-base text-white uppercase mb-2">
                      {opt.label}
                    </span>
                    <div className="flex justify-between items-center text-xs pt-2 border-t border-neutral-800">
                      <span className="text-brutal-lime font-bold">
                        ${opt.basePrice.toLocaleString()}
                      </span>
                      <span className="text-neutral-500">~{opt.days} DAYS</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Advanced Architecture Add-Ons */}
            <div className="border-3 border-neutral-800 bg-black p-6">
              <div className="flex items-center justify-between border-b border-neutral-800 pb-3 mb-4 font-mono text-xs">
                <span className="text-brutal-orange font-bold uppercase">
                  [02] TECHNICAL ENHANCEMENTS & ADD-ONS
                </span>
                <span className="text-neutral-500">OPTIONAL</span>
              </div>

              <div className="space-y-2.5">
                {addonOptions.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <button
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`w-full p-3 text-left font-mono border-2 transition-all flex items-center justify-between ${
                        isChecked
                          ? 'border-white bg-neutral-900 text-white shadow-brutal-sm'
                          : 'border-neutral-800 bg-neutral-950 text-neutral-400 hover:border-neutral-700'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {isChecked ? (
                          <CheckSquare className="w-4 h-4 text-brutal-lime shrink-0" />
                        ) : (
                          <Square className="w-4 h-4 text-neutral-600 shrink-0" />
                        )}
                        <span className="text-xs sm:text-sm font-semibold">{addon.label}</span>
                      </div>
                      <span className="font-bold text-xs sm:text-sm text-neutral-300">
                        +${addon.price.toLocaleString()}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Timeline Velocity */}
            <div className="border-3 border-neutral-800 bg-black p-6">
              <div className="flex items-center justify-between border-b border-neutral-800 pb-3 mb-4 font-mono text-xs">
                <span className="text-white font-bold uppercase">[03] PRODUCTION VELOCITY</span>
                <span className="text-neutral-500">SELECT SPEED</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {(['standard', 'accelerated', 'rush'] as const).map((speed) => (
                  <button
                    key={speed}
                    onClick={() => {
                      playBeep(400, 'square');
                      setTimelineSpeed(speed);
                    }}
                    className={`p-3 text-center font-mono text-xs border-2 uppercase font-bold transition-all ${
                      timelineSpeed === speed
                        ? 'bg-brutal-lime text-black border-black shadow-brutal-sm'
                        : 'bg-neutral-950 text-neutral-400 border-neutral-800 hover:text-white'
                    }`}
                  >
                    {timelineMultiplier[speed].label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Computed Investment Receipt / Ledger */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="border-4 border-white bg-black p-6 sm:p-8 shadow-brutal-white font-mono space-y-6">
              {/* Receipt Header */}
              <div className="flex justify-between items-start border-b-2 border-neutral-800 pb-4">
                <div>
                  <span className="text-[10px] text-neutral-500 block uppercase">
                    ESTIMATOR SPEC SHEET
                  </span>
                  <h3 className="font-syne font-extrabold text-2xl text-white uppercase">
                    INVESTMENT LEDGER
                  </h3>
                </div>
                <div className="bg-brutal-lime text-black px-2 py-1 text-xs font-bold border border-black">
                  ESTIMATE V1.0
                </div>
              </div>

              {/* Itemized Line Items */}
              <div className="space-y-3 text-xs border-b-2 border-neutral-800 pb-5">
                <div className="flex justify-between text-neutral-300">
                  <span className="font-bold text-white uppercase">{coreItem.label}</span>
                  <span className="text-white font-bold">${coreItem.basePrice.toLocaleString()}</span>
                </div>

                {selectedAddons.map((id) => {
                  const item = addonOptions.find((a) => a.id === id);
                  if (!item) return null;
                  return (
                    <div key={id} className="flex justify-between text-neutral-400 pl-2 border-l border-neutral-800">
                      <span>+ {item.label}</span>
                      <span className="text-neutral-300">${item.price.toLocaleString()}</span>
                    </div>
                  );
                })}

                {timelineSpeed !== 'standard' && (
                  <div className="flex justify-between text-brutal-orange font-bold pl-2 border-l border-brutal-orange">
                    <span>TIMELINE MULTIPLIER ({timelineMultiplier[timelineSpeed].label})</span>
                    <span>+{Math.round((timelineMultiplier[timelineSpeed].mult - 1) * 100)}%</span>
                  </div>
                )}
              </div>

              {/* Grand Total Display */}
              <div className="bg-neutral-900 p-4 border-2 border-neutral-700">
                <span className="text-xs text-neutral-400 uppercase block mb-1">
                  ESTIMATED PROJECT VALUE:
                </span>
                <div className="font-syne font-extrabold text-4xl sm:text-5xl text-brutal-lime tracking-tight">
                  ${grandTotal.toLocaleString()}{' '}
                  <span className="text-xs font-mono text-neutral-400">USD</span>
                </div>
                <span className="text-[11px] text-neutral-500 block mt-2">
                  *Includes full code handoff, Figma design tokens, and 60-day post-launch warranty.
                </span>
              </div>

              {/* Transfer CTA */}
              <button
                onClick={handleExportToPitch}
                className="w-full btn-brutal-lime text-sm sm:text-base group"
              >
                <span>TRANSFER SCOPE TO INQUIRY</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
