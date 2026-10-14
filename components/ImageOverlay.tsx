"use client";
import React, { useEffect, useId, useRef, useState } from "react";
import ExportedImage from "next-image-export-optimizer";
import ReservationForm from "./ReservationForm";
import { ArtWork } from "@/types";

interface ImageOverlayProps extends ArtWork {
  onClose: () => void;
}

const ImageOverlay: React.FC<ImageOverlayProps> = ({
  image,
  title,
  technique,
  size,
  year,
  price,
  sold,
  copy,
  onClose,
}) => {
  const [showReservation, setShowReservation] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const reserveButtonRef = useRef<HTMLButtonElement>(null);
  const previousReservationView = useRef(false);
  const titleId = useId();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const opener = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const body = document.body;
    const scrollX = window.scrollX;
    const scrollY = window.scrollY;
    const previousBodyStyles = {
      overflow: body.style.overflow,
      position: body.style.position,
      top: body.style.top,
      left: body.style.left,
      right: body.style.right,
      paddingRight: body.style.paddingRight,
    };
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    const bodyPadding = window.getComputedStyle(body).paddingRight;

    // The native modal keeps keyboard focus inside and makes the page behind it inert.
    dialog.showModal();
    Object.assign(body.style, {
      overflow: "hidden",
      position: "fixed",
      top: `-${scrollY}px`,
      left: "0",
      right: "0",
      paddingRight: `${parseFloat(bodyPadding) + scrollbarWidth}px`,
    });
    closeButtonRef.current?.focus({ preventScroll: true });

    return () => {
      dialog.close();
      Object.assign(body.style, previousBodyStyles);
      const root = document.documentElement;
      const previousScrollBehavior = root.style.scrollBehavior;
      root.style.scrollBehavior = "auto";
      window.scrollTo(scrollX, scrollY);
      root.style.scrollBehavior = previousScrollBehavior;
      if (opener?.isConnected) opener.focus({ preventScroll: true });
    };
  }, []);

  useEffect(() => {
    if (previousReservationView.current && !showReservation) {
      reserveButtonRef.current?.focus();
    }
    previousReservationView.current = showReservation;
  }, [showReservation]);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      className="fixed inset-0 m-auto max-h-[calc(100dvh_-_1rem)] w-[calc(100%_-_1rem)] max-w-5xl overflow-hidden border border-line bg-pearl p-0 text-ink shadow-xl backdrop:bg-ink/50 backdrop:backdrop-blur-sm"
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="flex max-h-[calc(100dvh_-_2rem)] flex-col">
        <header className="flex flex-shrink-0 items-start justify-between gap-4 border-b border-line px-5 py-4 sm:px-8">
          <h2 id={titleId} className="min-w-0 break-words text-2xl leading-tight sm:text-3xl">
            {title}
          </h2>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="flex h-11 w-11 flex-shrink-0 items-center justify-center border border-line bg-pearl text-3xl leading-none transition-colors hover:bg-salt focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
            aria-label="Sluiten"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </header>

        <div className="grid min-h-0 overflow-y-auto overscroll-contain md:grid-cols-2">
          <div
            className={`relative min-h-48 bg-salt md:sticky md:top-0 md:h-[60dvh] ${
              showReservation ? "hidden md:block" : "h-[35dvh]"
            }`}
          >
            <ExportedImage
              src={image}
              alt={title}
              fill
              sizes="(max-width: 767px) 100vw, 50vw"
              style={{ objectFit: "contain" }}
              className="p-5 sm:p-8"
              priority
            />
          </div>

          <div className="min-w-0 p-5 sm:p-8">
            {showReservation && !sold ? (
              <ReservationForm
                workTitle={title}
                size={size}
                technique={technique}
                year={year}
                onClose={() => setShowReservation(false)}
              />
            ) : (
              <div className="flex h-full flex-col">
                {sold && (
                  <p className="mb-5 self-start border border-line bg-salt px-3 py-1 text-sm font-medium">
                    Verkocht
                  </p>
                )}
                <dl className="space-y-3 text-sm leading-relaxed">
                  {size && (
                    <div>
                      <dt className="text-muted">Formaat</dt>
                      <dd>{size}</dd>
                    </div>
                  )}
                  {technique && (
                    <div>
                      <dt className="text-muted">Gemaakt met</dt>
                      <dd>{technique}</dd>
                    </div>
                  )}
                  {year && (
                    <div>
                      <dt className="text-muted">Geschilderd in</dt>
                      <dd>{year}</dd>
                    </div>
                  )}
                </dl>
                {copy && <p className="mt-6 whitespace-pre-line text-base leading-relaxed text-muted">{copy}</p>}
                {price && <p className="mt-6 text-lg font-medium">{price}</p>}

                <div className="mt-6 border-t border-line pt-6">
                  {sold ? (
                    <p className="text-sm leading-relaxed text-muted">
                      Dit schilderij heeft al een thuis en is niet meer te koop.
                    </p>
                  ) : price ? (
                    <>
                      <button
                        ref={reserveButtonRef}
                        type="button"
                        onClick={() => setShowReservation(true)}
                        className="button w-full"
                      >
                        Dit schilderij reserveren
                      </button>
                      <p className="mt-3 text-sm leading-relaxed text-muted">
                        Je stuurt eerst een bericht. Daarna spreken we samen de aankoop af.
                      </p>
                    </>
                  ) : null}
                  <button type="button" onClick={onClose} className="text-link mt-5 min-h-11">
                    Terug naar de schilderijen
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default ImageOverlay;