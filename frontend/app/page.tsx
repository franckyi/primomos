import { Metadata } from "next/types";
import IntroText from "./ui/home/intro-text";
import Services from "./ui/home/services";
import Training from "./ui/home/training";
import PhoneIcon from "@mui/icons-material/Phone";
import HomeImages from "./ui/home/home-images";
import "./ui/home/video.css";

const main = {
  baseClasses:
    "flex min-h-screen flex-col gap-4 lg:gap-16 items-center justify-between pt-0",
  themeClasses: "bg-white dark:bg-neutral-950",
};

export const metadata: Metadata = {
  title: "Primo MOS Barber Shop - Gdańsk",
  description:
    "Gdzie pasja i profesjonalizm spotykają się, by zapewnić Ci niezapomniane doświadczenie fryzjerskie. Nasza misja to nie tylko strzyżenie, ale tworzenie stylu, który podkreśli Twój indywidualizm i charakter",
};

export default function Home() {
  return (
    <main className={`${main.baseClasses} ${main.themeClasses}`}>
      <Services />
      <IntroText />
      <div className="2xl:mx-80">
        <HomeImages />
      </div>
      <Training />
      <a
        href="tel:503489722"
        className="my-16 px-4 py-4 ml-2 text-black rounded-full bg-gradient-to-r from-orange-400 to-white dark:bg-gradient-to-r dark:from-orange-400 dark:to-neutral-900 hover:to-orange-400 dark:hover:to-orange-400 font-bold"
      >
        <PhoneIcon />
        Umów się na wizytę
      </a>
    </main>
  );
}
