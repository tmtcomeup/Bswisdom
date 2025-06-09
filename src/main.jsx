import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/index.jsx';
import { CartProvider } from './context/CartContext.tsx';

console.log('Starting application initialization');

const root = document.getElementById('root');
console.log('Root element found:', !!root);

if (root) {
  console.log('Router configuration:', router);
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
    // Display fallback UI when rendering fails
    root.innerHTML = `
      <div style="padding: 20px; font-family: Arial, sans-serif;">
        <h1 style="color: red;">Error Loading Application</h1>
        <p>There was a problem rendering the application.</p>
        <pre>${error?.message || 'Unknown error'}</pre>
      </div>
    `;
  }
}