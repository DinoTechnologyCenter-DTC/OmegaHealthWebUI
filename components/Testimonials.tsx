
import React from 'react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-slate-900">What Our Community Says</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {TESTIMONIALS.map((t) => (
          <div key={t.id} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm relative group">
            <div className="absolute top-8 right-8 text-[#00BFA6]/20">
              <Quote className="w-12 h-12" />
            </div>
            <p className="text-lg text-slate-600 mb-8 italic relative z-10">
              "{t.quote}"
            </p>
            <div className="flex items-center gap-4">
              <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-full border-2 border-[#00BFA6]/20" />
              <div>
                <h4 className="font-bold text-slate-900">{t.name}</h4>
                <p className="text-sm text-slate-400">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
