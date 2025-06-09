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
        <Link to="/resources/homework" style={{ marginRight: '15px', color: '#333', textDecoration: 'none' }}>
          Homework
        </Link>
        <Link to="/resources/legal" style={{ marginRight: '15px', color: '#333', textDecoration: 'none' }}>
          Legal
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

// Resources components
const ResourcesPage = () => (
  <div>
    <h1 style={{ color: 'purple' }}>Resources</h1>
    <p>Browse our resources section.</p>
    <div style={{ marginTop: '20px' }}>
      <h2>Resource Categories:</h2>
      <ul>
        <li><Link to="/resources/homework">Homework Resources</Link></li>
        <li><Link to="/resources/legal">Legal Resources</Link></li>
      </ul>
    </div>
  </div>
);

const HomeworkResourcesPage = () => (
  <div>
    <h1 style={{ color: 'orange' }}>Homework Resources</h1>
    <p>Find help with your assignments and studies.</p>
    <div style={{ marginTop: '20px' }}>
      <ul>
        <li><Link to="/resources/homework/math-sciences">Math & Sciences</Link></li>
        <li><Link to="/resources/homework/literature-reviews">Literature Reviews</Link></li>
        <li><Link to="/resources/homework/guides/exam-strategies">Exam Strategies Guide</Link></li>
      </ul>
    </div>
  </div>
);

const MathSciencesPage = () => (
  <div>
    <h1 style={{ color: 'teal' }}>Math & Sciences</h1>
    <p>Mathematics and science homework resources.</p>
  </div>
);

const ExamStrategiesPage = () => (
  <div>
    <h1 style={{ color: 'crimson' }}>Exam Strategies Guide</h1>
    <p>Tips and strategies for exam preparation and success.</p>
  </div>
);

const LegalResourcesPage = () => (
  <div>
    <h1 style={{ color: 'navy' }}>Legal Resources</h1>
    <p>Legal research and document assistance.</p>
  </div>
);

const NotFoundPage = () => (
  <div>
    <h1 style={{ color: 'red' }}>404 - Not Found</h1>
    <p>The page you're looking for doesn't exist.</p>
  </div>
);

// Create router with nested routes
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
        children: [
          { index: true, element: <ResourcesPage /> },
          { 
            path: 'homework',
            children: [
              { index: true, element: <HomeworkResourcesPage /> },
              { path: 'math-sciences', element: <MathSciencesPage /> },
              { 
                path: 'guides/exam-strategies', 
                element: <ExamStrategiesPage /> 
              },
            ] 
          },
          { path: 'legal', element: <LegalResourcesPage /> },
        ],
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);
