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
    activeWorkTitle: string;
    luximoTitle: string;
    luximoBadge: string;
    luximoDesc: string;
    darvishkhanTitle: string;
    darvishkhanBadge: string;
    darvishkhanDesc: string;
    foxloaderTitle: string;
    foxloaderBadge: string;
    foxloaderDesc: string;
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
    data: string;
    mobile: string;
    hardware: string;
    bots: string;
    viewDetails: string;
    viewCode: string;
    liveDemo: string;
    keyFeatures: string;
    techStack: string;
    architecture: string;
    confidentialBadge: string;
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
    formTitle: string;
    formSubtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    subjectLabel: string;
    subjectPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitBtn: string;
    sendingBtn: string;
    successTitle: string;
    successDesc: string;
    sendAnother: string;
    errorMsg: string;
    fallbackMailto: string;
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
      statusBadge: "",
      greeting: "سلام، من",
      name: "ارمیا حیدری",
      role: "مدیرعامل شرکت هوش‌افزار زمرد و مهندس ارشد بک‌اند لوکسیمو",
      headline: "توسعه سیستم‌های بلادرنگ، معماری بک‌اند و یکپارچه‌سازی سخت‌افزار",
      subheadline: "طراحی و استقرار میکروسرویس‌های Node.js و MongoDB، پل‌های ارتباطی سخت‌افزاری با پایانه‌های پوز بانکی، و توسعه اتوماسیون‌های لینوکس و تلگرام.",
      ctaProjects: "مشاهده پروژه‌ها",
      ctaContact: "ارتباط مستقیم",
      activeWorkTitle: "پروژه‌ها و وضعیت فعلی",
      luximoTitle: "لوکسیمو (هوش‌افزار زمرد)",
      luximoBadge: "فعال در ۱۵+ مجموعه",
      luximoDesc: "پلتفرم ابری مدیریت و اتوماسیون رستوران با دامنه luximo.ir.",
      darvishkhanTitle: "فروشگاه لوازم موسیقی درویش‌خان",
      darvishkhanBadge: "در حال توسعه",
      darvishkhanDesc: "فروشگاه آنلاین تخصصی ساز، ادوات و تجهیزات موسیقی در سنندج.",
      foxloaderTitle: "دانلود منیجر FoxLoader",
      foxloaderBadge: "در حال توسعه",
      foxloaderDesc: "دانلود منیجر فوق‌سریع چندنخی با هسته Rust و رابط کاربری Fluent ویندوز ۱۱.",
    },
    about: {
      title: "درباره من",
      subtitle: "تمرکز بر پایداری سیستم، کدهای تمیز و حل چالش‌های واقعی پروداکشن",
      paragraph1: "من ارمیا حیدری هستم؛ مدیرعامل و هم‌بنیان‌گذار شرکت هوش‌افزار زمرد (لوکسیمو) و مهندس ارشد بک‌اند. در طول سال‌های فعالیتم، تمرکز اصلی من بر طراحی معماری‌های تاب‌آور، سیستم‌های بلادرنگ با Socket.io و پردازش داده‌های توزیع‌شده بوده است.",
      paragraph2: "از برقراری ارتباط وب‌اپلیکیشن‌ها با پایانه‌های کارت‌خوان بانکی (PcPos) از طریق سوکت و لایه‌های نیتیو گرفته تا توسعه ربات‌های تعاملی تلگرام و اپلیکیشن‌های کاربردی، اولویت من ساخت ابزارهایی است که در دنیای واقعی با نهایت پایداری کار کنند.",
      highlights: [
        {
          title: "معماری بک‌اند و میکروسرویس",
          desc: "طراحی APIهای RESTful پایدار با Node.js، Express و مدل‌سازی داده در MongoDB.",
        },
        {
          title: "ارتباطات بلادرنگ (Real-Time)",
          desc: "همگام‌سازی لحظه‌ای داده‌ها میان سیستم‌های توزیع‌شده با Socket.io و کش سرور.",
        },
        {
          title: "اتصال به پایانه‌های پوز بانکی",
          desc: "پل ارتباطی مستقیم مرورگر با کارت‌خوان‌های بانکی کشور (PcPos) از طریق سوکت و پروتکل‌های شبکه.",
        },
        {
          title: "اتوماسیون و اسکریپتینگ",
          desc: "توسعه بات‌های تلگرام با پایتون، اتوماسیون لینوکس و مدیریت دیتابیس‌های چند ده‌هزار کاربری.",
        },
      ],
    },
    projects: {
      title: "ویترین پروژه‌ها",
      subtitle: "منتخبی از سیستم‌ها، محصولات ابری و پلتفرم‌های مهندسی‌شده",
      all: "همه",
      saas: "ابری و SaaS",
      data: "داده و ابزارها",
      mobile: "موبایل",
      hardware: "سخت‌افزار و فین‌تک",
      bots: "ربات و اتوماسیون",
      viewDetails: "مشاهده جزئیات",
      viewCode: "سورس کد",
      liveDemo: "پیش‌نمایش آنلاین",
      keyFeatures: "ویژگی‌های شاخص",
      techStack: "تکنولوژی‌های استفاده‌شده",
      architecture: "نکات معماری و فنی",
      confidentialBadge: "سورس‌کد و رابط کاربری محرمانه (NDA)",
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
          title: "مدیرعامل و مدیر ارشد بک‌اند",
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
      formTitle: "ارسال پیام مستقیم به ایمیل",
      formSubtitle: "فرم زیر را پر کنید تا پیام شما بلافاصله به ایمیل شخصی من ارسال شود.",
      nameLabel: "نام و نام خانوادگی",
      namePlaceholder: "مثال: علی رضایی",
      emailLabel: "آدرس ایمیل شما",
      emailPlaceholder: "yourname@example.com",
      subjectLabel: "موضوع پیام",
      subjectPlaceholder: "پیشنهاد همکاری، پروژه یا سوال فنی...",
      messageLabel: "متن پیام",
      messagePlaceholder: "توضیحات پروژه، نیازمندی‌ها یا جزئیات مورد نظرتان را اینجا بنویسید...",
      submitBtn: "ارسال پیام به ایمیل ارمیا",
      sendingBtn: "در حال ارسال پیام...",
      successTitle: "پیام شما با موفقیت ارسال شد!",
      successDesc: "ایمیل شما را دریافت کردم و در سریع‌ترین زمان ممکن به آن پاسخ خواهم داد.",
      sendAnother: "ارسال یک پیام دیگر",
      errorMsg: "خطا در ارسال پیام رخ داد. لطفاً مجدداً تلاش کنید یا مستقیماً ایمیل بزنید.",
      fallbackMailto: "ارسال با اپلیکیشن ایمیل (Mailto)",
    },
    footer: {
      designedBy: "طراحی و توسعه توسط ارمیا حیدری",
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
      statusBadge: "",
      greeting: "Hello, I am",
      name: "Ermiya Heidari",
      role: "CEO & Lead Back-End Engineer at Hoosh Afzar Zomorrod (LUXIMO)",
      headline: "Distributed Systems, Real-Time Architecture & Hardware Integration",
      subheadline: "Designing and deploying Node.js/MongoDB microservices, local bank POS terminal hardware bridges, and Linux/Telegram automations.",
      ctaProjects: "Explore Projects",
      ctaContact: "Get in Touch",
      activeWorkTitle: "Current Focus & Deployments",
      luximoTitle: "LUXIMO (Hoosh Afzar Zomorrod)",
      luximoBadge: "Live in 15+ Branches",
      luximoDesc: "Cloud restaurant management and automation platform at luximo.ir.",
      darvishkhanTitle: "Darvish Khan Music Instruments Store",
      darvishkhanBadge: "In Development",
      darvishkhanDesc: "Specialized online store for musical instruments and accessories in Sanandaj.",
      foxloaderTitle: "FoxLoader Download Manager",
      foxloaderBadge: "In Development",
      foxloaderDesc: "Ultra-fast multi-threaded download manager with a Rust core and native Windows 11 Fluent UI.",
    },
    about: {
      title: "About Me",
      subtitle: "Focusing on system reliability, clean architecture, and real production performance",
      paragraph1: "I am Ermiya Heidari, CEO and co-founder at Hoosh Afzar Zomorrod (LUXIMO) and lead back-end engineer. Over the past several years, my work has centered on architecting resilient server services, sub-second real-time state synchronization, and scalable data systems.",
      paragraph2: "From connecting web applications with bank POS terminals using local sockets and native drivers to developing high-throughput Telegram bots and desktop data tools, I focus on software that runs dependably in production.",
      highlights: [
        {
          title: "Backend & Microservices",
          desc: "Designing resilient RESTful services with Node.js, Express, and structured MongoDB pipelines.",
        },
        {
          title: "Real-Time State Sync",
          desc: "Low-latency bidirectional data streaming with Socket.io and in-memory server RAM caching.",
        },
        {
          title: "POS Terminal Integration",
          desc: "Connecting web apps directly to banking terminals (PcPos) via DLL interop and TCP socket protocols.",
        },
        {
          title: "Automation & Scripting",
          desc: "Asyncio Python Telegram bots, Linux server administration, and multi-thousand user database workflows.",
        },
      ],
    },
    projects: {
      title: "Featured Projects",
      subtitle: "Handcrafted cloud systems, mobile apps, and infrastructure tools",
      all: "All",
      saas: "Cloud & SaaS",
      data: "Data & Desktop",
      mobile: "Mobile Apps",
      hardware: "Hardware & FinTech",
      bots: "Bots & Automation",
      viewDetails: "View Details",
      viewCode: "Source Code",
      liveDemo: "Live Preview",
      keyFeatures: "Key Highlights",
      techStack: "Tech Stack",
      architecture: "Architecture Overview",
      confidentialBadge: "Proprietary Source & UI (NDA)",
    },
    skills: {
      title: "Skills & Arsenal",
      subtitle: "Technologies and tools I work with daily across production systems",
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
          title: "CEO & Lead Back-End Engineer",
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
      formTitle: "Send a Direct Message",
      formSubtitle: "Fill out the form below to deliver your message straight to my personal inbox.",
      nameLabel: "Full Name",
      namePlaceholder: "e.g., John Doe",
      emailLabel: "Email Address",
      emailPlaceholder: "john@example.com",
      subjectLabel: "Subject",
      subjectPlaceholder: "Project inquiry, collaboration, or tech chat...",
      messageLabel: "Your Message",
      messagePlaceholder: "Describe your project or inquiry details here...",
      submitBtn: "Send Message to Ermiya",
      sendingBtn: "Sending Message...",
      successTitle: "Message Delivered Successfully!",
      successDesc: "Thank you for reaching out. I have received your email and will reply promptly.",
      sendAnother: "Send Another Message",
      errorMsg: "Failed to send message. Please try again or reach out via email directly.",
      fallbackMailto: "Send via Email Client (Mailto)",
    },
    footer: {
      designedBy: "Designed & Engineered by Ermiya Heidari",
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
      statusBadge: "",
      greeting: "سڵاو، ئەمن",
      name: "ئێرمیا حەیدەری",
      role: "بەڕێوەبەری جێبەجێکار (CEO) و ئەندازیاری ارشدی باکێند لە هۆش‌ئەفزار زومڕود (لوکسیمۆ)",
      headline: "تەلارسازی سیستەمی باکێند، خزمەتگوزاری ڕاستەوخۆ و پەیوەندی سەخت‌ئامێر",
      subheadline: "دیزاینی مایکرۆسێرڤیسی Node.js و MongoDB، بەستنەوەی پۆزی بانکی بە نەرمەکاڵا و ئۆتۆمەیشنی سرڤەری لینوکس و بۆتی تێلێگرام.",
      ctaProjects: "دیتنی پڕۆژەکان",
      ctaContact: "پەیوەندیم پێوە بکە",
      activeWorkTitle: "پڕۆژەکان و دۆخی ئێستا",
      luximoTitle: "لوکسیمۆ (هۆش‌ئەفزار زومڕود)",
      luximoBadge: "چالاک لە ١٥+ چێشتخانە",
      luximoDesc: "پلاتفۆرمی هەوری بەڕێوەبردنی چێشتخانە لەسەر luximo.ir.",
      darvishkhanTitle: "فرۆشگای مۆسیقای دەروێش‌خان",
      darvishkhanBadge: "لە پەرەپێداندایە",
      darvishkhanDesc: "فرۆشگای ئۆنلاینی تایبەتی ساز و ئامێرەکانی مۆسیقا لە سنە.",
      foxloaderTitle: "فۆکس‌لۆدەر (FoxLoader)",
      foxloaderBadge: "لە پەرەپێداندایە",
      foxloaderDesc: "داونلۆد مەنەجەری فرەتەنی خێرا بە کرۆکی Rust و ڕووکاری فلوێنت بۆ ویندۆز ١١.",
    },
    about: {
      title: "دەربارەی من",
      subtitle: "سەرنج لەسەر بەردەوامی سیستەم، کۆدی خاوێن و چارەسەری کێشە لە پرۆداکشن",
      paragraph1: "ئەمن ئێرمیا حەیدەریم؛ بەڕێوەبەری جێبەجێکار (CEO) و هاودامەزرێنەری کۆمپانیای لوکسیمۆ و ئەندازیاری باکێند. لەم ساڵانەدا سەرنجی سەرەکیم لەسەر دیزاینی سیستمی قایم، داتای بەربڵاو و پەیوەندی ڕاستەوخۆ بە Socket.io بووە.",
      paragraph2: "لە گرێدانی ئامێرەکانی کارتی بانکییەوە لە ڕێی سۆکێت و شێوازی نەیتیڤ هەتا دروستکردنی بۆتی خێرای تێلێگرام و ئەپڵیکەیشن، ئامانجم دروستکردنی نەرمەکاڵایە کە لە جیهانی ڕاستەقینەدا بەردەوام و خێرا کار بکات.",
      highlights: [
        {
          title: "باکێند و مایکرۆسێرڤیس",
          desc: "دیزاینی RESTful API و خزمەتگوزاری قایم بە Node.js، Express و مۆدێلسازی داتا بە MongoDB.",
        },
        {
          title: "پەیوەندی ڕاستەوخۆ (Real-Time)",
          desc: "سینکی آنی داتا لە نێوان سیستەمەکان بە Socket.io و کەشینگی خێرای زاکیرە.",
        },
        {
          title: "گرێدانی پۆزی بانکی",
          desc: "پردی پەیوەندی ڕاستەوخۆی وێب دەگەڵ ئامێری پۆزی بانکی لە ڕێگەی سۆکێت و پرۆتۆکۆڵی تۆڕ.",
        },
        {
          title: "ئۆتۆمەیشن و سکریپت",
          desc: "پەرەپێدانی بۆتی تێلێگرام بە پایتۆن، ئۆتۆمەیشنی سرڤەری لینوکس و بەڕێوەبردنی داتابەیسی گەورە.",
        },
      ],
    },
    projects: {
      title: "پڕۆژە دەستنیشانکراوەکان",
      subtitle: "کۆمەڵێک لە سیستم، ئەپ و ئۆتۆمەیشنە دروستکراوەکانم",
      all: "هەموو",
      saas: "هەوری و SaaS",
      data: "داتا و کەرەستە",
      mobile: "مۆبایل",
      hardware: "سەخت‌ئامێر و فین‌تەک",
      bots: "بۆت و ئۆتۆمەیشن",
      viewDetails: "وردەکاری پڕۆژە",
      viewCode: "سۆرس کۆد",
      liveDemo: "پێشبینینی ئۆنلاین",
      keyFeatures: "تایبەتمەندییە سەرەکییەکان",
      techStack: "تەکنەلۆژیاکان",
      architecture: "نەخشەی ئەندازیاری",
      confidentialBadge: "کۆد و ڕووکاری پارێزراو (NDA)",
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
          title: "بەڕێوەبەری جێبەجێکار (CEO) و سەرپەرشتیاری باکێند",
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
      formTitle: "ناردنی پەیامی ڕاستەوخۆ",
      formSubtitle: "ئەم فۆرمە پڕبکەرەوە تاوەکو ڕاستەوخۆ بۆ ئیمەیلی تایبەتی من بنێردرێت.",
      nameLabel: "ناوی تەواو",
      namePlaceholder: "بۆ نموونە: ئاراس ئەحمەد",
      emailLabel: "ناونیشانی ئیمەیل",
      emailPlaceholder: "aras@example.com",
      subjectLabel: "بابەتی پەیام",
      subjectPlaceholder: "پڕۆژەی نوێ، هاوکاری یان پرسیار...",
      messageLabel: "دەقی پەیام",
      messagePlaceholder: "وردەکاری پڕۆژە یان مەبەستی پەیامەکەت لێرە بنووسە...",
      submitBtn: "ناردنی پەیام بۆ ئێرمیا",
      sendingBtn: "لە حاڵی ناردندا...",
      successTitle: "پەیامەکەت بە سەرکەوتوویی نێردرا!",
      successDesc: "پەیامەکەت گەیشتە دەستم و لە زووترین کاتدا وەڵامت دەدەمەوە.",
      sendAnother: "ناردنی پەیامێکی تر",
      errorMsg: "هەڵە لە ناردنی پەیام ڕوویدا. تکایە دووبارە هەوڵ بدەرەوە یان ڕاستەوخۆ ئیمەیل بنێرە.",
      fallbackMailto: "ناردن لەڕێگەی ئەپی ئیمەیل (Mailto)",
    },
    footer: {
      designedBy: "دیزاین و پەرەپێدان لەلایەن ئێرمیا حەیدەری",
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
      statusBadge: "",
      greeting: "Hallo, ich bin",
      name: "Ermiya Heidari",
      role: "CEO & Lead Back-End Entwickler bei Hoosh Afzar Zomorrod (LUXIMO)",
      headline: "Verteilte Systeme, Echtzeit-Architektur & Hardware-Integration",
      subheadline: "Entwicklung und Bereitstellung von Node.js- und MongoDB-Microservices, Bank-POS-Hardware-Schnittstellen und Linux-/Telegram-Automatisierungen.",
      ctaProjects: "Projekte ansehen",
      ctaContact: "Kontakt aufnehmen",
      activeWorkTitle: "Aktuelle Projekte & Status",
      luximoTitle: "LUXIMO (Hoosh Afzar Zomorrod)",
      luximoBadge: "Aktiv in 15+ Filialen",
      luximoDesc: "Cloud-Plattform für Restaurantmanagement und Automation auf luximo.ir.",
      darvishkhanTitle: "Musikinstrumente Darvish Khan",
      darvishkhanBadge: "In Entwicklung",
      darvishkhanDesc: "Spezialisierter Online-Shop für Musikinstrumente und Zubehör in Sanandaj.",
      foxloaderTitle: "FoxLoader Download-Manager",
      foxloaderBadge: "In Entwicklung",
      foxloaderDesc: "Multi-Thread-Download-Manager mit Rust-Engine und nativer Windows-11-Fluent-Oberfläche.",
    },
    about: {
      title: "Über mich",
      subtitle: "Fokus auf Systemstabilität, sauberen Code und reale Produktionsanforderungen",
      paragraph1: "Ich bin Ermiya Heidari, CEO und Mitgründer von Hoosh Afzar Zomorrod (LUXIMO) sowie Lead Back-End Entwickler. Mein Arbeitsschwerpunkt liegt auf resilienten Serverarchitekturen, Echtzeit-Datensynchronisation mit Socket.io und verteilten Datensystemen.",
      paragraph2: "Von der Anbindung von Webanwendungen an Bank-POS-Terminals über Sockets und native Treiber bis hin zu Telegram-Bots und Desktop-Tools baue ich Software, die im Produktivbetrieb zuverlässig funktioniert.",
      highlights: [
        {
          title: "Backend & Microservices",
          desc: "RESTful-APIs und Services mit Node.js, Express und strukturierter Datenmodellierung in MongoDB.",
        },
        {
          title: "Echtzeit-Synchronisation",
          desc: "Bidirektionale Datenübertragung mit geringer Latenz via Socket.io und In-Memory-Server-Caching.",
        },
        {
          title: "Bank-POS-Integration",
          desc: "Direkte Schnittstelle zwischen Browser und Bankterminals (PcPos) über Socket- und Netzwerkprotokolle.",
        },
        {
          title: "Automatisierung & Skripte",
          desc: "Telegram-Bots mit Python, Linux-Serverautomatisierung und Verwaltung großer Datensätze.",
        },
      ],
    },
    projects: {
      title: "Ausgewählte Projekte",
      subtitle: "Eine Auswahl entwickelter Cloud-Systeme, mobiler Apps und Infrastruktur-Tools",
      all: "Alle",
      saas: "Cloud & SaaS",
      data: "Daten & Desktop",
      mobile: "Mobile Apps",
      hardware: "Hardware & FinTech",
      bots: "Bots & Automation",
      viewDetails: "Details ansehen",
      viewCode: "Quellcode",
      liveDemo: "Live-Demo",
      keyFeatures: "Hauptmerkmale",
      techStack: "Technologien",
      architecture: "Architektur & Besonderheiten",
      confidentialBadge: "Vertraulicher Quellcode & UI (NDA)",
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
          title: "CEO & Lead Back-End Entwickler",
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
      formTitle: "Direktnachricht senden",
      formSubtitle: "Füllen Sie das Formular aus, um Ihre Nachricht direkt an mein persönliches Postfach zu senden.",
      nameLabel: "Vollständiger Name",
      namePlaceholder: "z. B. Max Mustermann",
      emailLabel: "E-Mail-Adresse",
      emailPlaceholder: "max@example.de",
      subjectLabel: "Betreff",
      subjectPlaceholder: "Projektanfrage, Zusammenarbeit oder technische Frage...",
      messageLabel: "Nachricht",
      messagePlaceholder: "Beschreiben Sie hier Ihre Projektanforderungen oder Ihr Anliegen...",
      submitBtn: "Nachricht an Ermiya senden",
      sendingBtn: "Wird gesendet...",
      successTitle: "Nachricht erfolgreich versendet!",
      successDesc: "Vielen Dank für Ihre Nachricht. Ich habe Ihre E-Mail erhalten und werde mich zeitnah melden.",
      sendAnother: "Weitere Nachricht senden",
      errorMsg: "Fehler beim Senden. Bitte versuchen Sie es erneut oder schreiben Sie direkt per E-Mail.",
      fallbackMailto: "Über E-Mail-Programm senden (Mailto)",
    },
    footer: {
      designedBy: "Entworfen & Entwickelt von Ermiya Heidari",
      rights: "Alle Rechte vorbehalten.",
    },
  },
};
