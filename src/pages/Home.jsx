import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Shield, Users, Zap, CheckCircle, Lock, Flame } from 'lucide-react';
import ServiceCarousel from '../components/ServiceCarousel';
import FeatureCard from '../components/FeatureCard';

function Home() {
  console.log('Rendering Home component');
  return (
    <div className="flex flex-col min-h-screen">
      {/* Scarcity Banner */}
      <div className="bg-gradient-to-r from-orange-600 via-red-500 to-pink-600 text-white py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-2">
            <div className="relative">
              <Flame className="h-6 w-6 text-yellow-300 animate-pulse" />
              <Flame className="h-4 w-4 text-orange-400 absolute -top-1 -right-1 animate-pulse delay-100" />
            </div>
            <p className="text-sm sm:text-base font-bold">
              🔥 Limited Time: First 1 Million Clients Lock Current Prices Before 25% Increase!
            </p>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section 
        className="relative min-h-[600px] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1664575602276-acd073f104c1?auto=format&fit=crop&q=80&w=2000")'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/80"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Brilliant Strategic Wisdom
            </h1>
            <div className="bg-secondary-500/10 backdrop-blur-sm rounded-lg p-4 mb-4 inline-block">
              <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-secondary-300 via-secondary-200 to-secondary-300 bg-clip-text text-transparent animate-gradient">
                Take Control Today
              </p>
            </div>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-blue-50">
              The only service combining AI intelligence, human expertise, and our proprietary Quantum Strategy™ system - with guaranteed zero AI detection
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link
                to="/services"
                className="inline-block bg-gradient-to-r from-secondary-400 via-secondary-500 to-secondary-400 hover:from-secondary-500 hover:via-secondary-600 hover:to-secondary-500 text-white font-bold py-3 px-8 rounded-lg transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                View Our Services
              </Link>
              <div className="flex items-center text-secondary-300">
                <Lock className="h-5 w-5 mr-2" />
                <span className="text-sm">Bank-Level Security</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Triple-Power Advantage Section */}
      <section className="py-16 bg-gradient-to-br from-secondary-50 via-secondary-100 to-secondary-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              The Triple-Power Advantage
            </h2>
            <p className="text-xl text-gray-700">
              Our revolutionary three-pillar approach delivers unmatched results with zero AI detection
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Brain className="h-12 w-12 text-blue-600" />}
              title="Multi-AI Analysis"
              description="Imagine having not just one, but an army of 50-100 AI systems working in perfect harmony to craft your solution. It's like having a team of genius analysts working 24/7 to ensure absolute perfection. No stone left unturned, no detail overlooked - that's our guarantee!"
            />
            <FeatureCard
              icon={<Users className="h-12 w-12 text-secondary-600" />}
              title="Expert Review"
              description="But wait, there's more! Every solution passes through the expert eyes of 5-10 industry veterans. These aren't just any professionals - they're the cream of the crop, ensuring your deliverable isn't just good, it's exceptional. It's like having a dream team of industry leaders in your corner!"
            />
            <FeatureCard
              icon={<Zap className="h-12 w-12 text-green-600" />}
              title="Quantum Strategy™"
              description="Here's where the magic happens! Our exclusive Quantum Strategy™ system takes everything to the next level. It's the secret sauce that turns great into extraordinary. Think of it as your unfair advantage - a proprietary system that delivers results that will blow your mind!"
            />
          </div>
        </div>
      </section>

      {/* Why Our Approach Works Section */}
      <section className="bg-gradient-to-br from-green-800/10 via-green-700/5 to-green-800/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Our Approach Works</h2>
              <div className="space-y-4">
                <p className="text-gray-600">
                  While others rely on single AI systems or traditional methods, our triple-power approach combines the best of all worlds:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Brain className="h-5 w-5 text-primary-600 mr-2" />
                    <span>Multiple AI perspectives for comprehensive analysis</span>
                  </li>
                  <li className="flex items-center">
                    <Shield className="h-5 w-5 text-secondary-500 mr-2" />
                    <span>Human expertise for real-world validation</span>
                  </li>
                  <li className="flex items-center">
                    <Zap className="h-5 w-5 text-accent-500 mr-2" />
                    <span>Quantum Strategy™ for exponential results</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Guaranteed zero AI detection in all deliverables</span>
                  </li>
                  <li className="flex items-center">
                    <Lock className="h-5 w-5 text-blue-500 mr-2" />
                    <span>Bank-level security for all transactions</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
              <p className="text-gray-600 mb-6">
                Browse our comprehensive range of services and find the perfect solution for your needs.
              </p>
              <Link
                to="/services"
                className="inline-block bg-gradient-to-r from-secondary-400 via-secondary-500 to-secondary-400 hover:from-secondary-500 hover:via-secondary-600 hover:to-secondary-500 text-white font-bold py-3 px-6 rounded-lg transition duration-300 shadow-lg hover:shadow-xl"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Carousel Section */}
      <section className="bg-gradient-to-br from-secondary-50 via-secondary-100 to-secondary-200 py-16">
        <ServiceCarousel />
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Elevate Your Potential Today
          </h2>
          <p className="text-xl mb-8">
            Join thousands who've transformed their success with our triple-power approach
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/services"
              className="inline-block bg-gradient-to-r from-secondary-400 via-secondary-500 to-secondary-400 hover:from-secondary-500 hover:via-secondary-600 hover:to-secondary-500 text-white font-bold py-3 px-8 rounded-lg transition duration-300 shadow-lg hover:shadow-xl"
            >
              Browse Services
            </Link>
            <div className="bg-red-500/20 backdrop-blur-sm rounded-lg px-4 py-2">
              <p className="text-sm font-semibold">
                🔥 Limited Time: First 1 Million Clients Lock Current Prices
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;