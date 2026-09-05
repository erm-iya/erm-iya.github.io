import type { Language } from './translations';

export interface ProjectItem {
  id: string;
  category: 'saas' | 'mobile' | 'hardware' | 'bots' | 'data';
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
  // ==========================================
  // 1. LUXIMO Core (Cloud & SaaS)
  // ==========================================
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

  // ==========================================
  // 2. LUXIMO PcPos Bridge (Hardware & Fintech)
  // ==========================================
  {
    id: 'luximo-bridge',
    category: 'hardware',
    iconName: 'Cpu',
    metrics: '100% Native POS Integration',
    tags: ['C++ DLL', 'Node.js', 'PcPos', 'TCP/IP', 'Banking Protocols', 'Hardware'],
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

  // ==========================================
  // 3. Medical Curve Suite (Data & Desktop)
  // ==========================================
  {
    id: 'medical-curve-suite',
    category: 'data',
    iconName: 'Activity',
    metrics: '2,000+ Records | Multi-Page PDF Diagnostics',
    tags: ['Python', 'Tkinter GUI', 'Matplotlib', 'Pandas', 'PDF Reports', 'PyInstaller'],
    githubUrl: 'https://github.com/erm-iya',
    title: {
      fa: 'سامانه پردازش و تحلیل منحنی‌های بیماران (Medical Curve Suite)',
      en: 'Clinical Patient Curve Analyzer & Medical Diagnostic Suite',
      ku: 'سیستمی شیکاری دیاگرامی نەخۆشەکان (Medical Curve Suite)',
      de: 'Klinische Patientendaten- & Kurvenanalyse-Suite',
    },
    summary: {
      fa: 'نرم‌افزار جامع دسکتاپ برای پردازش داده‌های پزشکی، رسم تخصصی منحنی‌ها و صدور خودکار گزارش‌های بالینی PDF.',
      en: 'Comprehensive desktop software for processing clinical patient records, plotting diagnostic curves, and compiling multi-page PDF reports.',
      ku: 'نەرمەکاڵای پێشکەوتووی دیسکتۆپ بۆ شیکاری داتای نەخۆش، کێشانی مەنحەنییەکان و دەرکردنی ڕاپۆرتی پزیشکی PDF.',
      de: 'Umfassende Desktop-Software zur Verarbeitung klinischer Patientendaten, Kurvendiagnostik und automatisierten PDF-Berichterstellung.',
    },
    description: {
      fa: 'توسعه نرم‌افزار کامل دسکتاپ به سفارش پزشکان جهت پردازش پرونده‌های درمانی، تمیزسازی دیتاست‌های پزشکی با Pandas، رسم دقیق منحنی‌های بیمار با Matplotlib و خروجی گزارش‌های چاپ‌پذیر چندصفحه‌ای.',
      en: 'Engineered a full-featured clinical desktop software suite for medical practitioners: cleans messy diagnostic datasets with Pandas, plots high-resolution patient trend curves with Matplotlib, and exports publication-grade multi-page clinical PDF dossiers.',
      ku: 'دروستکردنی نەرمەکاڵای تەواوی دیسکتۆپ بۆ پزیشکان تا پەڕگەی نەخۆشەکان شیکاری بکەن، مەنحەنی ورد بکێشن و ڕاپۆرتی چاپکراوی PDF دەربکەن.',
      de: 'Entwicklung einer vollwertigen klinischen Desktop-Software für Mediziner: automatische Datenbereinigung mit Pandas, hochpräzise Kurvendiagramme mit Matplotlib und mehrseitige PDF-Dossiers.',
    },
    architecture: {
      fa: 'معماری چندنخی (Threading Worker Queue) برای ممانعت از فریز شدن رابط کاربری حین محاسبات آماری سنگین، موتور رندرینگ گرافیکی برداری Matplotlib و بسته‌بندی پرتابل با PyInstaller.',
      en: 'Asynchronous background thread worker queues preventing UI unresponsiveness during heavy statistical batch jobs, vector graph plotting engine, and self-contained PyInstaller Windows packaging.',
      ku: 'مەعماری فرەتەلی بۆ ئەوەی ڕووکاری بەرنامە نەوەستێت لە کاتی کارکردنی قورس لەسەر داتا، کێشانی وێنەی وێکتۆری و بێ پێویستی بە دابەزاندنی پایتۆن لەسەر ویندۆز.',
      de: 'Mehrfädige Hintergrund-Worker-Queues zur Vermeidung von UI-Blockaden bei rechenintensiven Batch-Analysen, Vektorgrafik-Rendering und eigenständige Windows-Distribution via PyInstaller.',
    },
    keyFeatures: {
      fa: [
        'پردازش دسته‌ای و همزمان هزاران فایل و رکورد تشخیصی بیمار',
        'رسم هوشمند و تفکیک‌شده منحنی‌های پیشرفت بیماری در برابر مقادیر نرمال',
        'تولید خودکار دفترچه و شناسنامه پزشکی در قالب PDF آماده پرینت',
        'رابط کاربری دسکتاپ بومی بدون نیاز به اینترنت و با امنیت بالای داده',
      ],
      en: [
        'High-throughput batch processing across thousands of diagnostic patient files',
        'Smart segmented trend curve plotting benchmarked against clinical normal thresholds',
        'Automated multi-page medical dossier generation formatted for clinical printouts',
        'Air-gapped desktop security ensuring zero cloud leakage of sensitive health data',
      ],
      ku: [
        'پرۆسێسکردنی بە کۆمەڵی هەزاران فایلی نەخۆش لە یەک کاتدا',
        'کێشانی مەنحەنی نەخۆشی بەراورد بە ئاستی تەندروستی ستاندارد',
        'دەرکردنی خودکاری دەفتەرچەی پزیشکی PDF بۆ چاپکردن',
        'ئەمنیەتی بەرز و کارکردن بە بێ پێویستی بە ئینتەرنێت',
      ],
      de: [
        'Parallele Batch-Verarbeitung tausender diagnostischer Patientendatensätze',
        'Präzise Verlaufs- und Schwellenwertkurven im Vergleich zu klinischen Referenzwerten',
        'Automatisierte Generierung mehrseitiger, druckfertiger medizinischer Befundberichte',
        'Lokale Offline-Ausführung für maximalen Datenschutz sensibler Gesundheitsdaten',
      ],
    },
  },

  // ==========================================
  // 4. LuxiMovie (Media & Watch Party)
  // ==========================================
  {
    id: 'luximovie',
    category: 'saas',
    iconName: 'Video',
    metrics: '<100ms Video Room Frame Sync',
    tags: ['Node.js', 'Socket.io', 'Plyr', 'Stream Proxy', 'JWT', 'Real-Time Sync'],
    githubUrl: 'https://github.com/erm-iya',
    title: {
      fa: 'پلتفرم تماشای همزمان فیلم و ویدیو (LuxiMovie Watch Party)',
      en: 'LuxiMovie Synchronized Watch Party & Stream Proxy',
      ku: 'پلاتفۆرمی بینینی فیلم بە کۆمەڵ (LuxiMovie Watch Party)',
      de: 'LuxiMovie Synchronisierte Watch-Party- & Streaming-Plattform',
    },
    summary: {
      fa: 'پلتفرم تحت وب تماشای همزمان فیلم با دوستان با همگام‌سازی لحظه‌ای پخش، پروکسی هوشمند استریم و پلیر مدرن.',
      en: 'Collaborative video watching platform featuring sub-second playback sync, dynamic stream proxying, and customized Plyr UI.',
      ku: 'پلاتفۆرمی وێب بۆ تەماشاکردنی فیلم پێکەوە دەگەڵ هاوڕێیان بە سینکی ڕاستەوخۆ و پەخشی دەستبەجێ.',
      de: 'Echtzeit-Plattform für gemeinsames Filmschauen mit framegenauer Wiedergabesynchronisation und Stream-Proxying.',
    },
    description: {
      fa: 'سیستم سینمای مجازی آنلاین برای تماشای گروهی فیلم و سریال. این پلتفرم با هماهنگی میلی‌ثانیه‌ای فریم‌های ویدیو بین کاربران در اتاق‌های مجازی، چت متنی زنده و بای‌پاس محدودیت‌های استریم عمل می‌کند.',
      en: 'A virtual synchronized cinema suite enabling distributed groups of users to watch films simultaneously. Coordinates millisecond-precise seek/play/pause states across virtual rooms with embedded real-time chat.',
      ku: 'سیستمی سینەمای ئۆنلاین بۆ تەماشاکردنی فیلم بە کۆمەڵ دەگەڵ هاوڕێیان لە شارە جیاوازەکان بە سینکی چرکەیی و چاتی ناوخۆیی.',
      de: 'Virtuelles Streaming-Kino für synchronen Filmgenuss verteilter Nutzergruppen. Hält Abspielpositionen in virtuellen Räumen auf die Millisekunde genau synchron.',
    },
    architecture: {
      fa: 'طراحی سیستم اتاق‌های وب‌سوکت با Socket.io، ماژول پروکسی معکوس استریم (http-proxy-middleware) برای عبور از موانع CORS، و پلیر تعاملی Plyr.',
      en: 'Engineered rooms-based WebSocket topologies on Socket.io, dynamic streaming reverse proxy pipelines bypassing CORS & CDN origin locks, and lightweight Plyr media controls.',
      ku: 'تەلارسازی بە ژوورەکانی Socket.io، پرۆکسی هەڵسوڕێنەری ستریم بۆ تێپەڕاندنی فیلتەری CORS، و پلەیری پێشکەوتووی Plyr.',
      de: 'Räume-basierte WebSocket-Topologie mit Socket.io, dynamischer Streaming-Reverse-Proxy zur Umgehung von CORS-Einschränkungen und optimierte Plyr-Steuerelemente.',
    },
    keyFeatures: {
      fa: [
        'همگام‌سازی خودکار Pause، Play و Seek بین تمامی اعضای اتاق در کمتر از ۱۰۰ میلی‌ثانیه',
        'پروکسی استریم ویدیو برای پخش روان بدون بلاک شدن در مرورگر',
        'سیستم چت زنده متنی و واکنش‌های ایموجی درون پلیر',
        'ساخت اتاق اختصاصی با لینک اشتراک‌گذاری سریع و رمز عبور',
      ],
      en: [
        'Sub-100ms automatic sync of Play, Pause, and Seek events across all room peers',
        'Adaptive streaming proxy bypassing browser cross-origin policy restrictions',
        'Embedded real-time chat with interactive emoji reactions during playback',
        'One-click instant room creation with password-protected invite links',
      ],
      ku: [
        'سینکی خێرای وەستان و پەخشی فیلم لە نێوان هەموو بەشداربووان ژێر ١٠٠ میلی‌چرکە',
        'پرۆکسی بۆ پەخشی ڕاستەوخۆی فیلم بە بێ گیرکردن',
        'چاتی ڕاستەوخۆ دەگەڵ هاوڕێیان لە کاتی سەیرکردنی فیلم',
        'دروستکردنی ژووری تایبەت بە لینک و تێپەڕەوشە',
      ],
      de: [
        'Automatische Synchronisation von Abspiel-, Pausen- und Spulaktionen unter 100 ms',
        'Adaptiver Streaming-Proxy zur Umgehung von Cross-Origin-Browser-Beschränkungen',
        'Integrierter Echtzeit-Chat mit Live-Emoji-Reaktionen während der Wiedergabe',
        'Ein-Klick-Raumerstellung mit passwortgeschützten Einladungslinks',
      ],
    },
  },

  // ==========================================
  // 5. iOS Download Manager (Mobile)
  // ==========================================
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

  // ==========================================
  // 6. TTM Serverless Edge Task Bot (Bots & Edge)
  // ==========================================
  {
    id: 'ttm-task-bot',
    category: 'bots',
    iconName: 'Bot',
    metrics: 'Cloudflare Edge | Sub-10ms Latency',
    tags: ['Cloudflare Workers', 'Cloudflare D1 SQL', 'Python / aiogram', 'Serverless Edge', 'Telegram Bot API'],
    githubUrl: 'https://github.com/erm-iya',
    title: {
      fa: 'مدیریت تسک توزیع‌شده لبه شبکه (TTM Cloudflare Edge Bot)',
      en: 'TTM Distributed Edge Task Bot (Cloudflare Workers & D1)',
      ku: 'سیستمی بەڕێوەبردنی کاری لێواری تۆڕ (TTM Edge Bot)',
      de: 'TTM Verteiltes Edge-Task-System (Cloudflare Workers & D1)',
    },
    summary: {
      fa: 'سامانه سازمانی مدیریت وظایف مستقر بر Cloudflare Workers با پایگاه داده D1 SQL و نسخه پایتونی گانت چارت.',
      en: 'Serverless team coordination bot executing on Cloudflare Workers edge nodes with D1 relational database and Python Gantt analytics.',
      ku: 'بۆتی تێلێگرام لەسەر کلاودفلێر وێرکێرز بە داتابەیسی D1 SQL بۆ کارەکان و خشتەی گانت.',
      de: 'Serverloses Team-Aufgabensystem auf Cloudflare Workers Edge mit relationaler D1-SQL-Datenbank.',
    },
    description: {
      fa: 'معماری دوگانه برای مدیریت فرآیندهای تیمی: یک نسخه سبک و بدون سرور مستقر بر بیش از ۳۰۰ دیتاسنتر لبه شبکه Cloudflare برای پاسخ‌دهی آنی به تعاملات کاربران، به همراه نسخه پایتونی برای پردازش سنگین ددلاین‌ها و ترسیم گرافیکی نمودارهای گانت.',
      en: 'Dual-tier architecture for organizational workflows: a serverless edge bot running globally across 300+ Cloudflare data centers backed by Cloudflare D1 SQL for near-zero response latencies, paired with a Python analytics engine for Gantt schedule rendering.',
      ku: 'سیستمێکی دوولایەنە: وەشانی سێرڤەرلێس لەسەر سەدان داتاسەنتەری جیهانی کلودفلێر بۆ وەڵامدانەوەی خێرا، لەگەڵ وەشانی پایتۆن بۆ خشتەی گانت چارت و ڕاپۆرتی ئاستی کارەکان.',
      de: 'Duale Architektur für Team-Workflows: Ein serverloser Bot auf über 300 weltweiten Cloudflare Edge-Knoten mit D1-SQL-Datenbank für minimale Latenzen, kombiniert mit einer Python-Engine für Gantt-Analysen.',
    },
    architecture: {
      fa: 'اجرا بر روی Cloudflare Workers (V8 Isolates)، دیتابیس توزیع‌شده Cloudflare D1 بر پایه SQLite، و متغیرهای امن رمزنگاری‌شده با Wrangler CLI.',
      en: 'Zero-cold-start V8 Isolates on Cloudflare Workers, edge-replicated SQLite storage via Cloudflare D1, and encrypted environmental secrets managed through Wrangler.',
      ku: 'بەکارهێنانی Cloudflare Workers و داتابەیسی خێرای Cloudflare D1 لەسەر بنەمای SQLite بۆ دەستپێکی بێ وەستان.',
      de: 'Kaltstartfreie V8-Isolates auf Cloudflare Workers, weltweit replizierte D1-SQL-Datenbank und verschlüsselte Umgebungskonfiguration.',
    },
    keyFeatures: {
      fa: [
        'معماری کاملاً Serverless با پاسخ‌دهی زیر ۱۰ میلی‌ثانیه در سطح جهان',
        'تقویم شیشه‌ای شمسی درون‌خطی (Inline Persian Calendar) برای انتخاب ددلاین',
        'ثبت هوشمند زمان صرف‌شده روی هر وظیفه و کامپایل گزارش‌های روزانه',
        'پشتیبان‌گیری خودکار دیتابیس و بدون نیاز به نگهداری سرور فیزیکی',
      ],
      en: [
        'Zero-server infrastructure delivering sub-10ms global edge response times',
        'Custom inline Jalali glassmorphic calendar for intuitive task scheduling',
        'Automated time tracking per task with consolidated end-of-day work logs',
        'Zero-maintenance automated cloud backups and distributed durability',
      ],
      ku: [
        'وەڵامدانەوەی خێرا ژێر ١٠ میلی‌چرکە لە سەرتاسەری جیهان بێ سێرڤەری فیزیکی',
        'ڕۆژژمێری ناوەکی ڕازاوە بۆ دانانی وادەی کارەکان',
        'حیسابکردنی خۆکاری کاتی تەرخانکراو بۆ هەر کارێک و ناردنی ڕاپۆرتی ڕۆژانە',
        'پاشەکەوتی خۆکاری زانیارییەکان لەسەر کلاود',
      ],
      de: [
        'Serverlose Edge-Architektur mit weltweiten Latenzzeiten unter 10 ms',
        'Interaktiver Jalali-Kalender zur intuitiven Festlegung von Meilensteinen',
        'Automatische Zeiterfassung pro Aufgabe mit täglichen Abschlussberichten',
        'Vollautomatische Cloud-Backups ohne Administrationsaufwand',
      ],
    },
  },

  // ==========================================
  // 7. MedoFast Extractor (Data & Scraping)
  // ==========================================
  {
    id: 'medofast-extractor',
    category: 'data',
    iconName: 'BookOpen',
    metrics: '100% Anti-Bot Bypass & Clean Extraction',
    tags: ['JavaScript', 'Web Scraping', 'Anti-Honeypot', 'DOM Reverse Engineering', 'Headless Iframe'],
    githubUrl: 'https://github.com/erm-iya',
    title: {
      fa: 'موتور استخراج داده و دور زدن تله‌ها (MedoFast Anti-Honeypot)',
      en: 'MedoFast Anti-Honeypot Extractor & Doc Generator',
      ku: 'سیستمی دەرهێنانی زانیاری و تێپەڕاندنی تەڵەکان (MedoFast)',
      de: 'MedoFast Anti-Honeypot Datenextraktor & Dokumentengenerator',
    },
    summary: {
      fa: 'سیستم مهندسی معکوس و استخراج خودکار سرفصل‌ها با دور زدن تله‌های هانی‌پات و تولید کتابچه‌های چندصفحه‌ای HTML/PDF.',
      en: 'Browser engine reverse-engineered to bypass honeypot anti-scraping traps, automatically traversing chapter hierarchies and compiling comprehensive PDF/HTML study books.',
      ku: 'سیستمی دەرهێنانی خۆکاری دەرس و خولەکان بە تێپەڕاندنی فیلتەری هانی‌پات و سازکردنی پەرتووکی PDF.',
      de: 'Browser-Automatisierungstool zur Umgehung von Honeypot-Anti-Scraping-Fallen und automatischen Erstellung strukturierter HTML/PDF-Lernkompendien.',
    },
    description: {
      fa: 'ابزار تخصصی اتوماسیون فرانت‌اند و مهندسی معکوس ساختار DOM برای خزش سرفصل‌های قفل‌شده سامانه‌های آموزشی. این اسکریپت با دور زدن تله‌های ساختگی و ضد ربات (Anti-Honeypot)، داده‌های پاک را استخراج کرده و کتابچه‌ای کامل و فهرست‌بندی شده برای مطالعه و پرینت آفلاین می‌سازد.',
      en: 'Specialized front-end automation and DOM reverse-engineering engine built to crawl protected e-learning capsules. Bypasses honeypot trap elements, strips obfuscated payloads, and compiles unified offline study compendiums complete with interactive table of contents.',
      ku: 'کەرەستەیەکی تایبەتی وێب بۆ دەرهێنانی وانە قوفڵ‌کراوەکان لە ڕێگەی تێپەڕاندنی فێڵە ئەمنییەکانی دژە ڕۆبۆت و سازکردنی پەڕاوی ڕێکوپێکی ئۆفلاین بۆ خوێندنەوە.',
      de: 'Spezialisiertes Web-Automatisierungs- und DOM-Reverse-Engineering-Tool zur Extraktion geschützter Lernmodule. Erkennt Honeypot-Fallen, bereinigt Daten und generiert strukturierte Offline-Kompaktbücher mit Inhaltsverzeichnis.',
    },
    architecture: {
      fa: 'پیمایش مخفی در آی‌فریم‌های پس‌زمینه (Background Headless Iframes) بدون رفرش صفحه کاربر، فیلتر الگوریتمی تله‌های متنی مخفی سامانه و رندرینگ خودکار کتابچه تک‌صفحه‌ای با CSS چاپی.',
      en: 'Silent background sandbox iframe traversal preserving host session, algorithmic regex honeypot detection, and single-file CSS print compilation.',
      ku: 'کارکردنی شاراوە لە پشت پەردەی براوزەر بە بێ تازەکردنەوەی پەڕە، ناسینەوەی تەڵەی دژە سکراپ و دروستکردنی پەرتووکی چاپی.',
      de: 'Lautlose Navigation über isolierte Hintergrund-Iframes ohne Seiten-Reload, algorithmische Erkennung verdeckter Honeypot-Elemente und print-optimiertes CSS-Kompilieren.',
    },
    keyFeatures: {
      fa: [
        'تشخیص خودکار سلسله‌مراتب فصل‌ها و استخراج متوالی بدون دخالت کاربر',
        'موتور فیلتر هوشمند تله‌های امنیتی (Anti-Honeypot) جهت دریافت متون خالص',
        'تولید کتابچه نهایی با فهرست کلیک‌پذیر، استایل شکیل و دکمه پرینت مستقیم PDF',
        'اجرای مستقیم در کنسول مرورگر بدون نیاز به نصب هیچ‌گونه پیش‌نیاز خارجی',
      ],
      en: [
        'Automatic multi-stage chapter discovery and sequential background traversal',
        'Smart anti-honeypot algorithmic filter stripping deceptive decoy elements',
        'Unified print-ready document with interactive TOC and direct PDF export trigger',
        'Zero-dependency standalone execution directly from modern browser developer tools',
      ],
      ku: [
        'دۆزینەوەی خۆکاری بەشەکان و داگرتنی یەک لە دوای یەک بە بێ پێویستی بە مرۆڤ',
        'فیلتەری زیرەکی تەڵە ئەمنییەکان بۆ دەرهێنانی تەنها دەقی دروست',
        'دەرکردنی کتێبی کۆتایی دەگەڵ پێڕستی چالاک و دوگمەی چاپی ڕاستەوخۆ',
        'کارکردنی ڕاستەوخۆ لەناو براوزەر بێ پێویستی بە دابەزاندنی هیچ نەرمەکاڵایەک',
      ],
      de: [
        'Automatische Kapitelstruktur-Erkennung und sequentielle Hintergrundextraktion',
        'Intelligenter Honeypot-Filter zur verlässlichen Bereinigung von Köderdaten',
        'Generierung druckfertiger Gesamtdokumente mit klickbarem Inhaltsverzeichnis',
        'Vollständig eigenständige Ausführung ohne externe Abhängigkeiten in den DevTools',
      ],
    },
  },

  // ==========================================
  // 8. Planer Web Suite (SaaS & UI)
  // ==========================================
  {
    id: 'planer-web',
    category: 'saas',
    iconName: 'LayoutDashboard',
    metrics: 'Ultra-fast Vite & Drag & Drop',
    tags: ['React 19', 'Vite', 'Node.js', 'Gantt Charts', 'Tailwind CSS', 'Drag & Drop'],
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

  // ==========================================
  // 9. DigiHost Automizer (Bots & DevOps)
  // ==========================================
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
