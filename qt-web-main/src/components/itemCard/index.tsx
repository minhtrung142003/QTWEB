import IconCard from "@assets/svg/iconCard";
import "./styles.scss";
import { useState } from "react";
interface IItemCard {
  image?: string[];
  icon: boolean;
  title: string;
  sub: string;
  bgBtnColor?: string;
  borderColor?: string;
  textColor?: string;
}

const ItemCard = ({
  image,
  title,
  sub,
  icon,
  bgBtnColor,
  borderColor,
  textColor,
}: IItemCard) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className={`card ${borderColor || "border-[#B9B9B9]"}`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className="card-listImage">
        {image?.map((item, index) => (
          <img key={index} src={item} alt="Icon" className="card-image" />
        ))}

        {icon && <IconCard fillColor={isHover ? "#945C3C" : null} />}
      </div>

      <div className={`card-title ${bgBtnColor || "bg-white"}`}>
        <h3
          className={`font-bold text-sm group-hover:text-white  ${textColor}`}
        >
          {title}
        </h3>
      </div>
      <p className="card-sub">{sub}</p>
    </div>
  );
};

export default ItemCard;
