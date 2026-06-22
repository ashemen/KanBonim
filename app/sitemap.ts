import type { MetadataRoute } from "next";
import { resources } from "@/content/resources";
import { services } from "@/content/services";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/services", "/resources", "/about", "/contact"];
  const serviceRoutes = services.map((service) => `/services/${service.slug}`);
  const resourceRoutes = resources.map((resource) => `/resources/${resource.slug}`);

  return [...staticRoutes, ...serviceRoutes, ...resourceRoutes].map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7
  }));
}

