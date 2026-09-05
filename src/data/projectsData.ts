import type { Language } from './translations';

export interface ProjectItem {
  id: string;
  category: 'saas' | 'mobile' | 'hardware' | 'bots';
  title: Record<Language, string>;
  summary: Record<Language, string>;
  description: Record<Language, string>;
  architecture: Record<Language, string>;
  keyFeatures: Record<Language, string[]>;
  tags: string[];
  metrics?: string;
  githubUrl?: string;
  liveUrl?: string;
  iconName: string;
}

export const projectsData: ProjectItem[] = [
  {
    id: 'luximo-core',
    category: 'saas',
    iconName: 'Server',
    metrics: '99.99% Uptime | <50ms Sync',
    tags: ['Node.js', 'Express', 'MongoDB', 'Socket.io', 'RAM Cache', 'Microservices'],
    liveUrl: 'https://luximo.ir',
    githubUrl: 'https://github.com/erm-iya',
    title: {
      fa: 'پلتفرم ابری لوکسیمو (LUXIMO Cloud SaaS)',
      en: 'LUXIMO Cloud SaaS & Core Architecture',
      ku: 'پلاتفۆرمی هەوری لوکسیمۆ (LUXIMO SaaS)',
      de: 'LUXIMO Cloud SaaS & Kerninfrastruktur',
    },
    summary: {
      fa: 'معماری و توسعه زیرساخت بلادرنگ پلتفرم جامع مدیریت رستوران با پردازش بار سنگین.',
      en: 'Architected the scalable real-time cloud SaaS for complete restaurant & retail management.',
      ku: 'تەلارسازی ژێرخانی هەوری لوکسیمۆ بۆ بەڕێوەبردنی چێشتخانە و هۆتێل بە سووکێت و مۆنگۆ.',
      de: 'Skalierbare Echtzeit-Cloud-Infrastruktur für ganzheitliches Restaurant- und Gastronomiemanagement.',
    },
    description: {
      fa: 'طراحی صفر تا صد زیرساخت سمت سرور پلتفرم لوکسیمو. این سیستم اتصال و همگام‌سازی آنی میان پنل‌های صندوق، تبلت‌های سفارش‌گیری گارسون، مانیتورهای آشپزخانه و منوی دیجیتال مشتریان را بدون افت اتصال مدیریت می‌کند.',
      en: 'Engineered the core server infrastructure for LUXIMO from scratch. Handles instant state synchronization between POS cash registers, waiter tablets, kitchen monitors, and customer digital menus with zero dropouts.',
      ku: 'دیزاین و پەرەپێدانی تەواوی باکێندی لوکسیمۆ. ئەم سیستمە پەیوەندی و سینکی آنی لە نێوان سندووق، میواندار، چێشتخانە و مێنیوی دیجیتالی موشتەری ڕادەگرێت بە بێ وەستان.',
      de: 'Entwicklung der gesamten Backend-Infrastruktur für LUXIMO von Grund auf. Ermöglicht nahtlose Zustandssynchronisation zwischen Kassen, Kellner-Tablets, Küchenmonitoren und Gästemenüs.',
    },
    architecture: {
      fa: 'پیاده‌سازی سوکت‌های پایدار Socket.io با قابلیت Reconnection خودکار، سیستم کشینگ حافظه موقت (RAM Caching) برای افزایش چشمگیر سرعت پاسخ‌دهی APIها، و منطق محاسباتی چندلایه برای فاکتور و پرداخت دنگی.',
      en: 'Resilient Socket.io architecture with automatic reconnection pipelines, server-side in-memory RAM caching for sub-50ms API throughput, and complex multi-party split-bill financial logic.',
      ku: 'سوودوەرگرتن لە Socket.io بۆ پێوەندی هەمیشەیی، سیستمی کەشینگی ناو RAM بۆ خێرایی سەرسوڕهێنەری وەڵامی API، و مەنتقی ژمێریاری پڕوردی پسووڵە.',
      de: 'Stabile Socket.io-Architektur mit automatischem Reconnect, serverinternem RAM-Caching für Reaktionszeiten unter 50 ms sowie mehrschichtiger Splittungs- und Abrechnungslogik.',
    },
    keyFeatures: {
      fa: [
        'همگام‌سازی بلادرنگ کلیه سفارش‌ها زیر ۵۰ میلی‌ثانیه',
        'موتور کش درون‌حافظه‌ای جهت کاهش چشمگیر کوئری‌های تکراری دیتابیس',
        'تولید خودکار Sitemap پویا با رندر سمت سرور برای سئوی برتر',
        'پشتیبانی از چندشعبه‌ای و چندمستاجری (Multi-tenant)',
      ],
      en: [
        'Sub-50ms real-time state synchronization across all terminal devices',
        'In-memory RAM caching layer drastically slashing redundant database reads',
        'Automated dynamic SSR sitemap generation for rapid Google indexing',
        'Multi-branch and multi-tenant enterprise data partitioning',
      ],
      ku: [
        'سینکی ڕاستەوخۆی دەستووری خواردنەکان ژێر ٥٠ میلی‌چرکە',
        'کەشینگی ناو RAM بۆ کەمکردنەوەی فەرمانەکانی سەر داتابەیس',
        'دروستکردنی ئۆتۆماتیکی سایت‌ماپ بۆ سێئۆی گۆگڵ',
        'پشتیوانی فرەلق و فرەبەکارهێنەر',
      ],
      de: [
        'Echtzeit-Statussynchronisation unter 50 ms auf allen Endgeräten',
        'In-Memory-RAM-Cache zur drastischen Reduzierung von Datenbankabfragen',
        'Automatische dynamische SSR-Sitemap-Generierung für Google-SEO',
        'Mandantenfähige Mandanten- und Filialunterstützung',
      ],
    },
  },
  {
    id: 'luximo-bridge',
    category: 'hardware',
    iconName: 'Cpu',
    metrics: '100% Native POS Integration',
    tags: ['Node.js', 'C++ DLL', 'PcPos', 'TCP/IP', 'Banking Protocols', 'Hardware'],
    githubUrl: 'https://github.com/erm-iya',
    title: {
      fa: 'پل سخت‌افزاری پوز بانکی (LUXIMO PcPos Bridge)',
      en: 'LUXIMO Banking PcPos Hardware Bridge',
      ku: 'پردی سەخت‌ئامێری پۆزی بانکی (PcPos Bridge)',
      de: 'LUXIMO Bank-PcPos Hardware-Brücke',
    },
    summary: {
      fa: 'اتصال مستقیم و بلادرنگ سامانه‌های وب به دستگاه‌های کارت‌خوان بانکی ایران (سامان، پاسارگاد و ...).',
      en: 'Direct hardware bridging between modern web browsers and Iranian bank POS card-readers.',
      ku: 'بەستنەوەی ڕاستەوخۆی سایتی وێب دەگەڵ ئامێری کارتی بانکی ئێران.',
      de: 'Direkte Hardware-Schnittstelle zwischen Webbrowsern und iranischen Bank-Kassenterminals.',
    },
    description: {
      fa: 'پروژه‌ای تخصصی برای حل یکی از بزرگ‌ترین چالش‌های وب در ایران: ایجاد ارتباط دوطرفه بین وب‌اپلیکیشن در مرورگر و کارت‌خوان‌های فیزیکی روی میز، چاپ فاکتور خودکار و کسر مبلغ دقیق بدون دخالت دستی.',
      en: 'Engineered a specialized local hardware bridge resolving web-to-device restrictions in Iran: enabling web applications to communicate bidirectionally with physical bank POS terminals, triggering automated split payments and receipts.',
      ku: 'پڕۆژەیەکی تایبەت بۆ چارەسەری گرێدانی سایتی ناو براوزەر دەگەڵ ئامێری فیزیکی پۆزی بانکی، دەرکردنی پسووڵەی خودکار بە بێ دەستکاری مرۆڤ.',
      de: 'Spezialisierte lokale Hardware-Brücke, die Webanwendungen mit physischen POS-Kartenterminals verbindet, um automatisierte Kartenzahlungen und Belegdruck ohne manuelle Eingabe auszulösen.',
    },
    architecture: {
      fa: 'استفاده از DLLهای نیتیو C++ (نظیر Saman SSP1126 و PEC)، اسکنر سوکت TCP/IP در شبکه محلی، و یک سرور میکرو WebSocket سبک روی سیستم صندوق.',
      en: 'Leveraged native C++ DLL interop, local network TCP/IP socket scanners, and an ultra-lightweight WebSocket gateway running locally on the POS machine.',
      ku: 'کەڵکوەرگرتن لە DLLـەکانی C++ و سکانەری تۆڕی TCP/IP و سرڤەرێکی سووکی WebSocket لەسەر سیستمی سندووق.',
      de: 'Nutzung nativer C++-DLL-Schnittstellen, lokaler TCP/IP-Netzwerkscanner und eines ressourcenschonenden WebSocket-Gateways auf dem Kassensystem.',
    },
    keyFeatures: {
      fa: [
        'ارسال آنی مبلغ فاکتور از وب به دستگاه پوز بدون خطای انسانی',
        'دریافت لحظه‌ای شماره پیگیری و شناسه پرداخت موفق بانکی',
        'سازگار با پروتکل‌های شرکت‌های پرداخت الکترونیک سامان و ایران‌کیش',
        'اسکنر خودکار آی‌پی دستگاه‌ها در شبکه محلی',
      ],
      en: [
        'Instant zero-touch bill amount transmission preventing human error',
        'Immediate capture of bank transaction reference and receipt status',
        'Compatible with major Iranian PSP protocols (Saman, PEC, etc.)',
        'Automatic local LAN IP scanner detecting connected terminals',
      ],
      ku: [
        'ناردنی خێرای بڕی پارە لە وێبەوە بۆ سەر ئامێری کارت‌خوان',
        'وەرگرتنەوەی کۆدی ڕەگیری و سەرکەوتنی پارەدان',
        'پشتیوانی لە پرۆتۆکۆڵە فەرمییەکانی پۆزی بانکی',
        'دۆزینەوەی ئۆتۆماتیکی ئایپی پۆز لەسەر تۆڕی ناوخۆیی',
      ],
      de: [
        'Fehlerfreie Betragsübertragung direkt aus dem Web auf das Terminal',
        'Sofortige Rückmeldung von Banktransaktions-ID und Zahlungsstatus',
        'Kompatibel mit den gängigsten iranischen PSP-Netzwerkprotokollen',
        'Automatischer IP-Scanner zur Erkennung verbundener Geräte im lokalen LAN',
      ],
    },
  },
  {
    id: 'ios-dl-manager',
    category: 'mobile',
    iconName: 'Smartphone',
    metrics: 'React Native & Liquid Glass UI',
    tags: ['React Native', 'Expo', 'TypeScript', 'Liquid Glass UI', 'FileSystem API', 'iOS'],
    githubUrl: 'https://github.com/erm-iya',
    title: {
      fa: 'اپلیکیشن دانلود منیجر iOS (Liquid Glass UI)',
      en: 'iOS Download Manager (Liquid Glass UI)',
      ku: 'ئەپی داگرتنی فایلی مۆبایل (iOS Liquid Glass)',
      de: 'iOS Download Manager (Liquid Glass UI)',
    },
    summary: {
      fa: 'دانلود منیجر موبایل با رابط کاربری فوق‌العاده مدرن شیشه‌ای مایع، دانلود پس‌زمینه و پلیر یکپارچه.',
      en: 'High-end mobile download manager featuring liquid glassmorphism, background worker downloads, and media vault.',
      ku: 'ئەپلیکەیشنی داگرتنی فایل بۆ مۆبایل بە دیزاینی شوشەیی سەردەمیانە و داگرتنی پشت‌سەحنە.',
      de: 'Mobile Download-Manager-App mit moderner Liquid-Glassmorphism-Optik, Hintergrund-Downloads und Mediathek.',
    },
    description: {
      fa: 'طراحی و پیاده‌سازی اپلیکیشن مدیریت دانلود پیشرفته برای iOS و Android با React Native و Expo. تمرکز اصلی بر رابط کاربری فوق‌العاده صیقلی، ترنزیشن‌های نرم و مدیریت بهینه صف دانلود فایل‌های حجیم.',
      en: 'Built an advanced mobile download manager for iOS and Android using React Native and Expo. Emphasized fluid liquid-glass visual ergonomics, responsive gesture physics, and persistent background file queuing.',
      ku: 'دروستکردنی ئەپێکی پێشکەوتووی بەڕێوەبردنی داگرتنی فایل بۆ ئایفۆن و ئەندرۆید بە ڕیئاکت نەیتیڤ و دیزاینی نایابی شوشەیی.',
      de: 'Entwicklung eines fortschrittlichen mobilen Download-Managers für iOS und Android mit React Native und Expo. Fokus auf flüssige Gesten und performante Download-Warteschlangen.',
    },
    architecture: {
      fa: 'استفاده از Expo FileSystem برای ذخیره‌سازی ایزوله، مدیریت صف دانلود مالتی‌ترد، و پکیج‌های اختصاصی بلور شیشه‌ای برای رسیدن به بالاترین نرخ ۶۰ فریم بر ثانیه.',
      en: 'Leveraged native Expo FileSystem background tasks, multi-threaded download chunking, and performant hardware-accelerated glass blur shaders.',
      ku: 'کەڵکوەرگرتن لە FileSystemی نەیتیڤ بۆ پاشەکەوتی داگرتنەکان و شوشەیی کردنی پەڕەکان بە شێوازی ۶۰ فریم.',
      de: 'Nutzung von Expo FileSystem Background Tasks, mehrfädigen Download-Queues und GPU-beschleunigten Glas-Blur-Shadern.',
    },
    keyFeatures: {
      fa: [
        'طراحی فوق‌العاده لوکس Liquid Glass مطابق استانداردهای طراحی اپل',
        'ادامه دانلود در پس‌زمینه سیستم حتی هنگام بسته بودن برنامه',
        'دسته‌بندی خودکار فایل‌ها (ویدیو، موزیک، اسناد و آرشیو)',
        'پخش‌کننده ویدیو و موزیک داخلی بدون نیاز به اپ جانبی',
      ],
      en: [
        'State-of-the-art liquid glassmorphic aesthetics adhering to Apple HIG',
        'Resilient background downloading resuming seamlessly on connection loss',
        'Smart automatic file sorting (media, audio, archives, documents)',
        'Built-in media player for instant preview and playback',
      ],
      ku: [
        'دیزاینی زۆر سەرنجڕاکێشی شوشەیی بە پێوانەی ستاندارد',
        'بەردەوامبوونی داگرتن لە پشتەوە تەنانەت ئەگەر ئەپ دابخرێت',
        'پۆلێنکردنی خۆکاری فایلەکان (ڤیدیۆ، دەنگ، دۆکیۆمێنت)',
        'پلەیری ناوەکی بۆ لێدانی ڕاستەوخۆی ڤیدیۆ و گۆرانی',
      ],
      de: [
        'Hochmoderne Liquid-Glassmorphism-Ästhetik nach Apple-Richtlinien',
        'Zuverlässige Hintergrund-Downloads mit automatischer Fortsetzung',
        'Intelligente automatische Dateisortierung nach Dateitypen',
        'Integrierter Mediaplayer zur direkten Wiedergabe',
      ],
    },
  },
  {
    id: 'luximo-tasks-bot',
    category: 'bots',
    iconName: 'Bot',
    metrics: '+50,000 Users Handled',
    tags: ['Python', 'Asyncio', 'SQLite', 'Telegram Bot API', 'Gantt Chart', 'Automation'],
    githubUrl: 'https://github.com/erm-iya',
    title: {
      fa: 'ربات هوشمند مدیریت تسک لوکسیمو (TTM Task Bot)',
      en: 'LUXIMO Smart Task Management Telegram Bot (TTM)',
      ku: 'بۆتی هۆشمەندی بەڕێوەبردنی کارەکانی لوکسیمۆ (TTM)',
      de: 'LUXIMO Task-Management Telegram-Bot (TTM)',
    },
    summary: {
      fa: 'ربات سازمانی تلگرام برای مدیریت وظایف تیم، استخراج گزارش‌های اکسل و نمودارهای گانت تعاملی.',
      en: 'Enterprise Telegram bot for team task coordination, automated reporting, and interactive Gantt charts.',
      ku: 'بۆتێکی پێشکەوتووی تێلێگرام بۆ بەڕێوەبردنی کارەکانی تیم و دەرکردنی ڕاپۆرتی گانت چارت.',
      de: 'Enterprise-Telegram-Bot für Aufgabenkoordination, automatisierte Berichte und interaktive Gantt-Diagramme.',
    },
    description: {
      fa: 'پروژه‌ای کامل برای مدیریت پروژه‌ها و گردش کار تیم در بستر تلگرام. با این ربات، اعضای تیم بدون نیاز به نرم‌افزارهای سنگین خارجی، وظایف خود را تعریف، پیگیری و با نمودارهای پیشرفته گانت تحلیل می‌کنند.',
      en: 'An all-in-one team workflow manager natively running inside Telegram. Team members define, prioritize, and track tasks with automated deadlines, Gantt chart visualizers, and rich telemetry.',
      ku: 'سیستمێکی تەواو بۆ بەڕێوەبردنی پرۆژەکانی تیم بە ناو تێلێگرام بە بێ پێویستی بە نەرمەکاڵای تر، دەگەڵ خشتەی گانت چارت.',
      de: 'Ganzheitliches Team-Workflow-System direkt in Telegram. Aufgabenverwaltung, Fristenkontrolle und interaktive Gantt-Diagramme für das gesamte Team.',
    },
    architecture: {
      fa: 'توسعه با Python Asyncio جهت مدیریت درخواست‌های همزمان بالا، معماری دیتابیس SQLite با ایندکس‌گذاری دقیق و تولید خروجی بصری نمودارهای گانت با HTML/JS داینامیک.',
      en: 'Engineered with Python Asyncio for high concurrency, indexed SQLite schema with automated backup pipelines, and dynamic HTML/JS Gantt chart export modules.',
      ku: 'نووسراو بە پایتۆن ئەسینک بۆ وەڵامدانەوەی خێرا، داتابەیسی خێرا و دەرکردنی وێنەی دیاگرامی گانت.',
      de: 'Implementiert mit Python Asyncio für hohe Nebenläufigkeit, indiziertem SQLite-Schema und dynamischen HTML/JS-Gantt-Exportmodulen.',
    },
    keyFeatures: {
      fa: [
        'سیستم یادآوری خودکار ددلاین‌ها به اعضای تیم',
        'تولید خروجی تصویری و تحلیلی Gantt Chart از پیشرفت کارها',
        'مدیریت دسترسی‌های چندسطحی (مدیر، سرپرست، کاربر)',
        'پشتیبان‌گیری خودکار از دیتابیس و ایمپورت/اکسپورت داده‌ها',
      ],
      en: [
        'Automated deadline alerting and proactive team notifications',
        'Dynamic interactive Gantt chart visualizer exporting to web & images',
        'Multi-tiered role-based access control (Admin, Lead, Contributor)',
        'Automated database snapshots and structured JSON/CSV data export',
      ],
      ku: [
        'ئاگادارکردنەوەی خۆکاری کاتی تەواوبوونی کارەکان بۆ ئەندامان',
        'دەرکردنی دیاگرامی گانت چارت بە شێوەی وێنە و ڕاپۆرت',
        'دیاریکردنی دەسەڵاتی جۆراوجۆر بۆ بەڕێوەبەر و کارمەند',
        'پاشەکەوت‌کردنی خۆکاری داتابەیس بە بێ مەترسی فەوتان',
      ],
      de: [
        'Automatische Fristenerinnerungen und proaktive Benachrichtigungen',
        'Dynamische Gantt-Diagramme als Web- und Bildexport',
        'Rollenbasierte Zugriffskontrolle (Admin, Lead, Mitglied)',
        'Automatische Datenbanksicherungen und strukturierter Datenexport',
      ],
    },
  },
  {
    id: 'planer-web',
    category: 'saas',
    iconName: 'LayoutDashboard',
    metrics: 'Ultra-fast Vite & Drag & Drop',
    tags: ['React', 'Vite', 'Node.js', 'Gantt Charts', 'Tailwind CSS', 'Drag & Drop'],
    githubUrl: 'https://github.com/erm-iya',
    title: {
      fa: 'سامانه برنامه‌ریزی تعاملی (Planer Web Suite)',
      en: 'Planer Interactive Roadmap & Task Suite',
      ku: 'سیستمی پلاندانانی چالاک (Planer Suite)',
      de: 'Planer Interaktive Projekt- und Roadmap-Suite',
    },
    summary: {
      fa: 'پلتفرم تحت وب مدیریت بصری پروژه‌ها با نمودارهای گانت روان، درگ اند دراپ و ساختار مدرن.',
      en: 'Visual web productivity platform featuring smooth Gantt schedules, drag-and-drop boards, and roadmap planning.',
      ku: 'پلاتفۆرمی وێب بۆ ڕێکخستنی کارەکان دەگەڵ خشتەی گانت و تەختەی بینراو.',
      de: 'Visuelle Projektplanungsplattform mit flüssigen Gantt-Diagrammen, Drag-and-Drop-Boards und Roadmap-Ansichten.',
    },
    description: {
      fa: 'نرم‌افزار تحت وب پیشرفته برای تیم‌های چابک (Agile) جهت زمان‌بندی بصری، مدیریت منابع و رصد مایلستون‌های کلیدی پروژه با سرعت لود زیر ۱ ثانیه.',
      en: 'A high-performance web platform for agile engineering teams to map milestones, visualize resource allocation, and manage timelines with sub-second page loads.',
      ku: 'بەرنامەیەکی بەهێز لەسەر وێب بۆ تیمەکان تا کار و کاتی پڕۆژەکانیان بە ڕوونی دابەش بکەن.',
      de: 'Performante Webanwendung für agile Teams zur Meilenstein- und Ressourcenplanung mit Ladezeiten unter einer Sekunde.',
    },
    architecture: {
      fa: 'ساخته شده با React و Vite برای رسیدن به سبک‌ترین باندل ممکن، همگام با سرور Node.js و کتابخانه‌های مدرن تعاملی.',
      en: 'Engineered with React and Vite for optimal bundling efficiency, paired with a lightweight Node.js API backend and responsive state management.',
      ku: 'سازکراو بە ڕیئاکت و ڤایت بۆ کەمترین قەبارەی کۆد و خێرایی بەرز.',
      de: 'Entwickelt mit React und Vite für minimale Bundle-Größen, kombiniert mit leichtgewichtigem Node.js-Backend.',
    },
    keyFeatures: {
      fa: [
        'نمودار تعاملی گانت با قابلیت تنظیم زمان‌بندی با کشیدن و رها کردن',
        'گزارش‌گیری زنده از درصد پیشرفت پروژه‌ها و وظایف',
        'حالت‌های نمایش چندگانه (تایم‌لاین، بورد، لیست)',
        'خروجی گرفتن و ذخیره خودکار تغییرات در فضای ابری',
      ],
      en: [
        'Interactive Gantt timeline with fluid drag-and-drop rescheduling',
        'Real-time percentage progress indicators across milestones',
        'Multi-view layouts (Gantt, Kanban board, structured list)',
        'Automatic cloud persistence and instant JSON export',
      ],
      ku: [
        'دیاگرامی گانت دەگەڵ گۆڕینی کات بە ڕاکێشان و بەرەڵاکردن',
        'ڕاپۆرتی ڕاستەوخۆ لە ڕێژەی بەرەوپێشچوونی کارەکان',
        'دیمەنی جۆراوجۆر (تەختە، تایم‌لاین، لیست)',
        'پاشەکەوتی خۆکار لەناو هەور',
      ],
      de: [
        'Interaktive Gantt-Timeline mit intuitiver Drag-and-Drop-Terminierung',
        'Echtzeit-Fortschrittsanzeige für Meilensteine und Teilaufgaben',
        'Multiple Ansichten (Gantt, Board, strukturierte Listenansicht)',
        'Automatische Cloud-Synchronisation und Exportfunktionen',
      ],
    },
  },
  {
    id: 'digihost-automation',
    category: 'bots',
    iconName: 'Terminal',
    metrics: 'Instant Provisioning & Zero Downtime',
    tags: ['Python', 'PHP', 'cPanel API', 'Linux', 'Automation', 'DevOps'],
    githubUrl: 'https://github.com/erm-iya',
    title: {
      fa: 'اتوماسیون زیرساخت و سرور دیجی‌هاست (DigiHost Automizer)',
      en: 'DigiHost Server & Infrastructure Automation',
      ku: 'ئۆتۆمەیشنی سێرڤەری دیجی‌هۆست (DigiHost)',
      de: 'DigiHost Server- & Infrastruktur-Automatisierung',
    },
    summary: {
      fa: 'سیستم اتوماسیون پروویژن و تحویل آنی منابع هاست لینوکس و ربات تلگرام متصل به cPanel.',
      en: 'Autonomous server provisioning system delivering instant hosting allocations via smart Telegram cPanel gateways.',
      ku: 'سیستمی خۆکاری بەڕێوەبردنی سێرڤەر و هاستینگ لە ڕێگەی تێلێگرام و cPanel.',
      de: 'Automatisiertes Serverbereitstellungssystem für Hosting-Ressourcen via Telegram-cPanel-Gateway.',
    },
    description: {
      fa: 'طراحی اسکریپت‌های تحویل آنی هاست و اتصال یکپارچه تلگرام به APIهای cPanel و سرورهای لینوکس، که امکان مدیریت کامل وب‌سرور، ساخت دیتابیس و ایمیل را مستقیماً از تلگرام به کاربران می‌داد.',
      en: 'Engineered autonomous server provisioning workflows and Telegram-to-cPanel integrations, empowering users to configure web servers, databases, and mailboxes directly from chat.',
      ku: 'نووسینی بەرنامەی ئۆتۆماتیکی دابینکردنی هاست و بەستنەوەی تێلێگرام بە cPanel بۆ دروستکردنی داتابەیس و ئیمەیل.',
      de: 'Entwicklung automatisierter Hosting-Bereitstellungsskripte und Integration von Telegram in cPanel-APIs zur direkten Serververwaltung über Chat-Befehle.',
    },
    architecture: {
      fa: 'توسعه ماژول‌های PHP و Python برای هندل کردن وب‌هوک‌ها، برقراری ارتباط امن با پروتکل SSH و APIهای سرور با نرخ خطای صفر.',
      en: 'Developed robust PHP and Python orchestration daemons communicating over secure SSH tunnels and authenticating against cPanel/WHM API endpoints.',
      ku: 'بەکارهێنانی پایتۆن و PHP بۆ پێوەندی ئەمن دەگەڵ سێرڤەر لە ڕێی SSH.',
      de: 'Robuste PHP- und Python-Dämonen über gesicherte SSH-Tunnel zur Authentifizierung an cPanel/WHM-Endpunkten.',
    },
    keyFeatures: {
      fa: [
        'تحویل اتوماتیک هاست پس از پرداخت در کمتر از ۱۰ ثانیه',
        'مدیریت دامنه‌ها، دی‌ان‌اس‌ها و اکانت‌های اف‌تی‌پی از طریق تلگرام',
        'سیستم مانیتورینگ سلامت سرور و هشدار لود بالا',
        'طراحی هویت بصری کامل و برندینگ مجموعه',
      ],
      en: [
        'Instant sub-10s hosting deployment upon payment confirmation',
        'Domain, DNS, and FTP credential management directly via chat',
        'Server health telemetry and automated high-load alert webhooks',
        'Complete visual branding and brand identity design',
      ],
      ku: [
        'تەسلیمکردنی خۆکاری هاست لە ژێر ١٠ چرکەدا',
        'بەڕێوەبردنی دۆمەین و DNS و FTP بە تێلێگرام',
        'ئاگادارکردنەوەی خێرا لە کاتی قورس‌بوونی سێرڤەر',
        'دیزاینی لۆگۆ و هوویەتی بینراوی کۆمپانیا',
      ],
      de: [
        'Vollautomatische Hosting-Bereitstellung in unter 10 Sekunden',
        'Verwaltung von Domains, DNS und FTP direkt über Chatbefehle',
        'Server-Monitoring und automatisierte Alarmierung bei hoher Last',
        'Vollständiges Corporate- und Visual-Identity-Design',
      ],
    },
  },
];
