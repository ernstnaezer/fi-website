import React from "react";
import ImageGrid from "@/components/ImageGrid";

const projects = [
  {
    description: "Olie op doek 70 x 50 cm, 2023",
    image: "/assets/IMG_1249.png",
  },
  {
    description: "Olie op doek 70 x 50 cm, 2023",
    image: "/assets/IMG_2488.png",
  },
  {
    description: "Olie op doek 70 x 50 cm, 2023",
    image: "/assets/IMG_1707.png",
  },
  {
    description: "Pastelkrijt op papier 50 x 40 cm, 2023",
    image: "/assets/IMG_1681.png",
  },
  {
    description: "Pastelkrijt op papier 50 x 40 cm, 2023",
    image: "/assets/IMG_2185.png",
  },
  {
    description: "Pastelkrijt op papier 50 x 40 cm, 2023",
    image: "/assets/IMG_2210.png",
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
