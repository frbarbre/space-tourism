"use client";

import { NavbarMobile, NavbarDesktop } from "./components";
import "./globals.css";
import { Bellefair, Barlow_Condensed, Barlow } from "next/font/google";
import { usePathname } from "next/navigation";
import { motion as m } from "framer-motion";
import Head from "next/head";

const bellefair = Bellefair({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bellefair",
});
const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-barlow-condensed",
});
const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-barlow",
});

export default function RootLayout({ children }) {
  const currentPage = usePathname();

  return (
    <html lang="en">
      <Head>
        <title>Space Tourism</title>
      </Head>
      <body
        className={`
        ${bellefair.variable} ${barlowCondensed.variable} ${barlow.variable}
        ${
          currentPage === "/"
            ? "bg-home-mobile md:bg-home-tablet lg:bg-home-desktop"
            : currentPage === "/crew"
            ? "bg-crew-mobile md:bg-crew-tablet lg:bg-crew-desktop"
            : currentPage === "/destination"
            ? "bg-destination-mobile md:bg-destination-tablet lg:bg-destination-desktop"
            : currentPage === "/technology"
            ? "bg-technology-mobile md:bg-technology-tablet lg:bg-technology-desktop"
            : ""
        }
        bg-cover bg-no-repeat min-h-screen text-white`}
      >
        <div className="md:hidden">
          <NavbarMobile />
        </div>
        <m.div
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="hidden md:block">
            <NavbarDesktop />
          </div>
        </m.div>
        {children}
      </body>
    </html>
  );
}
