"use client";

import React, { useState, useId, useEffect } from "react";
import ClickableImage from "./ClickableImage";
import ImageOverlay from "./ImageOverlay";

// Define the shape of a single image item
interface ImageItem {
  description: string;
  image: string;
  sold?: boolean; // Optional property to indicate if the work is sold
}

// Define the props for the ImageGrid component
interface ImageGridProps {
  images: ImageItem[];
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
  images,
  columns,
  size = "medium",
  gap = 1.5,
}) => {
  // State to track the currently selected image for the overlay. Null means overlay is hidden.
  const [selectedImage, setSelectedImage] = useState<ImageItem | null>(null);
  
  const uniqueClassName = `grid-${useId().replace(/:/g, "")}`;

  // Effect to block and restore body scrolling when the overlay is active.
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

  const handleImageClick = (image: ImageItem) => {
    setSelectedImage(image);
  };

  const handleCloseOverlay = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div
        className="w-full mx-auto px-4 py-6"
        style={{
          maxWidth: sizeStyles[size],
        }}
      >
        <div
          className={`grid ${uniqueClassName}`}
          style={{
            gap: `${gap}rem`,
          }}
        >
          {images.map((item, index) => (
            <ClickableImage
              key={index}
              src={item.image}
              description={item.description}
              sold={item.sold}
              onClick={() => handleImageClick(item)}
            />
          ))}
        </div>

        {/* Scoped CSS for responsive grid columns */}
        <style jsx>{`
          .${uniqueClassName} {
            grid-template-columns: repeat(${columns.base}, minmax(0, 1fr));
          }
          @media (min-width: 640px) {
            .${uniqueClassName} {
              grid-template-columns: repeat(
                ${columns.sm || columns.base},
                minmax(0, 1fr)
              );
            }
          }
          @media (min-width: 768px) {
            .${uniqueClassName} {
              grid-template-columns: repeat(
                ${columns.md || columns.sm || columns.base},
                minmax(0, 1fr)
              );
            }
          }
          @media (min-width: 1024px) {
            .${uniqueClassName} {
              grid-template-columns: repeat(
                ${columns.lg || columns.md || columns.sm || columns.base},
                minmax(0, 1fr)
              );
            }
          }
          @media (min-width: 1280px) {
            .${uniqueClassName} {
              grid-template-columns: repeat(
                ${
                  columns.xl ||
                  columns.lg ||
                  columns.md ||
                  columns.sm ||
                  columns.base
                },
                minmax(0, 1fr)
              );
            }
          }
        `}</style>
      </div>

      {/* Conditionally render the overlay only when an image is selected */}
      {selectedImage && (
        <ImageOverlay
          src={selectedImage.image}
          alt={selectedImage.description}
          onClose={handleCloseOverlay}
        />
      )}
    </>
  );
};

export default ImageGrid;