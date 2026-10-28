/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { EmergencyProtocol } from '../types';
import { AlertCircle, Check, Phone, ShieldAlert, HeartPulse, Wind, Droplets } from 'lucide-react';

interface ProtocolTabsProps {
  protocols: EmergencyProtocol[];
  selectedProtocolId: string;
  onSelectProtocol: (id: string) => void;
}

export const ProtocolTabs: React.FC<ProtocolTabsProps> = ({
  protocols,
  selectedProtocolId,
  onSelectProtocol,
}) => {
  const [completedSteps, setCompletedSteps] = useState<Record<string, boolean>>({});

  const activeProtocol =
    protocols.find((p) => p.id === selectedProtocolId) || protocols[0];

  const toggleStep = (stepKey: string) => {
    setCompletedSteps((prev) => ({
      ...prev,
      [stepKey]: !prev[stepKey],
    }));
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'cardiac':
        return <HeartPulse className="w-4 h-4 shrink-0" />;
      case 'stroke':
        return <ShieldAlert className="w-4 h-4 shrink-0" />;
      case 'respiratory':
        return <Wind className="w-4 h-4 shrink-0" />;
      case 'trauma':
        return <Droplets className="w-4 h-4 shrink-0" />;
      default:
        return <AlertCircle className="w-4 h-4 shrink-0" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Quick-Access Protocol Filter Bar */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
        {protocols.map((protocol) => {
          const isSelected = protocol.id === activeProtocol.id;
          return (
            <button
              key={protocol.id}
              onClick={() => onSelectProtocol(protocol.id)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer border ${
                isSelected
                  ? 'bg-[#087F8C] text-white border-[#087F8C] shadow-xs'
                  : 'bg-white text-[#425466] border-[#E1E8ED] hover:text-[#123047] hover:border-slate-300'
              }`}
            >
              {getCategoryIcon(protocol.category)}
              <span>{protocol.title}</span>
            </button>
          );
        })}
      </div>

      {/* Main Active Protocol Display Card with 4px left accent border */}
      <div className="bg-white rounded-xl border border-[#E1E8ED] border-l-4 border-l-[#087F8C] p-5 sm:p-7 shadow-xs">
        {/* Header Metadata */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-[#E1E8ED]">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold">
              <span className="text-[#087F8C] uppercase tracking-wider">
                Protocol Category: {activeProtocol.category}
              </span>
              <span className="text-slate-300">·</span>
              <span className="text-[#425466]">Window: {activeProtocol.estimatedTime}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#123047] mt-1">
              {activeProtocol.title}
            </h2>
            <p className="text-sm text-[#425466] mt-1 max-w-3xl leading-relaxed">
              {activeProtocol.summary}
            </p>
          </div>

          <div className="shrink-0 self-start sm:self-auto">
            <span
              className={`inline-flex items-center px-2.5 py-1 text-xs font-bold uppercase rounded-md tracking-wider ${
                activeProtocol.urgencyLevel === 'immediate'
                  ? 'bg-[#FFEBEE] text-[#C62828]'
                  : 'bg-[#E8F7F6] text-[#087F8C]'
              }`}
            >
              Urgency: {activeProtocol.urgencyLevel}
            </span>
          </div>
        </div>

        {/* Dispatcher Prompt Callout */}
        <div className="mt-5 p-3.5 bg-[#F7FAFC] rounded-lg border border-[#E1E8ED] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-start gap-2.5">
            <Phone className="w-4 h-4 text-[#C62828] shrink-0 mt-0.5" />
            <div className="text-xs">
              <span className="font-bold text-[#123047] uppercase tracking-wider">
                Emergency Dispatcher Script:
              </span>
              <p className="text-[#425466] mt-0.5 font-medium">{activeProtocol.callDispatcherPrompt}</p>
            </div>
          </div>
          <a
            href="tel:911"
            className="shrink-0 px-3 py-1.5 bg-[#C62828] hover:bg-[#A82222] text-white text-xs font-bold rounded-md flex items-center gap-1.5 transition-colors"
          >
            <Phone className="w-3.5 h-3.5" /> Call 911
          </a>
        </div>

        {/* Step-by-Step Emergency Protocol Guides (32px circles + dashed guide line) */}
        <div className="mt-8">
          <h3 className="text-sm font-bold uppercase tracking-wider text-[#123047] mb-6">
            Action Sequence & Protocol Steps
          </h3>

          <div className="relative pl-2 sm:pl-4 space-y-7 before:absolute before:left-[1.35rem] sm:before:left-[1.85rem] before:top-4 before:bottom-4 before:w-[2px] before:border-l-2 before:border-dashed before:border-[#D8E2EA]">
            {activeProtocol.steps.map((step) => {
              const stepKey = `${activeProtocol.id}-${step.stepNumber}`;
              const isDone = !!completedSteps[stepKey];

              return (
                <div key={step.stepNumber} className="relative flex items-start gap-4">
                  {/* 32px circular indicator */}
                  <button
                    onClick={() => toggleStep(stepKey)}
                    className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs shrink-0 transition-transform active:scale-95 cursor-pointer ${
                      isDone
                        ? 'bg-[#23845B] text-white shadow-xs'
                        : step.isUrgent
                        ? 'bg-[#123047] text-white'
                        : 'bg-[#087F8C] text-white'
                    }`}
                    title={isDone ? 'Mark step as incomplete' : 'Mark step as completed'}
                  >
                    {isDone ? <Check className="w-4 h-4 stroke-[3]" /> : step.stepNumber}
                  </button>

                  {/* Step Content */}
                  <div className="flex-1 bg-white border border-[#E1E8ED] rounded-lg p-4 shadow-2xs hover:border-[#087F8C]/60 transition-colors">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-extrabold text-[#123047] text-sm uppercase tracking-wide">
                        {step.actionVerb}
                      </span>
                      {step.isUrgent && (
                        <span className="text-[10px] font-bold text-[#C62828] uppercase tracking-wider">
                          Critical Step
                        </span>
                      )}
                    </div>

                    <p className="text-sm text-[#425466] mt-1.5 leading-relaxed font-normal">
                      {step.instruction}
                    </p>

                    {step.clinicalNote && (
                      <div className="mt-2.5 pt-2 border-t border-slate-100 text-xs text-[#087F8C] flex items-center gap-1.5">
                        <span className="font-semibold text-[#123047]">Clinical Note:</span>
                        <span>{step.clinicalNote}</span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Contraindications Warning Box */}
        {activeProtocol.contraindications && activeProtocol.contraindications.length > 0 && (
          <div className="mt-8 p-4 rounded-lg bg-[#FFEBEE]/70 border border-red-200">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C62828] flex items-center gap-1.5">
              <AlertCircle className="w-4 h-4 shrink-0" />
              Contraindications & Hazards (What NOT to do)
            </h4>
            <ul className="mt-2 space-y-1 text-xs text-[#425466]">
              {activeProtocol.contraindications.map((contra, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#C62828] font-bold">✕</span>
                  <span>{contra}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
