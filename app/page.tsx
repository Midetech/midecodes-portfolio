/* eslint-disable @next/next/no-img-element */

import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { IconCloudDemo } from "@/components/IconCloudDemo";
import Projects from "@/components/Projects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Midecodes | Frontend Developer based in Lagos, Nigeria",
  description: "Sunday Olomitutu, Frontend Developer based in Lagos, Nigeria",

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
  applicationName: "Midecodes",

  openGraph: {
    type: "website",
    url: "https://mide.codes",
    title: "Midecodes",
    description: "Frontend Developer based in Lagos, Nigeria",
    images: [
      {
        url: "https://mide.codes/icons/apple-touch-icon.png",
        width: 1200,
        height: 630,
        alt: "Midecodes",
      },
    ],
  },

  twitter: {
    site: "@midecodeable",
    creator: "@midecodeable",
    title: "Sunday Olomitutu",
    description: "Frontend Developer based in Lagos, Nigeria",
    images: ["https://mide.codes/icons/apple-touch-icon.png"],
  },

  authors: {
    name: "Sunday Olomitutu",
    url: "https://www.mide.codes",
  },
  creator: "Sunday Olomitutu",
};
export default function Home() {
  return (
    <div className="w-full flex justify-center relative flex-col">
      <Hero />
      <About />
      <IconCloudDemo />
      {/* <Skills /> */}
      <Projects />
      <Footer />
    </div>
  );
}
