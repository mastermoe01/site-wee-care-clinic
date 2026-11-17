import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { clinic, services } from "@/lib/clinic";
import { pageMeta } from "@/lib/meta";
import reviews from "@/lib/reviews.json";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) return {};
  return pageMeta(s.title, `${s.short} Wee Care Clinic, 38023 Medical Center Ave, Zephyrhills, FL. Call ${clinic.phone}.`, `/services/${s.slug}`);
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) notFound();
  const quotes = reviews.filter((r) => s.reviewNames?.includes(r.name));
  const others = services.filter((x) => x.slug !== s.slug);
  return (
    <div className="container-w py-14">
      <p><Link href="/services" className="font-semibold text-berry underline underline-offset-4">← All services</Link></p>
      <h1 className="mt-4 text-5xl text-navy md:text-6xl"><span aria-hidden>{s.emoji} </span>{s.title}</h1>
      <p className="mt-5 max-w-3xl text-xl">{s.intro}</p>
      <div className="mt-10 grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
        <Reveal>
          <section className="rounded-3xl bg-white p-7 shadow-md">
            <h2 className="text-3xl text-navy">Good to know</h2>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-lg">
              {s.facts.map((f) => <li key={f}>{f}</li>)}
            </ul>
          </section>
        </Reveal>
        <Reveal delay={0.08}>
          <section className="rounded-3xl bg-sun-soft p-7">
            <h2 className="text-3xl text-navy">How to book</h2>
            <p className="mt-3 text-lg">{s.booking}</p>
            <a href={`tel:${clinic.phoneTel}`} className="btn btn-call mt-5">📞 Call {clinic.phone}</a>
            <p className="mt-4 text-base text-muted">Mon to Fri 2 pm to 8 pm · Sat 9 am to noon · Closed Sunday</p>
          </section>
        </Reveal>
      </div>
      {s.slug === "physicals" && (
        <Reveal>
          <Image src="/photos/physicals-promo.jpg" alt="Chalkboard graphic from the clinic reading School and Sports Physicals, $25.00" width={625} height={469} sizes="(min-width: 768px) 40vw, 90vw" className="mt-8 w-full max-w-xl rounded-2xl shadow-md" />
        </Reveal>
      )}
      {quotes.length > 0 && (
        <section className="mt-12">
          <h2 className="text-3xl text-navy">Parents say</h2>
          <div className="mt-5 grid gap-5 md:grid-cols-2">
            {quotes.map((r) => (
              <figure key={r.name} className="rounded-3xl bg-white p-6 shadow-md">
                <p aria-label={`${r.stars} out of 5 stars`} className="text-xl text-tangerine">{"★".repeat(r.stars)}</p>
                <blockquote className="mt-2 text-lg">“{r.text}”</blockquote>
                <figcaption className="mt-3 font-semibold text-navy">{r.name}, Google review, {r.date}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}
      <section className="mt-14">
        <h2 className="text-2xl text-navy">Other services</h2>
        <ul className="mt-4 flex flex-wrap gap-3">
          {others.map((o) => (
            <li key={o.slug}><Link href={`/services/${o.slug}`} className="inline-block rounded-full bg-white px-4 py-2 font-semibold text-navy shadow-sm hover:bg-sun-soft">{o.title}</Link></li>
          ))}
        </ul>
      </section>
    </div>
  );
}
