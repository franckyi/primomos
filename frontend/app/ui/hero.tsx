"use client";
import CheckIsHome from "../lib/check-pathname";
import hero from "../data/hero";

const heroDefaultClasses =
  "w-full bg-hero-light dark:bg-hero flex items-center bg-no-repeat bg-cover overflow-hidden";

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
