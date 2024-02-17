"use client";
import AppBar from "./app-bar/app-bar";
import { HeroProps } from "../types/hero-props";
import { usePathname } from "next/navigation";

const baseClasses = "w-full bg-tools bg-no-repeat bg-cover overflow-hidden";
let isHome = null;

function Hero({ heading }: HeroProps) {
  const pathName = usePathname();
  isHome = pathName === "/" ? true : false;

  let heroClasses: string | null = null;
  heroClasses = isHome ? "lg:min-h-screen" : "lg:h-48";

  return (
    <header className={baseClasses + " " + heroClasses}>
      <AppBar />
      {isHome && (
        <div className="lg:ml-80 my-16 text-3xl lg:text-7xl max-md:text-center text-orange-400 font-bold uppercase">
          <div className="text-neutral-700 lg:hover:translate-x-4 transition duration-300">
            Witaj w
          </div>
          <p className="text-5xl lg:text-9xl lg:hover:translate-x-4 transition duration-300">
            {heading}
          </p>
          <div className="text-neutral-700 lg:hover:translate-x-4 transition duration-300">
            Barber Shop
          </div>
        </div>
      )}
    </header>
  );
}

export default Hero;
