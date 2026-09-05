# پورتفولیو شخصی و مهندسی ارمیا حیدری (Ermiya Heidari)

وب‌سایت پورتفولیو مدرن، مینیمال و آرامش‌بخش (Zen Minimalist) با تم اختصاصی **Teal & Emerald Dark**، فونت اصیل **IRANYekanX**، پشتیبانی کامل از **۴ زبان (فارسی، انگلیسی، کوردی سۆرانی، آلمانی)** و سازگار با **GitHub Pages**.

---

## 🌟 ویژگی‌های برجسته (Key Highlights)

- **طراحی دلنواز و مینیمال (Zen Minimal & Serene Dark)**:
  - پس‌زمینه دارک مخملی (`#080c14`) به دور از شلوغی‌های بصری با رنگ‌های ملایم فیروزه‌ای (`Teal`) و سبز زمردی (`Emerald`).
  - افکت‌های شیشه‌ای لطیف (Glassmorphism) و مرزهای فوق‌باریک و صیقلی.
- **تایپوگرافی رسمی و چشم‌نواز با IRANYekanX**:
  - بارگذاری مستقیم فایل‌های Woff2 فونت ایران‌یکان از پوشه `public/fonts/` جهت نمایش یکدست در تمام سیستم‌عامل‌ها.
- **پشتیبانی کامل از ۴ زبان (4-Language Ready)**:
  - **فارسی (FA)** - راست‌به‌چپ (RTL)
  - **English (EN)** - چپ‌به‌راست (LTR)
  - **کوردی سۆرانی ئەردەڵانی (KU)** - راست‌به‌چپ (RTL)
  - **Deutsch (DE)** - چپ‌به‌راست (LTR)
- **کامپوننت‌های پایدار shadcn/ui و Radix UI**:
  - `Card`, `Button`, `Badge`, `Dialog`, `Tabs`, `Accordion`
- **ویترین جامع پروژه‌ها همراه با دیاگرام و توضیحات معماری**:
  - پروژه ابری لوکسیمو (LUXIMO Core SaaS)
  - پل ارتباطی کارت‌خوان‌های بانکی (LUXIMO PcPos Bridge)
  - اپلیکیشن موبایل مدیریت دانلود iOS (Liquid Glass UI)
  - ربات تلگرام مدیریت تسک لوکسیمو (TTM Task Bot)
  - سامانه مدیریت پروژه تعاملی (Planer Web Suite)
  - اتوماسیون پروویژن سرور دیجی‌هاست (DigiHost Automizer)
- **کنسول تعاملی توسعه‌دهنده (Dev Console / Easter Egg)**:
  - ترمینال شبیه‌سازی‌شده در صفحه با دستورات `help`, `bio`, `projects`, `skills`, `contact`, `hire` (همراه با انیمیشن جشن کانفتی).
- **اتصال مستقیم شبکه‌های ارتباطی**:
  - کپی سریع ایمیل با یک کلیک و فیدبک لحظه‌ای، لینک مستقیم تلگرام، گیت‌هاب، اینستاگرام و تماس تلفنی.

---

## 🚀 نحوه اجرا در محیط محلی (Local Development)

```bash
# نصب وابستگی‌ها
npm install

# اجرای سرور توسعه
npm run dev
```

سپس آدرس `http://localhost:5173/` را در مرورگر باز کنید.

---

## 📦 استقرار آسان روی GitHub Pages (Deployment)

### روش اول: استقرار خودکار با GitHub Actions (پیش‌نهادی)
یک فایل ورک‌فلو در مسیر `.github/workflows/deploy.yml` آماده شده است. تنها کافیست ریپازیتوری را در اکانت گیت‌هاب خود push کنید:
1. در گیت‌هاب به بخش **Settings** > **Pages** بروید.
2. در بخش **Build and deployment** منبع (Source) را روی **GitHub Actions** بگذارید.
3. با هر بار `git push origin main`، سایت به صورت اتوماتیک بیلد شده و روی آدرس دامنه گیت‌هاب شما منتشر می‌شود.

### روش دوم: استقرار دستی با اسکریپت
```bash
npm run deploy
```

---

## 🛠️ استک فنی (Tech Stack)

- **Framework**: React 19 + TypeScript + Vite 8
- **Styling**: Tailwind CSS v3 + CSS Variables + Glassmorphism
- **Components**: Radix UI Primitives (shadcn/ui style)
- **Icons**: Lucide React + Inline SVGs
- **Typography**: IRANYekanX (Thin to ExtraBlack)
- **Easter Eggs**: Canvas-Confetti
