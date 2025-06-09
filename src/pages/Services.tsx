import React from 'react';
import { Link } from 'react-router-dom';
import { serviceCategories } from '../data/services';
import { Clock, CheckCircle, Zap, Scale, AlertCircle, Flame, ArrowRight } from 'lucide-react';
import type { Service } from '../types/service';
import ErrorBoundary from '../components/ErrorBoundary';

const FeaturedServiceCard = ({ service, className = '' }: { service: Service; className?: string }) => {
  const getGradientClass = () => {
    if (service.id === 'website-creation') {
      return 'from-blue-600 to-blue-800';
    }
    return className || 'from-blue-600 to-blue-800';
  };

  return (
    <div className={`bg-gradient-to-br ${getGradientClass()} text-white rounded-lg shadow-2xl p-8 mb-12 relative overflow-hidden`}>
      <div className="absolute top-0 right-0 bg-red-500 text-white px-4 py-1 rounded-bl-lg">
        Featured Service
      </div>
      
      <div className="flex flex-col md:flex-row items-start gap-8">
        <div className="flex-1">
          <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
          <p className="text-xl text-blue-100 mb-6">
            {service.description}
          </p>
          
          <div className="bg-white/10 rounded-lg p-6 mb-6">
            <h4 className="font-semibold mb-4">Perfect For:</h4>
            <ul className="space-y-3">
              {service.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <div className="flex items-center text-blue-100">
              <Clock className="h-5 w-5 mr-2" />
              <span>Standard Delivery: {service.turnaround}</span>
            </div>
            {service.rush && (
              <div className="flex items-center text-green-400">
                <Zap className="h-5 w-5 mr-2" />
                <span>Rush Delivery Available: {service.rush.timeframe} (+${service.rush.fee})</span>
              </div>
            )}
          </div>
        </div>

        <div className="w-full md:w-auto text-center">
          {service.specialOffer?.type === 'tiered' ? (
            <div className="bg-white/10 rounded-lg p-6 mb-4">
              <div className="text-center mb-4">
                <Flame className="h-8 w-8 text-yellow-300 mx-auto mb-2" />
                <p className="text-lg font-bold">Limited Time Pricing!</p>
              </div>
              {service.specialOffer.tiers.map((tier, index) => (
                <div key={index} className="mb-3 last:mb-0">
                  <div className="bg-white/10 rounded-lg p-3">
                    <p className="font-bold text-xl">${tier.price.toFixed(2)}</p>
                    <p className="text-sm text-blue-200">{tier.label}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white/10 rounded-lg p-6 mb-4">
              <p className="text-4xl font-bold">${service.price.toFixed(2)}</p>
              <p className="text-sm text-blue-200">One-time fee</p>
            </div>
          )}
          <Link
            to={`/services/${service.id}`}
            className="block w-full bg-white text-blue-600 hover:bg-blue-50 font-bold py-3 px-6 rounded-lg transition duration-300"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

const ServiceCard = ({ service }: { service: Service }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden relative">
    {service.specialOffer?.type === 'tiered' && (
      <div className="absolute top-0 right-0 z-10">
        <div className="bg-gradient-to-r from-orange-600 via-red-500 to-pink-600 text-white px-4 py-2 rounded-bl-lg shadow-lg">
          <p className="font-bold">🔥 Limited Time Pricing!</p>
        </div>
      </div>
    )}
    <div className="h-48 overflow-hidden">
      <img
        src={service.imageUrl}
        alt={service.title}
        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
      <p className="text-3xl font-bold text-blue-600 mb-4">
        Starting at ${service.price.toFixed(2)}
      </p>
      <p className="text-gray-600 mb-4">{service.description}</p>

      <div className="bg-gray-50 rounded-lg p-4 mb-4">
        <h4 className="font-medium text-gray-900 mb-2">Perfect For:</h4>
        <ul className="space-y-2">
          {service.features.map((feature, index) => (
            <li key={index} className="flex items-start text-sm text-gray-600">
              <span className="text-green-500 mr-2">✓</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-3 mb-4">
        <div className="flex items-center text-sm text-gray-600">
          <Clock className="h-4 w-4 mr-2" />
          <span>Standard Delivery: {service.turnaround}</span>
        </div>
        {service.rush && (
          <div className="flex items-center text-sm text-green-600">
            <Zap className="h-4 w-4 mr-2" />
            <span>Rush Delivery Available: {service.rush.timeframe} (+${service.rush.fee})</span>
          </div>
        )}
      </div>

      <div className="text-sm text-green-600 mb-4">✓ Zero AI Detection Guaranteed</div>

      <div className="flex space-x-3">
        <Link
          to={`/services/${service.id}`}
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
        >
          Get Started
        </Link>
        <Link
          to={`/services/${service.id}`}
          className="flex items-center justify-center px-4 py-2 border border-blue-600 text-blue-600 hover:bg-blue-50 rounded transition duration-300"
        >
          Learn More <ArrowRight className="h-4 w-4 ml-2" />
        </Link>
      </div>
    </div>
  </div>
);

const Services = () => {
  // Get featured services
  const topFeaturedService = serviceCategories
    .flatMap(category => category.services)
    .find(service => service.id === 'legal-motion');

  const bottomFeaturedService = serviceCategories
    .flatMap(category => category.services)
    .find(service => service.id === 'website-creation');

  // Get all other services
  const regularServices = serviceCategories
    .flatMap(category => category.services)
    .filter(service => !service.featured);

  return (
    <ErrorBoundary>
      <div>
        {/* Hero Section */}
        <div 
          className="relative h-80 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="text-white">
              <h1 className="text-4xl font-bold mb-4">Our Services</h1>
              <p className="text-xl max-w-2xl">
                Professional services powered by collective AI intelligence and human expertise - with zero AI detection
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-12 text-center">
            <p className="text-red-800 font-semibold">🔥 Limited Time Offer: First 1 Million Clients Only</p>
            <p className="text-sm text-red-600">Lock in current prices before they increase by 25%</p>
          </div>

          {/* Top Featured Service */}
          {topFeaturedService && (
            <FeaturedServiceCard 
              service={topFeaturedService} 
              className="from-blue-600 to-blue-800"
            />
          )}

          {/* Regular Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {regularServices.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          {/* Bottom Featured Service */}
          {bottomFeaturedService && (
            <FeaturedServiceCard 
              service={bottomFeaturedService} 
              className="from-blue-600 to-blue-800"
            />
          )}

          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-4">Need a custom service? Contact us for specialized solutions.</p>
            <Link
              to="/contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default Services;