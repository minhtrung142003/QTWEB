import './sidebar.css';
import Logo from './Logo';
import MenuHome from './menu/MenuHome';
import Search from './Search';
import Login from './Login';

interface SidebarProps {
    type2: boolean;
    activeIndex: number;
}
const SideBar: React.FC<SidebarProps> = ({ type2 = false, activeIndex }) => {
    if (type2)
        return (
            <div className="container flex justify-between relative z-10 mt-5">
                <div className="section-left flex items-center">
                    <Logo />
                    <MenuHome type2={type2} activeIndex={activeIndex} />
                </div>
            </div>
        );
    return (
        <div
            className="container flex justify-between absolute top-[34px]"
            style={{ width: 'calc(100% - 42px)' }}
        >
            <div className="section-left flex items-center">
                <Logo />
                <MenuHome type2={type2} activeIndex={0} />
            </div>
            <div className="section-right flex items-center mr-7">
                <Search />
                <Login />
            </div>
        </div>
    );
};
export default SideBar;
