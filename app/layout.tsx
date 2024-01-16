import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
    url: "https://mide.codes",
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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
