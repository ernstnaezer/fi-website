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
      className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-95 p-4 md:p-10 cursor-default overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-6xl bg-white shadow-2xl rounded-xl overflow-hidden flex flex-col md:flex-row min-h-[60vh] md:h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-black text-4xl z-50 hover:text-gray-600 transition leading-none"
          aria-label="Close"
        >
          &times;
        </button>

        <div className="relative w-full md:w-3/5 h-[40vh] md:h-full bg-gray-50">
          <ExportedImage
            src={image}
            alt={title}
            fill
            style={{ objectFit: "contain" }}
            className="p-4"
          />
        </div>

        <div className="w-full md:w-2/5 p-8 md:p-12 flex flex-col overflow-y-auto">
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
              <div className="mb-6 mt-24">
                {sold ? (
                  <span className="inline-block bg-black text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Verkocht
                  </span>
                ) : price ? (
                  <span className="text-xl font-medium text-gray-900">
                    {price}
                  </span>
                ) : null}
              </div>

              <div className="prose text-gray-600 mb-8 leading-relaxed">
                <p className="font-bold text-lg text-black">{title}</p>
                {/* Gecombineerde weergave van optionele details */}
                {(details || displayYear) && (
                  <p>{details}{displayYear}</p>
                )}
                {copy && (
                  <p className="mt-6">
                    {copy}
                  </p>
                )}
              </div>

              <div className="mt-auto pt-6 border-t border-gray-100">
                {!sold && price ? (
                  <button
                    onClick={() => setShowReservation(true)}
                    className="w-full bg-black text-white text-lg font-medium py-4 rounded-full hover:bg-gray-800 transition shadow-lg"
                  >
                    Reserveren / Kopen
                  </button>
                ) : sold ? (
                  <p className="text-center text-gray-500 italic">
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