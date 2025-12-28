"use client";
import React from "react";
import ImageGrid from "@/components/ImageGrid";
import { ArtWork } from "@/types";
import { useEmailService } from "@/hooks/useEmailService";

const CustomWork: React.FC = () => {
  const { formRef, status, setStatus, sendEmail } = useEmailService();

  const handleFormSubmit = (e: React.FormEvent) => {
    sendEmail(e, () => {
      formRef.current?.reset();
    });
  };

  const examples: ArtWork[] = [
    {
      title: "Ijsvogel",
      technique: "acryl op doek",
      size: "30 x 40 cm",
      year: 2021,
      image: "/assets/custom-work-1.jpeg",
      copy: "Dit krachtige acrylwerk toont een ijsvogel in een gedurfde, abstracte en grafische stijl. De dynamische penseelstreken en levendige kleuren vangen de snelheid van de vogel, waardoor een moderne en unieke blik op de natuur ontstaat."
    },
    {
      title: "Ijsvogel aan de muur",
      technique: "Sfeerimpressie",
      image: "/assets/custom-work-1-wall.png",
      copy: "Dit krachtige acrylwerk toont een ijsvogel in een gedurfde, abstracte en grafische stijl. De dynamische penseelstreken en levendige kleuren vangen de snelheid van de vogel, waardoor een moderne en unieke blik op de natuur ontstaat."
    },
    {
      title: "Zonnebloem met vlinders",
      technique: "olie op doek",
      size: "50 x 70 cm",
      year: 2024,
      image: "/assets/custom-work-2.jpeg",
      copy: "Dit stralende olieverfschilderij van zonnebloemen en dansende vlinders brengt de ultieme zomerse energie direct in huis. De rijke texturen en warme kleuren vangen het zonlicht, precies zoals bedoeld voor een interieur vol leven en warmte."
    },
    {
      title: "Zonnebloem met vlinders aan de muur",
      technique: "Sfeerimpressie",
      image: "/assets/custom-work-2-wall.jpeg",
      copy: "Dit stralende olieverfschilderij van zonnebloemen en dansende vlinders brengt de ultieme zomerse energie direct in huis. De rijke texturen en warme kleuren vangen het zonlicht, precies zoals bedoeld voor een interieur vol leven en warmte."
    },
  ];

  return (
    <div className="bg-gray-100 text-black px-6 md:px-20 py-12 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900">
            Kunstwerken laten maken
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 lg:items-start mb-24">
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col gap-6 text-gray-700 leading-relaxed">
              <p className="text-lg md:text-xl">
                Je kunt ervoor kiezen om een kunstwerk speciaal voor jou te laten
                maken. Iets wat je aanspreekt en niet direct tussen mijn kunstwerken
                zit.
              </p>
              <p className="text-lg md:text-xl">
                Stuur een bericht met je wensen en eerste ideeën via het formulier op de website.
              </p>
              <p className="text-lg md:text-xl">
                Een opdracht is vaak een langer proces waar ik graag de tijd neem om
                je wens te begrijpen. We spreken een prijs en levertijd vooraf af, zodat we
                allebei precies weten waar we aan toe zijn.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-1/2 bg-white p-8 md:p-10 rounded-2xl shadow-2xl border border-gray-100 animate-fade-in">
            <h2 className="text-2xl font-bold mb-2 text-gray-900">Direct een aanvraag doen</h2>
            <p className="text-gray-500 mb-8 text-sm">Heb je al een idee voor een persoonlijk werk?</p>

            {status === "success" ? (
              <div className="flex flex-col items-center justify-center py-10 text-center animate-fade-in">
                <h3 className="text-2xl font-bold text-green-600 mb-4">Verzonden!</h3>
                <p className="text-gray-700 text-lg">Bedankt voor je interesse. Ik neem binnenkort contact met je op.</p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-8 text-gray-500 underline hover:text-black transition"
                >
                  Nog een bericht sturen
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleFormSubmit} className="flex flex-col gap-5">
                <input type="hidden" name="title" value="persoonlijk werk" />
                <input type="hidden" name="isCustom" value="true" />

                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-gray-700 ml-1">Naam</label>
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="Je naam"
                    className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-black focus:bg-white outline-none transition"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-gray-700 ml-1">E-mailadres</label>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="naam@voorbeeld.nl"
                    className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-black focus:bg-white outline-none transition"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-gray-700 ml-1">Je wensen</label>
                  <textarea
                    name="message"
                    required
                    placeholder="Beschrijf hier kort je ideeën (onderwerp, techniek, formaat)..."
                    className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-black focus:bg-white outline-none h-40 resize-none transition"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-black text-white py-4 mt-2 rounded-full font-bold text-lg hover:bg-gray-800 transition shadow-lg disabled:opacity-50"
                >
                  {status === "sending" ? "Bezig met verzenden..." : "Aanvraag versturen"}
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

        <div className="pt-20 border-t border-gray-200">
          <h2 className="text-3xl font-bold mb-10 text-center text-gray-900">
            Voorgaande opdrachten
          </h2>
          <ImageGrid
            projects={examples}
            columns={{ base: 2, md: 2, lg: 4, sm: 2 }}
            size="large"
          />
        </div>
      </div>
    </div>
  );
};

export default CustomWork;