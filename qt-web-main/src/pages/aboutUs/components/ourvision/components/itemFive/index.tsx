import { ItemOurVision } from "@constants/index";
import React from "react";

const ItemFive: React.FC = () => {
  return (
    <div className="flex flex-col pb-12 px-28  ">
      <div className="-space-y-6 relative z-20 md:max-xl:translate-y-4">
        <p className="text2_item1">05</p>
      </div>
      <div className="flex flex-col items-center justify-center py-16">
        <div className="absolute w-[248px] h-[234px] z-10 ">
          <ItemOurVision />
        </div>
      </div>
    </div>
  );
};

export default ItemFive;
