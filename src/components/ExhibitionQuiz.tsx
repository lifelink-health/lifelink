/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { QuizQuestion } from '../types';
import { CheckCircle2, XCircle, Award, RotateCcw, ArrowRight } from 'lucide-react';

interface ExhibitionQuizProps {
  questions: QuizQuestion[];
}

export const ExhibitionQuiz: React.FC<ExhibitionQuizProps> = ({ questions }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showSummary, setShowSummary] = useState(false);

  const currentQ = questions[currentIndex];
  const selectedOption = selectedAnswers[currentIndex];
  const isAnswered = selectedOption !== undefined;
  const isCorrect = isAnswered && selectedOption === currentQ.correctIndex;

  const handleSelectOption = (idx: number) => {
    if (isAnswered) return;
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentIndex]: idx,
    }));
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setShowSummary(true);
    }
  };

  const handleRestart = () => {
    setSelectedAnswers({});
    setCurrentIndex(0);
    setShowSummary(false);
  };

  const totalScore = Object.entries(selectedAnswers).reduce((acc, [qIdx, ansIdx]) => {
    return acc + (ansIdx === questions[Number(qIdx)].correctIndex ? 1 : 0);
  }, 0);

  return (
    <div className="bg-white rounded-xl border border-[#E1E8ED] p-5 sm:p-6 shadow-xs">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#E1E8ED]">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-[#087F8C] uppercase tracking-wide">
              School Assessment Kiosk
            </span>
            <span className="text-slate-300">·</span>
            <span className="text-xs text-[#425466]">Public Health Literacy Challenge</span>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-[#123047] mt-0.5">
            Emergency Preparedness & First-Aid Challenge
          </h3>
        </div>

        <span className="text-xs font-semibold text-[#123047]">
          Question {currentIndex + 1} of {questions.length}
        </span>
      </div>

      {showSummary ? (
        /* Summary View */
        <div className="py-8 text-center space-y-4 max-w-md mx-auto">
          <div className="w-16 h-16 rounded-full bg-[#E8F7F6] text-[#087F8C] mx-auto flex items-center justify-center">
            <Award className="w-8 h-8" />
          </div>

          <h4 className="text-2xl font-bold text-[#123047]">Assessment Completed!</h4>
          <p className="text-sm text-[#425466]">
            You scored <strong className="text-[#087F8C]">{totalScore}</strong> out of{' '}
            <strong>{questions.length}</strong> on the public health emergency readiness assessment.
          </p>

          <div className="p-4 rounded-lg bg-[#F7FAFC] border border-[#E1E8ED] text-xs text-[#425466]">
            {totalScore === questions.length ? (
              <span className="text-[#23845B] font-semibold">
                Outstanding! You have mastered critical clinical response steps for cardiac arrest, stroke, and trauma.
              </span>
            ) : (
              <span>
                Great effort! Review the protocol steps and FAST guidelines above to refresh key life-saving timings.
              </span>
            )}
          </div>

          <button
            onClick={handleRestart}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#087F8C] hover:bg-[#066772] text-white text-xs font-bold transition-colors cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" /> Retake Assessment
          </button>
        </div>
      ) : (
        /* Question View */
        <div className="mt-6 space-y-5">
          {/* Scenario prompt card */}
          <div className="p-4 rounded-lg bg-[#F7FAFC] border border-[#E1E8ED]">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#087F8C] block mb-1">
              Clinical Scenario ({currentQ.category}):
            </span>
            <p className="text-sm text-[#123047] font-medium leading-relaxed">
              &ldquo;{currentQ.scenario}&rdquo;
            </p>
          </div>

          <h4 className="text-base font-bold text-[#123047]">{currentQ.question}</h4>

          {/* Options */}
          <div className="space-y-2.5">
            {currentQ.options.map((option, idx) => {
              let btnClass = 'bg-white border-[#E1E8ED] text-[#425466] hover:bg-slate-50';

              if (isAnswered) {
                if (idx === currentQ.correctIndex) {
                  btnClass = 'bg-[#E8F5E9] border-[#23845B] text-[#23845B] font-semibold';
                } else if (idx === selectedOption) {
                  btnClass = 'bg-[#FFEBEE] border-[#C62828] text-[#C62828] font-semibold';
                } else {
                  btnClass = 'bg-white border-slate-200 text-slate-400 opacity-60';
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(idx)}
                  disabled={isAnswered}
                  className={`w-full text-left p-3.5 rounded-lg border text-xs sm:text-sm transition-all flex items-start gap-3 cursor-pointer ${btnClass}`}
                >
                  <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span className="flex-1 leading-snug">{option}</span>
                  {isAnswered && idx === currentQ.correctIndex && (
                    <CheckCircle2 className="w-4 h-4 text-[#23845B] shrink-0 mt-0.5" />
                  )}
                  {isAnswered && idx === selectedOption && idx !== currentQ.correctIndex && (
                    <XCircle className="w-4 h-4 text-[#C62828] shrink-0 mt-0.5" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanation Box */}
          {isAnswered && (
            <div
              className={`p-4 rounded-lg border text-xs leading-relaxed animate-in fade-in duration-150 ${
                isCorrect
                  ? 'bg-[#E8F5E9] border-[#23845B] text-[#123047]'
                  : 'bg-[#FFEBEE] border-[#C62828] text-[#123047]'
              }`}
            >
              <div className="font-bold mb-1 flex items-center gap-1.5">
                {isCorrect ? (
                  <span className="text-[#23845B]">Correct Protocol Action</span>
                ) : (
                  <span className="text-[#C62828]">Incorrect Choice</span>
                )}
              </div>
              <p>{currentQ.explanation}</p>
            </div>
          )}

          {/* Next Button */}
          {isAnswered && (
            <div className="flex justify-end pt-2">
              <button
                onClick={handleNext}
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#123047] hover:bg-[#087F8C] text-white text-xs font-bold transition-colors cursor-pointer"
              >
                <span>{currentIndex < questions.length - 1 ? 'Next Question' : 'See Results'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
