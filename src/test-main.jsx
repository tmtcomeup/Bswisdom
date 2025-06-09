import React from 'react';
import ReactDOM from 'react-dom/client';

const TestApp = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: 'blue' }}>Test React App</h1>
      <p>If you can see this, React is working!</p>
      <p>Current time: {new Date().toLocaleTimeString()}</p>
    </div>
  );
};

const root = document.getElementById('root');
if (root) {
  ReactDOM.createRoot(root).render(<TestApp />);
}
