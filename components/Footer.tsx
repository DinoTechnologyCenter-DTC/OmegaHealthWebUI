
import React from 'react';
import { Heart, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-slate-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
          <div className="col-span-2 lg:col-span-2 space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-[#0072C6] p-2 rounded-lg">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-slate-900">Omega Health</span>
            </div>
            <p className="text-slate-500 max-w-sm leading-relaxed">
              Making healthcare accessible, understandable, and manageable for everyone. Your trusted digital health partner since 2024.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-[#0072C6] hover:text-white transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-[#0072C6]">About Us</a></li>
              <li><a href="#" className="hover:text-[#0072C6]">Our Mission</a></li>
              <li><a href="#" className="hover:text-[#0072C6]">Careers</a></li>
              <li><a href="#" className="hover:text-[#0072C6]">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Support</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-[#0072C6]">Help Center</a></li>
              <li><a href="#" className="hover:text-[#0072C6]">FAQ</a></li>
              <li><a href="#" className="hover:text-[#0072C6]">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#0072C6]">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Newsletter</h4>
            <p className="text-xs text-slate-400 mb-4">Subscribe for latest health tips and updates.</p>
            <form className="space-y-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full bg-slate-50 border border-slate-100 px-4 py-2.5 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0072C6]/20"
              />
              <button className="w-full bg-[#00BFA6] text-white py-2.5 rounded-xl text-sm font-bold shadow-sm hover:shadow-md transition-shadow">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p>© 2026 Omega Health. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#0072C6]">Privacy Policy</a>
            <a href="#" className="hover:text-[#0072C6]">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
