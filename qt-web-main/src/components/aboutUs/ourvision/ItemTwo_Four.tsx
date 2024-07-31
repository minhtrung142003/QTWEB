import { DivOurVision } from "@assets/svg/DivOurVision";
import React from "react";

const ItemTwo_Four: React.FC = () => {
  const steps = ["02", "03", "04"];

  return (
    <div className="col-span-3 flex">
      {steps.map((item, index) => {
        let backgroundColor = "";
        if (item === "03") {
          backgroundColor = "#F0D8BB";
        } else if (item === "04") {
          backgroundColor = "#E5C39A";
        }
        return (
          <div
            key={index}
            className="flex flex-col justify-center mt-32 md:mx-[-40px] xl:mx-[-19px] md:-translate-x-5 xl:translate-x-0 2xl:translate-x-7"
          >
            {/* div tiêu đề */}
            <div className="  relative flex flex-col space-y-[-9%] bottom-32 right-[55px] z-20  ">
              <p className="font-medium text-[24px] text-[#333333] tracking-wider mx-[91px] md:translate-y-3 xl:translate-y-0  ">
                STEP
              </p>
              <p className="font-normal text-[86px] text-[#70462D] md:translate-y-3 xl:translate-y-0  ">
                {item}
              </p>
            </div>
            {/* div hình chữ nhật và tam giác */}
            <div className="absolute w-[281px] h-[234px] z-10 ">
              <DivOurVision backgroundColor={backgroundColor} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemTwo_Four;
