import React from "react";
// commit item
const ItemDate: React.FC = () => {
  return (
    <div className="grid grid-cols-5 md:max-xxxl:py-4 py-8 -space-x-7  xl:max-xxxl:px-24 md:max-xl:px-28 px-40 font-bold md:text-[16px] xl:text-[20px]">
      <div className="col-span-2 flex items-center ">
        <p className=" text-white">
          1<sup>st</sup> Quarter - 2023
        </p>
        <div className="border-b flex-1 border-white translate-y-4 mx-6 -translate-x-3 max-w-[187px]"/>
      </div>
      <div className="col-span-2 flex items-center  ">
        <p className=" text-white">
          3<sup>rd</sup> Quarter - 2024
        </p>
        <div className="border-b flex-1 border-white translate-y-4   mx-4 -translate-x-3 max-w-[242px]"></div>
      </div>

      <div className="col-span-1 flex items-center">
        <p className=" text-white">
          2 <sup>nd</sup> Quarter - 2025
        </p>
        <div className="border-b flex-1 border-white translate-y-4 max-w-[62px] " />
      </div>
    </div>
  );
};

export default ItemDate;
