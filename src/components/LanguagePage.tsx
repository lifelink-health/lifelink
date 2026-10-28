/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { LanguageCode } from '../types/lifelink';
import { Globe, Check, AlertCircle, ArrowRight } from 'lucide-react';

interface LanguagePageProps {
  currentLanguage: LanguageCode;
  onSelectLanguage: (lang: LanguageCode) => void;
}

export const LanguagePage: React.FC<LanguagePageProps> = ({
  currentLanguage,
  onSelectLanguage,
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-[#087F8C] uppercase tracking-wider">
            Linguistic Accessibility
          </span>
          <span className="text-slate-300">·</span>
          <span className="text-xs text-[#425466]">Bilingual Inclusivity</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-[#123047] tracking-tight mt-1">
          Language Selection / மொழி தேர்வு
        </h1>
        <p className="text-sm sm:text-base text-[#425466] mt-1 max-w-3xl">
          LifeLink believes life-saving information must not be restricted by language barriers. Select your preferred display language below.
        </p>
      </div>

      {/* Language Selection Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* English Card */}
        <div
          className={`p-6 rounded-2xl border transition-all cursor-pointer bg-white ${
            currentLanguage === 'en'
              ? 'border-[#087F8C] ring-2 ring-[#087F8C]/20 shadow-sm'
              : 'border-[#E1E8ED] hover:border-slate-300'
          }`}
          onClick={() => onSelectLanguage('en')}
        >
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center font-bold text-[#123047] text-lg">
                EN
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#123047]">English (Default)</h3>
                <p className="text-xs text-[#425466]">International & Standard Clinical Edition</p>
              </div>
            </div>

            {currentLanguage === 'en' && (
              <span className="w-6 h-6 rounded-full bg-[#087F8C] text-white flex items-center justify-center">
                <Check className="w-4 h-4 stroke-[3]" />
              </span>
            )}
          </div>

          <div className="mt-5 pt-4 border-t border-slate-100 space-y-2 text-xs text-[#425466]">
            <div className="flex items-center justify-between">
              <span>Translation Coverage:</span>
              <strong className="text-[#23845B]">100% Complete</strong>
            </div>
            <div className="flex items-center justify-between">
              <span>All 5 First-Aid Modules:</span>
              <strong className="text-[#23845B]">Verified</strong>
            </div>
            <div className="flex items-center justify-between">
              <span>Emergency Checklists:</span>
              <strong className="text-[#23845B]">Verified</strong>
            </div>
          </div>

          <button
            onClick={() => onSelectLanguage('en')}
            className={`mt-6 w-full py-2.5 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
              currentLanguage === 'en'
                ? 'bg-[#087F8C] text-white'
                : 'bg-slate-100 text-[#123047] hover:bg-slate-200'
            }`}
          >
            {currentLanguage === 'en' ? 'Currently Active' : 'Switch to English'}
          </button>
        </div>

        {/* Tamil Card */}
        <div
          className={`p-6 rounded-2xl border transition-all cursor-pointer bg-white ${
            currentLanguage === 'ta'
              ? 'border-[#087F8C] ring-2 ring-[#087F8C]/20 shadow-sm'
              : 'border-[#E1E8ED] hover:border-slate-300'
          }`}
          onClick={() => onSelectLanguage('ta')}
        >
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-teal-50 text-[#087F8C] flex items-center justify-center font-bold text-lg">
                த
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#123047]">தமிழ் (Tamil)</h3>
                <p className="text-xs text-[#425466]">South Asian Vernacular Edition</p>
              </div>
            </div>

            {currentLanguage === 'ta' && (
              <span className="w-6 h-6 rounded-full bg-[#087F8C] text-white flex items-center justify-center">
                <Check className="w-4 h-4 stroke-[3]" />
              </span>
            )}
          </div>

          <div className="mt-5 pt-4 border-t border-slate-100 space-y-2 text-xs text-[#425466]">
            <div className="flex items-center justify-between">
              <span>Translation Coverage:</span>
              <strong className="text-[#087F8C]">Core Topics & Navigation Translated</strong>
            </div>
            <div className="flex items-center justify-between">
              <span>முதலுதவி தலைப்புகள்:</span>
              <strong className="text-[#23845B]">முழுமையாக மொழிபெயர்க்கப்பட்டது</strong>
            </div>
            <div className="flex items-center justify-between">
              <span>அவசர எண்கள் & தொடர்புகள்:</span>
              <strong className="text-[#23845B]">சரிபார்க்கப்பட்டது</strong>
            </div>
          </div>

          <button
            onClick={() => onSelectLanguage('ta')}
            className={`mt-6 w-full py-2.5 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
              currentLanguage === 'ta'
                ? 'bg-[#087F8C] text-white'
                : 'bg-slate-100 text-[#123047] hover:bg-slate-200'
            }`}
          >
            {currentLanguage === 'ta' ? 'தற்போது இயங்குகிறது (Active)' : 'தமிழில் படிக்க (Switch to Tamil)'}
          </button>
        </div>
      </div>

      {/* Honest Translation Transparency Statement per instructions */}
      <div className="bg-white rounded-2xl border border-[#E1E8ED] p-6 shadow-xs space-y-3">
        <h3 className="text-sm font-bold text-[#123047] flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-[#087F8C]" />
          <span>Translation Transparency & Integrity Policy</span>
        </h3>
        <p className="text-xs text-[#425466] leading-relaxed">
          In strict compliance with LifeLink&apos;s science exhibition standards, untranslated content is honestly flagged rather than simulated with auto-generated gibberish. Core navigation, emergency numbers, and key first-aid summaries are manually translated into standard Tamil. Technical reference links and secondary disaster protocols currently remain in English with full Tamil localization scheduled for Phase 2.
        </p>
      </div>
    </div>
  );
};
