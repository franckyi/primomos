import Hero from "./ui/hero";
import IntroText from "./ui/intro-text";
import Image from "next/image";
import Services from "./ui/services";
import Training from "./ui/training";
import PhoneIcon from "@mui/icons-material/Phone";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col gap-16 items-center justify-between pt-0">
        <Services />
        <IntroText />
        <section className="w/full flex flex-col lg:flex-row">
          <Image
            src={"/img (1).webp"}
            height={320}
            width={480}
            alt="Primo MOS logo"
            priority
            draggable="false"
            className="w-1/4 h-auto"
          />
          <Image
            src={"/img (12).webp"}
            height={320}
            width={480}
            alt="Primo MOS logo"
            priority
            draggable="false"
            className="w-1/4 h-auto"
          />
          <Image
            src={"/img (14).webp"}
            height={320}
            width={480}
            alt="Primo MOS logo"
            priority
            draggable="false"
            className="w-1/4 h-auto"
          />
          <Image
            src={"/img (15).webp"}
            height={320}
            width={480}
            alt="Primo MOS logo"
            priority
            draggable="false"
            className="w-1/4"
          />
        </section>
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
