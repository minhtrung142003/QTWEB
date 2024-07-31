import React from "react";
// commit item
const ItemDate: React.FC = () => {
  return (
    <div className="grid grid-cols-5 md:translate-y-12 xl:translate-y-16 xxxl:translate-y-16 md:px-2 xl:px-16 xxxl:px-20 md:gap-x-40 xl:gap-x-[185px] md:ml-[-50%] xl:ml-0">
      <div className="col-span-2 flex items-center gap-x-16">
        <p className="font-bold md:text-[16px] xl:text-[20px] text-white whitespace-nowrap  w-[50%] 2xl:ml-4 ">
          1<sup>st</sup> Quarter - 2023
        </p>
        <div className="border-b flex-1 border-white  w-[50%] md:px-[82px] xl:px-[92px] 2xl:px-[92px] mt-6 md:ml-[-3%] xl:ml-6 border-x-2" />
      </div>
      <div className="col-span-2 flex items-center gap-x-16 2xl:ml-6">
        <p className="font-bold md:text-[16px] xl:text-[20px] text-white whitespace-nowrap w-[50%]  ">
          3<sup>rd</sup> Quarter - 2024
        </p>
        <div className="border-b flex-1 border-white  w-[50%]  md:px-24 xl:px-28 2xl:px-[120px] mt-6 xl:ml-6 2xl:ml-12 border-x-2"></div>
      </div>

      <div className="col-span-1 flex items-center 2xl:ml-14">
        <p className="font-bold md:text-[16px] xl:text-[20px] text-white whitespace-nowrap ml-10">
          2 <sup>nd</sup> Quarter - 2025
        </p>
        <div className="border-b flex-1 border-white  w-[30%]  md:px-5 xl:px-6 xxxl:px-9 2xl:px-7 mt-6 ml-0 border-x-2" />
      </div>
    </div>
  );
};

export default ItemDate;
