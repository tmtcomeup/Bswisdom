import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import NotFound from './pages/not-found';
import { CartProvider } from './context/CartContext';

// Import main resources page
import ResourcesPage from './pages/resources/index';

// Import website resources
import WebsitePage from './pages/resources/website/index';
import WebDesign from './pages/resources/website/web-design';
import Development from './pages/resources/website/development';
import Ecommerce from './pages/resources/website/ecommerce';
import Maintenance from './pages/resources/website/maintenance';

// Simple page components
const About = () => (
  <div className="max-w-7xl mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold mb-6">About BSwisdom</h1>
    <p className="mb-4">At BSwisdom, we've revolutionized professional services by combining AI systems, expert oversight, and our proprietary technology.</p>
  </div>
);

const Services = () => (
  <div className="max-w-7xl mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold mb-6">Our Services</h1>
    <p className="mb-4">We offer a wide range of professional services to help you succeed.</p>
  </div>
);

const Contact = () => (
  <div className="max-w-7xl mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
    <p className="mb-4">Get in touch with our team for more information.</p>
  </div>
);

const Blog = () => (
  <div className="max-w-7xl mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold mb-6">Blog</h1>
    <p className="mb-4">Read our latest articles and insights.</p>
  </div>
);

const Cart = () => (
  <div className="max-w-7xl mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
    <p className="mb-4">Your cart is currently empty.</p>
  </div>
);

const Charity = () => (
  <div className="max-w-7xl mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold mb-6">No One Left Behind Charity</h1>
    <p className="mb-4">Help us empower those in need with access to professional services.</p>
  </div>
);

const Terms = () => (
  <div className="max-w-7xl mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold mb-6">Terms & Conditions</h1>
    <p className="mb-4">Please read our terms and conditions carefully.</p>
  </div>
);

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="contact" element={<Contact />} />
            <Route path="blog" element={<Blog />} />
            <Route path="cart" element={<Cart />} />
            <Route path="charity" element={<Charity />} />
            <Route path="terms" element={<Terms />} />
            
            {/* Resource Routes */}
            <Route path="resources">
              <Route index element={<ResourcesPage />} />
              
              {/* Website Resources */}
              <Route path="website">
                <Route index element={<WebsitePage />} />
                <Route path="web-design" element={<WebDesign />} />
                <Route path="development" element={<Development />} />
                <Route path="ecommerce" element={<Ecommerce />} />
                <Route path="maintenance" element={<Maintenance />} />
              </Route>
            </Route>
            
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;