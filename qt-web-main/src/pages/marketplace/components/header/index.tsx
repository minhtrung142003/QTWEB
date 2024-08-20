import "./styles.scss";

const MarketPlaceHeader = () => {
  return (
    <header className="marketplace__header">
      <div className="marketplace__header-filler ">
        <p className="font-bold text-sm  h-7 w-28 content-center rounded-full bg-[#70462D] text-white cursor-default">
          Filter
        </p>
      </div>
      <div className="marketplace__header-title">
        <p className="font-bold text-[#4F4F4F] lg:text-[20px] text-[16px] leading-5 text-center">
          Let's us know exactly what
          <span className="text-[#2A753F]"> function </span>
          you need
        </p>
      </div>
    </header>
  );
};

export default MarketPlaceHeader;
