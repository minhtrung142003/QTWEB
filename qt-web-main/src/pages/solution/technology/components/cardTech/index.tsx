import bgCard from "@assets/solution/content2.png";
import bgCardHover from "@assets/solution/Subtract2.png";
import "./styles.scss";
import { useState } from "react";
interface ICardTech {
  image: string;
  title: string;
}

const CardTech = ({ image, title }: ICardTech) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      className="cardTech"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <img src={image} alt="" className="cardTech__icon"/>
      <div className="cardTech__bg">
        <img
          src={isHover ? bgCardHover : bgCard}
          alt=""
          className="w-full h-full object-fill"
        />
      </div>
      <div className="cardTech__btn">{title}</div>
    </div>
  );
};

export default CardTech;
