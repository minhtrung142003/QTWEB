import React from "react";
import impad from "@assets/showcase/IpadShow.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const RightShow: React.FC = () => {
  return (
    <div className="container w-[40%] h-dvh rouned-2xl ">
      <div className="w-full h-full  md:mr-[30%]">
      <img
          src={impad}
          alt="iPad"
          className="w-full md:h-[100%] xl:h-[94vh] object-contain mt-[-10%] md:mx-[-5px] xl:mx-0 2xl:mx-10 "
        />
      </div>
       
    </div>
  );
};

export default RightShow;
