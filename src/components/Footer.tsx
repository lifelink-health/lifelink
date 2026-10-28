/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { PageId, LanguageCode } from '../types/lifelink';
import { LIFELINK_UI_TRANSLATIONS } from '../data/lifelinkData';
import { HeartPulse, PhoneCall, ShieldAlert, Globe } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  language: LanguageCode;
  onToggleLanguage: (lang: LanguageCode) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  language,
  onToggleLanguage,
}) => {
  const t = LIFELINK_UI_TRANSLATIONS[language];

  return (
    <footer className="bg-white border-t border-[#E1E8ED] pt-12 pb-8 text-xs text-[#425466]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Brand & Tagline Column */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#087F8C] flex items-center justify-center text-white">
                <HeartPulse className="w-5 h-5" />
              </div>
              <span className="text-xl font-extrabold text-[#123047] tracking-tight">
                LifeLink
              </span>
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#E8F7F6] text-[#087F8C]">
                SCIENCE EXHIBITION
              </span>
            </div>

            <p className="text-xs font-semibold text-[#087F8C]">
              {t.tagline}
            </p>

            <p className="text-xs text-[#425466] leading-relaxed max-w-sm">
              An educational website prototype engineered to make reliable first-aid and emergency preparedness information easier to find and easier to understand.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-4 space-y-2.5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#123047] block">
              Educational Sections
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <button
                onClick={() => onNavigate('home')}
                className="text-left text-[#425466] hover:text-[#087F8C] transition-colors cursor-pointer"
              >
                {t.nav.home}
              </button>
              <button
                onClick={() => onNavigate('first-aid')}
                className="text-left text-[#425466] hover:text-[#087F8C] transition-colors cursor-pointer"
              >
                {t.nav.firstAid}
              </button>
              <button
                onClick={() => onNavigate('emergency-prep')}
                className="text-left text-[#425466] hover:text-[#087F8C] transition-colors cursor-pointer"
              >
                {t.nav.emergencyPrep}
              </button>
              <button
                onClick={() => onNavigate('health-awareness')}
                className="text-left text-[#425466] hover:text-[#087F8C] transition-colors cursor-pointer"
              >
                {t.nav.healthAwareness}
              </button>
              <button
                onClick={() => onNavigate('trusted-resources')}
                className="text-left text-[#425466] hover:text-[#087F8C] transition-colors cursor-pointer"
              >
                {t.nav.trustedResources}
              </button>
              <button
                onClick={() => onNavigate('about')}
                className="text-left text-[#425466] hover:text-[#087F8C] transition-colors cursor-pointer"
              >
                {t.nav.about}
              </button>
            </div>
          </div>

          {/* Emergency Dispatch Column */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#C62828] block">
              Acute Crisis Numbers
            </span>
            <div className="p-3 bg-[#FFEBEE] rounded-xl border border-red-200 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-[#123047]">Unified Emergency:</span>
                <a href="tel:112" className="font-extrabold text-[#C62828] hover:underline">112</a>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-[#123047]">Ambulance (India):</span>
                <a href="tel:108" className="font-extrabold text-[#C62828] hover:underline">108</a>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-[#123047]">US / Canada EMS:</span>
                <a href="tel:911" className="font-extrabold text-[#C62828] hover:underline">911</a>
              </div>
            </div>
          </div>
        </div>

        {/* Safety Disclaimer required by brief */}
        <div className="pt-6 border-t border-[#E1E8ED] space-y-3">
          <div className="p-4 rounded-xl bg-slate-50 border border-[#E1E8ED] flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-[#C62828] shrink-0 mt-0.5" />
            <div className="text-[11px] text-[#425466] leading-relaxed">
              <strong className="text-[#123047] font-bold">
                {t.disclaimer.title}:{' '}
              </strong>
              {t.disclaimer.text}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500 pt-2">
            <span>
              LifeLink © 2026 · School Science Exhibition Prototype · All Rights Reserved
            </span>
            <button
              onClick={() => onToggleLanguage(language === 'en' ? 'ta' : 'en')}
              className="flex items-center gap-1.5 text-[#087F8C] hover:underline cursor-pointer font-bold"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{language === 'en' ? 'தமிழ் பதிப்பு (Tamil Version)' : 'English Edition'}</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
