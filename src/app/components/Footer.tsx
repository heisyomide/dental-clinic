"use client";
import React from 'react';
import Link from 'next/link'; // Import Link

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-24 pb-12 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          
          {/* Brand Column */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-black uppercase tracking-tighter mb-6">
              Crystal <br/> <span className="text-[#00a3c8]">Specialist</span>
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed font-medium">
              Providing world-class oral health solutions and specialist dental care in Osogbo. Trusted by 5,000+ patients.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#00a3c8] text-[10px] font-black uppercase tracking-widest mb-8">Specialist Services</h4>
            <ul className="space-y-4 text-sm font-bold text-slate-300">
              <li className="hover:text-white cursor-pointer tracking-tight">Dental Implants</li>
              <li className="hover:text-white cursor-pointer tracking-tight">Orthodontics</li>
              <li className="hover:text-white cursor-pointer tracking-tight">Oral Surgery</li>
              <li className="hover:text-white cursor-pointer tracking-tight">Teeth Whitening</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-[#00a3c8] text-[10px] font-black uppercase tracking-widest mb-8">Contact Us</h4>
            <ul className="space-y-4 text-sm font-bold text-slate-300">
              <li>+234 803 353 1025</li>
              <li>info@crystaldental.com</li>
              <li>Old Garage, Osogbo, Osun</li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="text-[#00a3c8] text-[10px] font-black uppercase tracking-widest mb-8">Clinical Hours</h4>
            <ul className="space-y-4 text-sm font-bold text-slate-300">
              <li className="flex justify-between"><span>Mon - Sat</span> <span>8:00 - 18:00</span></li>
              <li className="flex justify-between text-[#00a3c8]"><span>Sunday</span> <span>Closed</span></li>
              <li className="pt-4 text-xs text-slate-500 uppercase italic">Emergency 24/7 Support</li>
            </ul>
          </div>

        </div>

        <div className="pt-12 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* TAP HERE TO GO TO PASSCODE PAGE */}
          <Link 
            href="/admin/gate" 
            className="text-slate-500 text-[10px] font-bold uppercase tracking-widest hover:text-[#00a3c8] transition-colors cursor-default select-none"
          >
            ©️ 2026 Crystal Specialist Dental Clinic. All Rights Reserved.
          </Link>
          
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-slate-500">
             <span className="hover:text-white cursor-pointer">Privacy Policy</span>
             <span className="hover:text-white cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}