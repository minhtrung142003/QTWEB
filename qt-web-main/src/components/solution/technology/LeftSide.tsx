import React from "react";
import { SvgTechnology } from "./SvgTechnology";
import { items, content2 } from "./Data";
const LeftSide: React.FC = () => {
  return (
    <div className="container w-[50%] h-full">
      <div className="w-full h-[50%] mt-[-4%]">
        <div className="flex space-x-4">
          <h3 className="text-[32px] font-bold text-colorWhite">Support</h3>
          <h3 className="text-[32px] font-bold text-colorOrgane">
            All Platforms
          </h3>
        </div>
        <div className="w-full h-full grid grid-cols-6 md:gap-x-16 xl:gap-x-3 md:py-20 xl:py-12 md:mt-[-14%] xl:mt-[-4%] ">
          {items.map((item, index) => (
            <div
              key={index}
              className=
                {`col-span-1 rounded-lg bg-[#CDCDCE] flex flex-col justify-center items-center 
                  md:p-0 xl:p-2 md:px-10 xl:px-0
                  group border border-transparent hover:border-[#945c3c] hover:text-[#945c3c] hover:shadow-hover transition-all ${
                index % 2 === 1 ? "translate-y-[23px]" : ""
              }`}
            >
              <img
                src={item.src}
                className={`max-h-20 max-w-20 object-contain md:p-2 xl:p-0 ${item.text === "Augmented Reality" ? "ml-8" : "ml-0"} `}
                alt=""
              />
              <p className="text-center md:text-[14px] xl:text-[16px] font-semibold mt-5">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* content 2 */}
      <div className="w-full h-[50%] md:mt-[-3%] xl:mt-3">
        <div className="flex space-x-4">
          <h3 className="text-[32px] font-bold text-colorWhite">
            With the lastest
          </h3>
          <h3 className="text-[32px] font-bold text-colorOrgane">Technology</h3>
        </div>

        <div className="container w-full h-full grid grid-cols-3  md:gap-x-20 xl:gap-x-8 md:mt-[-3%] xl:mt-0 ">
        {content2.map((item, index) => (
          <div
            key={index}
            className="w-full h-full col-span-1 flex flex-col justify-center items-center md:p-[79px] xl:p-20 relative group"
          >
            <SvgTechnology />
            <img
              src={item.src}
              className={`z-20 -translate-y-7 object-contain   ${item.text === "Web development" ? "md:max-w-28 xl:max-w-36" : "scale-150 md:max-w-12 xl:max-w-full"}`}
              alt={item.text}
            />
            <div className="md:w-28 xl:w-36 md:h-5 xl:h-7 md:my-5 xl:my-3 2xl:my-0 md:mx-[-10%] xl:mx-[-3%] 2xl:mx-0 rounded-xl bg-white flex items-center justify-center absolute bottom-[40px] left-16 transition-all duration-300 group-hover:opacity-100 group-hover:bg-colorOrgane">
              <p className="font-bold md:text-[12px] xl:text-[16px] group-hover:text-white">
                {item.text}
              </p>
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};
export default LeftSide;
