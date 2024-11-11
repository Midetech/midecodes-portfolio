"use client";
import { DockDemo } from "@/components/DockActions";

import Menu from "@/components/Menu";
import Provider from "@/components/Provider";
import localFont from "next/font/local";
import { useState } from "react";
import "./globals.css";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("@/components/Header"), { ssr: false });

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <html lang="en">
      <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />

      <body
        className={`${Garet.className} ${Nourd.className} flex flex-col items-center bg-[#F5F7FF] dark:bg-black relative overflow-x-hidden`}
      >
        <Provider>
          <Header {...{ toggleMenu }} />
          <Menu {...{ toggleMenu, openMenu }} />
          <main className="dark:bg-[#000] overflow-y-scroll w-full relative">
            {children}
            <DockDemo />
          </main>
        </Provider>
      </body>
    </html>
  );
}
