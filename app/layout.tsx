import { DockDemo } from "@/components/DockActions";
import Provider from "@/components/Provider";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
        url: "/images/mide-image.png",
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
    images: ["/images/mide-image.png"],
  },

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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Sunday Olomitutu",
    image: "/images/placeholder.jpg",
    datePublished: new Date().toISOString(),
    author: {
      "@type": "Person",
      name: "Sunday Olomitutu",
    },
  };
  return (
    <html lang="en">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      <body
        className={`${Garet.className} ${Nourd.className} flex flex-col items-center bg-[#F5F7FF] dark:bg-black relative overflow-x-hidden`}
      >
        <Provider>
          <main className="dark:bg-[#000] overflow-y-scroll w-full relative">
            {children}
            {<DockDemo />}
          </main>
        </Provider>
      </body>
    </html>
  );
}
