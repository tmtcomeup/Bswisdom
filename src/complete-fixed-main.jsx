import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

/**
 * COMPLETE FIXED MAIN ENTRY POINT
 * 
 * This file serves as the entry point for the application with comprehensive error handling
 * and debugging support. It will:
 * 1. Try to load the fixed routes
 * 2. Provide fallback rendering if routes fail
 * 3. Log detailed error information
 */

console.log('Starting application with completely fixed routing');

// Import the fixed router
import { router } from './routes/complete-fixed-routes.jsx';

// Error fallback component
const ErrorFallback = ({ error }) => (
  <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto', padding: '40px 20px' }}>
    <h1 style={{ color: 'red' }}>Application Error</h1>
    <p>There was a problem loading the application.</p>
    
    <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#f8f8f8', border: '1px solid #ddd', borderRadius: '4px' }}>
      <h2>Error Details:</h2>
      <pre style={{ whiteSpace: 'pre-wrap', overflow: 'auto', padding: '10px', background: '#eee' }}>
        {error?.message || 'Unknown error'}
      </pre>
    </div>
    
    <div style={{ marginTop: '30px' }}>
      <button 
        onClick={() => window.location.reload()} 
        style={{ padding: '10px 20px', background: '#0066cc', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
      >
        Reload Application
      </button>
      <button 
        onClick={() => window.location.href = '/'} 
        style={{ padding: '10px 20px', marginLeft: '10px', background: '#888', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
      >
        Go to Homepage
      </button>
    </div>
  </div>
);

// Simple confirmation component to show the app loaded
const AppLoaded = () => (
  <div style={{ position: 'fixed', bottom: '10px', right: '10px', background: '#dff0d8', color: '#3c763d', padding: '5px 10px', borderRadius: '4px', fontSize: '12px', opacity: '0.9' }}>
    App loaded successfully
  </div>
);

const root = document.getElementById('root');
console.log('Root element found:', !!root);

if (root) {
  try {
    console.log('Router configuration loaded');
    
    // Render with the router
    ReactDOM.createRoot(root).render(
      <React.StrictMode>
        <React.Suspense fallback={<div>Loading...</div>}>
          <RouterProvider router={router} />
          <AppLoaded />
        </React.Suspense>
      </React.StrictMode>
    );
    console.log('Application rendered successfully with fixed router');
  } catch (error) {
    console.error('Critical error rendering application:', error);
    
    // Render error fallback for critical errors
    ReactDOM.createRoot(root).render(
      <React.StrictMode>
        <ErrorFallback error={error} />
      </React.StrictMode>
    );
  }
}
