"use client";
import React from "react";
import ExportedImage from "next-image-export-optimizer";
import { ArtWork } from "@/types";

interface ClickableImageProps extends ArtWork {
  onClick: () => void;
}

const ClickableImage: React.FC<ClickableImageProps> = ({
  image,
  sold,
  price,
  title,
  size,
  technique,
  year,
  onClick,
}) => {
  return (
    <div
      className="flex flex-col cursor-pointer group"
      onClick={onClick}
      tabIndex={0}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onClick()}
    >
      {/* Image container */}
      <div className="relative aspect-[9/16] overflow-hidden rounded-lg">
        <ExportedImage
          src={image}
          alt={title}
          fill
          style={{ objectFit: "cover" }}
          className="rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-105"
        />

        {/* Sold banner - Top Left */}
        {sold && (
          <div className="absolute top-2 left-2 px-3 py-1 bg-black bg-opacity-60 text-white text-xs font-semibold rounded-full z-10">
            Verkocht
          </div>
        )}

        {/* DESKTOP STRATEGY: Hover Badge
           Blijft ongewijzigd op de afbeelding staan voor desktop gebruikers.
        */}
        {!sold && price && (
          <div className="hidden md:block absolute top-2 left-2 px-3 py-1 bg-white/90 text-black text-xs font-medium rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-sm z-10">
            Te Koop
          </div>
        )}
      </div>

      {/* Text content - Top aligned met de stip rechts op mobiel */}
      <div className="mt-3 flex items-start justify-center gap-2">
        {/* MOBILE STRATEGY: Green Dot
           Gepositioneerd aan de rechterkant en uitgelijnd op de bovenste regel.
        */}
        {!sold && price && (
          <div
            className="md:hidden w-2 h-2 bg-green-500 rounded-full shadow-sm flex-shrink-0 mt-1"
            aria-label="Te Koop"
          />
        )}
        <p className="text-sm text-gray-400 text-center">
          {title}, {size}, {technique} ({year})
        </p>

      </div>
    </div>
  );
};

export default ClickableImage;