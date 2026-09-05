import React, { useState } from 'react';
import type { Language } from '../data/translations';
import { translations } from '../data/translations';
import type { ProjectItem } from '../data/projectsData';
import { projectsData } from '../data/projectsData';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from './ui/dialog';
import {
  Server,
  Cpu,
  Smartphone,
  Bot,
  LayoutDashboard,
  Terminal,
  Activity,
  Video,
  GraduationCap,
  ExternalLink,
  Layers,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';
import { GithubIcon } from './Icons';

interface ProjectsSectionProps {
  currentLang: Language;
}

const iconMap: Record<string, React.ElementType> = {
  Server,
  Cpu,
  Smartphone,
  Bot,
  LayoutDashboard,
  Terminal,
  Activity,
  Video,
  GraduationCap,
};

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ currentLang }) => {
  const t = translations[currentLang];
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = [
    { id: 'all', label: t.projects.all },
    { id: 'saas', label: t.projects.saas },
    { id: 'data', label: t.projects.data },
    { id: 'hardware', label: t.projects.hardware },
    { id: 'mobile', label: t.projects.mobile },
    { id: 'bots', label: t.projects.bots },
  ];

  const filteredProjects = activeCategory === 'all'
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-16 sm:py-20 px-3.5 sm:px-8 relative overflow-hidden">
      
      {/* Ambient background blur */}
      <div className="ambient-glow-teal top-1/3 -start-20 w-[450px] h-[450px] opacity-10 dark:opacity-15"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <h2 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-teal-600 dark:text-teal-400 mb-2">
            {t.projects.title}
          </h2>
          <p className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100">
            {t.projects.subtitle}
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-8 sm:mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer select-none ${
                activeCategory === cat.id
                  ? 'bg-teal-500/15 text-teal-700 dark:text-teal-300 border border-teal-500/35 shadow-xs font-bold'
                  : 'bg-slate-100 dark:bg-white/[0.04] text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-200/70 dark:hover:bg-white/[0.08] border border-slate-200 dark:border-white/[0.05]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredProjects.map((project) => {
            const Icon = iconMap[project.iconName] || Layers;
            return (
              <Card
                key={project.id}
                className="flex flex-col justify-between overflow-hidden border border-slate-200/80 dark:border-white/[0.07] hover:border-teal-500/30 transition-all duration-300 group"
              >
                <div>
                  <CardHeader className="p-4 sm:p-6 pb-3 sm:pb-4">
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-teal-500/10 border border-teal-500/20 text-teal-600 dark:text-teal-300 flex items-center justify-center group-hover:scale-105 group-hover:bg-teal-500/20 transition-all shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      {project.metrics && (
                        <Badge variant="teal" className="text-[10px] font-mono text-end max-w-[calc(100%-3.2rem)] truncate shrink-0">
                          {project.metrics}
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-300 transition-colors">
                      {project.title[currentLang]}
                    </CardTitle>
                    <CardDescription className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2 line-clamp-3">
                      {project.summary[currentLang]}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="p-4 sm:p-6 pt-0">
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {project.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] px-2 py-0.5 rounded-md bg-slate-100 dark:bg-white/[0.05] text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-transparent font-mono"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className="text-[11px] px-1.5 py-0.5 rounded-md text-slate-500 font-mono">
                          +{project.tags.length - 4}
                        </span>
                      )}
                    </div>
                  </CardContent>
                </div>

                <CardFooter className="p-4 sm:p-6 pt-2 border-t border-slate-200/80 dark:border-white/[0.05] flex items-center justify-between">
                  <Button
                    variant="serene"
                    size="sm"
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-semibold gap-1.5"
                  >
                    <span>{t.projects.viewDetails}</span>
                    <Sparkles className="w-3.5 h-3.5" />
                  </Button>

                  <div className="flex items-center gap-1">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.06] transition-all"
                        title={t.projects.viewCode}
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-300 hover:bg-slate-100 dark:hover:bg-white/[0.06] transition-all"
                        title={t.projects.liveDemo}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </CardFooter>
              </Card>
            );
          })}
        </div>

      </div>

      {/* Deep Architecture Details Modal */}
      {selectedProject && (
        <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="teal" className="text-xs uppercase">
                  {selectedProject.category}
                </Badge>
                {selectedProject.metrics && (
                  <Badge variant="secondary" className="text-xs font-mono">
                    {selectedProject.metrics}
                  </Badge>
                )}
              </div>
              <DialogTitle className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                {selectedProject.title[currentLang]}
              </DialogTitle>
              <DialogDescription className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed pt-2">
                {selectedProject.description[currentLang]}
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-6 pt-2">
              
              {/* Architecture Section */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.06]">
                <h4 className="text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                  <Layers className="w-4 h-4" />
                  {t.projects.architecture}
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {selectedProject.architecture[currentLang]}
                </p>
              </div>

              {/* Key Features */}
              <div>
                <h4 className="text-xs font-bold text-slate-900 dark:text-slate-200 uppercase tracking-wider mb-3">
                  {t.projects.keyFeatures}
                </h4>
                <ul className="space-y-2">
                  {selectedProject.keyFeatures[currentLang].map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Full Tech Stack Pills */}
              <div>
                <h4 className="text-xs font-bold text-slate-900 dark:text-slate-200 uppercase tracking-wider mb-2">
                  {t.projects.techStack}
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-teal-500/10 text-teal-700 dark:text-teal-300 border border-teal-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Links */}
              <div className="flex flex-wrap items-center justify-end gap-3 pt-4 border-t border-slate-200 dark:border-white/[0.07]">
                {selectedProject.githubUrl && (
                  <a href={selectedProject.githubUrl} target="_blank" rel="noreferrer">
                    <Button variant="outline" size="sm" className="gap-2">
                      <GithubIcon className="w-4 h-4" />
                      <span>{t.projects.viewCode}</span>
                    </Button>
                  </a>
                )}
                {selectedProject.liveUrl && (
                  <a href={selectedProject.liveUrl} target="_blank" rel="noreferrer">
                    <Button size="sm" className="gap-2 bg-teal-600 hover:bg-teal-500 text-white">
                      <ExternalLink className="w-4 h-4" />
                      <span>{t.projects.liveDemo}</span>
                    </Button>
                  </a>
                )}
              </div>

            </div>
          </DialogContent>
        </Dialog>
      )}

    </section>
  );
};
