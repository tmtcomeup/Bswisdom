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
import { resourceRoutes } from './fixed-resources.jsx';

console.log('Loading fixed routes file');

const mainRoutes = [
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/services', element: <Services /> },
  { path: '/contact', element: <Contact /> },
  { path: '/blog', element: <Blog /> },
  { path: '/cart', element: <Cart /> },
  { path: '/admin', element: <Admin /> },
];

// Create router with the fixed resources
const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <div>Error loading route!</div>,
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

console.log('Fixed router created');

export { router };
