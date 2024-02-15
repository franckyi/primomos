import Hero from "./ui/hero";
import IntroText from "./ui/intro-text";
import Image from "next/image";
import Services from "./ui/services";
import Training from "./ui/training";



export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between pt-0 p-24">
        <Services />
        <IntroText />
        <Image
          src={"/interior.webp"}
          height={320}
          width={480}
          alt="Primo MOS logo"
          priority
          draggable="false"
          className="my-16"
        />
        <Training />
      </main>
    </>
  );
}
