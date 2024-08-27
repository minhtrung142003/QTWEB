import { IItemCard } from "@interfaces/market-filter";
import "./styles.scss";
import { TiDeleteOutline } from "react-icons/ti";
import { Dispatch, SetStateAction } from "react";
interface IItemCart {
  id?: string;
  images?: string[];
  title: string;
  sub: string;
  price: string;
  sale: string;
  setListProduct: Dispatch<SetStateAction<IItemCard[]>>;
  itemIndex?: number;
}

const ItemCart = ({
  images,
  title,
  sub,
  price,
  sale,
  setListProduct,
  itemIndex,
}: IItemCart) => {
  const handleDeleteCart = (itemInndex: number) => {
    setListProduct((prev) => prev.filter((item) => item.id! !== itemInndex));
  };

  return (
    <div className="marketplace__item relative">
      <div className="marketplace__item-image">
        {images?.map((item, index) => (
          <img
            key={index}
            src={item}
            alt="image"
            className="object-scale-down "
          />
        ))}
      </div>
      <div className="marketplace__item-inf lg:mt-0 mt-[8px]">
        <p className="marketplace__item-inf-title">{title}</p>
        <div className="marketplace__item-inf-sub">{sub}</div>
      </div>
      <div className="marketplace__item-price lg:mt-0 mt-[8px]">
        <p className="text-[#945C3C] text-sm font-[600]">{price}</p>
        <p className="text-[12px] text-[#292929] line-through">{sale}</p>
      </div>
      <TiDeleteOutline
        className="absolute top-0 right-1 size-5 text-red-400 hover:text-red-200 cursor-pointer"
        onClick={() => handleDeleteCart(itemIndex!)}
      />
    </div>
  );
};

export default ItemCart;
