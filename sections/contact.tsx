import React from "react";
import FiImage from "@/public/assets/Fi.png";
import ExportedImage from "next-image-export-optimizer";

const ContactPage: React.FC = () => {
  return (
    <div className="bg-white text-black px-6 md:px-20 py-10">

      {/* Content Section */}
      <div className="relative mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Image Section */}
        <div className="relative w-full max-w-lg mx-auto">
          <ExportedImage
            src={FiImage}
            alt="Fi Naezer"
            width={600}
            height={600}
            className="rounded-lg object-cover w-full h-auto"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
          />
        </div>

        {/* Text Section */}
        <div className="text-lg leading-relaxed">
          <h2 className="text-2xl font-bold mb-4">Over Mij</h2>
          <p>
            Mijn naam is Fi Naezer en ik hou van tekenen en schilderen. Al vanaf
            mijn jeugd ben ik dol op kunst. Op school maakte ik graag
            wenskaarten, posters, tekeningen voor de klas, en greep ik elk
            moment aan om mijn omgeving mooier te maken met mijn creaties. Die
            passie draag ik nog steeds bij me.
          </p>
          <p className="mt-4">
            Ik ben geïnspireerd door beroemde kunstenaars zoals Monet, Van Gogh
            en Escher, en experimenteer graag met verschillende technieken en
            materialen: olieverf, aquarel, pastel, acryl, batik, en meer.
          </p>
          <p className="mt-4">
            Naast kunst ben ik dol op de natuur en tuinieren. Veel van mijn
            werken zijn geïnspireerd door bloemen die ik zelf in mijn tuin
            kweek. Voor mij is dit de perfecte manier om mijn twee passies te
            combineren.
          </p>

          {/* Contact Information */}
          <div className="mt-10">
            <div className="flex flex-col space-y-2">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
