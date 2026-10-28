/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export class AudioMetronome {
  private audioCtx: AudioContext | null = null;
  private isRunning: boolean = false;
  private timerId: number | null = null;
  private bpm: number = 110;
  private tickCallback: ((count: number) => void) | null = null;
  private currentBeat: number = 0;

  constructor(initialBpm: number = 110) {
    this.bpm = initialBpm;
  }

  private initAudio() {
    if (!this.audioCtx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.audioCtx = new AudioCtx();
    }
    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  public setBpm(newBpm: number) {
    this.bpm = Math.max(80, Math.min(140, newBpm));
    if (this.isRunning) {
      this.stop();
      this.start(this.tickCallback || undefined);
    }
  }

  public getBpm(): number {
    return this.bpm;
  }

  public getIsRunning(): boolean {
    return this.isRunning;
  }

  private playClick(isFirstInCycle: boolean) {
    try {
      this.initAudio();
      if (!this.audioCtx) return;

      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = 'sine';
      // Pitch higher on the 1st or every 30th beat
      osc.frequency.setValueAtTime(isFirstInCycle ? 880 : 660, this.audioCtx.currentTime);

      gain.gain.setValueAtTime(0.3, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 0.05);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start(this.audioCtx.currentTime);
      osc.stop(this.audioCtx.currentTime + 0.05);
    } catch {
      // Audio fallback silent handling
    }
  }

  public start(callback?: (count: number) => void) {
    if (this.isRunning) return;
    this.initAudio();
    this.isRunning = true;
    if (callback) this.tickCallback = callback;

    const intervalMs = (60 / this.bpm) * 1000;
    this.currentBeat = 0;

    const tick = () => {
      if (!this.isRunning) return;
      this.currentBeat += 1;
      const isFirst = (this.currentBeat % 30) === 1;
      this.playClick(isFirst);
      if (this.tickCallback) {
        this.tickCallback(this.currentBeat);
      }
      this.timerId = window.setTimeout(tick, intervalMs);
    };

    tick();
  }

  public stop() {
    this.isRunning = false;
    if (this.timerId !== null) {
      clearTimeout(this.timerId);
      this.timerId = null;
    }
  }

  public resetCount() {
    this.currentBeat = 0;
  }
}
