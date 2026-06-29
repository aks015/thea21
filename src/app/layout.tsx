import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { brand } from "@/constants/site";
import Analytics from "@/components/Analytics";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

// Live domain — used for absolute preview-image URLs, sitemap, robots and the
// structured-data schema below. Override with NEXT_PUBLIC_SITE_URL if it changes.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.thea21.in";

// Organization schema (JSON-LD) — helps Google understand the business and can
// enable richer search results / knowledge-panel info.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": siteUrl,
  name: brand.name,
  alternateName: brand.shortName,
  url: siteUrl,
  logo: `${siteUrl}/brand/logo.png`,
  image: `${siteUrl}/brand/banner.png`,
  description: brand.tagline,
  email: brand.email,
  telephone: brand.phone,
  areaServed: "Worldwide",
  address: { "@type": "PostalAddress", addressCountry: "IN" },
  sameAs: [
    brand.socials.facebook,
    brand.socials.instagram,
    brand.socials.linkedin,
    brand.socials.twitter,
  ].filter(Boolean),
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${brand.name} — Premium Web Design & Development`,
  description: brand.tagline,
  // Brand favicon / app icon — circular THEA21 logo.
  // File: public/brand/logo.png  (square, 512×512+ recommended)
  icons: {
    icon: "/brand/logo.png",
    shortcut: "/brand/logo.png",
    apple: "/brand/logo.png",
  },
  openGraph: {
    title: `${brand.name} — Premium Web Design & Development`,
    description: brand.tagline,
    type: "website",
    siteName: brand.name,
    // Social share preview — wide brand banner.
    // File: public/brand/banner.png  (1200×630 recommended)
    images: [
      {
        url: "/brand/banner.png",
        width: 1200,
        height: 630,
        alt: `${brand.name} — We Build Digital Experiences That Grow Your Business`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${brand.name} — Premium Web Design & Development`,
    description: brand.tagline,
    images: ["/brand/banner.png"],
  },
};

// Runs before paint to set the theme class — prevents a light/dark flash.
const themeScript = `
(function () {
  try {
    var stored = localStorage.getItem('theme');
    var theme = stored || 'dark'; // default to the premium dark look
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
  } catch (e) {
    document.documentElement.classList.add('dark');
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sora.variable} dark`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-bg text-fg noise">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
