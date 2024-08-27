import icon360 from "@assets/solution/visualization/panorama/icon360.png";
import "./style.scss";
import { useEffect, useState } from "react";
import { DataIframe } from "../../../../../../data/dataIframe";
import { RotatingLines } from "react-loader-spinner";
import {
  MdClose,
  MdFullscreen,
  MdKeyboardArrowRight,
  MdKeyboardArrowLeft,
} from "react-icons/md";
interface IImgPanorama {
  listImages: string[];
}

const ImgPanorama = ({ listImages }: IImgPanorama) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [currentIndex]);

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
              {isLoading && (
                <div className="absolute flex inset-0 justify-center items-center bg-black z-10">
                  <RotatingLines
                    visible={true}
                    width="40"
                    strokeWidth="5"
                    animationDuration="0.75"
                    strokeColor="#8B4513"
                    ariaLabel="rotating-lines-loading"
                  />
                </div>
              )}
              <iframe
                src={DataIframe[currentIndex]}
                style={{ border: "0", display: isLoading ? "none" : "block" }}
                allow="autoplay; fullscreen"
                onLoad={() => setIsLoading(false)}
              ></iframe>
            </div>
            <button className="modal__close" onClick={handleClose}>
              <MdClose size={24} />
            </button>
            <button className="modal__fullscreen" onClick={toggleFullScreen}>
              <MdFullscreen size={24} />
            </button>
            <button className="modal__prev" onClick={handlePrev}>
              <MdKeyboardArrowLeft size={30} />
            </button>
            <button className="modal__next" onClick={handleNext}>
              <MdKeyboardArrowRight size={30} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImgPanorama;
