import { GiParkBench } from 'react-icons/gi';
import { SiOpenlayers } from 'react-icons/si';
import { CiRuler } from 'react-icons/ci';
import { CiCamera } from 'react-icons/ci';
import { useState } from 'react';

export default function ShowcaseLeftMenu() {
    const [activeIcon, setActiveIcon] = useState(0);
    const icon = [GiParkBench, SiOpenlayers, CiRuler, CiCamera];
    return (
        <div
            className="absolute flex flex-col left-0 bg-opacity-70 p-2 bg-black rounded-r-2xl"
            style={{ top: 'calc(50% - 132px)' }}
        >
            {icon.map((Icon, index) => (
                <button
                    key={index}
                    onClick={() => setActiveIcon(index)}
                    className={` py-3 ${
                        index !== icon.length - 1 ? `border-b border-white` : ``
                    }`}
                >
                    <div
                        className={`px-1 py-1 rounded-full ${
                            index === activeIcon
                                ? `bg-white bg-opacity-20 `
                                : ``
                        }`}
                    >
                        <Icon
                            key={index}
                            size={20}
                            color={`${index === activeIcon ? `#22d3ee ` : ``}`}
                            className={`text-white ${
                                index === activeIcon ? ` ` : ``
                            }`}
                        />
                    </div>
                </button>
            ))}
        </div>
    );
}
