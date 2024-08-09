import ItemContainer from "@components/container/Container";
import LeftSide from "@pages/solution/components/technology/LeftSide";
import RightSide from "@pages/solution/components/technology/RightSide";
import React from "react";

const Solution: React.FC = () => {
  return (
    <div className="flex flex-col w-full gap-y-8 h-full relative">
      <ItemContainer extraCss="pt-9 pb-[13px] pl-10 flex md:max-lg:flex-col-reverse gap-[42px]  ">
        <div className="md:w-[100%] lg:w-[58%] md:h-[40%] lg:h-full ">
          <LeftSide />
        </div>{" "}
        <div className="md:max-lg:w-full w-[42%] md:h-[60%] lg:h-full relative  ">
          <RightSide />
        </div>{" "}
      </ItemContainer>
    </div>
  );
};

export default Solution;
