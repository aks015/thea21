import type { Metadata } from "next";
import SmoothScroll from "@/components/providers/SmoothScroll";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import About from "@/components/sections/About";
import Founders from "@/components/sections/Founders";
import WhyUs from "@/components/sections/WhyUs";
import ScrollProgress from "@/components/ui/ScrollProgress";
import ScrollToTop from "@/components/ui/ScrollToTop";
import { brand } from "@/constants/site";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.thea21.in";

export const metadata: Metadata = {
  title: "About TheA21 Technologies | Premium Web Agency Indore",
  description: "Learn about the co-founders, development philosophies, and strict performance principles driving Indore's premium web design and engineering studio.",
  alternates: {
    canonical: `${siteUrl}/about`,
  },
  openGraph: {
    title: "About TheA21 Technologies | Premium Web Agency Indore",
    description: "Learn about the co-founders, development philosophies, and strict performance principles driving Indore's premium web design and engineering studio.",
    url: `${siteUrl}/about`,
    type: "website",
  },
};

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": siteUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About",
        "item": `${siteUrl}/about`
      }
    ]
  };

  return (
    <SmoothScroll>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ScrollProgress />
      <ScrollToTop />
      <Navbar />
      <main className="relative pt-24">
        <About />
        <WhyUs />
        <Founders />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
