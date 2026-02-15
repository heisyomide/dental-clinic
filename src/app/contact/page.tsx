"use client";
import React from 'react';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-24">
        <div className="container mx-auto px-6">
          
          {/* Header Section */}
          <div className="max-w-3xl mb-16">
            <span className="text-[#00a3c8] text-[10px] font-black uppercase tracking-[0.4em]">Direct Communication</span>
            <h1 className="text-[#1e4b8a] text-5xl md:text-7xl font-black uppercase tracking-tighter mt-4 leading-none">
              Reach Our <br /> <span className="text-[#00a3c8]">Specialists</span>
            </h1>
            <p className="text-slate-500 mt-8 text-lg font-medium leading-relaxed">
              Whether you're inquiring about a 50% deposit, specialized surgery, or orthodontics, our team is ready to assist.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            
            {/* LEFT: CONTACT FORM */}
            <div className="bg-slate-50 rounded-[60px] p-10 md:p-14 border border-slate-100">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <InputGroup label="Full Name" placeholder="Tola Sam" />
                  <InputGroup label="Phone Number" placeholder="+234..." />
                </div>
                <InputGroup label="Email Address" placeholder="femi@example.com" />
                
                <div>
                  <label className="text-[#1e4b8a] text-[10px] font-black uppercase tracking-widest mb-3 block">Service Interest</label>
                  <select className="w-full bg-white border-2 border-slate-100 rounded-2xl p-5 font-bold text-sm text-slate-700 outline-none focus:border-[#00a3c8] transition-all appearance-none">
                    <option>Orthodontics</option>
                    <option>Oral Surgery</option>
                    <option>Dental Implants</option>
                    <option>General Consultation</option>
                  </select>
                </div>

                <div>
                  <label className="text-[#1e4b8a] text-[10px] font-black uppercase tracking-widest mb-3 block">How can we help?</label>
                  <textarea 
                    rows={4} 
                    placeholder="Describe your dental concerns..."
                    className="w-full bg-white border-2 border-slate-100 rounded-3xl p-6 font-bold text-sm text-slate-700 outline-none focus:border-[#00a3c8] transition-all resize-none"
                  />
                </div>

                <button className="w-full bg-[#1e4b8a] text-white py-6 rounded-3xl font-black uppercase text-[11px] tracking-widest hover:bg-[#00a3c8] transition-all shadow-xl shadow-blue-900/10">
                  Send Inquiry
                </button>
              </form>
            </div>

            {/* RIGHT: CONTACT INFO & CHANNELS */}
            <div className="flex flex-col justify-center space-y-12">
              
              <ContactBlock 
                icon="📞" 
                label="Emergency Hotlines" 
                value="+234 803 353 1025" 
                sub="Available 24/7 for urgent surgical cases"
              />

              <ContactBlock 
                icon="✉️" 
                label="Clinical Support" 
                value="info@crystaldental.com" 
                sub="Expect a response within 2 working hours"
              />

              <ContactBlock 
                icon="📍" 
                label="Physical Center" 
                value="Shop A42, Omoluabi Shopping Plaza" 
                sub="Old Garage, Osogbo, Osun State"
              />

              {/* Specialist Hours Card */}
              <div className="bg-[#1e4b8a] p-10 rounded-[50px] text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                   <span className="text-6xl font-black italic italic uppercase">Hub</span>
                </div>
                <h4 className="font-black uppercase text-xs tracking-widest mb-6">Consultation Hours</h4>
                <ul className="space-y-4 text-xs font-bold">
                  <li className="flex justify-between border-b border-white/10 pb-2"><span>Monday - Saturday</span> <span>08:00 - 18:00</span></li>
                  <li className="flex justify-between text-[#00a3c8]"><span>Sunday</span> <span>Closed (Emergency Only)</span></li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

// Sub-components
const InputGroup = ({ label, placeholder }: { label: string, placeholder: string }) => (
  <div className="flex-1">
    <label className="text-[#1e4b8a] text-[10px] font-black uppercase tracking-widest mb-3 block">{label}</label>
    <input 
      type="text" 
      placeholder={placeholder}
      className="w-full bg-white border-2 border-slate-100 rounded-2xl p-5 font-bold text-sm text-slate-700 outline-none focus:border-[#00a3c8] transition-all"
    />
  </div>
);

const ContactBlock = ({ icon, label, value, sub }: { icon: string, label: string, value: string, sub: string }) => (
  <div className="flex gap-6 items-start group">
    <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-2xl group-hover:bg-[#00a3c8] group-hover:scale-110 transition-all duration-500">
      {icon}
    </div>
    <div>
      <p className="text-[#00a3c8] text-[9px] font-black uppercase tracking-widest mb-1">{label}</p>
      <p className="text-[#1e4b8a] text-2xl font-black uppercase tracking-tighter leading-none mb-2">{value}</p>
      <p className="text-slate-400 text-xs font-medium">{sub}</p>
    </div>
  </div>
);