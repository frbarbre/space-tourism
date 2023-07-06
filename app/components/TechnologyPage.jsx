"use client";

import { Heading } from ".";
import { nanoid } from "nanoid";
import { technology } from "../constants";
import { motion as m } from "framer-motion";
import { useState } from "react";

export default function TechnologyPage() {
  const [data, setData] = useState("Launch vehicle");

  return (
    <div className="pt-0 md:pt-[40px] lg:pl-[166.5px] lg:pr-0 lg:pt-[76px] max-w-[1440px] mx-auto lg:pb-[101px] md:pb-[97px]">
      <div className="px-6 md:px-[38.5px]">
        <Heading number={3} text={"Space launch 101"} />
      </div>
      <m.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="pt-[32px] md:pt-[60px] lg:pt-[26px]"
      >
        {technology.map((tech) => (
          <div key={nanoid()}>
            {tech.name === data && (
              <div className="flex flex-col lg:flex-row-reverse justify-between gap-12">
                <div>
                  <img
                    src={tech.images.landscape}
                    alt={tech.name}
                    className="lg:hidden w-full max-h-[310px] object-cover"
                  />
                  <img
                    src={tech.images.portrait}
                    alt={tech.name}
                    className="hidden lg:block"
                  />
                </div>
                <div className="flex flex-col lg:flex-row gap-x-[80px]">
                  <div className="flex gap-[16px] lg:flex-col lg:gap-[32px] pt-[34px] md:pt-[56px] lg:pt-0 pb-[26px] md:pb-[44px] lg:pb-0 justify-center items-center">
                    {technology.map((link, index) => (
                      <div
                        onClick={() => setData(link.name)}
                        className={`w-[40px] md:w-[60px] lg:w-[80px] border-[1px] border-solid border-opaque-strong rounded-full aspect-square flex items-center justify-center hover:border-white transition-all cursor-pointer ${
                          link.name === data
                            ? "bg-white text-dark-blue border-white"
                            : ""
                        }`}
                      >
                        <h2 className="font-bellefair md:text-[24px] lg:text-[32px] translate-y-[1px]">
                          {index + 1}
                        </h2>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col justify-center">
                    <h2 className="text-center lg:text-left font-barlow-condensed uppercase text-light-blue tracking-[2.36px] text-[14px] md:tracking-[2.7px] md:text-[16px] pb-[9px] md:pb-[16px] lg:pb-[11px]">
                      The terminology...
                    </h2>
                    <h1 className="text-center lg:text-left font-bellefair uppercase text-[24px] md:text-[40px] lg:text-[56px]">
                      {tech.name}
                    </h1>
                    <p className="text-center lg:text-left lg:max-w-[444px] max-w-[458px] mx-auto px-6 lg:px-0 pt-[16px] lg:pt-[17px] text-light-blue text-[15px] leading-[1.5625rem] md:text-[16px] md:leading-[1.75rem] lg:text-[18px] lg:leading-[2rem]">
                      {tech.description}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </m.div>
    </div>
  );
}
