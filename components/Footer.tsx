import React from "react";
import {
  ArrowRight,
  CoffeeImage,
  GitHub,
  LinkedIn,
  LogoIcon,
  XIcon,
} from "./Icons";
import Link from "next/link";
import Button from "./Button";
import { BorderBeam } from "@/components/magicui/border-beam";
import ShimmerButton from "./ui/shimmer-button";

const Footer = () => {
  return (
    <div className="dark:bg-card text-card-foreground bg-[#EDEFF7] py-4 relative w-full lg:h-[404px] h-[824px] lg:px-10 px-5 flex flex-col justify-end ">
      <div className="border-dashed border-[0.2px] border-[#A7A7A7] bg-white dark:bg-card rounded-[22px] py-6  flex flex-col lg:flex-row justify-between lg:gap-x-[200px] gap-y-5 lg:px-10 px-5 lg:mx-5 absolute lg:-top-24 -top-[150px] lg:left-24 right-2 shadow">
        <div className="flex lg:items-center lg:flex-row flex-col  gap-[26px] ">
          <CoffeeImage />
          <div className="lg:w-[366px] w-full h-[96px]">
            <p className="text-[30px] font-serif font-[700] text-black dark:text-white">
              Have a project?
            </p>
            <p className="text-[16px] font-sans font-[300] text-black dark:text-white lg:w-[326px] w-[337px]">
              You can get in touch with me anytime any day over a cup of coffee.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link href="tel:+2347062311779">
            <Button className="font-sans flex justify-center items-center gap-x-3 lg:gap-6 w-[137px] h-[41px] dark:border-white dark:text-white">
              Call me <ArrowRight className="stroke-black dark:stroke-white " />
            </Button>
          </Link>
          <Link href="/contact">
            <Button className="font-sans flex justify-center items-center gap-x-3 lg:gap-6 w-[137px] h-[41px] !bg-black !text-white dark:border-white dark:text-black">
              Email me <ArrowRight className="stroke-white " />
            </Button>
          </Link>
        </div>
        <BorderBeam size={350} duration={15} delay={9} />
      </div>
      <div className="w-full flex flex-col gap-7">
        <div className="flex lg:justify-between lg:gap-12 gap-y-10 dark:text-white text-black w-full flex-col  lg:flex-row">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-[8px]">
              <div className="dark:bg-white bg-black h-[35px] w-[35px] flex justify-center items-center rounded-[3px]">
                <LogoIcon className="fill-white dark:fill-black" />
              </div>
              <p className="font-sans text-[20px] ">
                <span className="text-[#A0A5AE]">Mide</span>
                <span className="text-black dark:text-white">codes</span>
              </p>
            </div>
            <div className="lg:w-[420px] w-full">
              <p className="text-black dark:text-white font-sans font-bold text-[16px] pb-2">
                Building amazing tech products
              </p>
              <p className="text-black dark:text-white font-sans text-[14px]">
                Crafting seamless user experiences across web and mobile
                platforms, I thrive on blending cutting-edge technologies with
                intuitive design to build products that captivate and engage
                users.
              </p>
            </div>
          </div>

          <div className="flex flex-row justify-between lg:gap-x-52 ">
            {/* <div className="flex flex-col gap-2">
              <p className="text-black dark:text-white font-sans font-bold text-[16px] pb-2">
                Site Links
              </p>
              <Link className="text-[14px] font-sans font-[300]" href="/about">
                Home
              </Link>
              <Link className="text-[14px] font-sans font-[300]" href="/about">
                Projects
              </Link>
              <Link className="text-[14px] font-sans font-[300]" href="/about">
                Contact
              </Link>
            </div> */}
            <div className="flex flex-col gap-2">
              <p className="text-black dark:text-white font-sans font-bold text-[16px] pb-2">
                Contact me
              </p>
              <Link
                className="text-[14px] font-sans font-[300]"
                href="tel:+2347062311779"
              >
                +234(706) 231 1779
              </Link>
              <Link
                className="text-[14px] font-sans font-[300]"
                href="mailto:hello@mide.codes"
              >
                hello@mide.codes
              </Link>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="text-black dark:text-white font-sans font-bold text-[16px] pb-2">
              Connect with me
            </p>
            <p>Social Media Platform</p>
            <div className="flex items-center gap-4 mt-2">
              <Link href={"https://github.com/midetech"}>
                <div className="w-[34px] h-[34px] p-[2px] rounded-full flex justify-center items-center">
                  <GitHub />
                </div>
              </Link>
              <Link href={"https://www.linkedin.com/in/developermide/"}>
                <div className="w-[34px] h-[34px]  p-[2px] rounded-full flex justify-center items-center">
                  <LinkedIn />
                </div>
              </Link>
              <Link href={"https://twitter.com/midecodeable"}>
                <div className="w-[34px] h-[34px]  p-[2px] rounded-full flex justify-center items-center">
                  <XIcon />
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="h-[0.5px] bg-[#6A6A6A] w-full flex items-center"></div>
        <p className="text-black dark:text-white text-[16px] font-sans font-[300] text-center">{`Midecodes © ${new Date().getFullYear()}. All rights reserved`}</p>
      </div>
    </div>
  );
};

export default Footer;
