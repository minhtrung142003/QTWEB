import MenuAboutUs from '@components/aboutUs/MenuAboutUs';
import OurContact from '@components/aboutUs/ourcontact/OurContact';
import OurTeam from '@components/aboutUs/ourteam/OurTeam';
import OurVision from '@components/aboutUs/ourvision/OurVision';
import ItemContainer from '@components/commons/container/Container';
import SideBar from '@components/commons/sidebar/sidebar';
import { useEffect, useState } from 'react';

export default function AboutUs({ page = 'Our Vision' }) {
    const [screen, setScreen] = useState(page);
    const handleScreen = (screen: string) => {
        setScreen(screen);
    };
    useEffect(() => {
        setScreen(page);
    }, [page]);
    return (
        <div className="container w-screen h-dvh flex flex-col p-5 gap-y-8 ">
            <SideBar type2={true} activeIndex={4} />
            <ItemContainer extraCss="flex flex-col">
                {screen === 'Our Vision' && (
                    <div className="container h-full w-full flex flex-col px-7 items-center py-2">
                        <p className="font-bold text-2xl text-[#606060] text-start">
                            And we have even{' '}
                            <span className="text-[#945C3C] text-3xl">
                                Bigger
                            </span>{' '}
                            targets to pursue
                        </p>
                        <p className="font-medium text-[14px] text-[#606060] text-start py-2">
                            And we have even{' '}
                            <span className="text-[#945C3C]">Bigger</span>{' '}
                            targets to pursue
                        </p>
                        <OurVision />
                    </div>
                )}
                {screen === 'Our Contact' && (
                    <div className="container h-full w-full flex flex-col px-7">
                        <OurContact />
                    </div>
                )}
                {screen === 'Our Team' && (
                    <div className="container h-full w-full flex flex-col px-7">
                        <OurTeam />
                    </div>
                )}
                <MenuAboutUs handleScreen={handleScreen} />
            </ItemContainer>
        </div>
    );
}
