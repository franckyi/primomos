"use client";
import CheckIsHome from "../../lib/check-pathname";
import hero from "../../data/hero";

const heroDefaultClasses =
  "flex max-md:items-end max-md:pb-16 items-center w-full bg-hero-light dark:bg-hero bg-no-repeat bg-cover overflow-hidden";

interface HeroProps {
  heading: string | null;
}

function Hero({ heading }: HeroProps) {
  let isHome: boolean = CheckIsHome() ? true : false;
  let heroHomeClasses: string = isHome
    ? "lg:min-h-screen max-md:h-screen"
    : "lg:h-48 max-md:h-96";
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
