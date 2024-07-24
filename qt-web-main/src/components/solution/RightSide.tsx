import React from "react";
import impad from "@assets/solution/ipad.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const RightSide: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    appendDots: (dots: React.ReactNode) => (
      <div
        style={{
          position: "absolute",
          bottom: "10px",
          width: "100%",
          textAlign: "center",
          color: "white",
        }}
      >
        <ul style={{ margin: "0", padding: "0", display: "inline-block" }}>
          {dots}
        </ul>
      </div>
    ),
  };

  return (
    <div
      className="
          rounded-l-[4px] 
          mb-[30px] mt-[23px] 
          md:mr-[-90px]
          lg:mr-[-100px]
          xl:mr-[-125px]
          2xl:mr-[13px] 
          xxxl:mr-[50px]
          md:mt-[2rem] 
          xl:mt-[23px] 
          rounded-[18px] 
        border-[1px_solid_#515151] 
          absolute 
          md:right-[-20px]
          xl:right-[31px] 
          md:w-[315px]
          lg:w-[520px]
          xl:w-[500px]
          2xl:w-[577px]
          xxl:w-[790px] 
          h-[790px] 
          box-sizing-border
          md:translate-x-[-40px]
          xl:translate-x-0
          "
    >
      <Slider {...settings}>
        <div>
          <img
            src={impad}
            alt="iPad"
            className="
                  rounded-[9px] 
                  w-full 
                  md:h-[600px]
                  xl:h-[750px]
                  xxl:h-[1100px]
                  2xl:h-[690px] 
                  object-cover"
          />
        </div>
        <div>
          <img
            src={impad}
            alt="iPad"
            className="
                  rounded-[9px] 
                  w-full 
                  md:h-[600px] 
                  xl:h-[730px]
                  2xl:h-[690px] 
                   xxl:h-[1100px]
                  object-cover"
          />
        </div>
        <div>
          <img
            src={impad}
            alt="iPad"
            className="
                  rounded-[9px] 
                  w-full 
                  md:h-[600px] 
                  xl:h-[730px]
                  2xl:h-[690px] 
                   xxl:h-[1100px]
                  object-cover"
          />
        </div>
        <div>
          <img
            src={impad}
            alt="iPad"
            className="
                  rounded-[9px] 
                  w-full 
                  md:h-[600px] 
                  xl:h-[730px]
                  2xl:h-[690px] 
                   xxl:h-[1100px]
                  object-cover"
          />
        </div>
      </Slider>
    </div>
  );
};

export default RightSide;
