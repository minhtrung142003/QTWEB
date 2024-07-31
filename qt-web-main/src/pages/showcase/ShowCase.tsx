import SideBar from '@components/commons/sidebar/sidebar';
import MainShowcase from '@components/showcase/MainShowcase';
import { ContainerShowCase } from '@constants/index';
import React from 'react';

const ShowCase: React.FC = () => {
    return (
        // <div className="container w-screen h-screen flex flex-col">
        //   <SideBar type2={true} activeIndex={2} />
        //   <div className="container w-screen h-dvh p-5 relative">
        //     <ContainerShowCase />
        //     <Container/>
        //   </div>
        // </div>
        <div className="container flex flex-col w-screen p-5 gap-y-8 h-dvh ">
            <SideBar type2={true} activeIndex={2} />
            <MainShowcase />
        </div>
    );
};

export default ShowCase;
