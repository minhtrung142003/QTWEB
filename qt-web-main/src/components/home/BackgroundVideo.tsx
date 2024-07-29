import HomeVideo from "@assets/home/home.mp4";

export default function BackgroundVideo() {
    return (
        <video
            autoPlay
            muted
            loop
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
