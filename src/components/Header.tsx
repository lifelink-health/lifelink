/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { AlertCircle, Menu, X, ShieldAlert } from 'lucide-react';

interface HeaderProps {
  onOpenEmergency: () => void;
  activeSection: string;
  onNavigate: (section: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenEmergency,
  activeSection,
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'protocols', label: 'Emergency Protocols' },
    { id: 'fast', label: 'FAST Stroke Triage' },
    { id: 'vitals', label: 'Vital Signs Lab' },
    { id: 'quiz', label: 'Exhibition Quiz' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E1E8ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4 md:gap-8">
        {/* Zone 1: Brand Wordmark (single clean element) */}
        <div className="flex items-center gap-2.5 shrink-0">
          <div className="w-8 h-8 rounded-lg bg-[#087F8C] flex items-center justify-center text-white shadow-xs">
            <span className="font-bold text-sm tracking-tight">V</span>
          </div>
          <button
            onClick={() => handleNavClick('protocols')}
            className="text-left font-extrabold text-lg sm:text-xl tracking-tight text-[#123047] hover:text-[#087F8C] transition-colors whitespace-nowrap cursor-pointer"
          >
            Vitalis <span className="font-semibold text-sm sm:text-base text-[#46617A]">Exhibition</span>
          </button>
        </div>

        {/* Zone 2: Navigation Links (single-line, clean unboxed typography) */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-[#425466]">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`transition-colors whitespace-nowrap cursor-pointer hover:text-[#087F8C] pb-0.5 ${
                activeSection === item.id
                  ? 'text-[#087F8C] border-b-2 border-[#087F8C]'
                  : 'text-[#425466]'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Zone 3: Primary Action (Emergency Mode Trigger) & Mobile Toggle */}
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            onClick={onOpenEmergency}
            className="flex items-center gap-2 px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-bold text-white bg-[#C62828] hover:bg-[#A82222] rounded-lg transition-all shadow-xs cursor-pointer active:scale-98 whitespace-nowrap"
            title="Launch immediate emergency protocols"
          >
            <ShieldAlert className="w-4 h-4 shrink-0 text-white animate-pulse" />
            <span>EMERGENCY MODE</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#123047] hover:bg-[#E8F7F6] rounded-lg transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#E1E8ED] px-4 py-3 space-y-1 animate-in fade-in slide-in-from-top-2 duration-150">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                activeSection === item.id
                  ? 'bg-[#E8F7F6] text-[#087F8C] font-semibold'
                  : 'text-[#123047] hover:bg-slate-50'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-[#425466] px-1">
            <span>Life Threatening Emergency?</span>
            <a
              href="tel:911"
              className="text-[#C62828] font-bold underline flex items-center gap-1"
            >
              <AlertCircle className="w-3.5 h-3.5" /> Call 911 Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
