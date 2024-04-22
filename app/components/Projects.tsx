/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const Projects = () => {
  return (
    <div className="mb-52 lg:px-10 px-5 flex flex-col justify-center items-center gap-y-[53px]">
      <p className="text-black lg:text-[40px] lg:leading-normal text-2xl font-bold lg:w-[637px] self-start">
        Some various types of projects I’ve done so far
      </p>

      <div className="flex lg:gap-[21px] gap-y-[21px] flex-wrap">
        <a target="_blank" href="https://mygift.myserviceagent.net/">
          <div className="lg:w-[538px] lg:h-[538px] bg-[#C3D5E6] rounded-[15px] lg:px-20 px-10 lg:pt-[53px] pt-10 overflow-hidden">
            <img src="/images/mygift.png" alt="mygift" className="h-full" />
          </div>
        </a>
        <a target="_blank" href="https://purplesale.finance/">
          <div className="lg:w-[769px] lg:h-[538px] bg-[#FFA3B0] rounded-[15px] lg:px-20 px-10  lg:pt-[53px] pt-10 overflow-hidden  ">
            <img
              src="/images/purplesale.png"
              alt="purplesale"
              className="object-cover w-full"
            />
          </div>
        </a>
        <a target="_blank" href="https://mygift.myserviceagent.net/">
          <div className="lg:w-[769px] lg:h-[538px] bg-[#FEDB16] rounded-[15px]  lg:px-20 px-10 lg:pt-[53px] pt-10 overflow-hidden">
            <img src="/images/alienchain.png" alt="mygift" />
          </div>
        </a>
        <a target="_blank" href="https://myserviceagent.net/">
          <div className="lg:w-[538px] lg:h-[538px] bg-[#EB2931] rounded-[15px] lg:px-20 px-10 lg:pt-[53px] pt-10 overflow-hidden">
            <img
              src="/images/myserviceagent.png"
              alt="myserviceagent"
              className="h-full"
            />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Projects;
