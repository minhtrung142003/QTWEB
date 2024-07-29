import ItemContainer from '@components/commons/container/Container';
import SideBar from '@components/commons/sidebar/sidebar';
import CardItems from '@components/solution/visualization/CardItems';
import BottomMenu from '@components/solution/visualization/BottomMenu';
import { useState } from 'react';
import GalleryImages from '@components/solution/visualization/GalleryImage';

export default function SolutionVisualization() {
    const [screen, setScreen] = useState('overview');
    const handleScreen = (screen: string) => {
        setScreen(screen);
    };
    return (
        <div className="container flex flex-col w-screen p-[18px] gap-y-8 h-dvh home-container">
            <SideBar type2={true} activeIndex={1} />
            <ItemContainer extraCss="pt-3 pb-8 flex flex-col ">
                {screen === 'overview' && (
                    <div className="container h-full w-full flex flex-col px-7">
                        <p className="font-bold text-3xl text-white text-start">
                            We can offer you{' '}
                            <span className="text-active-color">more</span> than
                            that
                        </p>
                        <CardItems />{' '}
                    </div>
                )}
                {screen === 'rendering' && (
                    <div className="container w-full h-full px-[22px] overflow-auto">
                        <GalleryImages />
                    </div>
                )}
                <BottomMenu handleScreen={handleScreen} />
            </ItemContainer>
        </div>
    );
}
