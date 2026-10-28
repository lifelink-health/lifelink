/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { FirstAidTopic, LanguageCode } from '../types/lifelink';
import { FIRST_AID_TOPICS } from '../data/lifelinkData';
import {
  Bandage,
  Flame,
  Droplets,
  ShieldAlert,
  HeartPulse,
  ArrowRight,
  AlertCircle,
  PhoneCall,
  Check,
  X,
  ShieldCheck,
  Info,
} from 'lucide-react';

interface FirstAidPageProps {
  initialTopicId?: string;
  language: LanguageCode;
}

export const FirstAidPage: React.FC<FirstAidPageProps> = ({
  initialTopicId,
  language,
}) => {
  const [selectedTopicId, setSelectedTopicId] = useState<string>(
    initialTopicId || FIRST_AID_TOPICS[0].id
  );

  const activeTopic =
    FIRST_AID_TOPICS.find((t) => t.id === selectedTopicId) || FIRST_AID_TOPICS[0];

  const getTopicIcon = (iconName: string) => {
    switch (iconName) {
      case 'Bandage':
        return <Bandage className="w-5 h-5 text-[#087F8C]" />;
      case 'Flame':
        return <Flame className="w-5 h-5 text-amber-600" />;
      case 'Droplets':
        return <Droplets className="w-5 h-5 text-blue-600" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-5 h-5 text-[#C62828]" />;
      case 'HeartPulse':
        return <HeartPulse className="w-5 h-5 text-[#C62828]" />;
      default:
        return <AlertCircle className="w-5 h-5 text-[#087F8C]" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Page Header */}
      <div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-[#087F8C] uppercase tracking-wider">
            {language === 'ta' ? 'முதலுதவி வழிகாட்டி' : 'Medically Reviewed First Aid'}
          </span>
          <span className="text-slate-300">·</span>
          <span className="text-xs text-[#425466]">5 Essential Guides</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-[#123047] tracking-tight mt-1">
          {language === 'ta' ? 'முதலுதவி கல்வி மற்றும் வழிகாட்டிகள்' : 'First-Aid Learning Modules'}
        </h1>
        <p className="text-sm sm:text-base text-[#425466] mt-1 max-w-3xl">
          {language === 'ta'
            ? 'அன்றாட காயங்கள் மற்றும் அவசரநிலைகளுக்கான தெளிவான, படிப்படியான மருத்துவ முதலுதவி வழிகாட்டுதல்.'
            : 'Explore clear, step-by-step instructions for common minor injuries and acute emergencies. Select a topic to view its full dedicated guide.'}
        </p>
      </div>

      {/* Prominent Educational vs Medical Care Disclaimer Box */}
      <div className="p-4 rounded-xl bg-[#E8F7F6] border border-[#087F8C]/30 flex items-start gap-3">
        <Info className="w-5 h-5 text-[#087F8C] shrink-0 mt-0.5" />
        <div className="text-xs text-[#123047] leading-relaxed">
          <strong className="font-bold">Educational Clarification: </strong>
          The information on LifeLink is provided exclusively for general education and school exhibition demonstration. It is not personal medical advice, diagnosis, or treatment. In any serious, life-threatening, or worsening situation, immediately contact your local emergency number (112 / 108 / 911) and follow professional responders&apos; directives.
        </div>
      </div>

      {/* Topic Selection Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {FIRST_AID_TOPICS.map((topic) => {
          const isSelected = topic.id === activeTopic.id;
          const displayTitle = language === 'ta' && topic.titleTa ? topic.titleTa : topic.title;

          return (
            <button
              key={topic.id}
              onClick={() => setSelectedTopicId(topic.id)}
              className={`p-3.5 sm:p-4 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                isSelected
                  ? 'bg-white border-[#087F8C] ring-2 ring-[#087F8C]/20 shadow-sm'
                  : 'bg-white border-[#E1E8ED] hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              <div>
                <div className="w-9 h-9 rounded-lg bg-slate-50 flex items-center justify-center mb-2">
                  {getTopicIcon(topic.iconName)}
                </div>
                <h3 className="font-bold text-xs sm:text-sm text-[#123047] leading-snug">
                  {displayTitle}
                </h3>
              </div>
              <span
                className={`text-[10px] font-bold uppercase tracking-wider mt-2 block ${
                  topic.severity === 'urgent'
                    ? 'text-[#C62828]'
                    : topic.severity === 'moderate'
                    ? 'text-amber-700'
                    : 'text-[#087F8C]'
                }`}
              >
                {topic.category}
              </span>
            </button>
          );
        })}
      </div>

      {/* Dedicated Information View for Selected Topic */}
      <div className="bg-white rounded-2xl border border-[#E1E8ED] p-6 sm:p-8 shadow-xs space-y-8 animate-in fade-in duration-200">
        {/* Header Banner */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#E1E8ED]">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-[#087F8C] uppercase tracking-wider">
                {activeTopic.category}
              </span>
              <span className="text-slate-300">·</span>
              <span
                className={`text-xs font-bold uppercase px-2 py-0.5 rounded-full ${
                  activeTopic.severity === 'urgent'
                    ? 'bg-[#FFEBEE] text-[#C62828]'
                    : 'bg-[#E8F7F6] text-[#087F8C]'
                }`}
              >
                {activeTopic.severity === 'urgent' ? 'High Urgency' : 'Standard First Aid'}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#123047] mt-1.5">
              {language === 'ta' && activeTopic.titleTa
                ? activeTopic.titleTa
                : activeTopic.title}
            </h2>

            <p className="text-sm text-[#425466] mt-1.5 max-w-3xl leading-relaxed">
              {language === 'ta' && activeTopic.summaryTa
                ? activeTopic.summaryTa
                : activeTopic.summary}
            </p>
          </div>

          <div className="shrink-0">
            <a
              href="tel:112"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#C62828] hover:bg-[#A82222] text-white text-xs font-bold rounded-xl shadow-xs transition-colors cursor-pointer"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Call Emergency: 112 / 911</span>
            </a>
          </div>
        </div>

        {/* Section 1: Step-by-Step "What To Do" */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#23845B]" />
            <h3 className="text-base font-extrabold text-[#123047] uppercase tracking-wide">
              {language === 'ta' ? 'செய்ய வேண்டியவை (Step-by-Step Protocol)' : 'What To Do: Step-by-Step Action'}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {activeTopic.whatToDo.map((stepItem) => (
              <div
                key={stepItem.step}
                className="p-4 rounded-xl border border-[#E1E8ED] bg-[#F7FAFC] flex items-start gap-3.5 hover:border-[#087F8C] transition-colors"
              >
                <span className="w-8 h-8 rounded-full bg-[#123047] text-white flex items-center justify-center font-extrabold text-xs shrink-0">
                  {stepItem.step}
                </span>
                <div className="space-y-1">
                  <h4 className="font-bold text-sm text-[#123047]">
                    {stepItem.title}
                  </h4>
                  <p className="text-xs text-[#425466] leading-relaxed">
                    {stepItem.instruction}
                  </p>
                  {stepItem.importantNote && (
                    <p className="text-[11px] font-semibold text-[#087F8C] pt-1 border-t border-slate-200/80">
                      Note: {stepItem.importantNote}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: "What NOT To Do" (Myth busting & Harm Prevention) */}
        <div className="p-5 rounded-xl bg-amber-50/70 border border-amber-200 space-y-3">
          <h3 className="text-xs font-bold text-amber-900 uppercase tracking-wider flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-amber-600" />
            <span>{language === 'ta' ? 'செய்யக்கூடாதவை (Crucial Hazards to Avoid)' : 'What NOT To Do: Critical Hazards to Avoid'}</span>
          </h3>

          <ul className="space-y-2 text-xs text-amber-950">
            {activeTopic.whatNotToDo.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="w-4 h-4 rounded-full bg-amber-200 text-amber-900 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                  ✕
                </span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Section 3: "When to Call Emergency Services Immediately" */}
        <div className="p-5 rounded-xl bg-[#FFEBEE] border border-[#C62828] space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-black text-[#C62828] uppercase tracking-wider flex items-center gap-2">
              <ShieldAlert className="w-4 h-4" />
              <span>When to Call Emergency Services (112 / 108 / 911)</span>
            </h3>
            <span className="text-[10px] font-bold text-[#C62828] uppercase tracking-wider bg-white px-2 py-0.5 rounded">
              Immediate Red Flags
            </span>
          </div>

          <ul className="space-y-2 text-xs text-[#123047]">
            {activeTopic.whenToCallEmergency.map((alert, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="w-4 h-4 rounded-full bg-[#C62828] text-white flex items-center justify-center text-[10px] font-black shrink-0 mt-0.5">
                  !
                </span>
                <span className="leading-relaxed font-medium">{alert}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Section 4: Medically Reviewed Trust Badge */}
        <div className="p-4 rounded-xl border border-[#E1E8ED] bg-slate-50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[#425466]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#23845B]" />
            <span>Medically vetted against AHA, WHO, and Red Cross first-aid standards.</span>
          </div>
          <span className="text-[11px] text-slate-400">
            {activeTopic.disclaimer}
          </span>
        </div>
      </div>
    </div>
  );
};
