import { RightArrow } from '@constants/index'
import React from 'react'

const ItemOne: React.FC = () => {
  return (
    <div className="col-span-1 flex flex-col justify-center mt-32 md:ml-5 xl:ml-0 xxxl:ml-6 2xl:ml-0">
            <div className="  relative flex flex-col space-y-[-12%] bottom-32 md:right-28 xl:right-7 2xl:right-1 z-40 ">
              <p className="font-medium text-[24px] text-[#333333] tracking-wider md:mx-10 xl:mx-[91px] md:translate-y-3 xl:translate-y-0 ">
                STEP
              </p>
              <p className="font-normal text-[86px] text-[#70462D]  pt-1">01</p>
            </div>
            <div className=" absolute md:w-[23%] xl:w-[261px] 2xl:w-[261px] md:h-48 xl:h-[234px] grid grid-cols-3/1 z-30 md:ml-[-10%] xl:ml-6 2xl:ml-[68px]">
              <div className=" w-full h-full bg-[#FFFFFF] rounded-xl border-2 flex flex-col justify-center md:p-2 xl:p-2 2xl:p-3 z-10">
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
              <div className="bg-[#FFFFFF] border-2 clip-custom-triangle -ml-20 md:my-[-2px] xl:my-0 z-20" />
            </div>
          </div>
  )
}

export default ItemOne