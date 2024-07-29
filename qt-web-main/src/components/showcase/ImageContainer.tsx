import container from '@assets/showcase/container.png';
import { useState } from 'react';
import { GiParkBench } from 'react-icons/gi';
import { SiOpenlayers } from 'react-icons/si';

export default function ImageContainer() {
    const [showImage, setShowImage] = useState(false);

    return (
        <div className="w-full h-full relative">
            <div
                className={`absolute w-full h-full rounded-2xl bg-cover bg-center transition-opacity duration-500 ${
                    showImage ? `opacity-100 visible` : 'opacity-0 invisible'
                }`}
                style={{ backgroundImage: `url(${container})` }}
            >
                <div className="absolute left-0 top-[40%] bg-black ">
                    <GiParkBench size={70} />
                    <SiOpenlayers size={70} className="text-white" />
                </div>
            </div>
            <button
                onClick={() => {
                    setShowImage(true);
                }}
                className={`absolute w-full h-full bg-[#D9D9D9] rounded-2xl flex justify-center items-center transition-opacity duration-500 ${
                    !showImage ? `opacity-100 visible` : `opacity-0 invisible`
                }`}
            >
                <p>Loading the demo, please waiting</p>
            </button>
        </div>
    );
}
