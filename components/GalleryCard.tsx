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
  layout?: "vertical" | "compact";
}

const GalleryCard: React.FC<GalleryCardProps> = ({
  title,
  image,
  metadata,
  badge,
  onClick,
  imageAspect = "aspect-[4/5]",
  enableImageZoom = false,
  layout = "vertical",
}) => {
  const isCompact = layout === "compact";

  return (
    <article
      className={`group relative h-full border border-line bg-pearl text-ink ${
        isCompact ? "flex items-center gap-4 p-4" : "flex flex-col"
      } ${onClick ? "transition-colors hover:border-sage" : ""}`}
    >
      <div
        className={`relative flex-shrink-0 bg-salt ${
          isCompact ? "h-36 w-24" : `${imageAspect} w-full`
        }`}
      >
        <ExportedImage
          src={image}
          alt={title}
          fill
          sizes={isCompact ? "96px" : "(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"}
          style={{ objectFit: "contain" }}
          className={`${isCompact ? "p-1" : "p-4"} ${
            enableImageZoom
              ? "motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:scale-[1.02]"
              : ""
          }`}
        />
      </div>

      <div className={`min-w-0 ${isCompact ? "py-1" : "p-5"}`}>
        <h3 className="break-words text-xl leading-snug">{title}</h3>
        {metadata.some(Boolean) && (
          <ul className="mt-2 space-y-1 text-sm leading-relaxed text-muted">
            {metadata.filter(Boolean).map((item, index) => (
              <li key={`${item}-${index}`} className={isCompact ? "last:text-ink last:font-medium" : undefined}>
                {item}
              </li>
            ))}
          </ul>
        )}
        {badge && (
          <p className="mt-3 inline-block border border-line bg-salt px-2 py-1 text-xs font-medium text-ink">
            {badge}
          </p>
        )}
      </div>

      {onClick && (
        <button
          type="button"
          onClick={onClick}
          aria-label={`Bekijk ${title}`}
          aria-haspopup="dialog"
          className="absolute inset-0 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sage"
        />
      )}
    </article>
  );
};


export default GalleryCard;
