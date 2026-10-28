/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PageId, LanguageCode } from '../types/lifelink';
import { LIFELINK_UI_TRANSLATIONS } from '../data/lifelinkData';
import { HeartPulse, Search, Globe, Menu, X, PhoneCall } from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  language: LanguageCode;
  onToggleLanguage: (lang: LanguageCode) => void;
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  language,
  onToggleLanguage,
  onOpenSearch,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = LIFELINK_UI_TRANSLATIONS[language];

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: t.nav.home },
    { id: 'first-aid', label: t.nav.firstAid },
    { id: 'emergency-prep', label: t.nav.emergencyPrep },
    { id: 'health-awareness', label: t.nav.healthAwareness },
    { id: 'trusted-resources', label: t.nav.trustedResources },
    { id: 'about', label: t.nav.about },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-[#E1E8ED] shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          {/* Brand Logo & Tagline */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left cursor-pointer group shrink-0"
          >
            <div className="w-11 h-11 rounded-xl bg-[#087F8C] flex items-center justify-center text-white shadow-xs group-hover:bg-[#066772] transition-colors">
              <HeartPulse className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-2xl font-extrabold text-[#123047] tracking-tight">
                  LifeLink
                </span>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#E8F7F6] text-[#087F8C]">
                  PROTOTYPE
                </span>
              </div>
              <p className="text-[11px] font-medium text-[#46617A] tracking-normal -mt-0.5">
                Connecting People. Protecting Lives.
              </p>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-5 text-sm font-semibold text-[#425466]">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`transition-colors whitespace-nowrap cursor-pointer py-1 ${
                  currentPage === link.id
                    ? 'text-[#087F8C] border-b-2 border-[#087F8C] font-bold'
                    : 'hover:text-[#123047]'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Controls: Search, Language Switcher, Emergency Call */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Search Trigger */}
            <button
              onClick={onOpenSearch}
              className="p-2 sm:px-3 sm:py-2 rounded-lg border border-[#E1E8ED] text-[#425466] hover:text-[#123047] hover:border-slate-300 bg-white flex items-center gap-2 text-xs font-semibold cursor-pointer transition-colors"
              title="Search topics"
              aria-label="Search topics"
            >
              <Search className="w-4 h-4 text-[#087F8C]" />
              <span className="hidden md:inline">Search Guides</span>
            </button>

            {/* Language Selection Quick Switcher */}
            <button
              onClick={() => onToggleLanguage(language === 'en' ? 'ta' : 'en')}
              className="px-2.5 py-1.5 rounded-lg border border-[#087F8C]/40 bg-[#E8F7F6] text-[#087F8C] hover:bg-[#D4EFEB] flex items-center gap-1.5 text-xs font-bold transition-all cursor-pointer"
              title="Toggle English / தமிழ்"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{language === 'en' ? 'தமிழ்' : 'English'}</span>
            </button>

            {/* Emergency Speed Dial Button */}
            <a
              href="tel:112"
              className="flex items-center gap-1.5 px-3 py-2 bg-[#C62828] hover:bg-[#A82222] text-white rounded-lg text-xs font-bold transition-all shadow-xs shrink-0 cursor-pointer"
              title="Direct call emergency 112"
            >
              <PhoneCall className="w-3.5 h-3.5 shrink-0 animate-pulse" />
              <span className="hidden sm:inline">112 / 911</span>
            </a>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-[#123047] hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-[#E1E8ED] px-4 py-4 space-y-2 animate-in fade-in slide-in-from-top-2 duration-150">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`w-full text-left px-3.5 py-2.5 rounded-lg text-sm font-semibold transition-colors cursor-pointer ${
                currentPage === link.id
                  ? 'bg-[#E8F7F6] text-[#087F8C]'
                  : 'text-[#123047] hover:bg-slate-50'
              }`}
            >
              {link.label}
            </button>
          ))}

          <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-[#425466]">
            <span>Language / மொழி:</span>
            <div className="inline-flex rounded-md border border-[#E1E8ED] p-0.5">
              <button
                onClick={() => onToggleLanguage('en')}
                className={`px-3 py-1 rounded text-xs font-bold cursor-pointer ${
                  language === 'en' ? 'bg-[#087F8C] text-white' : 'text-[#425466]'
                }`}
              >
                English
              </button>
              <button
                onClick={() => onToggleLanguage('ta')}
                className={`px-3 py-1 rounded text-xs font-bold cursor-pointer ${
                  language === 'ta' ? 'bg-[#087F8C] text-white' : 'text-[#425466]'
                }`}
              >
                தமிழ்
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
