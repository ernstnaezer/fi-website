"use client";
import React from "react";
import { displayFont } from "@/utils/fonts";

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gray-800 overflow-hidden">
      {/* Background image with refined gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center animate-zoom"
          style={{
            backgroundImage: "url('/assets/detail.png')",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-transparent h-[33vh]"></div>
      </div>

      {/* Content */}
      <div className="relative flex flex-col justify-between min-h-screen text-[#F5F2ED] font-telegraf">
        {/* Name and Title */}
        <div className="p-6 md:p-10">
          <h2
            className={`${displayFont.className} text-sm md:text-xl font-light m-0`}
          >
            Fi Naezer
          </h2>
          <h1
            className={`${displayFont.className} text-4xl md:text-6xl font-bold m-0 leading-tight -ml-1`}
          >
            Bloemen schilderijen
          </h1>
        </div>

        {/* Button */}
        <div className="flex justify-center mb-24">
          <button
            onClick={() => {
              const projectsSection = document.getElementById("projects");
              if (projectsSection) {
                projectsSection.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }
            }}
            className="px-16 py-4 bg-white text-black text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            Ontdek
          </button>
        </div>
      </div>

      {/* Scoped CSS */}
      <style jsx>{`
        @keyframes zoom {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.1);
          }
        }

        .animate-zoom {
          animation: zoom 5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Hero;
