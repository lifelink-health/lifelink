/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import {
  HeartPulse,
  Target,
  Sparkles,
  AlertTriangle,
  Lightbulb,
  CheckCircle,
  TrendingUp,
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      {/* Hero Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F7F6] text-[#087F8C] text-xs font-bold uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>School Science Exhibition Project</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#123047] tracking-tight">
          About Project LifeLink
        </h1>
        <p className="mt-3 text-base sm:text-lg text-[#425466]">
          A modern health-awareness and emergency preparedness website prototype created to demonstrate how accessible web technology can solve real-world information access barriers.
        </p>
      </div>

      {/* Central Thesis Card */}
      <div className="bg-[#123047] text-white rounded-2xl p-8 sm:p-10 text-center shadow-lg relative overflow-hidden">
        <div className="absolute -right-10 -bottom-10 w-60 h-60 bg-[#087F8C]/20 rounded-full blur-2xl" />
        <span className="text-xs font-bold uppercase tracking-widest text-[#79D4E2] block mb-2">
          Central Project Thesis
        </span>
        <blockquote className="text-2xl sm:text-3xl font-extrabold max-w-2xl mx-auto leading-tight">
          &ldquo;Reliable health education should be easier to find and easier to understand.&rdquo;
        </blockquote>
        <p className="text-xs sm:text-sm text-slate-300 mt-4 max-w-xl mx-auto">
          LifeLink tests the hypothesis that simplifying medical presentation into clean, scannable, bilingual modules significantly improves bystander comprehension during everyday emergencies.
        </p>
      </div>

      {/* Problem & Solution Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* The Problem */}
        <div className="bg-white rounded-2xl border border-[#E1E8ED] p-7 shadow-xs space-y-4">
          <div className="w-12 h-12 rounded-xl bg-red-50 text-[#C62828] flex items-center justify-center font-black">
            <AlertTriangle className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold text-[#123047]">
            1. The Problem Being Addressed
          </h2>
          <p className="text-xs sm:text-sm text-[#425466] leading-relaxed">
            During acute medical emergencies and routine health questions, everyday citizens face severe information bottlenecks:
          </p>
          <ul className="space-y-2.5 text-xs text-[#425466]">
            <li className="flex items-start gap-2">
              <span className="text-[#C62828] font-bold mt-0.5">•</span>
              <span><strong>Cluttered, ad-driven search results:</strong> Commercial health portals bury urgent first-aid advice behind popups, cookie consent barriers, and promotional sponsors.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#C62828] font-bold mt-0.5">•</span>
              <span><strong>Cognitive overload & jargon:</strong> Dense clinical vocabulary overwhelms panicked students and parents when immediate action is vital.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#C62828] font-bold mt-0.5">•</span>
              <span><strong>Persistent dangerous myths:</strong> Pervasive misconceptions (putting butter or toothpaste on burns, tilting head backward for nosebleeds) cause secondary tissue damage.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#C62828] font-bold mt-0.5">•</span>
              <span><strong>Language exclusion:</strong> Most vetted health platforms operate exclusively in English, leaving vernacular speakers without immediate guidance.</span>
            </li>
          </ul>
        </div>

        {/* The Proposed Solution */}
        <div className="bg-white rounded-2xl border border-[#E1E8ED] p-7 shadow-xs space-y-4">
          <div className="w-12 h-12 rounded-xl bg-teal-50 text-[#087F8C] flex items-center justify-center font-black">
            <Lightbulb className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold text-[#123047]">
            2. The Proposed Solution (LifeLink)
          </h2>
          <p className="text-xs sm:text-sm text-[#425466] leading-relaxed">
            LifeLink delivers an ultra-clean, mobile-first educational kiosk built on three foundational pillars:
          </p>
          <ul className="space-y-2.5 text-xs text-[#425466]">
            <li className="flex items-start gap-2">
              <span className="text-[#087F8C] font-bold mt-0.5">•</span>
              <span><strong>Zero-Friction Design:</strong> Zero login walls, zero tracking telemetry, instant search, and high-contrast typography accessible in seconds.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#087F8C] font-bold mt-0.5">•</span>
              <span><strong>Scannable Step-by-Step Architecture:</strong> Numbered action points with explicit &ldquo;What NOT to do&rdquo; warnings to actively dispel harmful folklore.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#087F8C] font-bold mt-0.5">•</span>
              <span><strong>Bilingual Accessibility:</strong> Native English and Tamil support with clear demarcation of translated vs untranslated sections.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#087F8C] font-bold mt-0.5">•</span>
              <span><strong>Direct 1-Touch Emergency Connect:</strong> Instant phone links to official national emergency numbers (112, 108, 911).</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Objectives & Expected Benefits */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl border border-[#E1E8ED] p-7 shadow-xs space-y-4">
          <div className="flex items-center gap-3">
            <Target className="w-6 h-6 text-[#087F8C]" />
            <h3 className="text-lg font-bold text-[#123047]">Project Objectives</h3>
          </div>
          <ul className="space-y-2 text-xs text-[#425466]">
            <li>1. Demonstrate how responsive frontend web technologies can bridge the public healthcare literacy divide.</li>
            <li>2. Equip school students and teachers with validated basic first-aid protocols.</li>
            <li>3. Promote family emergency supply preparedness and organized contact sheets.</li>
            <li>4. Champion honest digital ethics by banning fake medical algorithms and false endorsements.</li>
          </ul>
        </div>

        <div className="bg-white rounded-2xl border border-[#E1E8ED] p-7 shadow-xs space-y-4">
          <div className="flex items-center gap-3">
            <CheckCircle className="w-6 h-6 text-[#23845B]" />
            <h3 className="text-lg font-bold text-[#123047]">Expected Community Benefits</h3>
          </div>
          <ul className="space-y-2 text-xs text-[#425466]">
            <li>1. <strong>Reduced Bystander Hesitation:</strong> Clear protocols empower witnesses to provide safe first aid until EMS arrives.</li>
            <li>2. <strong>Eradication of Harmful Practices:</strong> Debunking folk remedies prevents burn and wound infections.</li>
            <li>3. <strong>Improved Disaster Resilience:</strong> Household preparation for floods, cyclones, and earthquakes.</li>
            <li>4. <strong>Equitable Information Access:</strong> Non-English speakers receive life-saving guidance in their mother tongue.</li>
          </ul>
        </div>
      </div>

      {/* Limitations & Future Roadmap */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-slate-50 rounded-2xl border border-[#E1E8ED] p-7 space-y-3">
          <span className="text-[11px] font-bold text-[#C62828] uppercase tracking-wider block">
            Scientific Exhibition Boundaries
          </span>
          <h3 className="text-lg font-bold text-[#123047]">Project Limitations</h3>
          <p className="text-xs text-[#425466] leading-relaxed">
            LifeLink is a non-commercial educational prototype developed by students for a science fair demonstration. It does not provide telemedicine consultations, cannot diagnose symptoms, and should never be used as a substitute for professional paramedic intervention or physician care.
          </p>
        </div>

        <div className="bg-slate-50 rounded-2xl border border-[#E1E8ED] p-7 space-y-3">
          <span className="text-[11px] font-bold text-[#087F8C] uppercase tracking-wider block">
            Future Development Roadmap
          </span>
          <h3 className="text-lg font-bold text-[#123047]">Phase 2 Planned Enhancements</h3>
          <ul className="text-xs text-[#425466] space-y-1.5 list-disc list-inside">
            <li>Offline PWA Service Worker caching for zero-internet rural disaster operation.</li>
            <li>Text-to-speech audio narration for visually impaired and low-literacy users.</li>
            <li>Expanded Indian vernacular languages: Hindi, Telugu, Malayalam, and Kannada.</li>
            <li>Classroom quiz and interactive CPR metronome module integration.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
