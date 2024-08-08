import React from "react";
import LeftContact from "./LeftContact";
import RightContact from "./rightcontact/RightContact";

const OurContact: React.FC = () => {
  return (
    <div className="container w-full h-full flex md:flex-col lg:flex-row pl-[14px] xxl:pt-[34px]  md:max-lg:overflow-auto pr-4 box-border">
      <div className="md:w-full lg:w-[58%] h-full">
        <LeftContact />
      </div>
      <div className="md:w-full lg:w-[42%] h-full  xl:max-xxxl:mt-0 mt-2">
        <RightContact />
      </div>
    </div>
  );
};

export default OurContact;
