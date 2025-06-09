import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Clock, CheckCircle, ArrowLeft, DollarSign, AlertCircle } from 'lucide-react';
import { serviceCategories } from '../data/services';
import TestimonialCard from '../components/TestimonialCard';
import { testimonials } from '../data/testimonials';
import ServiceRequestForm from '../components/ServiceRequestForm';

const ServiceDetail: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const [showRequestForm, setShowRequestForm] = useState(false);
  
  const service = serviceCategories
    .flatMap(category => category.services)
    .find(s => s.id === serviceId);

  if (!service) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Service not found</h1>
          <Link to="/services" className="text-blue-600 hover:text-blue-700">
            Return to Services
          </Link>
        </div>
      </div>
    );
  }

  const serviceTestimonials = testimonials.filter(t => t.serviceId === serviceId);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <Link
        to="/services"
        className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Services
      </Link>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <img
            src={service.imageUrl}
            alt={service.title}
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>

        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{service.title}</h1>
          <div className="flex items-center mb-6">
            <DollarSign className="h-6 w-6 text-blue-600 mr-2" />
            <span className="text-3xl font-bold text-blue-600">
              ${service.price.toFixed(2)}
            </span>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <div className="flex items-center mb-4">
              <Clock className="h-5 w-5 text-gray-600 mr-2" />
              <span className="text-gray-600">
                Standard Turnaround: {service.turnaround}
              </span>
            </div>
            {service.rush && (
              <div className="bg-blue-50 rounded p-4">
                <p className="font-semibold text-blue-900">
                  Rush Service Available: {service.rush.timeframe}
                </p>
                <p className="text-blue-700">
                  Additional fee: ${service.rush.fee?.toFixed(2)}
                </p>
              </div>
            )}
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What's Included</h2>
            <ul className="space-y-3">
              {service.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {!showRequestForm ? (
            <button
              onClick={() => setShowRequestForm(true)}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 mb-4"
            >
              Get Started
            </button>
          ) : (
            <ServiceRequestForm
              service={service}
              onCancel={() => setShowRequestForm(false)}
            />
          )}

          <div className="mt-4 text-sm text-gray-500 text-center">
            By proceeding, you agree to our{' '}
            <Link to="/terms" className="text-blue-600 hover:text-blue-700">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>

      {serviceTestimonials.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Client Testimonials</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceTestimonials.map(testimonial => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceDetail;