import { TiDeleteOutline } from 'react-icons/ti';
import './styles.scss';
import { Dispatch, SetStateAction, useMemo } from 'react';
import ItemCart from '../itemCart';
import MarketplaceTotal from '../total';
import { IItemCard } from '@interfaces/market-filter';

interface IMarketPlaceCart {
    show: boolean;
    setShow: Dispatch<SetStateAction<boolean>>;
    setListProduct: Dispatch<SetStateAction<IItemCard[]>>;
    listProduct: IItemCard[];
}

const MarketPlaceCart = ({
    show,
    setShow,
    listProduct,
    setListProduct,
}: IMarketPlaceCart) => {
    const sumPrice = useMemo(() => {
        return listProduct.reduce(
            (total, item) => total + parseFloat(item.price ?? ''),
            0
        );
    }, [listProduct]);

    return (
        <div
            className={`marketplace__cart ${
                show ? 'xl:col-span-4 lg:col-span-5' : null
            } ${window.innerWidth < 1024 ? 'show w-80' : null}`}
        >
            <div className="marketplace__cart-header">
                <TiDeleteOutline
                    className="size-7 text-white hover:text-[#70462D]"
                    onClick={() => setShow(false)}
                />
                <p className="font-bold text-sm ml-2 h-8 w-28 content-center rounded-full bg-[#2A753F] text-white">
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
                    {listProduct.map((item, index) => (
                        <ItemCart
                            images={item.image}
                            key={index}
                            price={`${item.price} USD`}
                            sale={`${item.price} USD` || ''}
                            title={item.title}
                            sub={item.sub}
                            setListProduct={setListProduct}
                            itemIndex={item.id}
                        />
                    ))}
                </div>

                <MarketplaceTotal
                    discount={listProduct.length === 0 ? '0.00' : '100.00'}
                    featureNumber={`${listProduct.length}`}
                    price={sumPrice.toFixed(2)}
                    totalPrice={(
                        sumPrice - (listProduct.length === 0 ? 0 : 100)
                    ).toFixed(2)}
                    setListProduct={setListProduct}
                    listProduct={listProduct}
                />
            </div>
        </div>
    );
};

export default MarketPlaceCart;
