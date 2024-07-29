/* eslint-disable @next/next/no-img-element */
"use client";

import About from "./components/About";
import { DockDemo } from "./components/DockActions";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { IconCloudDemo } from "./components/IconCloudDemo";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
export default function Home() {
  return (
    <div className="w-full flex justify-center relative flex-col">
      <Header />
      <Hero />
      <About />
      <IconCloudDemo />
      {/* <Skills /> */}

      <Projects />
      <Footer />
    </div>
  );
}
