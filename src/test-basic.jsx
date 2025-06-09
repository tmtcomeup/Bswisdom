import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

// Simple component to test if rendering works
const TestApp = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: 'blue' }}>Test App</h1>
      <p>If you can see this, basic React rendering is working correctly.</p>
    </div>
  );
};

const root = document.getElementById('root');

if (root) {
  console.log("ROOT FOUND - RENDERING APP");
  try {
    ReactDOM.createRoot(root).render(
      <React.StrictMode>
        <TestApp />
      </React.StrictMode>
    );
    console.log("APP RENDERED SUCCESSFULLY");
  } catch (error) {
    console.error("ERROR RENDERING APP:", error);
    document.body.innerHTML = `
      <div style="padding: 20px; font-family: Arial, sans-serif;">
        <h1 style="color: red;">Error Rendering App</h1>
        <pre>${error?.message || 'Unknown error'}</pre>
        <pre>${error?.stack || 'No stack trace available'}</pre>
      </div>
    `;
  }
} else {
  console.error("ROOT ELEMENT NOT FOUND");
}
