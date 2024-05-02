import React from "react";
import { StarIcon } from "./Icons";

const About = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row gap-10 py-20 lg:px-10 px-5">
      <div className="flex items-center gap-4 self-start">
        <p className="font-serif font-[700] lg:text-[22px] text-[24px] leading-[118%] text-black dark:text-white">
          About me
        </p>
        <div className="w-[64px] h-[2px] bg-[#6E6E6E] dark:bg-white"></div>
      </div>
      <div>
        <div className="lg:w-[860px] space-y-6 self-start">
          <p className="text-black dark:text-white font-serif text-[16px] font-[300] ">
            <span className="font-bold">Sunday Olomitutu</span>here, passionate
            Frontend Developer adept in all stages of advanced web development.
            Knowledgeable in user interface, testing, and debugging processes.
            Equipped with a diverse and promising skill-set. Proficient in an
            assortment of technologies, including HTML, CSS, JavaScript, React,
            Bootstrap, Git & GitHub, Pivotal Tracker, Trello.
          </p>
          <p className="text-black dark:text-white font-serif text-[16px] font-[300] ">
            Able to effectively selfmanage during independent projects, as well
            as collaborate in a team setting. Ability to work remotely and
            onsite. Great Team player and Team Lead as the case may be.
          </p>
        </div>
        <div className="flex mt-10 justify-between lg:flex-row flex-col gap-y-3 gap-x-3">
          <div className="flex items-center gap-x-2">
            <StarIcon />
            <p className="text-black dark:text-white font-serif text-[16px] font-[300] ">
              Clean code advocate
            </p>
          </div>
          <div className="flex items-center gap-x-2">
            <StarIcon />
            <p className="text-black dark:text-white font-serif text-[16px] font-[300] ">
              Can-do attitude
            </p>
          </div>
          <div className="flex items-center gap-x-2">
            <StarIcon />
            <p className="text-black dark:text-white font-serif text-[16px] font-[300] ">
              Ownership and Accountability
            </p>
          </div>
          <div className="flex items-center gap-x-2">
            <StarIcon />
            <p className="text-black dark:text-white font-serif text-[16px] font-[300] ">
              Performant And Secure.
            </p>
          </div>
          <div className="flex items-center gap-x-2">
            <StarIcon />
            <p className="text-black dark:text-white font-serif text-[16px] font-[300] ">
              Creative and results-driven
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
