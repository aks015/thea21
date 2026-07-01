import type { Metadata } from "next";
import SmoothScroll from "@/components/providers/SmoothScroll";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Work from "@/components/sections/Work";
import ScrollProgress from "@/components/ui/ScrollProgress";
import ScrollToTop from "@/components/ui/ScrollToTop";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.thea21.in";

export const metadata: Metadata = {
  title: "Case Studies & Shipped Portfolio Work | TheA21 Technologies",
  description: "Browse React, Next.js, and Node.js full-stack web platforms, optimized landing pages, and web applications built by TheA21 Technologies.",
  alternates: {
    canonical: `${siteUrl}/work`,
  },
  openGraph: {
    title: "Case Studies & Shipped Portfolio Work | TheA21 Technologies",
    description: "Browse React, Next.js, and Node.js full-stack web platforms, optimized landing pages, and web applications built by TheA21 Technologies.",
    url: `${siteUrl}/work`,
    type: "website",
  },
};

export default function WorkPage() {
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
        "name": "Work",
        "item": `${siteUrl}/work`
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
        <Work />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
