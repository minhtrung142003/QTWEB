import { Outlet } from 'react-router-dom';
import Header from './components/header/Header';
import { Dispatch, SetStateAction } from 'react';

interface IILayoutVer1 {
    active: number;
    setActive: Dispatch<SetStateAction<number>>;
}
const LayoutVer1: React.FC<IILayoutVer1> = ({ active, setActive }) => {
    return (
        <div className="max-w-[1404px] h-screen mx-auto relative p-[18px]">
            <Header type="ver1" active={active} setActive={setActive} />
            <Outlet />
        </div>
    );
};

export default LayoutVer1;
