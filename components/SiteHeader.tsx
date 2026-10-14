"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/#projects", label: "Huiskamer" },
  { href: "/kinderkamer", label: "Kinderkamer" },
  { href: "/#custom-work", label: "Iets laten maken" },
  { href: "/#contact", label: "Over Fi" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-30 border-b border-line bg-pearl">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-3 focus:z-50 focus:bg-pearl focus:p-3">
        Naar de inhoud
      </a>
      <div className="site-container flex min-h-[92px] flex-wrap items-center justify-between gap-4 py-5 md:min-h-[102px]">
        <Link href="/" onClick={() => setMenuOpen(false)} className="shrink-0" aria-label="Fi Naezer, naar de homepage">
          <span className="brand">Fi Naezer</span>
          <span className="mt-2 block text-[9px] font-medium tracking-[0.19em]">SCHILDERIJEN VOOR THUIS</span>
        </Link>
        <button
          type="button"
          className="min-h-11 rounded-sm border border-line px-4 text-sm md:hidden"
          aria-expanded={menuOpen}
          aria-controls="site-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "Sluiten" : "Menu"}
        </button>
        <nav id="site-navigation" aria-label="Hoofdnavigatie" className={`${menuOpen ? "flex" : "hidden"} w-full flex-col gap-1 border-t border-line pt-4 text-sm md:flex md:w-auto md:flex-row md:items-center md:gap-5 md:border-0 md:pt-0 lg:gap-8`}>
          {links.map(({ href, label }) => {
            const active = href === "/kinderkamer" ? pathname.startsWith("/kinderkamer") : href === "/#projects" && pathname === "/";
            return (
              <Link key={href} href={href} onClick={() => setMenuOpen(false)} aria-current={active ? "page" : undefined} className={`py-3 hover:text-clay ${active ? "underline decoration-clay underline-offset-8" : ""}`}>
                {label}
              </Link>
            );
          })}
          <a href="mailto:info@finaezer.nl" className="mt-2 rounded-sm border border-ink/35 px-5 py-3 hover:bg-salt md:mt-0">Neem contact op <span aria-hidden="true" className="ml-2">↗</span></a>
        </nav>
      </div>
    </header>
  );
}
