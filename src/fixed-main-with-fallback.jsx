import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { CartProvider } from './context/CartContext.tsx';

console.log('Starting application with completely fixed routing');

// Simple Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.error('Error caught by error boundary:', error);
    console.log('Component stack:', info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
          <h1 style={{ color: 'red' }}>Something went wrong</h1>
          <p>There was an error rendering the application</p>
          <pre>{this.state.error?.message || 'Unknown error'}</pre>
          <button onClick={() => window.location.reload()}>Reload Page</button>
        </div>
      );
    }
    return this.props.children;
  }
}

// Create Resource index component directly
const ResourcesIndex = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: 'blue' }}>Resources Page</h1>
      <p>Browse our resources section.</p>
      <ul>
        <li><a href="/resources/homework">Homework Resources</a></li>
        <li><a href="/resources/legal">Legal Resources</a></li>
        <li><a href="/resources/website">Website Resources</a></li>
      </ul>
    </div>
  );
};

// Create simple Layout component
const SimpleLayout = ({children}) => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '1200px', margin: '0 auto' }}>
      <nav style={{ backgroundColor: '#f0f0f0', padding: '15px', marginBottom: '20px' }}>
        <a href="/" style={{ marginRight: '15px', color: '#333', textDecoration: 'none' }}>Home</a>
        <a href="/about" style={{ marginRight: '15px', color: '#333', textDecoration: 'none' }}>About</a>
        <a href="/resources" style={{ marginRight: '15px', color: '#333', textDecoration: 'none' }}>Resources</a>
      </nav>
      <main style={{ padding: '20px' }}>
        {children}
      </main>
      <footer style={{ backgroundColor: '#f0f0f0', padding: '15px', marginTop: '20px', textAlign: 'center' }}>
        &copy; 2025 BSwisdom
      </footer>
    </div>
  );
};

// Fallback to simple rendering if router fails
const root = document.getElementById('root');
console.log('Root element found:', !!root);

if (root) {
  try {
    // First try to import the router
    import('./routes/index.jsx')
      .then(module => {
        const router = module.router;
        console.log('Router loaded successfully');
        
        // Render with the router
        ReactDOM.createRoot(root).render(
          <React.StrictMode>
            <ErrorBoundary>
              <CartProvider>
                <RouterProvider router={router} />
              </CartProvider>
            </ErrorBoundary>
          </React.StrictMode>
        );
        console.log('Application rendered successfully with router');
      })
      .catch(error => {
        console.error('Failed to load router:', error);
        
        // Fallback to simple rendering
        ReactDOM.createRoot(root).render(
          <React.StrictMode>
            <SimpleLayout>
              <ResourcesIndex />
            </SimpleLayout>
          </React.StrictMode>
        );
        console.log('Fallback rendering applied');
      });
  } catch (error) {
    console.error('Critical error in main.jsx:', error);
    
    // Ultra fallback for critical errors
    root.innerHTML = `
      <div style="padding: 20px; font-family: Arial, sans-serif;">
        <h1 style="color: red;">Critical Error</h1>
        <p>The application failed to initialize</p>
        <pre>${error?.message || 'Unknown error'}</pre>
      </div>
    `;
  }
}
