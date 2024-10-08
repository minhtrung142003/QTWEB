import "./styles.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
interface ISliderContent {
  listImages: string[];
}

const SliderContent = ({ listImages }: ISliderContent) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(()=> {
    const timer = setTimeout(()=> setIsLoading(false), 500);
    return ()=> clearTimeout(timer);
  }, [])
  const PrevArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
      <button
        className={className}
        style={{ ...style, display: "block", left: "2px", zIndex: 1 }}
        onClick={onClick}
      />
    );
  };
  const NextArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
      <button
        className={className}
        style={{ ...style, display: "block", right: "2px" }}
        onClick={onClick}
      />
    );
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    appendDots: (dots: React.ReactNode) => (
      <div
        className="dot_container "
        style={{
          position: "absolute",
          bottom:
            window.innerWidth >= 1024 && window.innerWidth < 1280
              ? "120px"
              : "10px",
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
    <div className="slider">
      {isLoading ? (
         <div className="slider__loading">
         <RotatingLines
           visible={true}
           width="40"
           strokeWidth="5"
           animationDuration="0.75"
           strokeColor="#8B4513"
           ariaLabel="rotating-lines-loading"
         />
       </div>
      ) : (
        <Slider {...settings}>
        {listImages.map((img, index) => (
          <img key={index} src={img} className="slider__card" alt="" />
        ))}
      </Slider>
      )}
    
    </div>
  );
};

export default SliderContent;
