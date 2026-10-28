/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Heart, Activity, ShieldAlert, Award, ArrowDown, Sparkles } from 'lucide-react';

interface HeroExhibitionProps {
  onSelectFeature: (featureId: string) => void;
  onOpenEmergency: () => void;
}

export const HeroExhibition: React.FC<HeroExhibitionProps> = ({
  onSelectFeature,
  onOpenEmergency,
}) => {
  return (
    <section className="relative overflow-hidden bg-white border-b border-[#E1E8ED] py-8 sm:py-12">
      {/* Subtle Clinical Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#087F8C_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F7F6] text-[#087F8C] text-xs font-bold uppercase tracking-wider mb-4 border border-[#087F8C]/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Public Health Literacy & Crisis Response Kiosk</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#123047] tracking-tight leading-tight">
            Clinical Clarity & <span className="text-[#087F8C]">Rapid Reassurance</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[#425466] leading-relaxed">
            Immediate actionable emergency protocols paired with interactive medical learning. Designed for school exhibitions, community members, and urgent crisis guidance.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenEmergency}
              className="px-5 py-3 bg-[#C62828] hover:bg-[#A82222] text-white rounded-xl font-bold text-sm flex items-center gap-2 shadow-sm transition-all cursor-pointer active:scale-98"
            >
              <ShieldAlert className="w-4 h-4" />
              <span>LAUNCH CRISIS MODE</span>
            </button>

            <button
              onClick={() => onSelectFeature('cpr')}
              className="px-5 py-3 bg-[#E8F7F6] hover:bg-[#D4EFEB] text-[#087F8C] border border-[#087F8C] rounded-xl font-bold text-sm flex items-center gap-2 transition-all cursor-pointer active:scale-98"
            >
              <Heart className="w-4 h-4" />
              <span>Practice CPR Rhythm</span>
            </button>

            <button
              onClick={() => onSelectFeature('fast')}
              className="px-5 py-3 bg-white hover:bg-slate-50 text-[#123047] border border-[#E1E8ED] rounded-xl font-bold text-sm flex items-center gap-2 transition-all cursor-pointer"
            >
              <Activity className="w-4 h-4 text-[#087F8C]" />
              <span>FAST Stroke Triage</span>
            </button>
          </div>
        </div>

        {/* 4 Feature Pillars Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-10 pt-8 border-t border-[#E1E8ED]">
          <button
            onClick={() => onSelectFeature('cpr')}
            className="p-4 rounded-xl bg-[#F7FAFC] border border-[#E1E8ED] text-left hover:border-[#087F8C] hover:bg-white transition-all cursor-pointer group"
          >
            <div className="w-9 h-9 rounded-lg bg-red-50 text-[#C62828] flex items-center justify-center mb-2.5 group-hover:scale-105 transition-transform">
              <Heart className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-sm text-[#123047]">CPR Metronome</h4>
            <p className="text-xs text-[#425466] mt-1">110 BPM audio-visual rhythm & depth guide</p>
          </button>

          <button
            onClick={() => onSelectFeature('fast')}
            className="p-4 rounded-xl bg-[#F7FAFC] border border-[#E1E8ED] text-left hover:border-[#087F8C] hover:bg-white transition-all cursor-pointer group"
          >
            <div className="w-9 h-9 rounded-lg bg-teal-50 text-[#087F8C] flex items-center justify-center mb-2.5 group-hover:scale-105 transition-transform">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-sm text-[#123047]">Stroke Triage</h4>
            <p className="text-xs text-[#425466] mt-1">FAST protocol with risk calculator</p>
          </button>

          <button
            onClick={() => onSelectFeature('vitals')}
            className="p-4 rounded-xl bg-[#F7FAFC] border border-[#E1E8ED] text-left hover:border-[#087F8C] hover:bg-white transition-all cursor-pointer group"
          >
            <div className="w-9 h-9 rounded-lg bg-blue-50 text-[#46617A] flex items-center justify-center mb-2.5 group-hover:scale-105 transition-transform">
              <Activity className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-sm text-[#123047]">Vital Signs Lab</h4>
            <p className="text-xs text-[#425466] mt-1">Interactive HR, BP, SpO2 & RR sandbox</p>
          </button>

          <button
            onClick={() => onSelectFeature('quiz')}
            className="p-4 rounded-xl bg-[#F7FAFC] border border-[#E1E8ED] text-left hover:border-[#087F8C] hover:bg-white transition-all cursor-pointer group"
          >
            <div className="w-9 h-9 rounded-lg bg-emerald-50 text-[#23845B] flex items-center justify-center mb-2.5 group-hover:scale-105 transition-transform">
              <Award className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-sm text-[#123047]">School Quiz</h4>
            <p className="text-xs text-[#425466] mt-1">4-question crisis literacy challenge</p>
          </button>
        </div>
      </div>
    </section>
  );
};
