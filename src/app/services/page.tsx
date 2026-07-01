import type { Metadata } from "next";
import SmoothScroll from "@/components/providers/SmoothScroll";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Services from "@/components/sections/Services";
import ScrollProgress from "@/components/ui/ScrollProgress";
import ScrollToTop from "@/components/ui/ScrollToTop";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.thea21.in";

export const metadata: Metadata = {
  title: "Professional Web Design & Web Development Services | TheA21",
  description: "Browse premium design and engineering services: SEO-optimized business websites, custom React/Next.js applications, and conversion-focused landing pages.",
  alternates: {
    canonical: `${siteUrl}/services`,
  },
  openGraph: {
    title: "Professional Web Design & Web Development Services | TheA21",
    description: "Browse premium design and engineering services: SEO-optimized business websites, custom React/Next.js applications, and conversion-focused landing pages.",
    url: `${siteUrl}/services`,
    type: "website",
  },
};

export default function ServicesPage() {
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
        "name": "Services",
        "item": `${siteUrl}/services`
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
        <Services />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
