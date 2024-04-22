"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { DayLight, MoonIcon } from "./Icons";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    // if (currentTheme === "dark") {
    //   return (
    //     <button className="sticky" onClick={() => setTheme("light")}>
    //       <LightSwitch />
    //     </button>
    //   );
    // } else {
    //   return (
    //     <button onClick={() => setTheme("dark")}>
    //       <DarkSwitch />
    //     </button>
    //   );
    // }
    return (
      <div className="w-[38px] h-[75px]  rounded-[34px] bg-[#E7EBFB] dark:bg-[#191A1D] flex flex-col justify-between items-center z-50">
        <div
          onClick={() => setTheme("light")}
          className={`w-[32px] h-[32px] rounded-full cursor-pointer transition-all duration-100 ${
            currentTheme === "light" ? "bg-white" : ""
          } flex items-center justify-center`}
        >
          <DayLight className="dark:fill-white fill-black" />
        </div>
        <div
          onClick={() => setTheme("dark")}
          className={` flex items-center justify-center w-[30px] h-[30px] rounded-full cursor-pointer transition-all duration-100 ${
            currentTheme === "dark" ? "bg-white" : ""
          } `}
        >
          <MoonIcon />
        </div>
      </div>
    );
  };

  return <>{renderThemeChanger()}</>;
};

export default ThemeSwitcher;
