'use client';

import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Sun, Moon, ArrowUpRight, Menu, X, Terminal, Radio } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
  soundEnabled: boolean;
  setSoundEnabled: (val: boolean) => void;
  playBeep: (freq?: number, type?: OscillatorType) => void;
}

export default function Navbar({
  onOpenContact,
  soundEnabled,
  setSoundEnabled,
  playBeep,
}: NavbarProps) {
  const [timeTyo, setTimeTyo] = useState('');
  const [timeLdn, setTimeLdn] = useState('');
  const [timeNyc, setTimeNyc] = useState('');
  const [isLightMode, setIsLightMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const updateTimes = () => {
      const now = new Date();
      setTimeTyo(now.toLocaleTimeString('en-US', { timeZone: 'Asia/Tokyo', hour12: false, hour: '2-digit', minute: '2-digit' }));
      setTimeLdn(now.toLocaleTimeString('en-US', { timeZone: 'Europe/London', hour12: false, hour: '2-digit', minute: '2-digit' }));
      setTimeNyc(now.toLocaleTimeString('en-US', { timeZone: 'America/New_York', hour12: false, hour: '2-digit', minute: '2-digit' }));
    };
    updateTimes();
    const interval = setInterval(updateTimes, 1000);
    return () => clearInterval(interval);
  }, []);

  const toggleTheme = () => {
    playBeep(440, 'square');
    if (document.documentElement.classList.contains('light')) {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
      setIsLightMode(false);
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      setIsLightMode(true);
    }
  };

  const navLinks = [
    { label: 'WORK', href: '#showcase', code: '01' },
    { label: 'EXPERIMENTS', href: '#experiments', code: '02' },
    { label: 'CAPABILITIES', href: '#services', code: '03' },
    { label: 'ESTIMATOR', href: '#estimator', code: '04' },
    { label: 'MANIFESTO', href: '#manifesto', code: '05' },
  ];

  const handleNavClick = (href: string) => {
    playBeep(330, 'triangle');
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-brutal-black/95 dark:bg-black/95 backdrop-blur-md border-b-2 border-neutral-800 text-brutal-white font-mono">
      {/* Top Telemetry Bar */}
      <div className="hidden lg:flex items-center justify-between border-b border-neutral-800/80 px-4 py-1.5 text-[11px] uppercase tracking-wider text-neutral-400 bg-neutral-950/60">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2 text-brutal-lime font-bold">
            <Radio className="w-3.5 h-3.5 text-brutal-lime" />
            LIVE TELEMETRY // MONOLITH-ENGINE V4.8
          </span>
          <span className="text-neutral-500">|</span>
          <span className="text-neutral-300">STUDIO COORD: 35.6762° N, 139.6503° E</span>
        </div>

        {/* Global Timezones */}
        <div className="flex items-center gap-5 font-mono">
          <div className="flex items-center gap-1.5">
            <span className="text-neutral-500">TYO:</span>
            <span className="text-white font-bold">{timeTyo || '--:--'}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-neutral-500">LDN:</span>
            <span className="text-white font-bold">{timeLdn || '--:--'}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-neutral-500">NYC:</span>
            <span className="text-white font-bold">{timeNyc || '--:--'}</span>
          </div>
          <span className="text-neutral-500">|</span>
          <div className="flex items-center gap-1.5 bg-brutal-lime/10 px-2 py-0.5 border border-brutal-lime/40 text-brutal-lime text-[10px]">
            COMMISSION Q3/Q4 OPEN
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
        {/* Brand Logo & Identifier */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            playBeep(600, 'square');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="group flex items-center gap-3 cursor-pointer"
        >
          <div className="w-8 h-8 bg-brutal-lime text-black font-syne font-extrabold flex items-center justify-center text-lg border-2 border-black group-hover:rotate-12 transition-transform shadow-brutal-sm">
            M
          </div>
          <div className="flex flex-col">
            <span className="font-syne font-extrabold text-lg sm:text-xl tracking-tighter text-white group-hover:text-brutal-lime transition-colors">
              STUDIO MONOLITH<span className="text-brutal-lime">.</span>
            </span>
            <span className="text-[10px] text-neutral-400 font-mono tracking-widest hidden sm:inline-block">
              RADICAL DIGITAL ARCHITECTURE
            </span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((item) => (
            <button
              key={item.code}
              onClick={() => handleNavClick(item.href)}
              className="group relative px-3 py-1.5 text-xs lg:text-sm font-mono uppercase tracking-wider text-neutral-300 hover:text-black hover:bg-brutal-lime transition-all border border-transparent hover:border-black font-semibold"
            >
              <span className="text-[10px] text-neutral-500 group-hover:text-black mr-1.5">
                [{item.code}]
              </span>
              {item.label}
            </button>
          ))}
        </nav>

        {/* Action Controls & Inquiry Trigger */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Sound FX Toggle */}
          <button
            onClick={() => {
              const next = !soundEnabled;
              setSoundEnabled(next);
              if (next) playBeep(520, 'sine');
            }}
            title={soundEnabled ? 'Mute Audio FX' : 'Enable Audio FX'}
            className={`p-2 border-2 border-neutral-700 text-xs font-mono transition-all ${
              soundEnabled
                ? 'bg-brutal-lime text-black border-black shadow-brutal-sm'
                : 'bg-neutral-900 text-neutral-400 hover:text-white'
            }`}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            title={isLightMode ? 'Switch to Dark Mode' : 'Switch to Brutal Light'}
            className="p-2 border-2 border-neutral-700 bg-neutral-900 text-neutral-300 hover:text-white transition-all hover:border-neutral-500"
          >
            {isLightMode ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </button>

          {/* Main CTA */}
          <button
            onClick={() => {
              playBeep(650, 'square');
              onOpenContact();
            }}
            data-cursor-text="START PITCH"
            className="bg-brutal-lime text-black font-mono font-bold text-xs sm:text-sm uppercase px-4 sm:px-5 py-2 sm:py-2.5 border-2 border-black shadow-brutal-sm hover:shadow-brutal hover:translate-x-[-1px] hover:translate-y-[-1px] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all flex items-center gap-1.5"
          >
            <span>INITIATE PROJECT</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          {/* Mobile Hamburger */}
          <button
            onClick={() => {
              playBeep(400, 'triangle');
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="md:hidden p-2 border-2 border-neutral-700 bg-neutral-900 text-white"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t-2 border-neutral-800 bg-black px-6 py-6 font-mono space-y-4 animate-in slide-in-from-top-4 duration-200">
          <div className="text-[11px] text-brutal-lime font-bold uppercase tracking-widest pb-2 border-b border-neutral-800">
            // INDEX NAVIGATION
          </div>
          <div className="flex flex-col gap-3">
            {navLinks.map((item) => (
              <button
                key={item.code}
                onClick={() => handleNavClick(item.href)}
                className="flex items-center justify-between text-left py-2 px-3 border border-neutral-800 hover:border-brutal-lime hover:bg-neutral-900 text-lg font-syne font-bold text-white uppercase"
              >
                <span>
                  <span className="text-brutal-lime text-xs font-mono mr-2">[{item.code}]</span>
                  {item.label}
                </span>
                <ArrowUpRight className="w-4 h-4 text-neutral-500" />
              </button>
            ))}
          </div>
          <div className="pt-4 border-t border-neutral-800 flex items-center justify-between text-xs text-neutral-400">
            <span>TIME: {timeNyc || '12:00'} NYC</span>
            <span className="text-brutal-lime">STATUS: READY</span>
          </div>
        </div>
      )}
    </header>
  );
}
