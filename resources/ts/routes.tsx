// ts/routes.tsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import Home from './pages/Home';
import About from './pages/About';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/index" element={<Index />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
        </Routes>
    );
};

export default AppRoutes;
