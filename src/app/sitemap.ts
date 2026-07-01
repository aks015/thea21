import type { MetadataRoute } from "next";
import { services, projects, liveProjects } from "@/constants/site";
import { blogPosts } from "@/constants/blog";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.thea21.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "",
    "/services",
    "/work",
    "/pricing",
    "/about",
    "/blog",
    "/contact",
    "/privacy",
    "/terms",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: (route === "" || route === "/blog" || route === "/work" ? "weekly" : "monthly") as any,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const servicePaths = services.map((s) => ({
    url: `${baseUrl}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const projectPaths = [
    ...liveProjects.map((p) => p.slug),
    ...projects.map((p) => p.slug),
  ].map((slug) => ({
    url: `${baseUrl}/work/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogPaths = blogPosts.map((p) => ({
    url: `${baseUrl}/blog/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPaths, ...servicePaths, ...projectPaths, ...blogPaths];
}
