import Image from "next/image";
import Link from "next/link";
import { existsSync } from "node:fs";
import path from "node:path";
import HeroVisual from "@/components/HeroVisual";
import OpenNow from "@/components/OpenNow";
import Reveal from "@/components/Reveal";
import Faq from "@/components/Faq";
import RatingBars from "@/components/RatingBars";
import WeekBar from "@/components/WeekBar";
import { addressLine, clinic, services } from "@/lib/clinic";
import reviews from "@/lib/reviews.json";

const hasVideo = (slug: string, file: string) =>
  existsSync(path.join(process.cwd(), "public", "videos", slug, file));

export default function Home() {
  const walkthrough = hasVideo("wee-care-clinic", "walkthrough.mp4");
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-sun-soft to-cream">
        <div className="container-w grid items-center gap-8 py-12 md:grid-cols-[1.1fr_0.9fr] md:py-20">
          <div className="relative z-10">
            <OpenNow />
            <h1 className="mt-5 text-[clamp(2.75rem,7vw,5.5rem)] font-semibold text-navy">
              Pediatric urgent care, <span className="text-berry">open after school.</span>
            </h1>
            <p className="mt-5 max-w-xl text-xl text-muted">
              Walk in, no appointment needed, for ages 8 weeks to 24 years. Trained pediatric providers and short waits, in Zephyrhills.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href={`tel:${clinic.phoneTel}`} className="btn btn-call">📞 Call {clinic.phone}</a>
              <a href={clinic.mapsUrl} className="btn btn-ghost">Get directions</a>
            </div>
            <p className="mt-6 text-base text-muted">In an emergency, call 911.</p>
          </div>
          <div className="relative mx-auto aspect-square w-full max-w-md">
            <div className="absolute inset-0 -z-0 opacity-90"><HeroVisual /></div>
            <div className="relative z-10 mx-auto grid aspect-square w-3/5 place-items-center rounded-full bg-white shadow-xl">
              <Image src="/brand/logo.png" alt="Wee Care Clinic logo: a nurse, a baby and a boy joined by a red stethoscope" width={800} height={755} priority className="h-full w-full rounded-full object-contain" />
            </div>
          </div>
        </div>
      </section>

      <section className="container-w mt-8 grid gap-4 md:grid-cols-3" aria-label="Visit details">
        {[
          { h: "When", p: "Mon to Fri 2 to 8 pm · Sat 9 am to noon · Closed Sunday" },
          { h: "Where", p: addressLine },
          { h: "Who", p: "Ages 8 weeks to 24 years, walk-ins welcome" },
        ].map((c, i) => (
          <Reveal key={c.h} delay={i * 0.08}>
            <div className="wiggle-card h-full rounded-3xl border-4 border-sun bg-white p-6 shadow-md">
              <h2 className="text-2xl text-navy">{c.h}</h2>
              <p className="mt-2 text-lg">{c.p}</p>
            </div>
          </Reveal>
        ))}
      </section>

      <section className="container-w mt-24">
        <Reveal><h2 className="text-4xl text-navy md:text-5xl">What we take care of</h2></Reveal>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.06}>
              <Link href={`/services/${s.slug}`} className="wiggle-card block h-full rounded-3xl bg-white p-6 shadow-md">
                <p className="text-4xl" aria-hidden>{s.emoji}</p>
                <h3 className="mt-3 text-2xl text-navy">{s.title}</h3>
                <p className="mt-2 text-muted">{s.short}</p>
              </Link>
            </Reveal>
          ))}
        </div>
        <p className="mt-6"><Link href="/services" className="font-semibold text-berry underline underline-offset-4">See all services</Link></p>
      </section>

      <section className="container-w mt-24 grid items-start gap-8 md:grid-cols-[0.8fr_1.2fr]" aria-labelledby="week">
        <Reveal>
          <h2 id="week" className="text-4xl text-navy md:text-5xl">Open when school lets out</h2>
          <p className="mt-4 text-lg text-muted">Weekdays from 2 pm to 8 pm and Saturday mornings, with no appointment needed for urgent care.</p>
          <p className="mt-4"><Link href="/visit" className="font-semibold text-berry underline underline-offset-4">Directions, parking and payment</Link></p>
        </Reveal>
        <Reveal delay={0.08}><WeekBar /></Reveal>
      </section>

      <section className="mt-24 bg-heart-soft py-16">
        <div className="container-w">
          <Reveal>
            <h2 className="text-4xl text-navy md:text-5xl">Parents say it best</h2>
            <p className="mt-3 text-lg text-muted">
              {clinic.rating} stars from {clinic.ratingCount} ratings on Google. A few reviews, exactly as written:
            </p>
          </Reveal>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {reviews.slice(0, 6).map((r, i) => (
              <Reveal key={r.name + r.date} delay={(i % 3) * 0.06}>
                <figure className="h-full rounded-3xl bg-white p-6 shadow-md">
                  <p aria-label={`${r.stars} out of 5 stars`} className="text-xl text-tangerine">{"★".repeat(r.stars)}</p>
                  <blockquote className="mt-2 text-lg">“{r.text}”</blockquote>
                  <figcaption className="mt-3 text-base font-semibold text-navy">{r.name}, Google review, {r.date}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-w mt-24 grid items-start gap-8 md:grid-cols-[0.8fr_1.2fr]" aria-labelledby="faq">
        <Reveal><RatingBars /><p className="mt-4"><Link href="/reviews" className="font-semibold text-berry underline underline-offset-4">Read more reviews</Link></p></Reveal>
        <Reveal delay={0.08}>
          <h2 id="faq" className="text-4xl text-navy md:text-5xl">Good to know</h2>
          <div className="mt-5"><Faq limit={5} /></div>
          <p className="mt-4"><Link href="/visit" className="font-semibold text-berry underline underline-offset-4">More questions</Link></p>
        </Reveal>
      </section>

      {walkthrough && (
        <section className="container-w mt-24">
          <h2 className="text-4xl text-navy md:text-5xl">Take a look inside</h2>
          <video className="mt-6 w-full rounded-3xl" controls playsInline preload="metadata" poster="/photos/storefront.jpg">
            <source src="/videos/wee-care-clinic/walkthrough.mp4" type="video/mp4" />
          </video>
        </section>
      )}

      <section className="container-w mt-24 grid items-center gap-10 md:grid-cols-2">
        <Reveal>
          <Image src="/photos/storefront.jpg" alt="Wee Care Clinic storefront at 38023 Medical Center Ave, Zephyrhills, with its yellow Pediatric Urgent Care banner and the phone number 813-715-2812" width={1000} height={1333} sizes="(min-width: 768px) 40vw, 90vw" className="mx-auto max-h-[34rem] w-auto rounded-3xl border-4 border-sun object-cover shadow-lg" />
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="text-4xl text-navy md:text-5xl">Find the yellow banner</h2>
          <p className="mt-4 text-lg">We are at {addressLine}, in the Pasco Medical Arts Center.</p>
          <p className="mt-3 text-lg text-muted">Not sure if we are open? Call and ask: {clinic.phone}.</p>
          <div className="mt-6 flex flex-wrap gap-4">
            <a href={`tel:${clinic.phoneTel}`} className="btn btn-call">📞 Call {clinic.phone}</a>
            <a href={clinic.mapsUrl} className="btn btn-ghost">Get directions</a>
          </div>
        </Reveal>
      </section>
    </>
  );
}
