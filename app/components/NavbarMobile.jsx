"use client";

import { navLinks } from "../constants";
import Link from "next/link";
import { useState } from "react";
import { motion as m, AnimatePresence } from "framer-motion";
import { nanoid } from "nanoid";
import { usePathname } from "next/navigation";

export default function NavbarMobile() {
  const [active, setActive] = useState(false);
  const [mouseOver, setMouseOver] = useState("");

  const currentPage = usePathname();

  return (
    <header className="flex justify-between items-center p-6">
      <Link href={"/"}>
        <img src="/logo.svg" alt="space-tourism-logo" />
      </Link>
      <img
        onClick={() => setActive((prev) => !prev)}
        src={active ? "/icon-close.svg" : "/icon-hamburger.svg"}
        alt="menu-icon"
        className="relative z-50 cursor-pointer"
      />
      <AnimatePresence>
        {active && (
          <m.nav
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween" }}
            className="fixed bottom-0 top-0 right-0 max-w-[254px] bg-opaque backdrop-blur-2xl flex flex-col gap-8 pl-8 pt-[118px] w-full z-40"
            onClick={() => setActive((prev) => !prev)}
          >
            {navLinks.map((link, index) => (
              <Link
                key={nanoid()}
                href={link.path}
                className="flex gap-2 relative h-[32px] items-center"
                onMouseEnter={() => setMouseOver(link.title)}
                onMouseLeave={() => setMouseOver("")}
              >
                <h2 className="font-bold font-barlow-condensed tracking-[2.7px] flex-[0.1]">
                  0{index}
                </h2>
                <h2 className="uppercase font-barlow-condensed tracking-[2.7px] flex-1">
                  {link.title}
                </h2>
                {currentPage === link.path && (
                  <div className="absolute right-0 top-0 bottom-0 w-1 bg-white" />
                )}
                <AnimatePresence>
                  {mouseOver === link.title && (
                    <m.div
                      initial={{ x: "100%" }}
                      animate={{ x: 0 }}
                      exit={{ x: "100%" }}
                      className="absolute right-0 top-0 bottom-0 w-1 bg-opaque-strong"
                    />
                  )}
                </AnimatePresence>
              </Link>
            ))}
          </m.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
