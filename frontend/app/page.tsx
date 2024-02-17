import Hero from "./ui/hero";
import IntroText from "./ui/intro-text";
import Image from "next/image";
import Services from "./ui/services";
import Training from "./ui/training";
import PhoneIcon from "@mui/icons-material/Phone";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between pt-0 p-24">
        <Services />
        <IntroText />

        <Training />
        <a
          href="tel:503489722"
          className="my-16 px-4 py-4 ml-2 text-black rounded-full bg-gradient-to-r from-orange-400 to-neutral-900 hover:to-orange-400 font-bold"
        >
          <PhoneIcon />
          Skontaktuj się z nami
        </a>
      </main>
    </>
  );
}
