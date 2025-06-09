import React from 'react';
import { Link } from 'react-router-dom';
import { Film, ArrowRight, PenTool, MessageSquare, Play, Edit } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';

const ScriptWritingPage: React.FC = () => {
  const services = [
    {
      id: 'screenplay-writing',
      title: 'Screenplay Writing',
      icon: <Film className="w-6 h-6 text-primary-600" />,
      description: 'Professional screenplay writing services for film and television projects.'
    },
    {
      id: 'script-formatting',
      title: 'Script Formatting',
      icon: <Edit className="w-6 h-6 text-primary-600" />,
      description: 'Industry-standard formatting and layout for all types of scripts.'
    },
    {
      id: 'dialogue-writing',
      title: 'Dialogue Writing',
      icon: <MessageSquare className="w-6 h-6 text-primary-600" />,
      description: 'Crafting authentic, engaging dialogue for characters.'
    },
    {
      id: 'script-revision',
      title: 'Script Revision',
      icon: <PenTool className="w-6 h-6 text-primary-600" />,
      description: 'Professional script editing and revision services.'
    }
  ];

  const topics = [
    {
      title: 'Script Development',
      icon: <Film className="w-6 h-6 text-primary-600 mb-4" />,
      content: 'Core elements of professional script development:',
      items: [
        'Story Structure & Plot',
        'Character Arc Development',
        'Scene Construction',
        'Visual Storytelling',
        'Theme Integration'
      ]
    },
    {
      title: 'Dialogue Crafting',
      icon: <MessageSquare className="w-6 h-6 text-primary-600 mb-4" />,
      content: 'Essential dialogue writing techniques:',
      items: [
        'Character Voice',
        'Subtext & Tension',
        'Natural Conversation',
        'Pacing & Rhythm',
        'Emotional Impact'
      ]
    },
    {
      title: 'Technical Writing',
      icon: <Edit className="w-6 h-6 text-primary-600 mb-4" />,
      content: 'Industry-standard script formatting:',
      items: [
        'Scene Headers',
        'Action Descriptions',
        'Character Cues',
        'Transition Elements',
        'Production Notes'
      ]
    },
    {
      title: 'Production Elements',
      icon: <Play className="w-6 h-6 text-primary-600 mb-4" />,
      content: 'Key production considerations:',
      items: [
        'Scene Transitions',
        'Shot Descriptions',
        'Sound Elements',
        'Visual Effects Notes',
        'Production Guidelines'
      ]
    }
  ];

  return (
    <ResourceLayout
      title="Script Writing Services"
      description="Professional script writing services for movies, TV shows, podcasts, and more."
    >
      <div className="space-y-12">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {topics.map((section, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              {section.icon}
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                {section.title}
              </h2>
              <p className="text-gray-600 mb-4">{section.content}</p>
              <ul className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-primary-600 mr-2 mt-0.5" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Services Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Our Script Writing Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col h-full">
                  {service.icon}
                  <h3 className="font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm flex-grow">{service.description}</p>
                  <Link
                    to="/contact"
                    className="mt-4 inline-flex items-center text-primary-600 hover:text-primary-700"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-primary-50 rounded-lg p-8">
          <div className="flex items-center justify-between">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">
                Ready to Bring Your Script to Life?
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl">
                Our professional script writing team can help you develop, format, and polish your script to industry standards.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
            <Film className="w-24 h-24 text-primary-600 hidden lg:block" />
          </div>
        </div>
      </div>
    </ResourceLayout>
  );
};

export default ScriptWritingPage;