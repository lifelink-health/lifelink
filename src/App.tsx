/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PageId, LanguageCode } from './types/lifelink';
import { Navbar } from './components/Navbar';
import { HomePage } from './components/HomePage';
import { FirstAidPage } from './components/FirstAidPage';
import { EmergencyPrepPage } from './components/EmergencyPrepPage';
import { HealthAwarenessPage } from './components/HealthAwarenessPage';
import { LanguagePage } from './components/LanguagePage';
import { TrustedResourcesPage } from './components/TrustedResourcesPage';
import { AboutPage } from './components/AboutPage';
import { SearchModal } from './components/SearchModal';
import { Footer } from './components/Footer';
import { PhoneCall } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [selectedFirstAidTopicId, setSelectedFirstAidTopicId] = useState<string>('minor-cuts');
  const [language, setLanguage] = useState<LanguageCode>('en');
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenTopic = (topicId: string) => {
    setSelectedFirstAidTopicId(topicId);
    setCurrentPage('first-aid');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearchNavigate = (page: PageId, topicId?: string) => {
    if (page === 'first-aid' && topicId) {
      setSelectedFirstAidTopicId(topicId);
    }
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleLanguage = (lang: LanguageCode) => {
    setLanguage(lang);
  };

  return (
    <div className="min-h-screen bg-[#F7FAFC] flex flex-col font-sans text-[#123047] selection:bg-[#E8F7F6] selection:text-[#087F8C]">
      {/* Top Navbar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        language={language}
        onToggleLanguage={handleToggleLanguage}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Main Content Area rendering the active Page */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenTopic={handleOpenTopic}
            language={language}
            onToggleLanguage={handleToggleLanguage}
            onOpenSearch={() => setIsSearchOpen(true)}
          />
        )}

        {currentPage === 'first-aid' && (
          <FirstAidPage
            initialTopicId={selectedFirstAidTopicId}
            language={language}
          />
        )}

        {currentPage === 'emergency-prep' && (
          <EmergencyPrepPage language={language} />
        )}

        {currentPage === 'health-awareness' && (
          <HealthAwarenessPage language={language} />
        )}

        {currentPage === 'language' && (
          <LanguagePage
            currentLanguage={language}
            onSelectLanguage={handleToggleLanguage}
          />
        )}

        {currentPage === 'trusted-resources' && (
          <TrustedResourcesPage />
        )}

        {currentPage === 'about' && (
          <AboutPage />
        )}
      </main>

      {/* Floating Call Button on Mobile for Quick 1-Touch Access */}
      <div className="fixed bottom-4 right-4 z-30 sm:hidden">
        <a
          href="tel:112"
          className="flex items-center gap-2 bg-[#C62828] text-white py-3 px-4 rounded-full font-black text-xs shadow-xl active:scale-95"
          title="Emergency Speed Dial"
        >
          <PhoneCall className="w-4 h-4 animate-pulse" />
          <span>CALL 112</span>
        </a>
      </div>

      {/* Interactive Global Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigateToTopic={handleSearchNavigate}
      />

      {/* Safety Disclaimer Footer */}
      <Footer
        onNavigate={handleNavigate}
        language={language}
        onToggleLanguage={handleToggleLanguage}
      />
    </div>
  );
}
