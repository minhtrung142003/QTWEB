import "./styles.scss";
import bg from "@assets/solution/bgSubtract.png";
import bgHover from "@assets/solution/bgSubtract Hover.png";
import { useState } from "react";

interface ICardOver {
  title: string;
  listIcon: string[];
  sub: string;
}

const CardOver = ({ listIcon, sub, title }: ICardOver) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className="cardOver"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className="cardOver__bg">
        <img
          src={isHover ? bgHover : bg}
          alt=""
          className="w-full h-full object-fill"
        />
      </div>
      <div className="cardOver__content">
        <div className="cardOver__title">{title}</div>
        <div className="cardOver__box"></div>
        <div className="cardOver__listIcon">
          {listIcon.map((icon, index) => (
            <img
              src={icon}
              alt=""
              key={index}
              className="h-[48px] w-[48px] object-cover"
            />
          ))}
        </div>
        <div className="cardOver__sub">{sub}</div>
      </div>
      <div className="cardOver__btn">Gallery &#10132;</div>
    </div>
  );
};

export default CardOver;
