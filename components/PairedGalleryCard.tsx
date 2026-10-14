"use client";

import React, { useState } from "react";
import ExportedImage from "next-image-export-optimizer";
import { ArtWork } from "@/types";
import ImageOverlay from "./ImageOverlay";

interface PairedGalleryCardProps {
  main: ArtWork;
  impression: ArtWork;
}

const PairedGalleryCard: React.FC<PairedGalleryCardProps> = ({
  main,
  impression,
}) => {
  const [selectedImage, setSelectedImage] = useState<ArtWork | null>(null);
  const metadata = [main.size, main.technique, main.year ? String(main.year) : ""]
    .filter(Boolean)
    .join(" · ");

  const renderImagePanel = (work: ArtWork, label: string) => (
    <button
      type="button"
      onClick={() => setSelectedImage(work)}
      className="group block min-w-0 bg-salt text-left focus-visible:z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
      aria-label={`${label}: bekijk ${work.title}`}
      aria-haspopup="dialog"
    >
      <span className="relative block aspect-[4/5] w-full">
        <ExportedImage
          src={work.image}
          alt={work.title}
          fill
          sizes="(max-width: 767px) 50vw, 25vw"
          style={{ objectFit: "contain" }}
          className="p-3 sm:p-4"
        />
      </span>
      <span className="block px-3 pb-4 text-center text-sm text-muted underline-offset-4 group-hover:underline">
        {label}
      </span>
    </button>
  );

  return (
    <>
      <article className="border border-line bg-pearl text-ink">
        <div className="grid grid-cols-2 gap-px bg-line">
          {renderImagePanel(main, "Het schilderij")}
          {renderImagePanel(impression, "Met de omgeving")}
        </div>

        <div className="p-5">
          <h3 className="text-2xl leading-snug">{main.title}</h3>
          {metadata && (
            <p className="mt-2 text-sm leading-relaxed text-muted">{metadata}</p>
          )}
          {main.price && <p className="mt-3 font-medium">{main.price}</p>}
          {main.sold && (
            <p className="mt-3 inline-block border border-line bg-salt px-2 py-1 text-xs font-medium">
              Verkocht
            </p>
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