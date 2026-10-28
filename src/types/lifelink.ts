/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type PageId =
  | 'home'
  | 'first-aid'
  | 'emergency-prep'
  | 'health-awareness'
  | 'language'
  | 'trusted-resources'
  | 'about';

export type LanguageCode = 'en' | 'ta';

export interface FirstAidStep {
  step: number;
  title: string;
  instruction: string;
  importantNote?: string;
}

export interface FirstAidTopic {
  id: string;
  title: string;
  titleTa?: string;
  category: string;
  severity: 'mild' | 'moderate' | 'urgent';
  summary: string;
  summaryTa?: string;
  iconName: string;
  whatToDo: FirstAidStep[];
  whatNotToDo: string[];
  whenToCallEmergency: string[];
  disclaimer: string;
  isFullyTranslatedTa?: boolean;
}

export interface HealthTopic {
  id: string;
  title: string;
  titleTa?: string;
  category: 'hygiene' | 'hydration' | 'habits' | 'safety' | 'prevention';
  tagline: string;
  taglineTa?: string;
  iconName: string;
  keyPractices: {
    title: string;
    description: string;
  }[];
  quickTip: string;
  isFullyTranslatedTa?: boolean;
}

export interface TrustedResource {
  id: string;
  name: string;
  jurisdiction: string;
  category: string;
  description: string;
  url: string;
  verificationBadge: string;
}

export interface SearchResultItem {
  id: string;
  title: string;
  category: string;
  page: PageId;
  previewText: string;
  topicId?: string;
}
