import HomeVideo from '@assets/home/home.mp4';
import { useEffect, useRef } from 'react';

export default function BackgroundVideo() {
    const videoHome = useRef<HTMLVideoElement>(null);
    useEffect(() => {
        if (videoHome.current != null) {
            videoHome.current.playbackRate = 0.75;
        }
    }, []);
    return (
        <video
            autoPlay
            muted
            loop
            ref={videoHome}
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
    );
}
