import React from 'react';
import type { Language } from '../data/translations';
import { translations } from '../data/translations';
import { Button } from './ui/button';
import { Moon, Sun, Terminal as TerminalIcon, Sparkles } from 'lucide-react';
import { FlagIR, FlagGB, FlagKU, FlagDE } from './Flags';

interface NavbarProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  isDark: boolean;
  onThemeToggle: () => void;
  onOpenTerminal?: () => void;
}

const languages: { code: Language; label: string; flag: React.ReactNode }[] = [
  { code: 'fa', label: 'فارسی', flag: <FlagIR className="w-5 h-3.5" /> },
  { code: 'en', label: 'EN', flag: <FlagGB className="w-5 h-3.5" /> },
  { code: 'ku', label: 'کوردی', flag: <FlagKU className="w-5 h-3.5" /> },
  { code: 'de', label: 'DE', flag: <FlagDE className="w-5 h-3.5" /> },
];

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onLanguageChange,
  isDark,
  onThemeToggle,
  onOpenTerminal,
}) => {
  const t = translations[currentLang];
  const [langMenuOpen, setLangMenuOpen] = React.useState(false);

  const navLinks = [
    { href: '#about', label: t.nav.about },
    { href: '#projects', label: t.nav.projects },
    { href: '#skills', label: t.nav.skills },
    { href: '#experience', label: t.nav.experience },
    { href: '#contact', label: t.nav.contact },
  ];

  const currentFlag = languages.find((l) => l.code === currentLang)?.flag;

  return (
    <header className="fixed top-0 inset-x-0 z-40 px-4 sm:px-8 py-3.5 transition-all">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 py-2.5 rounded-2xl glass-card backdrop-blur-xl border border-slate-200/80 dark:border-white/[0.08] shadow-lg shadow-slate-200/50 dark:shadow-black/10">
        
        {/* Brand / Logo with user's avatar image */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl overflow-hidden border border-teal-500/30 group-hover:border-teal-400/60 shadow-xs transition-all shrink-0 bg-teal-500/10">
            <img
              src="/images/avatar.jpg"
              alt={t.hero.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://luximo.ir/uploads/temp/file-1767555661255-962976188.jpg';
              }}
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-slate-900 dark:text-slate-100 group-hover:text-teal-600 dark:group-hover:text-teal-300 transition-colors">
              {t.hero.name}
            </span>
            <span className="text-[10px] text-teal-600 dark:text-teal-400/90 font-medium flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              LUXIMO Co-Founder
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 sm:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3.5 py-1.5 rounded-xl text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-300 hover:bg-slate-100 dark:hover:bg-white/[0.04] transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions & Utilities */}
        <div className="flex items-center gap-2">
          
          {/* Terminal Toggle Button */}
          {onOpenTerminal && (
            <Button
              variant="ghost"
              size="icon"
              onClick={onOpenTerminal}
              title="Terminal Console"
              className="w-9 h-9 text-slate-600 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-300"
            >
              <TerminalIcon className="w-4 h-4" />
            </Button>
          )}

          {/* Theme Switcher */}
          <Button
            variant="ghost"
            size="icon"
            onClick={onThemeToggle}
            aria-label="Toggle Theme"
            className="w-9 h-9 text-slate-600 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-300"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </Button>

          {/* Language Selector Dropdown */}
          <div className="relative">
            <button
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-white/[0.05] hover:bg-slate-200/70 dark:hover:bg-white/[0.1] border border-slate-200 dark:border-white/[0.08] text-slate-700 dark:text-slate-200 transition-all cursor-pointer shadow-xs"
            >
              <span className="shrink-0">{currentFlag}</span>
              <span className="uppercase font-mono font-bold">{currentLang}</span>
            </button>

            {langMenuOpen && (
              <div 
                className="absolute top-full mt-2 end-0 w-40 rounded-2xl p-1.5 glass-card border border-slate-200 dark:border-white/10 shadow-2xl z-50 backdrop-blur-2xl animate-in fade-in zoom-in-95 duration-150"
                onClick={() => setLangMenuOpen(false)}
              >
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => onLanguageChange(lang.code)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-all ${
                      currentLang === lang.code
                        ? 'bg-teal-500/15 text-teal-700 dark:text-teal-300 font-bold border border-teal-500/25'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/[0.06] hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    <span>{lang.label}</span>
                    <span className="shrink-0">{lang.flag}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Contact CTA */}
          <a href="#contact" className="hidden sm:inline-block">
            <Button variant="serene" size="sm" className="gap-1.5 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.nav.contact}</span>
            </Button>
          </a>

        </div>
      </div>
    </header>
  );
};
