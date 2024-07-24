import LeftSide from "@components/solution/LeftSide";
import RightSide from "@components/solution/RightSide";
import React from "react";

const Solution: React.FC = () => {
  return (
    <div className="container">
      <section
        className="
          w-full flex flex-col 
          items-center justify-center
         
          "
      >
        <div className="flex flex-col w-full , my-auto  ">
          <div className="flex flex-row items-start justify-center relative gap-[24px] ">
            <LeftSide />
            <RightSide />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solution;
