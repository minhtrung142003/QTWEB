import React from 'react';
import { MainMarketplace } from './components/content';
import { IoSearchOutline } from 'react-icons/io5';
import './styles.scss';

const MarketPlace: React.FC = () => {
    return (
        <div className="marketplace">
            <div className="marketplace__login">
                <IoSearchOutline className="marketplace__login-icon" />
                <div className="marketplace__login-btn">
                    <p className="font-bold text-white">Login</p>
                </div>
            </div>
            <MainMarketplace />
        </div>
    );
};

export default MarketPlace;
// 