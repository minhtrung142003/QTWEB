import React from "react";
import LeftContact from "./LeftContact";
import RightContact from "./RightContact";

const OurContact: React.FC = () => {
  return (
    <div className="container w-full h-full flex flex-row ">
      <div className="w-[58%] h-full">
        <LeftContact />
      </div>
      <div className="w-[42%] h-full mt-[35px]">
        <RightContact />
      </div>
    </div>
  );
};

export default OurContact;
