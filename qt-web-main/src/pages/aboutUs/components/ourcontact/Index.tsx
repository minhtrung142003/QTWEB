import React from "react";
import LeftContact from "./LeftContact";
import RightContact from "./RightContact";

const OurContact: React.FC = () => {
  return (
    <div className="container w-full h-full flex flex-row ">
      <div className="w-[60%] h-full">
        <LeftContact />
      </div>
      <div className="w-[40%] h-full translate-y-4">
        <RightContact />
      </div>
    </div>
  );
};

export default OurContact;
