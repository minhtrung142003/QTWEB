import { ButtonHTMLAttributes, FC } from "react";
import "./styles.scss";

type TFilterButtonProps = {
  active?: boolean;
  value: string;
  onClick?: (value: string) => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const FilterButton: FC<TFilterButtonProps> = ({
  active,
  className,
  disabled,
  value,
  onClick,
  ...rest
}) => {
  return (
    <button
      className={`${
        active ? "selected" : ""
      } ${className} marketplace__filter-item ${disabled ? "disabled" : ""}`}
      disabled={disabled}
      onClick={() => onClick?.(value)}
      {...rest}
    ></button>
  );
};

export default FilterButton;
