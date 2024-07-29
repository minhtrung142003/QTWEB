import { useState } from 'react';
interface BottomMenuProps {
    handleScreen: (screen: string) => void;
}
const BottomMenu: React.FC<BottomMenuProps> = ({ handleScreen }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const handleClick = (index: number) => {
        setActiveIndex(index);
        if (index === 3) {
            handleScreen('rendering');
        }
        if (index === 0) {
            handleScreen('overview');
        }
    };

    const items = [
        'Overview',
        'Consultation',
        'Modeling',
        'Rendering',
        'Movie Concept',
        'Panorama',
    ];
    return (
        <div className="container flex mt-4 justify-center">
            <ul className="container w-fit flex rounded-[37px] bg-[#70462D]">
                {items.map((item, index) => (
                    <li
                        key={index}
                        className={`flex cursor-pointer items-center text-[14px] py-[14px] px-[25px] rounded-[37px]  ${
                            activeIndex === index
                                ? 'bg-white text-active-color font-bold'
                                : 'text-white'
                        }`}
                        onClick={() => handleClick(index)}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default BottomMenu;
