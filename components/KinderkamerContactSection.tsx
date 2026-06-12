"use client";
import React from "react";
import { useEmailService } from "@/hooks/useEmailService";

export default function KinderkamerContactSection() {
  const { formRef, status, setStatus, sendEmail } = useEmailService();

  const handleFormSubmit = (e: React.FormEvent) => {
    sendEmail(e, () => {
      formRef.current?.reset();
    });
  };

  return (
    <section className="bg-white px-6 md:px-20 py-16">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">Vraag een schilderij aan</h2>
        <p className="text-gray-500 mb-2">Vaste prijs: <span className="font-semibold text-gray-700">75 euro per schilderij</span>. Stuur je wensen en ik neem contact met je op.</p>

        {status === "success" ? (
          <div className="flex flex-col items-center justify-center py-10 text-center">
            <h3 className="text-2xl font-bold text-green-600 mb-4">Verzonden!</h3>
            <p className="text-gray-700 text-lg">Bedankt voor je aanvraag! Ik neem binnenkort contact op over de details van het schilderij.</p>
            <button
              onClick={() => setStatus("idle")}
              className="mt-8 text-gray-500 underline hover:text-black transition"
            >
              Nog een bericht sturen
            </button>
          </div>
        ) : (
          <form ref={formRef} onSubmit={handleFormSubmit} className="flex flex-col gap-5">
            <input type="hidden" name="title" value="kinderkamer schilderij" />
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
              <label className="text-sm font-medium text-gray-700 ml-1">Wensen voor het schilderij</label>
              <textarea
                name="message"
                required
                placeholder="Beschrijf het onderwerp en kleurenpallet van de kinderkamer (bijv. dieren, bloemen, kleuren)..."
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
    </section>
  );
}
