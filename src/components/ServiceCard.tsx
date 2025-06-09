import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Zap } from 'lucide-react';
import type { Service } from '../types/service';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
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
          <h4 className="font-medium text-gray-900 mb-2">What's Included:</h4>
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
};

export default ServiceCard;