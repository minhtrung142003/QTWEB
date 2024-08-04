import { GiParkBench } from 'react-icons/gi';
import { SiOpenlayers } from 'react-icons/si';
import { CiRuler } from 'react-icons/ci';
import { CiCamera } from 'react-icons/ci';
import { useState } from 'react';

export default function ShowcaseLeftMenu() {
    const [activeIcon, setActiveIcon] = useState(0);
    const icon = [GiParkBench, SiOpenlayers, CiRuler, CiCamera];
    return (
        <div className="absolute flex flex-col left-0 top-[36%] bg-opacity-70 p-2 bg-black rounded-r-2xl">
            {icon.map((Icon, index) => (
                <button
                    key={index}
                    onClick={() => setActiveIcon(index)}
                    className={`px-1 py-4 ${
                        index !== icon.length - 1 ? `border-b border-white` : ``
                    }`}
                >
                    <Icon
                        key={index}
                        size={20}
                        className={`text-white ${
                            index === activeIcon
                                ? `bg-[#22d3ee] bg-opacity-35 shadow-active-icon`
                                : ``
                        }`}
                    />
                </button>
            ))}
        </div>
    );
}
