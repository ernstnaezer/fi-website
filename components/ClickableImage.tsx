"use client";
import React from "react";
import { ArtWork } from "@/types";
import GalleryCard from "./GalleryCard";

interface ClickableImageProps extends ArtWork {
  onClick: () => void;
}

const ClickableImage: React.FC<ClickableImageProps> = ({
  image,
  sold,
  price,
  title,
  size,
  technique,
  onClick,
}) => {
  const metadata = [size, technique, price].filter((value): value is string => Boolean(value));
  const badge = sold ? "Verkocht" : undefined;

  return (
    <GalleryCard
      title={title}
      image={image}
      metadata={metadata}
      badge={badge}
      layout="compact"
      onClick={onClick}
    />
  );
};

export default ClickableImage;