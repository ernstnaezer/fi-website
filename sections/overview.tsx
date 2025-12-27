import React from "react";
import ImageGrid from "@/components/ImageGrid";
import { ArtWork } from "@/types";

const projects: ArtWork[] = [
  {
    title: "Engelse roos",
    technique: "olie op doek",
    size: "40 x 50 cm",
    year: 2024,
    image: "/assets/IMG_1249.png",
    copy: "Een Engelse theeroos in zacht lichtroze straalt stille elegantie uit. Met verfijnde penseelstreken en subtiel licht wordt haar delicate schoonheid vastgelegd, een tijdloos symbool van sereniteit en zachtheid.",
    price: "€ 275,-",
  },
  {
    title: "Rozen en hortentias",
    technique: "olie op doek",
    size: "50 x 60 cm",
    year: 2024,
    image: "/assets/IMG_2488.png",
    price: "€ 300,-",
    copy: "Een weelderige bos rozen en hortensia’s in diepe wijnrode en paarse tinten, omlijst door diepgroene bladeren. Het samenspel van kleur en textuur geeft het werk een rijke, warme uitstraling vol elegantie en diepte."
  },
  {
    title: "Klimroos",
    technique: "olie op doek",
    size: "50 x 70 cm",
    year: 2024,
    image: "/assets/IMG_1707.png",
    price: "€ 300,-",
    copy: "Een zachtroze klimroos ontvouwt zich sierlijk langs haar takken. De verfijnde tinten en vloeiende vormen vangen een gevoel van groei en romantiek, waarin natuurlijke elegantie en tedere kracht samenkomen."
  },
  {
    title: "Zonnebloemen stilleven",
    technique: "olie op doek",
    size: "40 x 50 cm",
    year: 2025,
    image: "/assets/IMG_3200.png",
    price: "€ 150,-",
    copy: "Een klassiek stilleven met stralende zonnebloemen in een vaas, gecombineerd met een schaaltje perziken en abrikozen. Tegen de donkerbruine achtergrond komen warmte, overvloed en een tijdloze, schilderachtige rust samen."
  },
  {
    title: "Droogbloemen",
    technique: "pastelkrijt op papier",
    size: "20 x 30 cm",
    year: 2024,
    image: "/assets/IMG_2210.png",
    sold: true,
    copy: "Verkocht op de kunstmarkt in Bergen 2025"
  },
  {
    title: "Zonnebloemen in vaas",
    technique: "pastelkrijt op papier",
    size: "20 x 30 cm",
    year: 2025,
    image: "/assets/IMG_3349.png",
    price: "€ 50,-",
    copy: "Een pastelkrijttekening van een vaas met zonnebloemen en delphiniums. Zachte kleurovergangen en losse lijnen geven het werk een lichte, levendige uitstraling, waarin kracht en verfijning elkaar op harmonieuze wijze ontmoeten."
  },
  {
    title: "Engelse roos",
    technique: "pastelkrijt op papier",
    size: "20 x 30 cm",
    year: 2024,
    image: "/assets/IMG_2185.png",
    sold: true,
    copy: "Verkocht op de kunstmarkt in Bergen 2025"
  },
  {
    title: "Iris in tuin",
    technique: "pastelkrijt op papier",
    size: "20 x 30 cm",
    year: 2025,
    image: "/assets/IMG_2684.png",
    price: "€ 50,-",
    copy: "Een verstilde tuin met witte irissen, omlijst door strak geknipte groene hagen. In de achtergrond zorgen lavendeltonen voor diepte en zachtheid, terwijl het geheel een sfeer van rust, orde en natuurlijke elegantie ademt."
  },
  {
    title: "Dahlias (Pink petticoat) in tuin",
    technique: "pastelkrijt op papier",
    size: "20 x 30 cm",
    year: 2025,
    image: "/assets/IMG_3432.png",
    sold: true,
    copy: "Verkocht op de kunstmarkt in Bergen 2025"
  },
  {
    title: "Cosmea in tuin",
    technique: "pastelkrijt op papier",
    size: "20 x 30 cm",
    year: 2025,
    image: "/assets/IMG_3441.png",
    sold: true,
    copy: "Verkocht op de kunstmarkt in Bergen 2025"
  },
  {
    title: "Zonnebloemen in tuin",
    technique: "pastelkrijt op papier",
    size: "20 x 30 cm",
    year: 2025,
    image: "/assets/IMG_3758.png",
    price: "€ 50,-",
    copy: "Deze droomachtige pasteltekeningen vangen de stralende energie van reusachtige zonnebloemen uit de zomertuin. Met zachte kleurvlakken en subtiele texturen brengt dit kunstwerk de warme gloed en de pure schoonheid van de natuur bij u binnen."
  },
  {
    title: "Dahlias in vaas",
    technique: "pastelkrijt op papier",
    size: "20 x 30 cm",
    year: 2025,
    image: "/assets/IMG_3890.png",
    price: "€ 50,-",
    copy: "Deze zachte pasteltekening viert de romantische Dahlia ‘Pink Petticoat’ uit eigen tuin. De verfijnde, zachtroze tinten en fluweelzachte details brengen een serene, zomerse sfeer en een vleugje natuurlijke elegantie direct in uw interieur."
  },
  {
    title: "Droogbloemen",
    technique: "pastelkrijt op papier",
    size: "20 x 30 cm",
    year: 2024,
    image: "/assets/IMG_1681.png",
    price: "€ 50,-",
    copy: "Dit sfeervolle pastelstilleven met gedroogde bieslook en alliums in drie vazen vormt een verstilde herinnering aan een prachtig voorjaar. De zachte texturen vangen de tijdloze schoonheid van de natuur en brengen blijvende warmte."
  },
];

console.log(projects);

const Overview: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white py-10 px-6 flex flex-col items-center">
      <ImageGrid
        projects={projects}
        columns={{ base: 2, md: 3, lg: 3, sm: 2 }}
        size="large"
      />
    </div>
  );
};

export default Overview;