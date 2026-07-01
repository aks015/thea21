import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, User, Share2 } from "lucide-react";
import SmoothScroll from "@/components/providers/SmoothScroll";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/ui/ScrollProgress";
import ScrollToTop from "@/components/ui/ScrollToTop";
import MagneticButton from "@/components/ui/MagneticButton";
import { blogPosts } from "@/constants/blog";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.thea21.in";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: `${post.title} | TheA21 Blog`,
    description: post.excerpt,
    alternates: {
      canonical: `${siteUrl}/blog/${slug}`,
    },
    openGraph: {
      title: `${post.title} | TheA21 Blog`,
      description: post.excerpt,
      url: `${siteUrl}/blog/${slug}`,
      type: "article",
      publishedTime: "2026-07-01T00:00:00.000Z",
      authors: [post.author],
      tags: post.tags,
    },
  };
}

export default async function BlogPostDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": `${siteUrl}/blog/${slug}#article`,
    "headline": post.title,
    "description": post.excerpt,
    "inLanguage": "en-US",
    "mainEntityOfPage": `${siteUrl}/blog/${slug}`,
    "datePublished": "2026-07-01T00:00:00+05:30",
    "dateModified": "2026-07-01T00:00:00+05:30",
    "author": {
      "@type": "Person",
      "name": post.author,
      "url": `${siteUrl}/about`
    },
    "publisher": {
      "@type": "Organization",
      "name": "TheA21 Technologies",
      "logo": {
        "@type": "ImageObject",
        "url": `${siteUrl}/brand/logo.png`
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
        "name": "Blog",
        "item": `${siteUrl}/blog`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": `${siteUrl}/blog/${slug}`
      }
    ]
  };

  return (
    <SmoothScroll>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
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

        <div className="relative mx-auto max-w-3xl z-10">
          
          {/* Back button */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-fg/40 hover:text-accent transition-colors mb-8"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back to all insights
          </Link>

          {/* Heading */}
          <header className="flex flex-col gap-5 border-b border-fg/10 pb-8">
            <div className="flex flex-wrap gap-1.5">
              {post.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-accent/15 border border-accent/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-accent"
                >
                  {t}
                </span>
              ))}
            </div>
            
            <h1 className="font-display text-3xl font-black leading-tight sm:text-5xl text-gradient">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-fg/50 font-medium">
              <span className="flex items-center gap-1.5">
                <User className="h-4 w-4 text-accent" /> By {post.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" /> {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" /> {post.readTime}
              </span>
            </div>
          </header>

          {/* Article Body */}
          <article
            className="mt-10 text-fg/75 text-base sm:text-lg leading-relaxed
              [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-black [&_h2]:text-fg [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:tracking-tight [&_h2]:border-b [&_h2]:border-fg/15 [&_h2]:pb-2
              [&_h3]:font-display [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-fg [&_h3]:mt-8 [&_h3]:mb-3
              [&_p]:mb-5 [&_p]:leading-relaxed
              [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-6
              [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-6
              [&_li]:mb-2.5 [&_li]:pl-1
              [&_strong]:text-accent [&_strong]:font-semibold
              [&_table]:w-full [&_table]:border-collapse [&_table]:my-8 [&_table]:text-left [&_table]:text-sm
              [&_th]:border-b [&_th]:border-fg/10 [&_th]:pb-3 [&_th]:font-semibold [&_th]:text-fg/50 [&_th]:uppercase [&_th]:tracking-wider [&_th]:text-xs
              [&_td]:border-b [&_td]:border-fg/5 [&_td]:py-4 [&_td]:text-fg/75 [&_td]:font-medium
              [&_a]:text-accent [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-accent-soft"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Share & CTA Banner */}
          <div className="mt-16 pt-8 border-t border-fg/10 flex flex-col gap-8">
            
            {/* CTA Box */}
            <div className="glass rounded-3xl p-8 sm:p-10 text-center flex flex-col items-center gap-5 border-accent/20 shadow-lg">
              <h3 className="font-display text-xl font-bold sm:text-2xl text-gradient">
                Need a high-performing digital presence?
              </h3>
              <p className="text-sm text-fg/55 max-w-sm">
                Get custom Next.js websites and app development. Discuss your requirements with Akshat, Abhay, or Aman.
              </p>
              <MagneticButton href="/contact" variant="primary">
                Book a Free Discovery Call
              </MagneticButton>
            </div>

          </div>

        </div>
      </main>

      <Footer />
    </SmoothScroll>
  );
}
