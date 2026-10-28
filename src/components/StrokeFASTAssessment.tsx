/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { AlertTriangle, Clock, CheckCircle2, RotateCcw, PhoneCall } from 'lucide-react';

export const StrokeFASTAssessment: React.FC = () => {
  const [faceDroop, setFaceDroop] = useState<boolean | null>(null);
  const [armDrift, setArmDrift] = useState<boolean | null>(null);
  const [speechSlur, setSpeechSlur] = useState<boolean | null>(null);
  const [symptomTime, setSymptomTime] = useState<string>('Just now (< 30 min)');

  const positiveCount = (faceDroop ? 1 : 0) + (armDrift ? 1 : 0) + (speechSlur ? 1 : 0);
  const isEvaluated = faceDroop !== null || armDrift !== null || speechSlur !== null;

  const handleReset = () => {
    setFaceDroop(null);
    setArmDrift(null);
    setSpeechSlur(null);
  };

  return (
    <div className="bg-white rounded-xl border border-[#E1E8ED] p-5 sm:p-6 shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#E1E8ED]">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-[#087F8C] uppercase tracking-wide">
              Acute Neurological Triage
            </span>
            <span className="text-slate-300">·</span>
            <span className="text-xs text-[#425466]">FAST Diagnostic Protocol</span>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-[#123047] mt-0.5">
            Interactive F.A.S.T. Stroke Assessment
          </h3>
        </div>

        <button
          onClick={handleReset}
          className="self-start sm:self-auto flex items-center gap-1.5 text-xs text-[#425466] hover:text-[#087F8C] transition-colors cursor-pointer py-1 px-2 rounded-md hover:bg-slate-50"
        >
          <RotateCcw className="w-3.5 h-3.5" /> Reset Check
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
        {/* Left: 3 Interactive Test Criteria */}
        <div className="lg:col-span-7 space-y-4">
          {/* F: Face Drooping */}
          <div className="p-4 rounded-lg border border-[#E1E8ED] bg-[#F7FAFC]">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-full bg-[#123047] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  F
                </span>
                <div>
                  <h4 className="font-bold text-[#123047] text-sm">Face Drooping Test</h4>
                  <p className="text-xs text-[#425466] mt-0.5">
                    Ask the person to smile broadly. Is one side of their face or mouth drooping?
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-3 pt-2 border-t border-[#E1E8ED]/80">
              <button
                onClick={() => setFaceDroop(false)}
                className={`py-2 px-3 text-xs font-medium rounded-md border text-center transition-colors cursor-pointer ${
                  faceDroop === false
                    ? 'bg-[#E8F5E9] border-[#23845B] text-[#23845B] font-semibold'
                    : 'bg-white border-[#E1E8ED] text-[#425466] hover:bg-slate-50'
                }`}
              >
                Normal (Symmetrical)
              </button>
              <button
                onClick={() => setFaceDroop(true)}
                className={`py-2 px-3 text-xs font-medium rounded-md border text-center transition-colors cursor-pointer ${
                  faceDroop === true
                    ? 'bg-[#FFEBEE] border-[#C62828] text-[#C62828] font-bold'
                    : 'bg-white border-[#E1E8ED] text-[#425466] hover:bg-slate-50'
                }`}
              >
                Uneven / Drooping
              </button>
            </div>
          </div>

          {/* A: Arm Weakness */}
          <div className="p-4 rounded-lg border border-[#E1E8ED] bg-[#F7FAFC]">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-full bg-[#123047] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  A
                </span>
                <div>
                  <h4 className="font-bold text-[#123047] text-sm">Arm Drift Test</h4>
                  <p className="text-xs text-[#425466] mt-0.5">
                    Ask them to raise both arms forward for 10 seconds. Does one arm drift downward?
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-3 pt-2 border-t border-[#E1E8ED]/80">
              <button
                onClick={() => setArmDrift(false)}
                className={`py-2 px-3 text-xs font-medium rounded-md border text-center transition-colors cursor-pointer ${
                  armDrift === false
                    ? 'bg-[#E8F5E9] border-[#23845B] text-[#23845B] font-semibold'
                    : 'bg-white border-[#E1E8ED] text-[#425466] hover:bg-slate-50'
                }`}
              >
                Both Arms Steady
              </button>
              <button
                onClick={() => setArmDrift(true)}
                className={`py-2 px-3 text-xs font-medium rounded-md border text-center transition-colors cursor-pointer ${
                  armDrift === true
                    ? 'bg-[#FFEBEE] border-[#C62828] text-[#C62828] font-bold'
                    : 'bg-white border-[#E1E8ED] text-[#425466] hover:bg-slate-50'
                }`}
              >
                Drifts / Weak
              </button>
            </div>
          </div>

          {/* S: Speech Difficulty */}
          <div className="p-4 rounded-lg border border-[#E1E8ED] bg-[#F7FAFC]">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-full bg-[#123047] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  S
                </span>
                <div>
                  <h4 className="font-bold text-[#123047] text-sm">Speech Clarity Test</h4>
                  <p className="text-xs text-[#425466] mt-0.5">
                    Ask them to repeat: &ldquo;The sky is blue in Boston.&rdquo; Is speech slurred or garbled?
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-3 pt-2 border-t border-[#E1E8ED]/80">
              <button
                onClick={() => setSpeechSlur(false)}
                className={`py-2 px-3 text-xs font-medium rounded-md border text-center transition-colors cursor-pointer ${
                  speechSlur === false
                    ? 'bg-[#E8F5E9] border-[#23845B] text-[#23845B] font-semibold'
                    : 'bg-white border-[#E1E8ED] text-[#425466] hover:bg-slate-50'
                }`}
              >
                Clear Pronunciation
              </button>
              <button
                onClick={() => setSpeechSlur(true)}
                className={`py-2 px-3 text-xs font-medium rounded-md border text-center transition-colors cursor-pointer ${
                  speechSlur === true
                    ? 'bg-[#FFEBEE] border-[#C62828] text-[#C62828] font-bold'
                    : 'bg-white border-[#E1E8ED] text-[#425466] hover:bg-slate-50'
                }`}
              >
                Slurred / Incomprehensible
              </button>
            </div>
          </div>
        </div>

        {/* Right: T: Time Calculation & Clinical Triage Result */}
        <div className="lg:col-span-5 flex flex-col justify-between p-5 rounded-xl border border-[#E1E8ED] bg-white">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#123047]">
              <Clock className="w-4 h-4 text-[#087F8C]" />
              <span>Time of Symptom Onset</span>
            </div>
            <select
              value={symptomTime}
              onChange={(e) => setSymptomTime(e.target.value)}
              className="mt-2 w-full p-2.5 text-xs bg-slate-50 border border-[#D8E2EA] rounded-md text-[#123047] font-medium"
            >
              <option value="Just now (< 30 min)">Just now (&lt; 30 minutes)</option>
              <option value="1 hour ago">Approx. 1 hour ago</option>
              <option value="2 to 3 hours ago">2 to 3 hours ago (within thrombolytic window)</option>
              <option value="4+ hours ago">More than 4 hours ago</option>
              <option value="Woke up with symptoms">Woke up with symptoms (Unknown onset)</option>
            </select>

            {/* Assessment Result Box */}
            <div className="mt-5">
              {!isEvaluated ? (
                <div className="p-4 rounded-lg bg-slate-50 border border-[#E1E8ED] text-center">
                  <p className="text-xs text-[#425466]">
                    Select status for Face, Arm, and Speech checks to calculate stroke likelihood.
                  </p>
                </div>
              ) : positiveCount > 0 ? (
                <div className="p-4 rounded-lg bg-[#FFEBEE] border border-[#C62828]">
                  <div className="flex items-center gap-2 text-[#C62828] font-bold text-sm">
                    <AlertTriangle className="w-4 h-4 shrink-0" />
                    <span>HIGH PROBABILITY OF STROKE</span>
                  </div>
                  <p className="text-xs text-[#123047] mt-1.5 leading-relaxed">
                    <strong>{positiveCount} of 3</strong> cardinal FAST signs present. If even 1 sign is present, clinical probability of acute stroke exceeds 72%.
                  </p>
                  <div className="mt-3 text-xs text-[#425466] border-t border-red-200 pt-2">
                    <span className="font-semibold text-[#123047]">Critical:</span> Do not give aspirin, food, or drinks. Keep patient calm and reclining.
                  </div>
                  <a
                    href="tel:911"
                    className="mt-3 w-full py-2.5 px-3 bg-[#C62828] hover:bg-[#A82222] text-white rounded-lg font-bold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <PhoneCall className="w-4 h-4" /> CALL 911 IMMEDIATELY
                  </a>
                </div>
              ) : (
                <div className="p-4 rounded-lg bg-[#E8F5E9] border border-[#23845B]">
                  <div className="flex items-center gap-2 text-[#23845B] font-bold text-sm">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>No Cardinal FAST Deficits Detected</span>
                  </div>
                  <p className="text-xs text-[#123047] mt-1.5">
                    All 3 core tests show symmetrical function. However, seek medical evaluation if the person has sudden confusion, loss of vision, or severe thunderclap headache.
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-[#E1E8ED] text-[11px] text-[#425466]">
            <span>Last known well time: </span>
            <span className="font-semibold text-[#123047]">{symptomTime}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
