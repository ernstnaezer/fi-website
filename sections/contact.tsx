import ExportedImage from "next-image-export-optimizer";

export default function Contact() {
  return (
    <section id="contact" className="border-y border-line bg-salt/45">
      <div className="site-container grid items-center gap-8 py-10 md:grid-cols-[240px_1fr] md:gap-12 lg:grid-cols-[280px_1fr_220px]">
        <ExportedImage src="/assets/Fi.jpeg" alt="Fi Naezer aan het schilderen" width={2000} height={1932} sizes="(max-width: 767px) 100vw, 280px" className="aspect-square w-full max-w-sm object-cover" />
        <div>
          <p className="eyebrow">De maker achter je schilderij</p>
          <h2 className="mt-4 text-3xl md:text-4xl">Hoi, ik ben Fi.<br />Ik schilder graag iets voor jouw huis.</h2>
          <p className="mt-5 max-w-xl leading-relaxed text-muted">Ik hou van de natuur, van schilderen en van tuinieren. Veel van de bloemen op mijn schilderijen groeien in mijn eigen tuin. Die kleur neem ik graag mee naar binnen. Voor een huis waar het fijn thuiskomen is.</p>
        </div>
        <div className="lg:border-l lg:border-line lg:pl-7">
          <a className="text-link" href="#custom-work">Vertel me je idee <span aria-hidden="true">→</span></a>
          <p className="mt-4 text-sm leading-relaxed text-muted">Je hoeft nog geen compleet plan te hebben. We kijken samen wat past.</p>
        </div>
      </div>
    </section>
  );
}
