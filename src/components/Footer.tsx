import React from 'react';
import type { Language } from '../data/translations';
import { translations } from '../data/translations';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  currentLang: Language;
}

export const Footer: React.FC<FooterProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-4 sm:px-8 border-t border-slate-200 dark:border-white/[0.06] relative">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-start text-xs text-slate-500 dark:text-slate-400">
        
        <div className="flex flex-col gap-1">
          <p className="flex items-center justify-center sm:justify-start gap-1 text-slate-700 dark:text-slate-300 font-medium">
            <span>{t.footer.designedBy}</span>
          </p>
          <p className="text-[11px] text-slate-400 dark:text-slate-500">
            © {new Date().getFullYear()} {t.hero.name}. {t.footer.rights}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://luximo.ir"
            target="_blank"
            rel="noreferrer"
            className="hover:text-teal-600 dark:hover:text-teal-300 transition-colors font-medium text-slate-600 dark:text-slate-400"
          >
            luximo.ir
          </a>

          <button
            onClick={scrollToTop}
            className="w-9 h-9 rounded-xl glass-card border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-teal-500/40 shadow-xs transition-all cursor-pointer"
            title="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
