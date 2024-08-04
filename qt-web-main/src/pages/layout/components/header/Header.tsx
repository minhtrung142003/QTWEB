import Logo from './Logo';
import MenuHome from './MenuHome';
import Search from './Search';
import Login from './Login';
import './menuhome.css';
import { Dispatch, SetStateAction } from 'react';

interface SidebarProps {
    type: string;
    active: number;
    setActive: Dispatch<SetStateAction<number>>;
}
const Header: React.FC<SidebarProps> = ({
    type = 'ver1',
    active,
    setActive,
}) => {
    const headerClass =
        type === 'ver2'
            ? ' flex justify-between relative z-10 mt-[18px]'
            : ' flex justify-between z-10 absolute top-[36px] header-home';
    return (
        <div className={headerClass}>
            <div className="section-left flex items-center md:max-laptop:text-sm">
                <Logo />
                <MenuHome type={type} active={active} setActive={setActive} />
            </div>
            {type === 'ver1' && (
                <div className="section-right flex items-center mr-7">
                    <Search />
                    <Login />
                </div>
            )}
        </div>
    );
};
export default Header;
