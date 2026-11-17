import { clinic, addressLine } from "@/lib/clinic";
import { siteUrl } from "@/lib/meta";

export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: clinic.name,
    legalName: clinic.legalName,
    description: clinic.description,
    url: siteUrl,
    telephone: clinic.phoneTel,
    image: `${siteUrl}/photos/storefront.jpg`,
    logo: `${siteUrl}/brand/logo.png`,
    medicalSpecialty: "Pediatric",
    address: {
      "@type": "PostalAddress",
      streetAddress: clinic.street,
      addressLocality: clinic.city,
      addressRegion: clinic.region,
      postalCode: clinic.zip,
      addressCountry: "US",
    },
    geo: { "@type": "GeoCoordinates", latitude: clinic.geo.lat, longitude: clinic.geo.lng },
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "14:00", closes: "20:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "12:00" },
    ],
    // Real Google rating captured 2026-11-17 (clients/wee-care-clinic/audit/raw/business-info-2026-11-17.json)
    aggregateRating: { "@type": "AggregateRating", ratingValue: clinic.rating, reviewCount: clinic.ratingCount, bestRating: 5 },
    sameAs: [clinic.facebook, clinic.instagram],
    hasMap: clinic.mapsUrl,
    areaServed: addressLine,
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
