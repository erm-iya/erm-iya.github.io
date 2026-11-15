import React, { useState } from 'react';
import type { Language } from '../data/translations';
import { translations } from '../data/translations';
import { skillsData } from '../data/skillsData';
import { Terminal, Layout, Wrench, Palette } from 'lucide-react';

interface SkillsSectionProps {
  currentLang: Language;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ currentLang }) => {
  const t = translations[currentLang];
  const [activeCategory, setActiveCategory] = useState<'backend' | 'frontend' | 'devops' | 'creative'>('backend');

  const categories = [
    { id: 'backend', label: t.skills.categories.backend, icon: Terminal },
    { id: 'frontend', label: t.skills.categories.frontend, icon: Layout },
    { id: 'devops', label: t.skills.categories.devops, icon: Wrench },
    { id: 'creative', label: t.skills.categories.creative, icon: Palette },
  ] as const;

  const currentSkills = skillsData.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-16 sm:py-20 px-3.5 sm:px-8 relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <h2 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-teal-600 dark:text-teal-400 mb-2">
            {t.skills.title}
          </h2>
          <p className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100">
            {t.skills.subtitle}
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-8 sm:mb-10">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer select-none ${
                  activeCategory === cat.id
                    ? 'bg-teal-500/15 text-teal-700 dark:text-teal-300 border border-teal-500/35 shadow-xs font-bold'
                    : 'bg-slate-100 dark:bg-white/[0.04] text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-200/70 dark:hover:bg-white/[0.08] border border-slate-200 dark:border-white/[0.05]'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {currentSkills.map((skill) => (
            <div
              key={skill.name}
              className="glass-card p-4 rounded-xl border border-slate-200/80 dark:border-white/[0.06] hover:border-teal-500/30 transition-all duration-200 flex flex-col justify-between gap-2.5 group"
            >
              <div className="flex items-center gap-2.5">
                <span
                  className="w-2.5 h-2.5 rounded-full shrink-0"
                  style={{ backgroundColor: skill.color }}
                ></span>
                <span className="text-sm font-bold text-slate-800 dark:text-slate-200 group-hover:text-teal-600 dark:group-hover:text-teal-300 transition-colors">
                  {skill.name}
                </span>
              </div>
              <div className="flex items-center justify-between text-xs pt-2 border-t border-slate-100 dark:border-white/[0.04]">
                <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                  {skill.level[currentLang] || skill.level.fa}
                </span>
                {skill.highlight && (
                  <span className="text-[10px] font-semibold text-teal-600 dark:text-teal-400 bg-teal-500/10 px-2 py-0.5 rounded-md">
                    Core
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
