import React from "react";
import ImageGrid from "@/components/ImageGrid";
import { ArtWork } from "@/types";

const projects: ArtWork[] = [
  {  title: "Irissen",
    technique: "olie op doek",
    size: "50 x 70 cm",
    year: 2026,
    image: "/assets/IMG_4960.png",
    price: "€ 275,-",
    copy: "Onder een sluier van bloesem en licht ontvouwt zich een verstilde tuin vol kleur en beweging. De speelse penseelstreken en zachte overgangen tussen turquoise, groen en violet vangen een moment van rust waarin natuur en verbeelding samensmelten. Dit werk nodigt uit om even stil te staan en weg te dromen tussen de irissen en kronkelende takken."
  },
  {  title: "Wisteria",
    technique: "olie op doek",
    size: "60 x 80 cm",
    year: 2026,
    image: "/assets/IMG_4380.jpeg",
    price: "€ 275,-",
    copy: "Een verstilde brug tussen licht en kleur, omringd door bloeiende blauweregen en weerspiegelingen die dansen op het water. Met levendige penseelstreken en een impressionistische sfeer vangt dit werk de magie van een zonnige tuin in volle bloei. Een ode aan rust, schoonheid en het vluchtige moment van harmonie in de natuur."
  },
  {  title: "Wisteria",
    technique: "olie op doek",
    size: "50 x 70 cm",
    year: 2026,
    image: "/assets/IMG_4220.jpeg",
    price: "€ 275,-",
    copy: "Een dromerig spel van licht, water en bloesem voert de kijker mee naar een verstilde wereld vol zachtheid en kleur. De sierlijke brug en hangende blauweregen creëren een bijna sprookjesachtige sfeer, terwijl de reflecties in het water het schilderij tot leven brengen. Dit werk ademt rust, verwondering en de tijdloze schoonheid van een verborgen tuin."
  },
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
    price: "€ 275,-",
    copy: "Een weelderige bos rozen en hortensia’s in diepe wijnrode en paarse tinten, omlijst door diepgroene bladeren. Het samenspel van kleur en textuur geeft het werk een rijke, warme uitstraling vol elegantie en diepte."
  },
  {
    title: "Klimroos",
    technique: "olie op doek",
    size: "50 x 70 cm",
    year: 2024,
    image: "/assets/IMG_1707.png",
    price: "€ 275,-",
    copy: "Een zachtroze klimroos ontvouwt zich sierlijk langs haar takken. De verfijnde tinten en vloeiende vormen vangen een gevoel van groei en romantiek, waarin natuurlijke elegantie en tedere kracht samenkomen."
  },
  
  {  title: "Lentetakken",
    technique: "pastelkrijt op papier",
    size: "20 x 30 cm",
    year: 2026,
    image: "/assets/IMG_4897.jpeg",
    price: "€ 50,-",
    copy: "Een lucht vol beweging en licht vormt het decor voor de sierlijke takken die zich speels uitstrekken naar de zon. Met losse, levendige lijnen en frisse kleuren vangt dit werk de energie van een zachte lentebries en het ontwaken van de natuur. Een expressief en poëtisch moment waarin eenvoud en vrijheid samenkomen."
  },
 {
    title: "Digitalis in tuin",
    technique: "pastelkrijt op papier",
    size: "20 x 30 cm",
    year: 2025,
    image: "/assets/IMG_5030.jpeg",
    price: "€ 50,-",
    copy: "Een eenzame bloem straalt kracht en zachtheid uit tegen een mysterieuze achtergrond van schaduw en licht. De intense kleuren en expressieve lijnen geven dit werk een bijna nachtelijke stilte, waarin de natuur oplicht als een verborgen juweel. Een poëtische ode aan veerkracht, groei en de schoonheid van het kleine moment."
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
    title: "Droogbloemen",
    technique: "pastelkrijt op papier",
    size: "20 x 30 cm",
    year: 2024,
    image: "/assets/IMG_1681.png",
    price: "€ 50,-",
    copy: "Dit sfeervolle pastelstilleven met gedroogde bieslook en alliums in drie vazen vormt een verstilde herinnering aan een prachtig voorjaar. De zachte texturen vangen de tijdloze schoonheid van de natuur en brengen blijvende warmte."
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