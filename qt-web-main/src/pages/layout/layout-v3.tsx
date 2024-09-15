import { Outlet } from 'react-router-dom';

const LayoutVer3: React.FC = () => {
    return (
        <div className="max-w-[1920px] h-dvh mx-auto">
            <Outlet />
        </div>
    );
};

export default LayoutVer3;
