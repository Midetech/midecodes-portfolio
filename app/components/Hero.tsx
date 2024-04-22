/* eslint-disable @next/next/no-img-element */
import React from "react";
import Button from "./Button";
import { ArrowRight, GitHub, LinkedIn, Twitter } from "./Icons";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center lg:pl-10 ">
      <div className="w-full flex flex-col gap-y-10 lg:flex-row items-center relative  lg:mt-0 mt-[109px]">
        <div className="lg:w-[735px] w-full flex lg:gap-[45px] gap-y-5 flex-col pl-4">
          <div className="lg:w-[536px] w-[306px] h-[62px] rounded-[4px] bg-[#ffd496] flex justify-center items-center">
            <p className="text-black lg:text-[28px] text-[16px] font-serif font-medium">
              {" "}
              Frontend Engineer & Mobile App Dev
            </p>
          </div>
          <div className="lg:w-[725px] w-[400px] ">
            <p className="font-serif font-[700] lg:text-[44px] text-[22px] leading-[118%] text-black dark:text-white">
              Design and Codes Solution for target costumers
            </p>
          </div>

          <p className="lg:w-[524px] w-[400px] text-[18px] font-sans text-black  dark:text-white">
            Passionate Frontend Developer adept in all stages of advanced web
            development.
          </p>

          <div className="flex lg:items-center gap-4 flex-col lg:flex-row">
            <Link href={"#projects"}>
              <Button className="flex justify-center items-center gap-4 w-[166px] h-[47px]">
                View Projects{" "}
                <ArrowRight className="stroke-black dark:stroke-white" />
              </Button>
            </Link>
            <div className="w-[64px] h-[2px] bg-[#6E6E6E] dark:bg-white"></div>

            <div className="flex items-center gap-4">
              <Link href={"https://github.com/midetech"}>
                <div className="w-[62px] h-[62px] rounded-full bg-white dark:bg-[#222] flex justify-center items-center">
                  <GitHub />
                </div>
              </Link>
              <Link href={"https://www.linkedin.com/in/developermide/"}>
                <div className="w-[62px] h-[62px] rounded-full bg-white dark:bg-[#222] flex justify-center items-center">
                  <LinkedIn />
                </div>
              </Link>
              <Link href={"https://twitter.com/midecodeable"}>
                <div className="w-[62px] h-[62px] rounded-full bg-white dark:bg-[#222] flex justify-center items-center">
                  <Twitter />
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full  flex flex-col-reverse items-end relative ">
          <div className="lg:w-[572px] w-[343px] h-[39.315px] bg-[#C4C4C4]"></div>
          <img
            src="/images/mide-image.png"
            alt="Midecodes"
            className="lg:h-[810px] lg:w-[657px] w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
