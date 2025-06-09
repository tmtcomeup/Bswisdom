import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ResourcesPage from './index';
import NotFound from './not-found';

const ResourceRoutes: React.FC = () => {
  return (
    <Routes>
      <Route index element={<ResourcesPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default ResourceRoutes;
