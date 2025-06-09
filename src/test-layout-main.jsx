import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './test-layout-router.jsx';

const root = document.getElementById('root');

if (root) {
  console.log("ROOT FOUND - RENDERING LAYOUT ROUTER APP");
  try {
    ReactDOM.createRoot(root).render(
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    );
    console.log("LAYOUT ROUTER APP RENDERED SUCCESSFULLY");
  } catch (error) {
    console.error("ERROR RENDERING LAYOUT ROUTER APP:", error);
    document.body.innerHTML = `
      <div style="padding: 20px; font-family: Arial, sans-serif;">
        <h1 style="color: red;">Error Rendering Layout Router App</h1>
        <pre>${error?.message || 'Unknown error'}</pre>
        <pre>${error?.stack || 'No stack trace available'}</pre>
      </div>
    `;
  }
} else {
  console.error("ROOT ELEMENT NOT FOUND");
}
