import { Dispatch, SetStateAction } from 'react';
import Header from './components/header/Header';
import { Outlet } from 'react-router-dom';

interface IILayoutVer2 {
    active: number;
    setActive: Dispatch<SetStateAction<number>>;
}
const LayoutVer2: React.FC<IILayoutVer2> = ({ active, setActive }) => {
    return (
        <div className="max-w-[1920px] mx-auto justify-center flex flex-col w-screen h-dvh gap-y-8 relative p-[18px]">
            <Header type="ver2" active={active} setActive={setActive} />
            <div style={{ height: 'calc(100vh - 128px)' }}>
                <Outlet />
            </div>
        </div>
    );
};

export default LayoutVer2;
