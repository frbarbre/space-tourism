"use client";

import { nanoid } from "nanoid";
import { Heading } from ".";
import { destinations } from "../constants";
import { useState } from "react";
import { motion as m, AnimatePresence } from "framer-motion";

export default function DestinationPage() {
  const [data, setData] = useState("Moon");
  const [mouseOver, setMouseOver] = useState("");

  return (
    <div className="p-6 pt-0 md:px-[38.5px] md:pt-[40px] lg:pl-[166.5px] lg:pr-6 lg:pt-[76px]">
      <Heading number={1} text={"Pick your destination"} />
      <m.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        {destinations.map((destination) => (
          <m.div key={nanoid()}>
            {destination.name === data && (
              <div className="pt-[32px] md:pt-[60px] lg:pt-[64px] pb-[58px] md:pb-[62px] lg:pb-[112px] flex flex-col lg:flex-row items-center gap-[26px] md:gap-[53px] lg:justify-between max-w-[1047px] mx-auto">
                <img
                  src={destination.images.png}
                  alt={destination.name}
                  className="w-[170px] md:w-[300px] lg:w-full max-w-[445px] aspect-square"
                />
                <div className="max-w-[573px] lg:max-w-[445px] flex flex-col items-center lg:items-start">
                  <nav className="flex gap-[26px]">
                    {destinations.map((link) => (
                      <div
                        className="relative"
                        onMouseEnter={() => setMouseOver(link.name)}
                        onMouseLeave={() => setMouseOver("")}
                        key={nanoid()}
                      >
                        <h2
                          key={nanoid()}
                          className={`${
                            link.name === data
                              ? "text-white"
                              : "text-light-blue"
                          } cursor-pointer font-barlow-condensed text-[14px] md:text-[16px] tracking-[2.36px] md:tracking-[2.7px] uppercase pb-[8px] md:pb-[12px] text-center`}
                          onClick={() => setData(link.name)}
                        >
                          {link.name}
                        </h2>
                        {link.name === data && (
                          <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white translate-x-[-2px]" />
                        )}
                        <AnimatePresence>
                          {mouseOver === link.name && (
                            <m.div
                              initial={{ opacity: 0, y: "-100%", x: -2 }}
                              animate={{ opacity: 1, y: 0, x: -2 }}
                              exit={{ opacity: 0, y: "-100%", x: -2 }}
                              className="absolute bottom-0 left-0 right-0 h-[3px] bg-opaque-strong translate-x-[-2px]"
                            />
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                  </nav>
                  <h1 className="pt-[20px] font-bellefair uppercase text-[56px] md:text-[80px] lg:text-[100px]">
                    {destination.name}
                  </h1>
                  <p className="font-barlow text-[15px] md:text-[16px] lg:text-[18px] text-light-blue leading-[1.5625rem] md:leading-[1.75rem] lg:leading-[2rem] text-center lg:text-left pb-[32px] md:pb-[49px] lg:pb-[54px]">
                    {destination.description}
                  </p>
                  <hr className="bg-dark-blue h-[2px] w-full opacity-40" />
                  <div className="flex flex-col md:flex-row w-full text-center lg:text-left justify-between lg:justify-start max-w-[450px] lg:max-w-none pt-[32px] md:pt-[28px] gap-y-[32px]">
                    <div className="lg:flex-1">
                      <h2 className="font-barlow-condensed text-[14px] tracking-[2.36px] uppercase text-light-blue">
                        Avg. Distance
                      </h2>
                      <h3 className="font-bellefair uppercase pt-[12px] text-[28px]">
                        {destination.distance}
                      </h3>
                    </div>
                    <div className="lg:flex-1">
                      <h2 className="font-barlow-condensed text-[14px] tracking-[2.36px] uppercase text-light-blue">
                        Est. travel time
                      </h2>
                      <h3 className="font-bellefair uppercase pt-[12px] text-[28px]">
                        {destination.travel}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </m.div>
        ))}
      </m.div>
    </div>
  );
}
