import LayoutRoutes from '@configs/LayoutRoutes';
import Home from '@pages/home';
import LayoutVer1 from '@pages/layout/layout-v1';
import LayoutVer2 from '@pages/layout/layout-v2';
import LayoutVer3 from '@pages/layout/layout-v3';
import LoginRegister from '@pages/login';
import React, { Suspense, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

const RoutesContainer: React.FC = () => {
    const [active, setActive] = useState(0);

    return (
        <Suspense>
            <Routes>
                <Route
                    path="/"
                    element={
                        <LayoutVer1 active={active} setActive={setActive} />
                    }
                >
                    <Route path="/" element={<Home />} />
                </Route>
                <Route path="/login" element={<LayoutVer3 />}>
                    <Route path="/login" element={<LoginRegister />} />
                </Route>
                <Route
                    path="/*"
                    element={
                        <LayoutVer2 active={active} setActive={setActive} />
                    }
                >
                    {LayoutRoutes.map((route) => (
                        <Route key={route.path} {...route}></Route>
                    ))}
                </Route>
            </Routes>
        </Suspense>
    );
};

export default RoutesContainer;
