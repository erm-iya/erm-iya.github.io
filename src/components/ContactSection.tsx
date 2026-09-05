import { useState } from 'react';
import type { Language } from '../data/translations';
import { translations } from '../data/translations';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Mail, Send, Phone, Copy, Check, ExternalLink } from 'lucide-react';
import { GithubIcon, InstagramIcon } from './Icons';

interface ContactSectionProps {
  currentLang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ currentLang }) => {
  const t = translations[currentLang];
  const [copied, setCopied] = useState(false);

  const email = 'heidariermiya@gmail.com';
  const phone = '09183820239';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-8 relative">
      
      {/* Ambient Glow */}
      <div className="ambient-glow-teal top-1/2 -start-10 w-[450px] h-[450px] opacity-10 dark:opacity-15"></div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        
        {/* Availability Badge */}
        <div className="inline-flex items-center justify-center mb-4">
          <Badge variant="teal" className="px-3.5 py-1 text-xs gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>{t.contact.availableBadge}</span>
          </Badge>
        </div>

        {/* Section Header */}
        <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white mb-3 tracking-tight">
          {t.contact.title}
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xl mx-auto mb-12">
          {t.contact.subtitle}
        </p>

        {/* Contact Action Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-12 text-start">
          
          {/* Email Quick Card */}
          <div className="glass-card p-6 rounded-3xl border border-slate-200/80 dark:border-white/[0.07] hover:border-teal-500/30 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-2xl bg-teal-500/10 border border-teal-500/20 text-teal-600 dark:text-teal-300 flex items-center justify-center">
                <Mail className="w-6 h-6" />
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={copyEmail}
                className="gap-1.5 text-xs text-slate-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-300"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? t.contact.emailCopied : t.contact.copyEmail}</span>
              </Button>
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">Email</h3>
            <a
              href={`mailto:${email}`}
              className="text-sm font-mono text-slate-700 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-300 transition-colors"
            >
              {email}
            </a>
          </div>

          {/* Telegram Direct Card */}
          <div className="glass-card p-6 rounded-3xl border border-slate-200/80 dark:border-white/[0.07] hover:border-teal-500/30 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-500/20 text-sky-500 dark:text-sky-400 flex items-center justify-center">
                <Send className="w-6 h-6" />
              </div>
              <a href="https://t.me/erm_iya_h" target="_blank" rel="noreferrer">
                <Button variant="ghost" size="sm" className="gap-1.5 text-xs text-slate-500 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-300">
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>{t.contact.telegramDirect}</span>
                </Button>
              </a>
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">Telegram</h3>
            <a
              href="https://t.me/erm_iya_h"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-mono text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-300 transition-colors"
            >
              @erm_iya_h
            </a>
          </div>

        </div>

        {/* Social Pill Links */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://github.com/erm-iya"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-2xl glass-card border border-slate-200 dark:border-white/10 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:border-teal-500/40 shadow-xs transition-all"
          >
            <GithubIcon className="w-4 h-4" />
            <span>{t.contact.githubProfile}</span>
          </a>

          <a
            href="https://www.instagram.com/erm.iya.h"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-2xl glass-card border border-slate-200 dark:border-white/10 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:border-teal-500/40 shadow-xs transition-all"
          >
            <InstagramIcon className="w-4 h-4" />
            <span>{t.contact.instagramProfile}</span>
          </a>

          <a
            href={`tel:${phone}`}
            className="flex items-center gap-2 px-5 py-3 rounded-2xl glass-card border border-slate-200 dark:border-white/10 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-300 hover:border-emerald-500/40 shadow-xs transition-all"
          >
            <Phone className="w-4 h-4" />
            <span className="font-mono">{phone}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
