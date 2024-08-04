import React from 'react';
import MainShowcase from './components/MainShowcase';

const ShowCase: React.FC = () => {
    return (
        <div className="container md:max-lg:mt-8 flex flex-col w-full h-dvh ">
            <MainShowcase />
        </div>
    );
};

export default ShowCase;
