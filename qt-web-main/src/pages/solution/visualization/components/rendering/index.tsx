import './styles.scss';
import Rendering1 from '@assets/rendering_1.png';
import Rendering2 from '@assets/rendering_2.png';
import Rendering3 from '@assets/rendering_3.png';
import Rendering4 from '@assets/rendering_4.png';
import Rendering5 from '@assets/rendering_5.png';
import Rendering6 from '@assets/rendering_6.png';
import Rendering7 from '@assets/rendering_7.png';
import Rendering8 from '@assets/rendering_8.png';
import useFullscreen from '@hooks/useFullscreen';
import {
    MdClose,
    MdFullscreen,
    MdKeyboardArrowRight,
    MdKeyboardArrowLeft,
} from 'react-icons/md';

import { useEffect, useRef, useState } from 'react';

const Rendering = () => {
    const { toggleFullscreen } = useFullscreen();
    const [isSelected, setIsSelected] = useState(false);
    const [imageIndex, setImageIndex] = useState<number>(0);
    const [listImg, setListImg] = useState<string[]>([]);
    const galleryRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (galleryRef.current) {
            const images = galleryRef.current.querySelectorAll('img');
            const srcArray = Array.from(images).map((img) => img.src);
            setListImg(srcArray);
            images.forEach((img, index: number) => {
                img.addEventListener('click', () => {
                    setIsSelected(true);
                    setImageIndex(index);
                });
            });
            return () => {
                images.forEach((img) => {
                    img.removeEventListener('click', () => {});
                });
            };
        }
    }, []);

    return (
        <>
            <div className="visualization__rendering" ref={galleryRef}>
                <div className="visualization__rendering-row">
                    <img
                        src={Rendering1}
                        alt=""
                        className="visualization__rendering-card md:max-xl:col-span-9 col-span-5 row-span-1"
                    />
                    <img
                        src={Rendering3}
                        alt=""
                        className="visualization__rendering-card md:max-xl:col-span-15 col-span-8 row-span-2"
                    />
                    <img
                        src={Rendering4}
                        alt=""
                        className="visualization__rendering-card md:max-xl:order-4 md:max-xl:col-span-5 col-span-3 row-span-2"
                    />
                    <img
                        src={Rendering5}
                        alt=""
                        className="visualization__rendering-card md:max-xl:order-5 md:max-xl:col-span-19 col-span-8 row-span-2"
                    />
                    <img
                        src={Rendering2}
                        alt=""
                        className="visualization__rendering-card md:max-xl:order-3 md:max-xl:col-span-9 col-span-5 row-span-1"
                    />
                </div>
                <div className="visualization__rendering-row">
                    <img
                        src={Rendering6}
                        alt=""
                        className="visualization__rendering-card md:max-xl:col-span-8 col-span-4 row-span-2"
                    />
                    <img
                        src={Rendering7}
                        alt=""
                        className="visualization__rendering-card md:max-xl:col-span-16 col-span-8 row-span-2"
                    />
                    <img
                        src={Rendering8}
                        alt=""
                        className="visualization__rendering-card md:max-xl:col-span-15 col-span-8 row-span-2"
                    />
                    <img
                        src={Rendering6}
                        alt=""
                        className="visualization__rendering-card md:max-xl:col-span-9 col-span-4 row-span-1"
                    />
                    <img
                        src={Rendering4}
                        alt=""
                        className="visualization__rendering-card md:max-xl:col-span-9 col-span-4 row-span-1"
                    />
                </div>
            </div>
            <div
                className={`visualization__rendering-gallery-show ${
                    isSelected ? `-active` : null
                }`}
            >
                <div
                    className="visualization__rendering-gallery-show-screen"
                    onClick={() => {
                        setIsSelected(false);
                    }}
                ></div>
                <div className="visualization__rendering-gallery-show-image">
                    <img
                        src={listImg[imageIndex]}
                        alt=""
                        className="h-full object-contain z-50"
                    />
                </div>
                <div
                    className="visualization__rendering-gallery-show-btn left-0"
                    onClick={() => {
                        setImageIndex(
                            imageIndex !== 0
                                ? imageIndex - 1
                                : listImg.length - 1
                        );
                    }}
                >
                    <MdKeyboardArrowLeft size={30} />
                </div>
                <div
                    className="visualization__rendering-gallery-show-btn right-0"
                    onClick={() => {
                        setImageIndex(
                            imageIndex === listImg.length - 1
                                ? 0
                                : imageIndex + 1
                        );
                    }}
                >
                    <MdKeyboardArrowRight size={30} />
                </div>
                <div className="visualization__rendering-gallery-show-feature">
                    <div
                        className="visualization__rendering-gallery-show-feature-btn"
                        onClick={toggleFullscreen}
                    >
                        <MdFullscreen size={24} />
                    </div>
                    <div
                        className="visualization__rendering-gallery-show-feature-btn"
                        onClick={() => setIsSelected(false)}
                    >
                        <MdClose size={24} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Rendering;
