'use client';

import React, { useState } from 'react';
import { ArrowUp, ArrowUpRight, Check, Send, Sparkles, Terminal } from 'lucide-react';

interface FooterProps {
  playBeep: (freq?: number, type?: OscillatorType) => void;
  onOpenContact: () => void;
}

export default function Footer({ playBeep, onOpenContact }: FooterProps) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const scrollToTop = () => {
    playBeep(650, 'sine');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    playBeep(700, 'square');
    setNewsletterSubscribed(true);
    setTimeout(() => {
      setNewsletterEmail('');
    }, 2000);
  };

  const socials = [
    { name: 'AWWWARDS', href: 'https://awwwards.com', tag: 'AWARDS' },
    { name: 'TWITTER / X', href: 'https://x.com', tag: 'DISPATCH' },
    { name: 'GITHUB', href: 'https://github.com', tag: 'CODE' },
    { name: 'INSTAGRAM', href: 'https://instagram.com', tag: 'VISUALS' },
    { name: 'ARE.NA', href: 'https://are.na', tag: 'RESEARCH' },
  ];

  return (
    <footer className="relative w-full bg-black border-t-4 border-white text-white font-mono overflow-hidden">
      {/* Upper Footer Grid */}
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Colossal Brand Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 bg-brutal-lime text-black font-bold text-xs px-3 py-1 border border-black shadow-brutal-sm">
              <span>RADICAL MONOLITH ARCHITECTURE</span>
            </div>

            <h2 className="font-syne font-extrabold text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tighter leading-none">
              LET’S BUILD <br />
              <span className="text-brutal-lime">THE IMPOSSIBLE.</span>
            </h2>

            <p className="text-xs sm:text-sm text-neutral-300 max-w-lg leading-relaxed">
              We partner with selected companies who refuse mediocrity. Full-stack architectural design, WebGL spatial mastery, and radical brand systems.
            </p>

            <button
              onClick={() => {
                playBeep(720, 'square');
                onOpenContact();
              }}
              className="btn-brutal-lime text-sm sm:text-base py-3.5 px-8"
            >
              <span>DISPATCH PROJECT BRIEF</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right Column: Dispatch Newsletter & Social Coordinates */}
          <div className="lg:col-span-6 space-y-10">
            {/* Newsletter Terminal Box */}
            <div className="border-3 border-neutral-700 bg-neutral-950 p-6 sm:p-8 shadow-brutal-white space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-brutal-lime">
                <Terminal className="w-4 h-4" />
                <span>// MONOLITH ARCHIVAL DISPATCH [NEWSLETTER]</span>
              </div>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Receive unreleased shaders, brutalist typography experiments, and engineering breakdowns monthly. Zero spam.
              </p>

              {newsletterSubscribed ? (
                <div className="p-3 bg-brutal-lime text-black font-bold text-xs flex items-center gap-2 border border-black">
                  <Check className="w-4 h-4" />
                  <span>TRANSMISSION CONFIRMED. WELCOME TO MONOLITH ARCHIVE.</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletter} className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    required
                    placeholder="architect@domain.com"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="flex-1 bg-black border-2 border-neutral-700 focus:border-brutal-lime text-white p-3 text-xs outline-none"
                  />
                  <button
                    type="submit"
                    className="bg-white text-black font-bold uppercase px-6 py-3 border-2 border-black hover:bg-brutal-lime transition-colors flex items-center justify-center gap-2 text-xs"
                  >
                    <span>JOIN</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>

            {/* Social Grid */}
            <div>
              <div className="text-xs text-neutral-500 uppercase tracking-widest mb-4">
                // EXTERNAL CHANNELS & HUDS
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                {socials.map((soc) => (
                  <a
                    key={soc.name}
                    href={soc.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => playBeep(500, 'sine')}
                    className="p-3 bg-neutral-950 border border-neutral-800 hover:border-brutal-lime hover:bg-neutral-900 transition-all flex items-center justify-between text-neutral-300 hover:text-white group"
                  >
                    <div>
                      <span className="text-[9px] text-neutral-500 block">{soc.tag}</span>
                      <span className="font-bold">{soc.name}</span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-neutral-600 group-hover:text-brutal-lime transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Global Studio Locations Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-y-2 border-neutral-800 py-8 my-12 text-xs">
          <div className="bg-neutral-950 p-4 border border-neutral-800">
            <span className="text-brutal-lime font-bold block mb-1">01. TOKYO ATELIER</span>
            <span className="text-neutral-400 block">Shibuya City, Sakuragaokacho 26-1</span>
            <span className="text-[10px] text-neutral-600 block mt-1">35.6580° N, 139.7016° E</span>
          </div>

          <div className="bg-neutral-950 p-4 border border-neutral-800">
            <span className="text-brutal-orange font-bold block mb-1">02. NEW YORK LAB</span>
            <span className="text-neutral-400 block">SoHo, 520 Broadway Floor 8</span>
            <span className="text-[10px] text-neutral-600 block mt-1">40.7223° N, 73.9987° W</span>
          </div>

          <div className="bg-neutral-950 p-4 border border-neutral-800">
            <span className="text-brutal-blue font-bold block mb-1">03. BERLIN KABINETT</span>
            <span className="text-neutral-400 block">Kreuzberg, Paul-Lincke-Ufer 44A</span>
            <span className="text-[10px] text-neutral-600 block mt-1">52.4937° N, 13.4243° E</span>
          </div>
        </div>

        {/* Bottom Legal & Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 pt-4">
          <div className="flex items-center gap-4">
            <span>© 2026 STUDIO MONOLITH INC.</span>
            <span>ALL RIGHTS RESERVED.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-white hover:text-brutal-lime uppercase font-bold p-2 border border-neutral-800 hover:border-brutal-lime transition-all"
          >
            <span>ELEVATE TO SUMMIT [TOP]</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
