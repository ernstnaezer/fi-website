import ImageGrid from "@/components/ImageGrid";
import { artworks } from "@/data/artworks";

const featuredImages = ["/assets/IMG_4960.jpeg", "/assets/IMG_4380.jpeg", "/assets/IMG_2488.jpeg"];
const featured = artworks.filter((work) => featuredImages.includes(work.image));
const remaining = artworks.filter((work) => !featuredImages.includes(work.image));

export default function Overview() {
  return (
    <section id="projects" className="site-container border-t border-line py-10 md:py-12" aria-labelledby="paintings-heading">
      <div className="mb-7">
        <h2 id="paintings-heading" className="section-heading">Welke past bij jou thuis?</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted">Deze schilderijen zijn al af. Klik op een schilderij voor meer informatie of om het te reserveren.</p>
      </div>
      <ImageGrid projects={featured} />
      <details className="group mt-7">
        <summary className="w-fit cursor-pointer list-none text-sm underline decoration-ink/40 underline-offset-[5px] hover:decoration-ink [&::-webkit-details-marker]:hidden">
          <span className="group-open:hidden">Bekijk alle schilderijen en tekeningen <span aria-hidden="true">↓</span></span>
          <span className="hidden group-open:inline">Minder schilderijen tonen <span aria-hidden="true">↑</span></span>
        </summary>
        <div className="mt-7"><ImageGrid projects={remaining} /></div>
      </details>
    </section>
  );
}
