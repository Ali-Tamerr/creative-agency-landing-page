'use client';

import React, { useState } from 'react';
import { SERVICES } from '../data/services';
import { Service } from '../types';
import { ArrowUpRight, Plus, Minus, Check, Clock, DollarSign, Sparkles } from 'lucide-react';

interface ServicesProps {
  playBeep: (freq?: number, type?: OscillatorType) => void;
  onOpenEstimator: (serviceId?: string) => void;
}

export default function ServicesGrid({ playBeep, onOpenEstimator }: ServicesProps) {
  const [expandedId, setExpandedId] = useState<string | null>('spatial-3d-web');

  const toggleExpand = (id: string) => {
    if (expandedId === id) {
      playBeep(320, 'sine');
      setExpandedId(null);
    } else {
      playBeep(560, 'square');
      setExpandedId(id);
    }
  };

  return (
    <section id="services" className="relative w-full border-b-2 border-neutral-800 bg-black py-20">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-2 border-neutral-800 pb-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-brutal-lime uppercase tracking-widest mb-2">
              <span className="w-2 h-2 bg-brutal-lime inline-block" />
              <span>// CORE CAPABILITIES & DISCIPLINES</span>
            </div>
            <h2 className="font-syne font-extrabold text-4xl sm:text-6xl lg:text-7xl uppercase text-white tracking-tighter">
              AGENCY <span className="text-black bg-brutal-lime px-3 py-0.5 border-2 border-black">PRACTICES</span>
            </h2>
          </div>

          <p className="font-mono text-xs sm:text-sm text-neutral-400 max-w-md">
            We don’t do piecemeal redesigns. We take complete ownership of your visual architecture and code infrastructure from concept to worldwide release.
          </p>
        </div>

        {/* 2x2 Brutalist Grid of Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SERVICES.map((srv) => {
            const isExpanded = expandedId === srv.id;
            return (
              <div
                key={srv.id}
                className={`border-3 sm:border-4 ${
                  isExpanded ? 'border-white bg-neutral-950 shadow-brutal-white' : 'border-neutral-800 bg-neutral-950 hover:border-neutral-500'
                } p-6 sm:p-8 transition-all duration-300 relative group flex flex-col justify-between`}
              >
                <div>
                  {/* Top Serial & Badge Header */}
                  <div className="flex items-center justify-between border-b-2 border-neutral-800 pb-4 mb-5 font-mono text-xs">
                    <div className="flex items-center gap-2">
                      <span className="bg-white text-black font-extrabold px-2 py-0.5">
                        {srv.code}
                      </span>
                      <span className="text-neutral-400">{srv.badge}</span>
                    </div>
                    <button
                      onClick={() => toggleExpand(srv.id)}
                      className="p-1.5 bg-neutral-900 border border-neutral-700 hover:bg-brutal-lime hover:text-black hover:border-black transition-all text-white"
                      title={isExpanded ? 'Collapse' : 'Expand Details'}
                    >
                      {isExpanded ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </button>
                  </div>

                  {/* Title & Headline */}
                  <h3 className="font-syne font-extrabold text-2xl sm:text-3xl uppercase text-white tracking-tight mb-2 group-hover:text-brutal-lime transition-colors">
                    {srv.title}
                  </h3>
                  <div className="font-mono text-xs text-brutal-lime font-bold uppercase tracking-wider mb-4">
                    // {srv.headline}
                  </div>

                  <p className="font-mono text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6">
                    {srv.description}
                  </p>

                  {/* Expandable Deliverables List */}
                  {isExpanded && (
                    <div className="border-t border-neutral-800 pt-5 mt-4 space-y-4 animate-in fade-in duration-200">
                      <div className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                        KEY DELIVERABLES:
                      </div>
                      <div className="grid grid-cols-1 gap-2 font-mono text-xs">
                        {srv.deliverables.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-neutral-300 bg-neutral-900/60 p-2 border border-neutral-800">
                            <Check className="w-3.5 h-3.5 text-brutal-lime shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>

                      {/* Specs Row */}
                      <div className="grid grid-cols-2 gap-3 pt-2 font-mono text-xs">
                        <div className="bg-neutral-900 p-3 border border-neutral-800 flex items-center gap-2">
                          <Clock className="w-4 h-4 text-brutal-lime" />
                          <div>
                            <span className="text-[10px] text-neutral-500 block">TIMELINE</span>
                            <span className="text-white font-bold">{srv.timeline}</span>
                          </div>
                        </div>
                        <div className="bg-neutral-900 p-3 border border-neutral-800 flex items-center gap-2">
                          <DollarSign className="w-4 h-4 text-brutal-orange" />
                          <div>
                            <span className="text-[10px] text-neutral-500 block">STARTING ENGAGEMENT</span>
                            <span className="text-white font-bold">{srv.startingBudget}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Bottom Action Footer */}
                <div className="pt-6 mt-6 border-t-2 border-neutral-800 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {srv.tags.slice(0, 3).map((tag, tIdx) => (
                      <span key={tIdx} className="text-[10px] font-mono px-2 py-0.5 bg-neutral-900 border border-neutral-700 text-neutral-400">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => {
                      playBeep(640, 'square');
                      onOpenEstimator(srv.id);
                    }}
                    className="bg-neutral-900 hover:bg-brutal-lime hover:text-black text-white font-mono text-xs font-bold uppercase px-3 py-2 border border-neutral-700 hover:border-black flex items-center gap-1.5 transition-all shadow-brutal-sm"
                  >
                    <span>SCOPE IN ESTIMATOR</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
