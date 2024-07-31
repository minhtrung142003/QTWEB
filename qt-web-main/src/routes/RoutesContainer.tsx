
import LayoutRoutes from '@configs/LayoutRoutes';
import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const Main: React.FC = () => {
    return (
        <Suspense>
            <Routes>
                <Route path="/*">
                    {LayoutRoutes.map((route) => (
                       <Route key={route.path} {...route}></Route>
                    ))}
                </Route>
            </Routes>
        </Suspense>
    );
};

export default Main;
