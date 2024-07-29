import React from "react";

const Menu: React.FC = () => {
  return (
    
    <div className="w-full h-full grid grid-cols-3 md:gap-x-0 xl:gap-x-2 z-50 md:mt-[27px] xl:mt-4 2xl:mt-2 md:ml-20 xl:ml-14 2xl:ml-12">
      <div className="md:w-[100px] xl:w-[123px] 2xl:w-[153px] md:h-[24px] xl:h-[36px] bg-custom-gradient border border-[#945C3C] shadow-custom rounded-customborder flex items-center justify-center">
        <span className="text-center text-[12px]">Demo 01</span>
      </div>
      <div className="md:w-[100px] xl:w-[123px] 2xl:w-[153px] md:h-[24px] xl:h-[36px] bg-custom-gradient  rounded-customborder flex items-center justify-center">
        <span className="text-center text-[12px]">Demo 02</span>
      </div>
      <div className="md:w-[100px] xl:w-[123px] 2xl:w-[153px] md:h-[24px] xl:h-[36px] bg-custom-gradient rounded-customborder flex items-center justify-center">
        <span className="text-center text-[12px]">Demo 03</span>
      </div>
    </div>
  );
};

export default Menu;
