import { RightArrow } from "@constants/index";
import React from "react";
import "./style.css";
const ItemOne: React.FC = () => {
  return (
    <div className="container_item1">
      <div className="container_text_item1">
        <p className="text1_item1">STEP</p>
        <p className="text2_item1">01</p>
      </div>
      <div className="content_item1 z-10">
        <div className="items_item1">
          <h3 className="h3_item1">TIÊU ĐỀ CHÍNH </h3>
          <p className="p_item1_vision">Mô tả kỹ hơn về mục tiêu</p>
          <span className="span_item1_vision">của giai đoạn này.</span>
          <span className="span2_item1_vision"> Dài ba dòng.</span>
          <div className="div_span3_item1">
            <span className="underline-container">
              <a className="mr-1 -my-1" href="">
                Link tham khảo
              </a>
              <RightArrow className="ml-1" />
            </span>
          </div>
        </div>
        <div className="underline_item1_vision clip-custom-triangle" />
      </div>
    </div>
  );
};

export default ItemOne;
