"use client";
import Link from "next/link";
import { useState } from "react";

export default function MobileMenu({ items }: { items: { href: string; label: string }[] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-nav"
        onClick={() => setOpen((o) => !o)}
        className="grid h-10 w-10 place-items-center rounded-full border-2 border-navy text-navy"
      >
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        <span aria-hidden className="text-xl leading-none">{open ? "×" : "☰"}</span>
      </button>
      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="absolute inset-x-0 top-full border-b-4 border-sun bg-cream shadow-lg">
          <ul className="container-w grid gap-1 py-3">
            {items.map((n) => (
              <li key={n.href}>
                <Link href={n.href} onClick={() => setOpen(false)} className="block rounded-2xl px-3 py-3 font-display text-xl font-semibold text-navy hover:bg-sun-soft">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
