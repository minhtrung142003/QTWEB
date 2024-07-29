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
        <ul 
          style={{ margin: "0", padding: "0", display: "inline-block" }}>
          {dots}
        </ul>
      </div>
    ),
  };
  const images = [impad, impad, impad, impad]
  return (
    <div
      className="
          md:mr-[-90px]
          lg:mr-[-10px]
          xxxl:mr-[50px]
          absolute 
          md:right-[-2px]
          xl:right-[32px] 
          2xl:right-[-78px] 
          xxl:right-[-41px] 
          md:w-[315px]
          lg:w-[490px]
          xl:w-[430px]
          2xl:w-[577px]
          xxl:w-[790px] 
          box-sizing-border
          h-full
          md:mb-[1%]
          xl:mb-[12%]
          2xl:mb-[11%]
          x820:mt-[10%]
          2xl:mt-[8%]

          "
    >
      <Slider {...settings}>
        {images.map((img, index) => (
                <div
                   key={index }>
                <img
                  src={img}
                  alt={`Slide ${index + 1}`}
                  className="
                    rounded-[9px] 
                    w-full
                    md:h-[570px]
                    xl:h-[738px]
                    2xl:h-[690px]
                    object-contain
                    "
                />
              </div>
        ))}
      </Slider>
    </div>
  );
};

export default RightSide;
