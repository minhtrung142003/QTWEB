import InputText from "@components/inputText";
import "./styles.scss";
import { listCard } from "../../../../../../data/dataServices";
import CardPlatform from "@components/cardPlatforms";

const RightContent = () => {
  return (
    <div className="contact__right">
      <div className="overflow-auto flex flex-col gap-5 justify-between h-full pr-[6px]">
        <div className="contact__right-form">
          <div className="contact__right-form-input">
            <div className="contact__right-form-row">
              <InputText isObligatory={true} title="First Name" />
              <InputText isObligatory={true} title="Last Name" />
            </div>
            <div className="contact__right-form-row">
              <InputText isObligatory={true} title="Email" category="email" />
              <InputText isObligatory={true} title="Phone" category="number" />
            </div>
            <InputText isObligatory={true} title="Company" />
            <InputText
              isObligatory={false}
              title="What would you like to discuss?"
            />
          </div>
          <div className="contact__right-form-services">
            <div className="contact__right-form-services-title">Services</div>
            <div className="contact__right-form-services-content">
              {listCard.map((item, index) => (
                <CardPlatform
                  key={index}
                  image={item.image}
                  title={item.title}
                  isMax={false}
                  transfrom={index === 3 ? "translate-x-2" : ""}
                />
              ))}
            </div>
          </div>
        </div>
        <button className="contact__right-submit">SUBMIT</button>
      </div>
    </div>
  );
};

export default RightContent;
