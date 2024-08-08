import React from "react";

const ItemDate: React.FC = () => {
  return (
    <div className="flex md:max-xl:pt-1 xl:max-xxxl:pt-3 pt-8 font-bold md:max-xl:text-base text-xl w-full justify-center md:max-lg:-translate-y-5 md:max-lg:px-6">
      <div className="flex items-center justify-center xxl:ml-8 ">
        <p className="text-white whitespace-nowrap">
          1<sup>st</sup> Quarter - 2023
        </p>
      </div>
      <div className="border-b border-white mt-1 w-[187px] md:max-xl:w-36 " />
 
      <div className="flex items-center justify-center">
        <p className="text-white whitespace-nowrap">
          3<sup>rd</sup> Quarter - 2024
        </p>
      </div>
      <div className="border-b border-white mt-1 w-[242px] md:max-xl:w-40" />

      <div className="flex items-center justify-center">
        <p className="text-white whitespace-nowrap">
          2<sup>nd</sup> Quarter - 2025
        </p>
      </div>
        <div className="border-b border-white mt-1 w-[62px]" />

    </div>
  );
};

export default ItemDate;
