import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/index-simple.jsx';
import { CartProvider } from './context/CartContext.tsx';

const root = document.getElementById('root');

if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </React.StrictMode>
  );
}
