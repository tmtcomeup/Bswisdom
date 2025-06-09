import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout.jsx';
import Home from '../pages/Home.jsx';
import About from '../pages/About';
import Services from '../pages/Services';
import Contact from '../pages/Contact';
import Blog from '../pages/Blog';
import Cart from '../pages/Cart';
import Admin from '../pages/Admin';
import NotFound from '../pages/not-found';
import { resourceRoutes } from './fixed-resources.jsx'; // Using fixed resources

console.log('Loading main routes');

// Custom error component with debugging information
const RouteError = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: 'red' }}>Route Error</h1>
      <p>There was a problem loading this route.</p>
      <p>Please check the browser console for more details.</p>
      <button onClick={() => window.location.href = '/'}>
        Return to Home Page
      </button>
    </div>
  );
};

// Main routes configuration
const mainRoutes = [
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/services', element: <Services /> },
  { path: '/contact', element: <Contact /> },
  { path: '/blog', element: <Blog /> },
  { path: '/cart', element: <Cart /> },
  { path: '/admin', element: <Admin /> },
];

console.log('Resource routes:', resourceRoutes);

// Router initialization
const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <RouteError />,
    children: [
      ...mainRoutes,
      {
        path: '/resources',
        children: resourceRoutes,
      },
      { path: '*', element: <NotFound /> }
    ],
  },
]);

console.log('Router configuration complete');

export { router };