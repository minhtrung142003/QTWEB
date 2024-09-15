import React, { useEffect, useRef, useState } from "react";
import { TiShoppingCart } from "react-icons/ti";
import "./styles.scss";
import icon_4 from "@assets/icon-4.png";
import MarketPlaceHeader from "../header";
import MarketPlaceFilter from "../fillter";
import MarketPlaceCart from "../yourCart";
import { animated, useSpring } from "@react-spring/web";
import ItemCard from "../itemCard";
import {
    IFeature,
    IItemCard,
    IMarketPlaceFilterOption,
} from '@interfaces/market-filter';
import useWindowSize from '../HookWindowSize';
import { useProductsContext } from '@contexts/features-context';
import { RotatingLines } from 'react-loader-spinner';

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
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);
  const [animationProps, setAnimationProps] = useSpring(() => ({
    from: { x: 0, y: 0, scale: 1, opacity: 0 },
    config: { tension: 200, friction: 150 },
  }));

  const carRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<HTMLDivElement[]>([]);

  const [listProduct, setListProduct] = useState<IItemCard[]>([]);
  const [listFeature, setListFeature] = useState<IFeature[]>([]);
  const { listFeatures } = useProductsContext();
  useEffect(() => {
    setListFeature(listFeatures);
  });
  const [idItem, setIdItem] = useState(listProduct.length);
  const width = useWindowSize();

    const [listProduct, setListProduct] = useState<IItemCard[]>([]);
    const [listFeature, setListFeature] = useState<IFeature[]>([]);
    const { listFeatures, isLoading } = useProductsContext();
    useEffect(() => {
        setListFeature(listFeatures);
    });
    const width = useWindowSize();

    const handleAddToCart = (itemIndex: number, item: IItemCard) => {
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
        setListProduct((prevList) => [...prevList, { ...item }]);
    };
  }, []);

  return (
    <div className="marketplace__container static ">
      <div
        className={`marketplace__container-content  ${
          show && width.width > 1024
            ? "xl:col-span-8 col-span-7"
            : "col-span-12"
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
        {isLoading ? (
          <div className="slider__loading">
            <RotatingLines
              visible={true}
              width="40"
              strokeWidth="5"
              animationDuration="0.75"
              strokeColor="#8B4513"
              ariaLabel="rotating-lines-loading"
            />
          </div>
        ) : (
          <div
            className={`marketplace__container-listCard ${
              show && width.width > 1024
                ? "2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2"
                : "2xl:grid-cols-7 xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2"
            }`}
          >
            {listFeature.map((feature, index) => (
              <div
                className={`item-${index}`}
                ref={(el) => (itemRefs.current[index] = el!)}
                key={index}
              >
                <ItemCard
                  image={[feature.icon]}
                  title={feature.feature_name}
                  sub={
                    feature.description ||
                    "We offer customized UI based on your needs"
                  }
                  onClick={() =>
                    handleAddToCart(index, {
                      id: index,
                      title: feature.feature_name,
                      sub: feature.description,
                      image: [feature.icon],
                      price: feature.pricing,
                    })
                  }
                />
                {isLoading ? (
                    <div className="w-full h-full flex justify-center items-center">
                        {' '}
                        <RotatingLines
                            visible={true}
                            strokeColor="#945C3C"
                            width="40"
                            strokeWidth="5"
                            animationDuration="0.75"
                            ariaLabel="rotating-lines-loading"
                        />
                    </div>
                ) : (
                    <div
                        className={`marketplace__container-listCard ${
                            show && width.width > 1024
                                ? '2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2'
                                : '2xl:grid-cols-7 xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2'
                        }`}
                    >
                        {listFeature.map((feature, index) => (
                            <div
                                className={`item-${index}`}
                                ref={(el) => (itemRefs.current[index] = el!)}
                                key={index}
                            >
                                <ItemCard
                                    image={[feature.icon]}
                                    title={feature.feature_name}
                                    sub={
                                        feature.description ||
                                        'We offer customized UI based on your needs'
                                    }
                                    onClick={() =>
                                        handleAddToCart(index, {
                                            id: feature.feature_id,
                                            title: feature.feature_name,
                                            sub: feature.description,
                                            image: [feature.icon],
                                            price: feature.pricing,
                                        })
                                    }
                                />
                            </div>
                        ))}

                        <animated.div
                            className="item-fly"
                            style={{
                                position: 'absolute',
                                top: -120,
                                left: -120,
                                width: '15%',
                                height: 50,
                                background: 'red',
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
                )}
            </div>

      {show ? (
        width.width > 1024 ? (
          <MarketPlaceCart
            setShow={setShow}
            show={show}
            setListProduct={setListProduct}
            listProduct={listProduct}
          />
        ) : (
          <div
            className={`absolute  
              right-0 top-4 transition-right duration-500 ease-in`}
          >
            <MarketPlaceCart
              setShow={setShow}
              show={show}
              setListProduct={setListProduct}
              listProduct={listProduct}
            />
          </div>
        )
      ) : width.width > 1024 ? (
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
      ) : (
        <div>
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

          <div
            className={`absolute  
              -right-96 top-4 transition-right duration-500 ease-in`}
          >
            <MarketPlaceCart
              setShow={setShow}
              show={show}
              setListProduct={setListProduct}
              listProduct={listProduct}
            />
          </div>
        </div>
      )}
    </div>
  );
};
