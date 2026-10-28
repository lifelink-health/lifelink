/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { LanguageCode } from '../types/lifelink';
import { HEALTH_AWARENESS_TOPICS } from '../data/lifelinkData';
import {
  Sparkles,
  Droplets,
  Smile,
  Shield,
  CheckCircle,
  Play,
  RotateCcw,
  Info,
  Clock,
} from 'lucide-react';

interface HealthAwarenessPageProps {
  language: LanguageCode;
}

export const HealthAwarenessPage: React.FC<HealthAwarenessPageProps> = ({ language }) => {
  // Interactive 20-second handwashing timer
  const [washTimer, setWashTimer] = useState<number>(20);
  const [isWashing, setIsWashing] = useState<boolean>(false);
  const [washCompleted, setWashCompleted] = useState<boolean>(false);

  React.useEffect(() => {
    let interval: number | null = null;
    if (isWashing && washTimer > 0) {
      interval = window.setInterval(() => {
        setWashTimer((prev) => prev - 1);
      }, 1000);
    } else if (washTimer === 0 && isWashing) {
      setIsWashing(false);
      setWashCompleted(true);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isWashing, washTimer]);

  const handleStartTimer = () => {
    setWashTimer(20);
    setIsWashing(true);
    setWashCompleted(false);
  };

  const handleResetTimer = () => {
    setIsWashing(false);
    setWashTimer(20);
    setWashCompleted(false);
  };

  const getTopicIcon = (name: string) => {
    switch (name) {
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#087F8C]" />;
      case 'Droplets':
        return <Droplets className="w-6 h-6 text-blue-600" />;
      case 'Smile':
        return <Smile className="w-6 h-6 text-emerald-600" />;
      case 'Shield':
        return <Shield className="w-6 h-6 text-[#46617A]" />;
      default:
        return <CheckCircle className="w-6 h-6 text-[#23845B]" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-[#087F8C] uppercase tracking-wider">
            {language === 'ta' ? 'சுகாதார விழிப்புணர்வு' : 'Everyday Wellness & Prevention'}
          </span>
          <span className="text-slate-300">·</span>
          <span className="text-xs text-[#425466]">Evidence-Based Health Literacy</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-[#123047] tracking-tight mt-1">
          {language === 'ta' ? 'சுகாதார விழிப்புணர்வு வழிகாட்டிகள்' : 'Public Health Awareness & Daily Safety'}
        </h1>
        <p className="text-sm sm:text-base text-[#425466] mt-1 max-w-3xl">
          {language === 'ta'
            ? 'அன்றாட சுகாதாரம், சரியான நீர்ச்சத்து மற்றும் ஆரோக்கியமான பழக்கவழக்கங்கள் குறித்த அறிவியல் பூர்வமான தகவல்கள்.'
            : 'Explore practical, science-backed guidance on hygiene, hydration, sleep hygiene, ergonomics, and home accident prevention.'}
        </p>
      </div>

      {/* Strict Non-Diagnostic Medical Disclaimer Box */}
      <div className="p-4 rounded-xl bg-[#E8F7F6] border border-[#087F8C]/30 flex items-start gap-3">
        <Info className="w-5 h-5 text-[#087F8C] shrink-0 mt-0.5" />
        <p className="text-xs text-[#123047] leading-relaxed">
          <strong>Important Healthcare Boundary: </strong>
          LifeLink does not diagnose illnesses, prescribe medications, or replace the clinical consultation of licensed physicians. All recommendations here focus on universal preventive public health principles.
        </p>
      </div>

      {/* Interactive Feature: 20-Second Handwashing Practice Timer */}
      <div className="bg-white rounded-2xl border border-[#E1E8ED] p-6 sm:p-7 shadow-xs">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-[#087F8C] uppercase tracking-wider">
              Interactive Hygiene Simulator
            </span>
            <h2 className="text-xl font-bold text-[#123047]">
              WHO 20-Second Hand Hygiene Practice
            </h2>
            <p className="text-xs sm:text-sm text-[#425466] max-w-xl leading-relaxed">
              Washing with soap for at least 20 seconds thoroughly dismantles viral lipid membranes and removes bacterial spores. Practice the duration below:
            </p>
          </div>

          <div className="flex items-center gap-4 bg-[#F7FAFC] p-4 rounded-xl border border-[#E1E8ED]">
            <div className="w-16 h-16 rounded-full border-4 border-[#087F8C] flex items-center justify-center font-black text-2xl text-[#123047] tabular-nums">
              {washTimer}s
            </div>

            <div className="space-y-2">
              <button
                onClick={handleStartTimer}
                disabled={isWashing}
                className={`px-4 py-2 rounded-lg font-bold text-xs text-white flex items-center gap-1.5 transition-colors cursor-pointer ${
                  isWashing ? 'bg-slate-400 cursor-not-allowed' : 'bg-[#087F8C] hover:bg-[#066772]'
                }`}
              >
                <Play className="w-3.5 h-3.5 fill-white" />
                <span>{isWashing ? 'Washing...' : 'Start 20s Scrub'}</span>
              </button>

              <button
                onClick={handleResetTimer}
                className="block text-[11px] text-[#425466] hover:text-[#123047] underline cursor-pointer"
              >
                Reset Timer
              </button>
            </div>
          </div>
        </div>

        {washCompleted && (
          <div className="mt-4 p-3 rounded-lg bg-[#E8F5E9] border border-[#23845B] text-xs text-[#23845B] font-semibold flex items-center gap-2 animate-in fade-in">
            <CheckCircle className="w-4 h-4 shrink-0" />
            <span>20 seconds achieved! Palms, backs of hands, and finger webs are sanitized.</span>
          </div>
        )}
      </div>

      {/* 5 Educational Health Topic Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {HEALTH_AWARENESS_TOPICS.map((topic) => {
          const displayTitle = language === 'ta' && topic.titleTa ? topic.titleTa : topic.title;
          const displayTagline = language === 'ta' && topic.taglineTa ? topic.taglineTa : topic.tagline;

          return (
            <div
              key={topic.id}
              className="bg-white rounded-2xl border border-[#E1E8ED] p-6 shadow-xs flex flex-col justify-between hover:border-[#087F8C] transition-colors"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-[#F7FAFC] border border-[#E1E8ED] flex items-center justify-center mb-4">
                  {getTopicIcon(topic.iconName)}
                </div>

                <h3 className="text-lg font-bold text-[#123047]">{displayTitle}</h3>
                <p className="text-xs text-[#46617A] mt-1 italic leading-relaxed">
                  &ldquo;{displayTagline}&rdquo;
                </p>

                <div className="mt-5 space-y-3 pt-4 border-t border-slate-100">
                  {topic.keyPractices.map((practice, idx) => (
                    <div key={idx} className="space-y-0.5">
                      <strong className="text-xs font-bold text-[#123047] block">
                        • {practice.title}
                      </strong>
                      <p className="text-[11px] text-[#425466] leading-relaxed pl-3">
                        {practice.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 bg-slate-50 -mx-6 -mb-6 p-4 rounded-b-2xl">
                <span className="text-[10px] font-bold text-[#087F8C] uppercase tracking-wider block">
                  Practical Rule of Thumb:
                </span>
                <p className="text-[11px] text-[#123047] font-medium mt-0.5">
                  {topic.quickTip}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
