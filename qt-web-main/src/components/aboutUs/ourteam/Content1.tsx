import React from "react";
import { itemsOurTeam } from "../DataAboutUs";

const Content1: React.FC = () => {
  return (
    <div className="w-full h-full grid grid-cols-6 gap-x-2 md:py-40 xl:py-36 2xl:py-32 xl:px-2 xxxl:px-10 mt-[-5%]">
      {itemsOurTeam.map((item, index) => (
        <div
          key={index}
          className={`md:w-full xl:w-[90%] h-full flex-col col-span-1 border-2 border-[#945C3C] rounded-lg  bg-[#CDCDCE] 
              ${index !== 0 ? "organe-shadow-extra" : "organe-shadow"}
                          flex justify-center md:px-7 xl:px-8 md:py-6 xl:py-8 2xl:py-9 ${
                            index % 2 !== 0 ? "mt-[30px] " : ""
                          }  md:max-w-40 md:h-52 xl:max-w-[198px] xl:h-64 2xl:h-[282px]`}
        >
          <div
            className={`rounded-full border-1 w-full h-full flex justify-center items-center object contain`}
            style={{ backgroundColor: item.backgroundColor }}
          />
          <div className="flex flex-col justify-center items-center w-full mt-7 space-y-2">
            <div
              className={`flex justify-center items-center  rounded-2xl px-4 py-2 md:min-w-28 xl:min-w-40 2xl:min-w-44 ${
                index === 0 ? "bg-[#945C3C]" : "bg-[#F2F2F2]"
              }`}
            >
              <h3
                className={`md:text-[8px] xl:text-[10px]  2xl:text-[11px] font-bold  whitespace-nowrap ${
                  index === 0 ? "text-white" : "text-black"
                } `}
              >
                {item.role}
              </h3>
            </div>
            <p className="md:text-[10px] xl:text-[12px] font-normal text-black text-center whitespace-nowrap">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Content1;
