"use client";
import React from "react";
import ExportedImage from "next-image-export-optimizer";

interface ClickableImageProps {
  src: string;
  description: string;
  onClick: () => void;
}

const ClickableImage: React.FC<ClickableImageProps> = ({
  src,
  description,
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
      </div>
      {/* Text content */}
      <div style={{ marginTop: "0.75rem" }} className="text-center">
        <p className="text-sm text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default ClickableImage;