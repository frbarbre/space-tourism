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
      {destinations.map((destination) => (
        <div key={nanoid()}>
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
                    >
                      <h2
                        key={nanoid()}
                        className={`${
                          link.name === data ? "text-white" : "text-light-blue"
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
                <h1 className="pt-[20px] font-bellefair uppercase text-[56px] md:text-[80px] lg:text-[100px]">{destination.name}</h1>
                <p className="font-barlow text-[15px] text-light-blue leading-[1.5625rem]">{destination.description}</p>
                <hr />
                <div>
                  <div>
                    <h2>Avg. Distance</h2>
                    <h3>{destination.distance}</h3>
                  </div>
                  <div>
                    <h2>Est. travel time</h2>
                    <h3>{destination.travel}</h3>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
