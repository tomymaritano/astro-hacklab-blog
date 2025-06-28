import { languages, type Language, getLocalizedUrl } from '../lib/i18n';

interface LanguageSwitcherProps {
  currentLang: Language;
  currentPath: string;
}

export default function LanguageSwitcher({ currentLang, currentPath }: LanguageSwitcherProps) {
  return (
    <div className="relative group">
      <button className="flex items-center space-x-2 px-3 py-2 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors">
        <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
          {languages[currentLang]}
        </span>
        <svg
          className="w-4 h-4 text-zinc-500 group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors"
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

      <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
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
    </div>
  );
}
