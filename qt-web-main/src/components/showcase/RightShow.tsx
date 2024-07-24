import React from "react";
import impad from "@assets/showcase/IpadShow.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const RightShow: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false, // Ẩn mũi tên 
    autoplaySpeed: 3000,
    appendDots: (dots: React.ReactNode) => (
      <div 
        style={{
          position: "absolute",
          bottom: "10px",
          width: "100%",
          textAlign: "center",
        }}
      >
        <ul 
            className="" 
            style={{ margin: "0", padding: "0", display: "inline-block"}}>
          {dots}
        </ul>
      </div>
    ),
  };
  return (
    <div>
      <div 
          className="
          rounded-l-[4px] 
          mb-[30px]
          md:mt-[155px]
          lg:mt-[200px]
          xl:mt-[23px] 
          md:mr-[55px]
          xl:mr-[35px] 
          xxl:mr-[40px]
          rounded-r-[8px] 
          border-[1px_solid_#515151] 
          absolute right-[31px] 
          md:w-[350px]
          lg:w-[560px] 
          x912:w-[470px]
          xl:w-[607px] 
          2xl:w-[557px] 
          xxl:w-[900px]
          x3l:w-[1200px]
          h-[790px] 
          box-sizing-border">
        <Slider {...settings}>
          <div>
            <img src={impad} alt="iPad" className=" w-full md:h-[530px] lg:h-[650px] xl:h-[720px] 2xl:h-[690px] xxl:h-[1000px] x3l:h-[1500px] object-cover " />
          </div>
          <div>
            <img src={impad} alt="iPad" className=" w-full md:h-[530px] lg:h-[650px] xl:h-[720px] 2xl:h-[690px] xxl:h-[1000px] x3l:h-[1500px] object-cover" />
          </div>
          <div>
            <img src={impad} alt="iPad" className=" w-full md:h-[530px] lg:h-[650px] xl:h-[720px] 2xl:h-[690px] xxl:h-[1000px] x3l:h-[1500px] object-cover" />
          </div>
          <div>
            <img src={impad} alt="iPad" className=" w-full md:h-[530px] lg:h-[650px] xl:h-[720px] 2xl:h-[690px] xxl:h-[1000px] x3l:h-[1500px] object-cover" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default RightShow;
