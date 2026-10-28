/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ProtocolStep {
  stepNumber: number;
  actionVerb: string;
  instruction: string;
  clinicalNote?: string;
  isUrgent?: boolean;
}

export type EmergencyCategory = 'cardiac' | 'stroke' | 'respiratory' | 'trauma' | 'all';

export interface EmergencyProtocol {
  id: string;
  title: string;
  category: EmergencyCategory;
  urgencyLevel: 'immediate' | 'urgent' | 'high';
  estimatedTime: string;
  summary: string;
  immediateAction: string;
  contraindications: string[];
  steps: ProtocolStep[];
  callDispatcherPrompt: string;
}

export interface VitalSign {
  id: string;
  name: string;
  abbreviation: string;
  unit: string;
  minVal: number;
  maxVal: number;
  normalMin: number;
  normalMax: number;
  defaultVal: number;
  description: string;
  clinicalImplicationLow: string;
  clinicalImplicationHigh: string;
}

export interface QuizQuestion {
  id: string;
  scenario: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  category: string;
}
