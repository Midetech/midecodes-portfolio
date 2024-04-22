import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "./components/Provider";
import ThemeSwitcher from "./components/ThemeSwitcher";
import Footer from "./components/Footer";
import Header from "./components/Header";
import localFont from "next/font/local";
import Image from "next/image";

const Garet = localFont({
  src: [
    {
      path: "./fonts/Garet-Book.otf",
      weight: "normal",
    },
    {
      path: "./fonts/Garet-Heavy.otf",
      weight: "bold",
    },
  ],
  variable: "--font-garet",
});

const Nourd = localFont({
  src: [
    {
      path: "./fonts/nourd_light.ttf",
      weight: "200",
    },
    {
      path: "./fonts/nourd_regular.ttf",
      weight: "400",
    },
    {
      path: "./fonts/nourd_medium.ttf",
      weight: "500",
    },
    {
      path: "./fonts/nourd_semi_bold.ttf",
      weight: "600",
    },
    {
      path: "./fonts/nourd_bold.ttf",
      weight: "700",
    },
    {
      path: "./fonts/nourd_heavy.ttf",
      weight: "900",
    },
  ],
  variable: "--font-nourd",
});

export const metadata: Metadata = {
  title: "Midecodes",
  description: "Frontend Developer based in Lagos, Nigeria",

  keywords: [
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
  twitter: {
    site: "@midecodeable",
    creator: "@midecodeable",
    description: "Frontend Developer based in Lagos, Nigeria",
    images: [
      "https://pbs.twimg.com/profile_images/1648960890828365826/JghfLY_8_400x400.jpg",
    ],
    title: "Midecodes",
  },
  openGraph: {},
  authors: {
    name: "Sunday Olomitutu",
    url: "https://www.mide.codes",
  },
  creator: "Sunday Olomitutu",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      <body
        className={`${Garet.className} ${Nourd.className} flex flex-col items-center bg-[#F5F7FF] dark:bg-black relative overflow-x-hidden`}
      >
        <Provider>
          <main className="dark:bg-[#000] overflow-y-scroll w-full relative">
            <div className="fixed top-[22rem] lg:left-2 right-6 z-[99] ">
              <ThemeSwitcher />
            </div>

            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}
