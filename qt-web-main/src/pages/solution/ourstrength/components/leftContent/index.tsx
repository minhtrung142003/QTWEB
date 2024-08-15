import ItemCard from "@components/itemCard";
import "./styles.scss";

const LeftContent = () => {
  return (
    <div className="ourstrength__content">
      <h1 className="ourstrength__content-title">
        Together, we bring{" "}
        <span className="text-[#945C3C]">your buidlings</span> to life.
      </h1>
      <div className="ourstrength__content-card">
        {Array.from({ length: 50 }).map((_, index) => (
          <ItemCard
            icon={true}
            key={index}
            title="Third person"
            sub="We offer customized UI based on your needs"
          />
        ))}
      </div>
    </div>
  );
};

export default LeftContent;
