import type { Metadata } from "next";
import SmoothScroll from "@/components/providers/SmoothScroll";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Packages from "@/components/sections/Packages";
import FAQ from "@/components/sections/FAQ";
import ScrollProgress from "@/components/ui/ScrollProgress";
import ScrollToTop from "@/components/ui/ScrollToTop";
import { faqs } from "@/constants/site";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.thea21.in";

export const metadata: Metadata = {
  title: "Simple Web Design & Dev Pricing | TheA21 Technologies",
  description: "Check Indian web design, custom landing page, and web application packages. Clear, upfront billing with revisions till you are happy.",
  alternates: {
    canonical: `${siteUrl}/pricing`,
  },
  openGraph: {
    title: "Simple Web Design & Dev Pricing | TheA21 Technologies",
    description: "Check Indian web design, custom landing page, and web application packages. Clear, upfront billing with revisions till you are happy.",
    url: `${siteUrl}/pricing`,
    type: "website",
  },
};

export default function PricingPage() {
  // Generate FAQ schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((f) => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a,
      },
    })),
  };

  const breadcrumbSchema = {
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
        "name": "Pricing",
        "item": `${siteUrl}/pricing`
      }
    ]
  };

  return (
    <SmoothScroll>
      {/* FAQ Schema for technical SEO benefits */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ScrollProgress />
      <ScrollToTop />
      <Navbar />
      <main className="relative pt-24">
        <Packages />
        <FAQ />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
