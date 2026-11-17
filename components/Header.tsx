import Image from "next/image";
import Link from "next/link";
import { clinic } from "@/lib/clinic";
import MobileMenu from "./MobileMenu";

const nav = [
  { href: "/services", label: "Services" },
  { href: "/reviews", label: "Reviews" },
  { href: "/visit", label: "Visit us" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b-4 border-sun bg-cream/95 backdrop-blur">
      <div className="container-w relative flex items-center justify-between gap-2 py-2">
        <Link href="/" className="flex shrink-0 items-center gap-3" aria-label="Wee Care Clinic home">
          <Image src="/brand/logo.png" alt="Wee Care Clinic logo" width={56} height={53} className="h-12 w-auto shrink-0" priority />
          <span className="hidden font-display text-xl font-semibold text-navy lg:block">Wee Care Clinic</span>
        </Link>
        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="rounded-full px-3 py-2 text-base font-semibold text-navy hover:bg-sun-soft">
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href={`tel:${clinic.phoneTel}`} className="btn btn-call !min-h-10 !px-4 !text-base !shadow-none sm:!min-h-11" aria-label={`Call ${clinic.phone}`}>
            <span aria-hidden>📞</span>
            <span className="hidden sm:inline">{clinic.phone}</span>
            <span className="sm:hidden">Call</span>
          </a>
          <MobileMenu items={nav} />
        </div>
      </div>
    </header>
  );
}
