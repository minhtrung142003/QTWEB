import MenuAboutUs from '@pages/aboutUs/MenuAboutUs';

import ItemContainer from '@components/container/Container';
import { useEffect, useState } from 'react';
import OurContact from './components/ourcontact/Index';
import OurTeam from './components/ourteam/Index';
import OurVision from './components/ourvision/Index';

export default function AboutUs({ page = 'Our Vision' }) {
    const [screen, setScreen] = useState(page);
    const handleScreen = (screen: string) => {
        setScreen(screen);
    };
    useEffect(() => {
        setScreen(page);
        console.log(page);
    }, [page]);

  return (
    <div className=" w-full h-full flex flex-col ">
      <ItemContainer extraCss="flex flex-col">
        {screen === "Our Vision" && (
          <div className="h-[90%] w-full flex flex-col items-center overflow-y-auto overflow-x-hidden">
            <div className=" flex flex-col items-center xxxl:max-xxl:translate-y-4 translate-y-6 ">
              <p className="font-bold text-2xl xxl:text-3xl text-[#606060] text-start">
                And we have even{" "}
                <span className="text-[#945C3C] text-3xl">Bigger</span> targets
                to pursue
              </p>
              <p className="font-medium text-[14px] text-[#606060] text-start py-2">
                And we have even <span className="text-[#945C3C]">Bigger</span>{" "}
                targets to pursue
              </p>
            </div>
            <OurVision />
          </div>
        )}
        {screen === "Our Contact" && (
          <div className=" h-[90%] w-full flex flex-col px-7 ">
            <OurContact />
          </div>
        )}
        {screen === "Our Team" && (
          <div className=" h-[90%] w-full flex flex-col px-7">
            <OurTeam />
          </div>
        )}
        <MenuAboutUs handleScreen={handleScreen} page={page} />
      </ItemContainer>
    </div>
  );
}
