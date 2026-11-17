// Every fact below comes from the clinic's own site (weecareclinic.com, fetched 2026-11-17) or its
// Google Business Profile (DataForSEO Business Info, 2026-11-17). See clients/wee-care-clinic/intake.md.
export const clinic = {
  name: "Wee Care Clinic",
  legalName: "Wee Care Clinic Inc",
  googleName: "Wee Care Clinic Pediatric Urgent Care",
  phone: "(813) 715-2812",
  phoneTel: "+18137152812",
  email: "gracy@weecareclinic.com",
  street: "38023 Medical Center Ave",
  city: "Zephyrhills",
  region: "FL",
  zip: "33540",
  geo: { lat: 28.2626387, lng: -82.1873742 },
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Wee+Care+Clinic+38023+Medical+Center+Ave+Zephyrhills+FL+33540",
  facebook: "https://www.facebook.com/1480016118955444",
  instagram: "https://www.instagram.com/susiearnp",
  rating: 4.4,
  ratingCount: 81,
  description:
    "We are a Pediatric Urgent Care Clinic in Zephyrhills, Florida. We provide after hours walk-in urgent care for patients between the ages of 8 weeks and 24 years old. Short wait times and quality medical care from trained pediatric providers. We look forward to serving you and your family!",
  // Mon-Fri 2pm-8pm, Sat 9am-12pm, closed Sunday (Google profile and the clinic's Contact page agree).
  hours: [
    { days: "Monday to Friday", text: "2 pm to 8 pm" },
    { days: "Saturday", text: "9 am to noon" },
    { days: "Sunday", text: "Closed" },
  ],
  team: [
    { name: "Susan Hinds", title: "Pediatric Nurse Practitioner" },
    { name: "Cynthia Fagan", title: "Pediatric Nurse Practitioner" },
    { name: "Susie Costello", title: "Family Nurse Practitioner" },
  ],
};

export const addressLine = `${clinic.street}, ${clinic.city}, ${clinic.region} ${clinic.zip}`;

// [open hour, close hour] in 24h, America/New_York, index = JS getDay() (0 = Sunday)
export const hoursByDay: ([number, number] | null)[] = [
  null,
  [14, 20],
  [14, 20],
  [14, 20],
  [14, 20],
  [14, 20],
  [9, 12],
];
