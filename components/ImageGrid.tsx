"use client";

import React, { useState } from "react";
import ClickableImage from "./ClickableImage";
import ImageOverlay from "./ImageOverlay";
import { ArtWork } from "@/types";

interface ImageGridProps {
  projects: ArtWork[];
}

const ImageGrid: React.FC<ImageGridProps> = ({ projects }) => {
  const [selectedImage, setSelectedImage] = useState<ArtWork | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((item) => (
          <ClickableImage
            key={item.image}
            {...item}
            onClick={() => setSelectedImage(item)}
          />
        ))}
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