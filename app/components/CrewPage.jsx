"use client";

import { Heading } from ".";
import { crew } from "../constants";
import { nanoid } from "nanoid";
import { useState } from "react";
import { motion as m } from "framer-motion";

export default function CrewPage() {
  const [data, setData] = useState("Douglas Hurley");

  return (
    <div className="p-6 md:pb-0 pt-0 md:px-[38.5px] md:pt-[40px] lg:pl-[166.5px] lg:pr-6 lg:pt-[76px] max-w-[1440px] mx-auto">
      <Heading number={2} text={"Meet your crew"} />
      <m.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        {crew.map((member) => (
          <div key={nanoid()}>
            {member.name === data && (
              <div className="flex flex-col md:flex-col-reverse lg:flex-row-reverse lg:justify-between lg:items-end h-full md:min-h-screen-heading-tablet lg:min-h-screen-heading pt-[32px] md:pt-[60px]">
                <div className="flex flex-col justify-center items-center">
                  <img
                    src={member.images.webp}
                    alt={member.name}
                    className="h-[223px] md:h-[532px] lg:h-full object-cover objevt-top"
                  />
                  <hr className="md:hidden h-[2px] bg-white opacity-40 w-full" />
                </div>
                <div className="flex flex-col md:flex-col-reverse items-center lg:items-start">
                  <div className="flex gap-[16px] lg:gap-[24px] py-[32px] md:py-[40px] lg:pt-[120px] lg:pb-[94px]">
                    {crew.map((link) => (
                      <div
                        key={nanoid()}
                        className={`w-[10px] bg-white aspect-square lg:w-[15px] rounded-full cursor-pointer hover:opacity-100 transition-all ${
                          link.name === data ? "" : "opacity-40"
                        }`}
                        onClick={() => setData(link.name)}
                      />
                    ))}
                  </div>
                  <div>
                    <h2 className="text-center lg:text-left font-bellefair uppercase opacity-50 md:text-[24px] lg:text-[32px] pb-[8px] lg:pb-[15px]">
                      {member.role}
                    </h2>
                    <h1 className="text-center lg:text-left font-bellefair uppercase text-[24px] md:text-[40px] lg:text-[56px]">
                      {member.name}
                    </h1>
                    <p className="lg:max-w-[444px] max-w-[458px] text-center lg:text-left font-barlow text-[15px] md:text-[16px] lg:text-[18px] text-light-blue leading-[1.5625rem] md:leading-[1.75rem] lg:leading-[2rem]">
                      {member.bio}
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
