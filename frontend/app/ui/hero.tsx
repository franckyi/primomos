"use client";
import AppBar from "./app-bar";
import { HeroProps } from "../types/hero-props";
import Numbers from "./numbers";
import { usePathname } from "next/navigation";
import Image from "next/image";

const baseClasses = "w-full min-h-screen bg-no-repeat";
let isHome = null;

function Hero({ heading }: HeroProps) {
  const pathName = usePathname();
  isHome = pathName === "/" ? true : false;

  let heroClasses: string | null = null;
  heroClasses = isHome ? "bg-tools bg-cover" : "bg-stone-900 min-h-80";

  return (
    <header className={baseClasses + " " + heroClasses}>
      <AppBar />
      {isHome && (
        <div className="lg:ml-80 my-16 text-7xl text-orange-400 font-extrabold uppercase">
          {/* <Numbers /> */}
          <div className="text-neutral-700 hover:translate-x-4 transition duration-300">
            Witaj w
          </div>
          <p className="text-9xl hover:translate-x-4 transition duration-300">
            {heading}
          </p>
          <div className="text-neutral-700 hover:translate-x-4 transition duration-300">
            Barber Shop
          </div>
        </div>
      )}
    </header>
  );
}

export default Hero;
