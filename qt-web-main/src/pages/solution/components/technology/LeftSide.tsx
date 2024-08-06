import React from "react";
import { items, content2 } from "./Data";
import "./style.css";
const LeftSide: React.FC = () => {
  return (
    <div className=" max-w-[100%] h-full flex flex-col gap-[48px] overflow-y-auto overflow-x-hidden pr-4 box-border ">
      <div className="content1  ">
        <div className="header1">
          <h3 className="support">Support</h3>
          <h3 className="all-platform">All Platforms</h3>
        </div>
        <div className="itemscontent1">
          {items.map((item, index) => (
            <div
              key={index}
              className={`item-gridcontent1 group  ${
                index % 2 === 1 ? "translate-y-[23px]" : "translate-y-0"
              }`}
            >
              <img
                src={item.src}
                className={`image-content1 ${
                  item.text === "Augmented Reality" ? "translate-x-3 " : null
                } `}
              />
              <p className="text-content1">
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
{/* content 2 */}
      <div className="content2">
        <div className="header2">
          <h3 className="text-colorWhite">With the latest</h3>
          <h3 className="text-colorOrgane">Technology</h3>
        </div>
        <div className="items-content2">
          {content2.map((item, index) => (
            <div key={index} className="grid-content2 group">
              <div className="item-gridcontent2">
                <img
                  src={item.src}
                  className={`image-content2 
                  }`}
                  alt={item.text}
                />
              </div>
              <div
                className="clip-path-2"
                style={{
                  clipPath: "polygon(43% 66%, 22% 100%, 0 100%, 0 66%)",
                }}
              />
              <div className="grid-item-text">
                <p className="item-text">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default LeftSide;