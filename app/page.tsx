"use client";
import React from "react";
import dynamic from "next/dynamic";

import Hero from "@/sections/hero";
import GridOverview from "@/sections/overview";
import Contact from "@/sections/contact";
import CustomWork from "@/sections/customwork";

const HomePage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section id="hero">
        <Hero />
      </section>

      {/* Grid Overview Section */}
      <section id="projects">
        <GridOverview />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>

      {/* Custom Work Section */}
      <section id="custom-work">
        <CustomWork />
      </section>
    </div>
  );
};

export default dynamic(() => Promise.resolve(HomePage), {
  ssr: false,
});

// export default HomePage;
