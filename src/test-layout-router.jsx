import React from 'react';
import { createBrowserRouter, Outlet, Link } from 'react-router-dom';

// Simple Layout component
const SimpleLayout = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <nav style={{ backgroundColor: '#f0f0f0', padding: '15px', marginBottom: '20px' }}>
        <Link to="/" style={{ marginRight: '15px', color: '#333', textDecoration: 'none' }}>
          Home
        </Link>
        <Link to="/about" style={{ marginRight: '15px', color: '#333', textDecoration: 'none' }}>
          About
        </Link>
        <Link to="/resources" style={{ marginRight: '15px', color: '#333', textDecoration: 'none' }}>
          Resources
        </Link>
      </nav>
      <main style={{ padding: '20px' }}>
        <Outlet />
      </main>
      <footer style={{ backgroundColor: '#f0f0f0', padding: '15px', marginTop: '20px', textAlign: 'center' }}>
        &copy; 2025 BSwisdom
      </footer>
    </div>
  );
};

// Page components
const HomePage = () => (
  <div>
    <h1 style={{ color: 'blue' }}>Home Page</h1>
    <p>Welcome to our site!</p>
  </div>
);

const AboutPage = () => (
  <div>
    <h1 style={{ color: 'green' }}>About Page</h1>
    <p>Learn about our company and mission.</p>
  </div>
);

const ResourcesPage = () => (
  <div>
    <h1 style={{ color: 'purple' }}>Resources</h1>
    <p>Browse our resources section.</p>
  </div>
);

const NotFoundPage = () => (
  <div>
    <h1 style={{ color: 'red' }}>404 - Not Found</h1>
    <p>The page you're looking for doesn't exist.</p>
  </div>
);

// Create router with layout
export const router = createBrowserRouter([
  {
    element: <SimpleLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/about',
        element: <AboutPage />,
      },
      {
        path: '/resources',
        element: <ResourcesPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);
