import LeftContent from "./components/leftContent";
import RightContent from "./components/rightContent";
import "./styles.scss";

const OurContact = () => {
  return (
    <div className="aboutUs__contact">
      <div className="aboutUs__contact-left">
        <LeftContent />
      </div>
      <div className="aboutUs__contact-right">
        <RightContent />
      </div>
    </div>
  );
};

export default OurContact;
