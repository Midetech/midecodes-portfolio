import Projects from "@/components/Projects";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Midecodes | Projects",
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
const Page = () => {
  return (
    <Suspense fallback={<div>loading</div>}>
      <div className="px-5 mt-24">
        <Projects />
      </div>
    </Suspense>
  );
};

export default Page;
