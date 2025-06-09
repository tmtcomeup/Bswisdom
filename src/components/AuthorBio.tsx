import React from 'react';
import { Brain, Award, Briefcase } from 'lucide-react';

const AuthorBio: React.FC = () => {
  return (
    <div>
      {/* Author Header */}
      <div className="flex items-center mb-6">
        <div className="h-16 w-16 rounded-full bg-gradient-to-br from-secondary-300 to-secondary-500 flex items-center justify-center shadow-lg">
          <Brain className="h-10 w-10 text-white" />
        </div>
        <div className="ml-4">
          <h3 className="text-2xl font-bold text-gray-900">Y.Wise Creator</h3>
          <p className="text-gray-600">Lead Content Strategist</p>
        </div>
      </div>
      
      <div className="space-y-6">
        <p className="text-gray-600">
          Our lead content strategist is a multidisciplinary expert with over 15 years of experience
          across multiple industries. Their unique perspective combines technical expertise with creative vision.
        </p>
        
        {/* Expertise Sections */}
        <div className="space-y-4">
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 shadow-md">
            <div className="flex items-center text-primary-600 mb-3">
              <Briefcase className="h-5 w-5 mr-2" />
              <h4 className="font-semibold">Core Expertise</h4>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></span>
                <span>Legal Research & Analysis</span>
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></span>
                <span>Business Strategy & Development</span>
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></span>
                <span>Academic Writing & Research</span>
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></span>
                <span>Professional Development</span>
              </li>
            </ul>
          </div>

          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 shadow-md">
            <div className="flex items-center text-secondary-600 mb-3">
              <Award className="h-5 w-5 mr-2" />
              <h4 className="font-semibold">Industry Expertise</h4>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-secondary-500 rounded-full mr-2"></span>
                <span>Sports Industry Management</span>
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-secondary-500 rounded-full mr-2"></span>
                <span>Beauty Industry Innovation</span>
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-secondary-500 rounded-full mr-2"></span>
                <span>Engineering Solutions</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-primary-600">15+</div>
            <div className="text-sm text-gray-600">Years Experience</div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-secondary-600">100+</div>
            <div className="text-sm text-gray-600">Articles Published</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorBio;