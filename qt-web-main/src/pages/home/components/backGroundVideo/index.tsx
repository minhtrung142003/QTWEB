import HomeVideo from '@assets/home/home.mp4';
import { useEffect, useRef, useState } from 'react';
import { RotatingLines } from 'react-loader-spinner';

export default function BackgroundVideo() {
    const videoHome = useRef<HTMLVideoElement>(null);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        if (videoHome.current != null) {
            videoHome.current.playbackRate = 0.75;
        }
    }, []);
    const handleLoadedData = () => {
        setIsLoading(true);
    };
    const handleCanPlay = () => {
        setIsLoading(false);
    };
    return (
        <>
            <div
                className={`absolute w-full gap-3 h-full bg-[#D9D9D9] rounded-2xl flex justify-center items-center  transition-all duration-500 ${
                    isLoading ? `opacity-100 visible` : `opacity-0 invisible`
                }`}
            >
                <p>Loading, please waiting</p>
                <RotatingLines
                    visible={true}
                    strokeColor="#945C3C"
                    width="40"
                    strokeWidth="5"
                    animationDuration="0.75"
                    ariaLabel="rotating-lines-loading"
                />
            </div>
            <video
                autoPlay
                muted
                loop
                onLoadedData={handleLoadedData}
                onLoadedMetadata={handleLoadedData}
                onCanPlay={handleCanPlay}
                ref={videoHome}
                className={`absolute transition-all duration-500 ${
                    !isLoading ? `opacity-100 visible` : `opacity-0 invisible`
                }`}
                style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '16px',
                    objectFit: 'cover',
                    border: '3px solid rgba(255, 255, 255, 0.3)',
                }}
            >
                <source src={HomeVideo} type="video/mp4" />
            </video>
        </>
    );
}
