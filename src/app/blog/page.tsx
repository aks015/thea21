import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Calendar, Clock, User, ArrowRight } from "lucide-react";
import SmoothScroll from "@/components/providers/SmoothScroll";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollProgress from "@/components/ui/ScrollProgress";
import ScrollToTop from "@/components/ui/ScrollToTop";
import { blogPosts } from "@/constants/blog";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.thea21.in";

export const metadata: Metadata = {
  title: "Official Tech & Design Blog | TheA21 Technologies",
  description: "Read long-form insights on web engineering pricing, website vs landing page analyses, student note database architectures, and local Indore SEO guides.",
  alternates: {
    canonical: `${siteUrl}/blog`,
  },
  openGraph: {
    title: "Official Tech & Design Blog | TheA21 Technologies",
    description: "Read long-form insights on web engineering pricing, website vs landing page analyses, student note database architectures, and local Indore SEO guides.",
    url: `${siteUrl}/blog`,
    type: "website",
  },
};

export default function BlogListingPage() {
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
        "name": "Blog",
        "item": `${siteUrl}/blog`
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

      <main className="relative bg-bg pt-32 pb-24 px-6 md:pt-40">
        <div className="pointer-events-none absolute inset-0 bg-grid z-0" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgb(var(--bg))_90%)] z-0" />

        <div className="relative mx-auto max-w-6xl z-10">
          <SectionHeading
            eyebrow="TheA21 Insights"
            title={
              <>
                Our articles, <span className="text-gradient-accent">tech & pricing guides</span>
              </>
            }
            subtitle="Deep dives into SEO-optimized landing pages, e-commerce development frameworks, startup MVPs, and building web presence that converts."
          />

          {/* Grid listing */}
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="group flex flex-col rounded-3xl p-6 glass border-fg/10 hover:border-accent/40 hover:shadow-[0_20px_45px_rgba(255,77,0,0.06)] transition-all duration-300"
              >
                {/* Visual Accent Box */}
                <div className="relative aspect-[16/9] w-full rounded-2xl bg-gradient-to-br from-accent/20 to-accent-deep/5 overflow-hidden flex items-center justify-center p-4 border border-fg/5">
                  <BookOpen className="h-10 w-10 text-accent/60 group-hover:scale-110 transition-transform duration-300" />
                  
                  {/* Tag overlay */}
                  <div className="absolute left-3 top-3 flex gap-1">
                    {post.tags.slice(0, 2).map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-bg/80 border border-fg/5 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-accent backdrop-blur-sm shadow-sm"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col pt-5">
                  {/* Meta items */}
                  <div className="flex flex-wrap items-center gap-3.5 text-xs text-fg/40 mb-3.5 font-medium">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" /> {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" /> {post.readTime}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-fg group-hover:text-accent transition-colors line-clamp-2 leading-snug">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-fg/50 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="mt-auto pt-6 flex items-center justify-between border-t border-fg/5">
                    <div className="flex items-center gap-2 text-xs font-semibold text-fg/60">
                      <User className="h-3.5 w-3.5 text-accent" />
                      <span>{post.author}</span>
                    </div>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-accent group-hover:translate-x-1 transition-transform"
                    >
                      Read Post <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>

              </article>
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </SmoothScroll>
  );
}
