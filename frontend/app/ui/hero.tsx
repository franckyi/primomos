"use client";
import CheckIsHome from "../lib/check-pathname";
import hero from "../data/hero";

const heroDefaultClasses =
  "flex max-md:items-end max-md:pb-16 items-center w-full max-md:h-screen bg-hero-light dark:bg-hero bg-no-repeat bg-cover overflow-hidden";

interface HeroProps {
  heading: string | null;
}

function Hero({ heading }: HeroProps) {
  let isHome: boolean = CheckIsHome() ? true : false;
  let heroHomeClasses: string = isHome ? "lg:min-h-screen" : "lg:h-48";
  return (
    <header className={`${heroDefaultClasses} ${heroHomeClasses}`}>
      {isHome && (
        <div className={hero.headingClasses}>
          <p className={hero.subheadingClasses}>{hero.line1.text}</p>
          <p className={hero.line2.classes}>{heading}</p>
          <p className={hero.subheadingClasses}>{hero.line3.text}</p>
        </div>
      )}
    </header>
  );
}

export default Hero;
