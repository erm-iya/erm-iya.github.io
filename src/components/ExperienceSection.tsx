import React from 'react';
import type { Language } from '../data/translations';
import { translations } from '../data/translations';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './ui/accordion';
import { Calendar, Building2 } from 'lucide-react';

interface ExperienceSectionProps {
  currentLang: Language;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ currentLang }) => {
  const t = translations[currentLang];
  const r = t.experience.roles;

  const roles = [
    {
      id: 'luximo',
      title: r.luximo.title,
      company: r.luximo.company,
      period: r.luximo.period,
      desc: r.luximo.desc,
      color: '#14b8a6',
    },
    {
      id: 'freelance',
      title: r.freelance.title,
      company: r.freelance.company,
      period: r.freelance.period,
      desc: r.freelance.desc,
      color: '#10b981',
    },
    {
      id: 'vira',
      title: r.vira.title,
      company: r.vira.company,
      period: r.vira.period,
      desc: r.vira.desc,
      color: '#06b6d4',
    },
    {
      id: 'digihost',
      title: r.digihost.title,
      company: r.digihost.company,
      period: r.digihost.period,
      desc: r.digihost.desc,
      color: '#6366f1',
    },
    {
      id: 'leaderpack',
      title: r.leaderpack.title,
      company: r.leaderpack.company,
      period: r.leaderpack.period,
      desc: r.leaderpack.desc,
      color: '#3b82f6',
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-8 relative">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-teal-600 dark:text-teal-400 mb-2">
            {t.experience.title}
          </h2>
          <p className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100">
            {t.experience.subtitle}
          </p>
        </div>

        {/* Timeline with Accordions */}
        <div className="relative border-s-2 border-slate-200 dark:border-white/[0.08] ms-4 sm:ms-8 ps-6 sm:ps-8 space-y-6">
          {roles.map((role, idx) => (
            <div key={role.id} className="relative group">
              
              {/* Timeline Node */}
              <div
                className="absolute -start-[31px] sm:-start-[39px] top-4 w-4 h-4 rounded-full border-2 border-slate-50 dark:border-[#080c14] transition-transform duration-300 group-hover:scale-125 shadow-xs"
                style={{ backgroundColor: role.color }}
              ></div>

              <div className="glass-card p-5 sm:p-6 rounded-2xl border border-slate-200/80 dark:border-white/[0.06] hover:border-teal-500/30 transition-all duration-300">
                <Accordion type="single" collapsible defaultValue={idx === 0 ? role.id : undefined}>
                  <AccordionItem value={role.id} className="border-none">
                    
                    <AccordionTrigger className="hover:no-underline py-0">
                      <div className="text-start">
                        <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-300 transition-colors">
                          {role.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-3 mt-1.5 text-xs text-slate-500 dark:text-slate-400">
                          <span className="flex items-center gap-1.5 text-teal-600 dark:text-teal-400/90 font-medium">
                            <Building2 className="w-3.5 h-3.5" />
                            {role.company}
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1.5 font-mono text-slate-500 dark:text-slate-400">
                            <Calendar className="w-3.5 h-3.5" />
                            {role.period}
                          </span>
                        </div>
                      </div>
                    </AccordionTrigger>

                    <AccordionContent className="pt-4 pb-0">
                      <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed pt-2 border-t border-slate-200 dark:border-white/[0.05]">
                        {role.desc}
                      </p>
                    </AccordionContent>

                  </AccordionItem>
                </Accordion>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
