import { RefObject, useState } from "react";
import "./styles.scss";

interface IMarketPlaceFillter {
  listFiller: string[];
  widthFiller: number;
  containerRef: RefObject<HTMLDivElement>;
}

const MarketPlaceFiller = ({
  listFiller,
  widthFiller,
  containerRef,
}: IMarketPlaceFillter) => {
  const [listSelected, setListSelected] = useState([0]);

  const toggleSelect = (index: number) => {
    setListSelected((prevSelected) =>
      prevSelected.includes(index)
        ? prevSelected.filter((i) => i !== index)
        : [...prevSelected, index]
    );
  };

  return (
    <div
      className={`marketplace__filler ${
        widthFiller > 768 ? "flex" : "grid grid-cols-3"
      }`}
      ref={containerRef}
    >
      {listFiller.map((item, index) => (
        <button
          className={`marketplace__filler-item ${
            widthFiller > 768
              ? "px-[25px] py-[8px]"
              : "lg:px-[18px] px-[10px]  lg:py-[4px] py-[2px]"
          }  ${listSelected.includes(index) ? "selected" : ""}`}
          onClick={() => toggleSelect(index)}
          key={index}
        >
          <p>{item}</p>
        </button>
      ))}
    </div>
  );
};

export default MarketPlaceFiller;
