# TheA21 Technologies — Agency Website

Premium single-page agency site for **TheA21 Technologies** (internal package
name `vertex-studio`). Dark/light theme, electric-blue accent, scroll
animations, glassmorphism. Live at **https://www.thea21.in**.

## ▶️ How to run

Plain `npm` scripts work when the project lives in a path **without `&`**
(this folder, `…/thea21`, is fine):

```bash
npm run dev      # development, live reload → http://localhost:3000
npm run build    # production build (Turbopack)
npm run start    # serve the production build
npm run lint     # ESLint (flat config)
```

> ⚠️ **Windows + a folder path containing `&`:** `npm run dev` breaks because the
> shell treats `&` as a command separator. If you keep the project under such a
> path (e.g. `…/Akshat & Aman Project`), use the launcher scripts instead —
> double-click **`start-dev.bat`** or **`start-prod.bat`**, which call Next.js
> directly. Or run: `node ".\node_modules\next\dist\bin\next" dev`
>
> 💡 Simplest fix: keep the project in a path with no `&` or spaces.

## ✏️ Changing the brand name & details

Everything is driven from one file: **`src/constants/site.ts`** (single source
of truth).

- `brand.name` / `brand.shortName` → navbar, footer, page title, metadata, logo.
- `brand.email`, `brand.phone`, `brand.whatsapp`, `brand.location` → contact + footer.
- `brand.socials` → footer icons appear **only** for non-empty URLs (so empty
  socials stay hidden — no dead links).
- Edit the `services`, `projects`, `liveProjects`, `process`, `tech`, `whyUs`,
  `promises`, `testimonials`, `founders`, `faqs`, `budgets`, `projectTypes`
  arrays to swap copy without touching any component.

## 📨 Contact form / lead capture

The contact form (`src/components/sections/Contact.tsx`) captures leads **two
ways**, so nothing is lost:

1. **WhatsApp** — opens `wa.me` with the enquiry pre-filled (to `brand.whatsapp`).
   The window is opened inside the click gesture so the popup isn't blocked.
2. **Email (Web3Forms)** — a non-blocking `fetch` records every submission by
   email, even if the visitor never sends the WhatsApp message. Set
   `NEXT_PUBLIC_WEB3FORMS_KEY` to enable it (leave blank to disable).

Anti-spam: a hidden honeypot field (`botcheck`) silently drops bot submissions.

## 🎨 Theme (light + dark toggle)

A sun/moon toggle in the header (`src/components/ui/ThemeToggle.tsx`) flips the
theme. It defaults to **dark**, remembers the choice in `localStorage`, and a
pre-paint script in `src/app/layout.tsx` applies it before first paint (no flash).

- Colors are **semantic tokens** that flip with the theme: `bg-bg`, `bg-surface`,
  `text-fg`, `border-fg/10`, `.glass`, `.text-gradient`, `.bg-grid`.
- Light/dark token values live in `src/app/globals.css` under `.dark` / `.light`.
- Accent (electric blue `#3B82F6`) is the same in both themes — change it in
  `tailwind.config.ts` (the `accent` color).
- To change the **default** theme, edit the fallback in the `themeScript` in
  `src/app/layout.tsx`.

## ⚙️ Environment variables

All keys are `NEXT_PUBLIC_*` (browser-exposed — no secrets). Copy
`.env.local.example` → `.env.local` and fill what you have. In production, add
the same keys in the Vercel project settings.

| Key | Purpose |
|-----|---------|
| `NEXT_PUBLIC_SITE_URL` | Canonical URL for SEO/OG/sitemap/JSON-LD (defaults to `https://www.thea21.in`). |
| `NEXT_PUBLIC_WEB3FORMS_KEY` | Web3Forms access key — emails contact-form leads. Blank = disabled. |
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 ID (`G-XXXXXXXXXX`). Blank = disabled. |
| `NEXT_PUBLIC_META_PIXEL_ID` | Meta (Facebook) Pixel ID. Blank = disabled. |

Analytics (`src/components/Analytics.tsx`) renders **nothing** unless its key is
set — zero tracking by default.

## 📦 Tech stack

Next.js 16 (App Router, Turbopack) · React 19 · TypeScript · TailwindCSS 3 ·
Framer Motion · Lenis (smooth scroll) · Lucide icons. ESLint 9 (flat config,
`eslint.config.mjs`). Deployed on Vercel.

## 🧩 Structure

```
src/
  app/
    layout.tsx        root html, fonts, metadata, JSON-LD schema, theme script, Analytics
    page.tsx          single-page composition (section order)
    globals.css       theme tokens (.light/.dark) + .glass / .text-gradient utilities
    privacy/, terms/  static legal pages (shared LegalPage shell)
    not-found.tsx     custom 404
    robots.ts, sitemap.ts   SEO route handlers
  components/
    Analytics.tsx     GA4 + Meta Pixel (env-gated)
    layout/           Navbar, Footer, LegalPage
    providers/        SmoothScroll (Lenis)
    sections/         Hero, About, Services, Work, CTABanner, Process, TechStack,
                      WhyUs, Promise, Testimonials, FAQ, Founders, Contact
                      + ProjectMockup, ProjectModal
    ui/               Reveal, Marquee, MagneticButton, SectionHeading,
                      ThemeToggle, WhatsAppFab
  constants/site.ts   all content lives here
  lib/                utils.ts (cn), lenis.ts, contactPrefill.ts
public/brand/         logo.png (favicon/app icon), banner.png (OG share image)
```

## 🔜 Pending / not yet wired

- **Social links:** only Facebook is set in `brand.socials`; Instagram/LinkedIn/
  Twitter are blank (footer hides empty ones). Add real URLs when ready.
- **Testimonials:** the section auto-hides while `testimonials` is empty (so the
  site never shows fake reviews). Add real client quotes to display it.
- **Analytics:** GA4 / Meta Pixel code is present but inactive until the env keys
  are set.
