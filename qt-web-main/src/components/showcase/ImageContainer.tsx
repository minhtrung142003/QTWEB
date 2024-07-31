import container from '@assets/showcase/container.png';
import { useState } from 'react';
import ShowcaseLeftMenu from './LeftMenu';
import ShowcaseRightMenu from './RightMenu';
import ShowcaseBottomMenu from './BottomMenu';

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
                <ShowcaseLeftMenu />
                <ShowcaseRightMenu />
                <ShowcaseBottomMenu />
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
