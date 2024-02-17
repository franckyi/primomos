import IntroText from "./ui/intro-text";
import Image from "next/image";
import Services from "./ui/services";
import Training from "./ui/training";
import PhoneIcon from "@mui/icons-material/Phone";
import { images } from "./data/home-images";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-16 items-center justify-between pt-0">
      <Services />
      <IntroText />
      <section className="w-6/6 flex flex-col lg:flex-row">
        {images.length > 0 &&
          images.map((img) => (
            <Image
              key={img.id}
              src={img.src}
              height={480}
              width={320}
              alt={img.alt}
              priority
              draggable="false"
              className="w-1/6 h-auto object-cover"
            />
          ))}
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
  );
}
