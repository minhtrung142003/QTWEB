import LayoutRoutes from '@configs/LayoutRoutes';
import Home from '@pages/home';
import LayoutVer1 from '@pages/layout/layout-v1';
import LayoutVer2 from '@pages/layout/layout-v2';
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
