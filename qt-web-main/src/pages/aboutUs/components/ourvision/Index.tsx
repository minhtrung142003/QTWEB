import React from "react";
import "../aboutus.css";
import ItemFive from "./ItemFive";
import ItemDate from "./ItemDate";
import ItemOne from "./ItemOne";
import { ItemTwo_Four } from "./ItemTwo_Four";
import { Numbers } from "@pages/aboutUs/DataAboutUs";
const OurVision: React.FC = () => {
    const getBackground = (index: number) => {
        if(index === 0 ){
            return '#F0D8BB';
        }
        else if(index === 1) {
            return '#E5C39A';
        }
        else {
            return '#FEF1E0';
        }
    } 
  return (
    <div className="w-full h-full flex flex-col flex-1 md:max-xxxl:py-8 py-20">
     
      <div className="flex flex-row justify-center items-center z-10 md:max-xl:-space-x-[57px] -space-x-[72px] ml-10">
        <ItemOne />
        {Numbers.map((number, index) => (
            <ItemTwo_Four stepNumber={number} backgroundColor={getBackground(index)} />
        ))}
        <ItemFive />
      </div>
      <ItemDate />
    </div>
  );
};

export default OurVision;
