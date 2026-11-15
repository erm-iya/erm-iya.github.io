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
  logo?: string;
  image?: string;
  confidential?: boolean;
}

export const projectsData: ProjectItem[] = [
  // ==========================================
  // 1. LUXIMO Core (Cloud & SaaS)
  // ==========================================
  {
    id: 'luximo-core',
    category: 'saas',
    iconName: 'Server',
    logo: '/images/luximo.png',
    metrics: 'Active in 15+ Branches',
    tags: ['Node.js', 'Express', 'MongoDB', 'Socket.io', 'RAM Cache', 'Microservices'],
    liveUrl: 'https://luximo.ir',
    githubUrl: 'https://github.com/erm-iya',
    title: {
      fa: 'پلتفرم ابری لوکسیمو (شرکت هوش‌افزار زمرد)',
      en: 'LUXIMO Cloud SaaS (Hoosh Afzar Zomorrod)',
      ku: 'پلاتفۆرمی هەوری لوکسیمۆ (هۆش‌ئەفزار زومڕود)',
      de: 'LUXIMO Cloud SaaS (Hoosh Afzar Zomorrod)',
    },
    summary: {
      fa: 'پلتفرم ابری و بلادرنگ مدیریت رستوران و اتوماسیون فروشگاهی، فعال در بیش از ۱۵ کافه و رستوران مطرح با دامنه luximo.ir.',
      en: 'Real-time cloud restaurant and retail management SaaS operating across 15+ premier venues via luximo.ir.',
      ku: 'پلاتفۆرمی هەوری بەڕێوەبردنی چێشتخانە و فرۆشگە، چالاک لە پتر لە ١٥ کافێ و ڕێستۆرانی ناودار لەسەر luximo.ir.',
      de: 'Echtzeit-Cloud-Plattform für Restaurantmanagement im Produktiveinsatz bei 15+ Betrieben auf luximo.ir.',
    },
    description: {
      fa: 'معماری و توسعه صفر تا صد زیرساخت سمت سرور لوکسیمو با Node.js، سوکت‌های بلادرنگ و کش درون‌حافظه‌ای RAM برای اتصال همزمان صندوق، تبلت‌های سفارش‌گیر و مانیتور آشپزخانه.',
      en: 'Full-lifecycle engineering of LUXIMO\'s real-time Node.js backend with in-memory RAM caching and socket synchronization between POS terminals, waiter tablets, and kitchen displays.',
      ku: 'دیزاین و پەرەپێدانی تەواوی ژێرخانی هەوری لوکسیمۆ بە Node.js و سوودوەرگرتن لە Socket.io بۆ پێوەندی هەمیشەیی سندووق، گارسۆن و چێشتخانە.',
      de: 'Entwicklung der gesamten skalierbaren Backend-Infrastruktur für LUXIMO mit Node.js, Socket.io und In-Memory-RAM-Caching zur Kopplung von Kassen, Tablets und Küchenmonitoren.',
    },
    architecture: {
      fa: 'خوشه‌بندی ارتباطات سوکتی با بازپیوست خودکار، لایه کش RAM سرور جهت کاهش کوئری‌های تکراری، و چندمستاجری کامل دیتابیس.',
      en: 'Clustered Socket.io reconnection pipelines, server-side RAM caching tier minimizing repeated database reads, and multi-tenant isolation.',
      ku: 'بەستەری Socket.io بە توانای لکانی خودکارەوە، لایەی کەش لەناو RAM بۆ کەمکردنەوەی فشار و فرەبەکارهێنەری داتابەیس.',
      de: 'Geclusterte Socket-Verbindungen mit Auto-Reconnect, RAM-Cache zur Entlastung der Datenbank und strikte Mandantentrennung.',
    },
    keyFeatures: {
      fa: [
        'همگام‌سازی بلادرنگ فاکتور و وضعیت سفارش‌ها میان پرسنل و صندوق',
        'موتور کش درون‌حافظه‌ای سرور برای افزایش چشمگیر سرعت پاسخ‌دهی',
        'تولید خودکار سایت‌مپ داینامیک و ساختار بهینه‌شده برای سئو',
        'پشتیبانی جامع از معماری چندشعبه‌ای و چندمستاجری',
      ],
      en: [
        'Instant order state synchronization across all restaurant terminal devices',
        'In-memory RAM caching layer accelerating high-frequency API responses',
        'Automated dynamic SSR sitemap generation for client search visibility',
        'Enterprise multi-branch and multi-tenant data partitioning',
      ],
      ku: [
        'سینکی ڕاستەوخۆی دەستووری خواردنەکان لە نێوان کارمەندان',
        'کەشینگی ناو RAM بۆ زیادکردنی خێرایی وەڵامی سێرڤەر',
        'دروستکردنی خودکاری سایت‌ماپ بۆ سێئۆی گۆگڵ',
        'پشتیوانی فرەلق و فرەبەکارهێنەر',
      ],
      de: [
        'Echtzeit-Statussynchronisation auf allen Kassengeräten',
        'In-Memory-RAM-Cache für minimale Antwortzeiten',
        'Automatische dynamische SSR-Sitemap-Generierung',
        'Mandantenfähige Filial- und Rollenarchitektur',
      ],
    },
  },

  // ==========================================
  // 2. FoxLoader Download Manager (Desktop & Rust)
  // ==========================================
  {
    id: 'foxloader',
    category: 'data',
    iconName: 'Cpu',
    logo: '/images/foxloader.png',
    metrics: '1-32 Parallel Streams & Rust Core',
    tags: ['Rust', 'Tokio', 'Axum', 'C#', 'WinUI 3', 'Windows 11 Fluent', 'Manifest V3'],
    githubUrl: 'https://github.com/erm-iya/FoxLoader',
    title: {
      fa: 'دانلود منیجر فوق‌سریع FoxLoader',
      en: 'FoxLoader Download Manager',
      ku: 'داونلۆد مەنەجەری فۆکس‌لۆدەر (FoxLoader)',
      de: 'FoxLoader Download-Manager',
    },
    summary: {
      fa: 'دانلود منیجر نسل جدید با هسته بومی Rust، معماری چندنخی (۱ تا ۳۲ ترد)، رابط کاربری WinUI 3 Fluent و افزونه مرورگر (Manifest V3).',
      en: 'Next-generation download manager powered by an asynchronous Rust core engine (1-32 parallel threads), native Windows 11 WinUI 3 Fluent UI, and Manifest V3 browser integration.',
      ku: 'داونلۆد مەنەجەری نەوەی نوێ بە کرۆکی نەیتیڤی Rust، ڕاکێشانی تا ٣٢ تەنی هاوکات، ڕووکاری فلوێنتی ویندۆز ١١ و ئێکستێنشن بۆ براوزەر.',
      de: 'Download-Manager der nächsten Generation mit nativer asynchroner Rust-Engine (1-32 parallele Threads), Windows-11-Fluent-Oberfläche und Manifest-V3-Browsererweiterung.',
    },
    description: {
      fa: 'موتور دانلود غیرهمزمان با زبان Rust بر پایه Tokio با قطعه‌بندی فایل به ۱ تا ۳۲ رشته موازی، تخصیص هوشمند دیسک و کلاینت دسکتاپ Mica ویندوز ۱۱.',
      en: 'High-performance Rust Tokio core scaling 1 to 32 parallel chunk streams with sparse-file pre-allocation, paired with a modern WinUI 3 Fluent desktop client.',
      ku: 'مۆتۆری داونلۆدی خێرا بە زمانی Rust و دابەشکردنی فایل بۆ ١ تا ٣٢ تەنی هاوکات دەگەڵ ڕووکاری نەیتیڤی ویندۆز ١١.',
      de: 'Asynchrone Rust-Engine für 1-32 parallele Chunks mit Sparse-File-Vorbelegung und nativem WinUI-3-Client.',
    },
    architecture: {
      fa: 'موتور پردازشی Rust متصل به کلاینت دسکتاپ از طریق IPC، فیلتر جیتر سرعت با الگوریتم EMA و اتصال مرورگر با پروتکل Native Messaging.',
      en: 'Rust worker engine communicating via local IPC with WinUI 3, EMA jitter filtering for real-time telemetry, and Native Messaging bridge.',
      ku: 'مۆتۆری ناهاوکاتی Rust بەستراو بە WinUI 3 لە ڕێی IPC، ژماردنی خێرایی بە EMA و پەیوەندی نەیتیڤ بە براوزەرەوە.',
      de: 'Asynchrone Rust-Engine mit lokaler IPC-Anbindung an WinUI 3, EMA-Jitter-Filterung und Native-Messaging-Schnittstelle.',
    },
    keyFeatures: {
      fa: [
        'موتور چندنخی بلادرنگ با قابلیت تفکیک فایل به ۱ تا ۳۲ کانکشن موازی',
        'رابط کاربری بومی ویندوز ۱۱ بر پایه WinUI 3 با افکت‌های Mica و تم تاریک/روشن',
        'افزونه مرورگر (Manifest V3) با قابلیت تشخیص خودکار استریم‌های ویدیویی (Media Sniffer)',
        'دانلود هوشمند آرشیوهای چندبخشی RAR/ZIP و تشخیص خودکار پارت‌ها',
      ],
      en: [
        'Real-time multi-threaded engine scaling from 1 to 32 parallel chunk streams',
        'Native Windows 11 WinUI 3 client with Mica backdrop and dark/light switching',
        'Manifest V3 browser integration with HTML5 media sniffing and batch URL grabbing',
        'Multi-part RAR/ZIP archive auto-discovery and companion file fetching',
      ],
      ku: [
        'مۆتۆری فرەتەنی ڕاستەوخۆ بە دابەشکردنی فایل لە نێوان ١ تا ٣٢ پەیوەندی',
        'ڕووکاری نەیتیڤی ویندۆز ١١ بە WinUI 3 و ستایلی مۆدێرنی Mica',
        'ئێکستێنشن بۆ براوزەر دەگەڵ ناسینەوەی خودکاری ڤیدیۆ و لینکی فرەوان',
        'ناسینەوەی خودکاری پارتەکانی فایلە زیپکراوەکان',
      ],
      de: [
        'Echtzeit-Multi-Threading-Engine mit Skalierung auf 1 bis 32 parallele Datenströme',
        'Nativer Windows-11-WinUI-3-Client mit Mica-Effekt und Themes',
        'Manifest-V3-Browsererweiterung mit Video-Sniffer und Batch-Link-Download',
        'Automatische Erkennung und Zusammenführung mehrteiliger RAR/ZIP-Archive',
      ],
    },
  },

  // ==========================================
  // 3. UroStudio Pro (Medical Curve Suite)
  // ==========================================
  {
    id: 'urostudio-pro',
    category: 'data',
    iconName: 'Activity',
    logo: '/images/urostudio.png',
    metrics: '2,000+ Records | PyQt6 Clinical Suite',
    tags: ['Python', 'PyQt6', 'SQLite', 'Urodynamics', 'Curve Engine', 'PDF Generation', 'Inno Setup'],
    githubUrl: 'https://github.com/erm-iya',
    title: {
      fa: 'سوئیت پردازش داده‌های پزشکی UroStudio Pro',
      en: 'UroStudio Pro Clinical Curve Suite',
      ku: 'سوئیتی شیکاری داتای پزیشکی UroStudio Pro',
      de: 'UroStudio Pro Klinische Kurvenanalyse-Suite',
    },
    summary: {
      fa: 'نرم‌افزار تخصصی دسکتاپ با PyQt6 برای پردازش پرونده‌های درمانی، رسم هوشمند منحنی‌های پزشکی اورودینامیک و صدور گزارش بالینی PDF.',
      en: 'Native clinical desktop suite built with PyQt6 for processing patient archives, plotting urodynamic curves, and exporting multi-page PDF reports.',
      ku: 'نەرمەکاڵای دیسکتۆپ بە PyQt6 بۆ شیکاری پەڕگەی نەخۆشەکان، کێشانی مەنحەنییەکانی پزیشکی و دەرکردنی ڕاپۆرتی PDF.',
      de: 'Native klinische Desktop-Suite mit PyQt6 zur Kurvendiagnostik und automatisierten Generierung mehrseitiger PDF-Befundberichte.',
    },
    description: {
      fa: 'پردازش بیش از ۲۰۰۰ رکورد بیمار، دیتابیس محلی SQLite، انجین اختصاصی رسم امواج و دفترچه راهنمای جامع بالینی به همراه پکیج اینستالر ستاپ ویندوز.',
      en: 'Processes 2,000+ patient records with local SQLite database, bespoke curve visualization engine, clinical documentation, and Inno Setup installer.',
      ku: 'پرۆسێسکردنی پتر لە ٢٠٠٠ داتای نەخۆش دەگەڵ داتابەیسی ناوخۆیی SQLite، مۆتۆری کێشانی مەنحەنی و ڕاپۆرتی فەرمی.',
      de: 'Verarbeitung von über 2.000 Patientendatensätzen mit lokaler SQLite-Datenbank, Kurvenvisualisierung und Inno-Setup-Installer.',
    },
    architecture: {
      fa: 'معماری ماژولار PyQt6 با موتور تفکیک فایل‌های یتیم (File Auditor)، رسم برداری امواج و سیستم ذخیره‌سازی ایزوله آفلاین برای امنیت داده بیماران.',
      en: 'Modular PyQt6 architecture featuring an orphan file auditing vault, vector waveform plotting, and air-gapped local SQLite storage.',
      ku: 'تەلارسازی PyQt6 بە مۆتۆری پشکنینی فایلە ونبووەکان و داتابەیسی ناوخۆیی بۆ پاراستنی ئەمنیەتی نەخۆشەکان.',
      de: 'Modulare PyQt6-Architektur mit Datei-Auditor, Vektor-Kurven-Rendering und isolierter lokaler SQLite-Speicherung.',
    },
    keyFeatures: {
      fa: [
        'پردازش دسته‌ای و سریع هزاران رکورد تشخیصی و منحنی اورودینامیک',
        'انجین اختصاصی ترسیم امواج با تفکیک آستانه‌های نرمال پزشکی',
        'تولید خودکار شناسنامه و پرونده پزشکی آماده پرینت با فرمت PDF',
        'موتور هوشمند جستجو، فیلترینگ چندمعیاره و پایش فایل‌های بدون پرونده',
      ],
      en: [
        'High-throughput batch processing of thousands of clinical urodynamic records',
        'Dedicated waveform engine plotting against standard medical thresholds',
        'Automated publication-grade multi-page clinical PDF dossier compilation',
        'Intelligent multi-criteria patient search and unlinked file auditor vault',
      ],
      ku: [
        'پرۆسێسکردنی بە کۆمەڵی هەزاران فایلی نەخۆش لە یەک کاتدا',
        'کێشانی مەنحەنی نەخۆشی بەراورد بە ئاستی تەندروستی ستاندارد',
        'دەرکردنی خودکاری دەفتەرچەی پزیشکی PDF بۆ چاپکردن',
        'سیستمی لێکۆڵینەوە و دۆزینەوەی فایلە بێ‌خاوەنەکان',
      ],
      de: [
        'Parallele Batch-Verarbeitung tausender diagnostischer Patientendatensätze',
        'Spezialisierte Kurvendiagramme im Vergleich zu klinischen Normwerten',
        'Automatische Generierung mehrseitiger, druckfertiger PDF-Befundberichte',
        'Multikriterielle Filtersuche und automatischer Datei-Auditor',
      ],
    },
  },

  // ==========================================
  // 4. LUXIMO POS Client (Windows & Rust)
  // ==========================================
  {
    id: 'luximo-pos-client',
    category: 'hardware',
    iconName: 'Cpu',
    logo: '/images/luximo_pos.png',
    metrics: 'Windows Offline Client in Rust',
    tags: ['Rust', 'Wry', 'Tao', 'SQLite', 'Banking PcPos', 'Tokio', 'AES-GCM'],
    githubUrl: 'https://github.com/erm-iya',
    title: {
      fa: 'کلاینت بومی ویندوز پوز لوکسیمو (LUXIMO POS Client)',
      en: 'LUXIMO Windows POS Client in Rust',
      ku: 'کلاینتی نەیتیڤی ویندۆز بۆ پۆزی لوکسیمۆ',
      de: 'LUXIMO Windows POS-Client in Rust',
    },
    summary: {
      fa: 'نرم‌افزار مستقل دسکتاپ ویندوز با زبان Rust جهت برقراری پل ارتباطی آفلاین و پایدار صندوق با پایانه‌های کارت‌خوان بانکی کشور.',
      en: 'Native Windows desktop client engineered in Rust and Wry for offline-resilient cashier bridging to banking POS terminals.',
      ku: 'نەرمەکاڵای سەربەخۆی دیسکتۆپ بە زمانی Rust بۆ بەستنەوەی سندووق بە ئامێرەکانی کارتی بانکی لە دۆخی ئۆفلاین.',
      de: 'Nativer Windows-Desktop-Client in Rust und Wry für die stabile Offline-Anbindung von Kassen an Bank-Kartenterminals.',
    },
    description: {
      fa: 'کلاینت مستقل ویندوزی پیاده‌سازی‌شده با زبان Rust و موتور Wry/Tao همراه با دیتابیس محلی SQLite جهت ارسال خودکار مبالغ و ثبت تراکنش‌های پوز در شبکه محلی بدون وابستگی به اینترنت.',
      en: 'Standalone Windows desktop application built in Rust and Wry/Tao with embedded SQLite persistence for automated, zero-latency local banking POS transactions without internet reliance.',
      ku: 'ئەپی دیسکتۆپی ویندۆز بە زمانی Rust و بزوێنەری Wry/Tao دەگەڵ داتابەیسی SQLite بۆ بەڕێوەبردنی پارەدانی بانکی بە بێ پێویستی بە ئینتەرنێت.',
      de: 'Eigenständige Windows-Desktopanwendung in Rust und Wry/Tao mit lokaler SQLite-Persistenz für automatisierte POS-Zahlungen im lokalen Netzwerk ohne Internetabhängigkeit.',
    },
    architecture: {
      fa: 'استفاده از معماری کارآمد Rust، موتور مرورگر محلی Wry/Tao، ارتباط TCP/IP و پورت سریال با دستگاه‌های کارت‌خوان و رمزنگاری داده‌ها با AES-GCM.',
      en: 'Ultra-low footprint Rust runtime, Wry/Tao webview wrapper, direct TCP/IP and serial card-reader protocols, and AES-GCM local cryptographic safeguards.',
      ku: 'تەلارسازی کەم‌بار بە Rust، ڕووکاری Wry/Tao، پەیوەندی بە پۆزی بانکی لە ڕێگای تۆڕی ناوخۆیی و ڕەمزاندنی داتا.',
      de: 'Ressourcenschonende Rust-Architektur mit Wry/Tao, direkter POS-Kartenleser-Anbindung über TCP/IP/Seriell und lokaler AES-GCM-Verschlüsselung.',
    },
    keyFeatures: {
      fa: [
        'کلاینت اجرایی کامپایل‌شده سبک در ویندوز بدون نیاز به نصب فریم‌ورک‌های سنگین',
        'پایداری کامل در زمان قطع اتصال اینترنت با ثبت آفلاین در دیتابیس SQLite',
        'ارسال آنی مبلغ فاکتور به کارت‌خوان و دریافت شناسه پیگیری پرداخت بانکی',
        'پشتیبانی جامع از پروتکل‌های PcPos بانک‌های سامان، به‌پرداخت، سداد و پاسارگاد',
      ],
      en: [
        'Lightweight pre-compiled native Windows binary with zero heavy runtime overhead',
        'Complete offline autonomy storing resilient transaction queues in SQLite',
        'Direct invoice sum transmission to card reader with instantaneous trace extraction',
        'Broad protocol compatibility with national Iranian banking terminals',
      ],
      ku: [
        'بەرنامەی زۆر خێرا لەسەر ویندۆز بە بێ پێویستی بە فایل و فڕەیم‌ۆرکی قورس',
        'کارکردنی بێ‌کێشە لە کاتی پچڕانی ئینتەرنێت بە یارمەتی داتابەیسی SQLite',
        'ناردنی خێرای بڕی پسووڵە بۆ ئامێری پۆز و وەرگرتنی کۆدی بەدواداچوون',
        'پشتیوانی زۆربەی بانکەکانی ئێران (سامان، بەپەرداخت، سەداد، پاسارگاد)',
      ],
      de: [
        'Kompilierte, schlanke Windows-Binärdatei ohne ressourcenhungrige Runtimes',
        'Vollständige Offline-Autonomie mit robuster SQLite-Transaktions-Queue',
        'Direkte Rechnungsbetragsübergabe an das Terminal mit sofortiger Rückmeldung',
        'Breite Protokollabdeckung für iranische Bank-Kassenterminals',
      ],
    },
  },

  // ==========================================
  // 5. Darvish Khan Music Shop (E-Commerce)
  // ==========================================
  {
    id: 'darvishkhan-shop',
    category: 'saas',
    iconName: 'Server',
    logo: '/images/darvishkhan_sanandaj.png',
    metrics: 'In Active Development',
    tags: ['Node.js', 'React', 'MongoDB', 'E-Commerce', 'Shaparak Gateway', 'Inventory'],
    title: {
      fa: 'فروشگاه لوازم موسیقی درویش‌خان سنندج',
      en: 'Darvish Khan Music Instruments Store',
      ku: 'فرۆشگای ئامێری مۆسیقای دەروێش‌خان سنە',
      de: 'Musikinstrumente Darvish Khan Sanandaj',
    },
    summary: {
      fa: 'فروشگاه اینترنتی و پلتفرم تخصصی فروش ساز، ادوات و تجهیزات موسیقی درویش‌خان سنندج.',
      en: 'Specialized online musical instruments and audio gear e-commerce platform for Darvish Khan in Sanandaj.',
      ku: 'فرۆشگای ئۆنلاینی ئامێری مۆسیقا و کەرەستەی دەنگی دەروێش‌خان لە سنە.',
      de: 'Spezialisierter Online-Shop für Musikinstrumente und Audiozubehör für Darvish Khan in Sanandaj.',
    },
    description: {
      fa: 'کاتالوگ تخصصی سازهای سنتی و غربی، اتصال به درگاه پرداخت مستقیم شاپرک، انبارداری هوشمند و طراحی سریع بهینه‌شده برای خرید موبایل.',
      en: 'Categorized musical instruments catalog, Shaparak banking checkout, inventory management, and fast mobile-optimized storefront.',
      ku: 'کاتالۆگی ئامێرە مۆسیقاییەکان، دەرگای پارەدانی فەرمی و بەڕێوەبردنی کۆگا.',
      de: 'Instrumentenkatalog mit Bankanbindung, Lagerverwaltung und mobiloptimiertem Checkout.',
    },
    architecture: {
      fa: 'معماری ماژولار مبتنی بر Node.js و Express همراه با دیتابیس MongoDB، مدیریت سبد خرید با اعتبارسنجی سمت سرور، و اتصال امن به شاپرک.',
      en: 'Modular architecture built with Node.js and Express with MongoDB, server-validated cart state, and secure banking payment gateway callbacks.',
      ku: 'تەلارسازی ماژۆلار بە Node.js و Express و MongoDB، بەڕێوەبردنی سەبەتەی کڕین و دەرگای بانکی.',
      de: 'Modulare Architektur mit Node.js, Express und MongoDB, serverseitiger Warenkorbvalidierung und sicherer Bankanbindung.',
    },
    keyFeatures: {
      fa: [
        'کاتالوگ تخصصی انواع سازهای سنتی و غربی با فیلتر مشخصات فنی',
        'درگاه پرداخت شاپرک با صدور فاکتور رسمی و تاییدیه پیامکی',
        'سامانه مدیریت موجودی انبار، قیمت‌گذاری و کدهای تخفیف',
        'طراحی واکنش‌گرا و سریع بهینه‌شده برای تجربه خرید کاربران موبایل',
      ],
      en: [
        'Specialized traditional and western instrument catalog with technical filters',
        'Secure banking payment integration with SMS invoice notifications',
        'Inventory stock management, dynamic pricing, and promo discount codes',
        'Fast and responsive shopping experience tailored for mobile users',
      ],
      ku: [
        'کاتالۆگی ئامێرە نەریتی و مۆدێرنەکان دەگەڵ فلتەری تایبەتمەندی',
        'دەرگای پارەدانی بانکی دەگەڵ پسووڵە و ئاگاداری کورتەنامە',
        'سیستمی بەڕێوەبردنی کۆگا، نرخدانان و کۆدی داشکاندن',
        'دیزاینی خێرا و کارامە بۆ مۆبایل و کۆمپیوتەر',
      ],
      de: [
        'Spezialisierter Instrumentenkatalog mit technischen Filtern',
        'Sichere Bank-Zahlungsintegration mit automatischer Rechnungsstellung',
        'Lagerbestandsverwaltung, Preisregeln und Rabattgutscheine',
        'Schnelle, responsive Benutzeroberfläche optimiert für Mobilgeräte',
      ],
    },
  },

  // ==========================================
  // 6. Accounting Platform (Cloud & Finance)
  // ==========================================
  {
    id: 'accounting-platform',
    category: 'saas',
    iconName: 'LayoutDashboard',
    metrics: 'Next.js 16 & Cloudflare D1',
    tags: ['Next.js', 'React 19', 'Cloudflare D1', 'Tailwind v4', 'Jalali Calendar', 'XLSX'],
    githubUrl: 'https://github.com/erm-iya',
    image: '/images/projects/accounting.png',
    title: {
      fa: 'پلتفرم جامع حسابداری و هوش مالی',
      en: 'Cloud Accounting & Financial Platform',
      ku: 'پلاتفۆرمی هەوری ژمێریاری و شیکاری دارایی',
      de: 'Cloud-Finanzbuchhaltungs-Plattform',
    },
    summary: {
      fa: 'پلتفرم ابری مدرن حسابداری و هوش مالی توسعه‌یافته با Next.js و دیتابیس توزیع‌شده Cloudflare D1.',
      en: 'Modern cloud financial accounting and analytics platform built with Next.js and Cloudflare D1 distributed database.',
      ku: 'پلاتفۆرمی مۆدێرنی هەوری ژمێریاری و شیکاری دارایی بە Next.js و داتابەیسی Cloudflare D1.',
      de: 'Moderne Cloud-Finanzbuchhaltungs- und Analyseplattform mit Next.js und verteilter Cloudflare D1-Datenbank.',
    },
    description: {
      fa: 'طراحی رابط کاربری سریع با Tailwind v4، ماژول‌های تقویم جلالی، پارس فایل‌های بانکی CSV/Excel و صدور گزارش‌های مالی در لبه ابری.',
      en: 'Engineered on Next.js 16 and React 19 with Tailwind v4, Jalali calendar logic, bank statement spreadsheet parsers, and edge data persistence.',
      ku: 'ڕووکاری خێرا بە Tailwind v4، ژماردنی دارایی، خوێندنەوەی فایلی Excel/CSVـی بانکی و ڕاپۆرتی حیسابداری.',
      de: 'Finanz-Dashboard mit Next.js 16, Tailwind v4, Bankauszugs-Parsern für Excel/CSV und Cloudflare Edge-Architektur.',
    },
    architecture: {
      fa: 'اجرا در لبه شبکه ابری (Edge Runtime) با OpenNext و Cloudflare Workers، کوئری‌های SQL بهینه‌شده روی پایگاه داده توزیع‌شده D1 و احراز هویت با JWT/Jose.',
      en: 'Edge runtime execution via OpenNext and Cloudflare Workers, low-latency SQL on Cloudflare D1, and cryptographic session verification with Jose.',
      ku: 'کارکردن لەسەر لێواری هەور بە OpenNext و Cloudflare D1، کوێری خێرای SQL و ئەمنیەتی پارێزراو.',
      de: 'Edge-Runtime-Ausführung mit OpenNext und Cloudflare D1, optimierte SQL-Abfragen und zustandslose JWT-Authentifizierung.',
    },
    keyFeatures: {
      fa: [
        'معماری ابری مدرن مبتنی بر Next.js 16، React 19 و استایلینگ بهینه Tailwind CSS v4',
        'موتور استخراج هوشمند و تطبیق صورتحساب‌های بانکی از فایل‌های اکسل و CSV',
        'پشتیبانی بومی از تقویم جلالی، محاسبات مالیاتی و تراز مالیاتی دوره‌ای',
        'استقرار لبه ابری (Cloudflare Edge) با سرعت لود و پاسخ‌دهی فوق‌العاده',
      ],
      en: [
        'Modern edge stack powered by Next.js 16, React 19, and Tailwind CSS v4 styling',
        'Intelligent bank statement parsing and reconciliation engine for Excel/CSV',
        'Native Jalali solar calendar integration with periodic tax balance reporting',
        'Cloudflare edge worker deployment delivering global low-latency data access',
      ],
      ku: [
        'تەکنەلۆژیای مۆدێرن بە Next.js 16 و React 19 و Tailwind CSS v4',
        'مۆتۆری وەرگرتن و تطبیقی صورت‌حسابی بانکی لە فایلی Excel و CSV',
        'پشتیوانی ڕۆژژمێری کوردی/هەتاوی و ژماردنی قازانج و زیان',
        'خێرایی زۆر بەرز لەسەر سێرڤەرەکانی Cloudflare Edge',
      ],
      de: [
        'Modernes Edge-Framework mit Next.js 16, React 19 und Tailwind CSS v4',
        'Automatisierter Bankauszugs-Import und Kontenabgleich für Excel/CSV',
        'Vollständige Jalali-Kalenderunterstützung und Steuerbilanzberechnungen',
        'Globale Edge-Bereitstellung auf Cloudflare Workers mit minimaler Latenz',
      ],
    },
  },

  // ==========================================
  // 7. LuxiMovie (Media & Watch Party)
  // ==========================================
  {
    id: 'luximovie',
    category: 'saas',
    iconName: 'Video',
    metrics: 'Real-time WebRTC Watch Party',
    tags: ['WebRTC', 'Socket.io', 'Node.js', 'React', 'Media Streaming'],
    githubUrl: 'https://github.com/erm-iya',
    image: '/images/projects/luximovie.png',
    title: {
      fa: 'پلتفرم تماشای همزمان فیلم (LuxiMovie)',
      en: 'LuxiMovie Synchronized Watch Party',
      ku: 'پلاتفۆرمی سەیرکردنی هاوکاتی فیلم (LuxiMovie)',
      de: 'LuxiMovie Synchrone Video-Streaming-Plattform',
    },
    summary: {
      fa: 'پلتفرم تحت وب تماشای همزمان فیلم و محتوای ویدیویی (Watch Party) با چت صوتی و متنی بلادرنگ.',
      en: 'Synchronized video streaming and watch-party web application with real-time peer communication.',
      ku: 'پلاتفۆرمی سەیرکردنی هاوکاتی فیلم (Watch Party) دەگەڵ چاتی ڕاستەوخۆ.',
      de: 'Synchronisierte Video-Streaming- und Watch-Party-Webplattform mit Echtzeit-Kommunikation.',
    },
    description: {
      fa: 'همگام‌سازی میلی‌ثانیه‌ای تایم‌لاین پخش فیلم میان کاربران با پروتکل Socket.io و WebRTC همراه با اتاق‌های گفتگوی خصوصی.',
      en: 'Sub-second playback state synchronization across distributed clients using Socket.io and WebRTC peer channels.',
      ku: 'سینکی کاتی لێدانی ڤیدیۆ بە Socket.io و ژووری تایبەتی بەکارهێنەران.',
      de: 'Präzise Synchronisation der Videowiedergabe über Socket.io und WebRTC mit privaten virtuellen Räumen.',
    },
    architecture: {
      fa: 'معماری نظیربه‌نظیر (P2P) با WebRTC برای انتقال کم‌تاخیر صدا و کنترلر سروری Socket.io جهت تطبیق فریم به فریم پلیر تمام کاربران.',
      en: 'Hybrid peer-to-peer WebRTC mesh for zero-latency audio combined with a Socket.io master state engine enforcing frame-accurate player sync.',
      ku: 'تەلارسازی تێکەڵاوی WebRTC بۆ دەنگ و Socket.io بۆ ڕێکخستنی کاتی فیلم لە هەموو بەکارهێنەراندا.',
      de: 'Hybride P2P-WebRTC-Mesh-Architektur für minimale Audio-Latenz kombiniert mit Socket.io für Frame-genaue Video-Synchronisation.',
    },
    keyFeatures: {
      fa: [
        'همگام‌سازی خودکار و بلادرنگ Play/Pause/Seek در تمامی دستگاه‌ها',
        'اتاق‌های گفتگوی صوتی و متنی کم‌حجم بر بستر WebRTC',
        'پلیر بهینه‌شده وب با بافرینگ هوشمند و سازگار با اینترنت‌های با تاخیر بالا',
        'بدون نیاز به نصب اپلیکیشن، اجرا به صورت کامل در مرورگر',
      ],
      en: [
        'Real-time automated Play/Pause/Seek synchronization across all participants',
        'Ultra-low bandwidth WebRTC voice and text communication channels',
        'Optimized web player with smart buffering resilient to high-jitter connections',
        'Zero-install frictionless experience running entirely inside modern browsers',
      ],
      ku: [
        'سینکی خودکاری ڕاگرتن و لێدانی فیلم بۆ هەموو بەشداربووان',
        'ژووری چاتی دەنگی و نووسین بە خێرایی بەرز',
        'پلەیری تایبەت بۆ بەکارهێنان لەسەر هێڵی لاوازی ئینتەرنێت',
        'بەکارکردن ڕاستەوخۆ لەناو براوزەر بێ پێویستی بە بەرنامە',
      ],
      de: [
        'Echtzeit-Synchronisation von Wiedergabe, Pause und Spulen',
        'Bandbreitenschonende WebRTC-Sprach- und Textkanäle',
        'Optimierter Web-Player mit Pufferung für instabile Verbindungen',
        'Vollständig im Browser ausführbar ohne Installation',
      ],
    },
  },

  // ==========================================
  // 8. Real Estate Platform (Confidential)
  // ==========================================
  {
    id: 'realstate-platform',
    category: 'saas',
    iconName: 'Layers',
    metrics: 'Next.js 15 & Neshan Maps SDK',
    tags: ['Next.js 15', 'React 19', 'MongoDB', 'MapLibre GL', 'Neshan Maps', 'Opossum Circuit Breaker'],
    confidential: true,
    title: {
      fa: 'پلتفرم جامع معاملات و رهن و اجاره املاک',
      en: 'Enterprise Real Estate Platform',
      ku: 'پلاتفۆرمی گشتگیری خانوبەرە و کڕین و فرۆشتن',
      de: 'Immobilien- und Vermietungsplattform',
    },
    summary: {
      fa: 'سامانه جامع تحت وب معاملات، رهن و اجاره هوشمند املاک با معماری ماژولار Next.js و نقشه تعاملی نشان.',
      en: 'Comprehensive web platform for real estate listings and rentals built with Next.js and interactive MapLibre geolocation.',
      ku: 'سیستمی گشتگیری خانوبەرە و کڕین و فرۆشتنی موڵک بە Next.js و نەخشەی جوگرافیایی.',
      de: 'Webplattform für Immobilienvermittlung und Mietverwaltung mit Next.js und interaktiver Geokarten-Integration.',
    },
    description: {
      fa: 'توسعه فول‌استک پلتفرم املاک با فیلترهای پیشرفته موقعیت مکانی، پایگاه داده MongoDB و ساختار مقیاس‌پذیر بدون نمایش عمومی سورس‌کد به دلیل حفظ محرمانگی تجاری.',
      en: 'Full-stack real estate platform featuring geolocation mapping, MongoDB persistence, and strict enterprise confidentiality compliance.',
      ku: 'پەرەپێدانی فول‌استاکی پلاتفۆرمی خانوبەرە بە مۆنگۆدی‌بی و کۆدی پارێزراو.',
      de: 'Full-Stack-Immobilienplattform mit Geodaten-Filterung und MongoDB unter strenger geschäftlicher Vertraulichkeit.',
    },
    architecture: {
      fa: 'پیاده‌سازی با Next.js 15 و React 19، الگوی مقاومت در برابر خرابی (Circuit Breaker با کتابخانه Opossum) و نقشه تعاملی با MapLibre GL.',
      en: 'Next.js 15 and React 19 architecture, Opossum circuit breaker pattern for external microservices, and interactive geospatial rendering via MapLibre GL.',
      ku: 'تەلارسازی پێشکەوتوو بە Next.js 15 و نەخشەی جوگرافیایی و کەمکردنەوەی هەڵەی سێرڤەر.',
      de: 'Next.js 15-Architektur mit Opossum-Circuit-Breaker-Pattern und interaktiver Geodaten-Visualisierung.',
    },
    keyFeatures: {
      fa: [
        'جستجو و فیلترینگ چندلایه‌ای املاک بر روی نقشه تعاملی با موقعیت جغرافیایی',
        'موتور اعتبارسنجی سخت‌گیرانه داده‌های ورودی با Zod و تایپ‌سیفتی کامل',
        'الگوی Circuit Breaker جهت حفظ پایداری سیستم حین قطعی وب‌سرویس‌های خارجی',
        'طراحی ماژولار آماده اتصال به سامانه‌های ثبت قرارداد و رزرواسیون ملک',
      ],
      en: [
        'Multi-layered geospatial property search and filtering on interactive maps',
        'Strict runtime payload validation with Zod ensuring end-to-end type safety',
        'Circuit breaker pattern safeguarding availability during third-party API downtime',
        'Modular enterprise architecture designed for contract and deal workflows',
      ],
      ku: [
        'گەڕان و فلتەری وردی موڵکەکان لەسەر نەخشەی جوگرافیایی',
        'ئەمنیەتی بەرز و پێداچوونەوەی داتا بە Zod',
        'پاراستنی سیستەم لە کاتی پچڕانی خزمەتگوزارییە دەرەکییەکان',
        'دیزاینی ماژۆلار بۆ بەستنەوە بە سیستمی گرێبەستەکان',
      ],
      de: [
        'Geodatenbasierte Immobiliensuche auf interaktiven Karten',
        'Strikte Eingabevalidierung mit Zod für vollständige Typsicherheit',
        'Circuit-Breaker-Muster zur Vermeidung von Kaskadenfehlern',
        'Modulare Architektur für Vertrags- und Buchungsprozesse',
      ],
    },
  },

  // ==========================================
  // 9. LUXIMO Tasks Bot (Bots & Automation)
  // ==========================================
  {
    id: 'luximo-tasks-bot',
    category: 'bots',
    iconName: 'Bot',
    metrics: 'Internal Team Task Management',
    tags: ['Python', 'Telethon', 'Asyncio', 'Telegram Bot API', 'Task Automation'],
    githubUrl: 'https://github.com/erm-iya',
    image: '/images/projects/taskbot.png',
    title: {
      fa: 'ربات مدیریت تسک‌های سازمانی لوکسیمو',
      en: 'LUXIMO Team Task Management Bot',
      ku: 'بۆتی بەڕێوەبردنی ئەرکەکانی لوکسیمۆ',
      de: 'LUXIMO Aufgabenverwaltungs-Bot',
    },
    summary: {
      fa: 'بات هوشمند سازمانی تلگرام جهت تخصیص، پیگیری لحظه‌ای و مدیریت وضعیت وظایف تیم هوش‌افزار زمرد.',
      en: 'Enterprise Telegram workflow bot managing asynchronous task distribution and team status tracking.',
      ku: 'بۆتی تێلێگرامی بەڕێوەبردنی ئەرکەکان و کاتی کاری بۆ تیمی هۆش‌ئەفزار زومڕود.',
      de: 'Enterprise-Telegram-Bot für Aufgabenverteilung und Status-Tracking im LUXIMO-Entwicklerteam.',
    },
    description: {
      fa: 'توسعه‌یافته با Python Asyncio جهت ایجاد تعاملی تسک‌ها، ارسال نوتیفیکیشن‌های سررسید و ثبت گزارش عملکرد اعضای تیم.',
      en: 'Automated task queues, sprint deadline alerts, and team productivity logs powered by Python and Telegram Bot API.',
      ku: 'دروستکراو بە پایتۆن بۆ دابەشکردنی ئەرک و ئاگاداری ڕاستەوخۆ بە کارمەندان.',
      de: 'Asynchrone Aufgaben-Queues, Fristenerinnerungen und Produktivitätsberichte via Python und Telegram Bot API.',
    },
    architecture: {
      fa: 'معماری مبتنی بر ماشین حالت محدود (FSM)، سیستم صف رویدادها با asyncio و ذخیره‌سازی داده‌های اسپرینت.',
      en: 'Finite State Machine (FSM) architecture, asynchronous task queuing with asyncio, and lightweight sprint persistence.',
      ku: 'تەلارسازی FSM و بەڕێوەبردنی ئەرکەکان بە asyncio بە خێرایی بەرز.',
      de: 'Finite-State-Machine-Architektur (FSM), asynchrone Aufgabenverarbeitung mit asyncio und persistente Sprint-Verwaltung.',
    },
    keyFeatures: {
      fa: [
        'تعریف و ارجاع بلادرنگ وظایف به اعضای تیم با برچسب اولویت و ددلاین',
        'ارسال خودکار یادآورهای هوشمند قبل از اتمام موعد مقرر تسک‌ها',
        'گزارش‌گیری روزانه و هفتگی از پیشرفت پروژه‌ها در گروه‌های اختصاصی تیم',
        'احراز هویت دومرحله‌ای بر پایه آی‌دی عددی ادمین‌های مجاز',
      ],
      en: [
        'Instant task assignment with priority tags and deadline timers',
        'Automated reminders dispatched ahead of impending task deadlines',
        'Daily and weekly automated team sprint progress digests in private channels',
        'Strict role-based authentication restricted to verified administrative IDs',
      ],
      ku: [
        'دیاریکردنی ئەرک بۆ ئەندامانی تیم دەگەڵ وادەی کۆتایی',
        'ناردنی بیرخستنەوەی خودکار پێش تەواوبوونی کاتی ئەرکەکان',
        'ڕاپۆرتی ڕۆژانە و هەفتانە لە پێشکەوتنی کارەکان',
        'ئەمنیەتی بەرز و سنووردارکراو بۆ بەڕێوەبەرانی ڕێپێدراو',
      ],
      de: [
        'Echtzeit-Aufgabenzuweisung mit Prioritätsstufen und Fristen',
        'Automatische Erinnerungen vor Ablauf kritischer Deadlines',
        'Tägliche und wöchentliche Sprint-Zusammenfassungen in Team-Kanälen',
        'Rollenbasierte Authentifizierung auf Basis verifizierter Telegram-IDs',
      ],
    },
  },

  // ==========================================
  // 10. LUXIMO Marketing App (Desktop & CRM)
  // ==========================================
  {
    id: 'luximo-marketing-app',
    category: 'data',
    iconName: 'LayoutDashboard',
    logo: '/images/luximo_marketing.png',
    metrics: 'Nuitka Compiled Windows Executable',
    tags: ['Python', 'Nuitka', 'Desktop CRM', 'SQLite', 'Tile Server', 'Leaflet/Map'],
    githubUrl: 'https://github.com/erm-iya',
    title: {
      fa: 'نرم‌افزار دسکتاپ بازاریابی لوکسیمو',
      en: 'LUXIMO Marketing Intelligence Desktop App',
      ku: 'نەرمەکاڵای دیسکتۆپی بازاڕگەری لوکسیمۆ',
      de: 'LUXIMO Marketing- & Lead-Management-App',
    },
    summary: {
      fa: 'نرم‌افزار دسکتاپ بازاریابی هوشمند و مدیریت سرنخ‌های فروش (Leads) کامپایل‌شده به باینری نیتیو با Nuitka.',
      en: 'Desktop CRM and marketing intelligence software compiled to a standalone native binary with Nuitka.',
      ku: 'نەرمەکاڵای دیسکتۆپ بۆ بەڕێوەبردنی کڕیاران و بازاڕگەری کامپایلکراو بە Nuitka.',
      de: 'Desktop-Marketing- und Lead-Management-Software, kompiliert als native Windows-Binärdatei mit Nuitka.',
    },
    description: {
      fa: 'مدیریت پایگاه داده مشتریان بالقوه کافه‌ها و رستوران‌ها، نقشه‌برداری مکانی شعب و همگام‌سازی داده‌ها با هسته ابری لوکسیمو.',
      en: 'Location mapping of food and beverage venues, customer lead tracking, and offline-to-cloud data synchronization.',
      ku: 'بەڕێوەبردنی زانیاری کافێ و ڕێستۆرانەکان و سینککردنی داتا لەگەڵ باکێندی لوکسیمۆ.',
      de: 'Standortkartierung von Gastronomiebetrieben, Lead-Generierung und Offline-Synchronisation mit der LUXIMO-Cloud.',
    },
    architecture: {
      fa: 'کامپایل مستقیم سورس پایتون به باینری ماشین با Nuitka C++، ویجت نقشه محلی مبتنی بر سرور تایل داخلی و ذخیره‌سازی لوکال در SQLite.',
      en: 'Direct Python-to-C++ machine compilation via Nuitka, embedded local tile server for offline map rendering, and local SQLite caching.',
      ku: 'کامپایلی ڕاستەوخۆ بە Nuitka C++ بۆ دروستکردنی فایلی جێبەجێکار و نەخشەی ناوخۆیی بە SQLite.',
      de: 'Direkte Kompilierung nach C++ via Nuitka, integrierter lokaler Tile-Server für Karten und SQLite-Caching.',
    },
    keyFeatures: {
      fa: [
        'کامپایل به فایل اجرایی باینری امن بدون وابستگی به محیط مفسر پایتون',
        'ویجت نقشه جغرافیایی برای نشان‌گذاری موقعیت کافه‌ها و دسته‌بندی منطقه‌ای',
        'موتور سنکرون‌سازی هوشمند سرنخ‌های فروش با سرور اصلی',
        'پشتیبانی کامل از فونت ایران‌یکان و تم‌های دارک و لایت در دسکتاپ',
      ],
      en: [
        'Secure standalone binary execution eliminating Python runtime dependency',
        'Geospatial map widget for plotting restaurant venues and territory clustering',
        'Intelligent lead synchronization engine bridging local state with the cloud',
        'Full Persian IRANYekanX typography with adaptive dark and light themes',
      ],
      ku: [
        'دروستکردنی فایلی exeـی خێرا بە بێ پێویستی بە پایتۆن',
        'نەخشەی جوگرافیایی بۆ دیاریکردنی جێگای کافێ و ڕێستۆرانەکان',
        'سیستمی سینککردنی داتای کڕیاران لەگەڵ سرڤەر',
        'پشتیوانی فۆنتی کوردی و ستایلی دارک و لایت',
      ],
      de: [
        'Sichere Standalone-Binärdatei ohne Abhängigkeit von einer Python-Installation',
        'Geokarten-Widget zur Erfassung und Clusterung von Gastronomiestandorten',
        'Intelligenter Synchronisationsmechanismus zwischen lokalem Status und Cloud',
        'Vollständige RTL-Typografie mit adaptiven Dark- und Light-Themes',
      ],
    },
  },

  // ==========================================
  // 11. DigiHost Automation (DevOps & Linux)
  // ==========================================
  {
    id: 'digihost-automation',
    category: 'bots',
    iconName: 'Terminal',
    metrics: 'Automated Hosting Provisioning',
    tags: ['Python', 'PHP', 'cPanel API', 'Linux Bash', 'Automation', 'Telegram API'],
    githubUrl: 'https://github.com/erm-iya',
    title: {
      fa: 'اتوماسیون زیرساخت هاستینگ دیجی‌هاست',
      en: 'DigiHost Automated Cloud & Infrastructure Engine',
      ku: 'ئۆتۆمەیشنی سرڤەری لینوکس و هاستینگی دیجی‌هاست',
      de: 'DigiHost Cloud- & Serverautomatisierungs-Engine',
    },
    summary: {
      fa: 'اسکریپت‌های اتوماسیون DevOps جهت تحویل آنی سرورهای لینوکس و کانفیگ ماژول‌های cPanel در هاستینگ.',
      en: 'DevOps automation pipeline enabling zero-touch Linux server provisioning and cPanel API hooks.',
      ku: 'ئۆتۆمەیشنی سرڤەری لینوکس و ڕادەستکردنی خێرای هاستینگ لە دیجی‌هاست.',
      de: 'DevOps-Automatisierungs-Pipeline für Linux-Serverbereitstellung und cPanel-API-Integration.',
    },
    description: {
      fa: 'برنامه‌نویسی اسکریپت‌های تحویل آنی منابع هاست با پایتون و پی‌اچ‌پی متصل به درگاه بات تلگرامی مدیریت سرور.',
      en: 'Automated provisioning workflows, disk quota orchestration, and direct Telegram server management bots.',
      ku: 'سکریپتی ئۆتۆماتیکی دابەشکردنی سێرڤەر بە پایتۆن و بۆتی تێلێگرام.',
      de: 'Automatisierte Bereitstellungsworkflows und Telegram-Verwaltungsbot für Webhosting-Kunden.',
    },
    architecture: {
      fa: 'معماری رویدادمحور با وب‌هوک‌های مالی WHMCS، صف‌های پردازشی لینوکس و اسکریپت‌های سیستمی Bash.',
      en: 'Event-driven billing webhooks triggering asynchronous WHMCS provisioning scripts and Linux Bash daemons.',
      ku: 'تەلارسازی بەستراو بە ڕووداو بۆ بەستنەوەی پارەدانی بانکی بە دابەشکردنی خێرای هاست.',
      de: 'Ereignisgesteuerte Webhooks zur Auslösung automatisierter WHMCS- und Linux-Bash-Skripte.',
    },
    keyFeatures: {
      fa: [
        'تحویل و پیکربندی خودکار هاست و دسترسی دیتابیس در کمتر از ۳۰ ثانیه پس از پرداخت',
        'ربات تلگرام اختصاصی برای مشاهده مصرف پهنای باند و ریست سرویس‌ها',
        'اسکریپت‌های بکاپ‌گیری خودکار روزانه و مدیریت ایزوله منابع کاربری',
        'مدیریت هوشمند DNS و تنظیم خودکار رکوردهای ایمیل و ساب‌دامین',
      ],
      en: [
        'Automated sub-30-second hosting provisioning upon payment verification',
        'Self-service Telegram bot for bandwidth monitoring and service restarts',
        'Daily incremental backup orchestration with automated integrity checks',
        'Automated DNS zone configuration and email record propagation',
      ],
      ku: [
        'ڕادەستکردنی خودکاری هاستینگ لە ژێر ٣٠ چرکەدا دوای پارەدان',
        'بۆتی تێلێگرام بۆ پشکنینی بەکارهێنانی ئینتەرنێت و دەستپێکردنەوەی هاست',
        'بەکەپی ڕۆژانەی خودکار و پاراستنی داتا',
        'ڕێکخستنی خودکاری DNS و ئیمەیل',
      ],
      de: [
        'Vollautomatische Bereitstellung von Webhosting-Paketen in unter 30 Sekunden',
        'Self-Service-Telegram-Bot für Bandbreitenabfragen und Server-Neustarts',
        'Tägliche automatisierte Backups mit automatischer Integritätsprüfung',
        'Automatisierte DNS-Zonen- und E-Mail-Konfiguration',
      ],
    },
  },

  // ==========================================
  // 12. Vahed Manager (Academic Scheduling)
  // ==========================================
  {
    id: 'vahed-manager',
    category: 'data',
    iconName: 'GraduationCap',
    metrics: 'Conflict-Free Course Scheduler',
    tags: ['JavaScript', 'HTML5', 'CSS3', 'Algorithms', 'Local Storage', 'PWA'],
    githubUrl: 'https://github.com/erm-iya',
    title: {
      fa: 'سامانه هوشمند انتخاب واحد دانشگاهی',
      en: 'University Course Schedule Matrix Optimizer',
      ku: 'سیستمی زیرەکی هەڵبژاردنی وانەکانی زانکۆ',
      de: 'Universitäts-Stundenplanoptimierer',
    },
    summary: {
      fa: 'سامانه وب و الگوریتم حل تداخل هفتگی برای بهینه‌سازی انتخاب واحد و چینش برنامه درسی دانشجویان.',
      en: 'Academic course scheduling algorithm resolving timetable collisions and visualizing semester curricula.',
      ku: 'سیستمی دیاری کردنی وانەکان و نەهێشتنی تێکهەڵچوونی کات لە زانکۆ.',
      de: 'Akademischer Stundenplan-Optimierungsalgorithmus zur Vermeidung von Kursüberschneidungen.',
    },
    description: {
      fa: 'الگوریتم حل ماتریس تداخل زمانی کلاس‌ها همراه با خروجی تقویم تعاملی هفتگی بدون نیاز به اینترنت.',
      en: 'Fast schedule collision matrix algorithm with interactive weekly calendar planning and offline export.',
      ku: 'ئەلگۆریتمی پێشگیری لە تێکهەڵچوونی کاتی وانەکان دەگەڵ خشتەی هەفتانە.',
      de: 'Kollisionsmatrix-Algorithmus mit interaktiver Wochenkalenderansicht und Offline-Export.',
    },
    architecture: {
      fa: 'الگوریتم ماتریس برخورد بازه‌های زمانی (Time-Slot Collision Detector) با پردازش سمت کلاینت و ذخیره‌سازی محلی.',
      en: 'Client-side Interval Intersection algorithm for instant conflict detection, powered by vanilla browser APIs and LocalStorage.',
      ku: 'ئەلگۆریتمی لێکۆڵینەوەی کاتی هاوکات لە براوزەر بە بێ پێویستی بە سێرڤەر.',
      de: 'Clientseitiger Intervall-Kollisionsalgorithmus zur sofortigen Konflikterkennung auf Basis moderner Browser-APIs.',
    },
    keyFeatures: {
      fa: [
        'تشخیص آنی تداخل ساعت تشکیل کلاس‌ها و امتحانات پایان‌ترم',
        'محاسبه خودکار سقف و کف مجاز تعداد واحدهای اخذشده بر اساس معدل',
        'خروجی برنامه هفتگی در قالب جدول تمیز و آماده ذخیره و چاپ',
        'عملکرد ۱۰۰٪ کلاینت‌ساید بدون نیاز به ثبت‌نام یا ارسال اطلاعات به سرور',
      ],
      en: [
        'Instant collision detection across lecture time-slots and final exam dates',
        'Automated credit-hour ceiling validation based on student academic standing',
        'Clean tabular weekly timetable export formatted for printouts and sharing',
        'Completely client-side execution guaranteeing privacy with zero sign-up',
      ],
      ku: [
        'ناسینەوەی خێرای تێکهەڵچوونی کاتی وانەکان و تاقیکردنەوەکان',
        'ژماردنی خودکاری ڕێژەی واحیدەکان بە پێی نمرە',
        'دەرکردنی خشتەی هەفتانە بۆ چاپ و شێرکردن',
        'کارکردنی ١٠٠٪ ناو براوزەر بە بێ ناردنی داتا بۆ سێرڤەر',
      ],
      de: [
        'Echtzeit-Kollisionsprüfung von Vorlesungs- und Prüfungsterminen',
        'Automatische Validierung von Credit-Limits je nach Studienfortschritt',
        'Druckoptimierter Export des Wochenstundenplans',
        'Vollständig clientseitig ohne Registrierung oder Serverabhängigkeit',
      ],
    },
  },

  // ==========================================
  // 13. Meteorology Automizer (Confidential)
  // ==========================================
  {
    id: 'meteorology-automizer',
    category: 'bots',
    iconName: 'Activity',
    metrics: 'Automated Weather Stations Daemon',
    tags: ['Node.js', 'WMO Standards', 'SysTray2', 'Inno Setup', 'Proprietary NDA'],
    confidential: true,
    title: {
      fa: 'اتوماسیون هواشناسی و داده‌کاوی دولتی',
      en: 'Provincial Meteorology Telemetry Automizer',
      ku: 'ئۆتۆمەیشنی کەشناسی و داتای پارێزگا',
      de: 'Meteorologischer Telemetrie- & Stationsautomatisierer',
    },
    summary: {
      fa: 'سرویس دسکتاپ و دیمن پس‌زمینه برای کنترل ایستگاه‌های خودکار و تلگرام‌های WMO.',
      en: 'Desktop background daemon for telemetry monitoring of automatic weather stations and WMO telegram generation.',
      ku: 'خزمەتگوزاری دیسکتۆپ بۆ کۆنترۆڵی وێستگە خودکارەکان و تەلەگرامەکانی WMO.',
      de: 'Desktop-Hintergrunddienst zur Überwachung automatischer Wetterstationen und WMO-Telemetriegenerierung.',
    },
    description: {
      fa: 'پایش بلادرنگ ایستگاه‌های هواشناسی و تولید گزارش‌ها؛ سورس‌کد و جزئیات عملکرد به دلیل الزامات سازمانی کاملاً محرمانه است.',
      en: 'Real-time meteorological station monitoring and reporting; all implementation details and source code are strictly proprietary and confidential.',
      ku: 'پشکنینی داتای کەشناسی و دروستکردنی ڕاپۆرت؛ تەواوی وردەکارییەکان و سۆرس کۆد بە هۆی یاسای سازمانی نهێنی و پارێزراوە.',
      de: 'Echtzeit-Wetterdatenüberwachung und Berichterstellung; sämtliche Implementierungsdetails und Quellcode unterliegen strenger Geheimhaltung.',
    },
    architecture: {
      fa: 'سرویس پس‌زمینه دسکتاپ زمان‌بندی‌شده، فرمت‌بندی کدهای بین‌المللی سینوپ و دیمن تسک‌بار SysTray2 تحت قوانین عدم افشا (NDA).',
      en: 'Scheduled desktop background service, international WMO telegram encoding, and SysTray2 integration governed by strict non-disclosure terms.',
      ku: 'خزمەتگوزاری پاشبنەمای ویندۆز، دروستکردنی کودی نێودەوڵەتی WMO و ئاسایشی پارێزراو.',
      de: 'Geplanter Desktop-Hintergrunddienst, internationale WMO-Telemetrie und SysTray-Integration unter strikter Geheimhaltung.',
    },
    keyFeatures: {
      fa: [
        'پایش خودکار داده‌های ثبت‌شده سنسورهای ایستگاه‌های هواشناسی',
        'تولید خودکار کدهای استاندارد مخابراتی سینوپ (SYNOP/METAR) سازمان هواشناسی',
        'سرویس مستقل دسکتاپ با اجرای نامحسوس در SysTray بدون تداخل در سیستم‌عامل',
        'حفظ ۱۰۰٪ محرمانگی اطلاعات، معماری و الگوریتم‌های پردازشی تحت قرارداد NDA',
      ],
      en: [
        'Automated real-time sensor polling across provincial meteorological stations',
        'Automated generation of official WMO SYNOP and METAR telegrams',
        'Self-contained desktop service running unobtrusively in the Windows SysTray',
        'Full operational confidentiality and architectural NDA compliance',
      ],
      ku: [
        'پشکنینی خودکاری داتای سێنسۆرەکانی وێستگەکانی کەشناسی',
        'دروستکردنی خودکاری کۆدی ستانداردەکانی SYNOP و METAR',
        'بەرنامەی دیسکتۆپ بە کارکردنی ئارام لە SysTray',
        'پاراستنی تەواوی نهێنی داتا و ئەلگۆریتمەکان لەژێر گرێبەستی NDA',
      ],
      de: [
        'Automatisierte Telemetrieabfrage meteorologischer Stationen',
        'Automatische Erstellung standardisierter WMO-SYNOP- und METAR-Wettermeldungen',
        'Unaufdringlicher Windows-SysTray-Hintergrundbetrieb',
        'Vollständige Vertraulichkeit von Architektur und Algorithmen unter NDA',
      ],
    },
  },
];
