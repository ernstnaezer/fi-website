"use client";
import React from "react";
import ExportedImage from "next-image-export-optimizer";

interface ClickableImageProps {
  src: string;
  description: string;
  sold?: boolean; 
  onClick: () => void;
}

const ClickableImage: React.FC<ClickableImageProps> = ({
  src,
  description,
  sold, 
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
          src={src}
          alt={description}
          fill
          style={{ objectFit: "cover" }}
          className="rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-105"
        />
        {/* Sold banner */}
        {sold && (
          <div className="absolute top-2 left-2 px-3 py-1 bg-black bg-opacity-60 text-white text-xs font-semibold rounded-full z-10">
            Verkocht
          </div>
        )}
      </div>
      {/* Text content */}
      <div style={{ marginTop: "0.75rem" }} className="text-center">
        <p className="text-sm text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default ClickableImage;