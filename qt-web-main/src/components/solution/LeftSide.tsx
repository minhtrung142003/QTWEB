import React from "react";
import window1 from "@assets/solution/windows.png";
import macs from "@assets/solution/mac-os-logo.png";
import laptop from "@assets/solution/laptop.png";
import subtract from "@assets/solution/Subtract.png";
import virutal from "@assets/solution/virtual-reality-glasses.png";
import augmented from "@assets/solution/augmented-reality.png";
import unreal from "@assets/solution/unreal.png";
import unity1 from "@assets/solution/unity1.png";
import unity2 from "@assets/solution/unity2.png";
import bgcomponent from "@assets/solution/bg_component.png";
import webd from "@assets/solution/webd.png";
const LeftSide: React.FC = () => {
  return (
    <div
      className="
        w-screen h-[907px] relative 
        flex flex-col 
        items-end justify-start 
        px-[26px]
        md:mx-[-100px]
        lg:mx-0
    "
    >
      <div
        className="
          self-stretch relative shrink-0 
          text-left text-base text-stroke-gradient font-inter 
          md:top-[70px] 
          xl:top-[125px]
          2xl:top-[75px]
          xxl:top-[135px]
          xl:mx-[30px]
          xl:ml-[-5px]
          lg:mr-[-115px]
          xl:mr-0
          2xl:ml-0
          xl:w-[1360px]
          2xl:w-full
          2xl:mx-0

          "
      >
        <div
          className=" 
            md:h-[820px]
            xl:h-[750px]
            2xl:h-[637px]
            xxl:h-[1000px]
            md:w-full
            lg:w-full
            xl:w-full      
            transform translate-y-[10px]
            rounded-2xl [background:linear-gradient(126.92deg,_rgba(240,_240,_240,_0.35),_rgba(228,_228,_228,_0.7))] 
            box-border
            flex flex-row items-end justify-start
            px-[37px] text-center text-icon-color-unhover
            border-[2px] 
            md:pt-[100px] 
            xl:pt-[20px]
            "
        >
          <div className="self-stretch flex flex-col items-end justify-start gap-[14px] ">
            <div className="self-stretch flex flex-row items-start justify-start gap-[12.5px] ">
              <div className="flex-1 flex flex-col items-start justify-start gap-[28px] ">
                <div className="self-stretch flex flex-col items-start justify-start gap-[28px]">
                  {/* tiêu đề 1 */}
                  <div
                    className="
                      flex flex-row 
                      items-start justify-start 
                      gap-[10px]
                      xxl:gap-[20px]
                      md:mt-[-60px] md:ml-[-5px] 
                      lg:ml-[15px]
                      xl:mt-0 xl:ml-0  <!-- Đặt lại cho màn hình xl -->
                      xxl:mt-[30px] xxl:ml-[20px]

                    "
                  >
                    <h1
                      className="
                        m-0 relative font-bold z-[1] 
                      text-colorWhite 
                        md:text-[25px] 
                        xl:text-[32px] 
                        xxl:text-[48px]
                      "
                    >
                      Support
                    </h1>
                    <h1
                      className="
                        m-0 relative font-bold z-[1] 
                        md:text-[25px] 
                        xl:text-[32px] 
                        xxl:text-[48px]
                      text-[#945c3c]
                    "
                    >
                      All Platform
                    </h1>
                  </div>
                  {/* end tiêu đề 1 */}
                  {/* ---------------------------------------------------------------------------------------------------- */}
                  {/* content 1 */}
                  <div
                    className="
                        content
                        grid grid-cols-3 
                        md:gap-x-[6px]
                        lg:gap-x-[20px]
                        xl:gap-x-[11px] 
                        xxl:gap-x-[41px] 
                        gap-y-[15px] 
                        md:grid-cols-3  
                        md:gap-y-[38px]
                        xl:grid-cols-6 
                        md:ml-[-5px]
                        lg:ml-3
                        xxl:mt-[80px]
                        text-center   
                        "
                  >
                    {/* item 1 */}
                    <div
                      className="
                          mr-[2px]
                          items-start 
                          justify-start 
                          w-[115px]
                          xxl:w-[130px]
                          z-[1] 
                          "
                    >
                      <div className="h-[175px] flex-1 relative">
                        <img
                          className="
                            absolute 
                            top-[0px] 
                            left-[0px] 
                            rounded-3xs 
                            md:w-[105px]
                            lg:w-[200px]
                            xl:w-full
                            h-full
                            xxl:h-[200px]
                            hover:border-2
                            hover:rounded-xl
                          hover:border-[#945c3c]
                            hover:border-opacity-100
                            "
                          alt=""
                          src={bgcomponent}
                        />
                        <div
                          className="absolute top-[112px] left-[14px] capitalize font-semibold z-[1] hover:border-colorOrgane 
                          hover:text-colorOrgane"
                        >
                          <p className="m-0">Window</p>
                          <p className="m-0">Application</p>
                        </div>
                        <img
                          className="absolute top-[24px] left-[28px] w-[60px] h-[60px] overflow-hidden z-[1]"
                          loading="lazy"
                          alt=""
                          src={window1}
                        />
                      </div>
                    </div>
                    {/* item 2 */}
                    <div
                      className="
                           items-start justify-start 
                           pt-[23px] 
                           px-0 pb-0 box-border 
                           w-[115px] 
                           
                           xxl:w-[130px]
                          hover:border-colorOrgane hover:text-colorOrgane"
                    >
                      <div className="self-stretch h-[175px] relative">
                        <div
                          className="
                        absolute top-[0px] left-[0px] 
                        w-full 
                        flex flex-row items-start justify-start h-full z-[1]"
                        >
                          <div className="h-[175px] flex-1 relative ">
                            <img
                              className="
                                absolute 
                                top-[0px] 
                                left-[0px] 
                                rounded-3xs 
                                md:w-[105px]
                                lg:w-[200px]
                                xl:w-full 
                                 xxl:h-[200px]
                                h-full
                                 hover:border-2
                            hover:rounded-xl
                          hover:border-[#945c3c]
                            hover:border-opacity-100
                                "
                              alt=""
                              src={bgcomponent}
                            />

                            <div className="absolute top-[112px] left-[30px] capitalize font-semibold z-[1]">
                              <p className="m-0 xxl:ml-2 mt-2">MacOS</p>
                              <p className="m-0">IOS</p>
                            </div>
                          </div>
                        </div>
                        <img
                          className="absolute top-[25px] 
                            left-[28px] 
                            w-[60px]
                            xxl:w-[70px] 
                            h-[60px] 
                            xxl:h-[65px]
                            overflow-hidden z-[2]"
                          loading="lazy"
                          alt=""
                          src={macs}
                        />
                      </div>
                    </div>
                    {/* item 3 */}
                    <div
                      className="
                            h-[175px]
                            relative 
                            w-[115px]
                            xxl:w-[130px]
                            mr-[1px]
                          hover:border-colorOrgane 
                          hover:text-colorOrgane
                          "
                    >
                      <div className="absolute top-[0px] left-[0px] w-full flex flex-wrap items-start justify-start h-full z-[1]">
                        <div className="h-[175px] flex-1 relative">
                          <img
                            className="
                              absolute top-[0px] 
                              left-[0px]
                              rounded-3xs   
                              md:w-[105px]
                              lg:w-[200px]
                              xl:w-full  
                              xxl:h-[200px]
                               hover:border-2
                            hover:rounded-xl
                          hover:border-[#945c3c]
                            hover:border-opacity-100
                              h-full"
                            alt=""
                            src={bgcomponent}
                          />

                          <div
                            className="absolute top-[112px] left-[14px] capitalize font-semibold z-[1] hover:border-colorOrgane 
                          hover:text-colorOrgane"
                          >
                            <p className="m-0 xxl:ml-[10px]">Window</p>
                            <p className="m-0 xxl:ml-[7px]">Application</p>
                          </div>
                        </div>
                      </div>
                      <img
                        className="
                        absolute top-[17px] 
                        left-[21px]
                        xxl:left-[25px]
                        w-[75px] 
                        h-[75px]
                        xxl:h-[85px]
                         overflow-hidden z-[2]"
                        loading="lazy"
                        alt=""
                        src={virutal}
                      />
                    </div>
                    {/* item 4 */}
                    <div
                      className="
                            items-start justify-start 
                            pt-[23px] px-0 pb-0 mr-[1px]
                            box-border 
                            w-[115px]
                            xxl:w-[130px]
                            hover:border-colorOrgane hover:text-colorOrgane"
                    >
                      <div className="self-stretch h-[175px] relative">
                        <div className="absolute top-[0px] left-[0px] w-full flex flex-row items-start justify-start h-full z-[1]">
                          <div className="h-[175px] flex-1 relative">
                            <img
                              className="
                              absolute 
                              top-[0px] 
                              left-[0px] 
                              rounded-3xs
                              md:w-[105px]
                              lg:w-[200px]
                              xl:w-full  
                               xxl:h-[200px]
                                hover:border-2
                            hover:rounded-xl
                          hover:border-[#945c3c]
                            hover:border-opacity-100 
                              h-full"
                              alt=""
                              src={bgcomponent}
                            />

                            <div className="absolute top-[112px] left-[13px] capitalize font-semibold z-[1]">
                              <p className="m-0">Augmented</p>
                              <p className="m-0">Reality</p>
                            </div>
                          </div>
                        </div>
                        <img
                          className="
                            absolute top-[24px] 
                            left-[38px]
                             w-[60px]
                             xxl:w-[66px] 
                             h-[60px]
                             xxl:h-[66px]
                              overflow-hidden z-[2]"
                          loading="lazy"
                          alt=""
                          src={augmented}
                        />
                      </div>
                    </div>
                    {/* item 5 */}
                    <div
                      className="
                          h-[175px] 
                          
                          mr-[2px]
                          relative  
                          w-[115px]
                          xxl:w-[130px]
                        hover:border-colorOrgane 
                        hover:text-colorOrgane "
                    >
                      <div className="absolute top-[0px] left-[0px] w-full flex flex-row items-start justify-start h-full z-[1]">
                        <div className="h-[175px] flex-1 relative">
                          <img
                            className="
                                absolute 
                                top-[0px] 
                                left-[0px] 
                                rounded-3xs 
                                md:w-[105px]
                                lg:w-[200px]
                                xl:w-full  
                                 xxl:h-[200px]
                                  hover:border-2
                            hover:rounded-xl
                          hover:border-[#945c3c]
                            hover:border-opacity-100
                                h-full"
                            alt=""
                            src={bgcomponent}
                          />

                          <div
                            className="absolute 
                              top-[112px]
                              xxl:top-[130px]
                              left-0 
                              right-0 capitalize font-semibold z-[1]"
                          >
                            <p className="m-0">Website</p>
                          </div>
                        </div>
                      </div>
                      <img
                        className="
                            absolute top-[19px] l
                            eft-[23px] 
                            w-[70px]
                            xxl:w-[90px]
                            h-[70px]
                            xxl:h-[90px]
                            lg:ml-[22px]
                            xl:ml-[22px]
                            xxl:ml-[20px]
                            overflow-hidden z-[2]"
                        loading="lazy"
                        alt=""
                        src={laptop}
                      />
                    </div>
                    {/* item 6 */}
                    <div
                      className="
                         items-start justify-start 
                         pt-[23px] 
                         px-0 pb-0 box-border  
                         w-[115px] 
                         xxl:w-[130px]
                         hover:border-colorOrgane hover:text-colorOrgane"
                    >
                      <div className="self-stretch h-[175px] relative">
                        <div className="absolute top-[0px] left-[0px] w-full flex flex-row items-start justify-start h-full z-[1]">
                          <div className="h-[175px] flex-1 relative">
                            <img
                              className="
                                  absolute 
                                  top-[0px] 
                                  left-[0px] 
                                  rounded-3xs 
                                  md:w-[105px]
                                  lg:w-[200px]
                                  xl:w-full
                                  xxl:h-[200px] 
                                  hover:border-2
                                  hover:rounded-xl
                                hover:border-[#945c3c]
                                  hover:border-opacity-100  
                                  h-full"
                              alt=""
                              src={bgcomponent}
                            />

                            <div
                              className="
                                absolute 
                                  top-[112px] 
                              xxl:top-[130px]
                                  left-0 right-0 
                                capitalize 
                                font-semibold z-[1] 
                                flex items-center justify-center
                                "
                            >
                              <p className="m-0 text-center">Anroid</p>
                            </div>
                          </div>
                        </div>
                        <img
                          className="
                            absolute top-[21px] 
                            left-[38px] 
                            w-[39px]
                            xxl:w-[49px]
                            h-[66px] 
                            xxl:h-[80px] 
                            overflow-hidden z-[2]"
                          loading="lazy"
                          alt=""
                          src={subtract}
                        />
                      </div>
                    </div>
                  </div>
                  {/* end content 1 */}
                </div>

                {/* tiêu đề 2 */}
                <div className="flex flex-row items-start justify-start gap-[7px] ">
                  <h1
                    className="
                      m-0 relative font-bold z-[1] 
                      text-[32px]
                      xxl:text-[48px] 
                      text-colorWhite
                      md:text-[25px] 
                      xl:text-[32px]
                      xxl:top-[70px]
                       lg:ml-[15px]
                       xl:ml-0

                      "
                  >
                    With the lastest
                  </h1>
                  <h1 className="m-0 relative font-bold text-[32px] text-[#945c3c]  md:text-[25px] xl:text-[32px] xxl:top-[70px] xxl:text-[48px] ">
                    Technology
                  </h1>
                </div>
              </div>
            </div>
            {/* content 2 */}
            <div
              className="
                self-stretch 
                grid flex-row 
                items-start justify-start 
                py-2.5 px-0 
                lg:w-[830px]
                xl:w-full
                lg:mx-[21px]
                xl:mx-0
                gap-[28.5px] 
                grid-cols-[repeat(3,_minmax(174px,_1fr))] z-[1] 
                text-right mq450:grid-cols-[minmax(174px,_1fr)] 
                xxl:mt-[110px]
                "
            >
              {/* item 1 */}
              <div className="relative rounded-2xl overflow-hidden group">
                <div
                  className="
                    clip-custom absolute w-full md:h-[200px] xl:h-full 
                    group-hover:border-2 
                    group-hover:border-[#945c3c] 
                    group-hover:border-opacity-100 
                    transition-all duration-300
                    "
                >
                  <img
                    className="w-full h-full absolute top-0 left-0"
                    alt=""
                    src={bgcomponent}
                  />
                </div>
                <div className="self-stretch flex-1 flex flex-col items-start justify-start pt-[40px] pb-0 pr-0 pl-[54px] relative gap-[38px] z-[1]">
                  <img
                    className="md:w-[104px] xl:w-[134px] flex-1 relative object-contain z-[2]"
                    loading="lazy"
                    alt=""
                    src={unreal}
                  />
                  <div className="flex flex-row items-start justify-start py-0 pr-0 pl-[19px] z-[2]">
                    <div className="rounded-17xl bg-button-unhover-white flex flex-row items-start justify-start py-1 md:ml-[-10px] xl:ml-0 xxl:ml-[50px] md:mt-[-22px] xl:mt-0 md:px-[15px] xl:px-[25px] whitespace-nowrap bg-gray-300 rounded-xl md:w-[138px] lg:w-[160px] xl:w-[159px] xxl:w-[180px] h-[31px] transition ease-in-out hover:-translate-y-0.5 hover:scale-105 hover:bg-colorOrgane hover:text-colorWhite duration-300 lg:ml-[20px]">
                      <b className="relative inline-block min-w-[109px] text-center">
                        Unreal Engine
                      </b>
                    </div>
                  </div>
                </div>
              </div>

              {/* item 2*/}
              <div
                className="
                h-[261px] 
                flex flex-row 
                items-start justify-start 
                relative 
                rounded-2xl 
                overflow-hidden
                group
               "
              >
                <div
                  className="
                    clip-custom absolute w-full md:h-[200px] xl:h-full 
                    group-hover:border-2 
                    group-hover:border-[#945c3c] 
                    group-hover:border-opacity-100 
                    transition-all duration-300"
                >
                  <img
                    className="w-full h-full absolute top-0 left-0"
                    alt=""
                    src={bgcomponent}
                  />
                </div>
                <div className="self-stretch flex-1 flex flex-col items-start justify-start pt-[40px] pb-0 pr-0 pl-[54px] relative gap-[38px] z-[1]">
                  <img
                    className="
                      md:w-[90px]
                      xl:w-[101.8px] 
                      md:h-[85px]
                      xl:h-[99.4px] 
                      absolute !m-[0] top-[44px] left-[61.5px] object-contain z-[2]"
                    loading="lazy"
                    alt=""
                    src={unity1}
                  />
                  <img
                    className="
                      w-[79.4px] 
                      h-[33.9px] 
                      absolute !m-[0] 
                      md:bottom-[103px]
                      xl:bottom-[73px] 
                      md:left-[68px]
                      xl:left-[72.5px] 
                      object-contain z-[2]"
                    loading="lazy"
                    alt=""
                    src={unity2}
                  />
                  <div
                    className="
                    flex flex-row 
                    items-start justify-start 
                    py-0 
                    pr-0 
                    pl-[19px] 
                    z-[2] 
                    md:mt-[133px]
                    xl:mt-auto
                    "
                  >
                    <div
                      className="
                        rounded-17xl 
                        bg-button-unhover-white 
                        flex flex-row 
                        items-start justify-start 
                        py-1 
                        md:ml-[-10px]
                        xl:ml-0
                         xxl:ml-[50px]
                        md:px-[15px]
                        xl:px-[25px] 
                        whitespace-nowrap 
                        bg-gray-300 
                        rounded-xl 
                        md:w-[138px]
                        lg:w-[160px]
                        xl:w-[159px] 
                              xxl:w-[180px]
                        h-[31px]
                        transition ease-in-out delay-150hover:-translate-y-1 hover:scale-110 hover:bg-colorOrgane hover:text-colorWhite duration-300
                        lg:ml-[20px]
                      
                        "
                    >
                      <b
                        className="
                          relative inline-block 
                          md:w-[59px] 
                          xl:w-[109px] 
                          text-center"
                      >
                        Unity Engine
                      </b>
                    </div>
                  </div>
                </div>
              </div>
              {/* item 3 */}
              <div
                className="
                  h-[261px] 
                  flex flex-row 
                  items-start justify-start 
                  relative 
                  rounded-2xl overflow-hidden
                  group
                  "
              >
                <div
                  className="
                    clip-custom absolute w-full md:h-[200px] xl:h-full 
                    group-hover:border-2 
                    group-hover:border-[#945c3c] 
                    group-hover:border-opacity-100 
                    transition-all duration-300"
                >
                  <img
                    className="
                      w-full 
                      h-full 
                      absolute 
                      top-0 left-0"
                    alt=""
                    src={bgcomponent}
                  />
                </div>
                <div className="self-stretch flex-1 flex flex-col items-start justify-start pt-[40px] pb-0 pr-0 pl-[54px] relative gap-[38px] z-[1]">
                  <img
                    className="
                      md:w-[104px]
                      xl:w-[134px] 
                      flex-1 
                      relative 
                      max-h-full 
                      object-contain 
                      z-[2]"
                    loading="lazy"
                    alt=""
                    src={webd}
                  />
                  <div
                    className="
                      flex flex-row 
                      items-start justify-start 
                      md:py-5
                      xl:py-0 
                      pr-0 
                      pl-[19px] 
                      z-[2]"
                  >
                    <div
                      className="
                         rounded-17xl 
                         bg-button-unhover-white 
                         flex flex-row 
                         items-start justify-start 
                         py-1
                         px-[13px]
                         md:ml-[-10px]
                         xl:ml-0
                         xxl:ml-[50px]
                         whitespace-nowrap 
                         md:transform translate-y-[-37px]
                         xl:translate-y-0
                         bg-gray-300 
                         rounded-xl 
                         md:w-[139px]
                         lg:w-[160px]
                         xl:w-[159px] 
                         xxl:w-[180px]
                         h-[31px]
                         transition 
                         ease-in-out 
                         delay-150hover:-translate-y-1 
                         hover:scale-110 
                         hover:bg-colorOrgane 
                         hover:text-colorWhite 
                         duration-300
                         lg:ml-[20px]

                         "
                    >
                      <b
                        className="
                        
                        relative inline-block 
                        md:text-[13px]
                        xl:text-base
                        xl:w-[109px]
                        text-center "
                      >
                        Web development
                      </b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end content 2 */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default LeftSide;
