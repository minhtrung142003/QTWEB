import ItemContainer from '@components/commons/container/Container';
import SideBar from '@components/commons/sidebar/sidebar';
import LeftSide from '@components/solution/technology/LeftSide';
import RightSide from '@components/solution/technology/RightSide';
import React from 'react';

const Solution: React.FC = () => {
    return (
        <div className="container flex flex-col w-screen p-[18px] gap-y-8 h-dvh relative">
            <SideBar type2={true} activeIndex={1} />
            <ItemContainer extraCss="pt-9 pl-10">
                <LeftSide />
                <RightSide />
            </ItemContainer>
        </div>
    );
};

export default Solution;
