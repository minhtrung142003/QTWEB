import React from "react";
import "../aboutus.css";
import { RightArrow } from "@constants/index";
import { DivOurVision } from "@assets/svg/DivOurVision";
import { ItemOurVision } from "@constants/index";
const OurVision: React.FC = () => {
  const steps = ["02", "03", "04"];
  return (
    <div className="container">
      {/* div 1 */}
      <div className="flex-col container w-full h-full flex md:px-24 xl:px-8 2xl:px-24">
        <div className=" flex-1 w-full h-full grid grid-cols-5 mt-[1%] ">
          {/* item 1 */}
          <div className="col-span-1 flex flex-col justify-center mt-32 md:ml-5 xl:ml-0">
            <div className="  relative flex flex-col space-y-[-12%] bottom-32 md:right-28 xl:right-7 2xl:right-1 z-40 ">
              <p className="font-medium text-[24px] text-[#333333] tracking-wider md:mx-10 xl:mx-[91px] md:translate-y-3 xl:translate-y-0 ">
                STEP
              </p>
              <p className="font-normal text-[86px] text-[#70462D]  pt-1">01</p>
            </div>
            <div className=" absolute md:w-[23%] xl:w-[261px] 2xl:w-[261px] md:h-48 xl:h-[234px] grid grid-cols-3/1 z-30 md:ml-[-10%] xl:ml-6 2xl:ml-[68px]">
              <div className=" w-full h-full bg-[#FFFFFF] rounded-xl border-2 flex flex-col justify-center md:p-3 xl:p-2 2xl:p-3 z-10">
                <h3 className="font-bold text-[16px] text-[#64402B] flex justify-start">
                  TIÊU ĐỀ CHÍNH{" "}
                </h3>
                <p className="md:text-[12px] xl:text-[14px] font-normal text-[#64402B]  flex justify-start mt-2 -mb-[2px]">
                  Mô tả kỹ hơn về mục tiêu
                </p>
                <span className="md:text-[12px] xl:text-[14px] font-normal text-[#64402B] flex justify-start -mb-[2px]">
                  của giai đoạn này.
                </span>
                <span className="md:text-[12px] xl:text-[14px] font-normal text-[#64402B] flex justify-start -mb-[2px]">
                  {" "}
                  Dài ba dòng.
                </span>
                <div className="md:text-[12px] xl:text-[14px] font-normal text-[#64402B] flex justify-start mt-6  ">
                  <span className="underline-container">
                    <a className="mr-1 -my-1" href="">
                      Link tham khảo
                    </a>
                    <RightArrow className="ml-1" />
                  </span>
                </div>
              </div>
              <div className="bg-[#FFFFFF] border-2 clip-custom-triangle -ml-20 md:my-[-2px] xl:my-0 z-20"/>
            </div>
          </div>
          {/* item 2,3,4 */}
          <div className="col-span-3 flex">
            {steps.map((item, index) => (
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
                <div className="absolute w-[281px] h-[234px] z-10">
                  <DivOurVision />
                </div>
              </div>
            ))}
          </div>
          {/* item 5 */}
          <div className="col-span-1 flex flex-col justify-center mt-32 xl:-translate-x-12  2xl:-translate-x-16">
            <div className="  relative flex flex-col space-y-[-9%] bottom-32 md:right-8 xl:right-14 z-20  ">
              <p className="font-medium text-[24px] text-[#333333] tracking-wider mx-[91px] md:translate-y-2 xl:translate-y-0  ">
                STEP
              </p>
              <p className="font-normal text-[86px] text-[#70462D] md:ml-16 xl:ml-0 ">05</p>
            </div>
            <div className="absolute w-[248px] h-[234px] z-10">
              <ItemOurVision />
            </div>
          </div>
          {/* item width */}
          <div className="grid grid-cols-5 translate-y-14 md:px-0 xl:px-16 md:gap-x-40 xl:gap-x-[185px] md:ml-[-50%] xl:ml-0">
            <div className="col-span-2 flex items-center gap-x-16">
              <p className="font-bold md:text-[16px] xl:text-[20px] text-white whitespace-nowrap  w-[50%] 2xl:ml-4 ">
                1<sup>st</sup> Quarter - 2023
              </p>
              <div className="border-b flex-1 border-white  w-[50%] md:px-[82px] xl:px-[92px] 2xl:px-[101px] mt-6 md:ml-[-3%] xl:ml-6 border-x-2"/>
            </div>
            <div className="col-span-2 flex items-center gap-x-16 2xl:ml-10">
              <p className="font-bold md:text-[16px] xl:text-[20px] text-white whitespace-nowrap w-[50%]  ">
                3<sup>rd</sup> Quarter - 2024
              </p>
              <div className="border-b flex-1 border-white  w-[50%]  md:px-24 xl:px-28 2xl:px-[120px] mt-6 xl:ml-6 2xl:ml-12 border-x-2"></div>
            </div>

            <div className="col-span-1 flex items-center 2xl:ml-14">
              <p className="font-bold md:text-[16px] xl:text-[20px] text-white whitespace-nowrap ml-10">
                2 <sup>nd</sup> Quarter - 2025
              </p>
              <div className="border-b flex-1 border-white  w-[30%]  md:px-7 xl:px-7 2xl:px-10 mt-6 ml-0 border-x-2"/>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurVision;
