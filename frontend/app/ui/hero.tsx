"use client";
import CheckIsHome from "../lib/check-pathname";

const baseClasses =
  "w-full bg-tools flex items-center bg-no-repeat bg-cover overflow-hidden";

interface HeroProps {
  heading: string | null;
}

function Hero({ heading }: HeroProps) {
  let isHome: boolean = CheckIsHome() ? true : false;
  let heroClasses: string = isHome ? "lg:min-h-screen" : "lg:h-48";

  return (
    <header className={`${baseClasses} ${heroClasses}`}>
      {isHome && (
        <div className="lg:ml-80 text-3xl lg:text-7xl max-md:text-center text-orange-400 font-bold uppercase">
          <p className="text-neutral-700 lg:hover:translate-x-4 transition duration-300">
            Witaj w
          </p>
          <p className="text-5xl lg:text-9xl lg:hover:translate-x-4 transition duration-300">
            {heading}
          </p>
          <p className="text-neutral-700 lg:hover:translate-x-4 transition duration-300">
            Barber Shop
          </p>
        </div>
      )}
    </header>
  );
}

export default Hero;
