import { TiDeleteOutline } from "react-icons/ti";
import "./styles.scss";
import { Dispatch, SetStateAction } from "react";
import ItemCart from "../itemCart";
import icon_4 from "@assets/icon-4.png";
import MarketplaceTotal from "../total";

interface IMarketPlaceCart {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
}

const MarketPlaceCart = ({ show, setShow }: IMarketPlaceCart) => {
  return (
    <div
      className={`marketplace__cart ${
        show ? "xl:col-span-4 lg:col-span-5" : null
      } ${window.innerWidth < 1024 ? "show" : null}`}
    >
      <div className="marketplace__cart-header">
        <TiDeleteOutline
          className="size-7 text-white hover:text-[#70462D]"
          onClick={() => setShow(false)}
        />
        <p className="font-bold text-sm ml-2 h-7 w-28 content-center rounded-full bg-[#2A753F] text-white">
          Your Cart
        </p>
      </div>
      <div className="marketplace__cart-content">
        <div className="marketplace__cart-feature">
          <div className="w-32 p-2 rounded-[36px] bg-button-bg font-bold ">
            <p className="text-[#2F7A49]">Feature</p>
          </div>
          <div className=" w-32 p-2 rounded-[36px] bg-button-bg font-bold ">
            <p className="text-[#2F7A49]">Estimate</p>
          </div>
        </div>

        <div className="marketplace__cart-product">
          {Array.from({ length: 3 }).map((_, index) => (
            <ItemCart
              image={icon_4}
              key={index}
              price="100.00 USD"
              sale="150. USD"
              title="Web function pack"
              sub="Describle options"
            />
          ))}
        </div>

        <MarketplaceTotal
          discount="100.00"
          featureNumber="12"
          price="1200.00"
          totalPrice="1100.00"
        />
      </div>
    </div>
  );
};

export default MarketPlaceCart;
