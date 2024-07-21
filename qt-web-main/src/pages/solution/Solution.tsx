import LeftSide from "@components/solution/LeftSide";
import RightSide from "@components/solution/RightSide";
import React from "react";

const Solution: React.FC = () => {
  return (
    <div className="container"
     >
      <section className="h-[707px] flex flex-col items-center justify-center my-[73px]">
        <div className="flex flex-col w-full h-full, my-auto" >
          <div className="flex flex-row items-start justify-center gap-[44px]">
            <LeftSide />
            <RightSide />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solution;
