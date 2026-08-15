'use client';

import React, { useState, useCallback, useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import HorizontalShowcase from '../components/HorizontalShowcase';
import OverlappingCollage from '../components/OverlappingCollage';
import ServicesGrid from '../components/ServicesGrid';
import InteractiveEstimator from '../components/InteractiveEstimator';
import MetricsAndManifesto from '../components/MetricsAndManifesto';
import ProjectModal from '../components/ProjectModal';
import ContactDrawer from '../components/ContactDrawer';
import Footer from '../components/Footer';
import CustomCursor from '../components/CustomCursor';
import { Project } from '../types';

export default function Home() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [contactOpen, setContactOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [prefilledScope, setPrefilledScope] = useState<{
    services: string[];
    addons: string[];
    timeline: string;
    total: number;
  } | null>(null);

  // Web Audio API synthesizer for instant tactile audio feedback
  const playBeep = useCallback(
    (freq = 440, type: OscillatorType = 'sine') => {
      if (!soundEnabled) return;
      try {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        if (!AudioCtx) return;
        const ctx = new AudioCtx();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = type;
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        gain.gain.setValueAtTime(0.04, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.12);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start();
        osc.stop(ctx.currentTime + 0.12);
      } catch {
        // Ignore audio restrictions
      }
    },
    [soundEnabled]
  );

  const handleOpenContact = () => {
    setContactOpen(true);
  };

  const handleSelectProject = (project: Project) => {
    setActiveProject(project);
  };

  const handleSendEstimateToPitch = (data: {
    services: string[];
    addons: string[];
    timeline: string;
    total: number;
  }) => {
    setPrefilledScope(data);
    setContactOpen(true);
  };

  const handleOpenEstimatorFromService = (serviceId?: string) => {
    const el = document.getElementById('estimator');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-brutal-black text-brutal-white font-sans overflow-x-hidden relative">
      {/* Brutalist Custom Cursor */}
      <CustomCursor />

      {/* Sticky Brutalist Navigation */}
      <Navbar
        onOpenContact={handleOpenContact}
        soundEnabled={soundEnabled}
        setSoundEnabled={setSoundEnabled}
        playBeep={playBeep}
      />

      {/* Hero Section with Colossal Typography & Interactive HUD */}
      <HeroSection
        playBeep={playBeep}
        onOpenContact={handleOpenContact}
      />

      {/* SIGNATURE FEATURE: Horizontal Scroll Showcase */}
      <HorizontalShowcase
        onSelectProject={handleSelectProject}
        playBeep={playBeep}
      />

      {/* Brutalist Experiments: Overlapping Collages & Wireframe HUD */}
      <OverlappingCollage
        playBeep={playBeep}
        onOpenContact={handleOpenContact}
      />

      {/* Agency Capabilities & Disciplines */}
      <ServicesGrid
        playBeep={playBeep}
        onOpenEstimator={handleOpenEstimatorFromService}
      />

      {/* Interactive Scope & Investment Estimator */}
      <InteractiveEstimator
        playBeep={playBeep}
        onSendEstimateToPitch={handleSendEstimateToPitch}
      />

      {/* Verified Metrics, Hard Numbers & Testimonials */}
      <MetricsAndManifesto playBeep={playBeep} />

      {/* Massive Brand Footer & Archival Dispatch */}
      <Footer
        playBeep={playBeep}
        onOpenContact={handleOpenContact}
      />

      {/* Case Study Deep-Dive Inspection Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
        playBeep={playBeep}
      />

      {/* Interactive Contact / Commission Terminal Drawer */}
      <ContactDrawer
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
        playBeep={playBeep}
        prefilledScope={prefilledScope}
      />
    </main>
  );
}
