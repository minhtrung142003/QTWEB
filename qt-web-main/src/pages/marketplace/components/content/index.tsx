import React, { useEffect, useRef, useState } from "react";
import { TiShoppingCart } from "react-icons/ti";
import "./styles.scss";
import icon_1 from "@assets/icon-1.png";
import icon_2 from "@assets/icon-2.png";
import icon_3 from "@assets/icon-3.png";
import MarketPlaceHeader from "../header";
import MarketPlaceFiller from "../fillter";
import ItemCard from "../../../../components/itemCard";
import MarketPlaceCart from "../yourCart";

const listFiller: string[] = [
  "Platform",
  "Point of view",
  "Interior",
  "Exterior",
  "Landscape",
  "API",
];

export const MainMarketplace: React.FC = () => {
  const [show, setShow] = useState(true);

  const containerRef = useRef<HTMLDivElement>(null);
  const [widthFiller, setWidthFiller] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setShow(false);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        if (entry.contentBoxSize) {
          setWidthFiller(entry.contentRect.width);
        }
      }
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="marketplace__container">
      <div
        className={`marketplace__container-content ${
          show ? "xl:col-span-8 lg:col-span-7 col-span-12" : "col-span-12"
        }`}
      >
        <MarketPlaceHeader />
        <MarketPlaceFiller
          listFiller={listFiller}
          widthFiller={widthFiller}
          containerRef={containerRef}
        />
        <div
          className={`marketplace__container-listCard ${
            show
              ? "2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-4 sm:grid-cols-3 grid-cols-2"
              : "2xl:grid-cols-7 xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2"
          }`}
        >
          {Array.from({ length: 50 }).map((_, index) => (
            <ItemCard
              image={index === 0 ? [icon_1, icon_2, icon_3] : []}
              icon={index !== 0 && true}
              key={index}
              title="Third person"
              sub="We offer customized UI based on your needs"
            />
          ))}
        </div>
      </div>
      {show ? (
        <MarketPlaceCart setShow={setShow} show={show} />
      ) : (
        <div className="absolute top-3 right-3">
          <div
            className="ml-auto w-10 h-10 bg-red-200 rounded-2xl flex items-center justify-center hover:bg-red-100 cursor-pointer"
            style={{ transition: "0.3s ease-in-out" }}
            onClick={() => setShow(true)}
          >
            <TiShoppingCart style={{ width: 20, height: 20 }} />
          </div>
        </div>
      )}
    </div>
  );
};
