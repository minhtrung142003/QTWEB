import React from "react";
import impad from "@assets/showcase/IpadShow.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const RightShow: React.FC = () => {
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
        <ul style={{ margin: "0", padding: "0" }}>
          {dots}
        </ul>
      </div>
    ),
  };
  const images = [impad, impad, impad, impad];
  return (
    <div className=" md:w-[38%] xl:w-[45%] 2xl:w-[50%] h-[90vh] absolute md:right-[1%] xl:right-[-4%] xxxl:right-[-5%] 2xl:right-[-9%] md:top-[1%] xl:top-[-13%] overflow-hidden">
      <Slider {...settings}>
          {images.map((img, index) => (
              <img key={index} src={img} className="w-[100vw] md:h-full xl:h-[90vh] object-contain" {...settings}/>
          ))}
      </Slider>
    </div>
  );
};
export default RightShow;
