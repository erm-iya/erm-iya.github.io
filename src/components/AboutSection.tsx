import type { Language } from '../data/translations';
import { translations } from '../data/translations';
import { Cloud, Zap, Cpu, Sparkles } from 'lucide-react';

interface AboutSectionProps {
  currentLang: Language;
}

const icons = [Cloud, Zap, Cpu, Sparkles];

export const AboutSection: React.FC<AboutSectionProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  return (
    <section id="about" className="py-16 sm:py-20 px-3.5 sm:px-8 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-teal-600 dark:text-teal-400 mb-2">
            {t.about.title}
          </h2>
          <p className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100">
            {t.about.subtitle}
          </p>
        </div>

        {/* Story & Philosophy */}
        <div className="glass-card p-6 sm:p-10 rounded-3xl border border-slate-200/80 dark:border-white/[0.07] mb-10 text-slate-700 dark:text-slate-300 leading-8 text-sm sm:text-base space-y-4 shadow-xl">
          <p>{t.about.paragraph1}</p>
          <p>{t.about.paragraph2}</p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {t.about.highlights.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={index}
                className="glass-card p-6 rounded-2xl border border-slate-200/80 dark:border-white/[0.06] hover:border-teal-500/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-teal-500/10 border border-teal-500/20 text-teal-600 dark:text-teal-300 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-teal-500/20 transition-all">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
