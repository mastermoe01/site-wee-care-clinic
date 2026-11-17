import type { MetadataRoute } from "next";

// data/demos.yml label.robots = header: robots.txt does not block "/" so Google can see the noindex header and meta.
export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", allow: "/" } };
}
