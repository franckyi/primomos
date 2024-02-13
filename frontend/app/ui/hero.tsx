"use client";
import AppBar from "./AppBar";
import { HeroProps } from "../types/hero-props";
import Numbers from "./numbers";
import { usePathname } from "next/navigation";
import Image from "next/image";

const baseClasses = "w-full bg-no-repeat";
let isHome = null;

function Hero({ heading }: HeroProps) {
  const pathName = usePathname();
  isHome = pathName === "/" ? true : false;

  let heroClasses: string | null = null;
  heroClasses = isHome
    ? "bg-tools bg-cover min-h-screen"
    : "bg-stone-900 min-h-80";

  return (
    <header className={baseClasses + " " + heroClasses}>
      <AppBar />
      {isHome && (
        <div className="lg:ml-80 my-16 text-white">
          <Numbers />
          <Image
            src={"/interior.webp"}
            height={400}
            width={640}
            alt="Primo MOS logo"
            priority
            draggable="false"
          />
          <p className="text-9xl font-extrabold text-neutral-900">{heading}</p>
        </div>
      )}
    </header>
  );
}

export default Hero;
