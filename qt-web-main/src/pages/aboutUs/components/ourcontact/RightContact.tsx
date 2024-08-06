import React from "react";
import { items } from "@pages/solution/components/technology/Data";
import { ItemRight } from "./DataContact";
const RightContact: React.FC = () => {
  return (
    <div className="container_rightcontact">
      {/* col 1, 2 */}
      {ItemRight.map((item, index) => (
        <div key={index} className="container_col_12">
          <div className="items_col_12">
            <p className="label">
              {item.label}
              <span className="text-[#F04438]">*</span>
            </p>
            <div className="input_col"></div>
          </div>
          <div className="container_text_12">
            <p className="label">
              {item.required}
              <span className="text-[#F04438]">*</span>
            </p>
            <div className="input_col"></div>
          </div>
        </div>
      ))}
      {/* col 3,4 */}
      <div className="container_col_34 ">
        <p className="label">
          Company
          <span className="text-[#F04438]">*</span>
        </p>
        <div className="input_col"></div>
      </div>
      <div className="container_col_34">
        <p className="label">What would you like to discuss?</p>
        <div className="input_col"></div>
      </div>
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
      {/* submit */}
      <div className="container_submit">
        <p className="text_submit">SUBMIT</p>
      </div>
    </div>
  );
};

export default RightContact;
