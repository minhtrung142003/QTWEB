import ItemCard from "@components/itemCard";
import "./styles.scss";
import FooterItem from "../footerItem";

const LeftContent = () => {
  return (
    <div className="contact__left">
      <h1 className="contact__left-title">
        Schedule <span className="text-[#4F4F4F]">a time with us to</span>
      </h1>
      <div className="flex flex-col justify-center h-fit mt-[30px]">
        <div className="contact__left-content">
          <div className="contact__left-content-item--1">
            <ItemCard
              title="Customized UI"
              icon={true}
              sub="We offer customized UI based on your needs and requirements"
              bgBtnColor="bg-[#C4815B]"
              textColor="text-white"
              borderColor="border-[#C4815B]"
            />
          </div>
          <div className="contact__left-content-item--2">
            <ItemCard
              title="Customized UI"
              icon={true}
              sub="We offer customized UI based on your needs and requirements"
              bgBtnColor="bg-[#C4815B]"
              textColor="text-white"
              borderColor="border-[#C4815B]"
            />
          </div>
          <div className="contact__left-content-item--3">
            <ItemCard
              title="Customized UI"
              icon={true}
              sub="We offer customized UI based on your needs and requirements"
              bgBtnColor="bg-[#C4815B]"
              textColor="text-white"
              borderColor="border-[#C4815B]"
            />
          </div>
          <div className="contact__left-content-item--4">
            <ItemCard
              title="Customized UI"
              icon={true}
              sub="We offer customized UI based on your needs and requirements"
              bgBtnColor="bg-[#C4815B]"
              textColor="text-white"
              borderColor="border-[#C4815B]"
            />
          </div>
        </div>
        <div className="contact__left-footer">
          <div className="contact__left-footer-item--1">
            <FooterItem title="Address" sub="Hai Chau, Da Nang, Vietnam" />
          </div>
          <div className="contact__left-footer-item--2">
            <FooterItem title="Email" sub="customer-service@qt.vn" />
          </div>
          <div className="contact__left-footer-item--3">
            <FooterItem title="Phone" sub="030 000 0000" isBorder={false} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftContent;
