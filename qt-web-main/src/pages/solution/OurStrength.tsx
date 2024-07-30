import ItemContainer from '@components/commons/container/Container';
import SideBar from '@components/commons/sidebar/sidebar';
import LeftShow from '@components/solution/ourstrength/LeftShow';
import RightShow from '@components/solution/ourstrength/RightShow';
import React from 'react';

const OurStrength: React.FC = () => {
    return (
        <div className="container flex flex-col w-screen p-[18px] gap-y-8 h-dvh relative">
            <SideBar type2={true} activeIndex={1} />
            <ItemContainer extraCss="pt-9 pl-10">
                <div className='w-1/2 h-full'>
                <LeftShow />
                </div>
                <div className='w-1/2 h-full'>
                <RightShow />
                </div>
            </ItemContainer>
        </div>
    );
};

export default OurStrength;
