import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { ContactPage } from './pages/ContactPage';
import { TechnologiesPage } from './pages/TechnologiesPage';


function App() {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<HomePage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="services" element={<ServicesPage />} />
                <Route path="technologies" element={<TechnologiesPage />} />
                <Route path="portfolio" element={<PortfolioPage />} />
                <Route path="contact" element={<ContactPage />} />
            </Route>
        </Routes>
    );
}

export default App;
