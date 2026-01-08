
import React from 'react';
import { FEATURES } from '../constants';

const Features: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          All-in-One Health Platform
        </h2>
        <p className="text-slate-600">
          Everything you need to manage your medical records, lifestyle, and healthcare appointments in one secure and easy-to-use application.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {FEATURES.map((feature) => (
          <div 
            key={feature.id}
            className="group bg-white p-8 rounded-3xl border border-slate-100 hover:border-[#00BFA6]/20 hover:shadow-xl hover:shadow-[#00BFA6]/5 transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="bg-[#F9F9F9] w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#00BFA6]/10 transition-colors">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#0072C6] transition-colors">
              {feature.title}
            </h3>
            <p className="text-slate-600 leading-relaxed">
              {feature.description}
            </p>
            <div className="mt-6 flex items-center text-[#0072C6] font-bold text-sm cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity">
              Learn more →
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
