import LeftShow from "@components/showcase/LeftShow";
import RightShow from "@components/showcase/RightShow";
import React from "react";

const Showcase: React.FC = () => {
  return (
 
      <div className="
          flex 
          items-start 
          justify-center 
          w-full
          h-full
          ">
        <LeftShow />
        <RightShow />
      </div>
  );
};

export default Showcase;
