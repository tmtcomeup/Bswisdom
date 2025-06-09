import React from 'react';
import { Link } from 'react-router-dom';

const ResourcesIndexSimple = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Resources</h1>
      <p className="mb-6">Welcome to our resources section.</p>
      
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Homework Resources</h2>
          <p className="text-gray-600 mb-4">Find help with your assignments and studies.</p>
          <Link to="/resources/homework" className="text-blue-600 hover:underline">Browse Homework Resources →</Link>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Legal Resources</h2>
          <p className="text-gray-600 mb-4">Legal research and document assistance.</p>
          <Link to="/resources/legal" className="text-blue-600 hover:underline">Browse Legal Resources →</Link>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Website Resources</h2>
          <p className="text-gray-600 mb-4">Website development resources.</p>
          <Link to="/resources/website" className="text-blue-600 hover:underline">Browse Website Resources →</Link>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Trading Resources</h2>
          <p className="text-gray-600 mb-4">Trading strategies and resources.</p>
          <Link to="/resources/trading" className="text-blue-600 hover:underline">Browse Trading Resources →</Link>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Resume Resources</h2>
          <p className="text-gray-600 mb-4">Resume writing and design resources.</p>
          <Link to="/resources/resume" className="text-blue-600 hover:underline">Browse Resume Resources →</Link>
        </div>
      </div>
    </div>
  );
};

export default ResourcesIndexSimple;
