import { itemsOurTeam } from "../../../../data/dataAboutUs";
import "./styles.scss";
import CardTeam from "./components/cardTeam";

const OurTeam = () => {
  return (
    <div className="aboutUs__ourTeam">
      <div className="aboutUs__ourTeam-content">
        {itemsOurTeam.map((item, index) => (
          <CardTeam sub={item.description} work={item.role} key={index} />
        ))}
      </div>
      <div className="aboutUs__ourTeam-title">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </div>
    </div>
  );
};

export default OurTeam;
