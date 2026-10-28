/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { PageId } from '../types/lifelink';
import { FIRST_AID_TOPICS, HEALTH_AWARENESS_TOPICS } from '../data/lifelinkData';
import { Search, X, ArrowRight, BookOpen, ShieldCheck, HeartPulse } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToTopic: (page: PageId, topicId?: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onNavigateToTopic,
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // Aggregate searchable items
  const allSearchable = [
    ...FIRST_AID_TOPICS.map((t) => ({
      id: t.id,
      title: t.title,
      category: 'First-Aid Guide',
      page: 'first-aid' as PageId,
      preview: t.summary,
    })),
    ...HEALTH_AWARENESS_TOPICS.map((h) => ({
      id: h.id,
      title: h.title,
      category: 'Health Awareness',
      page: 'health-awareness' as PageId,
      preview: h.tagline,
    })),
    {
      id: 'emergency-supplies',
      title: 'First-Aid Kit Supply Checklist',
      category: 'Emergency Preparedness',
      page: 'emergency-prep' as PageId,
      preview: 'Checklist of essential items to keep in home and school first-aid kits.',
    },
    {
      id: 'emergency-contacts',
      title: 'Emergency Contact List Template',
      category: 'Emergency Preparedness',
      page: 'emergency-prep' as PageId,
      preview: 'Printable emergency numbers card for family and school records.',
    },
    {
      id: 'natural-disasters',
      title: 'Natural Disaster Safety (Earthquake, Floods)',
      category: 'Emergency Preparedness',
      page: 'emergency-prep' as PageId,
      preview: 'Safety steps to take during earthquakes, storms, and floods.',
    },
    {
      id: 'trusted-resources',
      title: 'Verified Public Health Authorities (WHO, Red Cross, MoHFW)',
      category: 'Trusted Resources',
      page: 'trusted-resources' as PageId,
      preview: 'Official verified links to national and international health agencies.',
    },
    {
      id: 'about-lifelink',
      title: 'About the LifeLink School Science Exhibition Project',
      category: 'Project Overview',
      page: 'about' as PageId,
      preview: 'Project problem, objectives, technology demonstration, and ethics.',
    },
  ];

  const results = query.trim() === ''
    ? allSearchable.slice(0, 5)
    : allSearchable.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.category.toLowerCase().includes(query.toLowerCase()) ||
          item.preview.toLowerCase().includes(query.toLowerCase())
      );

  const handleSelect = (page: PageId, topicId: string) => {
    onNavigateToTopic(page, topicId);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#123047]/60 backdrop-blur-xs flex items-start justify-center p-4 sm:p-6 pt-16 sm:pt-20 animate-in fade-in duration-150">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-xl border border-[#E1E8ED] overflow-hidden flex flex-col max-h-[80vh]">
        {/* Search Input Bar */}
        <div className="p-4 border-b border-[#E1E8ED] flex items-center gap-3 bg-slate-50">
          <Search className="w-5 h-5 text-[#087F8C] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search educational topics (e.g. cuts, burns, choking, hydration, kit)..."
            className="flex-1 bg-transparent border-none text-[#123047] placeholder-[#425466]/70 text-sm sm:text-base focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-slate-400 hover:text-slate-600 p-1 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs font-bold text-[#425466] hover:text-[#123047] px-2 py-1 bg-white border border-[#E1E8ED] rounded-md cursor-pointer"
          >
            ESC
          </button>
        </div>

        {/* Results List */}
        <div className="p-3 overflow-y-auto divide-y divide-slate-100 flex-1">
          <div className="px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-[#46617A]">
            {query.trim() === '' ? 'Suggested Educational Guides' : `Found ${results.length} topics`}
          </div>

          {results.length === 0 ? (
            <div className="p-8 text-center text-sm text-[#425466]">
              No educational topics found matching &ldquo;{query}&rdquo;. Try searching for cuts, burns, hydration, or first aid.
            </div>
          ) : (
            results.map((item) => (
              <button
                key={item.id}
                onClick={() => handleSelect(item.page, item.id)}
                className="w-full text-left p-3.5 hover:bg-[#F7FAFC] rounded-xl transition-colors flex items-start justify-between gap-3 group cursor-pointer"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded bg-[#E8F7F6] text-[#087F8C]">
                      {item.category}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-[#123047] group-hover:text-[#087F8C] transition-colors mt-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#425466] mt-0.5 line-clamp-1">
                    {item.preview}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-[#087F8C] group-hover:translate-x-1 transition-all shrink-0 mt-2" />
              </button>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-3 bg-slate-50 border-t border-[#E1E8ED] text-xs text-[#425466] flex items-center justify-between">
          <span>LifeLink Science Exhibition Search</span>
          <span className="text-[11px] text-slate-400">Press ESC to close</span>
        </div>
      </div>
    </div>
  );
};
