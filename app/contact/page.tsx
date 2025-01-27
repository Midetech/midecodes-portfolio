import ContactForm from "@/components/ContactForm";
import { GitHub, LinkedIn, XIcon } from "@/components/Icons";
import { Metadata } from "next";
import Link from "next/link";
import React, { Suspense } from "react";
export const metadata: Metadata = {
  title: "Contact me | Midecodes",
  description: "Sunday Olomitutu, Frontend Developer based in Lagos, Nigeria",
  manifest: "/site.webmanifest",
  keywords: [
    "Mobile developer",
    "Mobile App Developer",
    "React Developer",
    "Frontend Developer",
    "Next.js Developer",
    "React Native Developer",
    "Lagos",
    "Nigeria",
    "Africa",
    "Flutter Developer",
    "Dart Developer",
    "Javascript Developer",
    "Typescript Developer",
    "Olomitutu",
  ],
  openGraph: {
    title: "Contact me | Midecodes",
    description: "React out, let's work together",
    type: "website",
    url: "https://mide.codes/blog",
    images: [
      {
        url: "https://mide.codes/icons/apple-touch-icon.png",
        width: 1200,
        height: 630,
        alt: "Contact me | Midecodes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact me | Midecodes",
    description: "React out, let's work together",
    images: ["https://mide.codes/icons/apple-touch-icon.png"],
  },
};
const page = () => {
  return (
    <Suspense fallback={<div>loading</div>}>
      <div className="mt-28 mb-28">
        <div className="h-full w-full flex md:justify-center items-center md:gap-x-10 md:flex-row flex-col px-8">
          <div className="flex flex-col gap-y-10 md:w-1/3">
            <p className="md:text-[90px] text-5xl font-bold leading-[101%] md:w-[422px] w-full">
              Let&apos;s Work Together!
            </p>

            <div>
              <p>Email</p>
              <p className="text-2xl">info@mide.codes</p>
            </div>

            <div className="flex flex-col">
              <p className="text-black dark:text-white font-sans font-bold text-[16px] pb-2">
                Let&apos;s connect!
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
                Have a project, question, or opportunity in mind? I&apos;d love
                to hear from you. Fill out the form below, and I&apos;ll get
                back to you shortly.
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
