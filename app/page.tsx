import Hero from "@/sections/hero";
import Overview from "@/sections/overview";
import Contact from "@/sections/contact";
import CustomWork from "@/sections/customwork";
import Kinderkamer from "@/sections/kinderkamer";

export default function HomePage() {
  return (
    <main id="main-content">
      <Hero />
      <div className="site-container">
        <ul className="flex flex-col gap-3 border-y border-line py-5 text-xs sm:flex-row sm:justify-between sm:gap-6 md:text-sm">
          <li><span className="mr-2 text-clay" aria-hidden="true">✓</span> Voor de huiskamer én de kinderkamer</li>
          <li><span className="mr-2 text-clay" aria-hidden="true">✓</span> Je hoeft niets van kunst te weten</li>
          <li><span className="mr-2 text-clay" aria-hidden="true">✓</span> Je weet vooraf wat het kost</li>
        </ul>
      </div>
      <Kinderkamer />
      <Overview />
      <Contact />
      <CustomWork />
    </main>
  );
}
