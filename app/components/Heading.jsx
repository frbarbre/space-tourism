"use client";

import { motion as m } from "framer-motion";

export default function Heading({ number, text }) {
  return (
    <m.div
      initial={{ opacity: 0, y: "-100%" }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.25 }}
      className="w-full max-w-[1440px] mx-auto flex gap-[18px] font-barlow-condensed tracking-[2.7px] justify-center md:justify-start md:text-[20px] md:tracking-[3.38px] lg:text-[28px] lg:tracking-[4.72px]"
    >
      <span className="font-bold opacity-25">0{number}</span>
      <h2 className="uppercase">{text}</h2>
    </m.div>
  );
}
