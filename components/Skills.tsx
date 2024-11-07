import React from "react";
import { skills } from "../constants/skills";

const SkillComponent = () => {
  return (
    <div className="h-[207px] w-full dark:bg-[#191A1D] bg-[#EBEDF8]">
      <div className="flex justify-center items-center gap-x-[95px] px-20">
        {skills.map((skill) => (
          <div key={skill.id} className="text-[#888888] w-[156px] border">
            {/* <img src={skill.icon} alt={skill.name} /> */}
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillComponent;
