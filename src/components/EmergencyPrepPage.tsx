/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { LanguageCode } from '../types/lifelink';
import { EMERGENCY_KIT_ITEMS, EMERGENCY_NUMBERS } from '../data/lifelinkData';
import {
  ShieldAlert,
  PhoneCall,
  CheckSquare,
  Square,
  Printer,
  CloudRain,
  Waves,
  Zap,
  Info,
  Check,
  RotateCcw,
} from 'lucide-react';

interface EmergencyPrepPageProps {
  language: LanguageCode;
}

export const EmergencyPrepPage: React.FC<EmergencyPrepPageProps> = ({ language }) => {
  // Interactive Kit Checklist State
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({
    k1: true,
    k2: true,
    k5: true,
  });

  // Emergency Contact Sheet form state
  const [contactForm, setContactForm] = useState({
    familyName: '',
    primaryPhone: '',
    familyDoctor: '',
    allergiesNotes: '',
    meetingPoint: '',
  });

  const [formSaved, setFormSaved] = useState(false);

  const toggleKitItem = (id: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const completedKitCount = Object.values(checkedItems).filter(Boolean).length;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-[#087F8C] uppercase tracking-wider">
            Crisis Readiness
          </span>
          <span className="text-slate-300">·</span>
          <span className="text-xs text-[#425466]">Community & School Preparedness</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-[#123047] tracking-tight mt-1">
          Emergency Preparedness Guide
        </h1>
        <p className="text-sm sm:text-base text-[#425466] mt-1 max-w-3xl">
          Preparation turns panic into structured action. Learn how to assemble essential emergency supplies, keep vital contact records, and protect yourself during natural disasters.
        </p>
      </div>

      {/* Educational Disclaimer */}
      <div className="p-4 rounded-xl bg-[#E8F7F6] border border-[#087F8C]/30 flex items-start gap-3">
        <Info className="w-5 h-5 text-[#087F8C] shrink-0 mt-0.5" />
        <p className="text-xs text-[#123047] leading-relaxed">
          <strong>Educational Notice: </strong>
          This preparedness guide is an educational project tool for school exhibitions and family awareness. Always adhere to official directives from local disaster management authorities, police, and civil defense agencies.
        </p>
      </div>

      {/* Module 1: Local Emergency Numbers Directory */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-[#123047]">
              1. Essential Emergency Contact Numbers
            </h2>
            <p className="text-xs text-[#425466]">
              Memorize these numbers or keep them pinned near your landline or refrigerator.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {EMERGENCY_NUMBERS.map((item) => (
            <div
              key={item.code}
              className="p-5 rounded-2xl border border-[#E1E8ED] bg-white shadow-xs flex flex-col justify-between hover:border-[#C62828] transition-colors"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-3xl font-black text-[#C62828] tracking-tight">
                    {item.code}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-red-50 text-[#C62828]">
                    {item.region}
                  </span>
                </div>
                <h3 className="font-bold text-sm text-[#123047] mt-2">
                  {item.name}
                </h3>
                <p className="text-xs text-[#425466] mt-1">
                  {item.coverage}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-slate-400">Toll-Free 24/7</span>
                <a
                  href={item.speedDial}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#C62828] text-white font-bold text-xs hover:bg-[#A82222] transition-colors cursor-pointer"
                >
                  <PhoneCall className="w-3.5 h-3.5" /> Call {item.code}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Module 2: Interactive First-Aid Kit Checklist */}
      <section className="bg-white rounded-2xl border border-[#E1E8ED] p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#E1E8ED]">
          <div>
            <span className="text-xs font-bold text-[#087F8C] uppercase tracking-wider">
              Interactive Supply Checker
            </span>
            <h2 className="text-lg sm:text-xl font-bold text-[#123047] mt-0.5">
              2. Essential Home & School First-Aid Kit Checklist
            </h2>
            <p className="text-xs text-[#425466] mt-0.5">
              Check off the supplies you currently have in your first-aid box to ensure readiness.
            </p>
          </div>

          <div className="text-right">
            <span className="text-xs font-semibold text-[#425466]">Supplies Packed:</span>
            <div className="text-lg font-bold text-[#087F8C]">
              {completedKitCount} / {EMERGENCY_KIT_ITEMS.length} Items
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {EMERGENCY_KIT_ITEMS.map((item) => {
            const isChecked = !!checkedItems[item.id];
            return (
              <button
                key={item.id}
                onClick={() => toggleKitItem(item.id)}
                className={`p-3.5 rounded-xl border text-left transition-all flex items-start gap-3 cursor-pointer ${
                  isChecked
                    ? 'bg-[#E8F7F6]/60 border-[#087F8C]/60 text-[#123047]'
                    : 'bg-white border-[#E1E8ED] text-[#425466] hover:bg-slate-50'
                }`}
              >
                <div className="mt-0.5 text-[#087F8C] shrink-0">
                  {isChecked ? (
                    <CheckSquare className="w-5 h-5 fill-[#087F8C] text-white" />
                  ) : (
                    <Square className="w-5 h-5 text-slate-300" />
                  )}
                </div>
                <div>
                  <span className={`text-xs font-bold block ${isChecked ? 'line-through text-slate-500' : 'text-[#123047]'}`}>
                    {item.name}
                  </span>
                  <span className="text-[10px] text-slate-400">
                    Category: {item.category} {item.essential && '· Essential'}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* Module 3: Emergency Contact List Card Template */}
      <section className="bg-white rounded-2xl border border-[#E1E8ED] p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#E1E8ED]">
          <div>
            <span className="text-xs font-bold text-[#087F8C] uppercase tracking-wider">
              Family & Student Safety Sheet
            </span>
            <h2 className="text-lg sm:text-xl font-bold text-[#123047] mt-0.5">
              3. Emergency Contact & Medical Information Card
            </h2>
            <p className="text-xs text-[#425466] mt-0.5">
              Fill in your emergency contact details below. You can save or print this card.
            </p>
          </div>

          <button
            onClick={handlePrint}
            className="self-start sm:self-auto inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-[#123047] text-xs font-bold transition-colors cursor-pointer"
          >
            <Printer className="w-4 h-4" />
            <span>Print Emergency Sheet</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-[#123047] mb-1">
              Family / Student Full Name
            </label>
            <input
              type="text"
              value={contactForm.familyName}
              onChange={(e) => setContactForm({ ...contactForm, familyName: e.target.value })}
              placeholder="e.g. Ramesh Kumar / Ananya Rao"
              className="w-full p-2.5 bg-slate-50 border border-[#D8E2EA] rounded-lg text-xs text-[#123047] focus:outline-none focus:border-[#087F8C]"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-[#123047] mb-1">
              Primary Emergency Phone Number
            </label>
            <input
              type="tel"
              value={contactForm.primaryPhone}
              onChange={(e) => setContactForm({ ...contactForm, primaryPhone: e.target.value })}
              placeholder="e.g. +91 98765 43210"
              className="w-full p-2.5 bg-slate-50 border border-[#D8E2EA] rounded-lg text-xs text-[#123047] focus:outline-none focus:border-[#087F8C]"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-[#123047] mb-1">
              Family Physician / Clinic Phone
            </label>
            <input
              type="text"
              value={contactForm.familyDoctor}
              onChange={(e) => setContactForm({ ...contactForm, familyDoctor: e.target.value })}
              placeholder="e.g. Dr. Sharma (044 2845 0000)"
              className="w-full p-2.5 bg-slate-50 border border-[#D8E2EA] rounded-lg text-xs text-[#123047] focus:outline-none focus:border-[#087F8C]"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-[#123047] mb-1">
              Evacuation Designated Meeting Point
            </label>
            <input
              type="text"
              value={contactForm.meetingPoint}
              onChange={(e) => setContactForm({ ...contactForm, meetingPoint: e.target.value })}
              placeholder="e.g. Community Park Gate 2 / School Main Flagpole"
              className="w-full p-2.5 bg-slate-50 border border-[#D8E2EA] rounded-lg text-xs text-[#123047] focus:outline-none focus:border-[#087F8C]"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-xs font-bold text-[#123047] mb-1">
              Critical Allergies or Ongoing Medical Conditions
            </label>
            <textarea
              rows={2}
              value={contactForm.allergiesNotes}
              onChange={(e) => setContactForm({ ...contactForm, allergiesNotes: e.target.value })}
              placeholder="e.g. Severe Penicillin allergy; Type 1 Diabetes (carries insulin); Asthmatic (inhaler in backpack)"
              className="w-full p-2.5 bg-slate-50 border border-[#D8E2EA] rounded-lg text-xs text-[#123047] focus:outline-none focus:border-[#087F8C]"
            />
          </div>
        </div>

        <div className="flex items-center justify-between pt-2">
          <span className="text-[11px] text-slate-400">
            {formSaved ? 'Saved locally for your session.' : 'Information is kept private on your device.'}
          </span>
          <button
            onClick={() => setFormSaved(true)}
            className="px-4 py-2 bg-[#087F8C] hover:bg-[#066772] text-white rounded-lg text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <Check className="w-3.5 h-3.5" />
            <span>Save Contact Card</span>
          </button>
        </div>
      </section>

      {/* Module 4: Natural Disaster Safety Guides */}
      <section className="space-y-4">
        <div>
          <h2 className="text-lg sm:text-xl font-bold text-[#123047]">
            4. Natural Disaster Preparedness & Response
          </h2>
          <p className="text-xs text-[#425466]">
            Key protective actions to take during sudden environmental hazards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Earthquake */}
          <div className="bg-white rounded-2xl border border-[#E1E8ED] p-6 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-[#123047]">Earthquake Safety: Drop, Cover, Hold</h3>
            <p className="text-xs text-[#425466] leading-relaxed">
              When ground shaking begins:
            </p>
            <ul className="text-xs text-[#425466] space-y-2 list-disc list-inside">
              <li><strong>DROP</strong> to your hands and knees immediately.</li>
              <li><strong>COVER</strong> your head and neck under a sturdy table or desk.</li>
              <li><strong>HOLD ON</strong> to the shelter until the shaking stops.</li>
              <li>Stay away from glass windows, unanchored bookcases, and hanging lighting.</li>
            </ul>
          </div>

          {/* Floods */}
          <div className="bg-white rounded-2xl border border-[#E1E8ED] p-6 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">
              <Waves className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-[#123047]">Flood & Water Safety: Turn Around</h3>
            <p className="text-xs text-[#425466] leading-relaxed">
              When encountering rising floodwaters:
            </p>
            <ul className="text-xs text-[#425466] space-y-2 list-disc list-inside">
              <li><strong>Turn Around, Don&apos;t Drown:</strong> Just 6 inches of moving water can knock an adult off their feet.</li>
              <li>Move to higher ground immediately; do not walk into drainage canals.</li>
              <li>Disconnect main electrical breakers if water enters the home.</li>
              <li>Do not drink tap water until authorities confirm it is safe from sewage contamination.</li>
            </ul>
          </div>

          {/* Cyclones & Severe Storms */}
          <div className="bg-white rounded-2xl border border-[#E1E8ED] p-6 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center">
              <CloudRain className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-[#123047]">Cyclones & High-Wind Storms</h3>
            <p className="text-xs text-[#425466] leading-relaxed">
              During high wind warnings:
            </p>
            <ul className="text-xs text-[#425466] space-y-2 list-disc list-inside">
              <li>Remain indoors in an interior windowless room (hallway, bathroom).</li>
              <li>Secure or bring indoors outdoor potted plants, tin sheets, and furniture.</li>
              <li>Charge mobile phones and flashlights before power lines are affected.</li>
              <li>Store at least 3 days of clean drinking water in clean sealed containers.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};
