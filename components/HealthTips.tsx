
import React from 'react';
import { Lightbulb, CheckCircle } from 'lucide-react';
import { TIPS } from '../constants';

const HealthTips: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center gap-3 mb-4">
        <div className="bg-[#FFC107]/20 p-2 rounded-lg">
          <Lightbulb className="w-6 h-6 text-[#FFC107]" />
        </div>
        <span className="text-[#FFC107] font-bold uppercase tracking-widest text-sm">Did You Know?</span>
      </div>
      
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12">
        Daily Health Tips for a Better You
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {TIPS.map((tip) => (
          <div key={tip.id} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-6">
                <span className="px-3 py-1 bg-slate-100 text-slate-500 rounded-full text-xs font-bold">
                  {tip.category}
                </span>
                <CheckCircle className="w-5 h-5 text-[#00BFA6]" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{tip.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {tip.content}
              </p>
            </div>
            <button className="mt-8 text-sm font-bold text-[#0072C6] hover:underline">
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthTips;
