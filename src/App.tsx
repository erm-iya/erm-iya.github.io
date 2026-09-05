import { useState, useEffect } from 'react';
import type { Language } from './data/translations';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { DevConsole } from './components/DevConsole';
import { Terminal as TerminalIcon } from 'lucide-react';

export function App() {
  const [currentLang, setCurrentLang] = useState<Language>(() => {
    const saved = localStorage.getItem('portfolio_lang');
    return (saved as Language) || 'fa';
  });

  const [isDark, setIsDark] = useState<boolean>(() => {
    const saved = localStorage.getItem('portfolio_theme');
    return saved ? saved === 'dark' : true;
  });

  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  // Sync RTL / LTR direction and document title
  useEffect(() => {
    const isRtl = currentLang === 'fa' || currentLang === 'ku';
    document.documentElement.setAttribute('dir', isRtl ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', currentLang);
    localStorage.setItem('portfolio_lang', currentLang);

    const titles = {
      fa: 'ارمیا حیدری | توسعه‌دهنده ارشد بک‌اند و هم‌بنیان‌گذار لوکسیمو',
      en: 'Ermiya Heidari | Lead Back-End Engineer & Co-Founder at LUXIMO',
      ku: 'ئێرمیا حەیدەری | پۆرتفۆلیۆی ئەندازیاری باکێند و لوکسیمۆ',
      de: 'Ermiya Heidari | Lead Back-End Entwickler & Mitgründer bei LUXIMO',
    };
    document.title = titles[currentLang];
  }, [currentLang]);

  // Sync dark theme class
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('portfolio_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('portfolio_theme', 'light');
    }
  }, [isDark]);

  return (
    <div className="min-h-screen bg-[#080c14] text-slate-100 selection:bg-teal-500/25 selection:text-teal-200 transition-colors duration-300 relative font-sans">
      
      {/* Background Subtle Tech Mesh Grid */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-[0.035] z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Floating Header */}
      <Navbar
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
        isDark={isDark}
        onThemeToggle={() => setIsDark((prev) => !prev)}
        onOpenTerminal={() => setIsTerminalOpen(true)}
      />

      {/* Main Sections */}
      <main className="relative z-10">
        <HeroSection currentLang={currentLang} />
        <AboutSection currentLang={currentLang} />
        <ProjectsSection currentLang={currentLang} />
        <SkillsSection currentLang={currentLang} />
        <ExperienceSection currentLang={currentLang} />
        <ContactSection currentLang={currentLang} />
      </main>

      {/* Footer */}
      <Footer currentLang={currentLang} />

      {/* Floating Developer Terminal Opener */}
      <button
        onClick={() => setIsTerminalOpen(true)}
        className="fixed bottom-6 end-6 z-40 w-12 h-12 rounded-2xl glass-card border border-white/10 hover:border-teal-500/40 text-slate-400 hover:text-teal-300 flex items-center justify-center shadow-2xl hover:scale-105 transition-all cursor-pointer group"
        title="Open Developer Console (Terminal)"
      >
        <TerminalIcon className="w-5 h-5 group-hover:rotate-6 transition-transform" />
      </button>

      {/* Interactive Terminal Easter Egg */}
      <DevConsole
        currentLang={currentLang}
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
      />

    </div>
  );
}

export default App;
