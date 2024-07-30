import React from 'react';
import { SolutionOurStrength } from '@constants/index';
const LeftShow: React.FC = () => {
    return (
        <div className="w-full h-full flex-1 flex flex-col ">
            <div className="flex md:gap-x-3 xl:gap-x-5 mt-[-3%]">
                <span className="font-bold text-[#F9F9F9] lg:text-[21px] xl:text-[28px] 2xl:text-[32px]">
                    <span>Together, we bring</span>
                </span>
                <b className="text-colorOrgane  lg:text-[21px] xl:text-[28px] 2xl:text-[32px] ">
                    <span>your buidlings</span>
                </b>
                <span className="font-bold text-[#F9F9F9] lg:text-[21px] xl:text-[28px] 2xl:text-[32px] ">
                    to life.
                </span>
            </div>
            <div className="container grid grid-cols-3 gap-y-[20px] gap-x-7 md:mt-5 xl:mt-2">
                {Array.from({ length: 9 }).map((_, index) => (
                    <SolutionOurStrength key={index} />
                ))}
            </div>
        </div>
    );
};

export default LeftShow;
{
    /* <div
        className="
            md:mt-[20px]
            lg:mt-[80px]
            xl:mt-0
            x3l:mt-[100px]
            md:grid 
            md:grid-cols-1
            xl:grid 
            xl:grid-cols-3 
            absolute 
            gap-x-[26px]
            md:gap-y-[25px] 
            lg:gap-y-[70px] 
            x912:gap-y-[30px]
            xl:gap-y-[27px] 
            x3l:gap-x-[100px]
            md:ml-[40px]
            lg:ml-[70px]
            xl:ml-[39px]
            "
      >
        <div
          className="
                  box-border
                  md:w-[200px]
                  xl:w-[234px]
                  x3l:w-[330px]
                  md:h-[150px]
                  xl:h-[177px]
                  x3l:h-[300px]
                 rounded-2xl [background:linear-gradient(126.92deg,_rgba(240,_240,_240,_0.35),_rgba(228,_228,_228,_0.7))] 
                 border-[2px] 
               
                "
        >
          <div
            className="
                    flex flex-row 
                    items-start 
                    justify-end 
                    pt-[24px]
                    md:pr-[60px]
                    xl:pr-[87px]
                    xl:pl-[88px]
                    md:mx-[10px]
                    xl:mx-0

                "
          >
            <img
              className="
                h-[60px] 
                x3l:h-[140px]
                w-[59px]
                x3l:w-[200px] 
                relative 
                "
              loading="lazy"
              alt=""
              src={magni}
            />
          </div>
          <div
            className="
                relative 
                capitalize 
                inline-block 
                border-2
                text-center
                rounded-[35px]
                bg-[#FFFFFF]
                opacity-66
                font-semibold
                md:text-[13px]
                xl:text-[14px]
                x3l:text-[24px]
                md:w-[100px]
                xl:w-[140px]
                x3l:w-[250px]
                mx-[45px]
                mt-[7px]
                x3l:mt-[15px]
                md:h-[22px]
                xl:h-[27px]
                x3l:h-[50px]
              "
          >
            Customized UI
          </div>
          <div
            className="
              self-stretch 
              relative
              md:text-[10px]
              x3l:text-[18px]
              xl:text-xs 
              text-text-color 
              z-[1] 
              md:mx-[10px]
              xl:mx-[10px]
              md:mt-[1px]
              xl:mt-[10px]
              x3l:mt-[15px]
              inline-block
            "
          >
            We offer customized UI based on
            <div className="pl-[9px]">your needs and requirements</div>
          </div>
        </div>
     
      </div> */
}
