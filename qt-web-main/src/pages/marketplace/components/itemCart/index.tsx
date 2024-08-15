import "./styles.scss";

interface IItemCart {
  image: string;
  title: string;
  sub: string;
  price: string;
  sale: string;
}

const ItemCart = ({ image, title, sub, price, sale }: IItemCart) => {
  return (
    <div className="marketplace__item">
      <div className="marketplace__item-image">
        <img src={image} alt="image" className="w-full h-full" />
      </div>
      <div className="marketplace__item-inf">
        <p className="marketplace__item-inf-title">{title}</p>
        <div className="marketplace__item-inf-sub">{sub}</div>
      </div>
      <div className="marketplace__item-price">
        <p className="text-[#945C3C] text-sm font-[600]">{price}</p>
        <p className="text-[12px] text-[#292929] line-through">{sale}</p>
      </div>
    </div>
  );
};

export default ItemCart;
