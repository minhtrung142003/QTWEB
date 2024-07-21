import React from "react";

const MenuHeader: React.FC = () => {
  return (
    <div>
      <div className="sticky top-[0] left-[191px] [backdrop-filter:blur(6px)] rounded-[61px] [background:linear-gradient(126.92deg,_rgba(220,_220,_220,_0.5),_rgba(255,_255,_255,_0.5)_73.5%)] box-border w-[615px] flex flex-row items-start justify-start pt-3 pb-[13px] pr-[27px] pl-[34px] z-[99] max-w-full border-[2px] border-solid border-stroke-gradient">
        <div className="h-[21px] flex-1 flex flex-row items-start justify-between pt-0 px-0 pb-[4.5px] box-border max-w-full gap-[20px]">
          <div className="flex flex-col items-start justify-start py-0 pr-[9px] pl-0">
            <a className="[text-decoration:none] relative leading-[15px] capitalize font-bold text-[inherit] inline-block [text-shadow:1px_1px_3px_rgba(0,_0,_0,_0.55)] min-w-[48px]">
              Home
            </a>
          </div>
          <div className="flex flex-col items-start justify-start py-0 pr-[9px] pl-0 gap-[1px] text-brown-dark">
            <a className="[text-decoration:none] relative capitalize font-bold text-[inherit] inline-block min-w-[65px]">
              Solution
            </a>
            <img
              className="w-[23px] h-0.5 relative"
              loading="lazy"
              alt=""
              src="/public/line-8.svg"
            />
          </div>
          <div className="flex flex-col items-start justify-start py-0 pr-[9px] pl-0">
            <a className="[text-decoration:none] relative leading-[15px] capitalize font-medium text-[inherit] inline-block [text-shadow:1px_1px_3px_rgba(0,_0,_0,_0.55)] min-w-[79px]">
              Showcase
            </a>
          </div>
          <div className="flex flex-col items-start justify-start py-0 pr-2.5 pl-0">
            <a className="[text-decoration:none] h-[15px] relative leading-[19.2px] capitalize font-medium text-[inherit] inline-block shrink-0 [text-shadow:1px_1px_3px_rgba(0,_0,_0,_0.55)] min-w-[95px]">
              Marketplace
            </a>
          </div>
          <a className="[text-decoration:none] relative leading-[15px] capitalize font-medium text-[inherit] inline-block [text-shadow:1px_1px_3px_rgba(0,_0,_0,_0.55)] min-w-[71px] whitespace-nowrap">
            About us
          </a>
          <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
            <img
              className="w-5 h-3.5 relative"
              loading="lazy"
              alt=""
              src="/public/path.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuHeader;
