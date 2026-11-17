import Link from "next/link";
import { addressLine, clinic } from "@/lib/clinic";

export default function Footer() {
  return (
    <footer className="mt-24 bg-ink text-white">
      <div className="container-w grid gap-10 py-14 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl font-semibold">{clinic.name}</p>
          <p className="mt-1 text-white/80">Pediatric urgent care · Walk-ins welcome</p>
          <address className="mt-4 not-italic">
            {clinic.street}<br />{clinic.city}, {clinic.region} {clinic.zip}
          </address>
          <p className="mt-2"><a className="underline underline-offset-4" href={`tel:${clinic.phoneTel}`}>{clinic.phone}</a></p>
          <p className="mt-2"><a className="underline underline-offset-4" href={clinic.mapsUrl} aria-label={`Directions to ${addressLine}`}>Get directions</a></p>
        </div>
        <div>
          <p className="font-display text-xl font-semibold">Hours</p>
          <ul className="mt-3 space-y-1">
            {clinic.hours.map((h) => (
              <li key={h.days} className="flex justify-between gap-4"><span>{h.days}</span><span className="font-semibold tabular-nums">{h.text}</span></li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-display text-xl font-semibold">Follow along</p>
          <ul className="mt-3 space-y-1">
            <li><a className="underline underline-offset-4" href={clinic.facebook}>Facebook</a></li>
            <li><a className="underline underline-offset-4" href={clinic.instagram}>Instagram</a></li>
          </ul>
          <p className="mt-6 text-sm text-white/80">In an emergency, call 911.</p>
          <p className="mt-6 flex gap-4 text-sm">
            <Link className="underline underline-offset-4" href="/privacy">Privacy</Link>
            <Link className="underline underline-offset-4" href="/sms-terms">Text message terms</Link>
          </p>
        </div>
      </div>
      <p className="border-t border-white/15 py-4 text-center text-sm text-white/70">
        Demo site prepared by Raqm AI &amp; Automation. Not the official {clinic.name} site.
      </p>
    </footer>
  );
}
