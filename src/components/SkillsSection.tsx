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
    <section id="skills" className="py-20 px-4 sm:px-8 relative">
      
      {/* Ambient Glow */}
      <div className="ambient-glow-emerald bottom-10 -end-10 w-[420px] h-[420px] opacity-10"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-teal-600 dark:text-teal-400 mb-2">
            {t.skills.title}
          </h2>
          <p className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100">
            {t.skills.subtitle}
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
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

        {/* Skills Grid with Serene Progress Bars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {currentSkills.map((skill) => (
            <div
              key={skill.name}
              className="glass-card p-5 rounded-2xl border border-slate-200/80 dark:border-white/[0.06] hover:border-teal-500/30 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: skill.color }}
                  ></span>
                  <span className="text-sm font-bold text-slate-800 dark:text-slate-200 group-hover:text-teal-600 dark:group-hover:text-teal-300 transition-colors">
                    {skill.name}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                    {skill.level}
                  </span>
                  <span className="text-xs font-mono font-bold text-teal-600 dark:text-teal-300">
                    {skill.percent}%
                  </span>
                </div>
              </div>

              {/* Progress Track */}
              <div className="h-2 rounded-full bg-slate-200/70 dark:bg-slate-900/80 border border-slate-200 dark:border-white/[0.05] overflow-hidden p-0.5">
                <div
                  className="h-full rounded-full transition-all duration-700 ease-out"
                  style={{
                    width: `${skill.percent}%`,
                    backgroundColor: skill.color,
                    boxShadow: `0 0 8px ${skill.color}50`,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
