import React from "react";
import { ItemRight } from "../DataContact";
import { items } from "@pages/solution/components/technology/Data";

const ContentRight1: React.FC = () => {
  return (
    <div className="pb-3 xxxl:max-2xl:pb-0">
      {/* col 1, 2 */}
      {ItemRight.map((item, index) => (
        <div key={index} className="container_col_12">
          <div className="item_col ">
            <p className="label">
              {item.label}
              <span className="text-[#F04438]">*</span>
            </p>
            <input className="input_col"></input>
          </div>
          <div className="item_col">
            <p className="label">
              {item.required}
              <span className="text-[#F04438]">*</span>
            </p>
            <input className="input_col"></input>
          </div>
        </div>
      ))}
      {/* col 3,4 */}
      {ItemRight.map((item, index) => (
        <div key={index} className="container_col_34">
          <p className="label">
            {item.description}
            {index !== 1 && <span className="text-[#F04438]">*</span>}
          </p>
          <input className="input_col"></input>
        </div>
      ))}
      {/* col 5 */}
      <div className="container_col5 ">
        <p className="text_service">Services</p>
        <div className="grid_col5">
          {items.map((item, index) => (
            <div key={index} className="item_grid_col5">
              <img
                src={item.src}
                className={`img_col5 ${
                  item.text === "Augmented Reality" ? "ml-3" : "ml-0"
                } `}
                alt=""
              />
              <p className="text_col5_contact">
                {item.isSpecial ? (
                  <>
                    MacOS
                    <br />
                    IOS
                  </>
                ) : (
                  item.text
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentRight1;
