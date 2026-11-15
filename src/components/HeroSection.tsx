import React from 'react';
import type { Language } from '../data/translations';
import { translations } from '../data/translations';
import { Button } from './ui/button';
import { ArrowDown, Send, ExternalLink } from 'lucide-react';
import { GithubIcon, TelegramIcon } from './Icons';

interface HeroSectionProps {
  currentLang: Language;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center items-center pt-28 pb-16 px-4 sm:px-8 overflow-hidden">
      <div className="max-w-4xl mx-auto w-full text-center relative z-10">
        
        {/* Profile Avatar */}
        <div className="relative inline-block mb-6 group">
          <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-slate-200 dark:border-white/15 shadow-xl bg-slate-100 dark:bg-slate-900 mx-auto">
            <img
              src="/images/avatar.jpg"
              alt={t.hero.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://luximo.ir/uploads/temp/file-1767555661255-962976188.jpg';
              }}
            />
          </div>
        </div>

        {/* Name and Role */}
        <div className="space-y-2 mb-4">
          <h2 className="text-xs sm:text-sm font-semibold tracking-wider text-teal-600 dark:text-teal-400 uppercase">
            {t.hero.greeting}
          </h2>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
            {t.hero.name}
          </h1>
          <p className="text-sm sm:text-base font-medium text-slate-700 dark:text-slate-300 max-w-xl mx-auto">
            {t.hero.role}
          </p>
        </div>

        {/* Headline & Subheadline */}
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto mb-8">
          {t.hero.subheadline}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mb-12">
          <a href="#projects">
            <Button size="lg" className="rounded-xl gap-2 font-semibold bg-teal-600 hover:bg-teal-500 text-white shadow-md">
              <span>{t.hero.ctaProjects}</span>
              <ArrowDown className="w-4 h-4" />
            </Button>
          </a>
          
          <a href="#contact">
            <Button variant="outline" size="lg" className="rounded-xl gap-2 font-semibold">
              <span>{t.hero.ctaContact}</span>
              <Send className="w-4 h-4 text-teal-600 dark:text-teal-400" />
            </Button>
          </a>

          {/* Social Quick Icons */}
          <div className="flex items-center gap-1.5 ps-2 border-s border-slate-200 dark:border-white/10">
            <a
              href="https://github.com/erm-iya"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-teal-500/40 transition-all"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://t.me/erm_iya_h"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-300 hover:border-teal-500/40 transition-all"
              title="Telegram"
            >
              <TelegramIcon className="w-4 h-4" />
            </a>
            <a
              href="https://luximo.ir"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-300 hover:border-emerald-500/40 transition-all"
              title="LUXIMO"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Current Projects & Live Deployments */}
        <div className="w-full max-w-3xl mx-auto text-start">
          <div className="flex items-center gap-2 mb-3 px-1">
            <span className="w-2 h-2 rounded-full bg-teal-500"></span>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">
              {t.hero.activeWorkTitle}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {/* LUXIMO */}
            <a
              href="https://luximo.ir"
              target="_blank"
              rel="noreferrer"
              className="glass-card p-4 rounded-2xl border border-slate-200/80 dark:border-white/[0.08] hover:border-teal-500/40 transition-all flex items-start gap-3.5 group text-start"
            >
              <div className="w-12 h-12 rounded-xl overflow-hidden bg-slate-900 border border-slate-700/50 shrink-0 p-1 flex items-center justify-center">
                <img src="/images/luximo.png" alt="LUXIMO" className="w-full h-full object-contain" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-1 mb-1">
                  <span className="text-sm font-bold text-slate-900 dark:text-slate-100 group-hover:text-teal-600 dark:group-hover:text-teal-300 transition-colors truncate">
                    {t.hero.luximoTitle}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-500/15 border border-emerald-500/25 px-2 py-0.5 rounded-full shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    {t.hero.luximoBadge}
                  </span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                  {t.hero.luximoDesc}
                </p>
              </div>
            </a>

            {/* Darvish Khan */}
            <div className="glass-card p-4 rounded-2xl border border-slate-200/80 dark:border-white/[0.08] flex items-start gap-3.5 text-start">
              <div className="w-12 h-12 rounded-xl overflow-hidden bg-slate-900 border border-slate-700/50 shrink-0 p-1 flex items-center justify-center">
                <img src="/images/darvishkhan_sanandaj.png" alt="Darvish Khan" className="w-full h-full object-contain" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-1 mb-1">
                  <span className="text-sm font-bold text-slate-900 dark:text-slate-100 truncate">
                    {t.hero.darvishkhanTitle}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-amber-700 dark:text-amber-300 bg-amber-500/15 border border-amber-500/25 px-2 py-0.5 rounded-full shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                    {t.hero.darvishkhanBadge}
                  </span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                  {t.hero.darvishkhanDesc}
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
