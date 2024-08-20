import React, { useEffect, useRef, useState } from "react";
import { TiShoppingCart } from "react-icons/ti";
import "./styles.scss";
import icon_1 from "@assets/icon-1.png";
import icon_2 from "@assets/icon-2.png";
import icon_3 from "@assets/icon-3.png";
import icon_4 from "@assets/icon-4.png";
import MarketPlaceHeader from "../header";
import MarketPlaceFilter from "../fillter";
import MarketPlaceCart from "../yourCart";
import { animated, useSpring } from "@react-spring/web";
import ItemCard from "../itemCard";

// const listFiller: string[] = [
//   "Platform",
//   "Point of view",
//   "Interior",
//   "Exterior",
//   "Landscape",
//   "API",
// ];

const ListFilter: IMarketPlaceFilterOption[] = [
  {
    value: "Platform",
    label: "Platform",
  },
  {
    value: "Point of view",
    label: "Point of view",
  },
  {
    value: "Interior",
    label: "Interior",
  },
  {
    value: "Exterior",
    label: "Exterior",
  },
  {
    value: "Landscape",
    label: "Landscape",
  },
  {
    value: "API",
    label: "API",
    disabled: true,
  },
];

export const MainMarketplace: React.FC = () => {
  const [show, setShow] = useState(true);

  const containerRef = useRef<HTMLDivElement>(null);
  const [widthFilter, setWidthFiller] = useState<number>(0);
  const [listFilter, setListFilter] = useState<string[]>([]);

  const [animationProps, setAnimationProps] = useSpring(() => ({
    from: { x: 0, y: 0, scale: 1, opacity: 0 },
    config: { tension: 200, friction: 150 },
  }));

  const carRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<HTMLDivElement[]>([]);

  const handleAddToCart = (itemIndex: number) => {
    const itemRef = itemRefs.current[itemIndex].getBoundingClientRect();
    const cartRect = carRef.current?.getBoundingClientRect();
    if (cartRect && itemRef) {
      setAnimationProps({
        from: {
          x: itemRef.left,
          y: itemRef.top,
          scale: 1,
          opacity: 1,
        },
        to: {
          x: cartRect.left,
          y: cartRect.top,
          scale: 0.2,
          opacity: 0,
        },
      });
    }
  };

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
          show ? "xl:col-span-8 col-span-7" : "col-span-12"
        }`}
      >
        <MarketPlaceHeader />
        <MarketPlaceFilter
          listFilter={ListFilter}
          widthFilter={widthFilter}
          containerRef={containerRef}
          value={listFilter}
          onChange={(value) =>
            setListFilter((prev) =>
              prev.includes(value)
                ? prev.filter((prevValue) => prevValue !== value)
                : [...prev, value]
            )
          }
        />
        <div
          className={`marketplace__container-listCard ${
            show
              ? "2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2"
              : "2xl:grid-cols-7 xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2"
          }`}
        >
          {Array.from({ length: 50 }).map((_, index) => (
            <div
              className={`item-${index}`}
              ref={(el) => (itemRefs.current[index] = el!)}
            >
              <ItemCard
                image={index === 0 ? [icon_1, icon_2, icon_3] : [icon_4]}
                key={index}
                title="Third person"
                sub="We offer customized UI based on your needs"
                onChange={() => handleAddToCart(index)}
              />
            </div>
          ))}
          <animated.div
            className="item-fly"
            style={{
              position: "absolute",
              top: -120,
              left: -120,
              width: "15%",
              height: 50,
              background: "red",
              ...animationProps,
            }}
          >
            <ItemCard
              image={[icon_4]}
              title="Third person"
              sub="We offer customized UI based on your needs"
            />
          </animated.div>
        </div>
      </div>
      {show ? (
        <MarketPlaceCart setShow={setShow} show={show} />
      ) : (
        <div className="absolute top-3 right-3">
          <div
            className="ml-auto w-10 h-10 bg-red-200 rounded-2xl flex items-center justify-center hover:bg-red-100 cursor-pointer"
            ref={carRef}
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
