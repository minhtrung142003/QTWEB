import magni from "@assets/solution/magnifying-glass 2.png";
import React from "react";
import { itemContact } from "./DataContact";
import "./style.css";
const LeftContact: React.FC = () => {
  return (
    <div className="container_leftcontact">
      {/* title */}
      <div className="header_contact">
        <p className="text-[#2A753F]">
          Schedule
          <span className="text-[#4F4F4F] ml-5">a time with us to</span>
        </p>
      </div>
      {/* content 1 */}
      <div className="content1_contact">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className={`items_content1 ${ 
              index >= 2 ? "translate-x-32" : ""
            }`}
          >
            <img src={magni} alt="Icon" className="w-[59px] h-[60px]" />
            <div className="container_text">
              <h3 className="customized_ui">
                Customized UI
              </h3>
            </div>
            <p className="p_text_content1">
              We offer customized UI based on
              <br/> your needs and requirements
            </p>
          </div>
        ))}
      </div>
      {/* content 2 */}
      <div 
        className="content2_contact">
      {itemContact.map((item, index) => (
        <div key={index}  className="item_grid_content2">
          <div 
             className={`title_content2 ${index === 2 ? 'w-[75%]' : 'w-[50%]'}`}>
            {item.title}
          </div>
          <p className="content_content2">{item.content}</p>
          {index < itemContact.length - 1 && (
            <div className="underline_items"></div>
          )}
        </div>
      ))}
      </div>
    </div>
  );
};

export default LeftContact;
