import { useEffect, useState } from 'react';
import { IoMdHome } from 'react-icons/io';
import { MdMailOutline } from 'react-icons/md';

interface BottomMenuProps {
    setVideo: (value: number) => void;
    index: number;
}
const ShowcaseBottomMenu: React.FC<BottomMenuProps> = ({ setVideo, index }) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    useEffect(() => {
        if (index < 7) setActiveIndex(null);
    }, [index]);
    const handleClick = (index: number) => {
        if (index !== activeIndex) {
            setActiveIndex(index);
            setVideo(index + 7);
        }
    };
    return (
        <>
            <div
                className="absolute bottom-5 bg-opacity-70 bg-black rounded-b-2xl transition-all duration-500 "
                style={{ width: 'calc(100% - 160px)' }}
            >
                <div className="w-full flex items-center justify-between md:max-xl: px-3 py-2 bottom-menu">
                    <div className="px-2">
                        <IoMdHome color="white" size={18} />
                    </div>
                    {[
                        'location',
                        'overview',
                        'phasing',
                        'point of interest',
                        'gallery',
                    ].map((item, index) => (
                        <button
                            onClick={() => handleClick(index)}
                            key={index}
                            className={`text-white w-full md:max-[883px]:text-[9px] uppercase select-none text-xs border-r border-[#7f7f76] ${
                                index === activeIndex ? 'text-[#22d3ee]' : ''
                            }  ${
                                index == 0 ? 'border-l border-[#7f7f76]' : ''
                            } `}
                        >
                            {item}
                        </button>
                    ))}
                    <div className="px-2 ">
                        <MdMailOutline color="white" size={18} />
                    </div>
                </div>
            </div>
        </>
    );
};
export default ShowcaseBottomMenu;
