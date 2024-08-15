import "./styles.scss";
import LeftContent from "./components/leftContent";
import SliderContent from "@components/sliderContent";
import impad from "@assets/solution/ipadshowcase.png";

const Technology = () => {
  return (
    <div className="technology">
      <div className="technology__left">
        <LeftContent />
      </div>
      <div className="technology__right">
        <SliderContent listImages={[impad, impad, impad, impad]}/>
      </div>
    </div>
  );
};

export default Technology;
