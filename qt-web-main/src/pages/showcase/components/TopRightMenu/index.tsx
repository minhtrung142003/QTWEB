import { useState } from 'react';

interface MenuProps {
    setVideo: Function;
}
const TopRightMenu: React.FC<MenuProps> = ({ setVideo }) => {
    const btnDemo: string[] = ['Demo 01', 'Demo 02', 'Demo 03'];
    const [activeIndex, setActiveIndex] = useState(0);
    function handleClick(index: number) {
        setActiveIndex(index);
        setVideo(index);
    }
    return (
        <div
            className="w-[35%] h-[57px] right-0 top-[-57px] rounded-tr-2xl flex items-center select-none justify-center absolute z-20 top-menu"
            style={{
                background: 'rgba(240, 240, 240, 0.35)',
                backdropFilter: 'blur(3px)',
            }}
        >
            <ul className="w-full flex md:max-lg:px-1 px-8 ">
                {btnDemo.map((item, index) => (
                    <li
                        key={index}
                        className="w-full px-2 box-border"
                        onClick={() => handleClick(index)}
                    >
                        <button
                            key={index}
                            className={`w-full justify-center md:max-lg:py-0 md:max-lg:px-2  py-2 rounded-tr-md rounded-bl-md leading-6 border rounded-tl-[20px] rounded-br-[20px] bg-[#e1e1e1] opacity-70 flex items-center ${
                                activeIndex === index
                                    ? 'background-white font-semibold text-active-color border-active-color shadow-demo-active'
                                    : ''
                            }`}
                        >
                            {item}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default TopRightMenu;
