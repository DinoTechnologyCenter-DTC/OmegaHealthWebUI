
import React from 'react';
// Added missing icon imports from lucide-react
import { Smartphone, CheckCircle2, Activity, Bell, Stethoscope, ShieldCheck } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] bg-[#00BFA6]/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 left-[-10%] w-[400px] h-[400px] bg-[#0072C6]/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Side */}
        <div className="space-y-8 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#00BFA6]/10 text-[#00BFA6] rounded-full text-xs font-bold uppercase tracking-wider">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00BFA6] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00BFA6]"></span>
            </span>
            Next-Gen Health Assistant
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight">
            Your Health, <span className="text-[#0072C6]">Smarter</span> & <span className="text-[#00BFA6]">Simpler</span>
          </h1>
          
          <p className="text-lg text-slate-600 leading-relaxed">
            Explore disease information, track your wellness, and stay healthy with Omega Health. The all-in-one companion for your family's medical needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-[#0072C6] text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-[#0072C6]/20 transition-all transform hover:-translate-y-1">
              Download App
            </button>
            <button className="bg-white text-[#0072C6] border-2 border-[#0072C6]/20 px-8 py-4 rounded-full font-bold text-lg hover:bg-[#0072C6]/5 transition-all">
              Learn More
            </button>
          </div>

          <div className="flex flex-wrap gap-6 pt-4">
            {['Trusted by 50k+ Users', '1k+ Certified Doctors', '24/7 Support'].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-slate-500 font-medium">
                <CheckCircle2 className="w-5 h-5 text-[#00BFA6]" />
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Visual Side */}
        <div className="relative flex justify-center items-center">
          {/* Main Phone Mockup */}
          <div className="relative z-10 w-[280px] h-[580px] bg-slate-900 rounded-[3rem] p-3 shadow-2xl border-4 border-slate-800">
            <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
              {/* App UI Placeholder */}
              <div className="bg-[#0072C6] p-6 text-white">
                <div className="flex justify-between items-center mb-6">
                  <div className="w-10 h-10 rounded-full bg-white/20" />
                  <div className="text-xs">Hi, Alex! 👋</div>
                </div>
                <div className="text-xl font-bold">Good Morning</div>
                <div className="text-xs opacity-80">Your health looks great today</div>
              </div>
              <div className="p-4 space-y-4">
                <div className="h-24 bg-slate-50 rounded-2xl border border-slate-100 p-3 flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#00BFA6]/20 rounded-xl flex items-center justify-center">
                    <Activity className="w-6 h-6 text-[#00BFA6]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold">Heart Rate</div>
                    <div className="text-lg font-black">72 BPM</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="h-20 bg-slate-50 rounded-2xl border border-slate-100 p-3">
                    <div className="text-[10px] text-slate-400">Steps</div>
                    <div className="font-bold">8,421</div>
                  </div>
                  <div className="h-20 bg-slate-50 rounded-2xl border border-slate-100 p-3">
                    <div className="text-[10px] text-slate-400">Sleep</div>
                    <div className="font-bold">7h 20m</div>
                  </div>
                </div>
                <div className="h-32 bg-[#FFC107]/10 rounded-2xl border border-[#FFC107]/20 p-4">
                   <div className="flex items-center gap-2 mb-2">
                    <Bell className="w-4 h-4 text-[#FFC107]" />
                    <span className="text-[10px] font-bold uppercase text-[#FFC107]">Reminders</span>
                   </div>
                   <div className="text-sm font-medium">Evening Vitamin C</div>
                   <div className="text-xs text-slate-400">Due in 2 hours</div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Accents */}
          <div className="absolute -top-10 -right-4 w-20 h-20 bg-[#FFC107] rounded-2xl rotate-12 -z-0 opacity-50 blur-xl animate-pulse" />
          <div className="absolute top-1/2 -left-12 p-4 bg-white rounded-2xl shadow-xl flex items-center gap-3 animate-bounce" style={{ animationDuration: '3s' }}>
            <div className="p-2 bg-[#00BFA6]/10 rounded-lg text-[#00BFA6]">
              <Stethoscope className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-bold">Top Doctor Found</div>
              <div className="text-[10px] text-slate-400">Near Central Park</div>
            </div>
          </div>
          <div className="absolute bottom-20 -right-8 p-4 bg-white rounded-2xl shadow-xl flex items-center gap-3 animate-bounce" style={{ animationDuration: '4s' }}>
             <ShieldCheck className="w-6 h-6 text-[#0072C6]" />
             <span className="text-xs font-bold">Encrypted Data</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;