import React from 'react';
import { Link } from 'react-router-dom';

const MathSciencesSimple = () => {
  const topics = [
    {
      title: 'Mathematics',
      subjects: [
        'Algebra & Trigonometry',
        'Calculus & Analysis',
        'Statistics & Probability',
        'Geometry & Topology',
        'Linear Algebra',
        'Number Theory'
      ]
    },
    {
      title: 'Physics',
      subjects: [
        'Classical Mechanics',
        'Thermodynamics',
        'Electromagnetics',
        'Quantum Physics',
        'Optics',
        'Nuclear Physics'
      ]
    },
    {
      title: 'Chemistry',
      subjects: [
        'Organic Chemistry',
        'Inorganic Chemistry',
        'Physical Chemistry',
        'Analytical Chemistry',
        'Biochemistry',
        'Chemical Kinetics'
      ]
    },
    {
      title: 'Computer Science',
      subjects: [
        'Algorithms & Data Structures',
        'Programming Languages',
        'Database Systems',
        'Computer Networks',
        'Operating Systems',
        'Machine Learning'
      ]
    }
  ];

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Mathematics & Sciences Resources</h1>
      <p className="mb-6">Find help with mathematics, physics, chemistry, and computer science.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {topics.map((topic, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-3">{topic.title}</h2>
            <ul className="space-y-2">
              {topic.subjects.map((subject, subjectIndex) => (
                <li key={subjectIndex} className="text-gray-700">
                  • {subject}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      <div className="mt-8 bg-blue-50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Need Help With STEM Subjects?</h3>
        <p className="mb-4">Our expert tutors can help you master complex topics in mathematics and sciences.</p>
        <Link to="/contact" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
          Get Expert Help
        </Link>
      </div>
    </div>
  );
};

export default MathSciencesSimple;
