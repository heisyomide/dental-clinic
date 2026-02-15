import React from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
        <Navbar />
      {/* --- HERO SECTION: The "Dantoa" Identity --- */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[120px] -mr-64 -mt-64 opacity-60" />
        
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-6">
              <span className="w-2 h-2 bg-[#00a3c8] rounded-full animate-pulse" />
              <span className="text-[#1e4b8a] text-[10px] font-black uppercase tracking-widest">
                Osogbo's Premier Dental Hub
              </span>
            </div>
            <h1 className="text-[#1e4b8a] text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter mb-8">
              PRECISION <br /> 
              <span className="text-[#00a3c8]">DENTISTRY</span> <br />
              REDEFINED.
            </h1>
            <p className="text-slate-500 text-lg font-medium leading-relaxed max-w-lg mb-10">
              Crystal Specialist Care combines advanced medical technology with a patient-first 
              approach. We don't just treat teeth; we restore confidence through expert surgery 
              and aesthetic precision.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/book" className="bg-[#1e4b8a] text-white px-10 py-6 rounded-3xl font-black uppercase text-xs tracking-[0.2em] shadow-2xl hover:bg-[#00a3c8] transition-all transform hover:-translate-y-1">
                Book Specialist
              </Link>
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-slate-200 overflow-hidden" />
                ))}
                <div className="flex items-center pl-6 text-xs font-black text-[#1e4b8a] uppercase tracking-tighter">
                  Joined by 12k+ Patients
                </div>
              </div>
            </div>
          </div>

          {/* Abstract Showcase */}
          <div className="relative group">
            <div className="absolute inset-0 bg-[#00a3c8] rounded-[80px] rotate-3 scale-105 opacity-10 group-hover:rotate-0 transition-transform duration-700" />
            <div className="aspect-[4/5] bg-slate-100 rounded-[80px] border-8 border-white shadow-2xl overflow-hidden relative">
               <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#1e4b8a] to-[#00a3c8]">
                  <h2 className="text-white font-black text-9xl opacity-10 italic select-none">
Crystal Specialist</h2>
               </div>
               {/* Content Overlay */}
               <div className="absolute bottom-10 left-10 right-10 bg-white/90 backdrop-blur-md p-8 rounded-[40px] border border-white/20">
                  <p className="text-[#1e4b8a] font-black text-xl mb-1">Dr. S. Adebayo</p>
                  <p className="text-[#00a3c8] text-[10px] font-bold uppercase tracking-widest underline underline-offset-4">Chief Oral Surgeon</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- THE PROCESS: Why the 50% Deposit? --- */}
      <section className="py-24 bg-[#1e4b8a] text-white rounded-[60px] md:rounded-[100px] mx-4 md:mx-10 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/20 to-transparent" />
        
        <div className="container mx-auto px-10 relative z-10">
          <div className="max-w-2xl mb-20">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-6">
              Our Seamless <br /> <span className="text-[#00a3c8]">Patient Journey</span>
            </h2>
            <p className="text-blue-100/60 font-medium">We’ve built a dashboard-integrated system to ensure your appointment is guaranteed and your specialist is prepared before you arrive.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { step: "01", title: "Digital Intake", desc: "Fill out your medical history and select your specialist service online." },
              { step: "02", title: "Secure Slot", desc: "Commit with a 50% deposit. This locks your time-slot in our internal dashboard." },
              { step: "03", title: "Expert Review", desc: "Our specialists review your case details 24hrs before your arrival." }
            ].map((item, idx) => (
              <div key={idx} className="group cursor-default">
                <div className="text-6xl font-black text-[#00a3c8]/20 group-hover:text-[#00a3c8] transition-colors mb-4">{item.step}</div>
                <h4 className="text-xl font-black uppercase mb-4">{item.title}</h4>
                <p className="text-blue-100/50 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SERVICES GRID --- */}
      <section className="py-32 px-6 container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <h2 className="text-[#1e4b8a] text-4xl font-black uppercase tracking-tighter">
            Specialist <br /> Departments
          </h2>
          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest max-w-xs text-right">
            Fixed pricing for transparent care. No hidden charges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: "Orthodontics", price: "₦200,000", icon: "🦷" },
            { name: "Dental Implants", price: "₦150,000", icon: "🛠️" },
            { name: "Oral Surgery", price: "₦50,000", icon: "💉" },
            { name: "General Checkup", price: "₦10,000", icon: "✨" }
          ].map((s, i) => (
            <div key={i} className="p-8 rounded-[40px] bg-slate-50 border border-transparent hover:border-[#00a3c8] hover:bg-white hover:shadow-2xl transition-all group">
              <div className="text-4xl mb-6">{s.icon}</div>
              <h5 className="text-[#1e4b8a] font-black uppercase text-sm mb-2">{s.name}</h5>
              <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-6">Starting from</p>
              <div className="text-2xl font-black text-[#1e4b8a] group-hover:text-[#00a3c8] transition-colors">{s.price}</div>
            </div>
          ))}
        </div>
        
      </section>
      <Footer />
    </main>
  );
}