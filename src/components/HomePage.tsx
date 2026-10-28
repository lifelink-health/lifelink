/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { PageId, LanguageCode } from '../types/lifelink';
import { LIFELINK_UI_TRANSLATIONS, FIRST_AID_TOPICS } from '../data/lifelinkData';
import {
  HeartPulse,
  ShieldCheck,
  Activity,
  ArrowRight,
  Search,
  Globe,
  Sparkles,
  PhoneCall,
  Bandage,
  Flame,
  Droplets,
  AlertTriangle,
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenTopic: (topicId: string) => void;
  language: LanguageCode;
  onToggleLanguage: (lang: LanguageCode) => void;
  onOpenSearch: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenTopic,
  language,
  onToggleLanguage,
  onOpenSearch,
}) => {
  const t = LIFELINK_UI_TRANSLATIONS[language];

  return (
    <div className="space-y-12 pb-12">
      {/* Welcome Hero Section */}
      <section className="bg-white border-b border-[#E1E8ED] py-12 sm:py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-[#E8F7F6]/60 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            {/* Tagline Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F7F6] text-[#087F8C] text-xs font-bold uppercase tracking-wider mb-5 border border-[#087F8C]/20">
              <Sparkles className="w-3.5 h-3.5 text-[#087F8C]" />
              <span>{t.tagline}</span>
            </div>

            {/* Main Heading specified by brief */}
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#123047] tracking-tight leading-tight">
              {t.hero.headline}
            </h1>

            {/* Supporting text specified by brief */}
            <p className="mt-4 text-base sm:text-xl text-[#425466] leading-relaxed">
              {t.hero.subheadline}
            </p>

            {/* Interactive Search Box */}
            <div className="mt-7 max-w-xl">
              <button
                onClick={onOpenSearch}
                className="w-full flex items-center justify-between p-3.5 sm:p-4 rounded-xl border border-[#D8E2EA] bg-white hover:border-[#087F8C] shadow-xs text-left text-sm text-[#425466] cursor-pointer transition-all"
              >
                <div className="flex items-center gap-3">
                  <Search className="w-5 h-5 text-[#087F8C]" />
                  <span>{t.hero.searchPlaceholder}</span>
                </div>
                <span className="hidden sm:inline text-xs font-bold px-2 py-1 bg-slate-100 rounded text-slate-600">
                  Search
                </span>
              </button>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate('first-aid')}
                className="px-6 py-3.5 rounded-xl bg-[#087F8C] hover:bg-[#066772] text-white font-bold text-sm flex items-center gap-2 shadow-xs transition-all active:scale-98 cursor-pointer"
              >
                <span>{t.hero.btnExplore}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('about')}
                className="px-6 py-3.5 rounded-xl bg-[#E8F7F6] hover:bg-[#D4EFEB] text-[#087F8C] border border-[#087F8C]/40 font-bold text-sm transition-all active:scale-98 cursor-pointer"
              >
                <span>{t.hero.btnLearn}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Immediate Emergency Assistance Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FFEBEE] border-2 border-[#C62828] rounded-2xl p-5 sm:p-6 shadow-xs flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#C62828] text-white flex items-center justify-center shrink-0 shadow-md">
              <PhoneCall className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-[#C62828] block">
                {t.emergencyBanner.title}
              </span>
              <p className="text-sm font-semibold text-[#123047] mt-0.5">
                {t.emergencyBanner.desc}
              </p>
              <p className="text-xs text-[#425466] mt-1">
                {t.emergencyBanner.disclaimer}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0 self-start md:self-center">
            <a
              href="tel:112"
              className="bg-[#C62828] hover:bg-[#A82222] text-white px-5 py-3 rounded-xl font-black text-sm flex items-center gap-2 transition-all shadow-md active:scale-95 cursor-pointer whitespace-nowrap"
            >
              <PhoneCall className="w-4 h-4" />
              <span>{t.emergencyBanner.actionCall}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Three Core Pillars: First-Aid, Emergency Prep, Health Awareness */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#123047] tracking-tight">
            Explore LifeLink Educational Resources
          </h2>
          <p className="text-sm text-[#425466] mt-1.5">
            Designed to bridge the healthcare literacy gap with vetted, scannable information.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: First-Aid Education */}
          <div className="bg-white rounded-2xl border border-[#E1E8ED] p-6 shadow-xs flex flex-col justify-between hover:border-[#087F8C] transition-all group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#E8F7F6] text-[#087F8C] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <HeartPulse className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#123047]">{t.cards.firstAidTitle}</h3>
              <p className="text-sm text-[#425466] mt-2 leading-relaxed">
                {t.cards.firstAidDesc}
              </p>

              {/* Quick links to top 3 first-aid topics */}
              <div className="mt-4 pt-4 border-t border-slate-100 space-y-1.5">
                <span className="text-[11px] font-bold text-[#46617A] uppercase tracking-wide block">
                  Featured First-Aid Guides:
                </span>
                {FIRST_AID_TOPICS.slice(0, 3).map((topic) => (
                  <button
                    key={topic.id}
                    onClick={() => {
                      onNavigate('first-aid');
                      onOpenTopic(topic.id);
                    }}
                    className="w-full text-left text-xs font-semibold text-[#087F8C] hover:underline flex items-center justify-between py-1 cursor-pointer"
                  >
                    <span>{language === 'ta' && topic.titleTa ? topic.titleTa : topic.title}</span>
                    <ArrowRight className="w-3 h-3 text-slate-400" />
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => onNavigate('first-aid')}
              className="mt-6 w-full py-2.5 px-4 rounded-xl bg-[#087F8C] text-white hover:bg-[#066772] text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              <span>{t.cards.firstAidBtn}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 2: Emergency Preparedness */}
          <div className="bg-white rounded-2xl border border-[#E1E8ED] p-6 shadow-xs flex flex-col justify-between hover:border-[#087F8C] transition-all group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#46617A] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#123047]">{t.cards.prepTitle}</h3>
              <p className="text-sm text-[#425466] mt-2 leading-relaxed">
                {t.cards.prepDesc}
              </p>

              <div className="mt-4 pt-4 border-t border-slate-100 space-y-1 text-xs text-[#425466]">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#087F8C]" />
                  <span>First-Aid Kit Supply Checklist</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#087F8C]" />
                  <span>Emergency Contacts Organizer</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#087F8C]" />
                  <span>Natural Disaster Action Guides</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => onNavigate('emergency-prep')}
              className="mt-6 w-full py-2.5 px-4 rounded-xl bg-[#123047] text-white hover:bg-[#087F8C] text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              <span>{t.cards.prepBtn}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 3: Health Awareness */}
          <div className="bg-white rounded-2xl border border-[#E1E8ED] p-6 shadow-xs flex flex-col justify-between hover:border-[#087F8C] transition-all group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#23845B] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#123047]">{t.cards.healthTitle}</h3>
              <p className="text-sm text-[#425466] mt-2 leading-relaxed">
                {t.cards.healthDesc}
              </p>

              <div className="mt-4 pt-4 border-t border-slate-100 space-y-1 text-xs text-[#425466]">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#23845B]" />
                  <span>WHO 20-Second Handwashing Technique</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#23845B]" />
                  <span>Hydration & Electrolyte Science</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#23845B]" />
                  <span>Ergonomics & Home Hazard Prevention</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => onNavigate('health-awareness')}
              className="mt-6 w-full py-2.5 px-4 rounded-xl bg-[#23845B] text-white hover:bg-[#1b6a48] text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              <span>{t.cards.healthBtn}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* Language Support Section specified on Home page */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F7FAFC] border border-[#E1E8ED] rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white border border-[#E1E8ED] flex items-center justify-center text-[#087F8C]">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#123047]">
                Language Options / மொழிகள்: English & தமிழ்
              </h4>
              <p className="text-xs text-[#425466]">
                LifeLink supports English and Tamil so students and communities can read life-saving guides in their native language.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => onToggleLanguage('en')}
              className={`px-4 py-2 rounded-lg text-xs font-bold cursor-pointer transition-colors ${
                language === 'en'
                  ? 'bg-[#087F8C] text-white shadow-xs'
                  : 'bg-white text-[#425466] border border-[#E1E8ED] hover:bg-slate-50'
              }`}
            >
              English
            </button>
            <button
              onClick={() => onToggleLanguage('ta')}
              className={`px-4 py-2 rounded-lg text-xs font-bold cursor-pointer transition-colors ${
                language === 'ta'
                  ? 'bg-[#087F8C] text-white shadow-xs'
                  : 'bg-white text-[#425466] border border-[#E1E8ED] hover:bg-slate-50'
              }`}
            >
              தமிழ் (Tamil)
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
