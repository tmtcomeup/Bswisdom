import React from 'react';

// Create placeholder components for main resource sections
const ResourcesIndexPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Resources</h1>
      <p>Welcome to our resources section.</p>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Homework Resources</h2>
          <p className="text-gray-600 mb-4">Find help with your assignments and studies.</p>
          <a href="/resources/homework" className="text-blue-600 hover:underline">Browse Homework Resources →</a>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Legal Resources</h2>
          <p className="text-gray-600 mb-4">Legal research and document assistance.</p>
          <a href="/resources/legal" className="text-blue-600 hover:underline">Browse Legal Resources →</a>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Website Resources</h2>
          <p className="text-gray-600 mb-4">Website development resources.</p>
          <a href="/resources/website" className="text-blue-600 hover:underline">Browse Website Resources →</a>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Trading Resources</h2>
          <p className="text-gray-600 mb-4">Trading strategies and resources.</p>
          <a href="/resources/trading" className="text-blue-600 hover:underline">Browse Trading Resources →</a>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Resume Resources</h2>
          <p className="text-gray-600 mb-4">Resume writing and design resources.</p>
          <a href="/resources/resume" className="text-blue-600 hover:underline">Browse Resume Resources →</a>
        </div>
      </div>
    </div>
  );
};

const HomeworkPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Homework Resources</h1>
      <p className="mb-6">Find help with your assignments and studies.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <a href="/resources/homework/math-sciences" className="block p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-lg font-semibold">Math & Sciences</h2>
          <p className="text-gray-600">Get help with mathematics and science subjects</p>
        </a>
        <a href="/resources/homework/literature-reviews" className="block p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-lg font-semibold">Literature Reviews</h2>
          <p className="text-gray-600">Help with literature analysis and reviews</p>
        </a>
        <a href="/resources/homework/social-sciences" className="block p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-lg font-semibold">Social Sciences</h2>
          <p className="text-gray-600">Resources for social science subjects</p>
        </a>
        <a href="/resources/homework/guides/exam-strategies" className="block p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-lg font-semibold">Exam Strategies Guide</h2>
          <p className="text-gray-600">Tips and strategies for exam success</p>
        </a>
      </div>
    </div>
  );
};

const LegalResourcesPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Legal Resources</h1>
      <p className="mb-6">Legal research and document assistance.</p>
    </div>
  );
};

const WebsitePage = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Website Resources</h1>
      <p className="mb-6">Website development resources.</p>
    </div>
  );
};

const TradingPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Trading Resources</h1>
      <p className="mb-6">Trading strategies and resources.</p>
    </div>
  );
};

const ResumeIndex = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Resume Resources</h1>
      <p className="mb-6">Resume writing and design resources.</p>
    </div>
  );
};

// Import actual page components where available
import MathSciences from '@/pages/resources/homework/math-sciences';
import HomeworkLiteratureReviews from '@/pages/resources/homework/literature-reviews';
import SocialSciences from '@/pages/resources/homework/social-sciences';
import ExamStrategies from '@/pages/resources/homework/guides/exam-strategies';

import Contracts from '@/pages/resources/legal/contracts';
import CivilLaw from '@/pages/resources/legal/civil-law';
import CriminalLaw from '@/pages/resources/legal/criminal-law';
import LegalResearch from '@/pages/resources/legal/legal-research';

// Define export routes structure for resources
export const resourceRoutes = [
  { index: true, element: <ResourcesIndexPage /> },
  { 
    path: 'homework',
    children: [
      { index: true, element: <HomeworkPage /> },
      { path: 'math-sciences', element: <MathSciences /> },
      { path: 'literature-reviews', element: <HomeworkLiteratureReviews /> },
      { path: 'social-sciences', element: <SocialSciences /> },
      { 
        path: 'guides',
        children: [
          { path: 'exam-strategies', element: <ExamStrategies /> },
          // Add more guides as needed
        ]
      },
    ]
  },
  { 
    path: 'legal',
    children: [
      { index: true, element: <LegalResourcesPage /> },
      { path: 'contracts', element: <Contracts /> },
      { path: 'civil-law', element: <CivilLaw /> },
      { path: 'criminal-law', element: <CriminalLaw /> },
      { path: 'legal-research', element: <LegalResearch /> },
    ]
  },
  { path: 'website', element: <WebsitePage /> },
  { path: 'trading', element: <TradingPage /> },
  { path: 'resume', element: <ResumeIndex /> },
];
