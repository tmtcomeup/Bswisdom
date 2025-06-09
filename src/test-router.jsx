import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

// Simple components for testing
const HomeComponent = () => (
  <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
    <h1 style={{ color: 'blue' }}>Home Page</h1>
    <p>This is the home page.</p>
  </div>
);

const AboutComponent = () => (
  <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
    <h1 style={{ color: 'green' }}>About Page</h1>
    <p>This is the about page.</p>
  </div>
);

const ResourcesComponent = () => (
  <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
    <h1 style={{ color: 'purple' }}>Resources</h1>
    <p>This is the resources page.</p>
  </div>
);

const NotFoundComponent = () => (
  <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
    <h1 style={{ color: 'red' }}>404 - Not Found</h1>
    <p>The page you're looking for doesn't exist.</p>
  </div>
);

// Create a simple router
export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeComponent />,
  },
  {
    path: '/about',
    element: <AboutComponent />,
  },
  {
    path: '/resources',
    element: <ResourcesComponent />,
  },
  {
    path: '*',
    element: <NotFoundComponent />,
  },
]);
