import { useEffect, useRef, useState } from 'react';
import ShowcaseLeftMenu from './LeftMenu';
import ShowcaseRightMenu from './RightMenu';
import ShowcaseBottomMenu from './BottomMenu';
import HomeVideo from '@assets/home/home.mp4';

export default function ImageContainer() {
    const [showImage, setShowImage] = useState(false);
    const videoHome = useRef<HTMLVideoElement>(null);
    useEffect(() => {
        if (videoHome.current != null) {
            videoHome.current.playbackRate = 0.75;
        }
    }, []);
    return (
        <div className="w-full h-full relative">
            <div
                className={`absolute w-full h-full rounded-2xl bg-cover bg-center transition-opacity duration-500 ${
                    showImage ? `opacity-100 visible` : 'opacity-0 invisible'
                }`}
            >
                <video
                    muted
                    loop
                    ref={videoHome}
                    style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: '16px',
                        objectFit: 'cover',
                    }}
                >
                    <source src={HomeVideo} type="video/mp4" />
                </video>
                <ShowcaseLeftMenu />
                <ShowcaseRightMenu />
                <ShowcaseBottomMenu />
            </div>
            <button
                onClick={() => {
                    setShowImage(true);
                    videoHome.current?.play();
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
