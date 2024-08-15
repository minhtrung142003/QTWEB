import "./styles.scss";

import CardPlatform from "../../../../../components/cardPlatforms";
import CardTech from "../cardTech";
import { listCard } from "../../../../../data/dataServices";
import { listTechnology } from "../../../../../data/dataTechnology";

const LeftContent = () => {
  return (
    <div className="technology__content">
      <div className="technology__content-platforms">
        <h1 className="technology__content-title">
          Support <span className="text-[#945C3C]">All Platforms</span>
        </h1>
        <div className="technology__content-platforms-card">
          {listCard.map((item, index) => (
            <CardPlatform
              key={index}
              image={item.image}
              title={item.title}
              transfrom={index === 3 ? "translate-x-3" : ""}
            />
          ))}
        </div>
      </div>
      <div className="technology__content-cardTech">
        <h1 className="technology__content-title">
          With the lastest <span className="text-[#945C3C]">Technology</span>
        </h1>
        <div className="technology__content-cardTech-card">
          {listTechnology.map((item, index) => (
            <CardTech key={index} image={item.image} title={item.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftContent;
