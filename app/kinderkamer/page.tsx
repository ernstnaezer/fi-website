import type { Metadata } from "next";
import Link from "next/link";
import { displayFont } from "@/utils/fonts";
import GalleryCard from "@/components/GalleryCard";
import KinderkamerContactSection from "@/components/KinderkamerContactSection";

export const metadata: Metadata = {
  title: "Kinderkamer schilderijen — Fi Naezer",
  description:
    "Op aanvraag gemaakte schilderijen voor kinderkamers, afgestemd op sfeer en kleuren. Vaste prijs: 75 euro per stuk.",
  alternates: {
    canonical: "/kinderkamer",
  },
  openGraph: {
    title: "Kinderkamer schilderijen — Fi Naezer",
    description:
      "Op aanvraag gemaakte schilderijen voor kinderkamers, afgestemd op sfeer en kleuren. Vaste prijs: 75 euro per stuk.",
    url: "/kinderkamer",
    siteName: "Fi Naezer",
    locale: "nl_NL",
    type: "website",
    images: [
      {
        url: "/og-image-kinderkamer.jpg",
        width: 1200,
        height: 630,
        alt: "Kinderkamer schilderijen door Fi Naezer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kinderkamer schilderijen — Fi Naezer",
    description:
      "Op aanvraag gemaakte schilderijen voor kinderkamers, afgestemd op sfeer en kleuren. Vaste prijs: 75 euro per stuk.",
    images: ["/og-image-kinderkamer.jpg"],
  },
};

interface KinderkamerItem {
  title: string;
  size: string;
  date: string;
  image: string;
}

const showcaseItems: KinderkamerItem[] = [
  {
    title: "Vuurpaard voor Sam",
    size: "40 x 40 cm",
    date: "Juni 2026",
    image: "/assets/custom-kinderkamer-1.jpeg",
  },
  {
    title: "Poes en vis voor Emiel",
    size: "50 x 50 cm",
    date: "Mei 2023",
    image: "/assets/custom-kinderkamer-2.jpeg",
  },
  {
    title: "Pikachu voor Emiel",
    size: "20 x 20 cm",
    date: "Augustus 2024",
    image: "/assets/custom-kinderkamer-3.jpeg",
  },
];


export default function KinderkamerPage() {
  return (
    <main className="bg-[#F5F2ED] text-black min-h-screen">
      <section className="relative overflow-hidden bg-gray-900 text-[#F5F2ED] px-6 md:px-12 py-16 md:py-24">
        <div className="absolute inset-0 opacity-25">
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40" />

        <div className="relative max-w-6xl mx-auto">
          <p className="uppercase tracking-[0.25em] text-xs md:text-sm text-[#EBDCC7] mb-3">
            Kinderkamer collectie
          </p>
          <h1 className={`${displayFont.className} text-4xl md:text-6xl font-bold leading-tight max-w-4xl`}>
            Schilderijen voor kinderkamers
          </h1>
          <p className="mt-6 text-lg md:text-2xl max-w-3xl text-[#F5F2ED]/90 leading-relaxed">
            Elke kinderkamer verdient een mooi schilderij. Ik maak deze op aanvraag, persoonlijk en afgestemd op de sfeer en kleuren van de kamer. Perfect als origineel cadeau of om je eigen kinderkamer te verrijken. Voor een vaste prijs van 75 euro per stuk.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#aanvraag"
              className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-100 transition"
            >
              Start je aanvraag of geef een cadeaubon
            </a>
          </div>
        </div>
        
      </section>

      <section className="bg-gray-900 text-white px-6 md:px-12 py-14 md:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-10">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Voorgaande opdrachten</h2>
              <p className="mt-3 text-gray-300 text-lg">Een selectie van eerder gemaakte werken.</p>
            </div>
            <p className="text-sm uppercase tracking-[0.2em] text-gray-400">Alleen op commissie</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {showcaseItems.map((item) => (
              <GalleryCard
                key={`${item.title}-${item.date}`}
                title={item.title}
                image={item.image}
                metadata={[`Formaat: ${item.size}`, `Datum: ${item.date}`]}
                imageAspect="aspect-[9/16]"
              />
            ))}
          </div>
        </div>
      </section>

      <div id="aanvraag">
        <KinderkamerContactSection />
      </div>

      <footer className="bg-white border-t border-gray-200 px-6 py-6 text-center text-sm text-gray-500">
        <Link href="/" className="hover:text-black transition">
          ← Terug naar finaezer.nl
        </Link>
      </footer>
    </main>
  );
}
