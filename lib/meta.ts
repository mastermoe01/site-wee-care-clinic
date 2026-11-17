import type { Metadata } from "next";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://site-wee-care-clinic.vercel.app");

const ogImage = {
  url: "/photos/storefront.jpg",
  width: 1000,
  height: 1333,
  alt: "Wee Care Clinic storefront at 38023 Medical Center Ave, Zephyrhills, with its Pediatric Urgent Care banner",
};

export function pageMeta(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path, siteName: "Wee Care Clinic", type: "website", images: [ogImage] },
    twitter: { card: "summary_large_image", title, description, images: [ogImage.url] },
  };
}
