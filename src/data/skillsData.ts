import type { Language } from './translations';

export interface SkillItem {
  name: string;
  percent: number;
  level: Record<Language, string>;
  color: string;
  category: 'backend' | 'frontend' | 'devops' | 'creative';
  highlight?: boolean;
}

export const skillsData: SkillItem[] = [
  // ==========================================
  // Backend & Systems Engineering
  // ==========================================
  {
    name: 'Node.js & Express',
    percent: 90,
    level: {
      fa: 'پیشرفته / پروداکشن',
      en: 'Advanced / Production',
      ku: 'پێشکەوتوو / پرۆداکشن',
      de: 'Fortgeschritten / Produktion',
    },
    color: '#14b8a6',
    category: 'backend',
    highlight: true,
  },
  {
    name: 'Python & Data Engineering',
    percent: 90,
    level: {
      fa: 'پیشرفته / پردازش داده و اسکریپتینگ',
      en: 'Advanced / Data & Scripting',
      ku: 'پێشکەوتوو / شیکاری داتا',
      de: 'Fortgeschritten / Daten & Skripte',
    },
    color: '#06b6d4',
    category: 'backend',
    highlight: true,
  },
  {
    name: 'PHP & Server Backend',
    percent: 90,
    level: {
      fa: 'پیشرفته / اتوماسیون وب و وب‌سرویس',
      en: 'Advanced / Web & Automation',
      ku: 'پێشکەوتوو / ئۆتۆمەیشن',
      de: 'Fortgeschritten / Web-Automatisierung',
    },
    color: '#6366f1',
    category: 'backend',
    highlight: true,
  },
  {
    name: 'Socket.io (Real-Time Architecture)',
    percent: 88,
    level: {
      fa: 'تخصصی / همگام‌سازی لحظه‌ای',
      en: 'Proficient / Real-Time Sync',
      ku: 'شارەزا / هاوکاتکردنی ڕیەڵ‌تایم',
      de: 'Kompetent / Echtzeit-Synchronisation',
    },
    color: '#0d9488',
    category: 'backend',
    highlight: true,
  },
  {
    name: 'Databases (MongoDB & SQLite)',
    percent: 85,
    level: {
      fa: 'مسلط / مدلسازی داده و کوئری',
      en: 'Proficient / Schema & Queries',
      ku: 'شارەزا / مۆدێلسازی داتا',
      de: 'Kompetent / Schemata & Abfragen',
    },
    color: '#10b981',
    category: 'backend',
    highlight: true,
  },
  {
    name: 'C++ & Hardware / POS DLL Interop',
    percent: 60,
    level: {
      fa: 'متوسط / پروتکل و ارتباط سخت‌افزاری',
      en: 'Intermediate / Hardware Protocols & Interop',
      ku: 'مامناوەند / پردی پرۆتۆکۆڵ و هاردوێر',
      de: 'Mittelstufe / Hardware & DLL-Interop',
    },
    color: '#3b82f6',
    category: 'backend',
  },

  // ==========================================
  // Frontend & Mobile
  // ==========================================
  {
    name: 'JavaScript (ES6+ & Modern)',
    percent: 90,
    level: {
      fa: 'پیشرفته / توسعه فرانت و منطق وب',
      en: 'Advanced / Web Logic & DOM',
      ku: 'پێشکەوتوو / مەنتیقی وێب',
      de: 'Fortgeschritten / Web-Logik',
    },
    color: '#f59e0b',
    category: 'frontend',
    highlight: true,
  },
  {
    name: 'React & Vite',
    percent: 80,
    level: {
      fa: 'مسلط / توسعه کامپوننت و معماری UI',
      en: 'Proficient / Component UI',
      ku: 'شارەزا / تەلارسازی کۆمپۆنێنت',
      de: 'Kompetent / Komponenten-Architektur',
    },
    color: '#14b8a6',
    category: 'frontend',
    highlight: true,
  },
  {
    name: 'TypeScript',
    percent: 80,
    level: {
      fa: 'مسلط / ایمنی تایپ و واسط‌ها',
      en: 'Proficient / Type Safety & Interfaces',
      ku: 'شارەزا / تایپ‌سەیفتی',
      de: 'Kompetent / Typsicherheit',
    },
    color: '#0ea5e9',
    category: 'frontend',
  },
  {
    name: 'HTML5 & Web Standards',
    percent: 75,
    level: {
      fa: 'مسلط / سمانتیک، ساختار و سئو',
      en: 'Proficient / Semantic Structure & SEO',
      ku: 'شارەزا / پێکهاتە و سێئۆ',
      de: 'Kompetent / Semantik & SEO',
    },
    color: '#ea580c',
    category: 'frontend',
  },
  {
    name: 'CSS3 & Tailwind CSS',
    percent: 75,
    level: {
      fa: 'مسلط / استایل واکنش‌گرا و مینیمال',
      en: 'Proficient / Responsive & Utilities',
      ku: 'شارەزا / دیزاینی ڕیسپۆنسیڤ',
      de: 'Kompetent / Responsives Design',
    },
    color: '#38bdf8',
    category: 'frontend',
  },
  {
    name: 'React Native & Expo (Mobile)',
    percent: 75,
    level: {
      fa: 'آشنا و کاربردی / ساخت اپلیکیشن موبایل',
      en: 'Working Knowledge / Mobile Applications',
      ku: 'کرداری / بەرنامەی مۆبایل',
      de: 'Praktische Kenntnisse / Mobile Apps',
    },
    color: '#8b5cf6',
    category: 'frontend',
  },

  // ==========================================
  // DevOps, Tooling & Automation
  // ==========================================
  {
    name: 'Telegram Bot API (aiogram / Async)',
    percent: 90,
    level: {
      fa: 'پیشرفته / ربات‌های خودکار و تعاملی',
      en: 'Advanced / Async Bots & Automation',
      ku: 'پێشکەوتوو / ڕۆبۆتی تێلێگرام',
      de: 'Fortgeschritten / Asynchrone Bots',
    },
    color: '#229ed9',
    category: 'devops',
    highlight: true,
  },
  {
    name: 'Linux Server Administration & PM2',
    percent: 85,
    level: {
      fa: 'مسلط / مدیریت سرور و استقرار لینوکسی',
      en: 'Proficient / Linux Deployments & Services',
      ku: 'شارەزا / بەڕێوەبردنی سێرڤەر',
      de: 'Kompetent / Linux-Bereitstellung & PM2',
    },
    color: '#10b981',
    category: 'devops',
    highlight: true,
  },
  {
    name: 'Python Desktop & GUI Tools (Tkinter / PyInstaller)',
    percent: 85,
    level: {
      fa: 'مسلط / ابزارهای دسکتاپ و پردازش داده',
      en: 'Proficient / Desktop Software & Data Tools',
      ku: 'شارەزا / نەرمەکاڵای دیسکتۆپ',
      de: 'Kompetent / Desktop-Software & Tools',
    },
    color: '#0284c7',
    category: 'devops',
    highlight: true,
  },
  {
    name: 'cPanel & WHM API Automation',
    percent: 85,
    level: {
      fa: 'مسلط / اتوماسیون میزبانی و پروویژن',
      en: 'Proficient / Hosting Provisioning API',
      ku: 'شارەزا / ئۆتۆمەیشنی میوانداری',
      de: 'Kompetent / Hosting-Automatisierung',
    },
    color: '#f97316',
    category: 'devops',
  },
  {
    name: 'Git & GitHub CI/CD Actions',
    percent: 82,
    level: {
      fa: 'مسلط / کنترل نسخه و خط لوله دیپلوی',
      en: 'Proficient / Version Control & Pipelines',
      ku: 'شارەزا / گیت و دیپلۆی',
      de: 'Kompetent / Versionskontrolle & CI/CD',
    },
    color: '#14b8a6',
    category: 'devops',
  },
  {
    name: 'Network Protocols & POS TCP Sockets',
    percent: 78,
    level: {
      fa: 'کاربردی / ارتباط شبکه دستگاه کارتخوان',
      en: 'Working Knowledge / TCP Sockets & Protocols',
      ku: 'کرداری / پرۆتۆکۆڵی سوکێتی بانکی',
      de: 'Praktische Kenntnisse / TCP & POS-Netzwerk',
    },
    color: '#0d9488',
    category: 'devops',
  },

  // ==========================================
  // Creative & Visual Design
  // ==========================================
  {
    name: 'Adobe Photoshop',
    percent: 100,
    level: {
      fa: 'تسلط کامل / هویت بصری و طراحی پیشرفته',
      en: 'Expert / Visual Identity & Retouching',
      ku: 'تەواو شارەزا / دیزاینی گرافیکی پیشەیی',
      de: 'Experte / Bildbearbeitung & Branding',
    },
    color: '#0284c7',
    category: 'creative',
    highlight: true,
  },
  {
    name: 'Adobe Illustrator',
    percent: 100,
    level: {
      fa: 'تسلط کامل / گرافیک وکتور، لوگو و آیکون',
      en: 'Expert / Vector Graphics & Logo Design',
      ku: 'تەواو شارەزا / دیزاینی وێکتۆر و لۆگۆ',
      de: 'Experte / Vektorgrafik & Logo-Design',
    },
    color: '#ea580c',
    category: 'creative',
    highlight: true,
  },
  {
    name: 'UI / UX Product Design',
    percent: 80,
    level: {
      fa: 'مسلط / طراحی رابط کاربری و معماری محصول',
      en: 'Proficient / Product UI/UX Architecture',
      ku: 'شارەزا / دیزاینی ڕووکار و ئەزموونی بەکارهێنەر',
      de: 'Kompetent / Produkt UI/UX Design',
    },
    color: '#14b8a6',
    category: 'creative',
  },
  {
    name: 'Adobe Premiere Pro',
    percent: 70,
    level: {
      fa: 'متوسط / تدوین و تولید محتوای ویدئویی',
      en: 'Intermediate / Video Editing & Promos',
      ku: 'مامناوەند / مۆنتاژی ڤیدیۆیی',
      de: 'Mittelstufe / Videoschnitt & Motion',
    },
    color: '#dc2626',
    category: 'creative',
  },
];
