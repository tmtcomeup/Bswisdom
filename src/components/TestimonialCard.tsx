import React from 'react';
import { Star } from 'lucide-react';
import { Testimonial } from '../types/testimonial';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center mb-4">
        {testimonial.avatar && (
          <img
            src={testimonial.avatar}
            alt={testimonial.clientName}
            className="w-12 h-12 rounded-full mr-4"
          />
        )}
        <div>
          <h3 className="font-bold text-gray-900">{testimonial.clientName}</h3>
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-600 mb-2">{testimonial.content}</p>
      <div className="flex items-center justify-between text-sm text-gray-500">
        <span>{new Date(testimonial.date).toLocaleDateString()}</span>
        {testimonial.verified && (
          <span className="text-green-600 font-medium">Verified Purchase</span>
        )}
      </div>
    </div>
  );
};

export default TestimonialCard;