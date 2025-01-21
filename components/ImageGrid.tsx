"use client";
import React from "react";
import Image from "next/image";

interface ImageGridProps {
  images: {
    description: string;
    image: string;
  }[];
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
  const uniqueClassName = `grid-${Math.random().toString(36).substring(2, 9)}`;

  const sizeStyles: Record<typeof size, string> = {
    small: "80%",
    medium: "90%",
    large: "100%",
  };

  return (
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
          <div key={index} className="flex flex-col">
            {/* Image container */}
            <div className="relative aspect-[9/16] overflow-hidden rounded-lg">
              <Image
                src={item.image}
                alt={item.description}
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
            </div>
            {/* Text content */}
            <div style={{ marginTop: "0.75rem" }} className="text-center">
              <p className="text-sm text-gray-400">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Media queries for this specific grid */}
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
              ${columns.xl ||
              columns.lg ||
              columns.md ||
              columns.sm ||
              columns.base},
              minmax(0, 1fr)
            );
          }
        }
      `}</style>
    </div>
  );
};

export default ImageGrid;
