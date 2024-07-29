import React, { useState } from 'react';
import container from '@assets/showcase/container.png';
import Menu from './Menu';

const Container: React.FC = () => {
    const [showImage, setShowImage] = useState(false);
    const handleClick = () => {
        setShowImage(true);
    };
    return (
        <div className="container w-full h-full">
            <div
                className=" relative w-full h-full flex-1  rounded-tl-2xl rounded-br-2xl rounded-bl-2xl z-40 [background:linear-gradient(126.92deg,_rgba(240,_240,_240,_0.35),_rgba(228,_228,_228,_0.7))] border-1 mt-4 "
                onClick={handleClick}
            >
                {!showImage && (
                    <div className=" md:w-full xl:w-[88%] 2xl:w-[72%] md:h-[74vh] xl:h-[78vh] absolute bg-[#D9D9D9] flex items-center justify-center rounded-xl md:ml-0 xl:ml-[75px] 2xl:ml-52 md:mt-16 xl:mt-10">
                        <p>Loading the demo, please waiting ...</p>
                    </div>
                )}
                <img
                    src={container}
                    alt="container"
                    className="object-contain w-full h-[83vh] py-3  "
                />
                <div className="absolute right-20 top-[-8%] gap-x-4">
                    <Menu />
                </div>
            </div>
        </div>
    );
};

export default Container;

// [background:linear-gradient(126.92deg,_rgba(240,_240,_240,_0.35),_rgba(228,_228,_228,_0.7))]
