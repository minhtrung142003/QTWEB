import { IItemCard } from '@interfaces/market-filter';
import './styles.scss';

const ItemCard = ({ image, title, sub, onClick }: IItemCard) => {
    return (
        <div className="marketplace__card " onClick={onClick}>
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
                <h3 className="font-bold text-sm group-hover:text-white ">
                    {title}
                </h3>
            </div>
            <p className="marketplace__card-sub">{sub}</p>
        </div>
    );
};

export default ItemCard;
