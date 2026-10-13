import { useState } from 'react';
import confetti from 'canvas-confetti';
import type { Language } from '../data/translations';
import { translations } from '../data/translations';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { 
  Mail, 
  Send, 
  Phone, 
  Copy, 
  Check, 
  ExternalLink, 
  Loader2, 
  CheckCircle2, 
  AlertCircle 
} from 'lucide-react';
import { GithubIcon, InstagramIcon } from './Icons';

interface ContactSectionProps {
  currentLang: Language;
}

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
  _honey: string;
}

const INITIAL_FORM: FormState = {
  name: '',
  email: '',
  subject: '',
  message: '',
  _honey: '',
};

export const ContactSection: React.FC<ContactSectionProps> = ({ currentLang }) => {
  const t = translations[currentLang];
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState<FormState>(INITIAL_FORM);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const recipientEmail = 'heidariermiya@gmail.com';
  const phone = '09183820239';

  const copyEmail = () => {
    navigator.clipboard.writeText(recipientEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const triggerSuccessConfetti = () => {
    try {
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.75 },
        colors: ['#14b8a6', '#10b981', '#06b6d4', '#6366f1'],
      });
    } catch {
      // Graceful fallback if canvas-confetti is blocked or unmounted
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot anti-spam verification: ignore bots silently
    if (formData._honey) {
      setSubmitStatus('success');
      return;
    }

    setSubmitStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: `New Portfolio Message: ${formData.subject || 'Direct Inquiry'}`,
          message: formData.message,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      if (!response.ok) {
        throw new Error(`Server returned status ${response.status}`);
      }

      setSubmitStatus('success');
      setFormData(INITIAL_FORM);
      triggerSuccessConfetti();
    } catch (err) {
      setSubmitStatus('error');
      setErrorMessage(
        err instanceof Error ? err.message : t.contact.errorMsg
      );
    }
  };

  const mailtoFallbackHref = `mailto:${recipientEmail}?subject=${encodeURIComponent(
    formData.subject || 'Portfolio Inquiry'
  )}&body=${encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
  )}`;

  return (
    <section id="contact" className="py-16 sm:py-24 px-3.5 sm:px-8 relative overflow-hidden">
      
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

        {/* Direct Contact Form Card */}
        <div className="glass-card p-6 sm:p-10 rounded-3xl border border-slate-200/80 dark:border-white/[0.08] shadow-xl text-start mb-12 transition-all">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-8 pb-6 border-b border-slate-200/60 dark:border-white/[0.06]">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
                <span className="p-2 rounded-xl bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/20">
                  <Send className="w-4 h-4" />
                </span>
                <span>{t.contact.formTitle}</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                {t.contact.formSubtitle}
              </p>
            </div>
            <span className="text-xs font-mono px-3 py-1.5 rounded-full bg-slate-100 dark:bg-white/[0.04] text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-white/[0.08] self-start sm:self-auto">
              {recipientEmail}
            </span>
          </div>

          {submitStatus === 'success' ? (
            <div className="py-10 text-center flex flex-col items-center justify-center animate-fadeIn">
              <div className="w-16 h-16 rounded-3xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-500 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2">
                {t.contact.successTitle}
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto mb-6">
                {t.contact.successDesc}
              </p>
              <Button
                variant="serene"
                onClick={() => setSubmitStatus('idle')}
                className="text-xs sm:text-sm gap-2"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{t.contact.sendAnother}</span>
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Invisible Honeypot Field */}
              <input
                type="text"
                name="_honey"
                value={formData._honey}
                onChange={handleInputChange}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              {/* Name & Email 2-Column Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label 
                    htmlFor="contact-name" 
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2"
                  >
                    {t.contact.nameLabel} <span className="text-teal-500">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder={t.contact.namePlaceholder}
                    disabled={submitStatus === 'submitting'}
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.08] text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/40 focus:border-teal-500/70 transition-all disabled:opacity-50"
                  />
                </div>

                <div>
                  <label 
                    htmlFor="contact-email" 
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2"
                  >
                    {t.contact.emailLabel} <span className="text-teal-500">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder={t.contact.emailPlaceholder}
                    disabled={submitStatus === 'submitting'}
                    dir="ltr"
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.08] text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/40 focus:border-teal-500/70 transition-all disabled:opacity-50 font-mono"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label 
                  htmlFor="contact-subject" 
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2"
                >
                  {t.contact.subjectLabel}
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder={t.contact.subjectPlaceholder}
                  disabled={submitStatus === 'submitting'}
                  className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.08] text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/40 focus:border-teal-500/70 transition-all disabled:opacity-50"
                />
              </div>

              {/* Message Content */}
              <div>
                <label 
                  htmlFor="contact-message" 
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2"
                >
                  {t.contact.messageLabel} <span className="text-teal-500">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder={t.contact.messagePlaceholder}
                  disabled={submitStatus === 'submitting'}
                  className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.08] text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/40 focus:border-teal-500/70 transition-all disabled:opacity-50 resize-y min-h-[110px]"
                />
              </div>

              {/* Error Banner with Mailto Fallback */}
              {submitStatus === 'error' && (
                <div className="p-4 rounded-2xl bg-red-500/10 border border-red-500/25 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-red-600 dark:text-red-400 text-xs sm:text-sm">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage || t.contact.errorMsg}</span>
                  </div>
                  <a
                    href={mailtoFallbackHref}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-red-500/15 hover:bg-red-500/25 font-medium transition-colors text-xs shrink-0"
                  >
                    <span>{t.contact.fallbackMailto}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              )}

              {/* Submit CTA */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <p className="text-xs text-slate-500 dark:text-slate-400 order-2 sm:order-1">
                  🔒 {currentLang === 'fa' ? 'اطلاعات شما محرمانه خواهد ماند و مستقیماً به جیمیل ارسال می‌گردد.' : 'Your details remain private and are sent directly to Gmail.'}
                </p>

                <Button
                  type="submit"
                  disabled={submitStatus === 'submitting'}
                  className="w-full sm:w-auto order-1 sm:order-2 gap-2 bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-500 hover:to-emerald-500 text-white font-medium shadow-lg shadow-teal-500/20 px-6 py-3 rounded-xl transition-all"
                >
                  {submitStatus === 'submitting' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>{t.contact.sendingBtn}</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>{t.contact.submitBtn}</span>
                    </>
                  )}
                </Button>
              </div>
            </form>
          )}
        </div>

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
              href={`mailto:${recipientEmail}`}
              className="text-sm font-mono text-slate-700 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-300 transition-colors"
            >
              {recipientEmail}
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
