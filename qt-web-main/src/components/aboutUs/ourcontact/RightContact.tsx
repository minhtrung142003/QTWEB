import React from "react";
import { items } from "@components/solution/technology/Data";
import { ItemRight } from "./DataContact";
const RightContact: React.FC = () => {
  return (
    <div className="container w-full md:h-[93%] xl:h-[95%] grid grid-rows-7 rounded-xl border-[#2F7A49] border-2 bg-[#E1E1E1] opacity-90">
        {/* col 1, 2 */}
      {ItemRight.map((item, index) => (
        <div key={index} className="row-span-1 grid grid-cols-2 mx-7">
          <div className="col-span-1 mt-7 text-[14px] font-semibold px-3">
            <p className=" text-[#464646] flex  justify-start ml-3">
              {item.label}
              <span className="text-[#F04438]">*</span>
            </p>
            <div className="w-full h-[90%] border-2 border-white rounded-lg mt-1"></div>
          </div>
          <div className="col-span-1 mt-7 text-[14px] font-semibold px-3">
            <p className=" text-[#464646] flex  justify-start ml-3">
              {item.required}
              <span className="text-[#F04438]">*</span>
            </p>
            <div className="w-full h-[90%] border-2 border-white rounded-lg mt-1"></div>
          </div>
        </div>
      ))}
        {/* col 3,4 */}
      <div className="col-span-1 mt-7 text-[14px] font-semibold mx-10">
        <p className=" text-[#464646] flex  justify-start ml-3">
          Company
          <span className="text-[#F04438]">*</span>
        </p>
        <div className="w-full h-[90%] border-2 border-white rounded-lg mt-1"></div>
      </div>
      <div className="col-span-1 mt-7 text-[14px] font-semibold mx-10">
        <p className=" text-[#464646] flex  justify-start ml-3">
          What would you like to discuss?
        </p>
        <div className="w-full h-[90%] border-2 border-white rounded-lg mt-1"></div>
      </div>
      {/* col 5 */}
      <div className="row-span-2 mx-10 mt-7 flex flex-col">
        <p className=" text-[#464646] text-[14px] font-semibold flex justify-start ml-3 ">
          Services
        </p>
        <div className="grid grid-cols-6 gap-x-3 w-full h-full  translate-y-4 md:px-0 xl:px-2 md:py-2 xl:py-0">
          {items.map((item, index) => (
            <div
              key={index}
              className="col-span-1 rounded-lg border-2 border-[#888888] flex flex-col items-center justify-center px-3 py-2  "
            >
              <img
                src={item.src}
                className={`md:max-w-7 xl:max-h-10 md:max-h-6 xl:max-w-10 object-contain ${
                  item.text === "Augmented Reality" ? "ml-3" : "ml-0"
                } `}
                alt=""
              />
              <p className="md:text-[6px] xl:text-[8px] xxxl:text-[10px] font-semibold text-[#292929] mt-2">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* submit */}
      <div className="row-span-1 w-[84%] md:h-[44%] xl:h-[50%] rounded-lg bg-[#2A753F] flex justify-center items-center mt-7 mx-auto">
        <p className="font-bold text-[16px] text-white text-center">SUBMIT</p>
      </div>
    </div>
  );
};

export default RightContact;
