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
    appendDots: (dots: React.ReactNode) => (
      <div
        style={{
          position: "absolute",
          bottom: "10px",
          width: "100%",
          textAlign: "center",
          color:'white',
        }}
      >
        <ul style={{ margin: "0", padding: "0", display: "inline-block",  }}>
          {dots}
        </ul>
      </div>
    ),
  };
  return (
    <div>
      <div className="rounded-l-[4px] mb-[30px] mt-[23px] mr-[35px] rounded-r-[8px] border-[1px_solid_#515151] absolute right-[31px]  w-[557px] h-[790px] box-sizing-border">
        <Slider {...settings}>
          <div>
            <img src={impad} alt="iPad" className=" w-full h-[760px] object-cover" />
          </div>
          <div>
            <img src={impad} alt="iPad" className=" w-full h-[760px] object-cover" />
          </div>
          <div>
            <img src={impad} alt="iPad" className=" w-full h-[760px] object-cover" />
          </div>
          <div>
            <img src={impad} alt="iPad" className=" w-full h-[760px] object-cover" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default RightSide;
