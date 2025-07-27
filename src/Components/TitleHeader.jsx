import React from "react";

function TitleHeader({ title, text, number }) {
  return (
    <div className=" flex justify-between items-center">
      <div>
        <h1 className=" gradient-title font-semibold md:text-6xl text-4xl uppercase">
          {title}
        </h1>
        <p className=" md:text-3xl md:mt-5 ">{text}</p>
      </div>
      <div className=" md:flex  hidden  items-center gap-7">
        <div className=" w-36 border  border-white-50 "></div>
        <p className=" gradient-title text-6xl">{number}</p>
      </div>
    </div>
  );
}

export default TitleHeader;
