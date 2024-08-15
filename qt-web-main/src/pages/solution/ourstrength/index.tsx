import "./styles.scss";
import LeftContent from "./components/leftContent";
import SliderContent from "@components/sliderContent";
import impad from "@assets/solution/ipadshowcase.png";

const OurStrength = () => {
  return (
    <div className="ourstrength">
      <div className="ourstrength__left">
        <LeftContent />
      </div>
      <div className="ourstrength__right">
        <SliderContent listImages={[impad, impad, impad, impad]} />
      </div>
    </div>
  );
};

export default OurStrength;
