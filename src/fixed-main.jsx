import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { CartProvider } from './context/CartContext.tsx';

// Load the fixed router
console.log('Loading fixed version of the app');
let router;

try {
  const routerModule = await import('./routes/fixed-index.jsx');
  router = routerModule.router;
  console.log('Router imported successfully:', router);
} catch (error) {
  console.error('Error importing router:', error);
  document.body.innerHTML = `
    <div style="padding: 20px; font-family: Arial, sans-serif;">
      <h1 style="color: red;">Error Loading Router</h1>
      <pre>${error?.message || 'Unknown error'}</pre>
    </div>
  `;
}

const root = document.getElementById('root');

if (root && router) {
  console.log('Rendering application with fixed router');
  try {
    ReactDOM.createRoot(root).render(
      <React.StrictMode>
        <CartProvider>
          <RouterProvider router={router} />
        </CartProvider>
      </React.StrictMode>
    );
    console.log('Application rendered successfully');
  } catch (error) {
    console.error('Error rendering application:', error);
    document.body.innerHTML = `
      <div style="padding: 20px; font-family: Arial, sans-serif;">
        <h1 style="color: red;">Error Rendering Application</h1>
        <pre>${error?.message || 'Unknown error'}</pre>
        <pre>${error?.stack || 'No stack trace available'}</pre>
      </div>
    `;
  }
} else {
  console.error('Root element or router not found');
}
