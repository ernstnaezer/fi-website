import Link from "next/link";
import ExportedImage from "next-image-export-optimizer";

export default function Kinderkamer() {
  return (
    <section id="kinderkamer" className="site-container kids-preview" aria-labelledby="kinderkamer-heading">
      <div className="bg-salt px-5 py-7 sm:px-8">
        <p className="eyebrow text-[9px] text-muted">Al eerder gemaakt</p>
        <div className="mt-6 grid grid-cols-2 items-end gap-5 sm:gap-8">
          <figure>
            <ExportedImage src="/assets/custom-kinderkamer-3.jpeg" alt="Een koala die saxofoon speelt" width={1291} height={1600} sizes="(max-width: 1023px) 40vw, 250px" className="h-[210px] w-full object-contain object-bottom sm:h-[290px]" />
            <figcaption className="mt-4 text-center text-xs text-muted">Een koala voor Laurie</figcaption>
          </figure>
          <figure>
            <ExportedImage src="/assets/custom-kinderkamer-4.jpeg" alt="Een aapje dat naar een vlinder reikt" width={1560} height={1600} sizes="(max-width: 1023px) 40vw, 250px" className="h-[210px] w-full object-contain object-bottom sm:h-[290px]" />
            <figcaption className="mt-4 text-center text-xs text-muted">Een aapje voor Rafi</figcaption>
          </figure>
        </div>
      </div>
      <div>
        <p className="eyebrow text-sage">Kinderkamerschilderijen</p>
        <h2 id="kinderkamer-heading" className="mt-4 text-4xl md:text-[2.9rem]">Een eigen wereldje<br />aan de muur.</h2>
        <p className="mt-5 max-w-lg text-[17px] leading-relaxed text-muted">Een aapje, een koala of een lievelingsdier. Ik schilder iets dat past bij de kamer van je kind.</p>
        <div className="mt-5 max-w-lg">
          <p className="font-display text-2xl leading-snug sm:text-3xl">
            Voor €75 maak ik een schilderij,<br />
            speciaal voor jouw kind.
          </p>
          <p className="mt-3 text-sm text-muted">40 × 40 cm · vaste prijs</p>
        </div>
        <Link className="button-secondary mt-6" href="/kinderkamer">Bekijk de kinderkamerschilderijen <span aria-hidden="true">→</span></Link>
        <p className="mt-4 text-xs text-muted">Leuk als kraamcadeau: <Link className="text-link text-xs text-ink" href="/kinderkamer#cadeaubon">geef een cadeaubon <span aria-hidden="true">→</span></Link></p>
      </div>
    </section>
  );
}
