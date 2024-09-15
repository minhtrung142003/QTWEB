import usePlaceOrder from '@hooks/usePlaceOrder';
import './styles.scss';
import { IItemCard } from '@interfaces/market-filter';
import { Dispatch, SetStateAction } from 'react';

interface IMarketPlaceTotal {
    featureNumber: string;
    totalPrice: string;
    discount: string;
    price: string;
    setListProduct: Dispatch<SetStateAction<IItemCard[]>>;
    listProduct: IItemCard[];
}

const MarketplaceTotal = ({
    discount,
    featureNumber,
    price,
    totalPrice,
    setListProduct,
    listProduct,
}: IMarketPlaceTotal) => {
    const { handleOrder } = usePlaceOrder(setListProduct, price, listProduct);
    const onSubmitOrder = () => {
        handleOrder();
    };
    return (
        <div className="marketplace__total">
            <div className="marketplace__total-header">
                <p className="text-white font-bold">Your Estimated Price</p>
            </div>
            <div className="w-full flex justify-between">
                <p>{featureNumber} Features</p> <p>{price} USD</p>
            </div>
            <div className="w-full flex justify-between border-b-2 border-[#B79B8B] pb-[4px] mt-[4px]">
                <p>Discount</p> <p>{discount} USD</p>
            </div>
            <p className=" w-full font-bold text-right text-[#2F7A49] mt-[6px]">
                {totalPrice} USD
            </p>
            <div className="flex justify-end mt-2">
                <button className="font-bold bg-white text-[#945C3C] p-1 px-4 border border-[rgb(112,70,45)] rounded-md mr-2 cursor-pointer">
                    Contact us
                </button>
                <button
                    onClick={onSubmitOrder}
                    className="font-bold bg-white text-[#945C3C] p-1 px-2 border border-[rgb(112,70,45)] rounded-md cursor-pointer"
                >
                    Place order
                </button>
            </div>
        </div>
    );
};

export default MarketplaceTotal;
