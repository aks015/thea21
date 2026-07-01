import type { Metadata } from "next";
import SmoothScroll from "@/components/providers/SmoothScroll";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Contact from "@/components/sections/Contact";
import ScrollProgress from "@/components/ui/ScrollProgress";
import ScrollToTop from "@/components/ui/ScrollToTop";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.thea21.in";

export const metadata: Metadata = {
  title: "Contact TheA21 Technologies | Web Agency Indore & Bhopal",
  description: "Get in touch with Indore's top web development agency. Share details about your project budget, timeline, and needs for a free consultation within 24h.",
  alternates: {
    canonical: `${siteUrl}/contact`,
  },
  openGraph: {
    title: "Contact TheA21 Technologies | Web Agency Indore & Bhopal",
    description: "Get in touch with Indore's top web development agency. Share details about your project budget, timeline, and needs for a free consultation within 24h.",
    url: `${siteUrl}/contact`,
    type: "website",
  },
};

export default function ContactPage() {
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
        "name": "Contact",
        "item": `${siteUrl}/contact`
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
        <Contact />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
