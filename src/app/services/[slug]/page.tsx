import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import * as Icons from "lucide-react";
import SmoothScroll from "@/components/providers/SmoothScroll";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/ui/ScrollProgress";
import ScrollToTop from "@/components/ui/ScrollToTop";
import MagneticButton from "@/components/ui/MagneticButton";
import { services } from "@/constants/site";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.thea21.in";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: `${service.title} Services in Indore & India | TheA21`,
    description: service.detailedDesc,
    alternates: {
      canonical: `${siteUrl}/services/${slug}`,
    },
    openGraph: {
      title: `${service.title} Services in Indore & India | TheA21`,
      description: service.detailedDesc,
      url: `${siteUrl}/services/${slug}`,
      type: "website",
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  // Load matching icon dynamically
  const Icon = (Icons[service.icon as keyof typeof Icons] || Icons.Sparkles) as React.ComponentType<{ className?: string }>;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteUrl}/services/${slug}#service`,
    "name": service.title,
    "description": service.detailedDesc,
    "provider": {
      "@type": "ProfessionalService",
      "name": "TheA21 Technologies",
      "url": siteUrl,
      "logo": `${siteUrl}/brand/logo.png`,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Indore",
        "addressRegion": "Madhya Pradesh",
        "addressCountry": "IN"
      }
    }
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
        "name": "Services",
        "item": `${siteUrl}/services`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": service.title,
        "item": `${siteUrl}/services/${slug}`
      }
    ]
  };

  return (
    <SmoothScroll>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ScrollProgress />
      <ScrollToTop />
      <Navbar />
      
      <main className="relative bg-bg pt-32 pb-24 px-6 md:pt-40">
        {/* Background grid */}
        <div className="pointer-events-none absolute inset-0 bg-grid z-0" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgb(var(--bg))_90%)] z-0" />

        {/* Ambient glow */}
        <div className="pointer-events-none absolute left-1/4 top-1/3 h-96 w-96 rounded-full bg-accent/5 blur-[120px] z-0" />

        <div className="relative mx-auto max-w-4xl z-10">
          
          {/* Back button */}
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-fg/40 hover:text-accent transition-colors mb-8"
          >
            ← Back to all services
          </Link>

          {/* Hero */}
          <header className="flex flex-col gap-6">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-accent/20 bg-accent/5 text-accent shadow-md shadow-accent/5">
              <Icon className="h-7 w-7" />
            </span>
            <h1 className="font-display text-4xl font-black leading-tight sm:text-6xl text-gradient">
              {service.title}
            </h1>
            <p className="font-display text-lg font-bold text-accent">
              ★ Guaranteed Load Time Focus & Pixel-Perfect Finishes
            </p>
            <p className="text-base leading-relaxed text-fg/70 max-w-3xl">
              {service.detailedDesc}
            </p>
          </header>

          {/* Content section */}
          <div className="mt-14 grid gap-10 md:grid-cols-[1.8fr_1fr]">
            
            {/* Left: features and breakdown */}
            <div className="flex flex-col gap-8">
              <h2 className="font-display text-2xl font-bold text-fg border-b border-fg/10 pb-4">
                What We Deliver
              </h2>
              <ul className="flex flex-col gap-4">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3.5 text-base text-fg/80"
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                      <Icons.Check className="h-3.5 w-3.5" />
                    </span>
                    <span className="leading-relaxed font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Info Card */}
            <div className="glass-strong rounded-3xl p-7 border border-accent/20 flex flex-col gap-6 self-start">
              <h3 className="font-display text-lg font-bold text-fg">
                Get a Custom Quote
              </h3>
              <p className="text-xs text-fg/50 leading-relaxed">
                Whether you are Indore-based, located across India, or running a remote company worldwide, we offer detailed consultations and fixed scope quotes.
              </p>
              <div className="flex flex-col gap-3 font-semibold">
                <div className="flex items-center justify-between text-xs text-fg/40 uppercase tracking-wider border-b border-fg/5 pb-2">
                  <span>Starting at</span>
                  <span className="text-accent text-sm font-bold">₹15,000</span>
                </div>
                <div className="flex items-center justify-between text-xs text-fg/40 uppercase tracking-wider border-b border-fg/5 pb-2">
                  <span>Timeline</span>
                  <span className="text-fg text-sm">3 - 14 Days</span>
                </div>
                <div className="flex items-center justify-between text-xs text-fg/40 uppercase tracking-wider pb-2">
                  <span>Locations served</span>
                  <span className="text-fg text-sm">Indore, Bhopal, India, Global</span>
                </div>
              </div>
              <MagneticButton href="/contact" variant="primary" className="w-full">
                Book a discovery call
              </MagneticButton>
            </div>

          </div>

          {/* Banner bottom */}
          <div className="mt-20 glass rounded-3xl p-8 sm:p-12 text-center flex flex-col items-center gap-6 border-accent/25">
            <h2 className="font-display text-2xl font-bold sm:text-4xl text-gradient">
              Ready to launch your project?
            </h2>
            <p className="text-sm leading-relaxed text-fg/55 max-w-md">
              Book a call with Aman, Akshat, or Abhay to align on design scope, hosting platforms, and core SEO strategies.
            </p>
            <MagneticButton href="/contact" variant="primary">
              Book a call today
            </MagneticButton>
          </div>

        </div>
      </main>

      <Footer />
    </SmoothScroll>
  );
}
