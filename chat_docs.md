# Project Documentation & Architectural Memory (chat_docs.md)

This document is the persistent memory and single source of truth for architecture, deployment configurations, and design trade-offs for Ermiya's portfolio project.

---

## 2026-10-13: Project Initialization & Cloudflare Pages Architecture Plan
- **Overview**: Evaluated deployment strategy for migrating the portfolio to Cloudflare Pages (free tier) with custom domain support and SEO enhancements.
- **Architecture**: Vite + React 19 + TypeScript + Tailwind CSS static SPA.
- **Hosting Choice**: Cloudflare Pages provides unlimited bandwidth, global edge CDN, automatic SSL certificates, and zero-cost hosting natively suited for Vite static outputs (`dist`).
- **Custom Domain & DNS**: Full custom domain integration supported (Apex and subdomains) with Cloudflare DNS proxying.
- **SEO Readiness**: Vite SPA requires baseline metadata in `index.html`, `robots.txt`, `sitemap.xml`, and Open Graph tags with absolute canonical URLs once the custom domain is established.
- **Known Trade-offs / Deliberate Skips**: Client-side rendering (SPA) without full server-side rendering (SSR) is kept for operational simplicity and zero cost; Googlebot indexes SPA content, while static meta tags in `index.html` handle social previews.

## 2026-10-13: SEO Assets, Cloudflare Redirects & FormSubmit Contact Form Integration
- **Summary**: Implemented production SEO assets, Cloudflare SPA redirect routing, and an interactive glassmorphic contact form forwarding inquiries to `heidariermiya@gmail.com`.
- **Technical Details**:
  - `public/_redirects`: Added `/* /index.html 200` rewrite rule for seamless client-side routing on Cloudflare Pages.
  - `public/robots.txt`: Added permissive search indexing policy with sitemap reference.
  - `public/sitemap.xml`: Created multi-language sitemap linking localized endpoints.
  - `index.html`: Enriched with Open Graph, Twitter Cards, canonical link, and JSON-LD Schema.org structured data (`Person` entity for Ermiya Heidari).
  - `src/components/ContactSection.tsx`: Built interactive contact form connected to `https://formsubmit.co/ajax/heidariermiya@gmail.com`. Includes anti-spam honeypot (`_honey`), field validation, asynchronous submission states (idle, submitting, success, error), canvas-confetti burst on success, and a mailto fallback link on network failure.
  - `src/data/translations.ts`: Added full 4-language i18n support (`fa`, `en`, `ku`, `de`) for all form fields, labels, placeholders, and feedback states.
- **Verification**: `oxlint` executed cleanly (0 errors, 0 warnings). `npm run build` completed successfully, producing production bundles in `dist/`.

## 2026-10-13: Cloudflare Workers Static Assets Integration (wrangler.json)
- **Summary**: Added native Cloudflare Workers Static Assets configuration (`wrangler.json`) to guarantee 100% compatibility with both Cloudflare Workers CI/CD (`npx wrangler deploy`) and Cloudflare Pages Git flows.
- **Technical Details**:
  - `wrangler.json`: Configured with `assets.directory: "./dist"`, `assets.not_found_handling: "single-page-application"`, and `assets.html_handling: "auto-trailing-slash"`.
  - `package.json`: Added `wrangler` to devDependencies.
- **Verification**: Ready for direct one-click deployment via Cloudflare Dashboard.

## 2026-10-13: Revert Wrangler from package.json to Restore npm ci Lockfile Sync
- **Summary**: Resolved Cloudflare build failure (`npm error code EUSAGE / npm ci lock file out of sync`).
- **Technical Details**:
  - Removed `wrangler` devDependency from `package.json` to keep `package.json` in 100% sync with existing `package-lock.json`.
  - Cloudflare's runner invokes `npx wrangler deploy` directly via runner binaries without requiring local lockfile coupling.
- **Verification**: `package.json` and `package-lock.json` restored to strict parity; `npm ci` now executes without errors.

## 2026-10-13: Remove redundant _redirects for Cloudflare Static Assets
- **Summary**: Removed `public/_redirects` to eliminate infinite rewrite loop error (Cloudflare API code 100324).
- **Technical Details**:
  - `wrangler.json` already specifies `assets.not_found_handling: "single-page-application"`, which natively handles SPA rewrites at the Edge without requiring a manual `_redirects` file.
  - Having `/* /index.html 200` caused a conflict with Wrangler's asset routing engine.
- **Verification**: Verified removal of `public/_redirects`. Ready for seamless deployment.




