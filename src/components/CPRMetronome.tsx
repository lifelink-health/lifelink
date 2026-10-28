/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { Play, Square, Volume2, VolumeX, RotateCcw, Heart, ShieldCheck } from 'lucide-react';
import { AudioMetronome } from '../utils/audioMetronome';

export const CPRMetronome: React.FC = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [bpm, setBpm] = useState(110);
  const [beatCount, setBeatCount] = useState(0);
  const [cycleCount, setCycleCount] = useState(0);
  const [isPulsing, setIsPulsing] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showBreathAlert, setShowBreathAlert] = useState(false);

  const metronomeRef = useRef<AudioMetronome | null>(null);

  useEffect(() => {
    metronomeRef.current = new AudioMetronome(bpm);
    return () => {
      metronomeRef.current?.stop();
    };
  }, []);

  const handleStartStop = () => {
    if (!metronomeRef.current) return;

    if (isRunning) {
      metronomeRef.current.stop();
      setIsRunning(false);
      setIsPulsing(false);
    } else {
      setIsRunning(true);
      setShowBreathAlert(false);
      metronomeRef.current.start((count) => {
        setBeatCount(count);
        setIsPulsing(true);
        setTimeout(() => setIsPulsing(false), 90);

        const currentInCycle = ((count - 1) % 30) + 1;
        if (currentInCycle === 30) {
          setCycleCount((prev) => prev + 1);
          setShowBreathAlert(true);
          setTimeout(() => setShowBreathAlert(false), 3500);
        }
      });
    }
  };

  const handleBpmChange = (newVal: number) => {
    setBpm(newVal);
    metronomeRef.current?.setBpm(newVal);
  };

  const handleReset = () => {
    if (isRunning) {
      metronomeRef.current?.stop();
      setIsRunning(false);
    }
    setBeatCount(0);
    setCycleCount(0);
    setShowBreathAlert(false);
    metronomeRef.current?.resetCount();
  };

  const currentStepInCycle = beatCount > 0 ? ((beatCount - 1) % 30) + 1 : 0;

  return (
    <div className="bg-white rounded-xl border border-[#E1E8ED] p-5 sm:p-6 shadow-xs">
      {/* Header and Clinical Cadence */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#E1E8ED]">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-[#087F8C] uppercase tracking-wide">
              Clinical Rhythm Trainer
            </span>
            <span className="text-slate-300">·</span>
            <span className="text-xs text-[#425466]">AHA Guidelines 100–120 BPM</span>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-[#123047] mt-0.5">
            Real-Time CPR Rhythm Metronome
          </h3>
        </div>

        {/* BPM Quick Selector */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium text-[#425466]">Cadence:</span>
          <div className="inline-flex rounded-lg border border-[#E1E8ED] p-1 bg-slate-50">
            {[100, 110, 120].map((rate) => (
              <button
                key={rate}
                onClick={() => handleBpmChange(rate)}
                className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                  bpm === rate
                    ? 'bg-[#087F8C] text-white shadow-xs'
                    : 'text-[#425466] hover:text-[#123047]'
                }`}
              >
                {rate} BPM
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Interactive Stage */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-6 items-center">
        {/* Left: Compression Visual Pulsing Disc */}
        <div className="md:col-span-5 flex flex-col items-center justify-center p-4 bg-[#F7FAFC] rounded-xl border border-[#E1E8ED]/80">
          <div className="relative flex items-center justify-center w-44 h-44 sm:w-48 sm:h-48">
            {/* Outer compression wave indicator */}
            <div
              className={`absolute inset-0 rounded-full transition-transform duration-75 ${
                isPulsing
                  ? 'scale-110 bg-[#087F8C]/15 border-2 border-[#087F8C]'
                  : 'scale-95 bg-[#E8F7F6]/50 border border-[#E1E8ED]'
              }`}
            />

            {/* Inner Heart / Center Indicator */}
            <div
              className={`relative z-10 w-28 h-28 sm:w-32 sm:h-32 rounded-full flex flex-col items-center justify-center transition-all duration-75 ${
                isRunning
                  ? isPulsing
                    ? 'bg-[#087F8C] text-white scale-105 shadow-md'
                    : 'bg-[#123047] text-white scale-100'
                  : 'bg-white border-2 border-[#E1E8ED] text-[#123047]'
              }`}
            >
              <Heart
                className={`w-7 h-7 sm:w-8 sm:h-8 mb-1 transition-transform ${
                  isPulsing ? 'scale-125 text-red-300' : 'text-white'
                }`}
              />
              <span className="text-2xl sm:text-3xl font-extrabold tabular-nums tracking-tight">
                {currentStepInCycle > 0 ? currentStepInCycle : '--'}
              </span>
              <span className="text-[10px] uppercase font-semibold tracking-wider opacity-85">
                of 30 pushes
              </span>
            </div>
          </div>

          <div className="mt-4 text-center">
            <span className="text-xs font-semibold text-[#123047]">
              Depth: 2.0 – 2.4 in (5 – 6 cm)
            </span>
            <p className="text-[11px] text-[#425466] mt-0.5">
              Allow full chest recoil between compressions
            </p>
          </div>
        </div>

        {/* Right: Telemetry & Controls */}
        <div className="md:col-span-7 space-y-4">
          {/* Rescue Breath Callout Banner */}
          {showBreathAlert && (
            <div className="bg-[#E8F7F6] border border-[#087F8C] rounded-lg p-3 text-sm flex items-center gap-3 animate-in fade-in zoom-in duration-200">
              <ShieldCheck className="w-5 h-5 text-[#087F8C] shrink-0" />
              <div>
                <span className="font-bold text-[#123047]">
                  30 Compressions Completed!
                </span>{' '}
                <span className="text-[#425466]">
                  Give 2 quick rescue breaths (1 sec each), then immediately resume.
                </span>
              </div>
            </div>
          )}

          {/* Stats Bar */}
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-[#F7FAFC] border border-[#E1E8ED] rounded-lg p-3 text-center">
              <span className="text-[11px] font-medium text-[#425466] block">Total Beats</span>
              <span className="text-xl font-bold text-[#123047] tabular-nums">
                {beatCount}
              </span>
            </div>
            <div className="bg-[#F7FAFC] border border-[#E1E8ED] rounded-lg p-3 text-center">
              <span className="text-[11px] font-medium text-[#425466] block">Cycles Done</span>
              <span className="text-xl font-bold text-[#087F8C] tabular-nums">
                {cycleCount}
              </span>
            </div>
            <div className="bg-[#F7FAFC] border border-[#E1E8ED] rounded-lg p-3 text-center">
              <span className="text-[11px] font-medium text-[#425466] block">Target BPM</span>
              <span className="text-xl font-bold text-[#123047] tabular-nums">
                {bpm}
              </span>
            </div>
          </div>

          {/* Range Slider for Manual Fine-Tuning */}
          <div className="bg-white border border-[#E1E8ED] rounded-lg p-3.5 space-y-2">
            <div className="flex justify-between text-xs text-[#425466]">
              <span>Adjust Tempo</span>
              <span className="font-semibold text-[#123047] tabular-nums">{bpm} Beats / Min</span>
            </div>
            <input
              type="range"
              min={90}
              max={130}
              step={2}
              value={bpm}
              onChange={(e) => handleBpmChange(Number(e.target.value))}
              className="w-full accent-[#087F8C] cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-400">
              <span>90 Slow</span>
              <span className="text-[#087F8C] font-semibold">100–120 Clinical Ideal</span>
              <span>130 Fast</span>
            </div>
          </div>

          {/* Interactive Button Controls */}
          <div className="flex items-center gap-3 pt-2">
            <button
              onClick={handleStartStop}
              className={`flex-1 flex items-center justify-center gap-2 py-3 px-5 rounded-lg font-bold text-sm text-white transition-all shadow-xs cursor-pointer active:scale-98 ${
                isRunning
                  ? 'bg-[#C62828] hover:bg-[#A82222]'
                  : 'bg-[#087F8C] hover:bg-[#066772]'
              }`}
            >
              {isRunning ? (
                <>
                  <Square className="w-4 h-4 fill-white" />
                  <span>PAUSE METRONOME</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-white" />
                  <span>START METRONOME (110 BPM)</span>
                </>
              )}
            </button>

            <button
              onClick={handleReset}
              className="p-3 text-[#425466] hover:text-[#123047] hover:bg-slate-100 border border-[#E1E8ED] rounded-lg transition-colors cursor-pointer"
              title="Reset beat counters"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            <button
              onClick={() => setIsMuted(!isMuted)}
              className="p-3 text-[#425466] hover:text-[#123047] hover:bg-slate-100 border border-[#E1E8ED] rounded-lg transition-colors cursor-pointer"
              title={isMuted ? 'Unmute clicks' : 'Mute clicks'}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
