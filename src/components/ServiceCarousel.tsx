import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Clock, Zap } from 'lucide-react';
import { serviceCategories } from '../data/services';
import { Link } from 'react-router-dom';
import { Service } from '../types/service';

interface ServiceWithCategory extends Service {
  categoryName: string;
}

const ServiceCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef<number>();
  
  // Get all services from categories
  const allServices: ServiceWithCategory[] = serviceCategories.flatMap(category => 
    category.services.map(service => ({
      ...service,
      categoryName: category.name
    }))
  );

  const displayCount = 3;
  const totalSlides = Math.ceil(allServices.length / displayCount);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    timerRef.current = window.setInterval(nextSlide, 5000);
    
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [totalSlides]);

  const visibleServices = allServices.slice(
    currentIndex * displayCount,
    (currentIndex * displayCount) + displayCount
  );

  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Featured Services</h2>
      
      <div className="relative">
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-white rounded-full p-3 shadow-lg z-10 hover:bg-gray-50 transition-colors duration-200"
          aria-label="Previous services"
        >
          <ChevronLeft className="h-6 w-6 text-gray-600" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {visibleServices.map((service) => (
            <div 
              key={service.id} 
              className="bg-white rounded-lg shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 border border-gray-200"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-1">{service.title}</h3>
                  <p className="text-2xl font-bold text-secondary-300">
                    ${service.price.toFixed(2)}
                  </p>
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm text-primary-600 mb-2">{service.categoryName}</div>
                <p className="text-gray-600 mb-4 line-clamp-2">{service.description}</p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>Standard: {service.turnaround}</span>
                  </div>
                  {service.rush && (
                    <div className="flex items-center text-sm text-green-600">
                      <Zap className="h-4 w-4 mr-2" />
                      <span>Rush: {service.rush.timeframe} (+${service.rush.fee})</span>
                    </div>
                  )}
                </div>
                <Link
                  to={`/services/${service.id}`}
                  className="mt-4 block bg-secondary-500 hover:bg-secondary-600 text-white text-center font-bold py-2 px-4 rounded-lg transition duration-300"
                >
                  Get Started
                </Link>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-white rounded-full p-3 shadow-lg z-10 hover:bg-gray-50 transition-colors duration-200"
          aria-label="Next services"
        >
          <ChevronRight className="h-6 w-6 text-gray-600" />
        </button>
      </div>

      <div className="flex justify-center space-x-2 mt-8">
        {[...Array(totalSlides)].map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentIndex === index ? 'w-8 bg-primary-600' : 'w-2 bg-gray-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceCarousel;