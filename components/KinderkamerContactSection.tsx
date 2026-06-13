"use client";
import React, { useState } from "react";
import ExportedImage from "next-image-export-optimizer";
import { useEmailService } from "@/hooks/useEmailService";

type Mode = "cadeaubon" | "commissie";

export default function KinderkamerContactSection() {
  const [mode, setMode] = useState<Mode>("cadeaubon");
  const { formRef, status, setStatus, sendEmail } = useEmailService();

  const handleFormSubmit = (e: React.FormEvent) => {
    sendEmail(e, () => formRef.current?.reset());
  };

  const isCadeaubon = mode === "cadeaubon";

  return (
    <section className="bg-[#F5F2ED] px-6 md:px-12 py-16 md:py-24">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <p className="uppercase tracking-[0.25em] text-xs text-gray-500 mb-2">Bestellen</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Wat wil je doen?</h2>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-white rounded-2xl p-2 shadow-lg border border-gray-200 gap-2">
            <TabButton
              active={isCadeaubon}
              onClick={() => {
                setMode("cadeaubon");
                setStatus("idle");
              }}
            >
              Cadeaubon kopen
            </TabButton>
            <TabButton
              active={!isCadeaubon}
              onClick={() => {
                setMode("commissie");
                setStatus("idle");
              }}
            >
              Schilderij op maat
            </TabButton>
          </div>
        </div>

        {/* Content panel */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left: visual / context */}
            <div className={`p-8 md:p-10 lg:p-12 flex items-center justify-center ${isCadeaubon ? "bg-[#EBDCC7]" : "bg-gray-900 text-white"}`}>
              {isCadeaubon ? (
                <div className="w-full max-w-md">
                  <ExportedImage
                    src="/assets/cadeaubon-sample.png"
                    alt="Voorbeeld van de cadeaubon"
                    width={1536}
                    height={1024}
                    className="w-full h-auto rounded-xl shadow-2xl"
                  />
                </div>
              ) : (
                <div className="max-w-sm">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">Een schilderij dat past bij de kamer.</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Vertel me over onderwerp, kleuren en sfeer — ik schilder iets unieks dat aansluit bij jouw kinderkamer.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-200">
                    <li className="flex gap-2"><span>✓</span> Op aanvraag geschilderd</li>
                    <li className="flex gap-2"><span>✓</span> Afgestemd op jouw wensen</li>
                    <li className="flex gap-2"><span>✓</span> Vaste prijs: 75 euro</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Right: form */}
            <div className="p-8 md:p-10 lg:p-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {isCadeaubon ? "Bestel een cadeaubon" : "Aanvraag voor maatwerk"}
              </h3>
              <p className="text-gray-500 text-sm mb-6">
                {isCadeaubon
                  ? "Vul je gegevens in, je ontvangt dan van mij een betaalverzoek per e-mail. Na betaling ontvang je een digitale cadeaubon per e-mail."
                  : "Vul je gegevens in en ik neem contact op over de details."}
              </p>

              {status === "success" ? (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <h4 className="text-2xl font-bold text-black mb-3">Verzonden!</h4>
                  <p className="text-gray-700">
                    {isCadeaubon
                      ? "Bedankt! Je ontvangt binnenkort een betaalverzoek per e-mail. Na betaling ontvang je de digitale cadeaubon."
                      : "Bedankt voor je aanvraag! Ik neem binnenkort contact op."}
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-6 text-gray-500 underline hover:text-black transition"
                  >
                    Nog een bericht sturen
                  </button>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleFormSubmit} className="flex flex-col gap-4">
                  <input
                    type="hidden"
                    name="title"
                    value={isCadeaubon ? "cadeaubon kinderkamer schilderij" : "kinderkamer schilderij opdracht"}
                  />
                  <input type="hidden" name="isCustom" value="true" />

                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-gray-700 ml-1">Naam</label>
                    <input
                      name="name"
                      type="text"
                      required
                      placeholder="Je naam"
                      className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-black focus:bg-white outline-none transition"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-gray-700 ml-1">E-mailadres</label>
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="naam@voorbeeld.nl"
                      className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-black focus:bg-white outline-none transition"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-gray-700 ml-1">
                      {isCadeaubon ? "Bericht (optioneel)" : "Wensen voor het schilderij"}
                    </label>
                    <textarea
                      name="message"
                      required={!isCadeaubon}
                      placeholder={
                        isCadeaubon
                          ? "Heb je nog een vraag of opmerking? Laat het hier weten."
                          : "Beschrijf het onderwerp en kleurenpallet van de kinderkamer (bijv. dieren, bloemen, kleuren)..."
                      }
                      className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-black focus:bg-white outline-none h-32 resize-none transition"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full bg-black text-white py-4 mt-1 rounded-full font-bold hover:bg-gray-800 transition shadow-lg disabled:opacity-50"
                  >
                    {status === "sending"
                      ? "Bezig met verzenden..."
                      : isCadeaubon
                      ? "Cadeaubon bestellen"
                      : "Aanvraag versturen"}
                  </button>

                  {status === "error" && (
                    <p className="text-red-500 text-sm text-center mt-2">
                      Fout bij verzenden. Mail a.u.b. naar info@finaezer.nl
                    </p>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TabButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-6 md:px-20 py-4 rounded-xl text-base md:text-lg font-bold transition whitespace-nowrap ${
        active
          ? "bg-black text-white shadow-md"
          : "text-gray-500 hover:text-black hover:bg-gray-50"
      }`}
    >
      {children}
    </button>
  );
}
