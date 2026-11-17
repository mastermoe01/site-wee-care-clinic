import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { clinic, services } from "@/lib/clinic";
import { pageMeta } from "@/lib/meta";

export const metadata: Metadata = pageMeta(
  "Services",
  "Pediatric urgent care, school and sports physicals, CDL and DOT exams, drug and alcohol testing and DNA testing in Zephyrhills, FL.",
  "/services",
);

export default function Services() {
  return (
    <div className="container-w py-14">
      <h1 className="text-5xl text-navy md:text-6xl">Services</h1>
      <p className="mt-4 max-w-2xl text-xl text-muted">Call {clinic.phone} for an appointment, or walk in for urgent care.</p>
      <ul className="mt-10 grid gap-5 md:grid-cols-2">
        {services.map((s, i) => (
          <li key={s.slug}>
            <Reveal delay={(i % 2) * 0.06}>
              <Link href={`/services/${s.slug}`} className="wiggle-card block h-full rounded-3xl bg-white p-7 shadow-md">
                <p className="text-4xl" aria-hidden>{s.emoji}</p>
                <h2 className="mt-3 text-3xl text-navy">{s.title}</h2>
                <p className="mt-2 text-lg">{s.short}</p>
                <p className="mt-4 font-semibold text-berry">Learn more →</p>
              </Link>
            </Reveal>
          </li>
        ))}
      </ul>
      <Reveal>
        <section className="mt-14 grid items-center gap-8 rounded-3xl bg-sun-soft p-6 md:grid-cols-[1fr_1.2fr] md:p-10">
          <Image src="/photos/physicals-promo.jpg" alt="Chalkboard graphic from the clinic reading School and Sports Physicals, $25.00, with a school bus, eye chart and sports balls" width={625} height={469} sizes="(min-width: 768px) 40vw, 90vw" className="w-full rounded-2xl shadow-md" />
          <div>
            <h2 className="text-3xl text-navy">School and sports physicals: $25</h2>
            <p className="mt-3 text-lg">This is the price the clinic has published for school and sports physicals. Call {clinic.phone} to book one and to confirm the current price.</p>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
