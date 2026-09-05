import React from 'react';
import type { Language } from '../data/translations';
import { translations } from '../data/translations';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ArrowDown, Send, ExternalLink } from 'lucide-react';
import { GithubIcon, TelegramIcon } from './Icons';

interface HeroSectionProps {
  currentLang: Language;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center items-center pt-28 pb-16 px-4 sm:px-8 overflow-hidden">
      
      {/* Serene Ambient Glow Elements */}
      <div className="ambient-glow-teal top-16 -start-24 w-[420px] h-[420px] opacity-10 dark:opacity-20"></div>
      <div className="ambient-glow-emerald bottom-10 -end-24 w-[460px] h-[460px] opacity-10 dark:opacity-15"></div>

      <div className="max-w-4xl mx-auto w-full text-center relative z-10">
        
        {/* Status Badge */}
        <div className="inline-flex items-center justify-center mb-6">
          <Badge
            variant="teal"
            className="px-4 py-1.5 rounded-full text-xs font-medium gap-2 border border-teal-500/30 bg-teal-500/10 backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-teal-700 dark:text-teal-200">{t.hero.statusBadge}</span>
          </Badge>
        </div>

        {/* Profile Avatar with Serene Halo */}
        <div className="relative inline-block mb-7 group">
          <div className="absolute -inset-1.5 bg-gradient-to-tr from-teal-500/40 to-emerald-500/30 rounded-full blur-lg opacity-40 group-hover:opacity-75 transition duration-700"></div>
          <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden border-2 border-slate-200 dark:border-white/20 shadow-2xl bg-slate-100 dark:bg-slate-900 mx-auto">
            <img
              src="/images/avatar.jpg"
              alt={t.hero.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              onError={(e) => {
                // Fallback if local image has an issue
                (e.target as HTMLImageElement).src = 'https://luximo.ir/uploads/temp/file-1767555661255-962976188.jpg';
              }}
            />
          </div>
        </div>

        {/* Name and Role */}
        <div className="space-y-2 mb-5">
          <h2 className="text-xs sm:text-sm font-semibold tracking-widest text-teal-600 dark:text-teal-400 uppercase">
            {t.hero.greeting}
          </h2>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-white">
            {t.hero.name}
          </h1>
          <p className="text-base sm:text-lg font-medium text-slate-700 dark:text-slate-300 max-w-xl mx-auto">
            {t.hero.role}
          </p>
        </div>

        {/* Headline & Subheadline */}
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto mb-8">
          {t.hero.subheadline}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mb-14">
          <a href="#projects">
            <Button size="lg" className="rounded-2xl gap-2 font-semibold bg-teal-600 hover:bg-teal-500 text-white shadow-lg shadow-teal-900/30">
              <span>{t.hero.ctaProjects}</span>
              <ArrowDown className="w-4 h-4" />
            </Button>
          </a>
          
          <a href="#contact">
            <Button variant="outline" size="lg" className="rounded-2xl gap-2 font-semibold">
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

        {/* Live Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto">
          <div className="glass-card p-4 rounded-2xl border border-slate-200/80 dark:border-white/[0.06] text-center">
            <div className="text-2xl sm:text-3xl font-black text-teal-600 dark:text-teal-300 font-mono">
              {t.hero.stats.uptime}
            </div>
            <div className="text-xs text-slate-600 dark:text-slate-400 mt-1 font-medium">
              {t.hero.stats.uptimeLabel}
            </div>
          </div>

          <div className="glass-card p-4 rounded-2xl border border-slate-200/80 dark:border-white/[0.06] text-center">
            <div className="text-2xl sm:text-3xl font-black text-emerald-600 dark:text-emerald-300 font-mono">
              {t.hero.stats.users}
            </div>
            <div className="text-xs text-slate-600 dark:text-slate-400 mt-1 font-medium">
              {t.hero.stats.usersLabel}
            </div>
          </div>

          <div className="glass-card p-4 rounded-2xl border border-slate-200/80 dark:border-white/[0.06] text-center">
            <div className="text-2xl sm:text-3xl font-black text-teal-600 dark:text-teal-300 font-mono">
              {t.hero.stats.latency}
            </div>
            <div className="text-xs text-slate-600 dark:text-slate-400 mt-1 font-medium">
              {t.hero.stats.latencyLabel}
            </div>
          </div>

          <div className="glass-card p-4 rounded-2xl border border-slate-200/80 dark:border-white/[0.06] text-center">
            <div className="text-2xl sm:text-3xl font-black text-emerald-600 dark:text-emerald-300 font-mono">
              {t.hero.stats.years}
            </div>
            <div className="text-xs text-slate-600 dark:text-slate-400 mt-1 font-medium">
              {t.hero.stats.yearsLabel}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
