import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-line py-7 text-xs text-muted">
      <div className="site-container flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/">Fi Naezer · Iets eigens voor elke kamer.</Link>
        <a className="text-link text-xs" href="mailto:info@finaezer.nl">Even overleggen? Mail me gerust <span aria-hidden="true">→</span></a>
        <a className="text-link text-xs" href="https://lefeminin.nl">lefeminin.nl <span aria-hidden="true">↗</span></a>
      </div>
    </footer>
  );
}
