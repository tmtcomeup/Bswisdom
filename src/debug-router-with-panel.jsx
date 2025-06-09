import './index.css';
import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

/**
 * DEBUGGING MAIN ENTRY POINT
 * 
 * This file provides extensive debugging for React Router issues.
 * It displays detailed information about route matches, rendering,
 * and any errors that occur.
 */

// Debugging panel component
const DebugPanel = ({ logs, visible, toggleVisibility }) => {
  const logEndRef = useRef(null);

  useEffect(() => {
    if (logEndRef.current) {
      logEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [logs]);

  if (!visible) {
    return (
      <button 
        onClick={toggleVisibility}
        style={{
          position: 'fixed',
          bottom: '10px',
          right: '10px',
          zIndex: 9999,
          backgroundColor: '#0066cc',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          padding: '8px 12px',
          cursor: 'pointer'
        }}
      >
        Show Debug Panel
      </button>
    );
  }

  return (
    <div style={{
      position: 'fixed',
      bottom: '10px',
      right: '10px',
      width: '400px',
      maxHeight: '80vh',
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      color: 'white',
      border: '1px solid #444',
      borderRadius: '4px',
      padding: '10px',
      fontFamily: 'monospace',
      fontSize: '12px',
      zIndex: 9999,
      overflow: 'auto',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '10px'
      }}>
        <h3 style={{ margin: 0 }}>Router Debug Panel</h3>
        <button 
          onClick={toggleVisibility}
          style={{
            backgroundColor: '#444',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            padding: '2px 6px',
            cursor: 'pointer'
          }}
        >
          Hide
        </button>
      </div>
      
      <div style={{ overflow: 'auto', flexGrow: 1 }}>
        {logs.map((log, index) => (
          <div 
            key={index} 
            style={{
              margin: '4px 0',
              padding: '4px',
              borderLeft: `4px solid ${log.type === 'error' ? 'red' : log.type === 'warning' ? 'orange' : 'green'}`,
              backgroundColor: 'rgba(255, 255, 255, 0.1)'
            }}
          >
            <div style={{ color: '#aaa', fontSize: '10px' }}>{log.timestamp}</div>
            <div>{log.message}</div>
          </div>
        ))}
        <div ref={logEndRef} />
      </div>
    </div>
  );
};

// Logger class for the application
class AppLogger {
  constructor() {
    this.logs = [];
    this.listeners = [];
  }

  log(message, type = 'info') {
    const timestamp = new Date().toLocaleTimeString();
    const logEntry = { message, type, timestamp };
    
    this.logs.push(logEntry);
    console.log(`[${type.toUpperCase()}] ${message}`);
    
    this.notifyListeners();
    return logEntry;
  }

  error(message) {
    return this.log(message, 'error');
  }

  warn(message) {
    return this.log(message, 'warning');
  }

  info(message) {
    return this.log(message, 'info');
  }

  addListener(listener) {
    this.listeners.push(listener);
  }

  removeListener(listener) {
    this.listeners = this.listeners.filter(l => l !== listener);
  }

  notifyListeners() {
    this.listeners.forEach(listener => listener(this.logs));
  }

  getLogs() {
    return [...this.logs];
  }
}

const logger = new AppLogger();

// App component to render both the router and debug panel
const App = () => {
  const [logs, setLogs] = useState([]);
  const [debugVisible, setDebugVisible] = useState(true);

  useEffect(() => {
    const logListener = (newLogs) => {
      setLogs([...newLogs]);
    };
    
    logger.addListener(logListener);
    return () => {
      logger.removeListener(logListener);
    };
  }, []);

  useEffect(() => {
    // Monitor route changes
    const handleRouteChange = () => {
      logger.info(`Route changed to: ${window.location.pathname}`);
    };
    
    window.addEventListener('popstate', handleRouteChange);
    
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  return (
    <>
      <RouterContent logger={logger} />
      <DebugPanel 
        logs={logs} 
        visible={debugVisible} 
        toggleVisibility={() => setDebugVisible(!debugVisible)} 
      />
    </>
  );
};

// Router content component
const RouterContent = ({ logger }) => {
  useEffect(() => {
    logger.info('RouterContent mounted');
    
    // Try to load the router from different sources
    const loadRouter = async () => {
      try {
        logger.info('Attempting to load router from complete-fixed-routes.jsx');
        const { router } = await import('./routes/complete-fixed-routes.jsx');
        logger.info('Router loaded successfully');
        renderRouter(router);
      } catch (routerError) {
        logger.error(`Failed to load complete-fixed-routes: ${routerError.message}`);
        
        try {
          logger.info('Attempting to load router from fixed-resources.jsx');
          const { resourceRoutes } = await import('./routes/fixed-resources.jsx');
          
          const simpleRouter = createSimpleRouter(resourceRoutes);
          logger.info('Created simple router from fixed resources');
          renderRouter(simpleRouter);
        } catch (resourcesError) {
          logger.error(`Failed to load fixed resources: ${resourcesError.message}`);
          renderFallback();
        }
      }
    };
    
    loadRouter();
  }, [logger]);

  // Function to create a simple router from resources
  const createSimpleRouter = (resourceRoutes) => {
    logger.info('Creating simple router');
    
    // Define simple components
    const SimpleLayout = ({ children }) => (
      <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
        <nav style={{ marginBottom: '20px', padding: '10px', backgroundColor: '#f0f0f0' }}>
          <a href="/" style={{ marginRight: '10px' }}>Home</a>
          <a href="/about" style={{ marginRight: '10px' }}>About</a>
          <a href="/resources" style={{ marginRight: '10px' }}>Resources</a>
        </nav>
        <main>{children}</main>
        <footer style={{ marginTop: '30px', padding: '10px', backgroundColor: '#f0f0f0', textAlign: 'center' }}>
          &copy; 2025 Test Site
        </footer>
      </div>
    );
    
    const HomePage = () => <div><h1>Home</h1><p>Welcome to our test site</p></div>;
    const NotFound = () => <div><h1>404 - Not Found</h1><p>Page not found</p></div>;
    
    // Create router with index route and resources
    return createBrowserRouter([
      {
        path: '/',
        element: <SimpleLayout><HomePage /></SimpleLayout>,
      },
      {
        path: '/resources',
        children: resourceRoutes,
      },
      {
        path: '*',
        element: <SimpleLayout><NotFound /></SimpleLayout>,
      }
    ]);
  };

  // Function to render the router
  const renderRouter = (router) => {
    const root = document.getElementById('root');
    if (!root) {
      logger.error('Root element not found');
      return;
    }
    
    try {
      ReactDOM.createRoot(root).render(
        <React.StrictMode>
          <RouterProvider router={router} />
        </React.StrictMode>
      );
      logger.info('Router rendered successfully');
    } catch (error) {
      logger.error(`Failed to render router: ${error.message}`);
      renderFallback();
    }
  };

  // Function to render a fallback UI
  const renderFallback = () => {
    logger.warn('Rendering fallback UI');
    const root = document.getElementById('root');
    
    if (!root) {
      return;
    }
    
    const FallbackUI = () => (
      <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '40px auto', padding: '20px' }}>
        <h1 style={{ color: 'red' }}>Router Failed to Load</h1>
        <p>The application router couldn't be loaded. Here are some basic navigation links:</p>
        
        <div style={{ margin: '20px 0', padding: '10px', backgroundColor: '#f0f0f0', borderRadius: '4px' }}>
          <a href="/" style={{ marginRight: '10px' }}>Home</a>
          <a href="/resources" style={{ marginRight: '10px' }}>Resources</a>
          <a href="/resources/homework" style={{ marginRight: '10px' }}>Homework</a>
          <a href="/resources/legal" style={{ marginRight: '10px' }}>Legal</a>
          <a href="/route-tester.html" style={{ marginRight: '10px' }}>Route Tester</a>
        </div>
        
        <button 
          onClick={() => window.location.reload()}
          style={{ padding: '10px', backgroundColor: '#0066cc', color: 'white', border: 'none', borderRadius: '4px' }}
        >
          Reload Application
        </button>
      </div>
    );
    
    try {
      ReactDOM.createRoot(root).render(<FallbackUI />);
    } catch (error) {
      logger.error(`Failed to render fallback UI: ${error.message}`);
      root.innerHTML = `
        <div style="font-family: Arial, sans-serif; max-width: 800px; margin: 40px auto; padding: 20px;">
          <h1 style="color: red;">Critical Error</h1>
          <p>Could not render React components. Please check the console for details.</p>
        </div>
      `;
    }
  };

  return null;
};

// Start the application
const root = document.getElementById('root');

if (root) {
  try {
    logger.info('Starting debug application');
    ReactDOM.createRoot(root).render(<App />);
  } catch (error) {
    logger.error(`Critical error starting application: ${error.message}`);
    root.innerHTML = `
      <div style="padding: 20px; font-family: Arial, sans-serif;">
        <h1 style="color: red;">Critical Error</h1>
        <p>The application failed to initialize.</p>
        <pre>${error?.message || 'Unknown error'}</pre>
      </div>
    `;
  }
} else {
  logger.error('Root element not found');
}
