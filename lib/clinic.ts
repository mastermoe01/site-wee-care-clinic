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

// ---- Facts for the detail pages. Each line cites its source (all fetched 2026-11-17). ----

// Google Business Profile attributes (DataForSEO Business Info): payments and accessibility.
export const payments = ["Credit cards", "Debit cards", "Mobile payments (NFC)"];
export const accessibility = ["Wheelchair-accessible entrance", "Wheelchair-accessible parking", "Wheelchair-accessible restroom"];
export const building = "Pasco Medical Arts Center"; // Google Business Profile address detail

// Google rating distribution, 81 ratings (Business Info, 2026-11-17)
export const ratingBars = [
  { stars: 5, count: 67 },
  { stars: 4, count: 2 },
  { stars: 3, count: 0 },
  { stars: 2, count: 0 },
  { stars: 1, count: 12 },
];

// Topics Google pulls from the written reviews (place_topics, with Google's mention counts)
export const topics = [
  { label: "kid-friendly", n: 12 },
  { label: "wait time", n: 12 },
  { label: "caring staff", n: 9 },
  { label: "nurse practitioner", n: 5 },
  { label: "clear explanations", n: 4 },
  { label: "front office staff", n: 4 },
  { label: "thorough care", n: 3 },
  { label: "sweet staff", n: 3 },
];

export type Service = {
  slug: string;
  title: string;
  emoji: string;
  short: string;
  intro: string;
  facts: string[];
  booking: string;
  reviewNames?: string[]; // names in reviews.json to quote on the page
};

// Only what the clinic has published (weecareclinic.com Home, Services, Contact; Google profile).
export const services: Service[] = [
  {
    slug: "urgent-care",
    title: "Pediatric urgent care",
    emoji: "🧸",
    short: "Walk-in care for ages 8 weeks to 24 years, in the after-school and evening hours.",
    intro:
      "We are a pediatric urgent care clinic in Zephyrhills, Florida. We provide after hours walk-in urgent care for patients between the ages of 8 weeks and 24 years old, from trained pediatric providers.",
    facts: [
      "Walk-in clinic: no appointment needed",
      "Patients from 8 weeks to 24 years old",
      "Monday to Friday 2 pm to 8 pm, Saturday 9 am to noon, closed Sunday",
      "Trained pediatric providers",
    ],
    booking: "Walk in during clinic hours, or call to ask a question first.",
    reviewNames: ["Brian Fee", "Mikayla Moore"],
  },
  {
    slug: "physicals",
    title: "Physicals",
    emoji: "🏅",
    short: "School, day care, camp and sports physicals, by appointment.",
    intro: "We do physicals for school, day care, camp and sports.",
    facts: [
      "School and day care physicals",
      "Camp physicals",
      "Sports physicals",
      "By appointment",
      "The clinic has advertised school and sports physicals for $25.00. Call to book and to confirm the current price.",
    ],
    booking: "Call (813) 715-2812 to schedule a physical.",
  },
  {
    slug: "dot-cdl-exams",
    title: "CDL and DOT exams",
    emoji: "🚚",
    short: "CDL and DOT exams, by appointment.",
    intro: "We perform CDL and DOT exams.",
    facts: ["CDL and DOT exams", "By appointment"],
    booking: "Call (813) 715-2812 to schedule a DOT exam.",
  },
  {
    slug: "drug-alcohol-testing",
    title: "Drug and alcohol testing",
    emoji: "🧪",
    short: "DOT federal drug and alcohol testing and urine drug screens.",
    intro: "We offer DOT federal drug and alcohol testing and urine drug testing.",
    facts: ["DOT federal drug and alcohol testing", "Urine drug screens"],
    booking: "Call (813) 715-2812 to ask whether you need an appointment.",
  },
  {
    slug: "dna-testing",
    title: "DNA testing",
    emoji: "🧬",
    short: "DNA testing, by appointment.",
    intro: "We offer DNA testing.",
    facts: ["DNA testing", "By appointment"],
    booking: "Call (813) 715-2812 to schedule DNA testing.",
  },
];

// FAQ answers use only the facts above; anything not published says "call and ask".
export const faqs = [
  { q: "Do I need an appointment for urgent care?", a: "No. We are a walk-in clinic. Walk in during our hours: Monday to Friday 2 pm to 8 pm and Saturday 9 am to noon." },
  { q: "What ages do you see?", a: "We provide urgent care for patients between the ages of 8 weeks and 24 years old." },
  { q: "Which services are by appointment?", a: "DOT exams, DNA testing and physicals are by appointment. Call (813) 715-2812 to schedule." },
  { q: "Are you open on Sunday?", a: "No. We are closed on Sundays. Our hours are Monday to Friday 2 pm to 8 pm and Saturday 9 am to noon." },
  { q: "Where are you?", a: "38023 Medical Center Ave, Zephyrhills, FL 33540, in the Pasco Medical Arts Center. Look for the yellow Pediatric Urgent Care banner." },
  { q: "How can I pay?", a: "We accept credit cards, debit cards and mobile payments. Call (813) 715-2812 with questions about insurance or pricing." },
  { q: "Is the clinic wheelchair accessible?", a: "Yes. The entrance, the parking and the restroom are wheelchair accessible." },
  { q: "What if it is an emergency?", a: "Call 911." },
];
