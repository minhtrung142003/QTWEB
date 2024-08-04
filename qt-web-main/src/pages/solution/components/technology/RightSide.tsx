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
   
  };
  const images = [impad, impad, impad, impad];
  return (
    <div className="container-rightside ">
      <Slider {...settings}>
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            className="image-rightside"
            alt=""
          />
        ))}
      </Slider>
    </div>
  );
};

export default RightSide;
