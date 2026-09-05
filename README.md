# Ermiya Heidari | Lead Back-End Engineer & Co-Founder at LUXIMO

[![Live Demo](https://img.shields.io/badge/Live%20Demo-erm--iya.github.io-0d9488?style=for-the-badge&logo=github)](https://erm-iya.github.io)
[![Tech Stack](https://img.shields.io/badge/Stack-React%2019%20%7C%20TypeScript%20%7C%20Vite%20%7C%20Tailwind-14b8a6?style=for-the-badge)](https://github.com/erm-iya)
[![License](https://img.shields.io/badge/License-MIT-slate?style=for-the-badge)](LICENSE)

A high-performance, minimalist personal portfolio and engineering showcase engineered for **Ermiya Heidari** (Lead Back-End Engineer & Co-Founder at **LUXIMO**). Designed around a zen-minimalist aesthetic, featuring deep velvet dark mode, crisp high-contrast light mode, full 4-language i18n localization, native vector SVG flags, and an interactive developer CLI console.

---

## ⚡ Key Highlights & Architecture

- **Zen-Minimalist Dual Theme (Dark & Light Mode)**:
  - **Serene Dark**: Deep velvet background (`#080c14`) accented with subtle teal (`#14b8a6`) and emerald (`#10b981`) ambient glow blobs.
  - **Crisp Light**: Modern `slate-50` foundation with translucent frosted glass cards (`.glass-card`), high-contrast typography, and refined border outlines.
  - Smooth theme transitions and responsive background tech mesh grid.

- **Full 4-Language Localization (i18n & Bi-Directional)**:
  - **فارسی (FA)**: Native Persian typography with RTL layout.
  - **English (EN)**: Clean modern technical English with LTR layout.
  - **کوردی سۆرانی (KU)**: Authentic Sorani Kurdish phrasing with RTL layout.
  - **Deutsch (DE)**: Structured German engineering copy with LTR layout.

- **Cross-Platform Vector SVG Flags**:
  - Independent vector SVG components for **Iran (IR)**, **United Kingdom (GB)**, **Kurdistan (KU)**, and **Germany (DE)**.
  - Eliminates OS-level emoji limitations (resolving raw `ir`/`gb` text codes on Windows platforms).

- **Flagship Project Architecture Showcase**:
  - **LUXIMO Core SaaS**: High-concurrency multi-tenant restaurant and business infrastructure built with Node.js, MongoDB, and real-time Socket.io.
  - **LUXIMO PcPos Hardware Bridge**: Low-level TCP/DLL banking terminal integration bridge for Iranian POS networks.
  - **IosDLmanager**: Mobile download manager app built with React Native and liquid glass aesthetic.
  - **TTM Task Bot**: Autonomous Telegram bot suite for task scheduling, team notifications, and Gantt charts.
  - **Planer Web Suite**: Collaborative task tracker and developer task board.
  - **DigiHost Automizer**: Linux and cPanel automation scripts for instant VPS and server provisioning.

- **Interactive In-Browser Developer Terminal (Easter Egg)**:
  - Embedded hacker console with interactive commands: `help`, `bio`, `projects`, `skills`, `contact`, `hire` (with celebratory confetti particle bursts), and `sudo`.

- **Accessible Radix UI Primitives**:
  - Modals, Accordions, Buttons, and Badges engineered with `@radix-ui` and Tailwind CSS.

---

## 🛠️ Tech Stack

| Domain | Technologies |
| :--- | :--- |
| **Core** | React 19, TypeScript, Vite 8 |
| **Styling** | Tailwind CSS v3, CSS Variables, Glassmorphism, Responsive Grid |
| **UI Primitives** | Radix UI (`@radix-ui/react-dialog`, `@radix-ui/react-accordion`, `@radix-ui/react-slot`) |
| **Icons & Media** | Lucide React, Custom Vector SVGs |
| **Typography** | IRANYekanX (Thin, Regular, Medium, DemiBold, Bold, ExtraBold, Black) |
| **Effects & Tools** | Canvas-Confetti, Oxlint |
| **CI/CD** | GitHub Actions (`.github/workflows/deploy.yml`), GitHub Pages |

---

## 🚀 Local Development

Clone the repository and spin up the local development server:

```bash
# Clone the repository
git clone https://github.com/erm-iya/erm-iya.github.io.git
cd erm-iya.github.io

# Install dependencies
npm install

# Start Vite dev server
npm run dev
```

Open [http://localhost:5173/](http://localhost:5173/) in your browser.

---

## 📦 Production Build & Quality Checks

```bash
# Run linting with Oxlint
npm run lint

# Compile TypeScript and build production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 🌐 Deployment

The project is automatically built and deployed to GitHub Pages via **GitHub Actions** upon any push to `main` branch:

- **Workflow configuration**: `.github/workflows/deploy.yml`
- **Live URL**: [https://erm-iya.github.io](https://erm-iya.github.io)

For manual deployment using `gh-pages`:
```bash
npm run deploy
```

---

## 📬 Contact & Channels

- **Telegram**: [@erm_iya_h](https://t.me/erm_iya_h)
- **Email**: [heidariermiya@gmail.com](mailto:heidariermiya@gmail.com)
- **GitHub**: [github.com/erm-iya](https://github.com/erm-iya)
- **Company**: [luximo.ir](https://luximo.ir)

---

Designed and engineered with precision by **Ermiya Heidari**. All rights reserved.
