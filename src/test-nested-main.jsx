import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './test-nested-routes.jsx';

const root = document.getElementById('root');

if (root) {
  console.log("ROOT FOUND - RENDERING NESTED ROUTES APP");
  try {
    ReactDOM.createRoot(root).render(
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    );
    console.log("NESTED ROUTES APP RENDERED SUCCESSFULLY");
  } catch (error) {
    console.error("ERROR RENDERING NESTED ROUTES APP:", error);
    document.body.innerHTML = `
      <div style="padding: 20px; font-family: Arial, sans-serif;">
        <h1 style="color: red;">Error Rendering Nested Routes App</h1>
        <pre>${error?.message || 'Unknown error'}</pre>
        <pre>${error?.stack || 'No stack trace available'}</pre>
      </div>
    `;
  }
} else {
  console.error("ROOT ELEMENT NOT FOUND");
}
