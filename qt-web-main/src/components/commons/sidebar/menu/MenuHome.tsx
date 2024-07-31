import { MenuBar } from '@assets/svg/MenuBar';
import './style.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

interface MenuHomeProps {
    type2: boolean;
    activeIndex: number; // Optional boolean prop
}
const MenuHome: React.FC<MenuHomeProps> = ({
    type2 = false,
    activeIndex = 0,
}) => {
    const items = [
        { name: 'Home', link: '/' },
        { name: 'Solution', link: '/solution_technology' },
        { name: 'Showcase', link: '/showcase' },
        { name: 'Marketplace', link: '/showcase' },
        { name: 'About Us', link: '/about_us' },
    ];
    const [active, setActive] = useState(activeIndex);
    function handleClick(index: number) {
        setActive(index);
    }
    return (
        <nav className="menu-home ml-[32px]">
            <ul className=" flex flex-row items-center lg:px-2 sm:px-1 sm: lg:py-[15px] sm:py-[10px]  rounded-[61px] relative menu-home-list ">
                {items.map((item, index) =>
                    item.name === 'Solution' ? (
                        <li
                            key={index}
                            className={`home-item group relative font-bold ${
                                index === active
                                    ? 'text-active-color active'
                                    : ''
                            } `}
                        >
                            {item.name}
                            <div className="pt-2 group group-hover:flex hidden left-[0px] absolute">
                                <ul
                                    className="flex flex-col p-[4px] rounded-[10px] "
                                    style={{
                                        background: 'rgb(236, 236, 236, 0.7)',
                                        boxShadow: '3px 3px #989a9a',
                                    }}
                                >
                                    <li
                                        className="home-item-dropdown"
                                        onClick={() => handleClick(index)}
                                    >
                                        <Link to="/solution_technology">
                                            Technology
                                        </Link>
                                    </li>
                                    <li
                                        className="home-item-dropdown"
                                        onClick={() => handleClick(index)}
                                    >
                                        <Link to="/solution_ourstrength">
                                            Our Strengths
                                        </Link>
                                    </li>
                                    <li
                                        className="home-item-dropdown"
                                        onClick={() => handleClick(index)}
                                    >
                                        <Link to="/solution_visual">
                                            Visualization
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    ) : item.name === 'About Us' ? (
                        <li
                            key={index}
                            className={`home-item group min-w-max relative ${
                                index === active
                                    ? 'text-active-color active'
                                    : ''
                            } `}
                        >
                            {item.name}
                            <div className="pt-2 group group-hover:flex hidden left-[0px] absolute">
                                <ul
                                    className="flex flex-col p-[4px] rounded-[10px]"
                                    style={{
                                        background: 'rgb(236, 236, 236, 0.7)',
                                        boxShadow: '3px 3px #989A9A',
                                    }}
                                >
                                    <li
                                        className="home-item-dropdown"
                                        onClick={() => handleClick(index)}
                                    >
                                        <Link to="/our-vision">Our Vision</Link>
                                    </li>
                                    <li
                                        className="home-item-dropdown"
                                        onClick={() => handleClick(index)}
                                    >
                                        {' '}
                                        <Link to="/our-team">Our Team</Link>
                                    </li>
                                    <li
                                        className="home-item-dropdown"
                                        onClick={() => handleClick(index)}
                                    >
                                        <Link to="/contact-us">Contact Us</Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    ) : (
                        <li
                            key={index}
                            className={`home-item ${
                                index === active
                                    ? 'text-active-color active'
                                    : ''
                            } `}
                            onClick={() => handleClick(index)}
                        >
                            <Link to={`${item.link}`}>{item.name}</Link>
                        </li>
                    )
                )}

                {type2 && (
                    <li className="home-item">
                        <MenuBar />
                    </li>
                )}
            </ul>
        </nav>
    );
};
export default MenuHome;
