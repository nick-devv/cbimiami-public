import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const pages = ["", "/cursos", "/sobre", "/contato", "/profissionais", "/artigos"];

  return pages.map((path) => ({
    url: `${siteUrl}${path}`,
    changefreq: "weekly",
    priority: path === "" ? 1 : 0.8,
  }));
}

