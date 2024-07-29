export default function Slogan() {
    return (
        <div
            className="absolute z-0 bottom-[21px] left-[21px] ml-[37px] mb-[32px] p-[24px] rounded-[15px]"
            style={{
                background:
                    'linear-gradient(126.92deg,rgba(220, 220, 220, 0.5) 13.81%,rgba(255, 255, 255, 0.5) 67.01%)',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                backdropFilter: 'blur(3px)',
            }}
        >
            <p
                className="font-semibold text-white text-[20px] mb-[12px]"
                style={{ textShadow: '1px 1px 3px rgba(0, 0, 0, 0.55)' }}
            >
                Together, we bring your buildings to life.
            </p>
            <p className="font-normal  text-[12px] text-left">
                We offer customized UI based on your needs and requirements
            </p>
            <p className="font-normal text-[12px] text-left">
                We offer customized UI based on your needs and requirements
            </p>
        </div>
    );
}
