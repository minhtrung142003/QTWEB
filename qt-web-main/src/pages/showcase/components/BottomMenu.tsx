import { IoMdHome } from 'react-icons/io';
import { MdMailOutline } from 'react-icons/md';

export default function ShowcaseBottomMenu() {
    return (
        <>
            <div className="absolute w-full bottom-0 bg-opacity-70 bg-black rounded-b-2xl">
                <div className="w-full flex items-center justify-between md:max-xl: px-3 py-2">
                    <div className="lg:px-2 sm:max-lg:pr-[4px] border-r border-[#7f7f76]">
                        <IoMdHome color="white" size={18} />
                    </div>
                    {[
                        'location',
                        'overview',
                        'phasing',
                        'point of interest',
                        'gallery',
                    ].map((item, index, array) => (
                        <button
                            key={index}
                            className={`text-white md:max-[883px]:px-[5%] md:max-[883px]:text-[9px] px-[5%] uppercase text-xs ${
                                index !== array.length - 1
                                    ? 'border-r border-[#7f7f76]'
                                    : ''
                            } `}
                        >
                            {item}
                        </button>
                    ))}
                    <div className="lg:px-2 sm:max-lg:pl-[4px] border-l border-[#7f7f76]">
                        <MdMailOutline color="white" size={18} />
                    </div>
                </div>
            </div>
        </>
    );
}
