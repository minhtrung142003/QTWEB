import Gallery1 from '@assets/solution/visualization/gallery1.png';
import Gallery2 from '@assets/solution/visualization/gallery2.png';
import Gallery3 from '@assets/solution/visualization/gallery3.png';
import Gallery4 from '@assets/solution/visualization/gallery4.png';
import Gallery5 from '@assets/solution/visualization/gallery5.png';
import Gallery6 from '@assets/solution/visualization/gallery6.png';
import Gallery7 from '@assets/solution/visualization/gallery7.png';
import Gallery8 from '@assets/solution/visualization/gallery8.png';
import RightArrow from '@assets/svg/RightArrow';
function CardItems() {
    return (
        <div className="w-full h-full flex items-center overflow-auto">
            <div className="w-full h-full items-center justify-items-center grid grid-cols-5 pr-3 lg:max-xl:grid-cols-4 md:max-lg:grid-cols-3 max-md:grid-cols-2 max-[520px]:grid-cols-1 gap-[15px] ">
                <CardItem
                    title="Consultation"
                    image1={Gallery1}
                    image2={Gallery2}
                    image3={Gallery3}
                    extraCss={''}
                />
                <CardItem
                    title="Modeling"
                    image1={Gallery1}
                    image2={Gallery2}
                    image3={Gallery3}
                    extraCss={'xl:translate-y-16'}
                />
                <CardItem
                    title="Rendering"
                    image1={Gallery4}
                    image2={Gallery5}
                    image3={Gallery6}
                    extraCss={''}
                />
                <CardItem
                    title="Movie Concept"
                    image1={Gallery7}
                    image2={Gallery4}
                    image3={Gallery8}
                    extraCss={'xl:translate-y-16'}
                />
                <CardItem
                    title="Panorama"
                    image1={Gallery1}
                    image2={Gallery2}
                    image3={Gallery3}
                    extraCss={''}
                />
            </div>
        </div>
    );
}

interface CardItemProps {
    title: string;
    image1: string;
    image2: string;
    image3: string;
    extraCss: string;
}
const CardItem: React.FC<CardItemProps> = ({
    title,
    image1,
    image2,
    image3,
    extraCss,
}) => {
    const cardCss = 'w-full h-full group cursor-pointer ' + extraCss;
    return (
        <div className="w-full h-full max-h-[390px] flex items-center justify-center">
            <div className={cardCss}>
                <div className="items-center flex flex-col w-full h-[90%] bg-[#E1E1E1] group-hover:shadow-card-hover rounded-t-[10px] rounded-br-[10px] gap-4 px-3 transition-all duration-500">
                    <div className="row-span-1 text-center mt-5 leading-5 min-w-40 py-[6px] px-[29px] rounded-[36px] bg-button-bg font-bold border border-[#E1E1E1] group-hover:border-active-color select-none transition-all duration-500">
                        {title}
                    </div>
                    <div className="w-[100%] h-[170px] bg-[#F2F2F2] rounded-[8px] border border-[#E1E1E1] group-hover:border-active-color transition-all duration-500 "></div>
                    <div className=" flex h-[48px] select-none">
                        <img src={image1} />
                        <img src={image2} className="mx-[16px]" />
                        <img src={image3} />
                    </div>
                    <p className="text-[12px] mx-4 select-none">
                        We offer customized UI based on your needs and
                        requirements
                    </p>
                </div>
                <div className="items-end relative flex w-full h-[10%] ">
                    <div
                        className="relative overflow-hidden xxxl:top-[-2px] top-[-1px] w-[35%] h-full rounded-bl-[10px]"
                        style={{
                            clipPath: 'polygon(95% 0%, 65% 100%, 0 100%, 0 0%)',
                        }}
                    >
                        <div
                            className="absolute w-full h-full group-hover:bg-[rgba(249,115,22,0.4)] transition-all duration-500 "
                            style={{
                                clipPath:
                                    'polygon(95% 1px, 65% 100%, 0 100%, 0 1px)',
                            }}
                        ></div>
                        <div
                            className="absolute w-full bottom-[3px] top-0 right-[2px] bg-[#E1E1E1] rounded-bl-[10px]  "
                            style={{
                                clipPath:
                                    'polygon(93% 0%, 65% 100%, 0 100%, 0 0%)',
                            }}
                        ></div>
                    </div>
                    <button className="absolute right-0 flex font-bold justify-center items-center w-[65%] h-[70%] rounded-[36px] bg-button-bg group-hover:shadow-active-btn group-hover:bg-active-color -translate-y-1 group-hover:text-white transition-all duration-500">
                        <span className="mr-1 select-none">Gallery</span>
                        <RightArrow />
                    </button>
                </div>
            </div>
        </div>
    );
};
export default CardItems;
