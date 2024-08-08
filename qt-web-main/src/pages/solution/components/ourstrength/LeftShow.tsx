import React from "react";
import { SolutionOurStrength } from "@constants/index";
import "./style.css";
const LeftShow: React.FC = () => {
  return (
    <div className="container_leftshow">
      <div className="content_leftshow flex md:space-x-1 lg:space-x-2 ">
        <span className="font-bold text-[#F9F9F9]">
          <span>Together, we bring</span>
        </span>
        <b className="text-colorOrgane  ">
          <span>your buidlings</span>
        </b>
        <span className="font-bold text-[#F9F9F9]">to life.</span>
      </div>
      <div className="items_leftshow">
        {Array.from({ length: 9 }).map((_, index) => (
          <SolutionOurStrength key={index} />
        ))}
      </div>
    </div>
  );
};

export default LeftShow;
