import React from "react";
import TitleHeader from "../Components/TitleHeader";
import { iconsList } from "../Constants";
import TechIcon from "../Components/TechIcon";

function TechStack() {
  return (
    <div className=" w-full h-full p-[1.4rem] ">
      <div className="">
        <div className=" container mx-auto md:p-0 px-5">
          <TitleHeader
            title={"Tech Stack"}
            number={"02"}
            text={"Go to tools for crafting solutions"}
          />
        </div>
        <div className="md:mt-20 mt-10 relative">
          <div className=" marquee h-52 ">
            <div className="marquee-box md:gap-12 gap-5">
              {iconsList.map((icon, index) => (
                <TechIcon key={index} icon={icon} />
              ))}
              {iconsList.map((icon, index) => (
                <TechIcon key={index} icon={icon} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechStack;
