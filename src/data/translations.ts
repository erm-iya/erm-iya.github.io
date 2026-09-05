export type Language = 'fa' | 'en' | 'ku' | 'de';

export interface Translation {
  nav: {
    about: string;
    projects: string;
    skills: string;
    experience: string;
    contact: string;
    resume: string;
  };
  hero: {
    statusBadge: string;
    greeting: string;
    name: string;
    role: string;
    headline: string;
    subheadline: string;
    ctaProjects: string;
    ctaContact: string;
    stats: {
      uptime: string;
      uptimeLabel: string;
      users: string;
      usersLabel: string;
      latency: string;
      latencyLabel: string;
      years: string;
      yearsLabel: string;
    };
  };
  about: {
    title: string;
    subtitle: string;
    paragraph1: string;
    paragraph2: string;
    highlights: {
      title: string;
      desc: string;
    }[];
  };
  projects: {
    title: string;
    subtitle: string;
    all: string;
    saas: string;
    mobile: string;
    hardware: string;
    bots: string;
    viewDetails: string;
    viewCode: string;
    liveDemo: string;
    keyFeatures: string;
    techStack: string;
    architecture: string;
  };
  skills: {
    title: string;
    subtitle: string;
    categories: {
      backend: string;
      frontend: string;
      devops: string;
      creative: string;
    };
  };
  experience: {
    title: string;
    subtitle: string;
    present: string;
    roles: {
      luximo: {
        title: string;
        company: string;
        period: string;
        desc: string;
      };
      freelance: {
        title: string;
        company: string;
        period: string;
        desc: string;
      };
      vira: {
        title: string;
        company: string;
        period: string;
        desc: string;
      };
      digihost: {
        title: string;
        company: string;
        period: string;
        desc: string;
      };
      leaderpack: {
        title: string;
        company: string;
        period: string;
        desc: string;
      };
    };
  };
  terminal: {
    title: string;
    welcome: string;
    placeholder: string;
    helpText: string;
  };
  contact: {
    title: string;
    subtitle: string;
    emailCopied: string;
    copyEmail: string;
    sendMessage: string;
    telegramDirect: string;
    githubProfile: string;
    instagramProfile: string;
    phoneCall: string;
    availableBadge: string;
  };
  footer: {
    designedBy: string;
    rights: string;
  };
}

export const translations: Record<Language, Translation> = {
  fa: {
    nav: {
      about: "درباره من",
      projects: "پروژه‌ها",
      skills: "مهارت‌ها",
      experience: "سوابق شغلی",
      contact: "ارتباط",
      resume: "رزومه",
    },
    hero: {
      statusBadge: "آماده برای پروژه‌ها و چالش‌های نوآورانه",
      greeting: "سلام، من",
      name: "ارمیا حیدری",
      role: "توسعه‌دهنده ارشد بک‌اند و هم‌بنیان‌گذار لوکسیمو",
      headline: "خلق زیرساخت‌های مقیاس‌پذیر و سیستم‌های بلادرنگ با نهایت پایداری",
      subheadline: "تلفیق منطق عمیق برنامه‌نویسی سمت سرور با زیبایی و ظرافت مینیمال. تخصص در معماری‌های Real-Time با Node.js/MongoDB، یکپارچه‌سازی سخت‌افزاری و اتوماسیون‌های ابری.",
      ctaProjects: "مشاهده پروژه‌ها",
      ctaContact: "ارتباط مستقیم",
      stats: {
        uptime: "99.99%",
        uptimeLabel: "آپتایم سرورها",
        users: "+50K",
        usersLabel: "کاربران ربات‌ها و سرویس‌ها",
        latency: "<50ms",
        latencyLabel: "تاخیر سینک Real-Time",
        years: "+6",
        yearsLabel: "سال تجربه توسعه",
      },
    },
    about: {
      title: "درباره من",
      subtitle: "خلق راهکارهای تمیز، با پرفورمنس بالا و ارزش‌آفرین",
      paragraph1: "من ارمیا حیدری هستم؛ توسعه‌دهنده ارشد بک‌اند و هم‌بنیان‌گذار پلتفرم جامع ابری لوکسیمو (LUXIMO). تمرکز اصلی من بر طراحی معماری‌های تاب‌آور، سیستم‌های Real-Time و همگام‌سازی داده در لحظه است.",
      paragraph2: "از اتصال مستقیم دستگاه‌های کارت‌خوان بانکی به مرورگر گرفته تا توسعه ربات‌های پیشرفته تلگرام و اپلیکیشن‌های موبایل با رابط کاربری روان؛ من عاشق تبدیل مسائل پیچیده فنی به تجربه‌ای ساده و دلنواز برای کاربران هستم.",
      highlights: [
        {
          title: "معماری مقیاس‌پذیر ابری",
          desc: "طراحی میکروسرویس‌ها و APIهای پایدار با Node.js، Express و مدیریت بهینه بار کاری.",
        },
        {
          title: "ارتباطات بلادرنگ (Real-Time)",
          desc: "پیاده‌سازی سوکت‌های دوطرفه پایدار با Socket.io و کشینگ سریع درون‌حافظه‌ای RAM.",
        },
        {
          title: "یکپارچه‌سازی سخت‌افزار و پوز",
          desc: "اتصال نرم‌افزار به پایانه پرداخت بانکی (PcPos) و پروتکل‌های شبکه بانکی ایران.",
        },
        {
          title: "طراحی مینیمال و تجربه کاربر",
          desc: "درک شهودی از UI/UX با ابزارهای Figma و Adobe جهت پیوند بی‌نقص فرانت و بک‌اند.",
        },
      ],
    },
    projects: {
      title: "ویترین پروژه‌ها",
      subtitle: "منتخبی از سیستم‌ها، محصولات ابری و پلتفرم‌های مهندسی‌شده",
      all: "همه",
      saas: "ابری و SaaS",
      mobile: "موبایل",
      hardware: "سخت‌افزار و فین‌تک",
      bots: "ربات و اتوماسیون",
      viewDetails: "مشاهده جزئیات",
      viewCode: "سورس کد",
      liveDemo: "پیش‌نمایش آنلاین",
      keyFeatures: "ویژگی‌های شاخص",
      techStack: "تکنولوژی‌های استفاده‌شده",
      architecture: "نکات معماری و فنی",
    },
    skills: {
      title: "مهارت‌ها و فناوری‌ها",
      subtitle: "مجموعه ابزارهایی که روزانه برای حل چالش‌های مهندسی به کار می‌گیرم",
      categories: {
        backend: "سمت سرور و زیرساخت (Backend & Cloud)",
        frontend: "سمت کاربر و موبایل (Frontend & Mobile)",
        devops: "اتوماسیون، دیتابیس و شبکه (DevOps & Tools)",
        creative: "طراحی، هویت بصری و UI/UX (Creative Design)",
      },
    },
    experience: {
      title: "مسیر شغلی و سوابق",
      subtitle: "سیر تکامل تجربیات در ساخت محصولات واقعی و کار تیمی",
      present: "اکنون",
      roles: {
        luximo: {
          title: "هم‌بنیان‌گذار و مدیر ارشد بک‌اند",
          company: "لوکسیمو (LUXIMO)",
          period: "1404 - اکنون",
          desc: "معماری صفر تا صد پلتفرم ابری مدیریت رستوران و خرده‌فروشی. توسعه زیرساخت بلادرنگ Socket.io میان صندوق، گارسون، آشپزخانه و مشتریان. پیاده‌سازی کش RAM سرور و پل ارتباطی اختصاصی با پوزهای بانکی کشور.",
        },
        freelance: {
          title: "توسعه‌دهنده فول‌استک و بات‌های تلگرام",
          company: "فریلنس و پروژه‌های بین‌المللی",
          period: "1398 - اکنون",
          desc: "توسعه ده‌ها ربات پیشرفته تعاملی، سلف‌بات‌ها و اتوماسیون‌های سفارشی بر پایه Telegram API و Python Asyncio با مدیریت دیتابیس‌های چند ده‌هزار کاربری.",
        },
        vira: {
          title: "برنامه‌نویس فول‌استک و گرافیست ارشد",
          company: "مجموعه آموزشی ویراکنکور",
          period: "1399 - 1403",
          desc: "معماری، برنامه‌نویسی و استقرار پلتفرم تحت وب آموزش آنلاین همراه با پرتال دانش‌آموزی. هدایت هنری و طراحی هویت بصری در شبکه‌های اجتماعی جهت ارتقای تعامل کاربران.",
        },
        digihost: {
          title: "مهندس اتوماسیون و سرور لینوکس",
          company: "دیجی‌هاست (DigiHost)",
          period: "1399 - 1402",
          desc: "برنامه‌نویسی اسکریپت‌های اتوماسیون تحویل آنی منابع cPanel و سرور با Python/PHP. ساخت ربات تلگرامی مدیریت هاست به عنوان درگاه ارتباط مستقیم کاربران با APIهای سرور.",
        },
        leaderpack: {
          title: "طراح رابط کاربری و هویت بصری",
          company: "لیدِرپَک (Leaderpack)",
          period: "1398 - 1400",
          desc: "طراحی هویت بصری، بسته‌بندی و پروتوتایپ‌های رابط کاربری که بعدها پایه درک عمیق از هماهنگی بک‌اند با نیازهای فرانت‌اند شد.",
        },
      },
    },
    terminal: {
      title: "کنسول توسعه‌دهنده (Ermiya Console)",
      welcome: "به ترمینال خوش آمدید. برای مشاهده دستورات عبارت help را بنویسید.",
      placeholder: "دستور خود را بنویسید (مثال: help, bio, projects, skills, hire)...",
      helpText: "دستورات موجود: bio | projects | skills | contact | hire | clear",
    },
    contact: {
      title: "تماس و ارتباط",
      subtitle: "مشتاق گفتگو پیرامون همکاری، فرصت‌های شغلی و خلق پروژه‌های مشترک",
      emailCopied: "ایمیل کپی شد!",
      copyEmail: "کپی آدرس ایمیل",
      sendMessage: "ارسال پیام مستقیم",
      telegramDirect: "گفتگو در تلگرام",
      githubProfile: "گیت‌هاب",
      instagramProfile: "اینستاگرام",
      phoneCall: "تماس تلفنی",
      availableBadge: "هم‌اکنون آماده گفتگو",
    },
    footer: {
      designedBy: "طراحی و توسعه با ظرافت و پایداری توسط ارمیا حیدری",
      rights: "تمامی حقوق محفوظ است.",
    },
  },

  en: {
    nav: {
      about: "About",
      projects: "Projects",
      skills: "Skills",
      experience: "Experience",
      contact: "Contact",
      resume: "Resume",
    },
    hero: {
      statusBadge: "Available for Innovative Projects & Engineering Roles",
      greeting: "Hello, I am",
      name: "Ermiya Heidari",
      role: "Lead Back-End Engineer & Co-Founder at LUXIMO",
      headline: "Architecting Resilient Distributed Systems & Low-Latency Real-Time Infrastructure",
      subheadline: "Merging deep server-side logic with serene, minimalist aesthetics. Specialized in Node.js/MongoDB real-time microservices, Iranian banking POS bridges, and high-load cloud automations.",
      ctaProjects: "Explore Projects",
      ctaContact: "Get in Touch",
      stats: {
        uptime: "99.99%",
        uptimeLabel: "System Uptime",
        users: "+50K",
        usersLabel: "Bot & Service Users",
        latency: "<50ms",
        latencyLabel: "Real-Time Sync Latency",
        years: "+6",
        yearsLabel: "Years of Engineering",
      },
    },
    about: {
      title: "About Me",
      subtitle: "Crafting clean, high-performance, and high-impact digital products",
      paragraph1: "I am Ermiya Heidari, Lead Back-End Developer and Co-Founder of LUXIMO cloud SaaS platform. My passion lies in engineering resilient distributed systems, sub-second real-time state synchronization, and reliable infrastructure.",
      paragraph2: "From building native banking POS bridges in C++/Node.js to architecting high-throughput Telegram bot platforms and mobile download managers, I thrive on turning complex engineering puzzles into elegant, delightful experiences.",
      highlights: [
        {
          title: "Scalable Cloud Architecture",
          desc: "Designing resilient RESTful microservices with Node.js, Express, and structured MongoDB pipelines.",
        },
        {
          title: "Real-Time State Sync",
          desc: "Ultra-low-latency bidirectional communications with Socket.io and in-memory server RAM caching.",
        },
        {
          title: "Hardware & POS Integration",
          desc: "Bridging web apps directly to banking terminals (PcPos) via DLL interop and TCP socket scanners.",
        },
        {
          title: "Minimal UX Intuition",
          desc: "Deep appreciation for clean design systems, typography, and developer experience.",
        },
      ],
    },
    projects: {
      title: "Featured Projects",
      subtitle: "Handcrafted cloud systems, mobile apps, and infrastructure tools",
      all: "All",
      saas: "Cloud & SaaS",
      mobile: "Mobile Apps",
      hardware: "Hardware & FinTech",
      bots: "Bots & Automation",
      viewDetails: "View Details",
      viewCode: "Source Code",
      liveDemo: "Live Preview",
      keyFeatures: "Key Highlights",
      techStack: "Tech Stack",
      architecture: "Architecture Overview",
    },
    skills: {
      title: "Skills & Arsenal",
      subtitle: "Technologies and tools I leverage daily to solve engineering challenges",
      categories: {
        backend: "Backend & Systems",
        frontend: "Frontend & Mobile",
        devops: "Automation, DB & Cloud",
        creative: "Visual & Product Design",
      },
    },
    experience: {
      title: "Career & Milestones",
      subtitle: "My path through building real-world platforms and leading engineering teams",
      present: "Present",
      roles: {
        luximo: {
          title: "Co-Founder & Lead Back-End Engineer",
          company: "LUXIMO",
          period: "2025 - Present",
          desc: "Architected the full back-end infrastructure for the cloud restaurant management SaaS. Implemented Socket.io real-time synchronization between cashier POS, waiter handhelds, kitchen screens, and customers. Engineered custom bank POS card-reader bridge.",
        },
        freelance: {
          title: "Full-Stack & Bot Developer",
          company: "Freelance",
          period: "2019 - Present",
          desc: "Engineered dozens of high-concurrency Telegram bots and autonomous self-bots using Python Asyncio and Telegram API, supporting large active userbases and automated payments.",
        },
        vira: {
          title: "Full-Stack Engineer & Senior Designer",
          company: "ViraKonkur Educational Platform",
          period: "2020 - 2024",
          desc: "Architected and deployed an end-to-end e-learning platform with interactive student portals. Led digital branding and visual design across all channels.",
        },
        digihost: {
          title: "Automation Engineer & Server Admin",
          company: "DigiHost",
          period: "2020 - 2023",
          desc: "Created automated provisioning scripts with Python and PHP for instant Linux/cPanel hosting delivery. Built a comprehensive Telegram bot gateway for automated server administration.",
        },
        leaderpack: {
          title: "UI/UX & Brand Identity Designer",
          company: "Leaderpack",
          period: "2019 - 2021",
          desc: "Designed corporate identities, packaging, and UI prototypes. Gained invaluable intuition regarding front-end interfaces and API ergonomics.",
        },
      },
    },
    terminal: {
      title: "Developer Console (Ermiya Shell)",
      welcome: "Welcome to Ermiya's interactive console. Type 'help' to see available commands.",
      placeholder: "Type a command (e.g., help, bio, projects, skills, hire)...",
      helpText: "Available commands: bio | projects | skills | contact | hire | clear",
    },
    contact: {
      title: "Get In Touch",
      subtitle: "Open to exciting collaborations, high-impact projects, and technical discussions",
      emailCopied: "Email copied to clipboard!",
      copyEmail: "Copy Email Address",
      sendMessage: "Send Direct Message",
      telegramDirect: "Chat on Telegram",
      githubProfile: "GitHub Profile",
      instagramProfile: "Instagram",
      phoneCall: "Phone Call",
      availableBadge: "Available for new opportunities",
    },
    footer: {
      designedBy: "Engineered with precision and serene aesthetics by Ermiya Heidari",
      rights: "All rights reserved.",
    },
  },

  ku: {
    nav: {
      about: "دەربارەی من",
      projects: "پڕۆژەکان",
      skills: "شارەزاییەکان",
      experience: "ئەزموونی کار",
      contact: "پەیوەندی",
      resume: "رزۆمە",
    },
    hero: {
      statusBadge: "ئامادەم بۆ پڕۆژە و هاوکاری نوێ",
      greeting: "سڵاو، ئەمن",
      name: "ئێرمیا حەیدەری",
      role: "تەوسێعەدەی باکێند و هاوبەشی دامەزرێنەری لوکسیمۆ",
      headline: "سازکردنی ژێرخانی پایەدار و سیستمە بلادەبەنگەکان بەوپەڕی هێمنی و خێرایی",
      subheadline: "تێکەڵکردنی مەنتقی ئەندازیاری باکێند دەگەڵ دیزاینی مینیماڵ و جوان. پسپۆڕی سیستمە ڕیەڵ‌تایمەکان لەسەر بنەمای Node.js، مۆنگۆدی‌بی، پۆزی بانکی و ئۆتۆمەیشنی سرڤەر.",
      ctaProjects: "دیتنی پڕۆژەکان",
      ctaContact: "پەیوەندیم پێوە بکە",
      stats: {
        uptime: "99.99%",
        uptimeLabel: "ئاپتایمی سێرڤەر",
        users: "+50K",
        usersLabel: "بەکارهێنەرانی بۆتەکان",
        latency: "<50ms",
        latencyLabel: "خێرایی سینک (Real-Time)",
        years: "+6",
        yearsLabel: "ساڵ ئەزموونی بەرنامەنووسی",
      },
    },
    about: {
      title: "دەربارەی من",
      subtitle: "خوڵقاندنی کدی تمیز و بەرهەمی پڕسوود بۆ خەڵک",
      paragraph1: "ئەمن ئێرمیا حەیدەریم؛ گەشەپێدەری باکێند و هاودامەزرێنەری پلاتفۆرمی لوکسیمۆ. هەموو تەقالام ئەوەیە سیستمگەلێک ساز بکەم کە بەوپەڕی قورسی و هاتووچۆ، بە بێ کێشە و چاوترووکانێک کار بکەن.",
      paragraph2: "لە گرێدانی ئامێرەکانی کارتی بانکییەوە بگرە هەتا دروستکردنی بۆتی پێشکەوتووی تێلێگرام و ئەپی مۆبایل؛ حەزم لێیە مەسەلە گرانەکانی کۆمپیۆتەر بکەمە ئەزموونێکی خۆش و ساکار بۆ بەکارهێنەر.",
      highlights: [
        {
          title: "ئەندازیاری هەوری مقیاس‌پەزیر",
          desc: "دیزاینی میکرۆسرویس و APIیە قایمەکان بە Node.js و Express.",
        },
        {
          title: "پەیوەندی خێرا و ڕاستەوخۆ (Real-Time)",
          desc: "بەستنەوەی سووکێتی پایەدار بە Socket.io و کەشینگی زاکیرەی RAM.",
        },
        {
          title: "پەیوەندی سەخت‌ئامێر و پۆز",
          desc: "پێکەوەبەستنی نەرمەکاڵا و ئامێری پۆزی بانکی بە کدی C++ و سۆکێت.",
        },
        {
          title: "تێگەیشتن لە UI/UX",
          desc: "دیزاینی شیک و مینیماڵ بە Figma و Photoshop بۆ جوانی بەرنامەکان.",
        },
      ],
    },
    projects: {
      title: "پڕۆژە دەستنیشانکراوەکان",
      subtitle: "کۆمەڵێک لە سیستم، ئەپ و ئۆتۆمەیشنە دروستکراوەکانم",
      all: "هەموو",
      saas: "هەوری و SaaS",
      mobile: "مۆبایل",
      hardware: "سەخت‌ئامێر و فین‌تەک",
      bots: "بۆت و ئۆتۆمەیشن",
      viewDetails: "وردەکاری پڕۆژە",
      viewCode: "سۆرس کۆد",
      liveDemo: "پێشبینینی ئۆنلاین",
      keyFeatures: "تایبەتمەندییە سەرەکییەکان",
      techStack: "تەکنەلۆژیاکان",
      architecture: "نەخشەی ئەندازیاری",
    },
    skills: {
      title: "شارەزایی و تەکنەلۆژیاکان",
      subtitle: "ئەو کەرەستانەی ڕۆژانە بۆ چارەسەری کێشە تەکنیکییەکان بەکاریان دێنم",
      categories: {
        backend: "باکێند و سرڤەر (Backend & Cloud)",
        frontend: "فرۆنتێند و مۆبایل (Frontend & Mobile)",
        devops: "ئۆتۆمەیشن و بنکەی دراوە (DevOps & Tools)",
        creative: "دیزاین و گرافیک (Creative Design)",
      },
    },
    experience: {
      title: "ڕێڕەوی کار و ئەزموون",
      subtitle: "مێژووی چالاکی و کارکردنم لەگەڵ تیم و پڕۆژە جۆراوجۆرەکان",
      present: "ئێستا",
      roles: {
        luximo: {
          title: "هاودامەزرێنەر و سەرپەرشتیاری باکێند",
          company: "لوکسیمۆ (LUXIMO)",
          period: "1404 - هەتا ئێستا",
          desc: "تەلارسازی ژێرخانی باکێندی پلاتفۆرمی لوکسیمۆ. سازکردنی سیستمی سینکی آنی لە نێوان سندووق، میواندار، چێشتخانە و کڕیار بە Socket.io و کشینگی ناو RAM.",
        },
        freelance: {
          title: "بەرنامەنووسی فول‌ستاک و بۆتی تێلێگرام",
          company: "فریلەنس و پڕۆژەی سەربەخۆ",
          period: "1398 - هەتا ئێستا",
          desc: "دروستکردنی دەیان بۆتی پێشکەوتووی تێلێگرام بە Python و چارەسەری کێشەی داتابەیس بۆ دەها هەزار بەکارهێنەر.",
        },
        vira: {
          title: "بەرنامەنووسی وێب و دیزاینەری باڵا",
          company: "کۆمەڵەی فێرکاری ویراکۆنکوور",
          period: "1399 - 1403",
          desc: "سازکردن و بەڕێوەبردنی سایتی فێرکاری و پۆرتاڵی خوێندکاران هاوڕێ دەگەڵ بەڕێوەبردنی هونەری و دیزاینی پەیجی فەرمی.",
        },
        digihost: {
          title: "ئەندازیاری ئۆتۆمەیشن و سرڤەری لینوکس",
          company: "دیجی‌هۆست (DigiHost)",
          period: "1399 - 1402",
          desc: "نووسینی سکریپتی ئۆتۆماتیکی دابینکردنی هاست و سرڤەر بە Python/PHP و دروستکردنی بۆتی تێلێگرام بۆ بەڕێوەبردنی سێرڤەر لە ڕێگەی cPanel.",
        },
        leaderpack: {
          title: "دیزاینەری UI/UX و هوویەتی بینراو",
          company: "لیدەرپاک (Leaderpack)",
          period: "1398 - 1400",
          desc: "دیزاینی لۆگۆ، پاکێجینگ و رووکاری نەرمەکاڵا کە بووە هۆی تێگەیشتنی قووڵم لە پێداویستییەکانی ڕووکار بۆ بەستنەوە بە باکێند.",
        },
      },
    },
    terminal: {
      title: "کۆنسۆڵی گەشەپێدەر (Ermiya Shell)",
      welcome: "بەخێربێن بۆ ترمیناڵ. وشەی help بنووسە بۆ دیتنی دەستوورەکان.",
      placeholder: "فەرمانێک بنووسە (وەک: help, bio, projects, skills, hire)...",
      helpText: "فەرمانەکان: bio | projects | skills | contact | hire | clear",
    },
    contact: {
      title: "پەیوەندی و گفتوگۆ",
      subtitle: "خۆشحاڵ دەبم بە قسەکردن دەربارەی پڕۆژەی هاوبەش یان هەلی کاری نوێ",
      emailCopied: "ئیمەیل کۆپی کرا!",
      copyEmail: "کۆپیکردنی ئیمەیل",
      sendMessage: "ناردنی پەیامی ڕاستەوخۆ",
      telegramDirect: "نامە لە تێلێگرام",
      githubProfile: "گیت‌هاب",
      instagramProfile: "ئینستاگرام",
      phoneCall: "پەیوەندی تەلەفۆنی",
      availableBadge: "ئامادەم بۆ وەڵامدانەوە",
    },
    footer: {
      designedBy: "بە وردەکاری و دیزاینی دڵنەواز ساز کراوە لە لایەن ئێرمیا حەیدەری",
      rights: "هەموو مافەکانی پارێزراوە.",
    },
  },

  de: {
    nav: {
      about: "Über mich",
      projects: "Projekte",
      skills: "Fähigkeiten",
      experience: "Erfahrung",
      contact: "Kontakt",
      resume: "Lebenslauf",
    },
    hero: {
      statusBadge: "Verfügbar für innovative Projekte & Engineering-Rollen",
      greeting: "Hallo, ich bin",
      name: "Ermiya Heidari",
      role: "Lead Back-End Entwickler & Mitgründer bei LUXIMO",
      headline: "Architektur skalierbarer verteilter Systeme & echtzeitfähiger Infrastrukturen",
      subheadline: "Verbindung tiefer serverseitiger Logik mit ruhiger, minimalistischer Ästhetik. Spezialisiert auf Node.js/MongoDB Echtzeit-Mikroservices, POS-Hardware-Integration und Cloud-Automatisierung.",
      ctaProjects: "Projekte ansehen",
      ctaContact: "Kontakt aufnehmen",
      stats: {
        uptime: "99.99%",
        uptimeLabel: "Systemverfügbarkeit",
        users: "+50K",
        usersLabel: "Aktive Bot-Nutzer",
        latency: "<50ms",
        latencyLabel: "Echtzeit-Latenz",
        years: "+6",
        yearsLabel: "Jahre Erfahrung",
      },
    },
    about: {
      title: "Über mich",
      subtitle: "Entwicklung eleganter, performanter und langlebiger Softwarelösungen",
      paragraph1: "Ich bin Ermiya Heidari, Lead Back-End Entwickler und Mitgründer der Cloud-Plattform LUXIMO. Mein Hauptfokus liegt auf resilienten Systemarchitekturen, Echtzeit-Datensynchronisation und skalierbaren Microservices.",
      paragraph2: "Von der hardwarenahen Anbindung iranischer Bank-POS-Terminals über hochlastfähige Telegram-Bots bis hin zu reaktiven mobilen Download-Managern liebe ich es, komplexe Herausforderungen in intuitive und ästhetische Erlebnisse zu verwandeln.",
      highlights: [
        {
          title: "Skalierbare Cloud-Architektur",
          desc: "Robuste RESTful-APIs und Microservices mit Node.js, Express und performanten MongoDB-Pipelines.",
        },
        {
          title: "Echtzeit-Synchronisation",
          desc: "Latenzarme bidirektionale Kommunikation mit Socket.io und In-Memory-RAM-Caching.",
        },
        {
          title: "Hardware- & POS-Integration",
          desc: "Direkte Brücken zwischen Webapplikationen und Kartenterminals via DLL-Interop & TCP-Sockets.",
        },
        {
          title: "Minimalistisches UX-Gespür",
          desc: "Harmonische Verbindung von Backend-Effizienz mit sauberer Typografie und visueller Ruhe.",
        },
      ],
    },
    projects: {
      title: "Ausgewählte Projekte",
      subtitle: "Eine Auswahl entwickelter Cloud-Systeme, mobiler Apps und Infrastruktur-Tools",
      all: "Alle",
      saas: "Cloud & SaaS",
      mobile: "Mobile Apps",
      hardware: "Hardware & FinTech",
      bots: "Bots & Automation",
      viewDetails: "Details ansehen",
      viewCode: "Quellcode",
      liveDemo: "Live-Demo",
      keyFeatures: "Hauptmerkmale",
      techStack: "Technologien",
      architecture: "Architektur & Besonderheiten",
    },
    skills: {
      title: "Fähigkeiten & Technologien",
      subtitle: "Technologien, die ich täglich zur Lösung komplexer Aufgaben einsetze",
      categories: {
        backend: "Backend & Systeme",
        frontend: "Frontend & Mobile",
        devops: "Automation, DB & Cloud",
        creative: "Design & UI/UX",
      },
    },
    experience: {
      title: "Berufserfahrung",
      subtitle: "Mein Werdegang bei der Entwicklung realer Plattformen und technischer Leitung",
      present: "Heute",
      roles: {
        luximo: {
          title: "Mitgründer & Lead Back-End Engineer",
          company: "LUXIMO",
          period: "2025 - Heute",
          desc: "Entwurf und Realisierung der gesamten Cloud-Infrastruktur für Restaurantmanagement. Echtzeit-Synchronisation zwischen Kassen, Handhelds, Küche und Gästen via Socket.io und In-Memory-RAM-Caching. Entwicklung der PcPos-Zahlungsbrücke.",
        },
        freelance: {
          title: "Full-Stack & Bot Entwickler",
          company: "Freelance",
          period: "2019 - Heute",
          desc: "Entwicklung zahlreicher hochskalierbarer Telegram-Bots mit Python Asyncio und Telegram API für Zehntausende aktive Benutzer mit automatisierter Zahlungsabwicklung.",
        },
        vira: {
          title: "Full-Stack Entwickler & Senior Designer",
          company: "ViraKonkur Bildungsplattform",
          period: "2020 - 2024",
          desc: "Architektur und Deployment einer E-Learning-Plattform mit Schülerportalen. Künstlerische Leitung und Design des gesamten visuellen Markenauftritts.",
        },
        digihost: {
          title: "Automatisierungs- & Serveringenieur",
          company: "DigiHost",
          period: "2020 - 2023",
          desc: "Erstellung automatisierter Bereitstellungsskripte mit Python und PHP für Linux/cPanel. Entwicklung eines Telegram-Bot-Gateways zur automatisierten Serververwaltung.",
        },
        leaderpack: {
          title: "UI/UX & Markenidentitätsdesigner",
          company: "Leaderpack",
          period: "2019 - 2021",
          desc: "Gestaltung von Markenidentitäten, Verpackungen und UI-Prototypen, die das tiefere Verständnis für die Schnittstelle zwischen Front- und Backend prägten.",
        },
      },
    },
    terminal: {
      title: "Entwickler-Konsole (Ermiya Shell)",
      welcome: "Willkommen in der interaktiven Konsole. Tippen Sie 'help' ein, um Befehle anzuzeigen.",
      placeholder: "Befehl eingeben (z. B. help, bio, projects, skills, hire)...",
      helpText: "Verfügbare Befehle: bio | projects | skills | contact | hire | clear",
    },
    contact: {
      title: "Kontakt",
      subtitle: "Offen für anspruchsvolle Kooperationen, technische Diskussionen und neue Projekte",
      emailCopied: "E-Mail-Adresse kopiert!",
      copyEmail: "E-Mail kopieren",
      sendMessage: "Direktnachricht senden",
      telegramDirect: "Chat via Telegram",
      githubProfile: "GitHub Profil",
      instagramProfile: "Instagram",
      phoneCall: "Telefonanruf",
      availableBadge: "Verfügbar für neue Herausforderungen",
    },
    footer: {
      designedBy: "Präzise und ästhetisch entwickelt von Ermiya Heidari",
      rights: "Alle Rechte vorbehalten.",
    },
  },
};
