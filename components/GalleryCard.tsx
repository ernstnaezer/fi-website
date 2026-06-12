"use client";

import React from "react";
import ExportedImage from "next-image-export-optimizer";

interface GalleryCardProps {
  title: string;
  image: string;
  metadata: string[];
  badge?: string;
  onClick?: () => void;
  imageAspect?: string;
  enableImageZoom?: boolean;
  variant?: "dark" | "light";
}

const GalleryCard: React.FC<GalleryCardProps> = ({
  title,
  image,
  metadata,
  badge,
  onClick,
  imageAspect = "aspect-[9/16]",
  enableImageZoom = false,
  variant = "dark",
}) => {
  const isInteractive = Boolean(onClick);
  const metadataText = metadata.filter(Boolean).join(" • ");
  const isLight = variant === "light";

  const cardClasses = isLight
    ? "border-gray-200 bg-white shadow-lg shadow-black/10"
    : "border-white/10 bg-white/[0.06] shadow-lg shadow-black/20";
  const imageClasses = isLight ? "bg-gray-100" : "bg-white/5";
  const titleClasses = isLight ? "text-gray-900" : "text-white";
  const metadataClasses = isLight ? "text-gray-600" : "text-gray-300";
  const focusClasses = isLight ? "focus:ring-black/30" : "focus:ring-white/50";

  return (
    <article
      className={`group overflow-hidden rounded-2xl border ${cardClasses} ${
        isInteractive ? `cursor-pointer focus:outline-none focus:ring-2 ${focusClasses}` : ""
      }`}
      onClick={onClick}
      tabIndex={isInteractive ? 0 : undefined}
      onKeyDown={(event) => {
        if (isInteractive && (event.key === "Enter" || event.key === " ")) {
          event.preventDefault();
          onClick?.();
        }
      }}
    >
      <div className={`relative ${imageAspect} overflow-hidden ${imageClasses}`}>
        <ExportedImage
          src={image}
          alt={title}
          fill
          style={{ objectFit: "cover" }}
          className={enableImageZoom ? "transition-transform duration-300 ease-in-out group-hover:scale-105" : undefined}
        />

        {badge && (
          <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/65 text-white text-xs font-semibold shadow-sm backdrop-blur-sm">
            {badge}
          </div>
        )}
      </div>

      <div className="p-5">
        <h3 className={`text-lg font-semibold leading-snug ${titleClasses}`}>{title}</h3>
        {metadataText && (
          <p className={`mt-2 text-sm leading-relaxed ${metadataClasses}`}>{metadataText}</p>
        )}
      </div>
    </article>
  );
};

export default GalleryCard;
