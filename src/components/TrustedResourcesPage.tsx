/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { TRUSTED_RESOURCES } from '../data/lifelinkData';
import { ExternalLink, ShieldCheck, Info } from 'lucide-react';

export const TrustedResourcesPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-[#087F8C] uppercase tracking-wider">
            Verified External Authorities
          </span>
          <span className="text-slate-300">·</span>
          <span className="text-xs text-[#425466]">Peer-Reviewed Standards</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-[#123047] tracking-tight mt-1">
          Trusted Public Health Authorities
        </h1>
        <p className="text-sm sm:text-base text-[#425466] mt-1 max-w-3xl">
          LifeLink grounds its first-aid and health literacy curricula strictly in evidence-based guidelines published by internationally recognized healthcare bodies and statutory humanitarian organizations.
        </p>
      </div>

      {/* Non-Endorsement & Independence Notice */}
      <div className="p-4 rounded-xl bg-slate-50 border border-[#E1E8ED] flex items-start gap-3">
        <Info className="w-5 h-5 text-[#46617A] shrink-0 mt-0.5" />
        <p className="text-xs text-[#425466] leading-relaxed">
          <strong className="text-[#123047]">Non-Endorsement Disclosure: </strong>
          The organizations listed below are independent public-health bodies cited for verification and academic citation. LifeLink does not claim formal partnership, commercial affiliation, or official sponsorship by any listed organization.
        </p>
      </div>

      {/* Grid of Verified Resources */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TRUSTED_RESOURCES.map((res) => (
          <div
            key={res.id}
            className="p-6 rounded-2xl border border-[#E1E8ED] bg-white shadow-xs flex flex-col justify-between hover:border-[#087F8C] transition-all"
          >
            <div>
              <div className="flex items-center justify-between gap-2">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#E8F7F6] text-[#087F8C]">
                  {res.jurisdiction}
                </span>
                <span className="flex items-center gap-1 text-[11px] font-semibold text-[#23845B]">
                  <ShieldCheck className="w-3.5 h-3.5" /> Verified
                </span>
              </div>

              <h3 className="font-bold text-base sm:text-lg text-[#123047] mt-3">
                {res.name}
              </h3>
              <span className="text-xs font-semibold text-[#46617A] block mt-0.5">
                {res.category}
              </span>

              <p className="text-xs text-[#425466] mt-3 leading-relaxed">
                {res.description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[11px] text-slate-400 truncate max-w-[150px]">
                {res.url.replace('https://', '')}
              </span>
              <a
                href={res.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-[#087F8C] hover:text-white text-[#123047] text-xs font-bold transition-colors cursor-pointer"
              >
                <span>Visit Portal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
