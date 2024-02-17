"use client";
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "../data/nav-links";
import PhoneIcon from "@mui/icons-material/Phone";

export default function AppBar() {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:gap-8 top-0 lg:top-8 z-50 max-md:p-8 lg:pt-8 lg:ml-80">
      <Image
        src={"/logo.svg"}
        height={120}
        width={120}
        alt="Primo MOS logo"
        priority
        draggable="false"
      />
      <nav
        className="flex items-center flex-wrap lg:flex-nowrap justify-center gap-4 lg:gap-16 p-3 lg:px-4 lg:pl-12 lg:w-full text-xs lg:text-sm lg:tracking-wide lg:font-semibold leading-6 text-neutral-300 uppercase"
        aria-label="Global"
      >
        {NAV_LINKS.map(({ href, label }) => (
          <Link
            key={label}
            href={href}
            className="py-2 border-solid border-b-2 border-transparent hover:border-orange-400 hover:text-orange-400"
          >
            {label}
          </Link>
        ))}
        <a
          href="tel:503489722"
          className="px-4 py-4 ml-2 text-black rounded-full bg-orange-400 lg:bg-gradient-to-r lg:from-orange-400 lg:to-neutral-900 hover:to-orange-400 font-bold"
        >
          <PhoneIcon />
          Umów się na wizytę
        </a>
      </nav>
    </div>
  );
}
