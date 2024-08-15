import "./styles.scss";

interface ICardPlatform {
  image: string;
  title: string;
  transfrom?: string;
  isMax?: boolean;
}

const CardPlatform = ({
  image,
  title,
  transfrom,
  isMax = true,
}: ICardPlatform) => {
  return (
    <div className={`cardPlatform ${isMax && "min-h-[200px]"}`}>
      <img src={image} alt="" className={`cardPlatform__icon ${transfrom} `} />
      <p
        className={`cardPlatform__title ${
          isMax
            ? "2xl:text-[20px] xl:text-[18px] lg:text-[16px] text-[14px]"
            : "xl:text-[8px] text-[11ppx]"
        }`}
        style={{ fontFamily: "Inter" }}
      >
        {title}
      </p>
    </div>
  );
};

export default CardPlatform;
