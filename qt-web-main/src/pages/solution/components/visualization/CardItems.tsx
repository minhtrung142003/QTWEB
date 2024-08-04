import Gallery1 from '@assets/solution/visualization/gallery1.png';
import Gallery2 from '@assets/solution/visualization/gallery2.png';
import Gallery3 from '@assets/solution/visualization/gallery3.png';
import Gallery4 from '@assets/solution/visualization/gallery4.png';
import Gallery5 from '@assets/solution/visualization/gallery5.png';
import Gallery6 from '@assets/solution/visualization/gallery6.png';
import Gallery7 from '@assets/solution/visualization/gallery7.png';
import Gallery8 from '@assets/solution/visualization/gallery8.png';
import RightArrow from '@assets/svg/RightArrow';
import { VisualizationCardBackground } from '@assets/svg/VisualizationCardBackground';

function CardItems() {
    return (
        <div className="container m-auto card-container ">
            <div className="container grid grid-cols-5 xl:max-xxxl:grid-cols-4 md:max-[912px]:grid-cols-2 min-[912px]:max-xl:grid-cols-3 justify-items-center md:max-xxxl:overflow-y-auto gap-[20px] md:max-xxxl:max-h-[390px] ">
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
                    extraCss={'2xl:mt-16'}
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
                    extraCss={'2xl:mt-16'}
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
    const cardCss =
        'container w-[251px] h-[390px] relative group cursor-pointer ' +
        extraCss;
    return (
        <div className={cardCss}>
            <VisualizationCardBackground width={'100%'} height={390} />
            <div className="container items-center flex flex-col absolute w-full h-full ">
                <div className="text-center leading-5 min-w-40 py-[6px] px-[29px] rounded-[36px] mt-[17px] bg-button-bg font-bold group-hover:outline-1 group-hover:outline-active-color group-hover:outline select-none">
                    {title}
                </div>
                <div className="w-[228px] h-[170px] bg-[#F2F2F2] rounded-[8px] mt-[16px] group-hover:outline-1 group-hover:outline-active-color group-hover:outline "></div>
                <div className="mt-[16px] flex h-[48px] select-none">
                    <img src={image1} />
                    <img src={image2} className="mx-[16px]" />
                    <img src={image3} />
                </div>
                <p className="text-[12px] mt-3.5 mx-7 select-none">
                    We offer customized UI based on your needs and requirements
                </p>
                <button className="flex font-bold justify-center items-center px-2.5 py-1.5 w-[159px] h-[31px] rounded-[36px] absolute bottom-0 right-0 bg-button-bg group-hover:shadow-active-btn group-hover:bg-active-color group-hover:text-white  transition-all">
                    <span className="mr-1 select-none">Gallery</span>
                    <RightArrow />
                </button>
            </div>
        </div>
    );
};
export default CardItems;
