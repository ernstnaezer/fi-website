import React from "react";
import ImageGrid from "@/components/ImageGrid"; // Update the path as needed

const CustomWork: React.FC = () => {
  const examples = [
    {
      description: "Ijsvogel, acryl op doek 30 x 40 cm, 2021",
      image: "/assets/custom-work-1.jpeg",
    },
    {
      description: "Ijsvogel aan de muur",
      image: "/assets/custom-work-1-wall.png",
    },
    {
      description: "Zonnebloem met vlinders, olie op doek 50 x 70 cm, 2024",
      image: "/assets/custom-work-2.jpeg",
    },
    {
      description: "Zonnebloem met vlinders aan de muur",
      image: "/assets/custom-work-2-wall.jpeg",
    },
  ];

  return (
    <div className="bg-gray-100 text-black px-6 md:px-20 py-10">
      {/* Title */}
      <div className="text-left">
        <h1 className="text-4xl md:text-6xl font-bold">
          Kunstwerken laten maken
        </h1>
      </div>

      {/* Description */}
      <div className="mt-6 text-lg leading-relaxed">
        <p>
          Je kan ook ervoor kiezen om een kunstwerk speciaal voor jou te laten
          maken. Iets wat je aanspreekt en niet direct tussen mijn kunstwerken
          zit. Ook hier stuur je een mailtje naar{" "}
          <a href="mailto:info@finaezer.nl" className="text-red-500 underline">
            info@finaezer.nl
          </a>{" "}
          met je wensen en eerste ideeën.
        </p>
        <p className="mt-4">
          Een opdracht is vaak een langer proces waar ik graag de tijd neem om
          je wens te begrijpen en een kunstwerk te maken dat je graag in je huis
          wilt hangen. We spreken een prijs en levertijd vooraf af zodat we
          allebei weten waar we aan toe zijn.
        </p>
      </div>

      {/* Samples Section */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Voorgaande opdrachten
        </h2>
        <div className="flex flex-wrap justify-center">
          <ImageGrid
            images={examples}
            columns={{ base: 2, md: 2, lg: 4, sm: 2 }}
            size="small"
          />
        </div>
      </div>
    </div>
  );
};

export default CustomWork;
