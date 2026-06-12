"use client";
import React from "react";
import { ArtWork } from "@/types";
import GalleryCard from "./GalleryCard";

interface ClickableImageProps extends ArtWork {
  onClick: () => void;
  cardVariant?: "dark" | "light";
}

const ClickableImage: React.FC<ClickableImageProps> = ({
  image,
  sold,
  price,
  title,
  size,
  technique,
  year,
  cardVariant = "dark",
  onClick,
}) => {
  const metadata = [technique, size, year ? String(year) : ""].filter(Boolean);
  const badge = sold ? "Verkocht" : price ? "Te koop" : undefined;

  return (
    <GalleryCard
      title={title}
      image={image}
      metadata={metadata}
      badge={badge}
      imageAspect="aspect-[9/16]"
      variant={cardVariant}
      onClick={onClick}
    />
  );
};

export default ClickableImage;