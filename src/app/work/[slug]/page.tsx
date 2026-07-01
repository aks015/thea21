import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CheckCircle, Code, Award, Server } from "lucide-react";
import SmoothScroll from "@/components/providers/SmoothScroll";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProjectMockup from "@/components/sections/ProjectMockup";
import ScrollProgress from "@/components/ui/ScrollProgress";
import ScrollToTop from "@/components/ui/ScrollToTop";
import MagneticButton from "@/components/ui/MagneticButton";
import { projects, liveProjects } from "@/constants/site";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.thea21.in";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const combined = [
    ...liveProjects.map((p) => ({ slug: p.slug })),
    ...projects.map((p) => ({ slug: p.slug })),
  ];
  return combined;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const combined = [
    ...liveProjects.map((p) => ({ ...p, isLive: true })),
    ...projects.map((p) => ({ ...p, isLive: false })),
  ];
  const project = combined.find((p) => p.slug === slug);
  if (!project) return {};

  return {
    title: `${project.title} Case Study | Web Development Indore`,
    description: project.blurb,
    alternates: {
      canonical: `${siteUrl}/work/${slug}`,
    },
    openGraph: {
      title: `${project.title} Case Study | Web Development Indore`,
      description: project.blurb,
      url: `${siteUrl}/work/${slug}`,
      type: "website",
    },
  };
}

export default async function CaseStudyDetailPage({ params }: Props) {
  const { slug } = await params;
  const combined = [
    ...liveProjects.map((p) => ({ ...p, isLive: true })),
    ...projects.map((p) => ({ ...p, isLive: false })),
  ];
  const project = combined.find((p) => p.slug === slug);
  if (!project) notFound();

  const coverImg = "cover" in project && project.cover ? project.cover : null;
  const liveUrl = "url" in project ? project.url : null;
  const challenge = "challenge" in project ? project.challenge : "Developing a scalable design system and front-end interface built to load instantly.";
  const solution = "solution" in project ? project.solution : "A custom-engineered layout with clean semantic HTML structures, zero template bloat, and priority image optimizations.";

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
        "name": "Work",
        "item": `${siteUrl}/work`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": project.title,
        "item": `${siteUrl}/work/${slug}`
      }
    ]
  };

  return (
    <SmoothScroll>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ScrollProgress />
      <ScrollToTop />
      <Navbar />
      
      <main className="relative bg-bg pt-32 pb-24 px-6 md:pt-40">
        <div className="pointer-events-none absolute inset-0 bg-grid z-0" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgb(var(--bg))_90%)] z-0" />

        <div className="relative mx-auto max-w-4xl z-10">
          
          {/* Back to Work */}
          <Link
            href="/work"
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-fg/40 hover:text-accent transition-colors mb-8"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back to all work
          </Link>

          {/* Header */}
          <header className="flex flex-col gap-4">
            <span className="text-xs font-bold uppercase tracking-wider text-accent">
              {project.isLive ? "Live Production Case Study" : "Bespoke Design Concept"}
            </span>
            <h1 className="font-display text-4xl font-black leading-tight sm:text-6xl text-gradient">
              {project.title}
            </h1>
            <p className="text-lg font-semibold text-accent leading-relaxed">
              ★ Impact: {project.oneLiner}
            </p>
            <p className="text-sm font-semibold uppercase tracking-wider text-fg/55 mt-2">
              Category: {project.category}
            </p>
          </header>

          {/* Browser Frame Mockup */}
          <div className="mt-12 overflow-hidden rounded-3xl border border-fg/10 bg-surface shadow-2xl">
            <div className="flex items-center gap-1.5 border-b border-fg/5 bg-fg/[0.02] px-4 py-3">
              <span className="h-2 w-2 rounded-full bg-fg/15" />
              <span className="h-2 w-2 rounded-full bg-fg/15" />
              <span className="h-2 w-2 rounded-full bg-fg/15" />
              <span className="ml-3 flex h-5 flex-1 items-center truncate rounded-full bg-fg/[0.03] px-3 text-[10px] text-fg/35 font-mono">
                {project.isLive && liveUrl
                  ? liveUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")
                  : `thea21.in/work/${project.slug}`}
              </span>
            </div>
            
            <div className="relative aspect-[16/10] bg-fg/[0.02]">
              {project.isLive && coverImg ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={coverImg}
                  alt={`${project.title} study case image cover`}
                  className="absolute inset-0 h-full w-full object-cover object-top"
                />
              ) : (
                <div className="absolute inset-0">
                  <ProjectMockup variant={(project as any).variant || "restaurant"} />
                </div>
              )}
            </div>
          </div>

          {/* Project Details Section */}
          <div className="mt-16 grid gap-12 md:grid-cols-[2fr_1fr]">
            
            {/* Left Column: Challenge & Solution */}
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-4">
                <h2 className="flex items-center gap-2 font-display text-2xl font-bold text-fg border-b border-fg/10 pb-3">
                  <Award className="h-5 w-5 text-accent" /> The Challenge
                </h2>
                <p className="text-base leading-relaxed text-fg/70">
                  {challenge}
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <h2 className="flex items-center gap-2 font-display text-2xl font-bold text-fg border-b border-fg/10 pb-3">
                  <CheckCircle className="h-5 w-5 text-accent" /> Our Solution
                </h2>
                <p className="text-base leading-relaxed text-fg/70">
                  {solution}
                </p>
              </div>
            </div>

            {/* Right Column: Meta & Stack */}
            <div className="flex flex-col gap-8 self-start">
              
              {/* Stack Card */}
              <div className="glass-strong rounded-3xl p-6 border border-accent/20 flex flex-col gap-5">
                <h3 className="flex items-center gap-2 font-display text-base font-bold text-fg">
                  <Code className="h-4.5 w-4.5 text-accent" /> Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-fg/10 bg-fg/5 px-3 py-1.5 text-xs text-fg/70 font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col gap-3">
                {project.isLive && liveUrl && (
                  <a
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent/25 hover:shadow-accent/45 transition-all hover:scale-[1.02]"
                  >
                    Visit Live Site <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full border border-fg/15 bg-fg/5 px-6 py-3.5 text-sm font-semibold text-fg hover:border-accent hover:text-accent transition-all hover:scale-[1.02]"
                >
                  Request a Project Like This
                </Link>
              </div>

            </div>

          </div>

          {/* Related Case Studies Hook */}
          <div className="mt-24 border-t border-fg/10 pt-14 text-center flex flex-col items-center gap-5">
            <Server className="h-8 w-8 text-accent animate-pulse" />
            <h2 className="font-display text-2xl font-bold sm:text-3xl text-gradient">
              Need custom software for your startup?
            </h2>
            <p className="text-sm leading-relaxed text-fg/55 max-w-md">
              We design and construct high-performance digital products for founders in India and across the globe. Let&apos;s build together.
            </p>
            <MagneticButton href="/contact" variant="primary">
              Let&apos;s Talk Strategy
            </MagneticButton>
          </div>

        </div>
      </main>

      <Footer />
    </SmoothScroll>
  );
}
