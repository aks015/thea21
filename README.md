# Vertex Studio — Agency Website

Premium single-page agency site. Dark theme, electric-blue accent, scroll animations, glassmorphism.

## ▶️ How to run

> ⚠️ `npm run dev` **does not work** here because the folder path contains `&`
> ("Akshat **&** Aman Project"), and Windows treats `&` as a command separator.
> Use the launcher scripts below instead — they call Next.js directly.

- **Development** (live reload): double-click **`start-dev.bat`** → opens http://localhost:3000
- **Production preview** (fast, what clients see): double-click **`start-prod.bat`**

From a terminal you can also run:
```
node ".\node_modules\next\dist\bin\next" dev
```

> 💡 Tip: if you move this project to a folder **without `&` or spaces**
> (e.g. `D:\Projects\vertex-studio`), then plain `npm run dev` will work normally.

## ✏️ Changing the brand name & details

Everything is driven from one file: **`src/constants/site.ts`**

- Change `brand.name` → the whole site (navbar, footer, title, logo) updates.
- `brand.email`, `brand.phone`, `brand.location`, `brand.socials` → contact + footer.
- Edit `services`, `projects`, `testimonials`, `faqs`, `process`, `tech` arrays to
  swap copy without touching any component.

## 🎨 Theme (light + dark toggle)

There's a **sun/moon toggle in the header** (desktop + mobile). It defaults to
**dark**, remembers the user's choice in `localStorage`, and applies before the
page paints (no flash).

How it works:
- Colors are **semantic tokens** that flip with the theme: `bg-bg`, `bg-surface`,
  `text-fg`, `border-fg/10`, `.glass`, `.text-gradient`, `.bg-grid`.
- Light/dark values live in `src/app/globals.css` under `.dark` and `.light`
  (the `--bg`, `--surface`, `--fg`, `--glass-*` variables).
- Accent (electric blue `#3B82F6`) stays the same in both themes — change it in
  `tailwind.config.ts` (the `accent` color).
- To change the **default** theme, edit the `theme` fallback in the
  `themeScript` in `src/app/layout.tsx`.

## 📦 Tech stack

Next.js 15 · React 19 · TypeScript · TailwindCSS · Framer Motion · Lenis (smooth scroll) · Lucide icons

## 🧩 Structure

```
src/
  app/            layout, page, global styles
  components/
    layout/       Navbar, Footer
    providers/    SmoothScroll (Lenis)
    sections/     Hero, About, Services, Work, Process, TechStack,
                  WhyUs, Testimonials, FAQ, Contact, CTABanner
    ui/           Reveal, Marquee, MagneticButton, CustomCursor, SectionHeading
  constants/      site.ts  ← all content lives here
  lib/            utils.ts
```

## 🔜 Not yet wired (frontend-only for now)

- Contact form just shows a success state; **no backend / email** yet.
  Hook `handleSubmit` in `src/components/sections/Contact.tsx` to an API route,
  Formspree, Resend, or similar when ready.
- Project cards link nowhere yet (dummy showcase).
