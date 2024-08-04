import { RightArrow } from "@constants/index";

interface DivOurVisionProps {
  backgroundColor?: string;
  stepNumber: string;
}

export function ItemTwo_Four({ backgroundColor, stepNumber }: DivOurVisionProps) {
  return (
    <div className="-space-y-12 flex flex-col ">
        <div  className="-space-y-6 relative z-20 text-center pr-16 md:max-xl:translate-y-5">
          <p className="text1_item1">STEP</p>
          <p className="text2_item1">{stepNumber}</p>
        </div>

      <div className="flex relative ">
        <svg
          className=" top-0 left-0  md:w-56 xl:w-[281px] md:h-60 xl:h-[234px] "
          width="276"
          height="235"
          viewBox="0 0 276 235"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.8"
            d="M1.33595 9.23274C-1.02287 5.23299 1.86065 0.184814 6.50414 0.184814H203.573C205.697 0.184814 207.662 1.30755 208.741 3.1369L274.203 114.137C275.312 116.017 275.312 118.352 274.203 120.233L208.741 231.233C207.662 233.062 205.697 234.185 203.573 234.185H6.50415C1.86066 234.185 -1.02288 229.137 1.33595 225.137L63.2025 120.233C64.3116 118.352 64.3116 116.018 63.2025 114.137L1.33595 9.23274Z"
            fill={backgroundColor || "#FEF1E0"}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col justify-start items-start md:ml-[68px] xl:ml-[78px] mt-14 ">
          <h3 className="font-bold text-[16px] text-[#64402B]">
            TIÊU ĐỀ CHÍNH
          </h3>
          <p className="md:text-[10px] xl:text-[14px] font-normal text-[#64402B] mt-2 -mb-[2px]">
            Mô tả kỹ hơn về mục tiêu
          </p>
          <span className="md:text-[10px] xl:text-[14px] font-normal text-[#64402B] -mb-[2px]">
            của giai đoạn này.
          </span>
          <span className="md:text-[10px] xl:text-[14px] font-normal text-[#64402B] -mb-[2px]">
            Dài ba dòng.
          </span>
          <div className="md:text-[10px] xl:text-[14px] font-normal text-[#64402B] mt-6">
            <span className="underline-container z-50">
              <a className="mr-1 -my-1" href="">
                Link tham khảo
              </a>
              <RightArrow className="ml-1" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

