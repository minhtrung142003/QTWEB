import "./styles.scss";

import ItemOne from "../itemOne";
import { ItemTwo_Four } from "../itemTwoFour";
import ItemFive from "../itemFive";
import { Numbers } from "../../../../../../data/dataAboutUs";
import ItemDate from "../itemDate";

const getBackground = (index: number) => {
  if (index === 0) {
    return "#F0D8BB";
  } else if (index === 1) {
    return "#E5C39A";
  } else {
    return "#FEF1E0";
  }
};

const ContentVision = () => {
  return (
    <div className="vision">
      <div className="h-fit flex flex-row md:max-lg:justify-start justify-center items-center z-10 w-full md:max-lg:flex-wrap md:max-xl:-space-x-[57px] -space-x-[72px] md:max-lg:ml-0 ml-[30px]">
        <ItemOne />
        {Numbers.map((number, index) => (
          <div
            key={index}
            className={`
    ${index === 2 ? "md:max-lg:hidden  " : ""}
      ${index === 0 || index === 1 ? "md:max-lg:justify-start" : ""}`}
          >
            <ItemTwo_Four
              stepNumber={number}
              backgroundColor={getBackground(index)}
            />
          </div>
        ))}
        <div className="md:max-lg:hidden relative md:max-lg:w-full md:max-lg:justify-end">
          <ItemFive />
        </div>
      </div>
      {/* Row 2 for md-lg */}
      <div className="h-fit hidden md:max-lg:flex flex-row justify-end items-center w-full">
        <div className="md:max-lg:w-fit flex -mr-[60px]">
          <ItemTwo_Four
            stepNumber={Numbers[2]}
            backgroundColor={getBackground(2)}
          />
        </div>
        <div className="md:max-lg:w-fit flex relative -mr-[50px]">
          <ItemFive />
        </div>
      </div>
      <ItemDate />
    </div>
  );
};

export default ContentVision;
