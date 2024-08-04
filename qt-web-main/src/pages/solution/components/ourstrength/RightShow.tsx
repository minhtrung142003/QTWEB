import React from "react";
import impad from "@assets/solution/ipadshowcase.png";
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
    autoplaySpeed: 3000,
    arrows: false,
   
  };
  const images = [impad, impad, impad, impad];
  return (
    <div className="container_rightshow ">
      <Slider {...settings}>
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            className="image_rightshow"
            alt=""
          />
        ))}
      </Slider>
    </div>
  );
};

export default RightShow;
