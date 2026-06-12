"use client";

import React, { useState } from "react";
import ExportedImage from "next-image-export-optimizer";
import { ArtWork } from "@/types";
import ImageOverlay from "./ImageOverlay";

interface PairedGalleryCardProps {
  main: ArtWork;
  impression: ArtWork;
  variant?: "dark" | "light";
}

const PairedGalleryCard: React.FC<PairedGalleryCardProps> = ({
  main,
  impression,
  variant = "light",
}) => {
  const [selectedImage, setSelectedImage] = useState<ArtWork | null>(null);
  const isLight = variant === "light";
  const metadata = [main.technique, main.size, main.year ? String(main.year) : ""]
    .filter(Boolean)
    .join(" • ");

  const cardClasses = isLight
    ? "border-gray-200 bg-white shadow-lg shadow-black/10"
    : "border-white/10 bg-white/[0.06] shadow-lg shadow-black/20";
  const imageClasses = isLight ? "bg-gray-100" : "bg-white/5";
  const titleClasses = isLight ? "text-gray-900" : "text-white";
  const metadataClasses = isLight ? "text-gray-600" : "text-gray-300";
  const focusClasses = isLight ? "focus:ring-black/30" : "focus:ring-white/50";

  const renderImagePanel = (work: ArtWork, label: string) => (
    <button
      type="button"
      onClick={() => setSelectedImage(work)}
      className={`relative aspect-[9/16] w-full overflow-hidden ${imageClasses} focus:outline-none focus:ring-2 ${focusClasses}`}
      aria-label={`${label}: ${work.title} openen`}
    >
      <ExportedImage
        src={work.image}
        alt={work.title}
        fill
        style={{ objectFit: "cover" }}
      />
      <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/65 text-white text-xs font-semibold shadow-sm backdrop-blur-sm">
        {label}
      </span>
    </button>
  );

  return (
    <>
      <article className={`overflow-hidden rounded-2xl border ${cardClasses}`}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-black/10">
          {renderImagePanel(main, "Schilderij")}
          {renderImagePanel(impression, "Sfeerimpressie")}
        </div>

        <div className="p-5">
          <h3 className={`text-lg font-semibold leading-snug ${titleClasses}`}>{main.title}</h3>
          {metadata && (
            <p className={`mt-2 text-sm leading-relaxed ${metadataClasses}`}>{metadata}</p>
          )}
        </div>
      </article>

      {selectedImage && (
        <ImageOverlay
          {...selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </>
  );
};

export default PairedGalleryCard;