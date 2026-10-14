import type { Metadata } from "next";
import ExportedImage from "next-image-export-optimizer";
import GalleryCard from "@/components/GalleryCard";
import KinderkamerContactSection from "@/components/KinderkamerContactSection";

export const metadata: Metadata = {
  title: "Een schilderij voor de kinderkamer — Fi Naezer",
  description:
    "Een schilderij voor de kinderkamer, speciaal voor jouw kind gemaakt. Kies het onderwerp en de kleuren. 40 × 40 cm voor €75. Ook te geven met een cadeaubon.",
  alternates: {
    canonical: "/kinderkamer",
  },
  openGraph: {
    title: "Een schilderij voor de kinderkamer — Fi Naezer",
    description:
      "Een schilderij voor de kinderkamer, speciaal voor jouw kind gemaakt. Kies het onderwerp en de kleuren. 40 × 40 cm voor €75. Ook te geven met een cadeaubon.",
    url: "/kinderkamer",
    siteName: "Fi Naezer",
    locale: "nl_NL",
    type: "website",
    images: [
      {
        url: "/og-kinderkamer-b3d69b7a15.jpg",
        width: 1200,
        height: 630,
        alt: "Fi Naezer — kinderkamerschilderijen met een koala en een aapje",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Een schilderij voor de kinderkamer — Fi Naezer",
    description:
      "Een schilderij voor de kinderkamer, speciaal voor jouw kind gemaakt. Kies het onderwerp en de kleuren. 40 × 40 cm voor €75. Ook te geven met een cadeaubon.",
    images: ["/og-kinderkamer-b3d69b7a15.jpg"],
  },
};

interface KinderkamerItem {
  title: string;
  date: string;
  image: string;
}

const showcaseItems: KinderkamerItem[] = [
  {
    title: "Vuurpaard voor Sam",
    date: "Juli 2026",
    image: "/assets/custom-kinderkamer-1.jpeg",
  },
  {
    title: "Koalabeer voor Laurie",
    date: "Juli 2026",
    image: "/assets/custom-kinderkamer-3.jpeg",
  },
  {
    title: "Aapje voor Rafi",
    date: "Juli 2026",
    image: "/assets/custom-kinderkamer-4.jpeg",
  },
  {
    title: "Poes en vis voor Emiel",
    date: "Mei 2023",
    image: "/assets/custom-kinderkamer-2.jpeg",
  }
];


export default function KinderkamerPage() {
  return (
    <main id="main-content" className="bg-pearl text-ink">
      <section className="site-container section-space grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="eyebrow">Kinderkamerschilderijen</p>
          <h1 className="mt-5 max-w-xl text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
            Een eigen wereldje aan de muur.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
            Een aapje, een koala of een lievelingsdier. Ik schilder iets dat past
            bij de kamer van je kind, met de kleuren en het onderwerp die jullie
            mooi vinden.
          </p>
          <div className="mt-7 max-w-lg">
            <p className="font-display text-2xl leading-snug sm:text-3xl">
              Voor €75 maak ik een schilderij,<br />
              speciaal voor jouw kind.
            </p>
            <p className="mt-3 text-sm text-muted">40 × 40 cm · vaste prijs</p>
          </div>
          <div className="mt-8 flex flex-col items-start gap-5">
            <a href="#aanvraag" className="button button-secondary">
              Laat iets voor je kind maken <span aria-hidden="true">→</span>
            </a>
            <p className="text-sm text-muted">
              Leuk als kraamcadeau:{" "}
              <a href="#cadeaubon" className="text-link text-ink">
                geef een cadeaubon <span aria-hidden="true">→</span>
              </a>
            </p>
          </div>
        </div>

        <div className="bg-salt p-5 sm:p-8">
          <p className="eyebrow mb-6">Al eerder gemaakt</p>
          <div className="grid grid-cols-2 items-center gap-4 sm:gap-6">
            <figure>
              <ExportedImage
                src="/assets/custom-kinderkamer-3.jpeg"
                alt="Een koala met een saxofoon, geschilderd voor Laurie"
                width={1291}
                height={1600}
                sizes="(max-width: 640px) 40vw, (max-width: 1024px) 42vw, 22vw"
                priority
                className="h-auto w-full object-contain"
              />
              <figcaption className="mt-3 text-center text-xs leading-relaxed text-muted sm:text-sm">
                Koalabeer voor Laurie
              </figcaption>
            </figure>
            <figure className="pt-8">
              <ExportedImage
                src="/assets/custom-kinderkamer-4.jpeg"
                alt="Een aapje aan een tak, geschilderd voor Rafi"
                width={1560}
                height={1600}
                sizes="(max-width: 640px) 40vw, (max-width: 1024px) 42vw, 22vw"
                className="h-auto w-full object-contain"
              />
              <figcaption className="mt-3 text-center text-xs leading-relaxed text-muted sm:text-sm">
                Aapje voor Rafi
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="site-container section-space border-t border-line" aria-labelledby="voorbeelden-heading">
        <div className="mb-8 max-w-2xl">
          <p className="eyebrow">Een paar voorbeelden</p>
          <h2 id="voorbeelden-heading" className="mt-3 text-3xl sm:text-4xl lg:text-5xl">
            Voor ieder kind iets eigens.
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            Deze schilderijen maakte ik al voor andere kinderen. Ze zijn niet te
            koop, maar laten zien wat er mogelijk is. Voor jou maak ik een nieuw
            schilderij.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {showcaseItems.map((item) => (
            <GalleryCard
              key={`${item.title}-${item.date}`}
              title={item.title}
              image={item.image}
              metadata={[item.date]}
              badge="Eerder gemaakt"
              imageAspect="aspect-[4/5]"
            />
          ))}
        </div>
      </section>

      <KinderkamerContactSection />
    </main>
  );
}
