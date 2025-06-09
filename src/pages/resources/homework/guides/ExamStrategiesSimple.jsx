import React from 'react';
import { Link } from 'react-router-dom';

const ExamStrategiesSimple = () => {
  const strategies = [
    {
      title: 'Pre-Exam Preparation',
      tips: [
        'Create a study schedule',
        'Review past exams',
        'Identify key topics',
        'Practice problem-solving'
      ]
    },
    {
      title: 'Time Management',
      tips: [
        'Read instructions carefully',
        'Allocate time per section',
        'Leave time for review',
        'Prioritize questions'
      ]
    },
    {
      title: 'Answer Strategies',
      tips: [
        'Outline essays before writing',
        'Show all work in calculations',
        'Use process of elimination',
        'Double-check answers'
      ]
    },
    {
      title: 'Mental Preparation',
      tips: [
        'Practice relaxation techniques',
        'Get adequate rest',
        'Stay positive',
        'Maintain focus'
      ]
    }
  ];

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Exam Strategies</h1>
      <p className="mb-6">Effective strategies to improve exam performance and reduce test anxiety.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {strategies.map((strategy, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-3">{strategy.title}</h2>
            <ul className="space-y-2">
              {strategy.tips.map((tip, tipIndex) => (
                <li key={tipIndex} className="flex items-center">
                  <span className="mr-2 text-blue-600">✓</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      <div className="bg-blue-50 p-6 rounded-lg mb-6">
        <h3 className="text-lg font-semibold mb-2">Need Exam Preparation Help?</h3>
        <p className="mb-4">Get expert guidance to improve your exam performance.</p>
        <Link to="/contact" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default ExamStrategiesSimple;
