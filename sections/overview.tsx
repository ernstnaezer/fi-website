import React from "react";
import Link from "next/link";
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

const Overview: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white px-6 md:px-12 py-14 md:py-20">    
      <div className="max-w-6xl mx-auto">

        <div className="w-full mb-10 p-6 md:p-8 rounded-2xl bg-white/[0.06] border border-white/10 shadow-lg shadow-black/20 md:mb-20">
        <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-gray-300">Nieuw</p>
            <h2 className="text-3xl md:text-4xl font-bold mt-1">Schilderij voor je kinderkamer 🧸</h2>
            <p className="text-gray-200 mt-2 max-w-2xl">
              Elke kinderkamer verdient een mooi schilderij. Ik maak deze op aanvraag, persoonlijk en afgestemd op de sfeer en kleuren van de kamer. Perfect als origineel cadeau of om je eigen kinderkamer te verrijken. Voor een vaste prijs van 75 euro per stuk.
            </p>
          </div>
          <Link
            href="/kinderkamer"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition"
          >
            Naar kinderkamer
          </Link>
        </div>
      </div>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-10">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Beschikbare kunstwerken</h2>
            <p className="mt-3 text-gray-300 text-lg">
              Originele werken die direct te koop zijn. Klik op een werk voor formaat, prijs en reservering.
            </p>
          </div>
          <p className="text-sm uppercase tracking-[0.2em] text-gray-400">Losse werken</p>
        </div>

      <ImageGrid
        projects={projects}
        columns={{ base: 2, md: 3, lg: 3, sm: 2 }}
        size="large"
      />
      </div>
    </div>
  );
};

export default Overview;