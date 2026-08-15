'use client';

import React from 'react';
import { STATS, TESTIMONIALS } from '../data/services';
import { Award, Quote, TrendingUp, CheckCircle } from 'lucide-react';

interface MetricsProps {
  playBeep: (freq?: number, type?: OscillatorType) => void;
}

export default function MetricsAndManifesto({ playBeep }: MetricsProps) {
  return (
    <section id="manifesto" className="relative w-full border-b-2 border-neutral-800 bg-black py-20">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-2 border-neutral-800 pb-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-brutal-lime uppercase tracking-widest mb-2">
              <span className="w-2 h-2 bg-brutal-lime inline-block" />
              <span>// REPUTATION & VALIDATION</span>
            </div>
            <h2 className="font-syne font-extrabold text-4xl sm:text-6xl lg:text-7xl uppercase text-white tracking-tighter">
              HARD <span className="text-brutal-lime">METRICS</span> & VOICES
            </h2>
          </div>

          <p className="font-mono text-xs sm:text-sm text-neutral-400 max-w-md">
            We measure victory not in design awards alone, but in undeniable client revenue, sub-millisecond benchmarks, and cultural shockwaves.
          </p>
        </div>

        {/* 4 Massive Stat Blocks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {STATS.map((stat, idx) => (
            <div
              key={idx}
              className="border-3 border-white bg-neutral-950 p-6 sm:p-8 shadow-brutal-white transition-all hover:translate-y-[-2px] hover:shadow-brutal-lime font-mono group"
            >
              <div className="text-xs text-neutral-500 font-bold mb-2">
                INDEX // 0{idx + 1}
              </div>
              <div className="font-syne font-extrabold text-5xl sm:text-6xl text-white group-hover:text-brutal-lime transition-colors tracking-tight mb-2">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-neutral-200 uppercase tracking-wide mb-2">
                {stat.label}
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed border-t border-neutral-800 pt-3">
                {stat.note}
              </p>
            </div>
          ))}
        </div>

        {/* Client Testimonials Grid */}
        <div className="border-t-2 border-neutral-800 pt-12">
          <div className="text-xs font-mono text-neutral-400 uppercase tracking-widest mb-8 flex items-center gap-3">
            <span>// VERIFIED FOUNDER & LEADER ENDORSEMENTS</span>
            <div className="h-px flex-1 bg-neutral-800" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {TESTIMONIALS.map((testi) => (
              <div
                key={testi.id}
                className="border-3 border-neutral-800 bg-neutral-950 p-6 sm:p-8 flex flex-col justify-between hover:border-white transition-all duration-200 shadow-brutal font-mono relative group"
              >
                {/* Metric Badge */}
                <div className="flex items-center justify-between border-b border-neutral-800 pb-4 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-brutal-lime rounded-full" />
                    <span className="text-xs font-bold text-white uppercase">{testi.tag}</span>
                  </div>
                  <div className="bg-brutal-lime text-black font-extrabold text-xs px-2 py-0.5 border border-black">
                    {testi.metric}
                  </div>
                </div>

                {/* Quote */}
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed italic mb-6">
                  &ldquo;{testi.quote}&rdquo;
                </p>

                {/* Author Avatar & Credential */}
                <div className="flex items-center gap-4 pt-4 border-t border-neutral-800">
                  <div className="w-12 h-12 border-2 border-black overflow-hidden bg-neutral-800 shrink-0">
                    <img
                      src={testi.avatar}
                      alt={testi.author}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all"
                    />
                  </div>
                  <div>
                    <h4 className="font-syne font-bold text-sm sm:text-base text-white uppercase tracking-tight">
                      {testi.author}
                    </h4>
                    <span className="text-[11px] text-brutal-lime block uppercase">
                      {testi.role} // {testi.company}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
