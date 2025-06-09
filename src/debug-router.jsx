import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

console.log('Debug: Starting app with router');

// Try importing the router
let router;
try {
  const routerModule = await import('./routes/index.jsx');
  router = routerModule.router;
  console.log('Debug: Router imported successfully:', router);
} catch (error) {
  console.error('Debug: Error importing router:', error);
}

const DebugApp = () => {
  if (!router) {
    return (
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <h1 style={{ color: 'red' }}>Router Import Failed</h1>
        <p>Check console for details</p>
      </div>
    );
  }

  return <RouterProvider router={router} />;
};

const root = document.getElementById('root');
console.log('Debug: Root element found:', !!root);

if (root) {
  console.log('Debug: Creating React root');
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <DebugApp />
    </React.StrictMode>
  );
  console.log('Debug: React app rendered');
}
