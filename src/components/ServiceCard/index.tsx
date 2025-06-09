import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { Service } from '../../types/service';
import { TieredPricingSticker } from './TieredPricingSticker';
import { ServiceFeatures } from './ServiceFeatures';
import { DeliveryInfo } from './DeliveryInfo';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden relative">
      {service.specialOffer && <TieredPricingSticker specialOffer={service.specialOffer} />}
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

        <ServiceFeatures features={service.features} />
        <DeliveryInfo turnaround={service.turnaround} rush={service.rush} />

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