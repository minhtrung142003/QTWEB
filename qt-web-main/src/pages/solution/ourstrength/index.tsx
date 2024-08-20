import "./styles.scss";
import LeftContent from "./components/leftContent";
import SliderContent from "@components/sliderContent";
import impad from "@assets/solution/ipadshowcase.png";
import impad1 from "@assets/solution/slide1.png";
import impad2 from "@assets/solution/slide2.png";
import impad3 from "@assets/solution/slide3.png";
import impad4 from "@assets/solution/slide4.png";
const OurStrength = () => {
  return (
    <div className="ourstrength">
      <div className="ourstrength__left">
        <LeftContent />
      </div>
      <div className="ourstrength__right">
        <SliderContent listImages={[impad, impad1, impad2, impad3, impad4]} />
      </div>
    </div>
  );
};

export default OurStrength;
