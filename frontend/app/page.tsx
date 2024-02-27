import IntroText from "./ui/intro-text";
import Services from "./ui/services";
import Training from "./ui/training";
import PhoneIcon from "@mui/icons-material/Phone";
import HomeImages from "./ui/home/home-images";
import "./ui/home/video.css";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-4 lg:gap-16 items-center justify-between pt-0">
      <Services />
      <IntroText />
      <div className="2xl:mx-80">
        <HomeImages />
      </div>
      <Training />
      <a
        href="tel:503489722"
        className="my-16 px-4 py-4 ml-2 text-black rounded-full bg-orange-400 dark:bg-gradient-to-r dark:from-orange-400 dark:to-neutral-900 dark:hover:to-orange-400 font-bold"
      >
        <PhoneIcon />
        Skontaktuj się z nami
      </a>
    </main>
  );
}
