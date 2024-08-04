import LayoutRoutes from '@configs/LayoutRoutes';
import Home from '@pages/home';
import LayoutVer1 from '@pages/layout/layout-v1';
import LayoutVer2 from '@pages/layout/layout-v2';
import React, { Suspense, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

const RoutesContainer: React.FC = () => {
    const initialActiveIndex =
        Number(sessionStorage.getItem('activeIndex')) || 0;
    const [active, setActive] = useState(initialActiveIndex);
    useEffect(() => {
        sessionStorage.setItem('activeIndex', active.toString());
    }, [active]);
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
