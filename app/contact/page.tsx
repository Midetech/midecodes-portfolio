import ContactForm from "@/components/ContactForm";
import { GitHub, LinkedIn, XIcon } from "@/components/Icons";
import Link from "next/link";
import React, { Suspense } from "react";

const page = () => {
  return (
    <Suspense fallback={<div>loading</div>}>
      <div className="relative top-28 pb-24">
        <div className="h-full w-full flex md:justify-center items-center md:gap-x-10 md:flex-row flex-col px-8">
          <div className="flex flex-col gap-y-10 md:w-1/3">
            <p className="md:text-[90px] text-5xl font-bold leading-[101%] md:w-[422px] w-full">
              Let’s get in touch
            </p>

            <div>
              <p>Email</p>
              <p className="text-2xl">info@mide.codes</p>
            </div>

            <div className="flex flex-col">
              <p className="text-black dark:text-white font-sans font-bold text-[16px] pb-2">
                Connect with me
              </p>
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
          <div className="md:border-l md:pl-5 flex flex-col gap-y-[69px] mt-10">
            <div className="flex md:items-center gap-5 flex-col md:flex-row">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="216"
                height="18"
                viewBox="0 0 216 18"
                fill="currentColor"
              >
                <path
                  d="M213 9H1.5M213 9L207 15M213 9L207 3"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="square"
                />
              </svg>

              <p className="text-xl md:w-[431px]">
                Great! I am excited to hear from you and let’s start something
                special together. call me for more inquery.
              </p>
            </div>

            <ContactForm />
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default page;
