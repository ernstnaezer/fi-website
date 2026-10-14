"use client";
import React, { useEffect, useState } from "react";
import ExportedImage from "next-image-export-optimizer";
import { useEmailService } from "@/hooks/useEmailService";

type Mode = "cadeaubon" | "aanvraag";

export default function KinderkamerContactSection() {
  const [mode, setMode] = useState<Mode>("aanvraag");
  const [submittedMode, setSubmittedMode] = useState<Mode>("aanvraag");
  const { formRef, status, setStatus, sendEmail } = useEmailService();

  useEffect(() => {
    const syncModeFromHash = () => {
      const hash = window.location.hash;
      if (hash === "#cadeaubon" || hash === "#aanvraag") {
        setMode(hash === "#cadeaubon" ? "cadeaubon" : "aanvraag");
        setStatus((current) => (current === "sending" ? current : "idle"));
      }
    };

    syncModeFromHash();
    window.addEventListener("hashchange", syncModeFromHash);
    return () => window.removeEventListener("hashchange", syncModeFromHash);
  }, [setStatus]);

  const selectMode = (nextMode: Mode) => {
    setMode(nextMode);
    setStatus((current) => (current === "sending" ? current : "idle"));
    window.history.replaceState(window.history.state, "", `#${nextMode}`);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    setSubmittedMode(mode);
    sendEmail(e, () => formRef.current?.reset());
  };

  const isCadeaubon = mode === "cadeaubon";

  return (
    <section
      id="aanvraag"
      aria-labelledby="kinderkamer-contact-heading"
      className="section-space scroll-mt-28 border-t border-line bg-salt"
    >
      <div id="cadeaubon" className="site-container scroll-mt-28">
        <div className="mb-8 max-w-2xl">
          <p className="eyebrow">Voor je eigen kind, of om te geven</p>
          <h2 id="kinderkamer-contact-heading" className="mt-3 text-3xl sm:text-4xl lg:text-5xl">
            Wat mag ik voor je maken?
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            Vertel me je idee voor een schilderij. Of geef een cadeaubon, zodat
            de ontvanger zelf het onderwerp en de kleuren kan kiezen.
          </p>
        </div>

        <fieldset className="mb-8" disabled={status === "sending"}>
          <legend className="sr-only">Kies een schilderij of een cadeaubon</legend>
          <div className="grid gap-3 sm:grid-cols-2">
            <label
              className={`flex cursor-pointer items-start gap-3 border p-5 transition-colors focus-within:outline focus-within:outline-2 focus-within:outline-offset-4 focus-within:outline-sage ${
                !isCadeaubon ? "border-sage bg-pearl" : "border-line hover:border-sage"
              }`}
            >
              <input
                type="radio"
                name="kinderkamer-keuze"
                value="aanvraag"
                checked={!isCadeaubon}
                onChange={() => selectMode("aanvraag")}
                className="mt-1 h-4 w-4 shrink-0 accent-sage"
                aria-controls="kinderkamer-form-panel"
              />
              <span>
                <span className="block font-medium">Een schilderij laten maken</span>
                <span className="mt-1 block text-sm leading-relaxed text-muted">
                  Voor jouw kind · 40 × 40 cm · €75
                </span>
              </span>
            </label>
            <label
              className={`flex cursor-pointer items-start gap-3 border p-5 transition-colors focus-within:outline focus-within:outline-2 focus-within:outline-offset-4 focus-within:outline-sage ${
                isCadeaubon ? "border-sage bg-pearl" : "border-line hover:border-sage"
              }`}
            >
              <input
                type="radio"
                name="kinderkamer-keuze"
                value="cadeaubon"
                checked={isCadeaubon}
                onChange={() => selectMode("cadeaubon")}
                className="mt-1 h-4 w-4 shrink-0 accent-sage"
                aria-controls="kinderkamer-form-panel"
              />
              <span>
                <span className="block font-medium">Een cadeaubon geven</span>
                <span className="mt-1 block text-sm leading-relaxed text-muted">
                  Voor een persoonlijk kinderkamerschilderij · €75
                </span>
              </span>
            </label>
          </div>
        </fieldset>

        <div id="kinderkamer-form-panel" className="grid gap-8 lg:grid-cols-2 lg:gap-3">
          <div className="py-3 lg:py-8">
            {isCadeaubon ? (
              <div className="max-w-lg">
                <ExportedImage
                  src="/assets/cadeaubon-sample.webp"
                  alt="Voorbeeld van de digitale cadeaubon voor een kinderkamerschilderij"
                  width={1536}
                  height={1024}
                  sizes="(max-width: 1024px) 90vw, 42vw"
                  className="h-auto w-full object-contain"
                />
                <h3 className="mt-7 text-2xl sm:text-3xl">Zo geef je een schilderij cadeau.</h3>
                <ol className="mt-4 list-decimal space-y-3 pl-5 leading-relaxed text-muted">
                  <li>Vraag hieronder een cadeaubon van €75 aan.</li>
                  <li>Ik stuur je een betaalverzoek per e-mail.</li>
                  <li>Na betaling ontvang je de digitale cadeaubon per e-mail.</li>
                </ol>
                <p className="mt-5 text-sm leading-relaxed text-muted">
                  De bon is voor een schilderij van 40 × 40 cm, dat ik speciaal
                  voor de ontvanger maak.
                </p>
              </div>
            ) : (
              <div className="max-w-md">
                <p className="eyebrow">Jouw idee, mijn penseel</p>
                <h3 className="mt-4 text-3xl sm:text-4xl">Iets dat echt bij de kamer past.</h3>
                <ol className="mt-7 space-y-6">
                  <li className="flex gap-4"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line text-xs">1</span><div><h4 className="font-display text-xl">Deel je idee</h4><p className="mt-2 text-sm leading-relaxed text-muted">Vertel me wat je mooi vindt. In een gesprek van 30 minuten bespreken we je idee.</p></div></li>
                  <li className="flex gap-4"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line text-xs">2</span><div><h4 className="font-display text-xl">In ca. 4 weken in huis</h4><p className="mt-2 text-sm leading-relaxed text-muted">Je schilderij wordt gratis bij je thuisbezorgd. Je betaalt pas bij bezorging.</p></div></li>
                </ol>
                <dl className="mt-7 divide-y divide-line border-y border-line text-sm">
                  <div className="flex justify-between gap-4 py-4">
                    <dt className="text-muted">Formaat</dt>
                    <dd>40 × 40 cm</dd>
                  </div>
                  <div className="flex justify-between gap-4 py-4">
                    <dt className="text-muted">Vaste prijs</dt>
                    <dd>€75</dd>
                  </div>
                  <div className="flex justify-between gap-4 py-4">
                    <dt className="text-muted">Gemaakt voor</dt>
                    <dd>Jouw kind</dd>
                  </div>
                </dl>
              </div>
            )}
          </div>

          <div className="border border-line bg-pearl p-6 sm:p-8 lg:p-10">
            <div aria-live="polite" aria-atomic="true">
              {status === "success" && (
                <div className="form-status py-8">
                  <h3 className="text-3xl">Bedankt, je bericht is verstuurd.</h3>
                  <p className="mt-4 leading-relaxed text-muted">
                    {submittedMode === "cadeaubon"
                      ? "Ik stuur je een betaalverzoek per e-mail. Na betaling ontvang je de digitale cadeaubon per e-mail."
                      : "Ik neem per e-mail contact met je op om een gesprek van 30 minuten te plannen."}
                  </p>
                  <button type="button" onClick={() => setStatus("idle")} className="text-link mt-6">
                    Nog een aanvraag doen
                  </button>
                </div>
              )}
            </div>

            {status !== "success" && (
              <>
                <h3 id="kinderkamer-form-heading" className="text-2xl sm:text-3xl">
                  {isCadeaubon ? "Vraag een cadeaubon aan" : "Vertel me je idee"}
                </h3>
                <p className="mb-6 mt-3 text-sm leading-relaxed text-muted">
                  {isCadeaubon
                    ? "Laat je naam en e-mailadres achter. Je krijgt eerst een betaalverzoek van mij per e-mail."
                    : "Vul je gegevens en wensen in. Ik neem per e-mail contact met je op om een gesprek van 30 minuten te plannen."}
                </p>

                <form
                  ref={formRef}
                  onSubmit={handleFormSubmit}
                  aria-labelledby="kinderkamer-form-heading"
                  aria-busy={status === "sending"}
                  className="flex flex-col gap-5"
                >
                  <input
                    type="hidden"
                    name="title"
                    value={isCadeaubon ? "cadeaubon kinderkamer schilderij" : "kinderkamer schilderij opdracht"}
                  />
                  <input type="hidden" name="isCustom" value="true" />

                  <div>
                    <label htmlFor="kinderkamer-name" className="form-label">Naam</label>
                    <input id="kinderkamer-name" name="name" type="text" autoComplete="name" required className="field" />
                  </div>

                  <div>
                    <label htmlFor="kinderkamer-email" className="form-label">E-mailadres</label>
                    <input id="kinderkamer-email" name="email" type="email" autoComplete="email" required className="field" />
                  </div>

                  <div>
                    <label htmlFor="kinderkamer-message" className="form-label">
                      {isCadeaubon ? "Bericht (niet verplicht)" : "Je wensen voor het schilderij"}
                    </label>
                    <p id="kinderkamer-message-help" className="mb-2 text-sm leading-relaxed text-muted">
                      {isCadeaubon
                        ? "Heb je een vraag of wil je iets meegeven? Schrijf het gerust op."
                        : "Denk aan een lievelingsdier, de kleuren van de kamer of een sfeer die je mooi vindt."}
                    </p>
                    <textarea
                      id="kinderkamer-message"
                      name="message"
                      required={!isCadeaubon}
                      aria-describedby="kinderkamer-message-help"
                      rows={5}
                      className="field min-h-32 resize-y"
                    />
                  </div>

                  <p className="text-sm text-muted">
                    {isCadeaubon ? "Naam en e-mailadres zijn verplicht." : "Alle velden zijn verplicht."}
                  </p>
                  <button type="submit" disabled={status === "sending"} className="button w-full disabled:cursor-wait disabled:opacity-60">
                    {status === "sending"
                      ? "Je bericht wordt verstuurd…"
                      : isCadeaubon
                        ? "Cadeaubon aanvragen · €75"
                        : "Aanvraag versturen"}
                  </button>
                  <p role="status" className="sr-only">
                    {status === "sending" ? "Je bericht wordt verstuurd." : ""}
                  </p>

                  {status === "error" && (
                    <p role="alert" className="form-status text-sm leading-relaxed text-clay">
                      Je bericht kon niet worden verstuurd. Probeer het opnieuw,
                      of mail me op{" "}
                      <a href="mailto:info@finaezer.nl" className="text-link">info@finaezer.nl</a>.
                    </p>
                  )}
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

