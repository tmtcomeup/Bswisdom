import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

// Simple layout component
const SimpleLayout = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <nav style={{ marginBottom: '20px', padding: '10px', backgroundColor: '#f0f0f0' }}>
        <a href="/" style={{ marginRight: '10px' }}>Home</a>
        <a href="/about" style={{ marginRight: '10px' }}>About</a>
        <a href="/resources" style={{ marginRight: '10px' }}>Resources</a>
      </nav>
      <div id="content">
        {/* This is where page content will go */}
        <h1>Simple Router Test</h1>
        <p>If you see this, the basic router is working!</p>
      </div>
    </div>
  );
};

// Create a simple router
const router = createBrowserRouter([
  {
    path: '/',
    element: <SimpleLayout />,
  },
  {
    path: '/about',
    element: (
      <div style={{ padding: '20px' }}>
        <h1>About Page</h1>
        <p>This is the about page</p>
      </div>
    ),
  },
  {
    path: '/resources',
    element: (
      <div style={{ padding: '20px' }}>
        <h1>Resources Page</h1>
        <p>This is the resources page</p>
      </div>
    ),
  },
  {
    path: '*',
    element: (
      <div style={{ padding: '20px' }}>
        <h1>404 - Page Not Found</h1>
        <p>The page you're looking for doesn't exist.</p>
      </div>
    ),
  },
]);

export { router };
