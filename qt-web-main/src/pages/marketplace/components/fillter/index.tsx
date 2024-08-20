import { RefObject } from "react";
import "./styles.scss";
import { IMarketPlaceFilterOption } from "@interfaces/market-filter";
import FilterButton from "../filter-button";

interface IMarketPlaceFilter {
  listFilter: IMarketPlaceFilterOption[];
  widthFilter: number;
  containerRef: RefObject<HTMLDivElement>;
  value: string[];
  onChange?: (value: string) => void;
}

const MarketPlaceFilter = ({
  listFilter,
  widthFilter,
  containerRef,
  value,
}: IMarketPlaceFilter) => {
  return (
    <div
      className={`marketplace__filter ${
        widthFilter > 768 ? "flex flex-wrap" : "grid grid-cols-3"
      }`}
      ref={containerRef}
    >
      {listFilter.map(({ value: optionValue, label, disabled }, index) => (
        <FilterButton
          className={`marketplace__filter-item ${
            widthFilter > 768
              ? "px-[25px] py-[8px]"
              : "lg:px-[18px] px-[10px]  lg:py-[4px] py-[2px]"
          }`}
          active={value.includes(optionValue)}
          key={index}
          disabled={disabled}
          value={optionValue}
        >
          {label}
        </FilterButton>
      ))}
    </div>
  );
};

export default MarketPlaceFilter;
