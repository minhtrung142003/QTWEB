import { ItemOurVision } from "@constants/index";
import React from "react";

const ItemFive: React.FC = () => {
  return (
    <div className="col-span-1 flex flex-col justify-center mt-32 xl:-translate-x-12  xxxl:-translate-x-28 2xl:-translate-x-16">
      <div className="  relative flex flex-col space-y-[-9%] bottom-32 md:right-8 xl:right-14 z-20  ">
        <p className="font-medium text-[24px] text-[#333333] tracking-wider mx-[91px] md:translate-y-3 xl:translate-y-0  ">
          STEP
        </p>
        <p className="font-normal text-[86px] text-[#70462D] md:ml-16 xl:ml-0 ">
          05
        </p>
      </div>
      <div className="absolute w-[248px] h-[234px] z-10">
        <ItemOurVision />
      </div>
    </div>
  );
};

export default ItemFive;
