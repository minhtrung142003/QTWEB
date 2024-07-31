import House7 from '@assets/solution/visualization/house7.png';
export default function ShowcaseRightMenu() {
    return (
        <>
            <div className="absolute mr-3 w-[11rem] h-[75%] flex flex-col right-0 top-[13%] bg-opacity-50 p-2 bg-black rounded-2xl">
                <div className="flex justify-center ">
                    <button className="uppercase px-1 rounded-lg text-white bg-black bg-opacity-80">
                        Custom
                    </button>
                    <button className="uppercase p-1 rounded-lg text-white bg-[#22d3ee]">
                        Default
                    </button>
                </div>
                <div className="max-h-[90%] mt-2 w-full h-full rounded-2xl grow-1 overflow-auto  showcase-menu-right">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => (
                        <div className="w-full h-[20%] rounded-2xl mb-2">
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
}
