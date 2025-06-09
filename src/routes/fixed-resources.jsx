import React from 'react';
import ResourcesIndexSimple from '../pages/resources/ResourcesIndexSimple';

// Use the simple resources index page component
const ResourcesIndexPage = ResourcesIndexSimple;

const HomeworkPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Homework Resources</h1>
      <p>Find help with your assignments and studies.</p>
    </div>
  );
};

const LegalResourcesPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Legal Resources</h1>
      <p>Legal research and document assistance.</p>
    </div>
  );
};

const WebsitePage = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Website Resources</h1>
      <p>Website development resources.</p>
    </div>
  );
};

const TradingPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Trading Resources</h1>
      <p>Trading strategies and resources.</p>
    </div>
  );
};

const ResumeIndex = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Resume Resources</h1>
      <p>Resume writing and design resources.</p>
    </div>
  );
};

const MathSciencesPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Math & Sciences</h1>
      <p>Mathematics and science homework resources.</p>
    </div>
  );
};

const ExamStrategiesPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Exam Strategies Guide</h1>
      <p>Tips and strategies for exam preparation and success.</p>
    </div>
  );
};

// Import simplified components
import MathSciencesSimple from '../pages/resources/homework/MathSciencesSimple';
import ExamStrategiesSimple from '../pages/resources/homework/guides/ExamStrategiesSimple';

// Define nested resource routes structure
export const resourceRoutes = [
  { index: true, element: <ResourcesIndexPage /> },
  { 
    path: 'homework',
    children: [
      { index: true, element: <HomeworkPage /> },
      { path: 'math-sciences', element: <MathSciencesSimple /> },
      { 
        path: 'guides',
        children: [
          { path: 'exam-strategies', element: <ExamStrategiesSimple /> }
        ]
      },
    ]
  },
  { path: 'legal', element: <LegalResourcesPage /> },
  { path: 'website', element: <WebsitePage /> },
  { path: 'trading', element: <TradingPage /> },
  { path: 'resume', element: <ResumeIndex /> },
];
