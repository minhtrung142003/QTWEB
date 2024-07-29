import React from "react";
import "./aboutus.css";
import { RightArrow } from "@constants/index";
import { DivOurVision } from "@assets/svg/DivOurVision";
import { ItemOurVision } from "@constants/index";
const OurVision: React.FC = () => {
  const steps = ["02", "03", "04"];
  return (
    <div className="container">
      {/* div 1 */}
      <div className="flex-col container w-full h-full flex px-24">
        <div className=" flex-1 w-full h-full grid grid-cols-5 mt-[1%] ">
          {/* item 1 */}
          <div className="col-span-1 flex flex-col justify-center mt-32 ">
            {/* div tiêu đề */}
            <div className="  relative flex flex-col space-y-[-12%] bottom-32 right-[72px] z-40  ">
              <p className="font-medium text-[24px] text-[#333333] tracking-wider mx-[91px]  ">
                STEP
              </p>
              <p className="font-normal text-[86px] text-[#70462D]  pt-1">01</p>
            </div>
            {/* div hình tam giác */}
            <div className=" absolute w-[261px] h-[234px] grid grid-cols-3/1 z-30 ml-10">
              <div className=" w-full h-full bg-[#FFFFFF] rounded-xl border-2 flex flex-col justify-center p-3 z-10">
                <h3 className="font-bold text-[16px] text-[#64402B] flex justify-start">
                  TIÊU ĐỀ CHÍNH{" "}
                </h3>
                <p className="text-[14px] font-normal text-[#64402B]  flex justify-start mt-2 -mb-[2px]">
                  Mô tả kỹ hơn về mục tiêu
                </p>
                <span className="text-[14px] font-normal text-[#64402B] flex justify-start -mb-[2px]">
                  của giai đoạn này.
                </span>
                <span className="text-[14px] font-normal text-[#64402B] flex justify-start -mb-[2px]">
                  {" "}
                  Dài ba dòng.
                </span>
                <div className="text-[14px] font-normal text-[#64402B] flex justify-start mt-6  ">
                  <span className="underline-container">
                    <a className="mr-1 -my-1" href="">
                      Link tham khảo
                    </a>
                    <RightArrow className="ml-1" />
                  </span>
                </div>
              </div>
              <div className="bg-[#FFFFFF] border-2 clip-custom-triangle -ml-20 z-20"></div>
            </div>
          </div>
          {/* item 2,3,4 */}
          <div className="col-span-3 flex">
            {steps.map((item, index) => (
              <div
                key={index}
                className="flex flex-col justify-center mt-32 mx-[-19px]"
              >
                {/* div tiêu đề */}
                <div className="  relative flex flex-col space-y-[-9%] bottom-32 right-[70px] z-20  ">
                  <p className="font-medium text-[24px] text-[#333333] tracking-wider mx-[91px]  ">
                    STEP
                  </p>
                  <p className="font-normal text-[86px] text-[#70462D]  ">
                    {item}
                  </p>
                </div>
                {/* div hình chữ nhật và tam giác */}
                <div className="absolute w-[281px] h-[234px] z-10">
                  <DivOurVision />
                </div>
              </div>
            ))}
          </div>
          {/* item 5 */}
          <div className="col-span-1 flex flex-col justify-center mt-32">
            <div className="  relative flex flex-col space-y-[-9%] bottom-32 right-28 z-20  ">
              <p className="font-medium text-[24px] text-[#333333] tracking-wider mx-[91px]  ">
                STEP
              </p>
              <p className="font-normal text-[86px] text-[#70462D]  ">05</p>
            </div>
            <div className="absolute w-[248px] h-[234px] z-10">
              <ItemOurVision />
            </div>
          </div>
          {/* item width */}
          <div className="grid grid-cols-5 translate-y-14 px-16 gap-x-[185px]">
            <div className="col-span-2 flex items-center gap-x-16">
              <p className="font-bold text-[20px] text-white whitespace-nowrap  w-[50%] ">
                1<sup>st</sup> Quarter - 2023
              </p>
              <div className="border-b flex-1 border-white  w-[50%] px-[92px] mt-6 ml-6 border-x-2"></div>
            </div>
            <div className="col-span-2 flex items-center gap-x-16">
              <p className="font-bold text-[20px] text-white whitespace-nowrap  w-[50%] ">
                3<sup>rd</sup> Quarter - 2024
              </p>
              <div className="border-b flex-1 border-white  w-[50%]  px-28 mt-6 ml-6 border-x-2"></div>
            </div>

            <div className="col-span-1 flex items-center">
              <p className="font-bold text-[20px] text-white whitespace-nowrap ml-10">
                2 <sup>nd</sup> Quarter - 2025
              </p>
              <div className="border-b flex-1 border-white  w-[30%]  px-10 mt-6 ml-0 border-x-2"></div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurVision;
