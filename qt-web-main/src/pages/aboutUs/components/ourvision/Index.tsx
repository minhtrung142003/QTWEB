import ContentVision from "./components/contentVision";
import "./styles.scss";

const OurVision = () => {
  return (
    <div className="aboutUs__vision">
      <div className="aboutUs__vision-header">
        <h1 className="aboutUs__vision-header-title">
          And we have even
          <span className="text-[#945C3C] text-[35.31px]"> bigger</span> targets
          to pursue
        </h1>
        <p className="aboutUs__vision-header-sub">
          And we have even <span className="text-[#945C3C]">bigger </span>
          targets to pursue
        </p>
      </div>
      <div className="aboutUs__vision-content">
        <ContentVision />
      </div>
    </div>
  );
};

export default OurVision;
