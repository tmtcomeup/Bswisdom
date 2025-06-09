// Main React application bundle
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

// Get the root element and page type
const root = document.getElementById('bswisdom-root');
const page = root.dataset.page;

// Render the React application
ReactDOM.render(
  React.createElement(React.StrictMode, null,
    React.createElement(App, { page: page })
  ),
  root
);