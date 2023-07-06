"use client";

import { ExploreButton } from ".";
import { motion as m } from "framer-motion";

export default function FrontPage() {
  return (
    <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row justify-between items-center md:pt-[116px] lg:pt-6 lg:items-end gap-[81px] md:gap-[156px] lg:gap-16 p-6 lg:pb-[131px] lg:px-[165px] lg:min-h-screen-header">
      <m.div
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="flex flex-col items-center lg:items-start"
      >
        <h2 className="font-barlow-condensed tracking-[2.7px] uppercase text-light-blue md:text-[20px] lg:text-[28px]">
          So, you want to travel to
        </h2>
        <h1 className="font-bellefair text-[80px] md:text-[150px] uppercase">
          Space
        </h1>
        <p className="text-light-blue text-[15px] md:text-[16px] lg:text-[18px] max-w-[444px] text-center lg:text-left leading-8 font-barlow">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </m.div>
      <m.div initial={{scaleX: 0, scaleY: 0}} animate={{scaleX: 1, scaleY: 1}} transition={{delay: 0.7, duration: 0.25}} className="pb-6 md:pb-[90px] lg:pb-0">
        <ExploreButton />
      </m.div>
    </div>
  );
}
