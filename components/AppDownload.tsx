
import React from 'react';
import { Apple, Play } from 'lucide-react';

const AppDownload: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="bg-[#0072C6] rounded-[3rem] overflow-hidden relative">
        {/* Background blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />

        <div className="grid md:grid-cols-2 gap-12 items-center p-8 md:p-16">
          <div className="space-y-8 relative z-10 text-white">
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Get Alpha Health <br /> App Now
            </h2>
            <p className="text-white/80 text-lg leading-relaxed max-w-md">
              Available for free on all major platforms. Download now to start your journey towards a healthier life.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-slate-900 px-6 py-3 rounded-2xl flex items-center gap-3 font-bold hover:bg-slate-50 transition-colors shadow-lg">
                <Play className="w-6 h-6 fill-slate-900" />
                <div className="text-left leading-tight">
                  <div className="text-[10px] uppercase font-bold text-slate-400">Get it on</div>
                  <div className="text-lg">Google Play</div>
                </div>
              </button>
              <button className="bg-slate-900 text-white px-6 py-3 rounded-2xl flex items-center gap-3 font-bold hover:bg-slate-800 transition-colors shadow-lg border border-white/10">
                <Apple className="w-6 h-6 fill-white" />
                <div className="text-left leading-tight">
                  <div className="text-[10px] uppercase font-bold text-white/50">Download on</div>
                  <div className="text-lg">App Store</div>
                </div>
              </button>
            </div>
          </div>

          <div className="relative h-80 md:h-[500px] flex justify-center">
            <img 
              src="https://picsum.photos/seed/mobile-app/800/1200" 
              alt="App Screen"
              className="absolute bottom-0 w-[240px] md:w-[320px] rounded-t-[2rem] shadow-2xl border-x-[8px] border-t-[8px] border-slate-900"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDownload;
