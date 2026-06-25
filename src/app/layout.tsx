import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { brand } from "@/constants/site";

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

export const metadata: Metadata = {
  // Live domain — used for absolute preview-image URLs when the link is shared.
  // Override with NEXT_PUBLIC_SITE_URL if the domain ever changes.
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://thea21.in"
  ),
  title: `${brand.name} — Premium Web Design & Development`,
  description: brand.tagline,
  openGraph: {
    title: `${brand.name} — Premium Web Design & Development`,
    description: brand.tagline,
    type: "website",
    siteName: brand.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${brand.name} — Premium Web Design & Development`,
    description: brand.tagline,
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
      </head>
      <body className="font-sans antialiased bg-bg text-fg noise">
        {children}
      </body>
    </html>
  );
}
