import Button from "@/components/Button";
import WhatWeExpect from "@/components/ExpectationCard";
import Footer from "@/components/Footer";
import MentorshipForm from "@/components/MentorshipForm";
import CommunityMetrics from "@/components/MetricCard";
import { Metadata } from "next";
import Image from "next/image";
export const metadata: Metadata = {
  title: "Mentorship with Midecodes",
  description: "Frontend Developer based in Lagos, Nigeria",

  keywords: [
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
  ],
  applicationName: "Midecodes",

  openGraph: {
    type: "website",
    url: "https://mide.codes",
    title: "Midecodes",
    description: "Frontend Developer based in Lagos, Nigeria",
    images: [
      {
        url: "https://res.cloudinary.com/mideveloper/image/upload/v1731019368/mide-image_rhyzgi.png",
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
    images: [
      "https://res.cloudinary.com/mideveloper/image/upload/v1731019368/mide-image_rhyzgi.png",
    ],
  },

  authors: {
    name: "Sunday Olomitutu",
    url: "https://www.mide.codes",
  },
  creator: "Sunday Olomitutu",
};
export default function TechMentorshipLanding() {
  return (
    <>
      <div
        className=" mt-20
     dark:bg-black dark:text-white bg-[#EDEFF7]/50 text-black  min-h-screen transition-colors duration-300"
      >
        {/* Dark Mode Toggle */}

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 dark:text-white">
            Let&apos;s Learn Together!
          </h1>
          <p className="text-xl max-w-2xl mx-auto mb-8 dark:text-gray-300">
            Connect with experienced mentors across tech domains. Learn, grow,
            and accelerate your career with personalized guidance.
          </p>
          <a href="#join" className="inline-block transition">
            <Button className="font-sans  flex justify-center items-center gap-x-3 lg:gap-6 w-[180px] h-[41px] !bg-black !text-white dark:border-white dark:text-black">
              Join Our Community
            </Button>
          </a>
        </section>

        {/* Community Metrics */}
        <CommunityMetrics />

        {/* What We Expect */}
        <WhatWeExpect />

        <section id="join" className="container mx-auto px-4 py-16">
          <h2 className="text-3xl text-center mb-12 dark:text-white">
            Join The Community
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Graphic Column */}
            <div className="relative w-full h-full rounded-sm">
              <Image
                src="/images/mentor-banner.png"
                alt="Midecodes Mentorsh"
                className="rounded-lg"
                layout="fill"
                objectFit="contain"
              />
            </div>

            {/* Form Column */}
            <MentorshipForm />
          </div>
        </section>
        <div className="mt-36">
          <Footer />
        </div>
      </div>
    </>
  );
}
