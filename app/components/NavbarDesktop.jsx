"use client";

import Link from "next/link";
import { navLinks } from "../constants";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion as m, AnimatePresence } from "framer-motion";
import { nanoid } from "nanoid";

export default function NavbarDesktop() {
  const currentPage = usePathname();

  const [mouseOver, setMouseOver] = useState("");

  return (
    <header className="pl-[55px] flex justify-between items-center max-w-[1440px] mx-auto lg:pt-[40px]">
      <Link href={"/"}>
        <img src="/logo.svg" alt="logo-space-tourism" className="max-w-none" />
      </Link>
      <hr className="hidden lg:block w-full max-w-[473px] bg-dark-blue opacity-40 h-[1px] ml-[34px] relative z-50 translate-x-[30px]" />
      <nav className="w-full max-w-[430px] lg:max-w-[830px] bg-opaque backdrop-blur-2xl h-24 flex item-center justify-center">
        <div className="max-w-[542px] w-full flex justify-between lg:gap-8 md:gap-4 mx-8 lg:ml-16">
          {navLinks.map((link, index) => (
            <Link
              key={nanoid()}
              href={link.path}
              className="flex gap-3 items-center relative"
              onMouseEnter={() => setMouseOver(link.title)}
              onMouseLeave={() => setMouseOver("")}
            >
              <h2 className="hidden lg:block font-bold font-barlow-condensed tracking-[2.7px]">
                0{index}
              </h2>
              <h2 className="uppercase font-barlow-condensed tracking-[2.7px] flex-1">
                {link.title}
              </h2>
              {currentPage === link.path && (
                <div className="absolute left-0 right-0 bottom-0 h-1 bg-white" />
              )}
              <AnimatePresence>
                {mouseOver === link.title && (
                  <m.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    exit={{ scaleX: 0 }}
                    transition={{ type: "tween", duration: 0.2 }}
                    className="absolute left-0 right-0 bottom-0 h-1 bg-opaque-strong"
                  />
                )}
              </AnimatePresence>
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
