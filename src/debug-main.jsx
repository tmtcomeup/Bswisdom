import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

console.log('Debug: Starting app initialization');

// Simple test component
const DebugApp = () => {
  console.log('Debug: Rendering DebugApp component');
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: 'red' }}>Debug Mode - React is Working!</h1>
      <p>If you see this, React is successfully rendering.</p>
      <p>Current time: {new Date().toLocaleTimeString()}</p>
    </div>
  );
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
} else {
  console.error('Debug: Root element not found!');
}
