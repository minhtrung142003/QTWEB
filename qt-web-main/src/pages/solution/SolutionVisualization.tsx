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
        <div className="container flex flex-col w-full gap-y-8 flex-1 h-screen home-container">
            <ItemContainer extraCss="pt-2 pb-11 px-7 flex flex-col">
                {screen === 'overview' && (
                    <div className="container h-full w-full flex flex-col ">
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
