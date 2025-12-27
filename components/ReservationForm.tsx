"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

interface ReservationFormProps {
  workTitle: string;
  technique?: string; // Nieuw: optionele velden voor de mail
  size?: string;
  year?: number;
  onClose: () => void;
}

const ReservationForm: React.FC<ReservationFormProps> = ({
  workTitle,
  technique,
  size,
  year,
  onClose
}) => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setStatus("sending");

    emailjs
      .sendForm(
        "service_mvi596h",
        "template_6dp1l6g",
        form.current,
        "ZKCNzXFJ_ChBAyWv5"
      )
      .then(
        () => {
          setStatus("success");
          setTimeout(onClose, 4000);
        },
        (error) => {
          console.error("FAILED...", error);
          setStatus("error");
        }
      );
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center h-full text-center animate-fade-in text-black">
        <h3 className="text-2xl font-bold text-green-600 mb-4">Bedankt!</h3>
        <p className="text-gray-700">Je aanvraag voor <strong>{workTitle}</strong> is verstuurd.</p>
        <p className="text-gray-500 text-sm mt-2">Ik neem zo snel mogelijk contact met je op.</p>
        <button
          onClick={onClose}
          className="mt-8 text-gray-500 underline hover:text-black"
        >
          Sluiten
        </button>
      </div>
    );
  }

  return (
    <div className="w-full animate-fade-in text-black">
      <h3 className="text-2xl font-bold mb-6 text-gray-900">Reserveren</h3>
      <p className="mb-6 text-sm text-gray-600">
        Vul je gegevens in om de <strong>{workTitle}</strong> te reserveren.
      </p>

      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
        {/* Verborgen velden voor EmailJS template logica */}
        <input type="hidden" name="title" value={workTitle} />
        <input type="hidden" name="isCustom" value="false" />
        <input type="hidden" name="technique" value={technique || ""} />
        <input type="hidden" name="size" value={size || ""} />
        <input type="hidden" name="year" value={year || ""} />

        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700">Naam</label>
          <input
            name="name"
            type="text"
            required
            className="w-full p-3 bg-gray-50 text-black border border-gray-200 rounded-lg focus:ring-2 focus:ring-black focus:outline-none transition"
            placeholder="Je naam"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700">E-mailadres</label>
          <input
            name="email"
            type="email"
            required
            className="w-full p-3 bg-gray-50 text-black border border-gray-200 rounded-lg focus:ring-2 focus:ring-black focus:outline-none transition"
            placeholder="naam@voorbeeld.nl"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700">Bericht / Vraag</label>
          <textarea
            name="message"
            className="w-full p-3 bg-gray-50 text-black border border-gray-200 rounded-lg focus:ring-2 focus:ring-black focus:outline-none h-32 transition resize-none"
            placeholder="Typ hier je bericht..."
          />
        </div>

        <div className="flex flex-col gap-3 mt-4">
          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full bg-black text-white py-4 rounded-full font-medium hover:bg-gray-800 transition disabled:opacity-50"
          >
            {status === "sending" ? "Bezig met versturen..." : "Verstuur Aanvraag"}
          </button>

          <button
            type="button"
            onClick={onClose}
            className="w-full py-2 text-gray-500 hover:text-black text-sm"
          >
            Annuleren
          </button>
        </div>

        {status === "error" && (
          <p className="text-red-500 text-sm mt-2 text-center">
            Er ging iets mis. Stuur een mail naar info@finaezer.nl
          </p>
        )}
      </form>
    </div>
  );
};

export default ReservationForm;