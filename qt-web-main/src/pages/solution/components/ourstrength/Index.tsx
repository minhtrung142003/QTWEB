import ItemContainer from '@components/container/Container';
import LeftShow from '@pages/solution/components/ourstrength/LeftShow';
import React from 'react';
import RightShow from './RightShow';

const OurStrength: React.FC = () => {
    return (
        <div className="flex flex-col w-full gap-y-8 h-full relative">
            <ItemContainer extraCss="pt-9 pb-[13px] pl-10 flex md:max-lg:flex-col-reverse gap-[42px]">
                <div className="md:w-[100%] lg:w-[58%]  md:h-[40%] lg:h-full">
                    <LeftShow />
                </div>
                <div className="md:w-[100%] lg:w-[42%] md:h-[60%] lg:h-full relative">
                    <RightShow />
                </div>
            </ItemContainer>
        </div>
    );
};

export default OurStrength;
