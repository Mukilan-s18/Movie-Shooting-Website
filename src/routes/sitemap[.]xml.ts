import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

interface SitemapEntry {
  path: string;
  lastmod?: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        let baseUrl = "https://vadapalanishootinghouse.com";
        try {
          if (request?.url) {
            const parsed = new URL(request.url);
            if (parsed.origin && !parsed.origin.includes("localhost")) {
              baseUrl = parsed.origin;
            }
          }
        } catch {
          baseUrl = "https://vadapalanishootinghouse.com";
        }

        const today = new Date().toISOString().split("T")[0];

        const entries: SitemapEntry[] = [
          { path: "/", lastmod: today, changefreq: "weekly", priority: "1.0" },
          { path: "/services", lastmod: today, changefreq: "weekly", priority: "0.9" },
          { path: "/gallery", lastmod: today, changefreq: "weekly", priority: "0.9" },
          { path: "/about", lastmod: today, changefreq: "monthly", priority: "0.8" },
          { path: "/contact", lastmod: today, changefreq: "monthly", priority: "0.8" },
          { path: "/privacy", lastmod: today, changefreq: "yearly", priority: "0.5" },
          { path: "/terms", lastmod: today, changefreq: "yearly", priority: "0.5" },
          { path: "/cookies", lastmod: today, changefreq: "yearly", priority: "0.5" },
        ];

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${baseUrl}${e.path}</loc>`,
            e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
