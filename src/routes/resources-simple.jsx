import React from 'react';

// Simple placeholder components
const ResourcesPage = () => (
  <div className="p-8">
    <h1 className="text-2xl font-bold mb-4">Resources</h1>
    <p>Welcome to the resources section.</p>
  </div>
);

const HomeworkPage = () => (
  <div className="p-8">
    <h1 className="text-2xl font-bold mb-4">Homework Resources</h1>
    <p>Homework help and resources.</p>
  </div>
);

const LegalPage = () => (
  <div className="p-8">
    <h1 className="text-2xl font-bold mb-4">Legal Resources</h1>
    <p>Legal assistance and resources.</p>
  </div>
);

// Simple resource routes
export const resourceRoutes = [
  { index: true, element: <ResourcesPage /> },
  { path: 'homework', element: <HomeworkPage /> },
  { path: 'homework/*', element: <HomeworkPage /> },
  { path: 'legal', element: <LegalPage /> },
  { path: 'legal/*', element: <LegalPage /> },
  {
    path: '*',
    element: (
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">Resource Not Found</h1>
        <p>The resource you're looking for doesn't exist.</p>
      </div>
    ),
  },
];

console.log('Simple resource routes loaded:', resourceRoutes);
