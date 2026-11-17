import Image from "next/image";
import Link from "next/link";
import { clinic } from "@/lib/clinic";

const nav = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b-4 border-sun bg-cream/95 backdrop-blur">
      <div className="container-w flex items-center justify-between gap-2 py-2">
        <Link href="/" className="flex shrink-0 items-center gap-3" aria-label="Wee Care Clinic home">
          <Image src="/brand/logo.png" alt="Wee Care Clinic logo" width={56} height={53} className="h-12 w-auto shrink-0" priority />
          <span className="hidden font-display text-xl font-semibold text-navy sm:block">Wee Care Clinic</span>
        </Link>
        <nav aria-label="Main" className="flex items-center gap-0.5 sm:gap-4">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="rounded-full px-1.5 py-2 text-sm font-semibold text-navy hover:bg-sun-soft sm:px-3 sm:text-base">
              {n.label}
            </Link>
          ))}
          <a href={`tel:${clinic.phoneTel}`} className="btn btn-call ml-1 !min-h-10 !px-3 !text-sm !shadow-none sm:ml-0 sm:!min-h-11 sm:!px-4 sm:!text-base" aria-label={`Call ${clinic.phone}`}>
            <span aria-hidden>📞</span>
            <span className="hidden sm:inline">{clinic.phone}</span>
            <span className="sm:hidden">Call</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
