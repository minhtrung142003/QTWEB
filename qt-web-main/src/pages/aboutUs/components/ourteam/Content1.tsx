import React from 'react';
import { itemsOurTeam } from '../../DataAboutUs';
import './style.css';
const Content1: React.FC = () => {
    return (
        <div className="content1_team">
            {itemsOurTeam.map((item, index) => (
                <div
                    key={index}
                    className={`items_team
                     ${index !== 0 ? 'organe-shadow-extra' : 'organe-shadow'}
                      flex justify-center md:px-7 xl:px-8 md:py-6 xl:py-8 2xl:py-9 ${
                          index % 2 !== 0 ? 'xl:translate-y-[30px] ' : ''
                      }   w-full h-[281px] flex justify-center items-center`}
                >
                    <div
                        className={`item_bg`}
                        style={{ backgroundColor: item.backgroundColor }}
                    />
                    <div className="container_text_team">
                        <div
                            className={`div_text_team ${
                                index === 0 ? 'bg-[#945C3C]' : 'bg-[#F2F2F2]'
                            }`}
                        >
                            <h3
                                className={`h3_team ${
                                    index === 0 ? 'text-white' : 'text-black'
                                } `}
                            >
                                {item.role}
                            </h3>
                        </div>
                        <p className="description_team">{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Content1;
