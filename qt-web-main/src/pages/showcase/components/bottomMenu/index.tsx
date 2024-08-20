import { IoMdHome } from 'react-icons/io';
import { MdMailOutline } from 'react-icons/md';
export default function ShowcaseBottomMenu() {
    return (
        <>
            <div className="absolute w-full bottom-0 bg-opacity-70 bg-black rounded-b-2xl">
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
                            key={index}
                            className={`text-white w-full md:max-[883px]:text-[9px] uppercase text-xs border-r border-[#7f7f76]  ${
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
}
