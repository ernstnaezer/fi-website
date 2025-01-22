import React from "react";
import FiImage from "@/public/assets/Fi.png";
import ExportedImage from "next-image-export-optimizer";

const ContactPage: React.FC = () => {
  return (
    <div className="bg-white text-black px-6 md:px-20 py-10">
      {/* Title */}
      <div className="text-left">
        <h1 className="text-4xl md:text-6xl font-bold">Contact</h1>
      </div>

      {/* About Me Section */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Image Section */}
        <div className="relative w-full h-80 md:h-auto flex items-center justify-center">
          <ExportedImage
            src={FiImage}
            alt="Fi Naezer"
            className="rounded-lg object-cover max-w-full h-full"
            fill // Ensures the image fills its container
            style={{
              objectFit: "cover", // Ensures it covers the container properly
            }}
          />
        </div>

        {/* Text Section */}
        <div>
          <div className="text-lg leading-relaxed">
            <h2 className="text-2xl font-bold mb-4">Over Mij</h2>
            <p>
              Mijn naam is Fi Naezer en ik hou van tekenen en schilderen. Al
              vanaf mijn jeugd ben ik dol op kunst. Op school maakte ik graag
              wenskaarten, posters, tekeningen voor de klas, en greep ik elk
              moment aan om mijn omgeving mooier te maken met mijn creaties. Die
              passie draag ik nog steeds bij me.
            </p>
            <p className="mt-4">
              Ik ben geïnspireerd door beroemde kunstenaars zoals Monet, Van
              Gogh en Escher, en experimenteer graag met verschillende
              technieken en materialen: olieverf, aquarel, pastel, acryl, batik,
              en meer.
            </p>
            <p className="mt-4">
              Naast kunst ben ik dol op de natuur en tuinieren. Veel van mijn
              werken zijn geïnspireerd door bloemen die ik zelf in mijn tuin
              kweek. Voor mij is dit de perfecte manier om mijn twee passies te
              combineren.
            </p>
            <p className="mt-4">
              De kunstwerken hierboven zijn te koop. Stuur me een{" "}
              <a
                href="mailto:info@finaezer.nl"
                className="text-red-500 underline"
              >
                mailtje
              </a>
              , en ik neem contact met je op.
            </p>
          </div>

          {/* Contact Information */}
          <div className="mt-10">
            <div className="flex flex-col space-y-6">
              <div>
                <h3 className="text-lg font-bold mb-2">Social Media</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="http://instagram.com/finaezerart"
                      className="text-red-500 underline"
                    >
                      Instagram
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">E-mail</h3>
                <p className="text-lg font-light">
                  <a
                    href="mailto:info@finaezer.nl"
                    className="text-red-500 underline"
                  >
                    info@finaezer.nl
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
