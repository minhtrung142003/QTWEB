import React from "react";
import "../aboutus.css";
import ItemFive from "./ItemFive";
import ItemDate from "./ItemDate";
import ItemOne from "./ItemOne";
import ItemTwo_Four from "./ItemTwo_Four";
const OurVision: React.FC = () => {
  return (
    <div className="container">
      {/* div 1 */}
      <div className="flex-col container w-full h-full flex md:px-24 xl:px-8 xxxl:px-10 2xl:px-24">
        <div className=" flex-1 w-full h-full grid grid-cols-5 mt-[1%] ">
          <ItemOne />
          <ItemTwo_Four />
          <ItemFive />
          <ItemDate />
        </div>
      </div>
    </div>
  );
};

export default OurVision;
