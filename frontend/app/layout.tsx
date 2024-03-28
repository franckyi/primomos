"use client";
import "./globals.css";
import { poppins } from "./ui/common/fonts";
import Hero from "./ui/common/hero";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import Image from "next/image";
import AppBar from "./ui/common/app-bar/app-bar";
import { Context, createContext, useState } from "react";
import Link from "next/link";

const heading = "Primo MOS";
const bodyClasses = "bg-white dark:bg-neutral-950 dark:text-neutral-400";
const ThemeContext: Context<null | string> = createContext<null | string>(null);

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [theme, setTheme] = useState("dark");

  function handleThemeToggleClick() {
    if (theme === "dark") {
      setTheme("");
    } else {
      setTheme("dark");
    }
  }

  return (
    <ThemeContext.Provider value={theme}>
      <html lang="pl" className={`scroll-smooth ${theme}`}>
        <body className={`${poppins.className} ${bodyClasses}`}>
          <AppBar handleThemeToggleClick={handleThemeToggleClick} />
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
            <p className="my-2">
              Zadzwoń do nas na{" "}
              <a href="tel:+48503489722" className="font-bold">
                503 48 97 22
              </a>
            </p>
            <p> ul. Romana Dmowskiego 6, 80-243 Gdańsk</p>
            <Link title="Regulamin" href="/regulamin">
              Regulamin
            </Link>
          </footer>
        </body>
      </html>
    </ThemeContext.Provider>
  );
}

export default RootLayout;
