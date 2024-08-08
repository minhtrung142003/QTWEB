import React from "react";
import "../aboutus.css";
import ItemFive from "./ItemFive";
import ItemDate from "./ItemDate";
import ItemOne from "./ItemOne";
import { ItemTwo_Four } from "./ItemTwo_Four";
import { Numbers } from "@pages/aboutUs/DataAboutUs";
const OurVision: React.FC = () => {
  const getBackground = (index: number) => {
    if (index === 0) {
      return "#F0D8BB";
    } else if (index === 1) {
      return "#E5C39A";
    } else {
      return "#FEF1E0";
    }
  };
  return (
    <div className="w-full h-full flex flex-col flex-1 md:max-xxxl:py-8 xxxl:max-xxl:py-0 py-20 ">
      <div className="flex flex-row  justify-center items-center z-10 w-full md:max-lg:flex-wrap md:max-xl:-space-x-[57px] -space-x-[72px] md:max-lg:ml-1 ml-[22px] ">
        <ItemOne />
        {Numbers.map((number, index) => (
          <ItemTwo_Four
            stepNumber={number}
            backgroundColor={getBackground(index)}
          />
        ))}
        <div className="md:max-lg:w-full md:max-lg:flex md:max-lg:justify-start items-center md:max-lg:-translate-y-7">
          <ItemFive />
        </div>
      </div>
      <ItemDate />
    </div>
  );
};

export default OurVision;
