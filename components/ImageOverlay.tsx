"use client";
import React, { useEffect, useState } from "react";
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
  onClose
}) => {
  const [showReservation, setShowReservation] = useState(false);

  // Logica voor het filteren van optionele velden
  const details = [technique, size].filter(Boolean).join(", ");
  const displayYear = year ? ` (${year})` : "";

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-white md:bg-black/60 md:backdrop-blur-sm p-0 md:p-10 cursor-default"
      onClick={onClose}
    >
      <div
        className="relative w-full h-full md:h-[85vh] md:max-w-6xl bg-white md:shadow-2xl md:rounded-2xl overflow-hidden flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button - More prominent on mobile */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-black text-3xl md:text-4xl z-[60] hover:text-gray-600 transition leading-none bg-white/80 backdrop-blur-md rounded-full w-10 h-10 flex items-center justify-center shadow-md md:bg-transparent md:shadow-none"
          aria-label="Close"
        >
          &times;
        </button>

        {/* Image Container */}
        <div className="relative w-full md:w-3/5 h-[50vh] md:h-full bg-gray-50 flex-shrink-0">
          <ExportedImage
            src={image}
            alt={title}
            fill
            style={{ objectFit: "contain" }}
            className="p-4 md:p-8"
            priority
          />
        </div>

        {/* Scrollable Content Container */}
        <div className="w-full md:w-2/5 p-6 md:p-12 flex flex-col overflow-y-auto bg-white">
          {showReservation ? (
            <ReservationForm
              workTitle={title}
              size={size}
              technique={technique}
              year={year}
              onClose={() => setShowReservation(false)}
            />
          ) : (
            <>
              <div className="mb-6">
                {sold ? (
                  <span className="inline-block bg-black text-white px-3 py-1 rounded-full text-xs md:text-sm font-semibold uppercase tracking-wider">
                    Verkocht
                  </span>
                ) : price ? (
                  <span className="text-xl md:text-2xl font-bold text-gray-900">
                    {price}
                  </span>
                ) : null}
              </div>

              <div className="prose text-gray-600 mb-8 leading-relaxed">
                <h2 className="font-bold text-2xl md:text-3xl text-black mb-2">{title}</h2>
                {/* Gecombineerde weergave van optionele details */}
                {(details || displayYear) && (
                  <p className="text-gray-500">{details}{displayYear}</p>
                )}
                {copy && (
                  <p className="mt-6 text-base md:text-lg">
                    {copy}
                  </p>
                )}
              </div>

              <div className="mt-auto pt-6 border-t border-gray-100">
                {!sold && price ? (
                  <button
                    onClick={() => setShowReservation(true)}
                    className="w-full bg-black text-white text-lg font-bold py-4 rounded-full hover:bg-gray-800 transition shadow-lg active:scale-[0.98]"
                  >
                    Reserveren / Kopen
                  </button>
                ) : sold ? (
                  <p className="text-center text-gray-500 italic py-4">
                    Dit werk is niet meer beschikbaar.
                  </p>
                ) : null}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageOverlay;