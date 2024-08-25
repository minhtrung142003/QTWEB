import ImgPanorama from "./components/ImgPanorama";
import "./styles.scss";
import img1 from "@assets/solution/visualization/panorama/6.png";
import img2 from "@assets/solution/visualization/panorama/3.png";
import img3 from "@assets/solution/visualization/panorama/5.png";
const Panorama = () => {
  return (
    <div className="panoramaContainer">
      <ImgPanorama listImages={[img1, img2, img3]} />
    </div>
  );
};

export default Panorama;
