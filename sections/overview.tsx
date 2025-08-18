import React from "react";
import ImageGrid from "@/components/ImageGrid";

const projects = [
  {
    description: "Engelse roos, olie op doek 40 x 50 cm, 2024",
    image: "/assets/IMG_1249.png",
  },
  {
    description: "Rozen en hortentias, olie op doek 50 x 60 cm, 2024",
    image: "/assets/IMG_2488.png",
  },
  {
    description: "Klimroos, olie op doek 50 x 70 cm, 2024",
    image: "/assets/IMG_1707.png",
  },
  {
    description: "Zonnebloemen stilleven, olie op doek 40 x 50 cm, 2025",
    image: "/assets/IMG_3200.png",
  },  
  {
    description: "Droogbloemen, pastelkrijt op papier 20 x 30 cm, 2024",
    image: "/assets/IMG_2210.png",
    sold: true,
  },
  {
    description: "Zonnebloemen in vaas, pastelkrijt op papier 20 x 30 cm, 2025",
    image: "/assets/IMG_3349.png",
  },
  {
    description: "Engelse roos, pastelkrijt op papier 20 x 30 cm, 2024",
    image: "/assets/IMG_2185.png",
    sold: true,
  },
  {
    description: "Iris in tuin, pastelkrijt op papier 20 x 30 cm, 2025",
    image: "/assets/IMG_2684.png",
  },
  {
    description: "Dahlias (Pink petticoat) in tuin, pastelkrijt op papier 20 x 30 cm, 2025",
    image: "/assets/IMG_3432.png",
    sold: true,
  },
  {
    description: "Cosmea in tuin, pastelkrijt op papier 20 x 30 cm, 2025",
    image: "/assets/IMG_3441.png",
    sold: true,
  },
  {
    description: "Droogbloemen, pastelkrijt op papier 20 x 30 cm, 2024",
    image: "/assets/IMG_1681.png",
  },
  {
    description: "Pompoen en sinasappels, pastelkrijt op papier 20 x 30 cm, 2024",
    image: "/assets/IMG_3433.png",
  },
];

const Overview: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white py-10 px-6 flex flex-col items-center">
      <ImageGrid
        images={projects}
        columns={{ base: 2, md: 3, lg: 3, sm: 2 }}
        size="large"
      />
    </div>
  );
};

export default Overview;
