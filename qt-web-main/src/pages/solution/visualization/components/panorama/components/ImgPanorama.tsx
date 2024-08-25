import icon360 from "@assets/solution/visualization/panorama/icon360.png";
import "./style.scss";
import { useState } from "react";
import iconzoom from "@assets/solution/visualization/panorama/iconzoom.png";
import { DataIframe } from "../../../../../../data/dataIframe";

interface IImgPanorama {
  listImages: string[];
}

const ImgPanorama = ({ listImages }: IImgPanorama) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleOpen = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  const toggleFullScreen = () => {
    const modalContent = document.querySelector(".modal__content");
    if (modalContent) {
      if (!document.fullscreenElement) {
        modalContent.requestFullscreen().catch((err) => {
          console.error(`Lỗi màn hình: ${err.message}`);
        });
      } else {
        document.exitFullscreen();
      }
    }
  };
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === DataIframe.length - 1 ? 0 : prevIndex + 1
    );
  };
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? DataIframe.length - 1 : prevIndex - 1
    );
  };
  return (
    <div className="imgPanorama">
      {listImages.map((img, index) => (
        <div
          key={index}
          className="imgPanorama__content"
          onClick={() => handleOpen(index)}
        >
          <img src={img} alt="" className="imgPanorama__img" />
          <img src={icon360} alt="" className="imgPanorama__icon" />
        </div>
      ))}
      {isOpen && (
        <div className="modal">
          <div className="modal__content">
            <div className="embed-container">
              <iframe
                src={DataIframe[currentIndex]}
                style={{ border: "0" }}
                allow="autoplay; fullscreen"
              ></iframe>
            </div>
            <button className="modal__close" onClick={handleClose}>
              &times;
            </button>
            <button className="modal__fullscreen" onClick={toggleFullScreen}>
              <img src={iconzoom} alt="" className="max-w-8 filter-white" />
            </button>
            <button className="modal__prev" onClick={handlePrev}>
              &larr;{" "}
            </button>
            <button className="modal__next" onClick={handleNext}>
              &rarr;{" "}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImgPanorama;
