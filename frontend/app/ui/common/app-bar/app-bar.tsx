"use client";
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "../../../data/nav-links";
import PhoneIcon from "@mui/icons-material/Phone";
import "./app-bar.css";
import ThemeSwitcher from "../theme-switcher/theme-switcher";

const appBarClasses =
  "absolute flex flex-col lg:flex-row items-center lg:gap-8 top-0 lg:top-4 z-50 max-md:p-8 lg:ml-80";

const cta = {
  label: "Umów się na wizytę",
  href: "tel:503489722",
  classes:
    "px-4 py-4 ml-2 text-black rounded-full bg-gradient-to-r from-orange-400 to-grey-500 lg:hover:to-orange-400 dark:bg-gradient-to-r dark:from-orange-400 dark:to-neutral-900 dark:lg:hover:to-orange-400 font-bold",
};

const navigation = {
  containerClasses:
    "flex items-center flex-wrap lg:flex-nowrap justify-center gap-4 lg:gap-16 pt-3 lg:px-4 lg:pl-12 lg:w-full text-xs lg:text-sm lg:tracking-wide lg:font-semibold leading-6 text-neutral-800 dark:text-neutral-300 uppercase",
  linkClasses:
    "py-2 border-solid border-b-2 border-transparent hover:border-orange-400 hover:text-white dark:hover:text-orange-400",
};

interface AppBarProps {
  handleThemeToggleClick: () => void;
}

function AppBar({ handleThemeToggleClick }: AppBarProps) {
  return (
    <div className={appBarClasses}>
      <Image
        src={"/logo.svg"}
        height={120}
        width={120}
        alt="Primo MOS logo"
        priority
        draggable="false"
        className="app-bar-logo"
      />
      <nav className={navigation.containerClasses} aria-label="Global">
        {NAV_LINKS.map(({ href, label }) => (
          <Link key={label} href={href} className={navigation.linkClasses}>
            {label}
          </Link>
        ))}
        <ThemeSwitcher handleThemeToggleClick={handleThemeToggleClick} />
        <a href={cta.href} className={cta.classes}>
          <PhoneIcon />
          {cta.label}
        </a>
      </nav>
    </div>
  );
}

export default AppBar;
