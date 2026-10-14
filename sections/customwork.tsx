"use client";
import React from "react";
import PairedGalleryCard from "@/components/PairedGalleryCard";
import { ArtWork } from "@/types";
import { useEmailService } from "@/hooks/useEmailService";

interface PairedArtWork {
  main: ArtWork;
  impression: ArtWork;
}

const CustomWork: React.FC = () => {
  const { formRef, status, setStatus, sendEmail } = useEmailService();

  const handleFormSubmit = (e: React.FormEvent) => {
    sendEmail(e, () => {
      formRef.current?.reset();
    });
  };

  const examples: PairedArtWork[] = [
    {
      main: {
        title: "Kersenbloesem",
        technique: "olie op doek",
        size: "70 x 150 cm",
        year: 2026,
        image: "/assets/custom-work-3.jpeg",
        copy: "Bloeiende kersentakken in zachte kleuren. Dit grote schilderij is speciaal op aanvraag gemaakt."
      },
      impression: {
        title: "Kersenbloesem in het atelier",
        technique: "Sfeerimpressie",
        image: "/assets/custom-work-3-workshop.jpeg",
        copy: "Het schilderij met kersenbloesem, hier te zien in het atelier."
      }
    },
    {
      main: {
        title: "Zonnebloem met vlinders",
        technique: "olie op doek",
        size: "50 x 70 cm",
        year: 2024,
        image: "/assets/custom-work-2.jpeg",
        copy: "Gele zonnebloemen en vlinders, met olieverf op doek geschilderd."
      },
      impression: {
        title: "Zonnebloem met vlinders aan de muur",
        technique: "Sfeerimpressie",
        image: "/assets/custom-work-2-wall.jpeg",
        copy: "Zo staat het schilderij met zonnebloemen en vlinders aan de muur."
      }
    },
    {
      main: {
        title: "Ijsvogel",
        technique: "acryl op doek",
        size: "30 x 40 cm",
        year: 2021,
        image: "/assets/custom-work-1.jpeg",
        copy: "Een ijsvogel in heldere kleuren, geschilderd met acrylverf op doek."
      },
      impression: {
        title: "Ijsvogel aan de muur",
        technique: "Sfeerimpressie",
        image: "/assets/custom-work-1-wall.jpeg",
        copy: "De ijsvogel aan de muur: een klein schilderij met veel kleur."
      }
    },
  ];

  return (
    <section id="custom-work" className="site-container section-space" aria-labelledby="custom-heading">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="eyebrow">Iets laten maken</p>
          <h2 id="custom-heading" className="mt-3 text-3xl md:text-4xl">Een idee voor jouw huiskamer?</h2>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
            Een mooie herinnering van een vakantie, een bijzonder moment, een landschap of gewoon iets dat je mooi vindt. Vertel het me, dan kijken we samen wat kan.
          </p>
          <p className="mt-4 max-w-lg text-lg leading-relaxed text-muted">
            <strong className="font-medium text-ink">Een schilderij laten maken hoeft niet duur te zijn.</strong>.
          </p>
          <ol className="mt-8 space-y-6">
            <li className="flex gap-4"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line text-xs">1</span><div><h3 className="text-xl">Deel je idee</h3><p className="mt-2 text-sm leading-relaxed text-muted">Vertel me wat je mooi vindt. In een gesprek van 30 minuten bespreken we je idee, de kleuren en het formaat.</p></div></li>
            <li className="flex gap-4"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line text-xs">2</span><div><h3 className="text-xl">We spreken een prijs af</h3><p className="mt-2 text-sm leading-relaxed text-muted">Je weet vooraf wat het kost. Je betaalt 50% vooraf, daarna ga ik voor je schilderen.</p></div></li>
            <li className="flex gap-4"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line text-xs">3</span><div><h3 className="text-xl">Na 2 tot 3 maanden in huis</h3><p className="mt-2 text-sm leading-relaxed text-muted">Je schilderij wordt gratis bij je thuisbezorgd.</p></div></li>
          </ol>
        </div>
        <div className="border border-line bg-salt p-6 sm:p-9">
          <h3 className="text-3xl">Vertel me je idee</h3>
          <p className="mb-7 mt-3 text-sm leading-relaxed text-muted">Je spreekt gewoon met Fi.</p>
          {status === "success" ? (
            <div role="status" className="py-8">
              <h3 className="text-2xl">Bedankt voor je bericht!</h3>
              <p className="mt-4 leading-relaxed text-muted">Ik neem contact met je op om een gesprek van 30 minuten te plannen.</p>
              <button type="button" onClick={() => setStatus("idle")} className="text-link mt-7">Nog een bericht sturen</button>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleFormSubmit} className="space-y-5">
              <input type="hidden" name="title" value="persoonlijk werk" />
              <input type="hidden" name="isCustom" value="true" />
              <div><label className="form-label" htmlFor="custom-name">Naam</label><input id="custom-name" name="name" autoComplete="name" required className="field" placeholder="Je naam" /></div>
              <div><label className="form-label" htmlFor="custom-email">E-mailadres</label><input id="custom-email" name="email" type="email" autoComplete="email" required className="field" placeholder="naam@voorbeeld.nl" /></div>
              <div><label className="form-label" htmlFor="custom-message">Wat zou je mooi vinden?</label><textarea id="custom-message" name="message" required rows={4} className="field resize-y" placeholder="Heb je al een idee, laat het me weten. Anders ontdekken we het samen tijdens ons gesprek." /></div>
              <button type="submit" disabled={status === "sending"} className="button w-full">{status === "sending" ? "Bezig met versturen…" : "Verstuur je bericht"}</button>
              {status === "error" && <p role="alert" className="form-status text-red-800">Versturen is niet gelukt. Probeer het opnieuw of mail naar <a className="underline" href="mailto:info@finaezer.nl">info@finaezer.nl</a>.</p>}
            </form>
          )}
        </div>
      </div>
      <div className="mt-14 border-t border-line pt-10">
        <h2 className="section-heading">Al eerder gemaakt</h2>
        <p className="mb-7 mt-3 text-sm leading-relaxed text-muted">Ieder schilderij begon met een idee. Klik op een foto om het van dichtbij te bekijken.</p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {examples.map((example) => <PairedGalleryCard key={example.main.title} main={example.main} impression={example.impression} />)}
        </div>
      </div>
    </section>
  );
};

export default CustomWork;