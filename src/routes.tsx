import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import ResourceRoutes from './pages/resources/routes';
import NotFound from './pages/not-found';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      {/* Resources section with nested routes */}
      <Route path="/resources/*" element={<ResourceRoutes />} />
      {/* 404 fallback */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
