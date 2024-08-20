import "./styles.scss";
interface IItemCard {
  image?: string[];
  title: string;
  sub: string;
  onChange?: () => void;
}

const ItemCard = ({ image, title, sub, onChange }: IItemCard) => {
  return (
    <div className="marketplace__card " onClick={onChange}>
      <div className="marketplace__card-listImage">
        {image?.map((item, index) => (
          <img
            key={index}
            src={item}
            alt="Icon"
            className="marketplace__card-image"
          />
        ))}
      </div>

      <div className="marketplace__card-title">
        <h3 className="font-bold text-sm group-hover:text-white ">{title}</h3>
      </div>
      <p className="marketplace__card-sub">{sub}</p>
    </div>
  );
};

export default ItemCard;
