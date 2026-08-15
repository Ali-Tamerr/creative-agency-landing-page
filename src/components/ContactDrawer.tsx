'use client';

import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, Copy, Sparkles, Terminal, ArrowUpRight } from 'lucide-react';

interface ContactProps {
  isOpen: boolean;
  onClose: () => void;
  playBeep: (freq?: number, type?: OscillatorType) => void;
  prefilledScope: {
    services: string[];
    addons: string[];
    timeline: string;
    total: number;
  } | null;
}

export default function ContactDrawer({
  isOpen,
  onClose,
  playBeep,
  prefilledScope,
}: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '$50,000 – $100,000',
    timeline: 'Q3 2025',
    message: '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (prefilledScope) {
      setFormData((prev) => ({
        ...prev,
        budget: `$${prefilledScope.total.toLocaleString()} USD (Estimated)`,
        timeline: prefilledScope.timeline,
        message: `Project Scope Configured via Estimator:\n- Primary: ${prefilledScope.services.join(', ')}\n- Enhancements: ${prefilledScope.addons.join(', ')}\n- Est. Investment: $${prefilledScope.total.toLocaleString()} USD`,
      }));
    }
  }, [prefilledScope]);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    playBeep(600, 'sine');
    navigator.clipboard.writeText('hello@studiomonolith.digital');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    playBeep(750, 'square');
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      playBeep(880, 'sine');
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-[120] flex justify-end bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      {/* Drawer Panel */}
      <div className="w-full max-w-2xl bg-neutral-950 border-l-4 border-white h-full overflow-y-auto p-6 sm:p-10 font-mono flex flex-col justify-between shadow-brutal-white">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between border-b-2 border-neutral-800 pb-4 mb-8">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-brutal-lime" />
              <span className="text-xs font-bold text-white uppercase tracking-widest">
                // INITIATION TERMINAL [COMMISSION]
              </span>
            </div>

            <button
              onClick={() => {
                playBeep(320, 'sine');
                onClose();
              }}
              className="p-2 border-2 border-neutral-700 bg-neutral-900 text-white hover:bg-brutal-lime hover:text-black hover:border-black transition-all shadow-brutal-sm"
              title="Close Drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Title */}
          <div className="mb-8">
            <h2 className="font-syne font-extrabold text-3xl sm:text-4xl lg:text-5xl uppercase text-white tracking-tight">
              COMMISSION A <span className="text-brutal-lime">MONOLITH</span>.
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 mt-2 leading-relaxed">
              We accept a limited roster of 4 commissions per quarter. Tell us about your vision, technical constraints, and launch targets.
            </p>
          </div>

          {/* Quick Direct Email Pill */}
          <div className="flex items-center justify-between bg-neutral-900 border-2 border-neutral-800 p-3 mb-8 text-xs">
            <span className="text-neutral-400">DIRECT DISPATCH:</span>
            <button
              onClick={handleCopyEmail}
              className="text-white hover:text-brutal-lime font-bold flex items-center gap-1.5 transition-colors"
            >
              <span>hello@studiomonolith.digital</span>
              <Copy className="w-3.5 h-3.5" />
            </button>
           
          </div>

          {/* Form */}
          {isSubmitted ? (
            <div className="border-3 border-brutal-lime bg-neutral-900 p-8 text-center space-y-4 shadow-brutal-lime animate-in zoom-in-95 duration-200">
              <div className="w-12 h-12 bg-brutal-lime text-black mx-auto flex items-center justify-center border-2 border-black">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="font-syne font-extrabold text-2xl text-white uppercase">
                DISPATCH RECEIVED.
              </h3>
              <p className="text-xs text-neutral-300 leading-relaxed max-w-md mx-auto">
                Our creative directors will inspect your project parameters and respond with a technical architecture brief within 12 business hours.
              </p>
              <div className="text-xs text-neutral-500 font-mono pt-4 border-t border-neutral-800">
                DISPATCH ID: #MONO-{(Math.random() * 90000 + 10000).toFixed(0)}
              </div>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  onClose();
                }}
                className="btn-brutal-lime text-xs mt-4 mx-auto"
              >
                RETURN TO ARCHIVE
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-neutral-400 font-bold block uppercase mb-1.5">
                    YOUR NAME *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Akira Toriyama"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-black border-2 border-neutral-700 focus:border-brutal-lime text-white p-3 text-xs outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs text-neutral-400 font-bold block uppercase mb-1.5">
                    CORPORATE EMAIL *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. founder@hyperobject.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-black border-2 border-neutral-700 focus:border-brutal-lime text-white p-3 text-xs outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Organization */}
              <div>
                <label className="text-xs text-neutral-400 font-bold block uppercase mb-1.5">
                  COMPANY / BRAND / STUDIO
                </label>
                <input
                  type="text"
                  placeholder="e.g. Hyperobject Labs Inc."
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full bg-black border-2 border-neutral-700 focus:border-brutal-lime text-white p-3 text-xs outline-none transition-colors"
                />
              </div>

              {/* Budget Range */}
              <div>
                <label className="text-xs text-neutral-400 font-bold block uppercase mb-1.5">
                  CAPITAL ALLOCATION (USD)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                  {['$25,000 – $50,000', '$50,000 – $100,000', '$100,000+'].map((tier) => (
                    <button
                      key={tier}
                      type="button"
                      onClick={() => {
                        playBeep(420, 'triangle');
                        setFormData({ ...formData, budget: tier });
                      }}
                      className={`p-2.5 text-center font-bold border transition-all ${
                        formData.budget === tier
                          ? 'bg-brutal-lime text-black border-black shadow-brutal-sm'
                          : 'bg-black text-neutral-400 border-neutral-800 hover:text-white'
                      }`}
                    >
                      {tier}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="text-xs text-neutral-400 font-bold block uppercase mb-1.5">
                  PROJECT SPECIFICATION & VISION *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Describe the aesthetic direction, required deliverables, and key objectives..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-black border-2 border-neutral-700 focus:border-brutal-lime text-white p-3 text-xs outline-none transition-colors leading-relaxed"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-brutal-lime text-sm sm:text-base py-3.5"
              >
                {isSubmitting ? (
                  <span>TRANSMITTING TELEMETRY...</span>
                ) : (
                  <>
                    <span>SUBMIT COMMISSION BRIEF</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        {/* Bottom Drawer Footer */}
        <div className="pt-8 border-t border-neutral-800 text-[11px] text-neutral-500 flex justify-between items-center mt-6">
          <span>ENCRYPTION: 256-BIT NATIVE</span>
          <span>STUDIO MONOLITH © 2026</span>
        </div>
      </div>
    </div>
  );
}
