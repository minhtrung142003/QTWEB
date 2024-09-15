import House7 from '@assets/rendering_2.png';
import { useEffect, useState } from 'react';

interface RightMenuProps {
    index: number;
}
const ShowcaseRightMenu: React.FC<RightMenuProps> = ({ index }) => {
    const [showMenu, setShowMenu] = useState(false);
    useEffect(() => {
        if (index === 6) setShowMenu(true);
        else setShowMenu(false);
    }, [index]);
    return (
        <>
            <div
                className={`absolute mr-3 w-[11rem] h-[75%] flex flex-col transition-all duration-300 right-20 bg-opacity-50 p-2 bg-black rounded-2xl ${
                    showMenu
                        ? 'opacity-100 translate-x-0'
                        : 'opacity-0 translate-x-10'
                }`}
                style={{ top: 'calc(12.5% - 18px)' }}
            >
                <div className="flex gap-[5px] justify-center ">
                    <button className="uppercase p-1 rounded-lg text-white bg-black bg-opacity-80">
                        Custom
                    </button>
                    <button className="uppercase p-1 rounded-lg text-white bg-[#22d3ee]">
                        Default
                    </button>
                </div>
                <div className="max-h-[90%]  bg-opacity-50 bg-transparent mt-2 w-full h-full rounded-2xl grow-1 overflow-auto  showcase-menu-right">
                    {Array.from({ length: 9 }).map((_, index) => (
                        <div
                            key={index}
                            className="w-full h-[100px] rounded-2xl mb-2 cursor-pointer "
                        >
                            <img
                                src={House7}
                                className="w-full h-full object-cover rounded-2xl"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
export default ShowcaseRightMenu;
