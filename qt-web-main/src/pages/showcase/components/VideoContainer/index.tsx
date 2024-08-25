import { useEffect, useRef, useState } from 'react';
import ShowcaseLeftMenu from '../leftMenu';
import ShowcaseRightMenu from '../RightMenu';
import ShowcaseBottomMenu from '../bottomMenu';
import HomeVideo from '@assets/home/home.mp4';
import Showcase1 from '@assets/showcase/showcase-1.mp4';
import Showcase2 from '@assets/showcase/showcase-2.mp4';
import { RotatingLines } from 'react-loader-spinner';

interface VideoProps {
    videoIndex: number;
}
const VideoContainer: React.FC<VideoProps> = ({ videoIndex }) => {
    const videoHome = useRef<HTMLVideoElement>(null);

    const demo = [HomeVideo, Showcase1, Showcase2];
    const [video, setVideo] = useState(HomeVideo);
    const [key, setKey] = useState(0);
    const handleLoadedData = () => {
        setIsLoading(true);
    };
    const handleCanPlay = () => {
        setIsLoading(false);
    };
    useEffect(() => {
        setVideo(demo[videoIndex]);
        setKey(videoIndex);
        setIsLoading(true);
    }, [videoIndex]);

    useEffect(() => {
        if (videoHome.current != null) {
            videoHome.current.playbackRate = 0.75;
        }
    });
    const [isLoading, setIsLoading] = useState(true);

    return (
        <div className="w-full h-full relative">
            <div
                className={`absolute w-full h-full group rounded-2xl bg-center transition-all duration-500 ${
                    !isLoading ? `opacity-100 visible` : `opacity-0 invisible`
                }`}
            >
                <video
                    muted
                    loop
                    autoPlay
                    onLoadedData={handleLoadedData}
                    onLoadedMetadata={handleLoadedData}
                    onCanPlay={handleCanPlay}
                    key={key}
                    ref={videoHome}
                    style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: '16px',
                        objectFit: 'cover',
                    }}
                >
                    <source src={video} type="video/mp4"></source>
                </video>
                <ShowcaseLeftMenu />
                <ShowcaseRightMenu />
                <ShowcaseBottomMenu />
            </div>
            <div
                className={`absolute w-full gap-3 h-full bg-[#D9D9D9] rounded-2xl flex justify-center items-center  transition-all duration-500 ${
                    isLoading ? `opacity-100 visible` : `opacity-0 invisible`
                }`}
            >
                <p>Loading the demo, please waiting</p>
                <RotatingLines
                    visible={true}
                    strokeColor="#945C3C"
                    width="40"
                    strokeWidth="5"
                    animationDuration="0.75"
                    ariaLabel="rotating-lines-loading"
                />
            </div>
        </div>
    );
};
export default VideoContainer;
