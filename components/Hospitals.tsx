
import React from 'react';
import { Star, MapPin, ChevronRight } from 'lucide-react';
import { DOCTORS } from '../constants';

const Hospitals: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Meet Our Top Specialists
          </h2>
          <p className="text-slate-600">
            Consult with highly qualified medical professionals across various specialties, available for both in-person and digital consultations.
          </p>
        </div>
        <button className="flex items-center gap-2 text-[#0072C6] font-bold hover:gap-3 transition-all">
          View All Doctors <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {DOCTORS.map((doctor) => (
          <div key={doctor.id} className="bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
            <div className="relative h-64 overflow-hidden">
              <img 
                src={doctor.image} 
                alt={doctor.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1 text-sm font-bold shadow-sm">
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                {doctor.rating}
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 text-white">
                <p className="text-xs font-bold uppercase tracking-widest opacity-80">{doctor.specialty}</p>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-2">{doctor.name}</h3>
              <div className="flex items-center gap-2 text-slate-500 text-sm mb-6">
                <MapPin className="w-4 h-4" />
                {doctor.distance}
              </div>
              <button className="w-full py-3 rounded-2xl bg-[#00BFA6]/10 text-[#00BFA6] font-bold hover:bg-[#00BFA6] hover:text-white transition-all">
                Book Appointment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hospitals;
