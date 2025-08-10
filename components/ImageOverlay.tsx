"use client";
import React, { useEffect } from "react";
import ExportedImage from "next-image-export-optimizer";

interface ImageOverlayProps {
  src: string;
  alt: string;
  onClose: () => void;
}

const ImageOverlay: React.FC<ImageOverlayProps> = ({ src, alt, onClose }) => {

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
    // The modal backdrop
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-95 cursor-pointer"
      onClick={onClose}
    >
      {/* Close button in the top-right corner */}
      <button
        className="absolute top-4 right-4 text-white text-3xl z-50"
        aria-label="Close image view"
      >
        &times;
      </button>

      {/* Image container */}
      <div
        className="relative w-[90vw] h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <ExportedImage
          src={src}
          alt={alt}
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
    </div>
  );
};

export default ImageOverlay;