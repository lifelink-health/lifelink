/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PhoneCall, ShieldAlert, MapPin, Copy, Check } from 'lucide-react';

export const EmergencyNumbersBar: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<'us' | 'eu' | 'in' | 'uk'>('us');
  const [copied, setCopied] = useState(false);

  const regionData = {
    us: { number: '911', label: 'US & Canada', desc: 'Police, Fire & Paramedics' },
    in: { number: '112', altNumber: '108', label: 'India', desc: 'National Emergency & Ambulance' },
    eu: { number: '112', label: 'European Union', desc: 'All Emergency Services' },
    uk: { number: '999', label: 'United Kingdom', desc: 'Emergency Dispatch' },
  };

  const current = regionData[selectedRegion];

  const copyScript = () => {
    navigator.clipboard.writeText(
      'Emergency! I need an ambulance at [my address]. A person is unresponsive / needs immediate medical attention.'
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-[#FFEBEE] border-2 border-[#C62828] rounded-2xl p-4 sm:p-5 shadow-sm">
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        {/* Left: Big Emergency Call Action */}
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-xl bg-[#C62828] text-white flex items-center justify-center shrink-0 shadow-md">
            <ShieldAlert className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-black uppercase tracking-wider text-[#C62828]">
                One-Touch Emergency Dial
              </span>
              <span className="text-slate-300">·</span>
              <span className="text-xs text-[#425466]">Instant Connection</span>
            </div>
            <h3 className="text-lg sm:text-xl font-extrabold text-[#123047]">
              Need Help Right Now?
            </h3>
            <p className="text-xs text-[#425466]">
              Tap the button to call medical emergency dispatch immediately.
            </p>
          </div>
        </div>

        {/* Center: Region Switcher for International / Local Accessibility */}
        <div className="flex items-center gap-1.5 bg-white/80 p-1.5 rounded-lg border border-red-200 self-start md:self-center">
          <span className="text-[11px] font-bold text-[#123047] px-2">Region:</span>
          {(['us', 'in', 'eu', 'uk'] as const).map((reg) => (
            <button
              key={reg}
              onClick={() => setSelectedRegion(reg)}
              className={`px-2.5 py-1 text-xs font-bold rounded-md transition-all cursor-pointer ${
                selectedRegion === reg
                  ? 'bg-[#C62828] text-white shadow-xs'
                  : 'text-[#425466] hover:bg-red-50'
              }`}
            >
              {reg.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Right: Big Call Button */}
        <div className="flex items-center gap-2.5">
          <a
            href={`tel:${current.number}`}
            className="flex-1 md:flex-initial bg-[#C62828] hover:bg-[#A82222] text-white py-3 px-5 sm:px-6 rounded-xl font-black text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-md transition-all active:scale-95 text-center cursor-pointer"
          >
            <PhoneCall className="w-5 h-5 shrink-0" />
            <span>CALL {current.number} ({current.label})</span>
          </a>
        </div>
      </div>

      {/* Simple 3-Step What to Tell the Operator */}
      <div className="mt-4 pt-3.5 border-t border-red-200/80 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-[#123047]">
        <div className="flex items-start gap-2 bg-white/70 p-2.5 rounded-lg border border-red-100">
          <span className="w-5 h-5 rounded-full bg-[#C62828] text-white font-bold text-[11px] flex items-center justify-center shrink-0">
            1
          </span>
          <div>
            <strong>State Your Address:</strong>
            <p className="text-[#425466] text-[11px] mt-0.5">Tell them building, room, or exact street corner.</p>
          </div>
        </div>

        <div className="flex items-start gap-2 bg-white/70 p-2.5 rounded-lg border border-red-100">
          <span className="w-5 h-5 rounded-full bg-[#C62828] text-white font-bold text-[11px] flex items-center justify-center shrink-0">
            2
          </span>
          <div>
            <strong>Describe What Happened:</strong>
            <p className="text-[#425466] text-[11px] mt-0.5">e.g. &ldquo;Person collapsed and not breathing.&rdquo;</p>
          </div>
        </div>

        <div className="flex items-start gap-2 bg-white/70 p-2.5 rounded-lg border border-red-100">
          <span className="w-5 h-5 rounded-full bg-[#C62828] text-white font-bold text-[11px] flex items-center justify-center shrink-0">
            3
          </span>
          <div className="flex-1">
            <strong>Put on Speaker:</strong>
            <p className="text-[#425466] text-[11px] mt-0.5">Keep hands free to follow instructions.</p>
          </div>
          <button
            onClick={copyScript}
            className="text-[10px] text-[#087F8C] hover:underline flex items-center gap-1 cursor-pointer"
            title="Copy simple script"
          >
            {copied ? <Check className="w-3 h-3 text-[#23845B]" /> : <Copy className="w-3 h-3" />}
          </button>
        </div>
      </div>
    </div>
  );
};
