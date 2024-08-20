import "./styles.scss";
import ItemOurStrength from "@components/itemOurStrength";

const LeftContent = () => {
  return (
    <div className="ourstrength__content">
      <h1 className="ourstrength__content-title">
        Together, we bring{" "}
        <span className="text-[#945C3C]">your buidlings</span> to life.
      </h1>
      <div className="ourstrength__content-card">
        {Array.from({ length: 9 }).map((_, index) => (
          <ItemOurStrength
            icon={true}
            key={index}
            title="Customized UI"
            sub="We offer customized UI based on your needs and requirements"
          />
        ))}
      </div>
    </div>
  );
};

export default LeftContent;
