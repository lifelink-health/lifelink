/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { X, PhoneCall, ShieldAlert, Heart, Wind, Droplet, Play, Square, Check } from 'lucide-react';
import { AudioMetronome } from '../utils/audioMetronome';

interface EmergencyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EmergencyModal: React.FC<EmergencyModalProps> = ({ isOpen, onClose }) => {
  const [selectedCrisis, setSelectedCrisis] = useState<'cpr' | 'choking' | 'bleeding'>('cpr');
  const [metronomeRunning, setMetronomeRunning] = useState(false);
  const [beatCount, setBeatCount] = useState(0);
  const [isPulsing, setIsPulsing] = useState(false);
  const metronomeRef = React.useRef<AudioMetronome | null>(null);

  React.useEffect(() => {
    metronomeRef.current = new AudioMetronome(110);
    return () => {
      metronomeRef.current?.stop();
    };
  }, []);

  if (!isOpen) return null;

  const toggleMetronome = () => {
    if (!metronomeRef.current) return;
    if (metronomeRunning) {
      metronomeRef.current.stop();
      setMetronomeRunning(false);
      setIsPulsing(false);
    } else {
      setMetronomeRunning(true);
      metronomeRef.current.start((cnt) => {
        setBeatCount(cnt);
        setIsPulsing(true);
        setTimeout(() => setIsPulsing(false), 90);
      });
    }
  };

  const handleClose = () => {
    if (metronomeRunning) {
      metronomeRef.current?.stop();
      setMetronomeRunning(false);
    }
    onClose();
  };

  const cycleBeat = beatCount > 0 ? ((beatCount - 1) % 30) + 1 : 0;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#123047]/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-150">
      <div className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl border-4 border-[#C62828] overflow-hidden flex flex-col max-h-[92vh]">
        {/* Top Emergency Red Header */}
        <div className="bg-[#C62828] text-white p-4 sm:p-5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
              <ShieldAlert className="w-6 h-6 text-white animate-pulse" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-red-100 block">
                High-Priority Crisis Protocol
              </span>
              <h2 className="text-xl sm:text-2xl font-black tracking-tight">
                CRITICAL LIFE-SUPPORT MODE
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="tel:911"
              className="bg-white hover:bg-slate-100 text-[#C62828] font-black text-xs sm:text-sm py-2 px-3 sm:px-4 rounded-lg flex items-center gap-1.5 shadow-md transition-all active:scale-95"
            >
              <PhoneCall className="w-4 h-4 text-[#C62828]" />
              <span>CALL 911 NOW</span>
            </a>
            <button
              onClick={handleClose}
              className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
              aria-label="Exit emergency mode"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Crisis Type Tabs */}
        <div className="grid grid-cols-3 bg-slate-100 border-b border-slate-200 p-2 gap-2 text-xs font-bold text-[#123047]">
          <button
            onClick={() => setSelectedCrisis('cpr')}
            className={`py-2.5 px-3 rounded-lg flex items-center justify-center gap-2 cursor-pointer transition-all ${
              selectedCrisis === 'cpr'
                ? 'bg-[#C62828] text-white shadow-xs'
                : 'hover:bg-white text-[#425466]'
            }`}
          >
            <Heart className="w-4 h-4" />
            <span className="truncate">Cardiac Arrest / CPR</span>
          </button>

          <button
            onClick={() => setSelectedCrisis('choking')}
            className={`py-2.5 px-3 rounded-lg flex items-center justify-center gap-2 cursor-pointer transition-all ${
              selectedCrisis === 'choking'
                ? 'bg-[#C62828] text-white shadow-xs'
                : 'hover:bg-white text-[#425466]'
            }`}
          >
            <Wind className="w-4 h-4" />
            <span className="truncate">Choking Airway</span>
          </button>

          <button
            onClick={() => setSelectedCrisis('bleeding')}
            className={`py-2.5 px-3 rounded-lg flex items-center justify-center gap-2 cursor-pointer transition-all ${
              selectedCrisis === 'bleeding'
                ? 'bg-[#C62828] text-white shadow-xs'
                : 'hover:bg-white text-[#425466]'
            }`}
          >
            <Droplet className="w-4 h-4" />
            <span className="truncate">Severe Bleeding</span>
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-5 sm:p-7 overflow-y-auto space-y-6">
          {selectedCrisis === 'cpr' && (
            <div className="space-y-6">
              {/* CPR Metronome Integration inside Emergency Modal */}
              <div className="bg-[#FFF5F5] border-2 border-[#C62828] rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div
                    className={`w-16 h-16 rounded-full flex flex-col items-center justify-center font-black transition-all ${
                      isPulsing
                        ? 'bg-[#C62828] text-white scale-110 shadow-lg'
                        : 'bg-white text-[#C62828] border-2 border-[#C62828]'
                    }`}
                  >
                    <span className="text-xl tabular-nums">{cycleBeat > 0 ? cycleBeat : '--'}</span>
                    <span className="text-[9px] uppercase tracking-tighter">/ 30 push</span>
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold text-[#123047]">
                      CPR Compression Metronome (110 BPM)
                    </h3>
                    <p className="text-xs text-[#425466] mt-0.5">
                      Push center of chest hard and fast: 2.0 to 2.4 inches deep.
                    </p>
                  </div>
                </div>

                <button
                  onClick={toggleMetronome}
                  className={`w-full sm:w-auto px-5 py-3 rounded-lg font-bold text-xs sm:text-sm text-white flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs ${
                    metronomeRunning
                      ? 'bg-[#123047] hover:bg-black'
                      : 'bg-[#C62828] hover:bg-[#A82222]'
                  }`}
                >
                  {metronomeRunning ? (
                    <>
                      <Square className="w-4 h-4 fill-white" />
                      <span>PAUSE AUDIO CLICKS</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 fill-white" />
                      <span>START 110 BPM AUDIO CLICKS</span>
                    </>
                  )}
                </button>
              </div>

              {/* Direct Urgent Steps */}
              <div className="space-y-3">
                <div className="flex items-start gap-3.5 p-3.5 rounded-lg bg-slate-50 border border-slate-200">
                  <span className="w-7 h-7 rounded-full bg-[#C62828] text-white font-black text-xs flex items-center justify-center shrink-0">
                    1
                  </span>
                  <div>
                    <strong className="text-sm font-bold text-[#123047]">VERIFY UNRESPONSIVE:</strong>
                    <p className="text-xs text-[#425466] mt-0.5">
                      Tap shoulders, shout &ldquo;Are you OK?&rdquo; Look at chest for 5–10 seconds. If not breathing normally, start CPR immediately.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-lg bg-slate-50 border border-slate-200">
                  <span className="w-7 h-7 rounded-full bg-[#C62828] text-white font-black text-xs flex items-center justify-center shrink-0">
                    2
                  </span>
                  <div>
                    <strong className="text-sm font-bold text-[#123047]">DISPATCH HELP & AED:</strong>
                    <p className="text-xs text-[#425466] mt-0.5">
                      Tell someone nearby: &ldquo;Call 911 and fetch the AED!&rdquo; Put 911 on speaker phone.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-lg bg-slate-50 border border-slate-200">
                  <span className="w-7 h-7 rounded-full bg-[#C62828] text-white font-black text-xs flex items-center justify-center shrink-0">
                    3
                  </span>
                  <div>
                    <strong className="text-sm font-bold text-[#123047]">PUSH HARD & FAST:</strong>
                    <p className="text-xs text-[#425466] mt-0.5">
                      Heel of hand on center of breastbone, fingers interlocked. Push down 2–2.4 inches at 100–120 BPM. Do not stop until AED or EMS arrives.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-lg bg-slate-50 border border-slate-200">
                  <span className="w-7 h-7 rounded-full bg-[#C62828] text-white font-black text-xs flex items-center justify-center shrink-0">
                    4
                  </span>
                  <div>
                    <strong className="text-sm font-bold text-[#123047]">APPLY AED AS SOON AS IT ARRIVES:</strong>
                    <p className="text-xs text-[#425466] mt-0.5">
                      Open lid, power on, stick pads to bare chest as pictured on pads, and follow voice prompts. Clear patient before shock.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedCrisis === 'choking' && (
            <div className="space-y-4">
              <div className="p-4 bg-[#FFEBEE] border border-[#C62828] rounded-xl text-xs text-[#123047]">
                <strong className="text-[#C62828]">IF PERSON CAN COUGH OR SPEAK:</strong> Encourage continuous coughing. DO NOT hit them on the back yet.
                <br />
                <strong className="text-[#C62828]">IF PERSON CANNOT SPEAK OR BREATHE:</strong> Proceed with immediate 5 and 5 protocol below.
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3.5 p-3.5 rounded-lg bg-slate-50 border border-slate-200">
                  <span className="w-7 h-7 rounded-full bg-[#C62828] text-white font-black text-xs flex items-center justify-center shrink-0">
                    1
                  </span>
                  <div>
                    <strong className="text-sm font-bold text-[#123047]">5 FORWARD BACK BLOWS:</strong>
                    <p className="text-xs text-[#425466] mt-0.5">
                      Stand behind them, lean their chest forward over waist. Give 5 sharp, forceful blows between shoulder blades with the heel of your hand.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-lg bg-slate-50 border border-slate-200">
                  <span className="w-7 h-7 rounded-full bg-[#C62828] text-white font-black text-xs flex items-center justify-center shrink-0">
                    2
                  </span>
                  <div>
                    <strong className="text-sm font-bold text-[#123047]">5 ABDOMINAL THRUSTS (HEIMLICH):</strong>
                    <p className="text-xs text-[#425466] mt-0.5">
                      Wrap arms around waist. Place thumb side of your fist just above their navel. Grasp fist with other hand and pull sharply inward and upward.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-lg bg-slate-50 border border-slate-200">
                  <span className="w-7 h-7 rounded-full bg-[#C62828] text-white font-black text-xs flex items-center justify-center shrink-0">
                    3
                  </span>
                  <div>
                    <strong className="text-sm font-bold text-[#123047]">IF UNCONSCIOUS:</strong>
                    <p className="text-xs text-[#425466] mt-0.5">
                      Lower immediately to floor, call 911, and begin CPR compressions. Check mouth for dislodged object before breaths.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedCrisis === 'bleeding' && (
            <div className="space-y-4">
              <div className="p-4 bg-[#FFEBEE] border border-[#C62828] rounded-xl text-xs text-[#123047]">
                <strong className="text-[#C62828]">ARTERIAL BLEEDING:</strong> Bright red spurting or continuous pooling blood is immediately life-threatening. Act in seconds.
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3.5 p-3.5 rounded-lg bg-slate-50 border border-slate-200">
                  <span className="w-7 h-7 rounded-full bg-[#C62828] text-white font-black text-xs flex items-center justify-center shrink-0">
                    1
                  </span>
                  <div>
                    <strong className="text-sm font-bold text-[#123047]">DIRECT BODY-WEIGHT PRESSURE:</strong>
                    <p className="text-xs text-[#425466] mt-0.5">
                      Place clean gauze or cloth directly onto wound. Lock elbows and push down with your entire upper body weight. DO NOT let go to look.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-lg bg-slate-50 border border-slate-200">
                  <span className="w-7 h-7 rounded-full bg-[#C62828] text-white font-black text-xs flex items-center justify-center shrink-0">
                    2
                  </span>
                  <div>
                    <strong className="text-sm font-bold text-[#123047]">APPLY TOURNIQUET FOR LIMBS:</strong>
                    <p className="text-xs text-[#425466] mt-0.5">
                      If arm or leg bleeding does not stop, wrap tourniquet 2–3 inches above wound (never on joint). Turn windlass rod until bleeding ceases.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-lg bg-slate-50 border border-slate-200">
                  <span className="w-7 h-7 rounded-full bg-[#C62828] text-white font-black text-xs flex items-center justify-center shrink-0">
                    3
                  </span>
                  <div>
                    <strong className="text-sm font-bold text-[#123047]">WRITE TIME ON FOREHEAD:</strong>
                    <p className="text-xs text-[#425466] mt-0.5">
                      Record exact time tourniquet was tightened (e.g. &ldquo;T 08:45&rdquo;). Never loosen it once applied.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <span className="text-xs text-[#425466] font-medium">
            Emergency Services: Dial 911 / 112 directly
          </span>
          <button
            onClick={handleClose}
            className="px-4 py-2 bg-[#123047] hover:bg-[#087F8C] text-white text-xs font-bold rounded-lg transition-colors cursor-pointer"
          >
            Exit Crisis Mode
          </button>
        </div>
      </div>
    </div>
  );
};
