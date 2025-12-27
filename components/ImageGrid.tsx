"use client";

import React, { useState, useId, useEffect } from "react";
import ClickableImage from "./ClickableImage";
import ImageOverlay from "./ImageOverlay";
import { ArtWork } from "@/types";

interface ImageGridProps {
  projects: ArtWork[];
  columns: {
    base: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  size?: "small" | "medium" | "large";
  gap?: number;
}

const ImageGrid: React.FC<ImageGridProps> = ({
  projects,
  columns,
  size = "medium",
  gap = 1.5,
}) => {
  const [selectedImage, setSelectedImage] = useState<ArtWork | null>(null);
  const uniqueClassName = `grid-${useId().replace(/:/g, "")}`;

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedImage]);

  const sizeStyles: Record<typeof size, string> = {
    small: "80%",
    medium: "90%",
    large: "100%",
  };

  return (
    <>
      <div
        className="w-full mx-auto px-4 py-6"
        style={{ maxWidth: sizeStyles[size] }}
      >
        <div className={`grid ${uniqueClassName}`} style={{ gap: `${gap}rem` }}>
          {projects?.map((item, index) => (
            <ClickableImage
              key={index}
              {...item}
              onClick={() => setSelectedImage(item)}
            />
          ))}
        </div>

        {/* CSS for grid columns (kept same as your original file) */}
        <style jsx>{`
          .${uniqueClassName} {
            grid-template-columns: repeat(${columns.base}, minmax(0, 1fr));
          }
          @media (min-width: 640px) {
            .${uniqueClassName} {
              grid-template-columns: repeat(${columns.sm || columns.base}, minmax(0, 1fr));
            }
          }
          @media (min-width: 768px) {
            .${uniqueClassName} {
              grid-template-columns: repeat(${columns.md || columns.sm || columns.base}, minmax(0, 1fr));
            }
          }
          @media (min-width: 1024px) {
            .${uniqueClassName} {
              grid-template-columns: repeat(${columns.lg || columns.md || columns.sm || columns.base}, minmax(0, 1fr));
            }
          }
          @media (min-width: 1280px) {
            .${uniqueClassName} {
              grid-template-columns: repeat(${columns.xl || columns.lg || columns.md || columns.sm || columns.base}, minmax(0, 1fr));
            }
          }
        `}</style>
      </div>

      {selectedImage && (
        <ImageOverlay
          {...selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </>
  );
};

export default ImageGrid;