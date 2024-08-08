import React from 'react';
import Content1 from './Content1';
import Content2 from './Content2';
const OurTeam: React.FC = () => {
    return (
        <div className="w-full h-full flex flex-col items-center">
            <Content1 />
            <Content2 />
        </div>
    );
};

export default OurTeam;
