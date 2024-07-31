import magni from "@assets/solution/magnifying-glass 2.png";
import React from "react";
import { itemContact } from "./DataContact";

const LeftContact: React.FC = () => {
  return (
    <div className="container w-full h-full flex flex-col">
      {/* title */}
      <div className="flex flex-row font-medium md:text-[28px] xl:text-[36px] mt-5 ml-5">
        <p className="text-[#2A753F]">
          Schedule
          <span className="text-[#4F4F4F] ml-5">a time with us to</span>
        </p>
      </div>
      {/* content 1 */}
      <div className="container grid grid-cols-2 grid-rows-2  gap-x-3 gap-y-2  md:mt-5 xl:mt-2 md:px-32 xl:px-40 xxxl:px-56 2xl:px-52 md:ml-[-15%] xl:ml-[-10%]">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className={`px-3 py-1 w-full h-full rounded-2xl border-2 border-[#945C3C] bg-[#E1E1E1] opacity-80  text-center flex flex-col items-center justify-center ${
              index >= 2 ? "md:ml-[90px] xl:ml-[130px]" : ""
            }`}
          >
            <img src={magni} alt="Icon" className="w-[59px] h-[60px] mt-4" />
            <div className=" bg-[#C4815B] opacity-66 rounded-full md:w-[90px] xl:w-[140px] md:h-[17px] xl:h-[27px] flex items-center justify-center">
              <h3 className="font-bold md:text-[10px] xl:text-sm text-white">
                Customized UI
              </h3>
            </div>
            <p className="md:text-[7px] xl:text-[9px] 2xl:text-xs mt-[6px]">
              We offer customized UI based on your needs and requirements
            </p>
          </div>
        ))}
      </div>
      {/* content 2 */}
      <div 
        className="
            w-[90%] md:h-[19%] xl:h-[16%] xxxl:h-[19%] rounded-2xl border-2 border-[#945C3C] bg-[#E1E1E1] 
            grid grid-cols-custom-3 
            mt-3 md:mx-4 xl:mx-6 opacity-85">
      {itemContact.map((item, index) => (
        <div key={index} 
        className="cols-span-1 flex flex-col items-center justify-center relative">
          <div 
             className={`md:h-[27%] xl:h-[32%] rounded-2xl border-2 bg-[#945C3C] text-white text-[13px] flex justify-center items-center ${index === 2 ? 'w-[75%]' : 'w-[50%]'}`}>
            {item.title}
          </div>
          <p className="text-[#464646] md:text-[13px] xl:text-[16px] mt-2">{item.content}</p>
          {index < itemContact.length - 1 && (
            <div className="absolute inset-y-2.5 right-0 w-0.5 bg-[#945C3C]"></div>
          )}
        </div>
      ))}
      </div>
    </div>
  );
};

export default LeftContact;
