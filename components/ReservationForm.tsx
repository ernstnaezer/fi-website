"use client";
import React, { useEffect, useId, useRef } from "react";
import { useEmailService } from "@/hooks/useEmailService";

interface ReservationFormProps {
  workTitle: string;
  technique?: string;
  size?: string;
  year?: number;
  onClose: () => void;
}

const ReservationForm: React.FC<ReservationFormProps> = ({
  workTitle,
  technique,
  size,
  year,
  onClose,
}) => {
  const { formRef, status, sendEmail } = useEmailService();
  const fieldId = useId();
  const headingRef = useRef<HTMLHeadingElement>(null);
  const isSuccess = status === "success";

  useEffect(() => {
    headingRef.current?.focus();
  }, [isSuccess]);

  if (isSuccess) {
    return (
      <div className="text-ink">
        <h3 ref={headingRef} tabIndex={-1} className="text-3xl leading-tight focus:outline-none">
          Bedankt voor je bericht!
        </h3>
        <p role="status" className="mt-5 leading-relaxed text-muted">
          Je aanvraag voor <strong className="font-medium text-ink">{workTitle}</strong> is verstuurd.
          Ik neem zo snel mogelijk contact met je op om de aankoop af te spreken.
        </p>
        <button type="button" onClick={onClose} className="text-link mt-6 min-h-11">
          Terug naar het schilderij
        </button>
      </div>
    );
  }

  return (
    <div className="text-ink">
      <button type="button" onClick={onClose} className="text-link mb-5 min-h-11 text-sm">
        Terug naar het schilderij
      </button>
      <h3 ref={headingRef} tabIndex={-1} className="text-3xl leading-tight focus:outline-none">
        Dit schilderij reserveren
      </h3>
      <p className="mb-6 mt-4 text-sm leading-relaxed text-muted">
        Laat je gegevens achter voor <strong className="font-medium text-ink">{workTitle}</strong>.
        Ik neem contact met je op. Je betaalt nog niets via dit formulier.
      </p>

      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="flex flex-col gap-5"
        aria-busy={status === "sending"}
      >
        <input type="hidden" name="title" value={workTitle} />
        <input type="hidden" name="isCustom" value="false" />
        <input type="hidden" name="technique" value={technique || ""} />
        <input type="hidden" name="size" value={size || ""} />
        <input type="hidden" name="year" value={year || ""} />

        <div>
          <label htmlFor={`${fieldId}-name`} className="form-label">Je naam (verplicht)</label>
          <input
            id={`${fieldId}-name`}
            name="name"
            type="text"
            autoComplete="name"
            required
            className="field"
          />
        </div>

        <div>
          <label htmlFor={`${fieldId}-email`} className="form-label">Je e-mailadres (verplicht)</label>
          <input
            id={`${fieldId}-email`}
            name="email"
            type="email"
            autoComplete="email"
            required
            className="field"
            placeholder="naam@voorbeeld.nl"
          />
        </div>

        <div>
          <label htmlFor={`${fieldId}-message`} className="form-label">Je bericht of vraag (mag leeg blijven)</label>
          <textarea
            id={`${fieldId}-message`}
            name="message"
            rows={4}
            className="field min-h-28 resize-y"
          />
        </div>

        <div className="flex flex-col gap-3">
          <button type="submit" disabled={status === "sending"} className="button w-full disabled:cursor-wait disabled:opacity-60">
            {status === "sending" ? "Je bericht wordt verstuurd…" : "Verstuur mijn aanvraag"}
          </button>
          <button type="button" onClick={onClose} className="text-link min-h-11 self-center text-sm">
            Annuleren
          </button>
        </div>
      </form>

      <p role="status" className="form-status" aria-live="polite">
        {status === "sending" ? "Je bericht wordt verstuurd. Even geduld." : ""}
      </p>
      {status === "error" && (
        <p role="alert" className="form-status text-clay">
          Je bericht is niet verstuurd. Probeer het opnieuw of mail naar{" "}
          <a href="mailto:info@finaezer.nl" className="text-link">info@finaezer.nl</a>.
          Je ingevulde gegevens staan nog in het formulier.
        </p>
      )}
    </div>
  );
};

export default ReservationForm;