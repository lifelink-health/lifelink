/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { VitalSign } from '../types';
import { Activity, RotateCcw, AlertTriangle, CheckCircle } from 'lucide-react';

interface VitalSignsLabProps {
  vitals: VitalSign[];
}

export const VitalSignsLab: React.FC<VitalSignsLabProps> = ({ vitals }) => {
  const [selectedVitalId, setSelectedVitalId] = useState(vitals[0].id);
  const [values, setValues] = useState<Record<string, number>>(() => {
    const initial: Record<string, number> = {};
    vitals.forEach((v) => {
      initial[v.id] = v.defaultVal;
    });
    return initial;
  });

  const activeVital = vitals.find((v) => v.id === selectedVitalId) || vitals[0];
  const currentValue = values[activeVital.id] ?? activeVital.defaultVal;

  const handleSliderChange = (val: number) => {
    setValues((prev) => ({
      ...prev,
      [activeVital.id]: val,
    }));
  };

  const handleResetCurrent = () => {
    setValues((prev) => ({
      ...prev,
      [activeVital.id]: activeVital.defaultVal,
    }));
  };

  // Determine clinical status
  const isLow = currentValue < activeVital.normalMin;
  const isHigh = currentValue > activeVital.normalMax;
  const isNormal = !isLow && !isHigh;

  const percentage = Math.round(
    ((currentValue - activeVital.minVal) / (activeVital.maxVal - activeVital.minVal)) * 100
  );

  return (
    <div className="bg-white rounded-xl border border-[#E1E8ED] p-5 sm:p-6 shadow-xs">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#E1E8ED]">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-[#087F8C] uppercase tracking-wide">
              School Exhibition Sandbox
            </span>
            <span className="text-slate-300">·</span>
            <span className="text-xs text-[#425466]">Physiological Parameters</span>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-[#123047] mt-0.5">
            Vital Signs Range & Triage Simulator
          </h3>
        </div>

        <button
          onClick={handleResetCurrent}
          className="self-start sm:self-auto flex items-center gap-1.5 text-xs text-[#425466] hover:text-[#087F8C] transition-colors cursor-pointer py-1 px-2 rounded-md hover:bg-slate-50"
        >
          <RotateCcw className="w-3.5 h-3.5" /> Reset to Baseline
        </button>
      </div>

      {/* Vital Selector Chips */}
      <div className="flex items-center gap-2 overflow-x-auto py-4 scrollbar-none">
        {vitals.map((v) => {
          const isSelected = v.id === activeVital.id;
          const val = values[v.id] ?? v.defaultVal;
          const itemIsAbnormal = val < v.normalMin || val > v.normalMax;

          return (
            <button
              key={v.id}
              onClick={() => setSelectedVitalId(v.id)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer whitespace-nowrap border ${
                isSelected
                  ? 'bg-[#123047] text-white border-[#123047] shadow-xs'
                  : 'bg-[#F7FAFC] text-[#425466] border-[#E1E8ED] hover:bg-slate-100'
              }`}
            >
              <Activity className="w-3.5 h-3.5" />
              <span>{v.name}</span>
              <span
                className={`ml-1 text-[11px] font-mono tabular-nums ${
                  itemIsAbnormal ? 'text-red-400 font-bold' : 'opacity-70'
                }`}
              >
                {val} {v.unit}
              </span>
            </button>
          );
        })}
      </div>

      {/* Main Two-Zone Sandbox Display */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-2 items-center">
        {/* Left: Large Visual Dial / Meter */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 bg-[#F7FAFC] rounded-xl border border-[#E1E8ED]">
          <div className="text-center">
            <span className="text-xs uppercase font-bold tracking-wider text-[#425466]">
              {activeVital.name} ({activeVital.abbreviation})
            </span>

            <div className="my-4 flex items-baseline justify-center gap-1.5">
              <span className="text-5xl font-extrabold text-[#123047] tabular-nums tracking-tight">
                {currentValue}
              </span>
              <span className="text-sm font-semibold text-[#425466]">{activeVital.unit}</span>
            </div>

            {/* Status indicator */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
              {isNormal && (
                <span className="bg-[#E8F5E9] text-[#23845B] px-3 py-1 rounded-full flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5" /> Normal Physiological Range
                </span>
              )}
              {isLow && (
                <span className="bg-[#FFEBEE] text-[#C62828] px-3 py-1 rounded-full flex items-center gap-1">
                  <AlertTriangle className="w-3.5 h-3.5" /> Low / Depressed Level
                </span>
              )}
              {isHigh && (
                <span className="bg-[#FFEBEE] text-[#C62828] px-3 py-1 rounded-full flex items-center gap-1">
                  <AlertTriangle className="w-3.5 h-3.5" /> Elevated / Crisis Level
                </span>
              )}
            </div>
          </div>

          {/* Scale Bar */}
          <div className="w-full mt-6 space-y-1.5">
            <div className="flex justify-between text-[11px] text-[#425466]">
              <span>Min: {activeVital.minVal}</span>
              <span className="text-[#087F8C] font-semibold">
                Normal: {activeVital.normalMin}–{activeVital.normalMax} {activeVital.unit}
              </span>
              <span>Max: {activeVital.maxVal}</span>
            </div>
            <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden relative">
              <div
                className={`h-full transition-all duration-150 ${
                  isNormal ? 'bg-[#087F8C]' : 'bg-[#C62828]'
                }`}
                style={{ width: `${Math.min(100, Math.max(0, percentage))}%` }}
              />
            </div>
          </div>
        </div>

        {/* Right: Interactive Parameter Slider & Medical Insights */}
        <div className="lg:col-span-7 space-y-4">
          <div className="bg-white border border-[#E1E8ED] rounded-lg p-4 space-y-2">
            <div className="flex justify-between text-xs font-semibold text-[#123047]">
              <span>Adjust Simulation Parameter</span>
              <span className="tabular-nums font-mono text-[#087F8C]">
                {currentValue} {activeVital.unit}
              </span>
            </div>
            <input
              type="range"
              min={activeVital.minVal}
              max={activeVital.maxVal}
              value={currentValue}
              onChange={(e) => handleSliderChange(Number(e.target.value))}
              className="w-full accent-[#087F8C] cursor-pointer"
            />
            <p className="text-xs text-[#425466] leading-relaxed pt-1">
              {activeVital.description}
            </p>
          </div>

          {/* Clinical Diagnostic Insights Card */}
          <div className="p-4 rounded-lg border border-[#E1E8ED] bg-[#F7FAFC] space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#123047]">
              Clinical Implications for Students & Exhibition Observers
            </h4>

            <div
              className={`p-3 rounded-md border text-xs leading-relaxed ${
                isLow
                  ? 'bg-red-50 border-red-200 text-[#C62828] font-medium'
                  : 'bg-white border-slate-200 text-[#425466]'
              }`}
            >
              <strong className="text-[#123047]">Low Range: </strong>
              {activeVital.clinicalImplicationLow}
            </div>

            <div
              className={`p-3 rounded-md border text-xs leading-relaxed ${
                isHigh
                  ? 'bg-red-50 border-red-200 text-[#C62828] font-medium'
                  : 'bg-white border-slate-200 text-[#425466]'
              }`}
            >
              <strong className="text-[#123047]">High Range: </strong>
              {activeVital.clinicalImplicationHigh}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
