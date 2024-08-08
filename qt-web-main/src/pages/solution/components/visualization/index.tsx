import ItemContainer from '@components/container/Container';
import CardItems from '@pages/solution/components/visualization/CardItems';
import BottomMenu from '@pages/solution/components/visualization/BottomMenu';
import { useState } from 'react';
import GalleryImages from '@pages/solution/components/visualization/GalleryImage';

export default function SolutionVisualization() {
    const [screen, setScreen] = useState('overview');
    const handleScreen = (screen: string) => {
        setScreen(screen);
    };
    return (
        <div className=" flex flex-col w-full h-full gap-y-8 flex-1">
            <ItemContainer extraCss="pt-9 pb-11 pl-10 pr-7 flex flex-col">
                {screen === 'overview' && (
                    <div className=" h-[90%] w-full flex flex-col ">
                        <p className="font-bold text-3xl text-white text-start">
                            We can offer you{' '}
                            <span className="text-active-color">more</span> than
                            that
                        </p>
                        <CardItems />{' '}
                    </div>
                )}
                {screen === 'rendering' && (
                    <div className=" w-full h-[90%] overflow-auto">
                        <GalleryImages />
                    </div>
                )}
                <BottomMenu handleScreen={handleScreen} />
            </ItemContainer>
        </div>
    );
}
