import { useState } from 'react';
import { languages, type Language, getLocalizedUrl } from '../lib/i18n';

interface LanguageSwitcherProps {
  currentLang: Language;
  currentPath: string;
  isMobile?: boolean;
}

export default function LanguageSwitcher({
  currentLang,
  currentPath,
  isMobile = false,
}: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Mobile version: Show as simple language links
  if (isMobile) {
    return (
      <div className="flex flex-col items-center space-y-3">
        <span className="text-sm font-medium text-white/70 uppercase tracking-wider">
          Idioma / Language
        </span>
        <div className="flex space-x-4">
          {(Object.entries(languages) as [Language, string][]).map(([lang, label]) => (
            <a
              key={lang}
              href={getLocalizedUrl(currentPath, lang)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                currentLang === lang
                  ? 'bg-indigo-500 text-white shadow-lg'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    );
  }

  // Desktop version: Dropdown with click for better mobile support
  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors"
      >
        <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
          {languages[currentLang]}
        </span>
        <svg
          className={`w-4 h-4 text-zinc-500 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>

      {isOpen && (
        <>
          {/* Overlay to close dropdown */}
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
            role="button"
            tabIndex={0}
            onKeyDown={e => {
              if (e.key === 'Escape') setIsOpen(false);
            }}
            aria-label="Close language menu"
          />

          {/* Dropdown */}
          <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg shadow-lg z-50">
            <div className="py-1">
              {(Object.entries(languages) as [Language, string][]).map(([lang, label]) => (
                <a
                  key={lang}
                  href={getLocalizedUrl(currentPath, lang)}
                  className={`block px-4 py-2 text-sm hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors ${
                    currentLang === lang
                      ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                      : 'text-zinc-700 dark:text-zinc-300'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <div className="flex items-center justify-between">
                    <span>{label}</span>
                    {currentLang === lang && (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    )}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
