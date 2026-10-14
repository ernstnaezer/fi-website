import Link from "next/link";
import ExportedImage from "next-image-export-optimizer";
import { artworks } from "@/data/artworks";

const painting = artworks.find((work) => work.image === "/assets/IMG_1249.jpeg")!;

export default function Hero() {
  return (
    <section id="hero" className="site-container hero-layout">
      <div className="py-5 lg:py-10">
        <p className="eyebrow">Huiskamerschilderijen</p>
        <h1 className="hero-title mt-5">Een schilderij<br />voor je huiskamer.</h1>
        <p className="mt-6 max-w-[29rem] text-lg leading-relaxed text-muted lg:text-[19px]">
          Een echt schilderij maakt je kamer net wat meer van jou. Kies iets moois uit, of laat me iets voor jouw muur maken.
        </p>
        <div className="mt-7 flex flex-col items-start gap-5">
          <Link className="button" href="#projects">Bekijk de schilderijen <span aria-hidden="true">→</span></Link>
          <Link className="text-link" href="#custom-work">Ik wil iets laten maken</Link>
        </div>
        <Link href="#contact" className="mt-8 inline-flex items-center gap-3 text-xs leading-relaxed">
          <ExportedImage src="/assets/Fi.jpeg" alt="" width={44} height={44} className="h-11 w-11 rounded-full object-cover" />
          <span>Met de hand geschilderd door Fi.<br /><span className="text-muted">Geen print. Geen massawerk.</span></span>
        </Link>
      </div>
      <figure className="hero-room">
        <ExportedImage src="/assets/woonkamer.jpeg" alt="Een lichte woonkamer met een witte bank" width={1600} height={2133} sizes="(max-width: 1023px) 100vw, 650px" className="hero-room-photo" priority />
        <div className="hero-painting">
          <ExportedImage src={painting.image} alt={painting.title} width={1574} height={2000} sizes="(max-width: 1023px) 35vw, 230px" priority />
        </div>
        <span className="absolute left-4 top-3 text-[8px] uppercase tracking-wider text-ink/80 sm:text-[9px]">Fotomontage · lijst ter illustratie</span>
        <figcaption className="hero-caption">
          <span><strong className="mb-1 block text-sm font-medium">{painting.title}</strong><span>{painting.size} · met de hand geschilderd</span></span>
          <span className="shrink-0 font-display text-2xl">{painting.price?.replace(",-", "")}</span>
        </figcaption>
      </figure>
    </section>
  );
}
