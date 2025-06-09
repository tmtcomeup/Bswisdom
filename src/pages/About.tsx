import React from 'react';
import { Brain, Users, Zap, ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <div>
      {/* Hero Section with Background Image */}
      <div 
        className="relative h-80 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl font-bold mb-4">About BSwisdom</h1>
            <p className="text-xl max-w-2xl">
              Elevate Your Potential with our revolutionary triple-power approach
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Revolutionary Approach</h2>
          <p className="text-gray-600 mb-6">
            At BSwisdom, we've revolutionized professional services by combining three powerful elements: advanced AI systems, expert human oversight, and our proprietary Quantum Strategy™ technology.
          </p>
          <p className="text-gray-600">
            This unique triple-power approach ensures that every solution we deliver is not just comprehensive and data-driven, but enhanced by our exclusive methodology that sets us apart in the industry.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-4">
              <Brain className="h-8 w-8 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">AI-Powered Analysis</h2>
            </div>
            <p className="text-gray-600">
              Our multi-AI approach leverages 50-100 different AI systems, each analyzing your needs from unique perspectives to ensure comprehensive coverage and optimal solutions.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-4">
              <Users className="h-8 w-8 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Expert Oversight</h2>
            </div>
            <p className="text-gray-600">
              A team of 5-10 field professionals reviews and enhances AI-generated solutions, adding crucial real-world context and ensuring practical effectiveness.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-4">
              <Zap className="h-8 w-8 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Quantum Strategy™</h2>
            </div>
            <p className="text-gray-600">
              Our proprietary system synthesizes and amplifies the combined power of AI and human expertise, delivering results that transcend traditional methods.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-4">The Quantum Strategy™ Advantage</h2>
          <p className="mb-6">
            Our proprietary Quantum Strategy™ system is what truly sets us apart. It's not just about combining AI and human expertise – it's about transforming these inputs into something greater through our exclusive methodology.
          </p>
          <ul className="space-y-4">
            {[
              "Enhanced pattern recognition beyond traditional AI capabilities",
              "Proprietary synthesis algorithms for superior results",
              "Advanced optimization techniques unique to BSwisdom",
              "Exclusive methodologies developed through years of research"
            ].map((item, index) => (
              <li key={index} className="flex items-center">
                <ArrowRight className="h-5 w-5 mr-2" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;