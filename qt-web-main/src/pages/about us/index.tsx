import MenuAboutUs from "@components/aboutUs/MenuAboutUs";
import OurTeam from "@components/aboutUs/ourteam/OurTeam";
import OurVision from "@components/aboutUs/ourvision/OurVision";
import ItemContainer from "@components/commons/container/Container";
import SideBar from "@components/commons/sidebar/sidebar";
import { useState } from "react";

export default function AboutUs() {
  const [screen, setScreen] = useState('Our Visions');
  const handleScreen = (screen: string) => {
    setScreen(screen);
  }
  return (
    <div className="container w-screen h-dvh flex flex-col p-[18px] gap-y-2 ">
      <SideBar type2={true} activeIndex={0} />
      <ItemContainer extraCss="flex flex-col">
        {screen === 'Our Visions' && (
          <div className="container h-full w-full flex flex-col px-7 items-center py-2">
            <p className="font-bold text-2xl text-[#606060] text-start">
              And we have even <span className="text-[#945C3C] text-3xl">Bigger</span>  targets to pursue
            </p>
            <p className="font-medium text-[14px] text-[#606060] text-start py-2">
              And we have even <span className="text-[#945C3C]">Bigger</span>  targets to pursue
            </p>
            <OurVision/>
          </div>
        )}
         {screen === 'Our Contact' && (
          <div className="container h-full w-full flex flex-col px-7">
            <p className="font-bold text-3xl text-white text-start">
              contact
            </p>
          </div>
        ) }
         {screen === 'Our Team' && (
          <div className="container h-full w-full flex flex-col px-7">
                 <OurTeam/>
          </div>
        ) }
        <MenuAboutUs handleScreen={handleScreen} />
      </ItemContainer>
    </div>
  );
}
