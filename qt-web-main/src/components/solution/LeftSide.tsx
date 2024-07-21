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
const LeftSide: React.FC = () => {
  return (
    <div className="w-full h-[843px] relative overflow-hidden flex flex-col items-end justify-start pt-[23px] px-[18px] pb-[13px] box-border gap-[178px] bg-[url('/public/solution@3x.png')] bg-cover bg-no-repeat bg-[top] leading-[normal] tracking-[normal] mq450:h-auto mq450:gap-[44px] mq750:gap-[89px]">
      <section className="self-stretch h-[807px] relative shrink-0 max-w-full text-left text-base text-stroke-gradient font-inter mq450:h-auto mq450:min-h-[807]">
        <div className="absolute top-[100px] left-[0px] [backdrop-filter:blur(6px)] rounded-2xl [background:linear-gradient(126.92deg,_rgba(240,_240,_240,_0.35),_rgba(228,_228,_228,_0.7))] box-border w-full flex flex-row items-end justify-start pt-[27px] px-[37px] pb-[31px] gap-[267px] max-w-full text-center text-icon-color-unhover border-[2px] border-solid border-stroke-gradient lg:flex-wrap lg:gap-[133px] mq450:gap-[33px] mq750:gap-[67px]">
          <div className="h-[707px] w-[1404px] relative [backdrop-filter:blur(6px)] rounded-2xl [background:linear-gradient(126.92deg,_rgba(240,_240,_240,_0.35),_rgba(228,_228,_228,_0.7))] box-border hidden max-w-full border-[2px] border-solid border-stroke-gradient"></div>
          <div className="w-[753px] flex flex-col items-start justify-end pt-0 px-0 pb-4 box-border max-w-full">
            <div className="self-stretch flex flex-col items-end justify-start gap-[14px] max-w-full">
              <div className="self-stretch flex flex-row items-start justify-start gap-[12.5px] max-w-full mq750:flex-wrap">
                <div className="flex-1 flex flex-col items-start justify-start gap-[28px] min-w-[322px] max-w-full text-left text-13xl text-gainsboro">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[28px] max-w-full">
                    <div className="flex flex-row items-start justify-start gap-[10px] max-w-full mq450:flex-wrap">
                      <h1 className="m-0 relative text-inherit font-bold font-inherit inline-block [text-shadow:1px_1px_3px_rgba(0,_0,_0,_0.55)]  z-[1] mq450:text-lgi mq1050:text-7xl text-[#DBDBDB] text-[32px]">
                        Support
                      </h1>
                      <h1 className="m-0 relative text-inherit font-bold font-inherit text-brown-dark z-[1] mq450:text-lgi mq1050:text-7xl text-[32px] text-[#945C3C]">
                        All Platforms
                      </h1>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start gap-[12px] text-center text-base text-icon-color-unhover mq750:flex-wrap">
                      <div className="flex-1 flex flex-row items-start justify-start min-w-[106px] max-w-[115px] z-[1]">
                        <div className="h-[175px] flex-1 relative">
                          <img
                            className="absolute top-[0px] left-[0px] rounded-3xs w-full h-full"
                            alt=""
                            src={bgcomponent}
                          />

                          <div className="absolute top-[112px] left-[14px] capitalize font-semibold z-[1]">
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
                      <div className="flex-1 flex flex-col items-start justify-start pt-[23px] px-0 pb-0 box-border min-w-[106px] max-w-[115px]">
                        <div className="self-stretch h-[175px] relative">
                          <div className="absolute top-[0px] left-[0px] w-full flex flex-row items-start justify-start h-full z-[1]">
                            <div className="h-[175px] flex-1 relative">
                              <img
                                className="absolute top-[0px] left-[0px] rounded-3xs w-full h-full"
                                alt=""
                                src={bgcomponent}
                              />

                              <div className="absolute top-[112px] left-[30px] capitalize font-semibold z-[1]">
                                <p className="m-0">MacOS</p>
                                <p className="m-0">IOS</p>
                              </div>
                            </div>
                           
                          </div>
                          <img
                            className="absolute top-[25px] left-[28px] w-[60px] h-[60px] overflow-hidden z-[2]"
                            loading="lazy"
                            alt=""
                            src={macs}
                          />
                        </div>
                      </div>
                      <div className="h-[175px] flex-1 relative min-w-[106px] max-w-[115px]">
                        <div className="absolute top-[0px] left-[0px] w-full flex flex-row items-start justify-start h-full z-[1]">
                          <div className="h-[175px] flex-1 relative">
                            <img
                              className="absolute top-[0px] left-[0px] rounded-3xs w-full h-full"
                              alt=""
                              src={bgcomponent}
                            />

                            <div className="absolute top-[112px] left-[14px] capitalize font-semibold z-[1]">
                              <p className="m-0">Window</p>
                              <p className="m-0">Application</p>
                            </div>
                          </div>
                          <img
                            className="h-[60px] w-[60px] relative overflow-hidden shrink-0 hidden"
                            alt=""
                            src="/public/windows-1.svg"
                          />
                        </div>
                        <img
                          className="absolute top-[17px] left-[21px] w-[75px] h-[75px] overflow-hidden z-[2]"
                          loading="lazy"
                          alt=""
                          src={virutal}
                        />
                      </div>
                      <div className="flex-1 flex flex-col items-start justify-start pt-[23px] px-0 pb-0 box-border min-w-[106px] max-w-[115px]">
                        <div className="self-stretch h-[175px] relative">
                          <div className="absolute top-[0px] left-[0px] w-full flex flex-row items-start justify-start h-full z-[1]">
                            <div className="h-[175px] flex-1 relative">
                              <img
                                className="absolute top-[0px] left-[0px] rounded-3xs w-full h-full"
                                alt=""
                                src={bgcomponent}
                              />

                              <div className="absolute top-[112px] left-[13px] capitalize font-semibold z-[1]">
                                <p className="m-0">Augmented</p>
                                <p className="m-0">Reality</p>
                              </div>
                            </div>
                            <img
                              className="h-[60px] w-[60px] relative overflow-hidden shrink-0 hidden"
                              alt=""
                              src="/public/windows-1.svg"
                            />
                          </div>
                          <img
                            className="absolute top-[24px] left-[38px] w-[60px] h-[60px] overflow-hidden z-[2]"
                            loading="lazy"
                            alt=""
                            src={augmented}
                          />
                        </div>
                      </div>

                      <div className="h-[175px] flex-1 relative min-w-[106px] max-w-[115px]">
                        <div className="absolute top-[0px] left-[0px] w-full flex flex-row items-start justify-start h-full z-[1]">
                          <div className="h-[175px] flex-1 relative">
                            <img
                              className="absolute top-[0px] left-[0px] rounded-3xs w-full h-full"
                              alt=""
                              src={bgcomponent}
                            />

                            <div className="absolute top-[112px] left-0 right-0 capitalize font-semibold z-[1]">
                              <p className="m-0">Website</p>
                            </div>
                          </div>
                          <img
                            className="h-[60px] w-[60px] relative overflow-hidden shrink-0 hidden"
                            alt=""
                            src="/public/windows-1.svg"
                          />
                        </div>
                        <img
                          className="absolute top-[19px] left-[23px] w-[70px] h-[70px] overflow-hidden z-[2]"
                          loading="lazy"
                          alt=""
                          src={laptop}
                        />
                      </div>
                      <div className="flex-1 flex flex-col items-start justify-start pt-[23px] px-0 pb-0 box-border min-w-[106px] max-w-[115px]">
                        <div className="self-stretch h-[175px] relative">
                          <div className="absolute top-[0px] left-[0px] w-full flex flex-row items-start justify-start h-full z-[1]">
                            <div className="h-[175px] flex-1 relative">
                              <img
                                className="absolute top-[0px] left-[0px] rounded-3xs w-full h-full"
                                alt=""
                                src={bgcomponent}
                              />

                              <div className="absolute top-[112px] left-0 right-0 capitalize font-semibold z-[1] flex items-center justify-center">
                                <p className="m-0 text-center">Anroid</p>
                              </div>
                            </div>
                          </div>
                          <img
                            className="absolute top-[21px] left-[38px] w-[39px] h-[66px] overflow-hidden z-[2]"
                            loading="lazy"
                            alt=""
                            src={subtract}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[7px] max-w-full mq750:flex-wrap">
                    <h1 className="m-0 relative text-inherit font-bold font-inherit [text-shadow:1px_1px_3px_rgba(0,_0,_0,_0.55)] z-[1] mq450:text-lgi mq1050:text-7xl text-[32px] text-[#DBDBDB]">
                      With the lastest
                    </h1>
                    <h1 className="m-0 relative text-inherit font-bold font-inherit text-brown-dark z-[1] mq450:text-lgi mq1050:text-7xl text-[32px] ">
                      Technology
                    </h1>
                  </div>
                </div>
            
              </div>
              <div className="self-stretch grid flex-row items-start justify-start py-2.5 px-0 gap-[28.5px] grid-cols-[repeat(3,_minmax(174px,_1fr))] z-[1] text-right mq450:grid-cols-[minmax(174px,_1fr)] mq750:justify-center mq750:grid-cols-[repeat(2,_minmax(174px,_302px))] ">
                {/* div 1 */}
                <div className="h-[261px] flex flex-row items-start justify-start relative">
                  <div className="clip-custom rounded-2xl absolute w-full h-full">
                    <img
                      className="w-full h-full absolute top-0 left-0 rounded-2xl max-w-full max-h-full"
                      alt=""
                      src={bgcomponent}
                    />
                  </div>
                  <div className="self-stretch flex-1 flex flex-col items-start justify-start pt-[40px] pb-0 pr-0 pl-[54px] relative gap-[38px] z-[1]">
                    <img
                      className="w-[134px] flex-1 relative max-h-full object-contain z-[2]"
                      loading="lazy"
                      alt=""
                      src={unreal}
                    />
                    <div className="flex flex-row items-start justify-start py-0 pr-0 pl-[19px] z-[2]">
                      <div className="rounded-17xl bg-button-unhover-white flex flex-row items-start justify-start py-1 px-[25px] whitespace-nowrap bg-gray-300 rounded-xl w-[159px] h-[31px]">
                        <b className="relative inline-block min-w-[109px] text-center">
                          Unreal Engine
                        </b>
                      </div>
                    </div>
                  </div>
                </div>
                {/* end div 1 */}
                <div className="h-[261px] flex flex-row items-start justify-start relative">
                  <div className="clip-custom rounded-2xl absolute w-full h-full">
                    <img
                      className="w-full h-full absolute top-0 left-0 rounded-2xl max-w-full max-h-full"
                      alt=""
                      src={bgcomponent}
                    />
                  </div>
                  <div className="self-stretch flex-1 flex flex-col items-start justify-start pt-[40px] pb-0 pr-0 pl-[54px] relative gap-[38px] z-[1]">
                    <img
                      className="w-[101.8px] h-[99.4px] absolute !m-[0] top-[44px] left-[61.5px] object-contain z-[2]"
                      loading="lazy"
                      alt=""
                      src={unity1}
                    />

                    <img
                      className="w-[79.4px] h-[33.9px] absolute !m-[0] bottom-[73px] left-[72.5px] object-contain z-[2]"
                      loading="lazy"
                      alt=""
                      src={unity2}
                    />
                    <div className="flex flex-row items-start justify-start py-0 pr-0 pl-[19px] z-[2] mt-auto">
                      <div className="rounded-17xl bg-button-unhover-white flex flex-row items-start justify-start py-1 px-[25px] whitespace-nowrap bg-gray-300 rounded-xl w-[159px] h-[31px]">
                        <b className="relative inline-block min-w-[109px] text-center">
                          Unity Engine
                        </b>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-[261px] flex flex-row items-start justify-start relative">
                  <div className="clip-custom rounded-2xl absolute w-full h-full">
                    <img
                      className="w-full h-full absolute top-0 left-0 rounded-2xl max-w-full max-h-full"
                      alt=""
                      src={bgcomponent}
                    />
                  </div>
                  <div className="self-stretch flex-1 flex flex-col items-start justify-start pt-[40px] pb-0 pr-0 pl-[54px] relative gap-[38px] z-[1]">
                    <img
                      className="w-[134px] flex-1 relative max-h-full object-contain z-[2]"
                      loading="lazy"
                      alt=""
                      src={unreal}
                    />
                    <div className="flex flex-row items-start justify-start py-0 pr-0 pl-[19px] z-[2]">
                      <div className="rounded-17xl bg-button-unhover-white flex flex-row items-start justify-start py-1 px-[15px] whitespace-nowrap bg-gray-300 rounded-xl w-[159px] h-[31px] ">
                        <b className="relative inline-block w-[109px] text-center ">
                          Web development
                        </b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[15px]">
            <div className="h-1.5 w-1.5 relative rounded-18xl bg-off-white z-[1]"></div>
            <div className="h-1.5 w-1.5 relative rounded-18xl bg-gray box-border z-[1] border-[0.5px] border-solid border-silver"></div>
            <div className="h-1.5 w-1.5 relative rounded-18xl bg-gray box-border z-[1] border-[0.5px] border-solid border-silver"></div>
            <div className="h-1.5 w-1.5 relative rounded-18xl bg-gray box-border z-[1] border-[0.5px] border-solid border-silver"></div>
            <div className="h-1.5 w-1.5 relative rounded-18xl bg-gray box-border z-[1] border-[0.5px] border-solid border-silver"></div>
            <div className="h-1.5 w-1.5 relative rounded-18xl bg-gray box-border z-[1] border-[0.5px] border-solid border-silver"></div>
            <div className="h-1.5 w-1.5 relative rounded-18xl bg-gray box-border z-[1] border-[0.5px] border-solid border-silver"></div>
          </div>
        </div>
      </section>
      <section className="self-stretch h-[695px] flex flex-row items-start justify-end py-0 pr-3.5 pl-5 box-border max-w-full shrink-0">
        <div className="self-stretch flex-1 relative rounded-[21px] bg-dimgray shrink-0 max-w-full"></div>
      </section>
    </div>
  );
};
export default LeftSide;
