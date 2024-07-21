import LeftSide from "@components/solution/LeftSide";
import RightSide from "@components/solution/RightSide";
import React from "react";
import bg from "@assets/solution/backgroundSolution.png";

const Solution: React.FC = () => {
  return (
    <div className="h-[843px] w-[screen] overflow-hidden bg-cover bg-no-repeat"
    style={{ paddingBottom: '13px', backgroundImage:`url(${bg})` }}
     >
      <section className="h-[707px] flex flex-col items-center justify-center my-[73px]">
        <div className="flex flex-col w-full h-full, my-auto " >
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
