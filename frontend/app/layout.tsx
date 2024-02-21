import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "./ui/fonts";
import Hero from "./ui/hero";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Primo MOS Barber Shop - Gdańsk",
  description:
    "Gdzie pasja i profesjonalizm spotykają się, by zapewnić Ci niezapomniane doświadczenie fryzjerskie. Nasza misja to nie tylko strzyżenie, ale tworzenie stylu, który podkreśli Twój indywidualizm i charakter",
};

const heading = "Primo MOS";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className="scroll-smooth">
      <body className={poppins.className}>
        <Hero heading={heading} />
        {children}
        <footer className="p-8 text-center bg-orange-400 text-black">
          <Image
            src={"/logo.svg"}
            height={80}
            width={80}
            alt="Primo MOS logo"
            priority
            draggable="false"
            className="mx-auto"
          />
          Primo MOS Barber Shop{" "}
          <a
            title="Facebook"
            href="https://www.facebook.com/PrimoMosBarberShop"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            <FacebookIcon />
          </a>
          <a
            title="Instagram"
            href="https://www.instagram.com/primomosbarbershop/"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="ml-1"
          >
            <InstagramIcon />
          </a>
          <p> ul. Romana Dmowskiego 6, 80-243 Gdańsk</p>
        </footer>
      </body>
    </html>
  );
}
