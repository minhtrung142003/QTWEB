import React from "react";
import LeftContact from "./LeftContact";
import RightContact from "./rightcontact/RightContact";

const OurContact: React.FC = () => {
  return (
    <div className="container w-full h-full flex md:flex-col lg:flex-row pl-[12px] md:max-lg:overflow-y-auto md:max-lg:overflow-x-hidden xl:overflow-y-auto xl:overflow-x-hidden md:max-lg:pr-3 xl:pr-4 mt-9">
      <div className="md:w-full lg:w-[58%] h-full xl:max-2xl:-mb-12 ">
        <LeftContact />
      </div>
      <div className="md:w-full lg:w-[42%] h-full xl:max-2xl:-mb-12 2xl:max-xxl:-mb-3 md:max-lg:mt-3">
        <RightContact />
      </div>
    </div>
  );
};

export default OurContact;
